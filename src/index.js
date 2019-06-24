const showdown  = require('showdown')
const fs = require('fs')

const converter = new showdown.Converter()
const data = fs.readFileSync('./src/index.md', { encoding: 'utf8' });
const template = fs.readFileSync('./src/template.html', { encoding: 'utf8' });
const temp = template.split('<body>')
const _data = converter.makeHtml(data)
const html = `${temp[0]}<body>${_data}${temp[1]}`
fs.exists('./dist', e => {
  console.log('e', e)
  if (e) {
    deleteall('./dist')
  }
  fs.mkdirSync('./dist')
  fs.writeFileSync('./dist/index.html', html, { encoding: 'utf8' })
  console.log('qwe')
})

function deleteall(path) {
	var files = [];
	if(fs.existsSync(path)) {
		files = fs.readdirSync(path);
		files.forEach(function(file, index) {
			var curPath = path + "/" + file;
			if(fs.statSync(curPath).isDirectory()) { // recurse
				deleteall(curPath);
			} else { // delete file
				fs.unlinkSync(curPath);
			}
		});
		fs.rmdirSync(path);
	}
};