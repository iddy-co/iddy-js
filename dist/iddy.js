var Iddy=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,a)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=this;t.__esModule=!0;var u=n(1);t.createIddyClient=function(e){return r(i,void 0,void 0,function(){return o(this,function(t){return[2,new u.default(e)]})})};t.functionA=function(){console.log("functionA - OK 3")},t.default=u.default},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,a)}c((r=r.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};t.__esModule=!0;var i="iddy.user",u="iddy.isAuthenticated",a=function(e){var t=this;this.getUser=function(){return r(t,void 0,void 0,function(){var e,t;return o(this,function(n){switch(n.label){case 0:return(e=(e=null)?JSON.parse(e):null)?[3,4]:[4,fetch(this.domain+"/api/me",{mode:"cors",credentials:"include"})];case 1:return(t=n.sent()).ok?[4,t.json()]:[3,3];case 2:return e=n.sent(),localStorage.setItem(i,JSON.stringify(e)),localStorage.setItem(u,"true"),[3,4];case 3:e=null,n.label=4;case 4:return[2,e]}})})},this.isAuthenticated=function(){return r(t,void 0,void 0,function(){return o(this,function(e){switch(e.label){case 0:return[4,this.getUser()];case 1:return[2,!!e.sent()]}})})},this.loginWithRedirect=function(e){var n=e.redirectUri;window.location.href=t.domain+"/login?redirectUri="+encodeURIComponent(n)},this.logout=function(e){var n=e.returnTo;return r(t,void 0,void 0,function(){return o(this,function(e){switch(e.label){case 0:return localStorage.removeItem(i),localStorage.removeItem(u),[4,fetch(this.domain+"/api/logout",{mode:"cors",credentials:"include"})];case 1:return[4,e.sent().json()];case 2:return e.sent(),window.location.href=n,[2]}})})},e.domain?this.domain="https://"+e.domain||!1:this.domain=""};t.default=a}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JZGR5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0lkZHkvLi9pbmRleC50cyIsIndlYnBhY2s6Ly9JZGR5Ly4vaWRkeUNsaWVudC50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIl9fYXdhaXRlciIsInRoaXMiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInN0ZXAiLCJuZXh0IiwiZSIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJhcHBseSIsIl9fZ2VuZXJhdG9yIiwiYm9keSIsImYiLCJ5IiwiZyIsIl8iLCJsYWJlbCIsInNlbnQiLCJ0cnlzIiwib3BzIiwidmVyYiIsInRocm93IiwicmV0dXJuIiwiaXRlcmF0b3IiLCJ2Iiwib3AiLCJUeXBlRXJyb3IiLCJwb3AiLCJsZW5ndGgiLCJwdXNoIiwiX3RoaXMiLCJpZGR5Q2xpZW50XzEiLCJjcmVhdGVJZGR5Q2xpZW50Iiwib3B0aW9ucyIsIl9hIiwiZnVuY3Rpb25BIiwiY29uc29sZSIsImxvZyIsInVzZXJDYWNoZUtleSIsImlzQXV0aGVudGljYXRlZENhY2hlS2V5IiwiSWRkeUNsaWVudCIsImNsaWVudE9wdGlvbnMiLCJnZXRVc2VyIiwidXNlciIsInJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwiZmV0Y2giLCJkb21haW4iLCJjcmVkZW50aWFscyIsIm9rIiwianNvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJpc0F1dGhlbnRpY2F0ZWQiLCJsb2dpbldpdGhSZWRpcmVjdCIsInJlZGlyZWN0VXJpIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9nb3V0IiwicmV0dXJuVG8iLCJfYiIsInJlbW92ZUl0ZW0iXSwibWFwcGluZ3MiOiJxQkFDQSxJQUFBQSxFQUFBLEdBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsR0FBQSxDQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFFBQUEsSUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBMERBLE9BckRBRixFQUFBUSxFQUFBRixFQUdBTixFQUFBUyxFQUFBVixFQUdBQyxFQUFBVSxFQUFBLFNBQUFSLEVBQUFTLEVBQUFDLEdBQ0FaLEVBQUFhLEVBQUFYLEVBQUFTLElBQ0FHLE9BQUFDLGVBQUFiLEVBQUFTLEVBQUEsQ0FBMENLLFlBQUEsRUFBQUMsSUFBQUwsS0FLMUNaLEVBQUFrQixFQUFBLFNBQUFoQixHQUNBLG9CQUFBaUIsZUFBQUMsYUFDQU4sT0FBQUMsZUFBQWIsRUFBQWlCLE9BQUFDLFlBQUEsQ0FBd0RDLE1BQUEsV0FFeERQLE9BQUFDLGVBQUFiLEVBQUEsY0FBaURtQixPQUFBLEtBUWpEckIsRUFBQXNCLEVBQUEsU0FBQUQsRUFBQUUsR0FFQSxHQURBLEVBQUFBLElBQUFGLEVBQUFyQixFQUFBcUIsSUFDQSxFQUFBRSxFQUFBLE9BQUFGLEVBQ0EsS0FBQUUsR0FBQSxpQkFBQUYsUUFBQUcsV0FBQSxPQUFBSCxFQUNBLElBQUFJLEVBQUFYLE9BQUFZLE9BQUEsTUFHQSxHQUZBMUIsRUFBQWtCLEVBQUFPLEdBQ0FYLE9BQUFDLGVBQUFVLEVBQUEsV0FBeUNULFlBQUEsRUFBQUssVUFDekMsRUFBQUUsR0FBQSxpQkFBQUYsRUFBQSxRQUFBTSxLQUFBTixFQUFBckIsRUFBQVUsRUFBQWUsRUFBQUUsRUFBQSxTQUFBQSxHQUFnSCxPQUFBTixFQUFBTSxJQUFxQkMsS0FBQSxLQUFBRCxJQUNySSxPQUFBRixHQUlBekIsRUFBQTZCLEVBQUEsU0FBQTFCLEdBQ0EsSUFBQVMsRUFBQVQsS0FBQXFCLFdBQ0EsV0FBMkIsT0FBQXJCLEVBQUEsU0FDM0IsV0FBaUMsT0FBQUEsR0FFakMsT0FEQUgsRUFBQVUsRUFBQUUsRUFBQSxJQUFBQSxHQUNBQSxHQUlBWixFQUFBYSxFQUFBLFNBQUFpQixFQUFBQyxHQUFzRCxPQUFBakIsT0FBQWtCLFVBQUFDLGVBQUExQixLQUFBdUIsRUFBQUMsSUFHdEQvQixFQUFBa0MsRUFBQSxHQUlBbEMsSUFBQW1DLEVBQUEsa0NDakZBLElBQUFDLEVBQUFDLFdBQUFELFdBQUEsU0FBQUUsRUFBQUMsRUFBQUMsRUFBQUMsR0FDQSxXQUFBRCxNQUFBRSxVQUFBLFNBQUFDLEVBQUFDLEdBQ0EsU0FBQUMsRUFBQXhCLEdBQW1DLElBQU15QixFQUFBTCxFQUFBTSxLQUFBMUIsSUFBK0IsTUFBQTJCLEdBQVlKLEVBQUFJLElBQ3BGLFNBQUFDLEVBQUE1QixHQUFrQyxJQUFNeUIsRUFBQUwsRUFBQSxNQUFBcEIsSUFBbUMsTUFBQTJCLEdBQVlKLEVBQUFJLElBQ3ZGLFNBQUFGLEVBQUFJLEdBQStCQSxFQUFBQyxLQUFBUixFQUFBTyxFQUFBN0IsT0FBQSxJQUFBbUIsRUFBQSxTQUFBRyxHQUFpRUEsRUFBQU8sRUFBQTdCLFNBQXlCK0IsS0FBQVAsRUFBQUksR0FDekhILEdBQUFMLElBQUFZLE1BQUFmLEVBQUFDLEdBQUEsS0FBQVEsV0FHQU8sRUFBQWpCLFdBQUFpQixhQUFBLFNBQUFoQixFQUFBaUIsR0FDQSxJQUF3R0MsRUFBQUMsRUFBQW5DLEVBQUFvQyxFQUF4R0MsRUFBQSxDQUFhQyxNQUFBLEVBQUFDLEtBQUEsV0FBNkIsS0FBQXZDLEVBQUEsU0FBQUEsRUFBQSxHQUEwQixPQUFBQSxFQUFBLElBQWV3QyxLQUFBLEdBQUFDLElBQUEsSUFDbkYsT0FBQUwsRUFBQSxDQUFnQlgsS0FBQWlCLEVBQUEsR0FBQUMsTUFBQUQsRUFBQSxHQUFBRSxPQUFBRixFQUFBLElBQXFELG1CQUFBN0MsU0FBQXVDLEVBQUF2QyxPQUFBZ0QsVUFBQSxXQUFvRSxPQUFBOUIsT0FBZXFCLEVBQ3hKLFNBQUFNLEVBQUFuQyxHQUFzQixnQkFBQXVDLEdBQXNCLE9BQzVDLFNBQUFDLEdBQ0EsR0FBQWIsRUFBQSxVQUFBYyxVQUFBLG1DQUNBLEtBQUFYLEdBQUEsSUFDQSxHQUFBSCxFQUFBLEVBQUFDLElBQUFuQyxFQUFBLEVBQUErQyxFQUFBLEdBQUFaLEVBQUEsT0FBQVksRUFBQSxHQUFBWixFQUFBLFNBQUFuQyxFQUFBbUMsRUFBQSxTQUFBbkMsRUFBQWYsS0FBQWtELEdBQUEsR0FBQUEsRUFBQVYsU0FBQXpCLElBQUFmLEtBQUFrRCxFQUFBWSxFQUFBLEtBQUFsQixLQUFBLE9BQUE3QixFQUVBLE9BREFtQyxFQUFBLEVBQUFuQyxJQUFBK0MsRUFBQSxHQUFBQSxFQUFBLEdBQUEvQyxFQUFBRCxRQUNBZ0QsRUFBQSxJQUNBLGNBQUEvQyxFQUFBK0MsRUFBdUMsTUFDdkMsT0FBa0MsT0FBbENWLEVBQUFDLFFBQWtDLENBQVN2QyxNQUFBZ0QsRUFBQSxHQUFBbEIsTUFBQSxHQUMzQyxPQUFBUSxFQUFBQyxRQUFrQ0gsRUFBQVksRUFBQSxHQUFXQSxFQUFBLElBQVUsU0FDdkQsT0FBQUEsRUFBQVYsRUFBQUksSUFBQVEsTUFBeUNaLEVBQUFHLEtBQUFTLE1BQWMsU0FDdkQsUUFDQSxLQUFBakQsS0FBQXFDLEVBQUFHLE1BQUFVLE9BQUEsR0FBQWxELElBQUFrRCxPQUFBLFVBQUFILEVBQUEsUUFBQUEsRUFBQSxLQUE2R1YsRUFBQSxFQUFPLFNBQ3BILE9BQUFVLEVBQUEsTUFBQS9DLEdBQUErQyxFQUFBLEdBQUEvQyxFQUFBLElBQUErQyxFQUFBLEdBQUEvQyxFQUFBLEtBQWdGcUMsRUFBQUMsTUFBQVMsRUFBQSxHQUFpQixNQUNqRyxPQUFBQSxFQUFBLElBQUFWLEVBQUFDLE1BQUF0QyxFQUFBLElBQXdEcUMsRUFBQUMsTUFBQXRDLEVBQUEsR0FBZ0JBLEVBQUErQyxFQUFRLE1BQ2hGLEdBQUEvQyxHQUFBcUMsRUFBQUMsTUFBQXRDLEVBQUEsSUFBOENxQyxFQUFBQyxNQUFBdEMsRUFBQSxHQUFnQnFDLEVBQUFJLElBQUFVLEtBQUFKLEdBQWdCLE1BQzlFL0MsRUFBQSxJQUFBcUMsRUFBQUksSUFBQVEsTUFDQVosRUFBQUcsS0FBQVMsTUFBaUMsU0FFakNGLEVBQUFkLEVBQUFoRCxLQUFBK0IsRUFBQXFCLEdBQ1MsTUFBQVgsR0FBWXFCLEVBQUEsR0FBQXJCLEdBQWFTLEVBQUEsRUFBUyxRQUFVRCxFQUFBbEMsRUFBQSxFQUNyRCxLQUFBK0MsRUFBQSxTQUFBQSxFQUFBLEdBQW1DLE9BQVNoRCxNQUFBZ0QsRUFBQSxHQUFBQSxFQUFBLFVBQUFsQixNQUFBLEdBckJBTCxDQUFBLENBQUFqQixFQUFBdUMsT0F3QjVDTSxFQUFBckMsS0FDQW5DLEVBQUFzQixZQUFBLEVBQ0EsSUFBQW1ELEVBQW1CM0UsRUFBUSxHQVEzQkUsRUFBQTBFLGlCQVBBLFNBQUFDLEdBQTJDLE9BQUF6QyxFQUFBc0MsT0FBQSxvQkFFM0MsT0FBQXBCLEVBQUFqQixLQUFBLFNBQUF5QyxHQUVBLFNBREEsSUFBQUgsRUFBQSxRQUFBRSxTQVFBM0UsRUFBQTZFLFVBSEEsV0FDQUMsUUFBQUMsSUFBQSxxQkFHQS9FLEVBQUEsUUFBQXlFLEVBQUEsc0NDbERBLElBQUF2QyxFQUFBQyxXQUFBRCxXQUFBLFNBQUFFLEVBQUFDLEVBQUFDLEVBQUFDLEdBQ0EsV0FBQUQsTUFBQUUsVUFBQSxTQUFBQyxFQUFBQyxHQUNBLFNBQUFDLEVBQUF4QixHQUFtQyxJQUFNeUIsRUFBQUwsRUFBQU0sS0FBQTFCLElBQStCLE1BQUEyQixHQUFZSixFQUFBSSxJQUNwRixTQUFBQyxFQUFBNUIsR0FBa0MsSUFBTXlCLEVBQUFMLEVBQUEsTUFBQXBCLElBQW1DLE1BQUEyQixHQUFZSixFQUFBSSxJQUN2RixTQUFBRixFQUFBSSxHQUErQkEsRUFBQUMsS0FBQVIsRUFBQU8sRUFBQTdCLE9BQUEsSUFBQW1CLEVBQUEsU0FBQUcsR0FBaUVBLEVBQUFPLEVBQUE3QixTQUF5QitCLEtBQUFQLEVBQUFJLEdBQ3pISCxHQUFBTCxJQUFBWSxNQUFBZixFQUFBQyxHQUFBLEtBQUFRLFdBR0FPLEVBQUFqQixXQUFBaUIsYUFBQSxTQUFBaEIsRUFBQWlCLEdBQ0EsSUFBd0dDLEVBQUFDLEVBQUFuQyxFQUFBb0MsRUFBeEdDLEVBQUEsQ0FBYUMsTUFBQSxFQUFBQyxLQUFBLFdBQTZCLEtBQUF2QyxFQUFBLFNBQUFBLEVBQUEsR0FBMEIsT0FBQUEsRUFBQSxJQUFld0MsS0FBQSxHQUFBQyxJQUFBLElBQ25GLE9BQUFMLEVBQUEsQ0FBZ0JYLEtBQUFpQixFQUFBLEdBQUFDLE1BQUFELEVBQUEsR0FBQUUsT0FBQUYsRUFBQSxJQUFxRCxtQkFBQTdDLFNBQUF1QyxFQUFBdkMsT0FBQWdELFVBQUEsV0FBb0UsT0FBQTlCLE9BQWVxQixFQUN4SixTQUFBTSxFQUFBbkMsR0FBc0IsZ0JBQUF1QyxHQUFzQixPQUM1QyxTQUFBQyxHQUNBLEdBQUFiLEVBQUEsVUFBQWMsVUFBQSxtQ0FDQSxLQUFBWCxHQUFBLElBQ0EsR0FBQUgsRUFBQSxFQUFBQyxJQUFBbkMsRUFBQSxFQUFBK0MsRUFBQSxHQUFBWixFQUFBLE9BQUFZLEVBQUEsR0FBQVosRUFBQSxTQUFBbkMsRUFBQW1DLEVBQUEsU0FBQW5DLEVBQUFmLEtBQUFrRCxHQUFBLEdBQUFBLEVBQUFWLFNBQUF6QixJQUFBZixLQUFBa0QsRUFBQVksRUFBQSxLQUFBbEIsS0FBQSxPQUFBN0IsRUFFQSxPQURBbUMsRUFBQSxFQUFBbkMsSUFBQStDLEVBQUEsR0FBQUEsRUFBQSxHQUFBL0MsRUFBQUQsUUFDQWdELEVBQUEsSUFDQSxjQUFBL0MsRUFBQStDLEVBQXVDLE1BQ3ZDLE9BQWtDLE9BQWxDVixFQUFBQyxRQUFrQyxDQUFTdkMsTUFBQWdELEVBQUEsR0FBQWxCLE1BQUEsR0FDM0MsT0FBQVEsRUFBQUMsUUFBa0NILEVBQUFZLEVBQUEsR0FBV0EsRUFBQSxJQUFVLFNBQ3ZELE9BQUFBLEVBQUFWLEVBQUFJLElBQUFRLE1BQXlDWixFQUFBRyxLQUFBUyxNQUFjLFNBQ3ZELFFBQ0EsS0FBQWpELEtBQUFxQyxFQUFBRyxNQUFBVSxPQUFBLEdBQUFsRCxJQUFBa0QsT0FBQSxVQUFBSCxFQUFBLFFBQUFBLEVBQUEsS0FBNkdWLEVBQUEsRUFBTyxTQUNwSCxPQUFBVSxFQUFBLE1BQUEvQyxHQUFBK0MsRUFBQSxHQUFBL0MsRUFBQSxJQUFBK0MsRUFBQSxHQUFBL0MsRUFBQSxLQUFnRnFDLEVBQUFDLE1BQUFTLEVBQUEsR0FBaUIsTUFDakcsT0FBQUEsRUFBQSxJQUFBVixFQUFBQyxNQUFBdEMsRUFBQSxJQUF3RHFDLEVBQUFDLE1BQUF0QyxFQUFBLEdBQWdCQSxFQUFBK0MsRUFBUSxNQUNoRixHQUFBL0MsR0FBQXFDLEVBQUFDLE1BQUF0QyxFQUFBLElBQThDcUMsRUFBQUMsTUFBQXRDLEVBQUEsR0FBZ0JxQyxFQUFBSSxJQUFBVSxLQUFBSixHQUFnQixNQUM5RS9DLEVBQUEsSUFBQXFDLEVBQUFJLElBQUFRLE1BQ0FaLEVBQUFHLEtBQUFTLE1BQWlDLFNBRWpDRixFQUFBZCxFQUFBaEQsS0FBQStCLEVBQUFxQixHQUNTLE1BQUFYLEdBQVlxQixFQUFBLEdBQUFyQixHQUFhUyxFQUFBLEVBQVMsUUFBVUQsRUFBQWxDLEVBQUEsRUFDckQsS0FBQStDLEVBQUEsU0FBQUEsRUFBQSxHQUFtQyxPQUFTaEQsTUFBQWdELEVBQUEsR0FBQUEsRUFBQSxVQUFBbEIsTUFBQSxHQXJCQUwsQ0FBQSxDQUFBakIsRUFBQXVDLE9Bd0I1Q2xFLEVBQUFzQixZQUFBLEVBQ0EsSUFBQTBELEVBQUEsWUFDQUMsRUFBQSx1QkFDQUMsRUFDQSxTQUFBQyxHQUNBLElBQUFYLEVBQUFyQyxLQUNBQSxLQUFBaUQsUUFBQSxXQUFvQyxPQUFBbEQsRUFBQXNDLE9BQUEsb0JBQ3BDLElBQUFhLEVBQUFDLEVBQ0EsT0FBQWxDLEVBQUFqQixLQUFBLFNBQUF5QyxHQUNBLE9BQUFBLEVBQUFsQixPQUNBLE9BSUEsT0FEQTJCLEdBRkFBLEVBQUEsTUFFQUUsS0FBQUMsTUFBQUgsR0FBQSxNQUNBLE1BQ0EsR0FBQUksTUFBQXRELEtBQUF1RCxPQUFBLFdBQTZFckUsS0FBQSxPQUFBc0UsWUFBQSxhQUM3RSxPQUVBLE9BREFMLEVBQUFWLEVBQUFqQixRQUNBaUMsR0FDQSxHQUFBTixFQUFBTyxRQURBLE1BRUEsT0FJQSxPQUhBUixFQUFBVCxFQUFBakIsT0FDQW1DLGFBQUFDLFFBQUFmLEVBQUFPLEtBQUFTLFVBQUFYLElBQ0FTLGFBQUFDLFFBQUFkLEVBQUEsUUFDQSxNQUNBLE9BQ0FJLEVBQUEsS0FDQVQsRUFBQWxCLE1BQUEsRUFDQSxnQkFBQTJCLFNBSUFsRCxLQUFBOEQsZ0JBQUEsV0FBNEMsT0FBQS9ELEVBQUFzQyxPQUFBLG9CQUU1QyxPQUFBcEIsRUFBQWpCLEtBQUEsU0FBQXlDLEdBQ0EsT0FBQUEsRUFBQWxCLE9BQ0EsZ0JBQUF2QixLQUFBaUQsV0FDQSxPQUVBLFdBREFSLEVBQUFqQixjQUtBeEIsS0FBQStELGtCQUFBLFNBQUF0QixHQUNBLElBQUF1QixFQUFBdkIsRUFBQXVCLFlBQ0FDLE9BQUFDLFNBQUFDLEtBQUE5QixFQUFBa0IsT0FBQSxzQkFBQWEsbUJBQUFKLElBRUFoRSxLQUFBcUUsT0FBQSxTQUFBNUIsR0FDQSxJQUFBNkIsRUFBQTdCLEVBQUE2QixTQUNBLE9BQUF2RSxFQUFBc0MsT0FBQSxvQkFFQSxPQUFBcEIsRUFBQWpCLEtBQUEsU0FBQXVFLEdBQ0EsT0FBQUEsRUFBQWhELE9BQ0EsT0FHQSxPQUZBb0MsYUFBQWEsV0FBQTNCLEdBQ0FjLGFBQUFhLFdBQUExQixHQUNBLEdBQUFRLE1BQUF0RCxLQUFBdUQsT0FBQSxlQUFxRnJFLEtBQUEsT0FBQXNFLFlBQUEsYUFDckYsT0FFQSxTQURBZSxFQUFBL0MsT0FDQWtDLFFBQ0EsT0FHQSxPQUZBYSxFQUFBL0MsT0FDQXlDLE9BQUFDLFNBQUFDLEtBQUFHLEVBQ0EsVUFLQXRCLEVBQUFPLE9BQ0F2RCxLQUFBdUQsT0FBQSxXQUFBUCxFQUFBTyxTQUErRCxFQUcvRHZELEtBQUF1RCxPQUFBLElBS0ExRixFQUFBLFFBQUFrRiIsImZpbGUiOiJpZGR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF90aGlzID0gdGhpcztcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgaWRkeUNsaWVudF8xID0gcmVxdWlyZShcIi4vaWRkeUNsaWVudFwiKTtcbnZhciBjcmVhdGVJZGR5Q2xpZW50ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaWRkeUNsaWVudDtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIGlkZHlDbGllbnQgPSBuZXcgaWRkeUNsaWVudF8xW1wiZGVmYXVsdFwiXShvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGlkZHlDbGllbnRdO1xuICAgIH0pO1xufSk7IH07XG5leHBvcnRzLmNyZWF0ZUlkZHlDbGllbnQgPSBjcmVhdGVJZGR5Q2xpZW50O1xudmFyIGZ1bmN0aW9uQSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnZnVuY3Rpb25BIC0gT0sgMycpO1xufTtcbmV4cG9ydHMuZnVuY3Rpb25BID0gZnVuY3Rpb25BO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBpZGR5Q2xpZW50XzFbXCJkZWZhdWx0XCJdO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciB1c2VyQ2FjaGVLZXkgPSAnaWRkeS51c2VyJztcbnZhciBpc0F1dGhlbnRpY2F0ZWRDYWNoZUtleSA9ICdpZGR5LmlzQXV0aGVudGljYXRlZCc7XG52YXIgSWRkeUNsaWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJZGR5Q2xpZW50KGNsaWVudE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5nZXRVc2VyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVzZXIsIHJlc3BvbnNlO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlciA9IG51bGwgLy8gbG9jYWxTdG9yYWdlLmdldEl0ZW0odXNlckNhY2hlS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlciA9IHVzZXIgPyBKU09OLnBhcnNlKHVzZXIpIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIXVzZXIpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2godGhpcy5kb21haW4gKyBcIi9hcGkvbWVcIiwgeyBtb2RlOiAnY29ycycsIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzcG9uc2UuanNvbigpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlciA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHVzZXJDYWNoZUtleSwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaXNBdXRoZW50aWNhdGVkQ2FjaGVLZXksICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHVzZXJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgfTtcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdXNlcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5nZXRVc2VyKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sICEhdXNlcl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyB9O1xuICAgICAgICB0aGlzLmxvZ2luV2l0aFJlZGlyZWN0ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgcmVkaXJlY3RVcmkgPSBfYS5yZWRpcmVjdFVyaTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gX3RoaXMuZG9tYWluICsgXCIvbG9naW4/cmVkaXJlY3RVcmk9XCIgKyBlbmNvZGVVUklDb21wb25lbnQocmVkaXJlY3RVcmkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxvZ291dCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIHJldHVyblRvID0gX2EucmV0dXJuVG87XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSwgZGF0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh1c2VyQ2FjaGVLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGlzQXV0aGVudGljYXRlZENhY2hlS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaCh0aGlzLmRvbWFpbiArIFwiL2FwaS9sb2dvdXRcIiwgeyBtb2RlOiAnY29ycycsIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScgfSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlc3BvbnNlLmpzb24oKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJldHVyblRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChjbGllbnRPcHRpb25zLmRvbWFpbikge1xuICAgICAgICAgICAgdGhpcy5kb21haW4gPSBcImh0dHBzOi8vXCIgKyBjbGllbnRPcHRpb25zLmRvbWFpbiB8fCAnJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZG9tYWluID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElkZHlDbGllbnQ7XG59KCkpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBJZGR5Q2xpZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==