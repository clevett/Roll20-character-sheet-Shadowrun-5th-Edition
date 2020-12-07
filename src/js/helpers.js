//Functions shared by all components
const buildModiferTempFlagArray = name => [`${name}_modifier`, `${name}_temp`, `${name}_temp_flag`]

const buildModiferTempFlagBaseArray = name => {
  const bonus = buildModiferTempFlagArray(name)
  return [`${name}_base`, ...bonus]
}

const buildDisplayString = ({base, total}) => {
  const bonus = base === total
  return bonus ? base : `${base} (${total})`
}

const errorMessage = (title, message) => console.log(`%c ERROR ${title}: ${message}`, "color: orange; font-weight:bold");

const parseInteger = string => parseInt(string) || 0

const checkFlag = value => !value || value == '0' ? false : true


