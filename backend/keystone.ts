import { config } from '@keystone-next/keystone/schema'
import {
  statelessSessions,
  withItemData,
} from '@keystone-next/keystone/session'

import { lists } from './lib/schema'

let sessionSecret = process.env.SESSION_SECRET

if (!sessionSecret) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      'The SESSION_SECRET environment variable must be set in production'
    )
  } else {
    sessionSecret = '-- DEV COOKIE SECRET; CHANGE ME --'
  }
}

let sessionMaxAge = 60 * 60 * 24 * 30

export default config({
  server: {
    cors: {
      origin: '*',
    },
    port: 3000,
  },
  db: {
    adapter: 'prisma_sqlite',
    url: process.env.DATABASE_URL || 'file:./keystone.db',
  },
  ui: {
    isAccessAllowed: (context) => true,
  },
  experimental: {
    generateNextGraphqlAPI: true,
  },
  lists: lists(),
  session: withItemData(
    statelessSessions({
      maxAge: sessionMaxAge,
      secret: sessionSecret,
    }),
    { User: 'name' }
  ),
})
