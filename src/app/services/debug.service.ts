
export class DebugService {

	constructor() { }

	cssborders() {
		[].forEach.call(document.querySelectorAll("*"), function (a) { a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16) })

		/*
		$$('*').map((A,B)=>A.style.outline=`1px solid hsl(${B*B},99%,50%`)
		*/
	}

	debugcss(selector = '*') {
		[].forEach.call(
			document.querySelectorAll(selector), el => {
				el.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16)
			})
	}
}
