const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const session = require("express-session");

const PORT = process.env.PORT || 5000

app.use('/client', express.static(__dirname + '/client'))

app.use(bodyParser())

app.listen(PORT, () => {
  console.log('Start server.')
})

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: "pytha",
})

con.connect(function (err) {
  if (err) throw err
  console.log('Connected Success!')
})

app.use(session({ secret: 'somsristupid' }));

app.get('/', function (req, res) {
  if (req.session.email) {
    // res.sendFile(__dirname + '/client/pre_test.html')
    res.redirect('/pre_test')
  } else {
    res.sendFile(__dirname + '/index.html')
  }

})

app.get('/getUser', function (req, res) {

  var data = {
    email: req.session.email,
    name: req.session.name,
    imgURL: req.session.imgURL,
    pre: req.session.pre,
    post: req.session.post,
  }
  res.send(data)

})

app.get('/refreshUser', function (req, res) {

  var authUser = "SELECT * FROM users where email = '" + req.session.email + "'"

  con.query(authUser, function (err, row) {
    if (err) throw err;

    data = {
      email: row[0].email,
      name: row[0].name,
      imgURL: row[0].imgURL,
      pre: row[0].pre_test_score,
      post: row[0].post_test_score,
    }
    res.send(data)

  })
})

app.get('/getLesson', function (req, res) {

  var lesson = "SELECT * FROM lesson where email_user = '" + req.session.email + "'"

  var dataArray = []
  con.query(lesson, function (err, row) {
    if (err) throw err;

    for (l in row){
      // console.log( row[l] )
      dataArray.push(row[l].lesson_level)
    } 
    // console.log(dataArray)
    res.send(dataArray)
  }) 

})

app.get('/getItem', function (req, res) {

  var lesson = "SELECT * FROM inventory where email_user = '" + req.session.email + "'"

  var dataArray = []
  con.query(lesson, function (err, row) {
    if (err) throw err;

    for (l in row){
      // console.log( row[l] )
      dataArray.push(row[l])
    } 
    // console.log(dataArray)
    res.send(dataArray)
  }) 

})

app.get('/signout', function (req, res) {
  console.log("Sign out")
  req.session.destroy()
  res.redirect('/')
})


app.post('/googleSign', function (req, res) {

  var getUser = "SELECT * FROM users where email = '" + req.body.email + "'"

  con.query(getUser, function (err, row) {
    // console.log("found: " + row)
    if (err) throw err;

    if (row && row.length) {

      req.session.name = row[0].name
      req.session.email = row[0].email
      req.session.imgURL = row[0].imgURL
      req.session.pre = row[0].pre_test_score
      req.session.post = row[0].post_test_score
      res.end('done')

    } else {

      var sql = "INSERT INTO users (email, name, imgURL, pre_test_score, post_test_score) VALUES ?"
      var values = [
        [
          req.body.email,
          req.body.name,
          req.body.imgURL,
          0,
          0,
        ]
      ]

      con.query(sql, [values], function (err, row) {
        if (err) throw err
      })

      con.query(getUser, function (err, row) {
        if (err) throw err;

        req.session.name = row[0].name
        req.session.email = row[0].email
        req.session.imgURL = row[0].imgURL
        req.session.pre = row[0].pre_test_score
        req.session.post = row[0].post_test_score
        res.end('done')
      })
    }

  })

}) 


app.post('/updateByQuery', function (req, res) {

  var query = req.body.query
  con.query(query, function (err, row) {
    if (err) throw err;
  })

})

app.post('/updateQuestionScore', function (req, res) {

  var preScore = req.body.score_pre_test
  console.log("from /updateDB: " + preScore)
  var updateSCore = "UPDATE users SET pre_test_score=" + preScore + " WHERE email = '" + req.session.email + "'"

  con.query(updateSCore, function (err, row) {
    if (err) throw err;
  })

})
app.get('/randomQuestion', function (req, res) {

  var preScore = req.body.score_pre_test
  console.log("from /updateDB: " + preScore)
  var getQuestion = "SELECT * from questions"

  con.query(getQuestion, function (err, row) {
    if (err) throw err;
    res.send(row)
  })

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

app.post('/write-post', function (req, res) {
  var fs = require('fs')
  console.log(req.body)

  fs.writeFile("./script/" + req.body.namefile + ".py", req.body.python, function (err) {
    if (err) {
      return console.log(err)
    }
    res.redirect("/run?file=" + req.body.namefile)
  })
  // res.end(JSON.stringify(res.body))
})

app.get('/pre_test', function (req, res) {

  var authUser = "SELECT * FROM users where email = '" + req.session.email + "'"

  con.query(authUser, function (err, row) {
    if (err) throw err;

    if (row[0].pre_test_score == 0) {
      res.sendFile(__dirname + '/client/pre_test.html')
    } else {
      res.redirect('/lesson')
    }

  })

})

app.get('/profile', function (req, res) {
  if (req.session.email) {
    res.sendFile(__dirname + '/client/profile.html')
  } else {
    res.redirect('/')
  }
})


app.get('/lesson', function (req, res) {
  if (req.session.email && req.session.pre == 0) {
    res.redirect('/')
  } else {
    res.sendFile(__dirname + '/client/lesson.html')
  }
})
 

app.get('/lesson_1', function (req, res) {
  if (req.session.email && req.session.pre != 0) {
    res.sendFile(__dirname + '/client/lesson_1.html')
  } else {
    res.redirect('/')
  }
})

app.get('/lesson_2', function (req, res) {
  if (req.session.email && req.session.pre != 0) {
    res.sendFile(__dirname + '/client/lesson_2.html')
  } else {
    res.redirect('/')
  }

})

app.get('/lesson_3', function (req, res) {
  if (req.session.email && req.session.pre != 0) {
    res.sendFile(__dirname + '/client/lesson_3.html')
  } else {
    res.redirect('/')
  }
})

app.get('/lesson_4', function (req, res) {
  if (req.session.email && req.session.pre != 0) {
    res.sendFile(__dirname + '/client/lesson_4.html')
  } else {
    res.redirect('/')
  }
})

app.get('/lesson_5', function (req, res) {
  if (req.session.email && req.session.pre != 0) {
    res.sendFile(__dirname + '/client/lesson_5.html')
  } else {
    res.redirect('/')
  }
})

app.get('/story_1', function (req, res) {
  if (req.session.email && req.session.pre != 0) {
    res.sendFile(__dirname + '/client/story_1.html')
  } else {
    res.redirect('/')
  }
})