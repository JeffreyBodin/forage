const forest = require('./lib/forest');

(async () => {
  forest.connectDB()
  await forest.connectIPFS();

  // < 1mb working npm
  // manager = 'npm'
  // name = '@babel/code-frame'
  // version = '7.8.3'
  // url = 'https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.8.3.tgz'

  // > 1mb working npm after timeout
  // manager = 'npm'
  // name = '7zip-bin'
  // version = '5.0.3'
  // url = "https://registry.npmjs.org/7zip-bin/-/7zip-bin-5.0.3.tgz"

  // go
  manager = 'go'
  name = 'github.com/stretchr/testify'
  version = 'v1.6.1'
  url = "https://proxy.golang.org/github.com/stretchr/testify/@v/v1.6.1.zip"

  var cid = await forest.fetchAndAddtoIPFS(manager, name, version, url)

  console.log('actual cid', cid)
  forest.closeDB()
})();
