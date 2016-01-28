exports.parseStats = function(JSONarray, showName){
    return JSONarray.filter(function(team){ return team.Rk != 'Rk'}).map(function(year){
        var newYear = {}, ignored = ['Rk', 'Team', 'GP'], notDivi = ['PP%', 'PK%', 'S%', 'SV%'];
        newYear.input = Object.keys(year).reduce(function(agg, key){
            if(ignored.indexOf(key) === -1){
                if(notDivi.indexOf(key) === -1){
                    agg.push((year[key]/year.GP)*82);
                }else{
                  agg.push(year[key]);
                }
            }

            return agg;
        }, []);
        if(!showName){
            newYear.output = [0];
            if(year.Team.slice(-1) === '*'){
                newYear.output = [1];
            }
        }else{
            newYear.output = year.Team;
        }

        return newYear;
    })
};
