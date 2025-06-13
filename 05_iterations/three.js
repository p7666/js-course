//for of


// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
// }


// const greetings = "Hello World!"
// for (const i of greetings) {
//     console.log(i);
// }


//map

const map = new Map();
map.set('IN', 'India')
map.set('US', 'United states of America')
map.set('FR', 'France')
map.set('IN', 'India')

// console.log(map)

for (const [key , value] of map) {
    console.log(key,':-' ,value)
}

const myObject = {
    'game1' : "NFS",
    'game2' : "spiderman"
}
//object are not iteratable beacause of that forof loop is not applicable on object

// for (const [key , value] of object) {
    
// }
