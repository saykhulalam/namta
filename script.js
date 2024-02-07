

let input = document.querySelector('input')
let btn = document.querySelector('button')
let h1 = document.querySelector('h1')
let msg = document.querySelector('.main .msg h4')
// console.log(msg)

btn.addEventListener('click',function(){
    h1.innerHTML = ''
    let ivalu = input.value
    if(ivalu == ''){
        msg.innerHTML = ('<i class="fa-solid fa-triangle-exclamation"></i> দুঃখিত আপনি ইনপুট এর মধ্যে কিছু দেননি')
    }else{
        for (let i = 1; i <= 10; i++) {
            h1.innerHTML += (`${ivalu} x ${i} = ${i * ivalu} <br>`)
        }
    }
})