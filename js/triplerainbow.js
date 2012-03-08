hardcodeView = {
	name: "LED 6000 Series TV"
}
function tripleRainbowSubmit() {
	$("#submitform").removeClass("tr-hidden")
}

function renderInto(url, view, element, done) {
	$.get(url, function(data){element.html(Mustache.render(data, view)); done()});
}

function onLoad() {
	console.log("loaded!")
	$('body').append("<div id='submitblock'></div>");
	renderInto("./tmpl/form.html", hardcodeView, $("#submitblock"), function(){
		$('#form-closer').click(function(){
			$('#submitform').addClass("tr-hidden");
		})
	});
	$('.submit-btn').click(tripleRainbowSubmit);
}