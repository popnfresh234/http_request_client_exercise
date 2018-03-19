function getAndPrintHTML (options) {

  var https = require('https');
  var buffer = '';

  https.get(options, function(response){
    response.setEncoding('utf8');
    response.on('data', function (data){
      buffer = buffer + data + "\n";
    });

    response.on('end', function(){
      console.log('Results: ', buffer);
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);