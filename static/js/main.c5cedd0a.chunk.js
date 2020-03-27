(this["webpackJsonpreact-presentation"]=this["webpackJsonpreact-presentation"]||[]).push([[0],[,,,,,,,,,,,function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),i=t.n(r),o=(t(16),t(17),t(1)),s=t(2),c=t(4),u=t(3),m=t(5);t(18);function d(e){return l.a.createElement("div",{className:"intro",id:"intro"},l.a.createElement("h1",null,"ReactJS"),"ReactJS je JavaScript biblioteka za kreiranje Single-page aplikacija. ",l.a.createElement("br",null),"Kao glavni cilj ima kreiranje korisni\u010dkih interfejsa. ",l.a.createElement("br",null),"Zasniva se na kreiranju komponenata koje se mogu upotrebiti vi\u0161e puta.",l.a.createElement("br",null),'React koristi JSX za kreiranje elemenata. JSX je deo JavaScript-a koji izgleda kao HTML kod, ali nije, ve\u0107 je kombinacija JavaScript-a i XML-a. Neki od atributa unutar ovih elemenata se mogu razlikovati od ekvivalenata u HTML-u. Takodje prilikom pisanja atributa od dve ili vise re\u010di koristi se camel case umesto "-". Iako se JSX \u010desto koristi nije obavezan prilikom pisanja React aplikacija.',l.a.createElement("br",null),"Primer JSX-a:",l.a.createElement("br",null),l.a.createElement("div",{className:"code"},'return <div className="container">Zdravo!</div>'))}t(19);var p=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"flex-vertical-container"},l.a.createElement("div",null,l.a.createElement("h3",null,"Class"),l.a.createElement("div",null,"Sve class komponente moraju naslediti Component klasu od react-a. Tako\u0111e moraju sadr\u017eati metodu render koja ce kao povratnu vrenost imati element. \u010cesto sadr\u017ee i constructor u kome se nalazi default vrednosti za state ukoliko nam je potreban. Do uvo\u0111enja Hooks class komponente su jedine imaje state.")),l.a.createElement("div",null,"Primer",l.a.createElement("div",{className:"code"},l.a.createElement("span",{className:"violet"},"import")," ",l.a.createElement("span",{className:"green"},"React")," ",l.a.createElement("span",{className:"violet"},"from")," ",l.a.createElement("span",{className:"orange"},"'react'"),";",l.a.createElement("br",null),l.a.createElement("span",{className:"violet"},"export default")," ",l.a.createElement("span",{className:"blue"},"class")," ",l.a.createElement("span",{className:"yellow"},"HelloWorld"),l.a.createElement("span",{className:"blue"}," extends")," ",l.a.createElement("span",{className:"green"},"React.Component"),"{"," ",l.a.createElement("br",null),"\u2003",l.a.createElement("span",{className:"blue"},"render"),"()","{"," ",l.a.createElement("br",null),"\u2003\u2003",l.a.createElement("span",{className:"violet"},"return")," ",l.a.createElement("span",{className:"blue"},"<div>"),l.a.createElement("br",null),"\u2003\u2003\u2003Hello World!",l.a.createElement("br",null),"\u2003\u2003",l.a.createElement("span",{className:"blue"},"</div>"),l.a.createElement("br",null),"\u2003","}",l.a.createElement("br",null),"}")))}}]),a}(l.a.Component);function v(e){return l.a.createElement("div",{className:"flex-vertical-container"},l.a.createElement("div",null,l.a.createElement("h3",null,"Function"),l.a.createElement("div",null,"Funkcionalne komponente su komponente koje bi naj\u010de\u0161\u0107e trebalo upotrebljavati. Kao parametar uzimaju props, dok se state moze realizovati uz pomo\u0107 Hooks. Pre uvo\u0111enja Hooks ovaj tip komponente je bio stateless. Funkcije su bli\u017ee obicnom JavaScript-u zbog \u010dega je ova vrsta komponente bolja za kori\u0161\u0107enje.")),l.a.createElement("div",null,"Primer",l.a.createElement("div",{className:"code"},l.a.createElement("span",{className:"violet"},"import")," ",l.a.createElement("span",{className:"green"},"React")," ",l.a.createElement("span",{className:"violet"},"from")," ",l.a.createElement("span",{className:"orange"},"'react'"),";",l.a.createElement("br",null),l.a.createElement("span",{className:"violet"},"export default")," ",l.a.createElement("span",{className:"blue"},"function")," ",l.a.createElement("span",{className:"yellow"},"HelloWorld"),"() ","{"," ",l.a.createElement("br",null),"\u2003",l.a.createElement("span",{className:"violet"},"return")," ",l.a.createElement("span",{className:"blue"},"<div>"),l.a.createElement("br",null),"\u2003\u2003Hello World!",l.a.createElement("br",null),"\u2003",l.a.createElement("span",{className:"blue"},"</div>"),l.a.createElement("br",null),"}")))}t(20);var b=function(){return l.a.createElement("div",null,l.a.createElement("div",null,"Komponente su osnovne gradivne jedinice u React-u. Nezavisne su u mogu se ponavljati po potrebi. Mogu se kreirati uz pomo\u0107 funkcija ili klasa. Sve elementi jedne komponente moraju se nalaziti u jednom roditeljskom elementu koji komponenta vra\u0107a. Svaka komponenta mora sad\u017eati import React-a. Ukoliko se state ili props promene komponenta \u0107e se rerender-ovati, ali ne\u0107e morati cela stranica da se ponovo render ve\u0107 samo ta komponenta."),l.a.createElement("div",{className:"flex-container"},l.a.createElement(p,null),l.a.createElement(v,null)))};function h(){return l.a.createElement("div",{className:"flex-vertical-container"},l.a.createElement("h2",null,"Properties"),l.a.createElement("div",null,"Sve komponente mogu da imaju svoje props (properties). Props su atributi prosle\u0111eni nekoj komponenti. Props su Read-only"),l.a.createElement("div",null,"Primer",l.a.createElement("div",{className:"code"},l.a.createElement("span",{className:"blue"},"function")," ",l.a.createElement("span",{className:"yellow"},"Welcome"),"(props: ","{"," name: ",l.a.createElement("span",{className:"green"},"string"),"}",") ","{"," ",l.a.createElement("br",null),"\u2003",l.a.createElement("span",{className:"violet"},"return")," ",l.a.createElement("span",{className:"blue"},"<div>"),l.a.createElement("br",null),"\u2003\u2003Welcome, ","{"," props.name ","}","!",l.a.createElement("br",null),"\u2003",l.a.createElement("span",{className:"blue"},"</div>"),l.a.createElement("br",null),"}"),"Rezultat",l.a.createElement("div",{className:"result"},l.a.createElement(E,{name:"everyone"}))))}function E(e){return l.a.createElement("div",null,"Welcome, ",e.name,"! \u2003")}function f(){return l.a.createElement("div",{className:"flex-vertical-container"},l.a.createElement("h2",null,"State"),l.a.createElement("div",null,"Komponente mogu da imaju svoj state. State su atributi koji pripadaju komponenti u kojoj su definisani, za razliku od props koje roditelj prosle\u0111uje i koji su read-only. Sa uvo\u0111enjem Hooks i funkcionalne komponente mogu realizovati state. Kod class komponenti defini\u0161e se u constructoru, a u funkcionalnim kori\u0161\u0107enjem useState() hook-a."),l.a.createElement("div",null,"Primer",l.a.createElement("div",{className:"code"},l.a.createElement("span",{className:"blue"},"class")," ",l.a.createElement("span",{className:"yellow"},"Welcome"),l.a.createElement("span",{className:"blue"}," extends")," ",l.a.createElement("span",{className:"green"},"React.Component"),"< {}, { "," quote: ",l.a.createElement("span",{className:"green"},"string"),", author: ",l.a.createElement("span",{className:"green"},"string")," ","} >","{",l.a.createElement("br",null),"\u2003",l.a.createElement("span",{className:"blue"},"constructor")," (props: ",l.a.createElement("span",{className:"green"},"any"),") ","{"," ",l.a.createElement("br",null),"\u2003\u2003",l.a.createElement("span",{className:"blue"},"super")," ( props );",l.a.createElement("br",null),"\u2003\u2003",l.a.createElement("span",{className:"blue"},"this"),".state = ","{"," ",l.a.createElement("br",null),"\u2003\u2003\u2003quote: ",l.a.createElement("span",{className:"orange"},'"Be yourself; everyone else is already taken."'),", ",l.a.createElement("br",null),"\u2003\u2003\u2003author: ",l.a.createElement("span",{className:"orange"},'"Oscar Wilde"')," ",l.a.createElement("br",null),"\u2003\u2003","}","; ",l.a.createElement("br",null),"\u2003","}"," ",l.a.createElement("br",null),"\u2003",l.a.createElement("span",{className:"yellow"},"render")," ()","{",l.a.createElement("br",null),"\u2003\u2003",l.a.createElement("span",{className:"violet"},"return")," ",l.a.createElement("span",{className:"blue"},"<div>"),l.a.createElement("br",null),'\u2003\u2003\u2003"',"{"," ",l.a.createElement("span",{className:"blue"},"this"),".state.quote ","}",'"',l.a.createElement("br",null),"\u2003\u2003\u2003- ","{"," ",l.a.createElement("span",{className:"blue"},"this"),".state.author ","}",l.a.createElement("br",null),"\u2003\u2003",l.a.createElement("span",{className:"blue"},"</div>"),l.a.createElement("br",null),"\u2003","}",l.a.createElement("br",null),"}"),"Rezultat",l.a.createElement("div",{className:"result"},l.a.createElement(k,null))))}var k=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).state={quote:"Be yourself; everyone else is already taken.",author:"Oscar Wilde"},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,'"',this.state.quote,'" ',l.a.createElement("br",null),"- ",this.state.author,"\u2003\u2003")}}]),a}(l.a.Component),g=t(6),j=t(8),N=t(7);function S(e){return l.a.createElement("input",{type:e.type,className:e.class,value:e.value,id:e.id,onChange:function(a){return e.onChange(a.target.value,e.id)},placeholder:e.placeholder})}function y(e){var a=Object(n.useState)({value:"",s:""}),t=Object(N.a)(a,2),r=t[0],i=t[1];return l.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e.handleSubmit(r)}},l.a.createElement("div",{className:"flex-container"},l.a.createElement(S,{type:"text",value:r.value,onChange:i,id:"form",placeholder:e.placeholder,class:e.inputClass}),!e.hideButton&&l.a.createElement("button",{className:e.buttonClass},e.buttonLabel)))}var C=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).stylize=function(e){return e.toUpperCase()},t.state={submitValues:[],condition:!1,firstName:""},t.handleSubmit=t.handleSubmit.bind(Object(j.a)(t)),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"handleSubmit",value:function(e){e&&this.setState({submitValues:[].concat(Object(g.a)(this.state.submitValues),[this.stylize(e)])})}},{key:"render",value:function(){this.state.condition;return l.a.createElement("div",null,l.a.createElement("div",null,"Forme u React-u se mogu pona\u0161ati kao obi\u010dne HTML forme, ali one se \u010desto obra\u0111uju uz pomoc metoda koje napi\u0161emo. Time mo\u017eemo da spre\u010dimo da se stranica ponovo u\u010ditava i samo izmenimo jednu komponentu koja je potrebna. ",l.a.createElement("br",null),'Ukoliko koristimo class komponente metode moramo da bind za "this" kome pripada u konstruktoru, ali ukoliko se koriste arrow metode to nije potrebno jer vec u sebi sadr\u017ee "this". ',l.a.createElement("br",null),"Primer:"),l.a.createElement("div",{className:"code"},"constructor(props) {"," ",l.a.createElement("br",null),"super(props);"," ",l.a.createElement("br",null),"this.handleSubmit = this.handleSubmit.bind(this);"," ",l.a.createElement("br",null),"}",l.a.createElement("br",null),l.a.createElement("br",null),"handleSubmit(event) {"," ",l.a.createElement("br",null),"alert(event.target.value);",l.a.createElement("br",null),"event.preventDefault(); //sprecava refresh stranice"," ",l.a.createElement("br",null),"}",l.a.createElement("br",null),l.a.createElement("br",null),"setValue = (event) => {"," ",l.a.createElement("br",null),"this.setState({value: event.target.value});",l.a.createElement("br",null),"}",l.a.createElement("br",null),l.a.createElement("br",null),"render() {"," ",l.a.createElement("br",null),"return <form onSubmit={this.handleSubmit}>"," ",l.a.createElement("br",null),'<input type="text" value={this.state.value} onChange={this.setValue}/>',l.a.createElement("br",null),"<button>Dodaj</button>",l.a.createElement("br",null),"</form>",l.a.createElement("br",null),"}",l.a.createElement("br",null)),l.a.createElement("ul",null,this.state.submitValues.map((function(e){return l.a.createElement("li",null,e)}))),l.a.createElement(y,{buttonLabel:"Add",handleSubmit:this.handleSubmit}))}}]),a}(l.a.Component),O=(t(21),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).handleVisible=function(){t.setState({visible:!t.state.visible})},t.state={visible:!1},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.children,n=this.state.visible;return l.a.createElement("div",{className:n?"accordion-container accordion-border":"accordion-container"},l.a.createElement("div",{onClick:this.handleVisible,className:n?"accordion-header accordion-active":"accordion-header"},l.a.createElement("h2",null,a),l.a.createElement("button",{className:n?"accordion-button accordion-active":"accordion-button",onClick:this.handleVisible},n?l.a.createElement("span",null,"\u2212"):l.a.createElement("span",null,"+"))),n&&l.a.createElement("div",{className:"flex-container"},t))}}]),a}(l.a.Component)),x=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.setMessage("Hello!")}},{key:"componentWillUnmount",value:function(){this.props.setMessage("Goodbye!")}},{key:"render",value:function(){return l.a.createElement("div",{className:"flex-vertical-container code"},l.a.createElement("div",null,l.a.createElement("button",{onClick:this.props.setVisible},"X")),l.a.createElement("div",null,"componentDidMount()","{",l.a.createElement("br",null),'this.props.setMessage("Hello!");',l.a.createElement("br",null),"}"),l.a.createElement("div",null,"componentWillUnmount()","{",l.a.createElement("br",null),'this.props.setMessage("Goodbye!");',l.a.createElement("br",null),"}"))}}]),a}(l.a.Component),z=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).handleVisible=function(){t.setState({visible:!t.state.visible})},t.handleMessage=function(e){t.setState({message:e})},t.state={message:"",visible:!1},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"flex-container"},l.a.createElement("div",{className:"flex-vertical-container"},l.a.createElement("div",null,"Class komponente mogu imati lifecycle metode. Ove metode se same pozivaju u odre\u0111enim situacijama, nakon \u0161to se komponenta renderuje, nakon sto se promene props itd. Neke od ovih metoda su izba\u010dene iz upotrebe ili zamenjene novim, zbog odre\u0111enih bagova koji su se javljali. Dve osnovne metode su i contructor i render. ",l.a.createElement("br",null),"Sa uvo\u0111enjem Hooks i funkcionalne komponente ih mogu realizovati uz pomo\u0107 useEffect().",l.a.createElement("br",null),"Naj\u010de\u0161\u0107e kori\u0161\u0107ene su"),l.a.createElement("ul",null,l.a.createElement("li",null,"componentDidMount() - poziva se nakon \u0161to se komponenta u\u010dita"),l.a.createElement("li",null,"componentWillUnmount() - poziva se pre nego \u0161to \u0107e komponenta biti uni\u0161tena. Slu\u017ei da se zaustave timer-i ili uklone event listeneri."),l.a.createElement("li",null,"componentDidUpdate(prevProps, prevState) - poziva se nakon \u0161to se state ili props promene. Prilikom upotrebe trebalo bi dodati neki uslov kako bismo spre\u010dili beskona\u010dno pozivanje metode.")),l.a.createElement("div",null,l.a.createElement("button",{onClick:this.handleVisible},"Klik")),l.a.createElement("div",null,this.state.message)),this.state.visible?l.a.createElement(x,{setMessage:this.handleMessage,setVisible:this.handleVisible}):l.a.createElement("div",{className:"flex-vertical-container"})))}}]),a}(l.a.Component),P=(t(22),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).canvas=l.a.createRef(),t.refreshCanvas=function(){var e=["#FFC09F","#81F4E1","#56CBF9","#FF729F","#FFEE93","#EF476F","#FFD166","#06D6A0","#118AB2","#073B4C"],a=t.canvas.current;if(a){var n=a.getContext("2d");n&&(n.clearRect(0,0,t.state.canvasWidth,t.state.canvasHeight),t.drawLabels(n,t.props.labels,e),t.drawGraph(t.props.graphData,n,e))}},t.fixCanvas=function(){var e=window.devicePixelRatio,a=t.canvas.current;if(a){var n=+getComputedStyle(a).getPropertyValue("height").slice(0,-2),l=+getComputedStyle(a).getPropertyValue("width").slice(0,-2)*e,r=n*e,i=t.state.canvasPadding*e;a.setAttribute("height",r+""),a.setAttribute("width",l+""),t.setState({canvasHeight:r,canvasWidth:l,canvasPadding:i})}},t.createGrid=function(e){e.lineWidth=1,e.strokeStyle="#ccc";for(var a=1;a<2;a++)e.beginPath(),e.moveTo(0,40*a),e.lineTo(80,40*a),e.stroke();for(var t=1;t<2;t++)e.beginPath(),e.moveTo(40*t,0),e.lineTo(40*t,80),e.stroke()},t.numDigits=function(e){return Math.max(Math.floor(Math.log10(Math.abs(e))),0)+1},t.getMaxScaleValue=function(e){var a=t.numDigits(e),n=Math.pow(10,a-2);return 2*Math.ceil(Math.ceil(e/n)/2)*n},t.calculateSectionWidth=function(e,a,t){return Math.floor((a-2*t)/e)},t.calculateColumnWidth=function(e,a){return Math.floor(.8*a/e)},t.calculateMaxValue=function(e){return Math.max.apply(Math,Object(g.a)(e.map((function(e){return Math.max.apply(Math,Object(g.a)(e.array.map((function(e){return e.value}))))}))))},t.calculateK=function(e,a){return a/e},t.drawGraph=function(e,a,n){var l,r=t.calculateSectionWidth(e.length,t.state.canvasWidth,t.state.canvasPadding),i=t.calculateMaxValue(e),o=t.getMaxScaleValue(i),s=t.state.canvasPadding+Math.floor(.2*r),c=t.calculateK(o,t.state.canvasHeight-2*t.state.canvasPadding);t.drawCoordLines(a,Math.floor(i*c)),e.forEach((function(e,i){l=t.calculateColumnWidth(e.array.length,r),t.centerTextOnCanvas(a,e.label,s,t.state.canvasHeight-t.state.canvasPadding,r),e.array.forEach((function(e,r){t.updateCanvas(a,n[r],l,e.value,s,c),s+=l})),s+=Math.floor(.1*r)}))},t.drawLabels=function(e,a,n){var l=2*t.state.canvasPadding,r=t.state.canvasHeight/40;a.forEach((function(a,i){e.fillStyle=n[i],e.strokeStyle=n[i],e.lineWidth=1,e.fillRect(l,t.state.canvasPadding/2-r,15,r),e.fillStyle="black",l+=20,e.font=r+"px Roboto",e.fillText(a,l,t.state.canvasPadding/2),l+=e.measureText(a).width+10}))},t.centerTextOnCanvas=function(e,a,n,l,r){var i=n+r/2-e.measureText(a).width/2-.1*r,o=l+t.state.canvasHeight/40;e.font=t.state.canvasHeight/40+"px Roboto",e.fillStyle="black",e.fillText(a,i,o)},t.drawCoordLines=function(e,a){e.strokeStyle="black",e.lineWidth=2,e.beginPath(),e.moveTo(t.state.canvasPadding,t.state.canvasPadding/2),e.lineTo(t.state.canvasPadding,t.state.canvasHeight-t.state.canvasPadding+1),e.lineTo(t.state.canvasWidth-t.state.canvasPadding/2,t.state.canvasHeight-t.state.canvasPadding+1),e.stroke(),e.strokeStyle="#eeeeee",e.beginPath(),e.moveTo(t.state.canvasPadding,t.state.canvasHeight-t.state.canvasPadding-a),e.lineTo(t.state.canvasWidth-t.state.canvasPadding,t.state.canvasHeight-t.state.canvasPadding-a+1),e.stroke(),e.moveTo(t.state.canvasPadding,t.state.canvasHeight-t.state.canvasPadding-a/2),e.lineTo(t.state.canvasWidth-t.state.canvasPadding,t.state.canvasHeight-t.state.canvasPadding-a/2+1),e.stroke()},t.state={canvasHeight:400,canvasWidth:1e3,canvasPadding:40},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fixCanvas()}},{key:"componentDidUpdate",value:function(e){e.graphData!==this.props.graphData&&this.refreshCanvas()}},{key:"updateCanvas",value:function(e,a,t,n,l,r){var i=Math.floor(n*r);e.fillStyle=a,e.strokeStyle="black",e.lineWidth=1,e.font=this.state.canvasHeight/40+"px Roboto",e.beginPath(),e.fillRect(l,this.state.canvasHeight-this.state.canvasPadding-i,t,i),e.fillStyle="black",e.fillText(n+"",l,this.state.canvasHeight-this.state.canvasPadding-i)}},{key:"render",value:function(){return l.a.createElement("canvas",{className:"canvas",ref:this.canvas,id:"graphCanvas",width:this.state.canvasWidth,height:this.state.canvasHeight})}}]),a}(l.a.Component)),D=(t(23),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).handleChange=function(e,a){t.setState((function(t){return t.inputValues[a]=+e,{inputValues:t.inputValues}}))},t.handleValuesID=function(e){t.setState({valuesID:e})},t.handleSubmit=function(){var e=t.state,a=e.valuesID,n=e.inputValues,l=[];for(var r in n)l.push({value:n[r],name:r});var i={label:a,array:l};t.clearValues(),t.props.handleSubmit(i)},t.clearValues=function(){t.setState((function(e){for(var a in e.inputValues)e.inputValues[a]="";return{inputValues:e.inputValues,valuesID:""}}))},t.state={inputValues:{},valuesID:""},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.inputValues,n=a.valuesID,r=this.props.labels;return l.a.createElement("tr",{className:"graph-form-row"},l.a.createElement("td",null,l.a.createElement(S,{type:"text",value:n,onChange:this.handleValuesID,id:"valuesID",class:"graph-input",placeholder:"naziv grupe kolona"})),r.map((function(a){return l.a.createElement("td",{key:a},l.a.createElement(S,{class:"graph-input",type:"number",value:t[a]||0,onChange:e.handleChange,id:a,placeholder:"vrednost za labelu"}))})),r[0]&&n?l.a.createElement("td",null,l.a.createElement("button",{onClick:this.handleSubmit,className:"graph-button"},"Dodaj grupu")):l.a.createElement("td",null))}}]),a}(l.a.Component)),M=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).handleLabelSubmit=function(e){!t.state.labels.includes(e)&&t.state.labels.length<10&&t.setState({labels:[].concat(Object(g.a)(t.state.labels),[e])})},t.deleteLabel=function(e){var a=Object(g.a)(t.state.labels);a.splice(+e.target.id,1),t.setState({labels:a})},t.handleSubmit=function(e){t.setState({graphData:[].concat(Object(g.a)(t.state.graphData),[e])})},t.setGraphData=function(){t.props.setGraphData(t.state.graphData,t.state.labels)},t.state={labels:[],graphData:[]},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.labels,t=e.graphData;return l.a.createElement("div",null,l.a.createElement("table",{className:"graph-table"},l.a.createElement("tbody",null,l.a.createElement("tr",{className:"graph-form-row"},l.a.createElement("td",null,"Naziv kolona"),a.map((function(e,a){return l.a.createElement("td",{key:e},l.a.createElement("div",{className:"graph-label"},l.a.createElement("div",null,e)))})),a.length<10?l.a.createElement("td",null,l.a.createElement(y,{handleSubmit:this.handleLabelSubmit,buttonLabel:"Dodaj",hideButton:!1,buttonClass:"graph-button",placeholder:"dodaj labelu",inputClass:"graph-input"})):l.a.createElement("td",null)),t.map((function(e){return l.a.createElement("tr",{className:"graph-form-row",key:e.label},l.a.createElement("td",null,e.label),e.array.map((function(e,a){return l.a.createElement("td",{key:a},e.value)})),l.a.createElement("td",null))})),l.a.createElement(D,{labels:a,handleSubmit:this.handleSubmit}))),l.a.createElement("div",{className:"graph-footer"},l.a.createElement("button",{onClick:this.setGraphData,className:"graph-button"},"Prika\u017ei grafikon")))}}]),a}(l.a.Component),H=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).setGraphData=function(e,a){t.setState({graphData:e,labels:a})},t.handleChange=function(e){t.setState({graphName:e})},t.state={graphData:[],colors:[],labels:[],graphName:""},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"graph-container"},l.a.createElement("h1",null,"Generisanje grafikona"),l.a.createElement("div",null,"Naziv grafikona\xa0",l.a.createElement(S,{type:"text",id:"graphname",value:this.state.graphName,onChange:this.handleChange,class:"graph-input"})),l.a.createElement(M,{setGraphData:this.setGraphData}),l.a.createElement(P,{graphData:this.state.graphData,labels:this.state.labels,graphName:this.state.graphName}))}}]),a}(l.a.Component);function V(e){return l.a.createElement("button",{className:e.class,style:e.style,id:e.id,onClick:function(a){return e.onClick(a.target.id)}},e.displayText)}t(24);function T(e){return l.a.createElement("header",{className:"header"},l.a.createElement("nav",{className:"navigation"},[{id:"intro",href:"",displayText:"Uvod"},{id:"graphdemo",href:"",displayText:"Demo"}].map((function(a){return l.a.createElement(V,{key:a.id,class:e.selected===a.id?"selected anchor":"anchor",displayText:a.displayText,onClick:e.setSelected,id:a.id})}))))}function w(e){var a=e.text.split("\n").map((function(e,a){return l.a.createElement("p",{style:{margin:0},key:a},e)}));return l.a.createElement("div",{className:"code"},a)}var W=function(e){var a=Object(n.useState)(""),t=Object(N.a)(a,2),r=t[0],i=t[1];return l.a.createElement("div",null,l.a.createElement("div",null,r,l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:r,onChange:function(e){return i(e.target.value)}})),l.a.createElement(w,{text:'\n    import React, { useState } from \'react\'\n\n    function Hooks(props) {\n\n        const [text, setText] = useState("");\n\n        return <div>\n\n        {text}<br/>\n\n        <input type="text" value={text} onChange={event => setText(event.target.value)} />\n\n        </div>\n\n    }\n    '}))};function R(e){var a=Object(n.useState)(0),t=Object(N.a)(a,2),r=t[0],i=t[1];Object(n.useEffect)((function(){document.title="Broj klikova: ".concat(r)}));return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("p",null,"Klik = ",r),l.a.createElement("button",{onClick:function(){return i(r+1)}},"Klik")),l.a.createElement(w,{text:"\n    import React, { useState, useEffect } from 'react'\n\n    function Hooks(props) {\n\n    const [count, setCount] = useState(0);\n\n    useEffect(() => {\n\n        document.title = \"Broj klikova: \" + count;\n\n    });\n\n        return <div>\n\n        <p>Klik = {count}</p>\n\n        <button onClick={() => setCount(count + 1)}>\n\n            Klik\n\n        </button>\n\n    </div>\n\n    }\n    "}))}function F(e){return l.a.createElement("div",null,l.a.createElement("div",null,'Hooks su relativno "nova" stvar u React-u. Koriste se da bi se realizovao state u funkcionalnim komponentama. Pre uvo\u0111enja hooks sve funkcionalne komponente bile su stateless. Tako\u0111e, hooks ne slu\u017ee samo za state, mogu slu\u017eiti i za lifecycle metode, a mo\u017eemo i sami praviti hooks po potrebi. Cilj hooks je da se u sto ve\u0107oj meri zamene class komponente.'),l.a.createElement(W,null),l.a.createElement(R,null))}function K(e){var a=Object(n.useState)(!1),t=Object(N.a)(a,2),r=t[0],i=t[1];return r?l.a.createElement("div",null,"Zahtev je poslat"):l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return i(!r)}},"Po\u0161alji zahtev"))}function L(e){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",null,"Conditional rendering je mogu\u0107nost da se na osnovu nekog uslova (iz state ili properties) prika\u017eu razliciti elementi. Mo\u017ee se odnositi na \u010ditave elemente, ali tako\u0111e se mogu menjati i parametri nekog elementa."),l.a.createElement(w,{text:"\n    export default function ConditionalRendering(props: {}){ \n\n        const [condition, setCondition] = useState(false);\n\n        return condition ? <div>\n\n            Zahtev je poslat\n\n        </div> :\n\n        <div>\n\n            <button onClick={()=> setCondition(!condition)}>Posalji zahtev</button>\n\n        </div>\n\n    }\n    "})),l.a.createElement(K,null))}function I(e){return l.a.createElement("div",null,"Primeri standarda:",l.a.createElement("ul",null,l.a.createElement("li",null,"Ukoliko je mogu\u0107e izbegavati kori\u0161\u0107enje class komponenta."),l.a.createElement("li",null,"Upotreba manjih komponenti."),l.a.createElement("li",null,"Ponavljanje komponenti umesto kreiranje novih."),l.a.createElement("li",null,"Bolje je pisati vi\u0161e manjih metoda, nego sme\u0161tati svu funkcionalnst u jednu."),l.a.createElement("li",null,"Ne treba preterivati sa upotrebom state-a i lifecycle metoda."),l.a.createElement("li",null,"Imena komponenti trebalo bi da po\u0161toju pascal case i da se ime podudara sa imenom funkcije ili klase."),l.a.createElement("li",null,"Komponente bi trebalo odvojiti u sopstvene foldere po svojoj funkcionalnsti. Deca komponente se mogu nalaziti u pod folderima, ali treba izbegavati i\u0107i previ\u0161e u dubinu."),l.a.createElement("li",null,"Imena atributa elemenata po\u0161tuju camel case."),l.a.createElement("li",null,"Imena promenljivih i metoda po\u0161tuju camel case."),l.a.createElement("li",null,"CSS datoteke obi\u010dno prate ime komponente za koju su namenjeni i nalaze se u istom folderu kao i komponenta. Mogu se koristiti i CSS modules."),l.a.createElement("li",null,"Imena CSS klasa uglavnom zavise od internog dogovora, ali mogu se po\u0161tovati i neki od CSS standarda.")),"Ovi su samo neki od standarda i nisu svi obavezni, ali mogu olak\u0161ati razvoj aplikacije.")}var B=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(u.a)(a).call(this,e))).setSelected=function(e){t.setState({selected:e})},t.state={selected:"intro",pages:{}},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e={intro:l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(O,{title:"Komponente"},l.a.createElement(b,null)),l.a.createElement(O,{title:"Properties i State"},l.a.createElement(h,null),l.a.createElement(f,null)),l.a.createElement(O,{title:"Forme"},l.a.createElement(C,null)),l.a.createElement(O,{title:"Lifecycle metode"},l.a.createElement(z,null)),l.a.createElement(O,{title:"Hooks"},l.a.createElement(F,null)),l.a.createElement(O,{title:"Conditional Rendering"},l.a.createElement(L,null)),l.a.createElement(O,{title:"Standardi"},l.a.createElement(I,null))),graphdemo:l.a.createElement(H,null)};this.setState({pages:e})}},{key:"render",value:function(){return l.a.createElement("div",{className:"main"},l.a.createElement(T,{setSelected:this.setSelected,selected:this.state.selected}),this.state.pages[this.state.selected])}}]),a}(n.Component);var G=function(){return l.a.createElement("div",null,l.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.c5cedd0a.chunk.js.map