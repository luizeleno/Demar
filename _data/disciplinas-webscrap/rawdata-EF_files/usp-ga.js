//GA - Google Analytics
var __debug 			= false;//cookie && cookie.read("__debug")=="true"?true:false;
var __ambienteProd 		= window.location.href.indexOf("https://uspdigital") >= 0;
var __codigoGAusp 		= "UA-91633093-1";
var __codigoGAsistema 	= "UA-91633093-11";

var _urlAjax = null;

if(__ambienteProd || __debug){
	(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments);};i[r].l=1*new Date();a=s.createElement(o);
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	if(__codigoGAusp){
		ga('create', __codigoGAusp, {'name':'usp'});
		ga('usp.send', 'pageview');		
	}

	if(__codigoGAsistema){
		ga('create', __codigoGAsistema, {'name':'sistema'});
		ga('sistema.send', 'pageview');			
	}

	//codigo abaixo faz o track de analytics para qualquer chamada ajax (inclusive dwr)
	//se o batch do dwr estiver habilitado, provavelmente a chamada abaixo vai parar de funcionar
	//inspirado em http://stackoverflow.com/questions/25335648/how-to-intercept-all-ajax-requests-made-by-different-js-libraries
	(function(open) {
		XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
			this._urlAjax = url;
			open.call(this, method, url, async, user, pass);
		};
	})(XMLHttpRequest.prototype.open);

	(function(send) {
		XMLHttpRequest.prototype.send = function(data) {
			if(this._urlAjax.indexOf("ControleAutorizadoDWR") > 0) this._urlAjax +=  data.split("\n")[5]?"."+data.split("\n")[5].replace("c0-param0=string:",""):""; // extrair o nome da proc
			else if(this._urlAjax.indexOf("ControlePublicoDWR") > 0) this._urlAjax +=  data.split("\n")[5]?"."+data.split("\n")[5].replace("c0-param0=string:",""):""; // extrair o nome da proc
			if(__debug) console.log(this._urlAjax);		
			ga('sistema.send', 'pageview', this._urlAjax);
			send.call(this, data);	   	
		};
	})(XMLHttpRequest.prototype.send);
}