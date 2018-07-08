let lang = {
    getCurrentLang(){
        if(this.isEnglish()){
            return 'en'
        }else{
            return location.pathname.slice(1,3)
        }
    },
    getCurrentLangName(){
        return this.langMap[this.getCurrentLang()]
    },
    langs : ["cn"],
    langMap:{en:"English",cn:"简体中文"},
    getRegx(){
        let str = this.langs.map(v=>`(${v})`).join("|")
        let regx = new RegExp(`^\/(${str})\/?`)
        return regx
    },
    changeLanguage(lang){
        let href = location.href
       if(this.isEnglish()){
        //如果当前语言是英语
        if(lang === "en") return
        href = "/" + lang + location.pathname + location.search
       }else{
        if(lang === "en"){
            //如果要切换成英语
            href = "/" + location.pathname.replace(this.getRegx(), "") + location.search
        }else{
            //如果要切换成其他语言
           href =  "/" + lang + "/" + location.pathname.slice(3) + location.search
        }
       }
       return href
    },
    isEnglish(){
       let path = location.pathname
       let regx = this.getRegx()
       return !regx.test(path)
    }
}
export default lang