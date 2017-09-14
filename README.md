# Front End Masters: leveldb & Crypto

[Course](https://frontendmasters.com/live-event/leveldb-cryptography/)
[leveldb docs](https://github.com/Level/levelup/blob/master/README.mdtou)

#### Min setup
```js
const level = require('level')
const db = level('./whatever.db')
```
level will use `whatever.db` if present, if not present will create db directory

#### Value Encoding
```js
const level = require('level')
const db = level('./whatever.db', {valueEncoding:'json'})
```
encodes values in json instead of binary.

### What is leveldb good for?
* running the same db in node & browser
* when data isn't particularly relational
* building my own kappa architecture

#### level methods
* `db.get()`
* `db.put()`
* `db.del()`
* `db.batch()`
* `db.createReadStream()`
