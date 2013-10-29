var app = {

	showAlert : function(message, title) {
		if (navigator.notification) {
			navigator.notification.alert(message, null, title, 'OK');
		} else {
			alert( title ? (title + ": " + message) : message);
		}
	},

	initialize : function() {
		var self = this;

		//This must be called last as it calls back to the renderHomeView function
		this.store = new MemoryStore(function() {
			$('body').html(new HomeView(self.store).render().el);
		});

	}
};

app.initialize();
