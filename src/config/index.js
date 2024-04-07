const env = process.env.NODE_ENV || 'local'

const config = {
  test: {
    port: 8383,
    db: 'mongodb://localhost/stemTV'
  },
  local: {
    port: 8383,
    db: 'mongodb://localhost/stemTV'
  },
  dev: {
    port: 8383,
    db: 'mongodb://localhost/stemTV'
  },
  staging: {
    port: 8383,
    db: 'mongodb://localhost/stemTV'
  },
  production: {
    port: 8383,
    db: 'mongodb://localhost/stemTV'
  }
}

export default {
  ...config[env]
}
