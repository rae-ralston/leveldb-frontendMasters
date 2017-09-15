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

#### atomicity
you want all transactions to succeed or all transations to fail
Suppose a user has just signed up.
We might to create a record for their information and a record for their login username and password. You don't want a user to be only partially created if it falls apart.

batch solves this problem by letting you group actions.
```js
db.batch([
  {"key": "foo", "value": "123"},
  {"key": "bar", "value": "456"}
], err => console.error(err))
```
