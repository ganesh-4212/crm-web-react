(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{623:function(e,t,a){"use strict";a.r(t);var n=a(382),r=a(3),l=a.n(r),u=a(122),c=a.n(u),m=a(116),o=a(117),s=a(119),i=a(118),d=a(123),E=a(120),f=a(361),p=a(537),h=a(538),C=a(539),v=a(541),b=a(540),O=a(542),g=a(618),j=a(619),y=a(620),I=a(393),S=a(625),N=a(611),k=a(612),D=a(613),$=a(614),w=a(615),x=a(616),F=a(617),M=a(413);a(422);function P(e){var t=e.isOpen,a=e.customer,n=e.onSaveCustomer,u=e.onCancel,c="",m="",o="",s="",i=null;a&&(c=a.phone,m=a.name,o=a.email,s=a.address,i=a.id);var d=Object(r.useState)(c),E=Object(I.a)(d,2),p=E[0],h=E[1],C=Object(r.useState)(m),v=Object(I.a)(C,2),b=v[0],O=v[1],g=Object(r.useState)(o),j=Object(I.a)(g,2),y=j[0],P=j[1],q=Object(r.useState)(s),A=Object(I.a)(q,2),B=A[0],Y=A[1],z=Object(r.useState)(new Date),J=Object(I.a)(z,2),L=J[0],T=J[1];return l.a.createElement(S.a,{isOpen:t},l.a.createElement(N.a,null,"Update Customer Details"),l.a.createElement(k.a,null,l.a.createElement(D.a,null,l.a.createElement($.a,null,l.a.createElement(w.a,{for:"phone"},"Phone number"),l.a.createElement(x.a,{type:"text",name:"phone",id:"phone",placeholder:"Customer Phone number",value:p,onChange:function(e){return h(e.target.value)}})),l.a.createElement($.a,null,l.a.createElement(w.a,{for:"name"},"Name"),l.a.createElement(x.a,{type:"text",name:"name",id:"name",placeholder:"Customer name",value:b,onChange:function(e){return O(e.target.value)}})),l.a.createElement($.a,null,l.a.createElement(w.a,{for:"email"},"Email"),l.a.createElement(x.a,{type:"email",name:"email",id:"email",placeholder:"Customer Email",value:y,onChange:function(e){return P(e.target.value)}})),l.a.createElement($.a,null,l.a.createElement(w.a,{for:"dob"},"Date of Birth"),l.a.createElement(M.a,{className:"form-control",name:"dob",selected:L,onChange:function(e){return T(e)},dateFormat:"dd/MM/yyyy",placeholderText:"DD/MM/YYYY"})),l.a.createElement($.a,null,l.a.createElement(w.a,{for:"address"},"Address"),l.a.createElement(x.a,{type:"textarea",name:"address",id:"address",placeholder:"Customer Address",value:B,onChange:function(e){return Y(e.target.value)}})))),l.a.createElement(F.a,null,l.a.createElement(f.a,{color:"primary",onClick:function(){return n({variables:{customer:{id:i,name:b,email:y,phone:p,address:B,dateOfBirth:L}}})}},"Save")," ",l.a.createElement(f.a,{color:"secondary",onClick:u},"Cancel")))}P.defaultProps={customer:null,isEdit:!1,loading:!1,error:null};var q=P,A=a(345);function B(){var e=Object(n.a)(["\n  query getCustomers {\n    customers {\n      id\n      name\n      phone\n      email\n      address\n    }\n  }\n"]);return B=function(){return e},e}function Y(){var e=Object(n.a)(["\n  query getCustomerById($id: String!) {\n    customer(customerId: $id) {\n      id\n      name\n      phone\n      email\n      address\n    }\n  }\n"]);return Y=function(){return e},e}function z(){var e=Object(n.a)(["\n  mutation createCustomer($customer: CustomerInput!) {\n    createCustomer(customer: $customer) {\n      id\n      name\n      phone\n      email\n      address\n    }\n  }\n"]);return z=function(){return e},e}var J=c()(z());var L=c()(Y());var T=c()(B());function U(){var e=Object(n.a)(["\n  query getCustomerById($id: String!) {\n    customer(customerId: $id) {\n      id\n      name\n      phone\n      email\n      address\n    }\n  }\n"]);return U=function(){return e},e}function G(){var e=Object(n.a)(["\n  mutation createCustomer($customer: CustomerInput!) {\n    createCustomer(customer: $customer) {\n      id\n      name\n      phone\n      email\n      address\n    }\n  }\n"]);return G=function(){return e},e}c()(G()),c()(U());var H=function(e){var t,a=e.customer,n=e.isOpen,r=e.isEdit,u=e.onCancel,c=A.a(J,t),m=Object(I.a)(c,2),o=m[0],s=m[1],i=s.error,d=s.loading;return l.a.createElement(q,{customer:a,isOpen:n,isEdit:r,onSaveCustomer:o,onCancel:u,loading:d,error:i})},K=function(e){var t,a=e.onCancel,n=e.isOpen,r=e.customerId,u=(t={variables:{id:r}},A.b(L,t)),c=u.loading,m=u.error,o=u.data;if(c)return l.a.createElement("p",null,"Loading...");if(m)return l.a.createElement("p",null,"Error :(");var s=o&&o.customer?o.customer:void 0;return l.a.createElement(H,{customer:s,isEdit:!0,isOpen:n,onCancel:a})},Q=function(e){var t=e.onCancel,a=e.isOpen,n=e.customerId;return n?l.a.createElement(K,{customerId:n,isOpen:a,onCancel:t}):l.a.createElement(H,{isEdit:!1,isOpen:a,onCancel:t})};function R(e){var t=e.customer,a=e.onEdit;return l.a.createElement("tr",null,l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.phone),l.a.createElement("td",null,t.email),l.a.createElement("td",null,t.address),l.a.createElement("td",null,l.a.createElement(f.a,{size:"sm",color:"primary",title:"Edit Customer Details",onClick:function(){return a(t.id)}},l.a.createElement("i",{className:"fa fa-edit"}))," ",l.a.createElement(f.a,{size:"sm",color:"danger",title:"Delete Customer"},l.a.createElement("i",{className:"fa fa-trash"}))))}var V=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={selectedCustomerId:null},a.handleEditCustomer=a.handleEditCustomer.bind(Object(d.a)(a)),a.hideEditCustomerForm=a.hideEditCustomerForm.bind(Object(d.a)(a)),a}return Object(E.a)(t,e),Object(o.a)(t,[{key:"handleEditCustomer",value:function(e){this.setState({selectedCustomerId:e})}},{key:"hideEditCustomerForm",value:function(){this.setState({selectedCustomerId:null})}},{key:"render",value:function(){var e=this,t=this.props.customers,a=this.state.selectedCustomerId;return l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement(p.a,null,l.a.createElement(h.a,{xs:"12",lg:"12"},l.a.createElement(C.a,null,l.a.createElement(v.a,null,l.a.createElement("i",{className:"fa fa-users"}),"Customers",l.a.createElement(f.a,{color:"primary",className:"float-right",title:"Add Customer Details"},l.a.createElement("i",{className:"fa fa-user-plus"}))),l.a.createElement(b.a,null,l.a.createElement(O.a,{responsive:!0,striped:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Phone"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Address"),l.a.createElement("th",null,"Manage"))),l.a.createElement("tbody",null,t.map(function(t){return l.a.createElement(R,{customer:t,key:t.id,onEdit:e.handleEditCustomer})}))),l.a.createElement(Q,{isOpen:!!a,customerId:a,onCancel:this.hideEditCustomerForm}),l.a.createElement(g.a,null,l.a.createElement(j.a,{disabled:!0},l.a.createElement(y.a,{previous:!0,tag:"button"},"Prev")),l.a.createElement(j.a,{active:!0},l.a.createElement(y.a,{tag:"button"},"1")),l.a.createElement(j.a,null,l.a.createElement(y.a,{tag:"button"},"2")),l.a.createElement(j.a,null,l.a.createElement(y.a,{tag:"button"},"3")),l.a.createElement(j.a,null,l.a.createElement(y.a,{tag:"button"},"4")),l.a.createElement(j.a,null,l.a.createElement(y.a,{next:!0,tag:"button"},"Next"))))))))}}]),t}(r.Component);function W(){var e=Object(n.a)(["\n  query getCustomers{\n    customers {\n      id\n      name\n      phone\n      email\n      address\n    }\n  }\n"]);return W=function(){return e},e}c()(W()),t.default=function(){var e,t=A.b(T,e),a=t.loading,n=t.error,r=t.data;if(a)return l.a.createElement("p",null,"Loading...");if(n)return l.a.createElement("p",null,"Error :(");var u=r&&r.customers?r.customers:[];return l.a.createElement(V,{customers:u})}}}]);
//# sourceMappingURL=12.782a5a1f.chunk.js.map