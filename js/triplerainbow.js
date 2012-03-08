hardcodeView = {
	name: "LED 6000 Series TV"
}

function renderForm(template) {
	console.log(Mustache.render(template, hardcodeView))
}

function tripleRainbowSubmit() {
	$.get('tmpl/form.html', renderForm)
}

function onLoad() {
	$('.submit-btn').click(tripleRainbowSubmit)	
}