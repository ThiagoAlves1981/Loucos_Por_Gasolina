
function filtrar(){
fetch('carros.json').then((response)=>{
    response.json().then((carros)=>{
        

        var input,
            filter,
            ul,
            li,
            span,
            i,
            txtValue,
            div,
            count = 0

        //AQUI ELE PEGA OS ELEMENTOS DO HTML, MEIO QUE "INICIALIZA" AS VARS
        input = document.getElementById('Search')
        ul = document.getElementById('listaCarros')
        div = document.getElementById('showCar')
        div.style.display = 'block'
        
        //---------------------------------
        ul.innerHTML = ''
        console.log(carros)
        console.log(carros.dadosCarros[0].nome)
        console.log(carros.dadosCarros.length)

        for(i=0; i<carros.dadosCarros.length; i++)
        {
            ul.innerHTML += `
                <li>
                    <span class="item-link">${carros.dadosCarros[i].link}</span>
                    <span class="item-name">${carros.dadosCarros[i].nome}</span>
                    <span class="item-marca">${carros.dadosCarros[i].marca}</span>
                    <span class="item-pote">${carros.dadosCarros[i].potencia}</span>
                </li>
            `
        }

        //AQUI ELE PEGA O FILTRO
        filter = input.value.toUpperCase()

        //AQUI ELE PEGA TODAS AS LI'S DA LISTA
        ul.innerHTML = '' 

        for(i = 0; i< carros.dadosCarros.length && count < 5; i++)
        {
            //PEGAR O QUE USER DIGITOU
            txtValue = carros.dadosCarros[i].nome

            //VERIFICAR O QUE USER DIGITOU BATEU COM ALGO
            if(filter != ''){
                if(txtValue.toUpperCase().indexOf(filter) > -1)
                {
                    ul.innerHTML += `
                    <li>
                        <span>
                        <a href="${carros.dadosCarros[i].link}" class="item-name">${carros.dadosCarros[i].nome}</a>
                        </span>
                        <span class="item-marca">${carros.dadosCarros[i].marca}</span>

                    </li>
                    `

                    span = document.getElementsByClassName('item-name') 
                    span.innerHTML = txtValue.replace(filter,`<strong>${filter}</strong>`)

                    count++
                }
            }
                
            
        }
    })   
    })
}

