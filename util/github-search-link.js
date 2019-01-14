var fs = require('fs')

var fname = process.argv[2] || 'tree.md'
if(!fname.endsWith('.md')) {
    console.log('请选择 Markdown 文件')
    process.exit()
}
var re = /\+   .+?$/gm
var seUrl = 'https://github.com/search?l=Markdown&q=org%3Aapachecn+{kw}&type=Code'

var co = fs.readFileSync(fname, 'utf-8')
co = co.replace(re, s => {
    var kw = s.slice(4)
    if(kw.startsWith('['))
        return s
    var enco = encodeURIComponent(kw).replace(/%2F/g, '%20')
    var link = seUrl.replace('{kw}', enco)
    return `+   [${kw}](${link})`
})
fs.writeFileSync(fname, co)
console.log('done..')

