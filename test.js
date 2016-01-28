var fs = require('fs'),
    __ = require('lodash'),
    synaptic = require('synaptic'),
    Converter = require('csvtojson').Converter,
    JSONparse = require('./arrayParse');

var net = synaptic.Network.fromJSON(JSON.parse(fs.readFileSync('./Network_Jsons/14_7_1__.json'))), converter = new Converter({}), testAr = [];

converter.on('end_parsed', function(JSONarray){
    testAr = JSONparse.parseStats(JSONarray);
});

converter.fromFile("./test.csv", function(err, result){

});

setTimeout(function(){
    var results = { total: 0, correct: 0 };
    testAr.forEach(function(year){
        /*results.total = results.total + 1;
        if(year.output[0] === net.activate(year.input)[0]){
            results.correct = results.correct + 1;
        }else if(year.output[0] === 1 && net.activate(year.input)[0] > 1){
            results.correct = results.correct + 1;
        }*/

        if(year.output[0] === 1){
            results.total = results.total + 1;
            if(net.activate(year.input)[0] >= 1){
                results.correct = results.correct + 1;
            }
        }
    });

    console.log(results);
}, 2000);
