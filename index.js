let SEASON = "зима"
let winter = document.querySelector ('.winter_btn')
winter.addEventListener ('click', function (e) {
    e.preventDefault()
    SEASON = 'зима'
    document.querySelectorAll ('.v').forEach(v => {

        v.style.display = 'none'
    })
    let winter_list = document.querySelectorAll ('.winter')
    winter_list.forEach (drink => {
        drink.style.display = 'block'
    })

    })
let summer = document.querySelector ('.summer_btn')
summer.addEventListener ('click', function (e) {
e.preventDefault()
    SEASON = 'лето'
    document.querySelectorAll ('.v').forEach(v => {

        v.style.display = 'none'
    })
    let summer_list = document.querySelectorAll ('.sumer')
    summer_list.forEach (drink => {
        drink.style.display = 'block'
    })

    })
let spring = document.querySelector ('.spring_btn')
spring.addEventListener ('click', function (e){
e.preventDefault() 
    SEASON = 'весна'
    document.querySelectorAll ('.v').forEach(v => {

        v.style.display = 'none'
    })
    let spring_list = document.querySelectorAll ('.spring')
    spring_list.forEach (drink => {
        drink.style.display = 'block'
    })


    })
let autumn = document.querySelector ('.autumn_btn')
autumn.addEventListener ('click', function (e){
e.preventDefault() 
    SEASON = 'осень'
    document.querySelectorAll ('.v').forEach(v => {

        v.style.display = 'none'
    })
    let autumn_list = document.querySelectorAll ('.autumn')
    autumn_list.forEach (drink => {
        drink.style.display = 'block'
    })

    })
let drink_names = document.querySelectorAll ('.drink_name')


let field_search = document.querySelector (".field-search")
field_search.addEventListener ('input', function (e) {
    e.preventDefault()
    let field_search_value = field_search.value
    if (field_search_value == ''){
        drink_names_search = []
        drink_names.forEach (drink_name => {
            if (drink_name.includes (field_search_value)) {
                drink_names_search.push (drink_name)
            }
            else{
                let drink_id = drink_name.getAttribute('id')
                document.querySelector(`#d${drink_id}`).style.display = 'none'
                document.querySelector(`#i${drink_id}`).style.display = 'none'
                
            }   
        })
    }else{
        document.querySelectorAll ('.v').forEach(v => {

            v.style.display = 'block'
        })
    }
})
