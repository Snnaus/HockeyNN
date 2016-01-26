var fs = require('fs'),
    __ = require('lodash'),
    synaptic = require('synaptic'),
    Converter = require('csvtojson').Converter,
    JSONparse = require('./arrayParse');

    var converter = new Converter({}), net = new synaptic.Architect.LSTM(14,8,1), teamAr = [];
    converter.on('end_parsed', function(JSONarray){
      teamAr = JSONparse.parseStats(JSONarray);
    });

    converter.fromFile("./trainer.csv", function(err, result){

});


var params = { iterations: 500000 };

setTimeout(function(){
    console.log(net.trainer.train(teamAr, params))
    fs.writeFile('14_8_1_5x_.json', JSON.stringify(net.toJSON()), function(err){
      if(err){
          console.log(err);
      }else{
          console.log("The File was saved");
      }
  });
}, 3000);
