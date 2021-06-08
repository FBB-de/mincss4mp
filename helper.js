/* 2019-2021 Frank Bruns-Ballhausen */
/* Released under the GPL 2.0 License. */
/* script for "Test mincss4mp.html" */

function clog(args){
	try{
		if(args===undefined){ throw "Fehler, kein Argument übergeben!" }
		if(args==="?"){
			console.log('%c'+'Function "clog()": \nErsatz für den Javascriptbefehl "console.log()" und "alert()".\n Aufruf mit:\n'+
			'\t clog(\'0\',<irgendwelche Variablen>) = Ausgabe der Console als Text oder \n'+
			'\t clog(0,<irgendwelche Variablen>) = Ausgabe der Console als Array oder \n'+
			'\t clog(\'1\',<Fehlermeldung>) = Ausgabe als Alert-Box oder \n'+
			'\t clog(\'err\',<Fehlermeldung>) = Ausgabe Fehler auf der Console.', "color:#0159b1");
			return;
		}
		var _args=[], _is;
		for(var i=0;i<arguments.length;i++){
			if(i==0){ _is= arguments[i]; }
			_args.push(arguments[i]);
			if(arguments.length==1){ _args=arguments[0]; break; }
		}
		if(_is==="0" || (typeof _is)==="String"){
			if(Array.isArray(_args)){
				_args.shift();
				_args = _args.join().split(',').join(', ')
			}
			console.log('%c'+'clog: '+ String.fromCharCode(0x25BA)+' String ', "color:#2a4", _args);
			return;
		}
		if(_is==="1" && _args[1]!==undefined){
			_args.shift();
			alert('clog:\n'+_args.join('\n'));
			return;
		}
		if(_is==="warn"){
			_args.shift();
			console.warn('clog: Warnung!\n',_args.join('\n'));
			return;
		}
		if(_is==="err"){
			throw _args;
		}
		if(_is!==0 && isNaN(_is*1) && typeof args!=="number" && typeof args!=="string"){
			console.log('%c'+'clog: '+String.fromCharCode(0x25BA),"color:#a67209",typeof _args +'\n  ', _args);
			return;
		}
		console.log('%c'+'clog: '+String.fromCharCode(0x25BA),"color:#a67209",typeof _args +'\n  ', _args);
		return;
	}catch (e){
		try{
			console.error('clog: Error!\n',e);
			return 1;
		}catch(e){
			alert('clog:\n'+e);
		}
		return 1;
	}
}
