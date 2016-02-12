Reports = React.createClass({

	componentDidMount(){
		if(Session.get("animateChild")){
			$(".reports-page").addClass("ng-enter");
			setTimeout(function(){
				$(".reports-page").addClass("ng-enter-active");
			}, 300);
			setTimeout(function(){
				$(".reports-page").removeClass("ng-enter");
				$(".reports-page").removeClass("ng-enter-active");
			}, 600);
		}
	},
  render: function() {
    return (
		<div className="reports">
			<div key="reports" className="reports-page ui-view main">
				<div className="ng-scope"> 
					<a href="/dashboard/overview" className="pull-right btn btn-primary btn-outline btn-rounded">Back to Overview</a> 
					<h2>Reports <small>Work with Chart.js and D3</small></h2> 

					<i className="fa fa-dashboard bg-fade"></i>
					<div className="jumbotron"> 
						<h1>Add Charts here</h1> 
						<p>You can use C3.js or Chart.js</p> 
						<p> <a className="btn btn-primary btn-lg btn-outline btn-rounded">Learn more</a> </p> 
					</div> 
				</div>
			</div>
		</div>
	);
  }
});