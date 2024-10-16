const form = document.querySelector('form')

const ageElt = document.getElementById('age')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const age = ageElt.value

    const reponseElt = document.getElementById('reponse')
    phraseElt = document.createElement('p')
    phraseElt.textContent = 'vous avez  ' + age + ' ans'

    reponseElt.appendChild(phraseElt)
})