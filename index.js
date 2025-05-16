let SEASON = []
let winter = document.querySelector('.winter_btn')
winter.addEventListener('click', function (e) {
    e.preventDefault()
    if (SEASON.includes('зима')) {
        document.querySelectorAll('.v').forEach(v => {

            v.style.display = 'block'
        })
        winter.style.backgroundColor = "#8A7460"
        winter.style.color = "black"
        SEASON.splice(SEASON.indexOf('зима'), 1)
    } else {


        SEASON.push('зима')

        document.querySelectorAll('.v').forEach(v => {

            v.style.display = 'none'
        })
        let winter_list = document.querySelectorAll('.winter')
        winter_list.forEach(drink => {
            drink.style.display = 'block'
        })
        winter.style.backgroundColor = "#2c241d"
        winter.style.color = "white"
    }

})
let summer = document.querySelector('.summer_btn')
summer.addEventListener('click', function (e) {
    e.preventDefault()
    console.log(SEASON)
    if (SEASON.includes('лето')) {
        document.querySelectorAll('.v').forEach(v => {

            v.style.display = 'block'
        })
        summer.style.backgroundColor = "#8A7460"
        summer.style.color = "black"
        SEASON.splice(SEASON.indexOf('лето'), 1)

    } else {
        SEASON.push('лето')
        document.querySelectorAll('.v').forEach(v => {

            v.style.display = 'none'
        })
        let summer_list = document.querySelectorAll('.summer')
        summer_list.forEach(drink => {
            drink.style.display = 'block'
        })
         summer.style.backgroundColor = "#2c241d"
        summer.style.color = "white"
    }
})
let spring = document.querySelector('.spring_btn')
spring.addEventListener('click', function (e) {
    e.preventDefault()
    if (SEASON.includes('весна')) {
        document.querySelectorAll('.v').forEach(v => {

            v.style.display = 'block'
        })
        spring.style.backgroundColor = "#8A7460"
        spring.style.color = "black"
        SEASON.splice(SEASON.indexOf('весна'), 1)

    } else {
        SEASON.push('весна')
        document.querySelectorAll('.v').forEach(v => {

            v.style.display = 'none'
        })
        let spring_list = document.querySelectorAll('.spring')
        spring_list.forEach(drink => {
            drink.style.display = 'block'
        })
         spring.style.backgroundColor = "#2c241d"
        spring.style.color = "white"
    }

})
let autumn = document.querySelector('.autumn_btn')
autumn.addEventListener('click', function (e) {
    e.preventDefault()
    if (SEASON.includes('осень')) {
        document.querySelectorAll('.v').forEach(v => {

            v.style.display = 'block'
        })
        autumn.style.backgroundColor = "#8A7460"
        autumn.style.color = "black"
        SEASON.splice(SEASON.indexOf('осень'), 1)

    } else {
        SEASON.push('осень')
        document.querySelectorAll('.v').forEach(v => {

            v.style.display = 'none'
        })
        let autumn_list = document.querySelectorAll('.autumn')
        autumn_list.forEach(drink => {
            drink.style.display = 'block'
        })
         autumn.style.backgroundColor = "#2c241d"
        autumn.style.color = "white"
    }
})
let drink_names = document.querySelectorAll('.drink_name')


let field_search = document.querySelector(".field-search")
field_search.addEventListener('input', function (e) {
    e.preventDefault()
    let field_search_value = field_search.value
    if (field_search_value != '') {
        drink_names_search = []
        drink_names.forEach(drink_name => {
            let drink_id = drink_name.getAttribute('id')
            if (drink_name.innerHTML.indexOf(field_search_value) != -1) {

                document.querySelector(`#d${drink_id}`).style.display = 'block'
                document.querySelector(`#i${drink_id}`).style.display = 'block'
                drink_names_search.push(drink_name)
            } else {
                // let drink_id = drink_name.getAttribute('id')
                document.querySelector(`#d${drink_id}`).style.display = 'none'
                document.querySelector(`#i${drink_id}`).style.display = 'none'

            }
        })
    } else {
        document.querySelectorAll('.v').forEach(v => {

            v.style.display = 'block'
        })
    }
})
let item = document.querySelector('.item')
let pix = document.querySelector('.pix')
let a = document.querySelector('.a')
document.querySelectorAll('.v').forEach(v => {
    v.addEventListener('click', function(){
        let drink_id = v.getAttribute('id').slice(1)
        let drink_name = document.getElementById(`${drink_id}`).innerHTML
        let drink_descr = document.getElementById(`d${drink_id}`).querySelector('p').innerHTML
        let drink_image = window.getComputedStyle(document.getElementById(`i${drink_id}`)).backgroundImage.slice(5, -2)
        console.log(drink_image)


        item.style.display = 'block'
        a.style.display = 'none'
        pix.style.display = 'none'
        item.querySelector('.h1-card').innerHTML = drink_name
        item.querySelector('.p-card').innerHTML = drink_descr
        // item.querySelector('.list').style.display = none
        item.querySelector('.img-card').setAttribute('src', drink_image)


    })
})

document.querySelector('.button').addEventListener('click', function(){
    item.style.display = 'none'
    a.style.display = 'block'
    pix.style.display = 'block'
})