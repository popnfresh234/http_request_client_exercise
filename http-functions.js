function getHTML (options, callback) {
  var https = require('https');
  var buffer = '';

  https.get(options, function(response){
    response.setEncoding('utf8');
    response.on('data', function (data){
      buffer = buffer + data + "\n";
    });

    response.on('end', function(){
      callback(buffer);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

module.exports = {getHTML: getHTML, printHTML: printHTML};