const fs = require('fs');
var dir = './cloned-repos';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const { execSync } = require("child_process");

execSync("git clone https://github.com/PracticaDS/pdes-tp-backend-buggysoft cloned-repos/pdes-tp-backend-buggysoft")
execSync("git clone https://github.com/PracticaDS/pdes-tp-buggysoft cloned-repos/pdes-tp-buggysoft")
