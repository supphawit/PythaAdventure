const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// var cmd=require('node-cm d');

app.use(bodyParser())

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')

});

app.get('/ep2', function (req, res) {
  res.sendFile(__dirname + '/client/ep2.html')

});
app.use('/client', express.static(__dirname + '/client'))

app.listen(2000, () => {
  console.log('Start server at port 2000.')
})

// app.get('/write', (req, res) => {
//   var fs = require('fs')
//   // var encoded = encodeURI(req.query.python);
//   fs.writeFile("./script/" + req.query.namefile + ".py", req.query.python, function (err) {
//     if (err) {
//       return console.log(err)
//     }
//     res.redirect("/run?file=" + req.query.namefile );
//   })
// });

app.post('/write-post', function (req, res) {
  var fs = require('fs')
  console.log(req.body)
  // var uri_enc = encodeURIComponent(req.body.python);
  // var uri_dec = decodeURIComponent(uri_enc);

  fs.writeFile("./script/" + req.body.namefile + ".py", req.body.python, function (err) {
    if (err) {
      return console.log(err)
    }
    res.redirect("/run?file=" + req.body.namefile);
  })
  // res.end(JSON.stringify(res.body))
})

app.get('/run', (req, res) => {
  
  // const processRef=cmd.get('python');
  // let data_line = '';
   
  // //listen to the python terminal output
  // processRef.stdout.on(
  //   'data',
  //   function(data) {
  //     data_line += data;
  //     if (data_line[data_line.length-1] == '\n') {
  //       console.log(data_line);
  //     }
  //   }
  // );
   
  // const pythonTerminalInput=`print ("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW")`;
   
  // //show what we are doing
  // console.log(`${pythonTerminalInput}`);

  // processRef.stdin.write(pythonTerminalInput)
  
  // console.log(processRef.stdout)

  const {
    spawn
  } = require('child_process');

  const process = spawn('python', ["./script/" + req.query.file + ".py"]);

  process.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    res.send(data.toString())
  });

  process.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
    res.send(data.toString())
  });

  process.on('close', (code) => {
    if (code != 0) {
      console.log(`child process exited with code ${code}`);

    }
  });

});