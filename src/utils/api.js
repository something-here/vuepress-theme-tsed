let API

export function getApi (url) {
  if (API) {
    return API
  }

  API = fetch(url).then((response) => response.json())

  return API
}

export function compileQuery (query, scope) {
  query = Object.keys(scope).reduce((q, key) =>
      q.replace(new RegExp('\\b' + key + '\\b', 'gi'), `scope.${ key }`)
    , query)

  try {
    return eval(query)
  } catch (er) {
    throw 'Bad query: ' + query
  }
}

export function findSymbols (modules, query) {
  const symbols = new Map()
  const list = []

  Object.keys(modules).forEach((moduleName) => {
    const module = modules[moduleName]

    module.symbols.forEach((symbol) => {
      if (!symbols.has(symbol.symbolName)) {
        if (compileQuery(query, { module: module.name, ...symbol, labels: symbol.status })) {
          list.push(symbol)
          symbols.set(symbol.symbolName, symbol)
        }
      }
    })
  })

  return list
}
