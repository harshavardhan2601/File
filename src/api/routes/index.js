var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function randomString(length) {
  chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
  return result;
}

router.post('/uploadfiles', function (req, res) {
  var data = req.body;
  // console.log(data);
  console.log('file--------');
  try {
    fileId = randomString(10);
    if (data.filetype == 'image/jpeg') fileId = '/uploads/' + fileId + ".jpeg";
    if (data.filetype == 'image/jpg') fileId = '/uploads/' + fileId + ".jpg";
    if (data.filetype == 'image/png') fileId = '/uploads/' + fileId + ".png";
    fs.writeFile('public/' + fileId, new Buffer(data.base64, "base64"), function (err) {
      if (err) {
        console.log(err);
        var res_data = { status: 0, message: 'error while uploading' };
      } else {
        var res_data = { status: 1, message: 'Uploaded Successfully', filename:fileId, savedpath:'http://localhost:3000'+ fileId };
        console.log(res_data);
        res.json(res_data);
      }
    });
  } catch (e) {
    console.log("Error ==" + e);
  }

});

router.post('/unlinkFile', function (req, res, next) {
  console.log(req.body.file);
  const path = req.body.filename
  fs.unlink('public/' + path, (err) => {
    console.log(path)
    // if (err) {
    //   console.error(err)
    //   return
    // } else {
    //   console.log('File Deleted');
    // }
    //file removed
  })
});


router.post('/add',function (req,res,next) {
  console.log(req.body);
  var reqs = req.body
  var obj = {
    image: reqs.file
  }
  mongoose.model('file').create(obj, function (err,fileobj) {
    if (err) {
      console.log(err)
    } else {
      console.log(fileobj)
      res.json('successfully');
    }
  })
})


router.post('/signdata', function (req,res,next) {
  var reqs = req.body;
  console.log(reqs);
})

module.exports = router;
