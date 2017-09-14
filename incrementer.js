const level = require('level')
const db = level('increment.db', { valueEncoding: 'json' })

db.get('count', function(err, value) {
  let num = (value || 0) + 1
  db.put('count', num, function (err) {
    if (err) console.error(err)
    else console.log(num)
  })
})
