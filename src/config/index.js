const env = process.env.NODE_ENV || 'local'

const config = {
  test: {
    port: 8383,
    db: 'mongodb://localhost/blogs-db'
  },
  local: {
    port: 8383,
    db: 'mongodb://localhost/blogs-db'
  },
  dev: {
    port: 8383,
    db: 'mongodb://localhost/blogs-db'
  },
  staging: {
    port: 8383,
    db: 'mongodb://localhost/blogs-db'
  },
  production: {
    port: 8383,
    db: 'mongodb://localhost/blogs-db'
  }
}

export default {
  ...config[env]
}
