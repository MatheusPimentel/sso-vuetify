const lang = (key: string | string[], parameters: Record<string, string> = {}, fallback = ''): string => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const i18n = window.app && window.app.i18n
  if (!i18n) {
    console.warn('i18n is not available in this project.')
    return fallback
  }
  if (typeof key === 'string') {
    const clear: string = key.replace(/\//g, '.')
    if (i18n.global.te(clear)) {
      return i18n.global.t(clear, parameters)
    }
    return fallback || key
  }

  for (const path in key) {
    if (!key.hasOwnProperty(path)) {
      continue
    }

    const clear: string = typeof key[path] === 'string' ? key[path].replace(/\//g, '.') : ''
    if (i18n.global.te(clear)) {
      return i18n.global.t(clear, parameters)
    }
  }
  return fallback
}

export { lang }
