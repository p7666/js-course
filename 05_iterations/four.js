const myObject = {
    js :'javascript',
    cpp: 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}
for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`)
}

const programming = ["js","cpp","rb" ,"py", "java" , "cpp"]
for (const key in programming) {
    console.log(programming[key])
}