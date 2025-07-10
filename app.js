 let fan = document.getElementById('fan')
    let on = document.getElementById('on')
    let off = document.getElementById('off')
    let speed1 = document.getElementById('speed1')
    let speed2 = document.getElementById('speed2')
    let speed3 = document.getElementById('speed3')

    on.addEventListener('click', function () {
        fan.style.animationDuration = 3 + 's'
    })
    off.addEventListener('click', function () {
        fan.style.animationDuration = 0 + 's'
    })
    speed1.addEventListener('click', function () {
        fan.style.animationDuration = 1 + 's'
    })
    speed2.addEventListener('click', function () {
        fan.style.animationDuration = 0.5 + 's'
    })
    speed3.addEventListener('click', function () {
        fan.style.animationDuration = 0.1 + 's'
    })