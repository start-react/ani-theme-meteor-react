var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

Dashboard = React.createClass({

  componentWillMount: function(){
    Session.set("animateChild", false);
  },

  componentDidMount: function(){
    if(!Session.get("animateChild")){
      $(".dashboard-page").addClass("ng-enter");
      setTimeout(function(){
        $(".dashboard-page").addClass("ng-enter-active");
      }, 300);
      setTimeout(function(){
        $(".dashboard-page").removeClass("ng-enter");
        $(".dashboard-page").removeClass("ng-enter-active");
        Session.set("animateChild", true);
      }, 600);
    }
  },

  
  render: function() {
    // const { pathname } = this.props.location;
    return (

      <div className="dashboard">
        <div className="dashboard-page ui-view"> 
          <div className="container-fluid"> 
            <div className="row"> 
              <div className="col-sm-3 col-md-2 sidebar"> 
                <div className="text-center"> 
                  <h2 className="brand">Ani Theme <br /><small>Free Meteor-React.js Edition</small></h2> 
                  <img src="/flat-avatar.png" className="user-avatar" />
                  <br /> 
                  <a href="/login" className="btn btn-white btn-outline btn-rounded btn-sm">Logout</a> 
                </div> 

                <ul className="nav nav-sidebar"> 
                  <li>
                    <a href="/dashboard/overview">Overview</a>
                  </li> 
                  <li>
                    <a href="/dashboard/reports">Reports</a>
                  </li>
                  <li>
                    <a href="http://www.strapui.com/themes/ani-meteor-theme/">Premium MeteorJS Edition</a>
                  </li> 
                  <li>
                    <a href="http://startangular.com/product/ani-theme/">Free Angular version</a>
                  </li>
                  <li>
                    <a href="http://www.strapui.com/ani-reactjs-theme">Premium React.js Edition</a>
                  </li> 
                  <li>
                    <a href="http://www.strapui.com/ani-angularjs-theme">Premium AngularJS Edition</a>
                  </li> 
                  <li>
                    <a href="http://www.strapui.com/themes/ani-laravel-theme/">Premium Laravel Edition</a>
                  </li> 
                </ul> 
              </div>

              <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main ng-scope ui-view">
                {React.cloneElement(<div id="body-container" className="ui-view">{this.props.content}</div> || <div />)}
              </div>
            </div> 
          </div> 
        </div>
      </div>

    );
  }
});