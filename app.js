const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const session = require('express-session')

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

const mongoose = require('mongoose')

app.use('/client', express.static(__dirname + '/client'))

app.use(bodyParser())
app.use(cookieParser())
app.use(session({
  secret: 'Somsri Secret!!',
  resave: false,
  saveUninitialized: true
}))


app.listen(2000, () => {
  console.log('Start server at port 2000.')
})

mongoose.connect('mongodb://localhost:27017/pythaAdventure')

var chapter_schema = new mongoose.Schema({
  lesson: String,
  point: String,
  pass: Boolean,
});

var user_Schema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  imageURL: {
    type: String,
    required: true,
  },
  chapter: [chapter_schema],
  score_pre_test: {
    type: String
  },
  score_post_test: {
    type: String
  },
  point: {
    type: String
  },
  achievement: {
    type: String
  }
})

var user_model = mongoose.model('users', user_Schema)
module.exports = user_model

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
  req.session.test = 1
})

app.get('/login', function (req, res) {
  res.sendFile(__dirname + '/client/login.html')

})

app.get('/pre_test', function (req, res) {
  res.sendFile(__dirname + '/client/pre_test.html')

})

app.get('/checkTest', function (req, res) {
  var userData = localStorage.getItem('userData')
  if (userData) {
    var userJSON = JSON.parse(userData);
    if (userJSON.score_pre_test == "0") {
      res.redirect('/pre_test')
    } else {
      // res.sendFile(__dirname + '/client/lesson_1.html')
      res.redirect('/lesson_1')
    }
  }

})

app.get('/run', (req, res) => {
  const {
    spawn
  } = require('child_process')

  const process = spawn('python', ["./script/" + req.query.file + ".py"])

  process.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
    res.send(data.toString())
  })

  process.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`)
    res.send(data.toString())
  })

  process.on('close', (code) => {
    if (code != 0) {
      console.log(`child process exited with code ${code}`)

    }
  })

})

app.get('/getUser', function (req, res) {
  res.send(localStorage.getItem('userData'))
});

app.get('/logout', function (req, res) {
  localStorage.clear()
  res.redirect("/")
});

// app.get('/write', (req, res) => {
//   var fs = require('fs')
//   // var encoded = encodeURI(req.query.python)
//   fs.writeFile("./script/" + req.query.namefile + ".py", req.query.python, function (err) {
//     if (err) {
//       return console.log(err)
//     }
//     res.redirect("/run?file=" + req.query.namefile )
//   })
// })

app.post('/createUser', function (req, res) {

  user_model.findOne({
    email: req.body.email
  }, function (err, user) {
    if (err) {
      return res.status(500).send()
    }

    if (!user) {

      var chapterData = [{
        lesson: "1",
        point: "0",
        pass: false,
      }, {
        lesson: "2",
        point: "0",
        pass: false,
      }, {
        lesson: "3",
        point: "0",
        pass: false,
      }]

      var userData = {
        name: req.body.name,
        email: req.body.email,
        imageURL: req.body.imageURL,
        chapter: chapterData,
        score_pre_test: "0",
        score_post_test: "0",
        point: "0",
        achievement: "",
      }

      user_model.create(userData, function (err, doc) {
        console.log("Create user Success")
      })
      res.status(200).send()

    } else {
      console.log("User " + user.name + " sign in")
      localStorage.setItem('userData', JSON.stringify(user));
      res.status(200).send()

      // req.session.user = user
      // res.cookie('user', '5555');
      // console.log('Cookies: ', req.cookies);
      // return res.status(200).send("findOne is OK!!")
    }
  })

})

app.post('/updateDB', function (req, res) {

  var userData = localStorage.getItem('userData')
  var userJSON = JSON.parse(userData);

  console.log(userJSON.email)

  var new_data = req.body.updateData
  console.log(new_data)
  user_model.updateOne({
    email: userJSON.email
  }, new_data, function (err, raw) {
    if (err) {
      res.send(err);
    }
    // res.send(raw);
    console.log("UPDATE Success")
  });

})

app.post('/updateLesson', function (req, res) {

  var userData = localStorage.getItem('userData')
  var userJSON = JSON.parse(userData);

  console.log(userJSON.email)

  var new_data = req.body.chapter
  console.log(new_data)
  user_model.findOneAndUpdate({
      "email": userJSON.email,
      "chapter.lesson": new_data.lesson
    }, {
      "$set": {
        "chapter.$.point": new_data.point,
        "chapter.$.pass": new_data.pass
      }
    },
    function (err, doc) {
      if (err) return

      console.log("update lesson")
    }
  );

})

app.post('/isLogin', function (req, res) {
  var userData = localStorage.getItem('userData')
  var userJSON = JSON.parse(userData);
  // console.log(userJSON);

  return res.status(200).send(userJSON)
})

app.post('/write-post', function (req, res) {
  var fs = require('fs')
  console.log(req.body)
  // var uri_enc = encodeURIComponent(req.body.python)
  // var uri_dec = decodeURIComponent(uri_enc)

  fs.writeFile("./script/" + req.body.namefile + ".py", req.body.python, function (err) {
    if (err) {
      return console.log(err)
    }
    res.redirect("/run?file=" + req.body.namefile)
  })
  // res.end(JSON.stringify(res.body))
})

app.get('/lesson_1', function (req, res) {
  res.sendFile(__dirname + '/client/lesson_1.html')

})

app.get('/lesson_2', function (req, res) {
  res.sendFile(__dirname + '/client/lesson_2.html')

})