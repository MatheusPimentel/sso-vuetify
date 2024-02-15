function isObjectEmpty (objectValue: object): boolean {
  return Object.keys(objectValue).length === 0
}

function validateRequired (value: any): boolean {
  const validacaoPadrao = (value !== null && value !== undefined)
  if (typeof value === 'object') {
    return (value && isObjectEmpty(value))
  }

  if (typeof value === 'string') {
    return validacaoPadrao && value.trim() !== ''
  }

  if (Array.isArray(value)) {
    validacaoPadrao && value.length > 0
  }
  return validacaoPadrao
}

function validateEmail (email: string): boolean | string {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export { isObjectEmpty, validateRequired, validateEmail }
