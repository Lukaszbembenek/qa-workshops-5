const fnCreator = () => {
  const name = 'John'
  const fn = () => {
    return name
  }
  return fn
}

const createdFunction = fnCreator()
const personName = createdFunction()
