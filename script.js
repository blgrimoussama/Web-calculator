var output = ''
var jscalc = ''
var result = ''
var next = 0
var degrad = ''


function equal() {
	result = Number(eval(jscalc).toFixed(3)).toString()
	output += '=' + result
	next = 1
	document.querySelector('#screen').innerHTML = output
}

function wipe() {
	output = ''
	jscalc = ''
	next--
	document.querySelector('#screen').innerHTML = output
}

function del() {
	if (['tan(', 'sin(', 'cos('].indexOf(output.slice(-4)) !== -1) {
		output = output.slice(0, -4)
		jscalc = jscalc.slice(0,-9)		
	}
	else if (['log('].indexOf(output.slice(-4)) !== -1) {
		output = output.slice(0, -4)
		jscalc = jscalc.slice(0,-11)		
	}
	else if (['√('].indexOf(output.slice(-2)) !== -1) {
		output = output.slice(0,-2)
		jscalc = jscalc.slice(0,-10)
	}
	else if (['π'].indexOf(output.slice(-1)) !== -1) {
		output = output.slice(0,-1)
		jscalc = jscalc.slice(0,-7)
	}
	else if (['e'].indexOf(output.slice(-1)) !== -1) {
		output = output.slice(0,-1)
		jscalc = jscalc.slice(0,-11)
	}
	else if (['>'].indexOf(output.slice(-1)) !== -1) {
		output = output.slice(0,-12)
		jscalc = jscalc.slice(0,-3)
	}
	else {
		output = output.slice(0,-1)
		jscalc = jscalc.slice(0,-1)
	}
	next--
	document.querySelector('#screen').innerHTML = output
}

function num(x) {
	if (next === 1) {
		output = ''
		jscalc = ''
		next--
	}
	var except = '!πe'

	if (except.indexOf(output.charAt(output.length-1)) === -1) {
		output += x
		jscalc += x
	}
	if (output.length === 0) {
		output += x
		jscalc += x
	}
	document.querySelector('#screen').innerHTML = output
}

function zero() {
	if (output.length != 0) {
		num('0')
	}
}

function one() {num('1')}

function two() {num('2')}

function three() {num('3')}

function four() {num('4')}

function five() {num('5')}

function six() {num('6')}

function seven() {num('7')}

function eight() {num('8')}

function nine() {num('9')}

function operator(x, y, except) {
	if (next === 1) {
		output = result
		next--
	}
	if (output.length != 0) {
	var forreplace = 0
	for (var i = output.length -1; i >= 0; i--) {
		if (except.indexOf(output[i]) !== -1) {
			forreplace += 1
		}
		else {
			break
		}
	}
	if (forreplace != 0) {
		output = output.slice(0,-forreplace)
		output += x
		jscalc = jscalc.slice(0,-forreplace)
		jscalc += y
	} else {
		output += x
		jscalc += y
	}
	document.querySelector('#screen').innerHTML = output		
	}
}

function plus() {operator('+','+', '+-÷×(.')}

function minus() {operator('-', '-', '+-÷×(.')}

function divide() {operator('÷', '/', '+-÷×(.')}

function times() {operator('×', '*', '+-÷×(.')}

function fact() {
	if ('('.indexOf(output.charAt(output.length-1)) === -1) {
		operator('!', 'factorial(', '+-÷×(.!πe')
	}
}

function dot() {
	var include = '0123456789'
	if (include.indexOf(output.charAt(output.length-1)) !== -1) {
		output += '.'
		jscalc += '.'
	}
	document.querySelector('#screen').innerHTML = output
}

function lpar() {
	
	output += '('
	jscalc += '('
	document.querySelector('#screen').innerHTML = output
}

function rpar() {
	output += ')'
	jscalc += ')'
	document.querySelector('#screen').innerHTML = output
}

function pi() {
	var except = '0123456789.!πe'
	if (output.length === 0) {
		output += 'π'
		jscalc += 'Math.PI'
	}
	if (except.indexOf(output.charAt(output.length-1)) === -1) {
		output += 'π'
		jscalc += 'Math.PI'
	}
	document.querySelector('#screen').innerHTML = output
}

function e() {
	var except = '0123456789.!πe'
	if (output.length === 0) {
		output += 'e'
		jscalc += 'Math.exp(1)'
	}
	if (except.indexOf(output.charAt(output.length-1)) === -1) {
		output += 'e'
		jscalc += 'Math.exp(1)'
	}
	document.querySelector('#screen').innerHTML = output
}

function sqrt() {
	output += '√('
	jscalc += 'Math.sqrt('
	console.log(jscalc)
	document.querySelector('#screen').innerHTML = output
}

function sqr() {
	if ('>'.indexOf(output.charAt(output.length-1)) === -1) {
		output += '<sup>2</sup>'
		jscalc += '**2'	
	}
	document.querySelector('#screen').innerHTML = output
}

function log() {
	output += 'log('
	jscalc += 'Math.log10('
	document.querySelector('#screen').innerHTML = output
}

const toggle = document.querySelector('.toggle input');
toggle.addEventListener('click', () => {
	const degrad = toggle.parentNode.querySelector('.degrad');
	if (toggle.checked) {
		degrad.textContent = 'DEG'
		console.log(toggle.checked)
		degrad = 'DEG'
	} else {
		degrad.textContent = 'RAD'
		console.log(toggle.checked)
		degrad = 'DEG'
	}
	});

function cos() {
	output +='cos('
	jscalc += 'Math.cos('
	document.querySelector('#screen').innerHTML = output
}

function sin() {
	output +='sin('
	jscalc += 'Math.sin('
	document.querySelector('#screen').innerHTML = output
}

function tan() {
	output += 'tan('
	jscalc += 'Math.tan('
	document.querySelector('#screen').innerHTML = output
}
