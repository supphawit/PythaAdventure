var express = require('express')
var app = express()
var serv = require('http').Server(app)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/index.html')

});

app.use('/client', express.static(__dirname + '/client'))

serv.listen(2000)

app.get('/write', (req, res) => {
  var fs = require('fs')
  fs.writeFile("./script/" + req.query.namefile + ".py", req.query.python, function (err) {
    if (err) {
      return console.log(err)
    }
    res.redirect("/run?file=" + req.query.namefile );
  })
});

app.get('/run',(req, res) => {
  const { spawn } = require('child_process');

  const  process = spawn('python',["./script/" + req.query.file + ".py"] );

  process.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
  res.send(data.toString())
  });
  
  process.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
    res.send(data.toString())
  });

  process.on('close', (code) => {
    if (code != 0){
      console.log(`child process exited with code ${code}`);

    }
  });
});