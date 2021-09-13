import { list } from '@keystone-next/keystone'
import { text, relationship, password } from '@keystone-next/keystone/fields'

module.exports = {
  User: list({
    ui: {
      listView: {
        initialColumns: ['name', 'posts'],
      },
    },
    fields: {
      name: text({ isRequired: true }),
      email: text({ isRequired: true, isIndexed: 'unique' }),
      password: password(),
      posts: relationship({ ref: 'Post.author', many: true }),
    },
  }),
}
