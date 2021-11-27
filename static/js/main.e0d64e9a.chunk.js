(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},18:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){},22:function(e,t,i){},23:function(e,t,i){"use strict";i.r(t);var n=i(9),a=i.n(n),r=(i(17),i(12)),l=i(3),s=i(4),c=i(7),o=i(6),d=i(2),m=i.n(d),b=(i(18),i(10)),h=(i(19),i(20),i(0)),j=function(e){var t=e.title,i=e.description,n=e.imgUrl,a=e.imdbUrl;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-image",children:Object(h.jsx)("figure",{className:"image is-4by3",children:Object(h.jsx)("img",{src:n,alt:"Film logo"})})}),Object(h.jsxs)("div",{className:"card-content",children:[Object(h.jsxs)("div",{className:"media",children:[Object(h.jsx)("div",{className:"media-left",children:Object(h.jsx)("figure",{className:"image is-48x48",children:Object(h.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(h.jsx)("div",{className:"media-content",children:Object(h.jsx)("p",{className:"title is-8",children:t})})]}),Object(h.jsxs)("div",{className:"content",children:[i,Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:a,children:"IMDB"})]})]})]})},w=function(e){var t=e.movies;return Object(h.jsx)("div",{className:"movies",children:t.map((function(e){return Object(h.jsx)(j,Object(b.a)({},e),e.imdbId)}))})},u=i(5),p=i(1),g=i.n(p),v=(i(22),function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={newTitle:"",newDescription:"",newImgUrl:"",newImbdUrl:"",newImbdId:"",newTitleValid:!0,newImgUrlValid:!0,newImbdUrlValid:!0,newImbdIdValid:!0},e.changeInput=function(t){var i=t.target,n=i.name,a=i.value;e.setState(Object(u.a)({},n,a))},e}return Object(s.a)(i,[{key:"render",value:function(){var e=this,t=this.state,i=t.newTitle,n=t.newDescription,a=t.newImbdId,r=t.newImbdUrl,l=t.newImgUrl,s=t.newTitleValid,c=t.newImgUrlValid,o=t.newImbdUrlValid,d=t.newImbdIdValid,m=!d||!s||!c||!o||!i||!a||!r||!l;return Object(h.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},className:"form",children:[Object(h.jsxs)("label",{htmlFor:"new-title",children:[Object(h.jsx)("p",{children:"Enter title of movie"}),Object(h.jsx)("input",{name:"newTitle",formNoValidate:!0,type:"text",id:"new-title",value:i,className:g()("new-title",{"error-input":!s}),placeholder:"Title of movie",onChange:this.changeInput,onBlur:function(t){!t.target.value.trim()||!t.target.value.match(/^[\u0430-\u044f\u0410-\u042f\u0451\u0401a-zA-Z0-9\s]+$/)?e.setState({newTitleValid:!1}):e.setState({newTitleValid:!0})}})]}),Object(h.jsx)("div",{className:g()("error",{"error-visible":!s}),children:"Enter correct info"}),Object(h.jsxs)("label",{htmlFor:"new-description",className:"new-description",children:[Object(h.jsx)("p",{children:"Enter description of movie"}),Object(h.jsx)("input",{name:"newDescription",formNoValidate:!0,type:"text",id:"new-description",value:n,onChange:this.changeInput,placeholder:"Description of movie"})]}),Object(h.jsxs)("label",{htmlFor:"new-img-url",children:[Object(h.jsx)("p",{children:"Enter imgUrl of movie"}),Object(h.jsx)("input",{name:"newImgUrl",formNoValidate:!0,type:"text",id:"new-img-url",value:l,className:g()("new-img-url",{"error-input":!c}),placeholder:"imgUrl",onChange:this.changeInput,onBlur:function(t){!t.target.value.trim()||!t.target.value.match(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/)?e.setState({newImgUrlValid:!1}):e.setState({newImgUrlValid:!0})}})]}),Object(h.jsx)("div",{className:g()("error",{"error-visible":!c}),children:"Enter correct info"}),Object(h.jsxs)("label",{htmlFor:"new-imbd-url",children:[Object(h.jsx)("p",{children:"Enter imdbUrl of movie"}),Object(h.jsx)("input",{name:"newImbdUrl",formNoValidate:!0,type:"text",id:"new-imbd-url",value:r,className:g()("new-imbd-url",{"error-input":!o}),placeholder:"imdbUrl",onChange:this.changeInput,onBlur:function(t){!t.target.value.trim()||!t.target.value.match(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/)?e.setState({newImbdUrlValid:!1}):e.setState({newImbdUrlValid:!0})}})]}),Object(h.jsx)("div",{className:g()("error",{"error-visible":!o}),children:"Enter correct info"}),Object(h.jsxs)("label",{htmlFor:"new-imbd-id",children:[Object(h.jsx)("p",{children:"Enter imdbId of movie"}),Object(h.jsx)("input",{name:"newImbdId",formNoValidate:!0,type:"text",id:"new-imbd-id",value:a,className:g()("new-imbd-id",{"error-input":!d}),placeholder:"imdbId",onChange:this.changeInput,onBlur:function(t){!t.target.value||!t.target.value.match(/^[\u0430-\u044f\u0410-\u042f\u0451\u0401a-zA-Z0-9]+$/)?e.setState({newImbdIdValid:!1}):e.setState({newImbdIdValid:!0})}})]}),Object(h.jsx)("div",{className:g()("error",{"error-visible":!d}),children:"Enter correct info"}),Object(h.jsx)("button",{className:"add-button",disabled:m,type:"submit",onClick:function(){var t={title:i,description:n,imgUrl:l,imdbUrl:r,imdbId:a};e.props.onAdd(t),e.setState({newTitle:"",newDescription:"",newImgUrl:"",newImbdUrl:"",newImbdId:""})},children:"Add movie"})]})}}]),i}(m.a.Component)),f=i(11),O=function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={movies:f},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(r.a)(e.movies),[t])}}))},e}return Object(s.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(h.jsxs)("div",{className:"page",children:[Object(h.jsx)("div",{className:"page-content",children:Object(h.jsx)(w,{movies:e})}),Object(h.jsx)("div",{className:"sidebar",children:Object(h.jsx)(v,{onAdd:this.addMovie})})]})}}]),i}(m.a.Component);a.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.e0d64e9a.chunk.js.map