const User = require('./userInfo');

function insert() {
    let user = new User({
        username: 'Speedy Lee',
        userpwd: 'qweewq',
        userage: 24,
        logindate: new Date()
    });

    user.save((err, res) => {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            console.log(`Res: ${res}`);
        }
    })
}

function update(){
    var wherestr = {'username' : 'Speedy Lee'};
    var updatestr = {'userpwd': 'qweqwe'};
    
    User.updateOne(wherestr, updatestr, (err, res) => {
        if (err) {
            console.log(`Error: ${err}`);
        }
        else {
            console.log(`Res: ${res}`);
        }
    })
}

function findByIdAndUpdate(){
    var id = '5c3085534995a1bcbd793a06';
    var updatestr = {'userpwd': 'wsy'};
    
    User.findByIdAndUpdate(id, updatestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

function del(){
    var wherestr = {'username' : 'SPeedy Lee'};
    
    User.remove(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

insert();