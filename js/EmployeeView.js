var EmployeeView = function(employee) {

	this.initialize = function() {
		this.el = $('<div/>');
	};

	this.render = function() {
		this.el.html(EmployeeView.template(employee));
		return this;
	};

	this.initialize();

};

//static member - point to the template in the html page
EmployeeView.template = Handlebars.compile($("#employee-tpl").html()); 