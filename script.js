const all = document.querySelector("#all")
const need = document.querySelector("#need")
const pElem = document.querySelectorAll('.p')
const form = document.forms.form;
const submitBtn = document.querySelector('.btn')
const error = document.querySelector('#error')
const success = document.querySelector('#success')
const inps = document.querySelectorAll('.itm input')
const needlessInputs = document.querySelectorAll('.itm-needless input')
const img = form.querySelectorAll(".img")

const fillSpans = document.querySelectorAll('.itm span')


all.innerHTML = inps.length + needlessInputs.length
need.innerHTML = inps.length
form.onsubmit = (event) => {
    event.preventDefault()

    let errorCount = 0
    let successCount = 0

    inps.forEach((input, idx) => {
        pElem.forEach((item) => {
            let index = idx
            if (input.value.trim() === '') {
                errorCount++;
                input.classList.add('error')
                fillSpans[idx].classList.add('fill-error')
                fillSpans[idx].innerHTML = 'заполните это поле'
                pElem[idx].classList.add("p-error")
                img[idx].classList.remove('invisible')
            } else {
                input.classList.remove('error');
                fillSpans[idx].classList.remove('fill-error')
                fillSpans[idx].innerHTML = 'Need to fill'
                pElem[idx].classList.remove("p-error")
                img[idx].classList.add('invisible')
                successCount++
            }
        })
    })

    needlessInputs.forEach(input => {
        input.classList.remove('error')
    })

    error.innerText = errorCount / 7
    success.innerText = successCount / 7

    if (errorCount > 0) {
        return;
    }

    alert('success')

    inps.forEach(input => {
        input.classList.remove('error')
    });

    error.innerText = '0'
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user)
};