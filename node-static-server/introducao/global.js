global.console.log("testando")
console.log(__filename)
console.log(__dirname)
console.log(process.argv)

const getByFlag = flag => {
    const indexOfFlag = process.argv.indexOf(flag)
    return process
}

const firstName = getByFlag ("--firstname")
const lastName = getByFlag ("--lastname")
console.log(`O nome é ${firstName} ${lastName}`)