function getArgValue(argName) {
  const argString = process.argv.find((arg) => arg.includes(argName));

  // const value = argString.split('=')[1] version sin desconstrucción
  const [_, value] = argString.split("="); // cuando no ocupamos el primer valor de un array podemos usar _ para ignorarlo
  return value;
}

module.exports = getArgValue;
