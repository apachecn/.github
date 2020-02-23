var cheerio = require('cheerio')
var request = require('sync-request')

// $$('a').filter(x => x.href.includes('issue'))
//     .map(x => x.href).join('",\r\n"')
var toMonitor = [
    "https://github.com/apachecn/stanford-game-theory-notes-zh/issues/1",
    "https://github.com/apachecn/stanford-cs234-notes-zh/issues/1",
    "https://github.com/apachecn/calc4b-zh/issues/1",
    "https://github.com/apachecn/uiuc-cs241-notes-zh/issues/1",
    "https://github.com/apachecn/cython-doc-zh/issues/1",
    "https://github.com/apachecn/numba-doc-zh/issues/1",
    "https://github.com/apachecn/scrapy-doc-zh/issues/1",
    "https://github.com/apachecn/stanford-cs224n-notes-zh/issues/1",
    "https://github.com/apachecn/ml-mastery-zh/issues/1",
    "https://github.com/apachecn/misc-docs-zh/issues/1",
    "https://github.com/apachecn/impatient-js-zh/issues/1",
    "https://github.com/apachecn/git-doc-zh/issues/1",
    "https://github.com/apachecn/hbase-doc-zh/issues/1",
    "https://github.com/apachecn/pytorch-doc-zh/issues/422",
    "https://github.com/apachecn/prob140-textbook-zh/issues/2",
    "https://github.com/apachecn/ml-book-100-zh/issues/1",
    "https://github.com/apachecn/cs61b-textbook-zh/issues/1",
    "https://github.com/apachecn/sklearn-doc-zh/issues/352",
]

function jqObjMap($obj, f) {
    
    var res = []
    
    for(var i = 0; i < $obj.length; i++) {
        res.push(f($obj.eq(i)))
    }
    return res
}

function getProcess(html) {
    
    var $ = cheerio.load(html)
    var $table = $('td.markdown-body table').eq(0)
    var $contri = $table.find('td:nth-last-of-type(2)')
    var $proc = $table.find('td:nth-last-of-type(1)')
    var contri = jqObjMap($contri, x => x.text()).filter(x => x != '-')
    var proc = jqObjMap($proc, x => x.text()).filter(x => x != '-')
    var assigned = contri.filter(x => x).length
    var completed = proc.filter(x => x).length
    
    return [contri.length, assigned, completed]
}

for(var url of toMonitor) {
    var repo = /apachecn\/(.+?)\//.exec(url)[1]
    var html = request('GET', url).body.toString()
    var [total, assigned, completed] = getProcess(html)
    
    console.log(repo, `${assigned}/${total}`, `${completed}/${total}`)
}