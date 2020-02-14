//1°) 
//a)
document.getElementById("primeiro").style= "color: blue"

// b)
let i = 0
while (document.getElementsByTagName("li")[i].id != "terceiro"){
	document.getElementsByTagName("li")[i].style= "font-weight: bold"
	i++
}

//c)
document.getElementById("quinto").parentNode.style= "border: dashed 1px red"

//d)
const pai = document.getElementById("quinto").parentNode;
pai.previousElementSibling.style= "color: red"

//2°)
function q2(){
	let v1 = new Array()
	let v2 = new Array()

	let tam = prompt('Insira o tamanho da matriz NxN: ')

	for(let i=0; i<tam; i++){
		v1.push(i)
		for(let j=0; j<tam; j++){
			v2.push(j)
		}
	}
	for(let i=0; i<tam; i++){
		for(let j=0; j<tam; j++){
			document.write(`<label>${v1[i]} | ${v2[j]}</label>`)
		}
		document.write('<br>')
	}
}
//q2()

document.write('<br>')

//3°)
function q3(){
	let vv1 = new Array()
	let vv2 = new Array()

	let m

	let tam = prompt('Insira o tamanho da matriz NxN: ')

	for(let i=0; i<tam; i++){
		vv1.push(i)
		for(let j=0; j<tam; j++){
			vv2.push(j)
		}
	}
	for(let i=0; i<tam; i++){
		for(let j=0; j<tam; j++){
			document.write(`<label>${vv1[i]} | ${vv2[j]}</label>`)
			
		}
		document.write('<br>')
    }
    for(i=0; i< tam**2; i++){
    	m = document.getElementsByTagName('label')[i].innerHTML.split(' | ')
    	if(m[0] == m[1]){
    		document.getElementsByTagName('label')[i].style= 'border: solid 3px orange'
    	}
    }
}
//q3()

document.write('<br>')

//4°)
function q4(){
	let vvv1 = new Array()
	let vvv2 = new Array()
	
	let m

	let tam = prompt('Insira o tamanho da matriz NxN: ')

	for(let i=0; i<tam; i++){
		vvv1.push(i)
		for(let j=0; j<tam; j++){
			vvv2.push(j)
		}
	}
	for(let i=0; i<tam; i++){
		for(let j=0; j<tam; j++){
			document.write(`<label>${vvv1[i]} | ${vvv2[j]}</label>`)
			
		}
		document.write('<br>')
    }
    for(i=0; i< tam**2; i++){
    	m = document.getElementsByTagName('label')[i].innerHTML.split(' | ')
    	if(+m[0] + +m[1] == tam-1){
    		document.getElementsByTagName('label')[i].style= 'border: solid 3px blue'
    	}
    }
}
//q4()


//5°)
document.write("<p><b><br>5)<br>a)</b> Sim. pois o método lastChild retorna o ultimo elemento filho de um elemento.<br>",
"No entanto o método nextSibling retorna uma referência posterior ao elemento,<br>",
"como o lastChild já estava no ultimo elemento, não existe mais o que percorrer,<br>",
"fazendo o nextSibling retornar null.</p>")

document.write("<br><br>")

document.write("<p><b>b)</b> Sim. É uma situação parecida como à da letra a). o método children[0] pega o primeiro<br>",
"elemento filho, e então o método previousSibling retorna uma referência anterior ao elemento,<br>",
"como o elemento selecionado pelo children[0] já era o primeiro, o método previousSibling<br>",
"não tinha mais como retornar nada além do null.</p>")

document.write("<br><br>")

document.write("<p><b>6)</b> todos os dados onde a DIV com o ID 'teste' serão armazenados na variável el2.<br>",
"Se essa DIV com o ID 'teste' for a DIV pai, seus filhos irão juntos para a variável el2.</p>")