import {getCSS, tickConfig} from "./common.js"

async function quantidadeUsuario() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuario = Object.values(dados)

    const data = [
        {
            X: nomeDasRedes,
            y:quantidadeUsuario,
            type: 'bar',
            marker:{
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor:  getCSS('--bg-color'),
        title:{
            text:'Redes socias com mais usuários no mundo',
            x: 0,
            Font:{
                color:getCSS('--primary-color'),
                family:getCSS('--font'),
                size: 30
            },
        },
        xaxis:{
            tickfont: tickConfig,
           title:{
            text:'nome das redees sociais',
            Font: {
                color: getCSS('--secondary-color')
            },

            },
                
            
           },
    
        yaxiss:{
        tickfont: tickConfig,
            title:{
                text:'bilhões de usuuário ativos',
                Font: {
            color: getCSS('--secondary-color'),
           },
                    
                
        },
        


    },

const.graficos = document.createElement('div'),
graficos.className = 'grafico',
document.getElementById('graficos-container').appendChild(grafico),
plotlynewPlot(grafico, data, layout)

}


quantidadeUsuario()