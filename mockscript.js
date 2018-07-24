const faker = require('faker')
const fs = require('fs')
const join = require('path').join;
const axios = require('axios')

const models = join(__dirname, 'server/db/model')
fs.readdirSync(models)
  .filter(file => ~file.search(/^[^\.].*\.js$/))
  .forEach(file => require(join(models, file)))

const mockVisitor = async() => {
  for (let i = 0; i < 5000; i++) {
    let data = {
      ipAddress: faker.internet.ipv6(),
      country: faker.address.country(),
      city: faker.address.city(),
      tag: faker.lorem.word(),
      page: 'mock-page',
      platform: faker.internet.userAgent(),
      createTime: faker.date.past(),
      userName: faker.finance.account(),
    }
    console.log(`processing ${i}`)
    await axios.post('http://localhost:3005/api/visitor/count', data)
  }
  console.log('endding')
}

mockVisitor()