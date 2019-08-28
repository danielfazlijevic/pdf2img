const path = require('path');
const glob = require("glob")
const pdf = require('pdf-poppler');

const input_path = 'C:\\Users\\Daniel\\Downloads\\primehome\\'

const getDirectories = function (callback) {
    glob(input_path + '/**/*.pdf', callback);
};

getDirectories((err, files) => {
    if (err) {
        console.log('Error', err);
    } else {
        for(const file of files){

            let opts = {
                format: 'jpg',
                out_dir: path.dirname(file),
                out_prefix: path.basename(file, path.extname(file)),
                page: null
            }
            
            pdf.convert(file, opts)
            .then(res => {
                console.log(`Successfully converted ${file}`);
            })
            .catch(error => {
                console.error(error);
            })
        }
    }
});