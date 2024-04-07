class HTTPError extends Error {
  constructor (statusCode, message) {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}

export const validationError = error =>
  new HTTPError(
    400,
    error.message || (error.details && error.details[0].message)
  )

export const checkValidation = (schema, data) => {
  const { error } = schema.validate(data)
  if (error) {
    throw validationError(error)
  }
}
