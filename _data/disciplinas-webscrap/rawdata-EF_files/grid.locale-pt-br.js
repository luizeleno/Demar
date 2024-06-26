;(function($){
/**
 * jqGrid Brazilian-Portuguese Translation
 * Sergio Righi sergio.righi@gmail.com
 * http://curve.com.br
 * 
 * Updated by Jonnas Fonini
 * http://fonini.net
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Ver {0} - {1} de {2}",
	    emptyrecords: "Nenhum registro para visualizar",
		loadtext: "Carregando...",
		pgtext : "P�gina {0} de {1}"
	},
	search : {
	    caption: "Procurar...",
	    Find: "Procurar",
	    Reset: "Resetar",
	    odata : ['igual', 'diferente', 'menor', 'menor ou igual','maior','maior ou igual', 'inicia com','n�o inicia com','est� em','n�o est� em','termina com','n�o termina com','cont�m','n�o cont�m','nulo','n�o nulo'],
	    groupOps: [	{ op: "AND", text: "all" },	{ op: "OR",  text: "any" }	],
		matchText: " igual a",
		rulesText: " regras"
	},
	edit : {
	    addCaption: "Incluir",
	    editCaption: "Alterar",
	    bSubmit: "Enviar",
	    bCancel: "Cancelar",
		bClose: "Fechar",
		saveData: "Os dados foram alterados! Salvar altera��es?",
		bYes : "Sim",
		bNo : "N�o",
		bExit : "Cancelar",
	    msg: {
	        required:"Campo obrigat�rio",
	        number:"Por favor, informe um n�mero v�lido",
	        minValue:"valor deve ser igual ou maior que ",
	        maxValue:"valor deve ser menor ou igual a",
	        email: "este e-mail n�o � v�lido",
	        integer: "Por favor, informe um valor inteiro",
			date: "Por favor, informe uma data v�lida",
			url: "n�o � uma URL v�lida. Prefixo obrigat�rio ('http://' or 'https://')",
			nodefined : " n�o est� definido!",
			novalue : " um valor de retorno � obrigat�rio!",
			customarray : "Fun��o customizada deve retornar um array!",
			customfcheck : "Fun��o customizada deve estar presente em caso de valida��o customizada!"
		}
	},
	view : {
	    caption: "Ver Registro",
	    bClose: "Fechar"
	},
	del : {
    caption: "Apagar",
	    msg: "Apagar registro(s) selecionado(s)?",
	    bSubmit: "Apagar",
	    bCancel: "Cancelar"
	},
	nav : {
		edittext: " ",
	    edittitle: "Alterar registro selecionado",
		addtext:" ",
	    addtitle: "Incluir novo registro",
	    deltext: " ",
	    deltitle: "Apagar registro selecionado",
	    searchtext: " ",
	    searchtitle: "Procurar registros",
	    refreshtext: "",
	    refreshtitle: "Recarregando tabela",
	    alertcap: "Aviso",
	    alerttext: "Por favor, selecione um registro",
		viewtext: "",
		viewtitle: "Ver linha selecionada"
	},
	col : {
	    caption: "Mostrar/Esconder Colunas",
	    bSubmit: "Enviar",
	    bCancel: "Cancelar"
	},
	errors : {
		errcap : "Erro",
		nourl : "Nenhuma URL definida",
		norecords: "Sem registros para exibir",
	    model : "Comprimento de colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, prefix: "R$ ", suffix:"", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S?b",
				"Domingo", "Segunda", "Ter?a", "Quarta", "Quinta", "Sexta", "S?bado"
			],
			monthNames: [
				"Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez",
				"Janeiro", "Fevereiro", "Mar?o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['?', '?', '?', '?'][Math.min((j - 1) % 10, 3)] : '?'},
			srcformat: 'Y-m-d',
			newformat: 'd/m/Y',
			masks : {
	            ISO8601Long:"Y-m-d H:i:s",
	            ISO8601Short:"Y-m-d",
	            ShortDate: "n/j/Y",
	            LongDate: "l, F d, Y",
	            FullDateTime: "l, F d, Y g:i:s A",
	            MonthDay: "F d",
	            ShortTime: "g:i A",
	            LongTime: "g:i:s A",
	            SortableDateTime: "Y-m-d\\TH:i:s",
	            UniversalSortableDateTime: "Y-m-d H:i:sO",
	            YearMonth: "F, Y"
	        },
	        reformatAfterEdit : false
		},
		baseLinkUrl: '',
		showAction: '',
	    target: '',
	    checkbox : {disabled:true},
		idName : 'id'
	}
});
})(jQuery);
