let SEASON = "зима"
let winter = document.querySelector ('.winter')
winter.addEventListener ('click', function (e) {
    e.preventDefault()
    SEASON = 'зима'
console.log(SEASON)

    })
let summer = document.querySelector ('.summer')
summer.addEventListener ('click', function (e) {
e.preventDefault()
    SEASON = 'лето'
console.log(SEASON)

    })
let spring = document.querySelector ('.spring')
spring.addEventListener ('click', function (e){
e.preventDefault() 
    SEASON = 'весна'
console.log(SEASON)

    })
let autumn = document.querySelector ('.autumn')
autumn.addEventListener ('click', function (e){
e.preventDefault() 
    SEASON = 'осень'
console.log(SEASON)

    })
console.log(SEASON)