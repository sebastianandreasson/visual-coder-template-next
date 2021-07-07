import fs from 'fs'
import { createSchema } from '@keystone-next/keystone/schema'

export const lists = () => {
  let schemaObjects = {}
  fs.readdirSync(`${__dirname}/schema`).forEach((file) => {
    if (file !== 'index.js') {
      const schema = require(`./schema/${file}`)
      console.log(file, schema)
      schemaObjects = {
        ...schema,
        ...schemaObjects,
      }
    }
  })

  return createSchema(schemaObjects)
}
