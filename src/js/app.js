var app = {
    observable: riot.observable(),
    model: {
        cnto: ' {}',
        email: '' || localStorage.getItem('email'),
    },
    // SET Contact Object
    setCnto: function(cnto) {
        app.model.cnto = cnto;
    },
    // CLEAR model
	clearModel: function(clear) {
		app.model = {};
	}
}
