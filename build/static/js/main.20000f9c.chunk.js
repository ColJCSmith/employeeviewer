(this.webpackJsonpemployeeviewer=this.webpackJsonpemployeeviewer||[]).push([[0],{99:function(e,t,a){"use strict";a.r(t);var o=a(7),n=a(1),r=a.n(n),s=a(9),i=a.n(s),l=a(39),c=a(40),d=a(49),m=a(48),u=a(47),p=function(e){var t={columns:[{label:"Name",field:"name",sort:"asc",width:500},{label:"Email",field:"email",sort:"asc",width:500},{label:"Image",field:"image",sort:"asc",width:500},{label:"City",field:"city",sort:"asc",width:300},{label:"DOB",field:"dob",sort:"asc",width:250,date:"YYYY-MM-DD"}],rows:e.employees};return console.log("Props",e),Object(o.jsx)(u.c,{sorting:!0,striped:!0,bordered:!0,data:t})},b=a(46),h=a.n(b),f=function(){return h.a.get("https://randomuser.me/api/?results=30&nat=us")},j=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={employeeRecords:[]},e.componentDidMount=function(){f().then((function(t){var a=t.data.results,o=[];console.log(a);for(var n=0;n<a.length;n++){var r={name:a[n].name.first+" "+a[n].name.last,email:a[n].email,image:a[n].picture.medium,city:a[n].location.city,dob:a[n].dob.date};o.push(r)}console.log(o),e.setState({employeeRecords:o})}))},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Employee Details"}),Object(o.jsx)(p,{employees:this.state.employeeRecords})]})}}]),a}(r.a.Component);var y=function(){return Object(o.jsx)(j,{})};a(98);i.a.render(Object(o.jsx)(y,{}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.20000f9c.chunk.js.map