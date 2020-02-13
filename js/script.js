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

	let tam = prompt('Insira o tamanho da matriz NxN: ')

	for(let i=0; i<tam; i++){
		vv1.push(i)
		for(let j=0; j<tam; j++){
			vv2.push(j)
		}
	}
	for(let i=0; i<tam; i++){

		for(let j=0; j<tam; j++){
			if(vv1[i] == vv2[j]){
				document.write(`<label style='border: solid 3px orange'>${vv1[i]} | ${vv2[j]}</label>`)
			}
			else{
				document.write(`<label>${vv1[i]} | ${vv2[j]}</label>`)
			}
		}
		document.write('<br>')
	}
}
//q3()

//4°)
