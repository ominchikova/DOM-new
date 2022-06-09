const options = [{value:1 label:'Брест'},
                {value:2 label:'Витебск'},
                {value:3 label:'Гомель'},
                {value:4 label:'Гродно'},
                {value:5 label:'Минск'},
                {value:6 label:'Могилев'}]

class DropDown{
    constructor(select){
        this.$select = document.querySelector(select)
        
        console.log(this.$select)
        this.$select.addEventclassListener.add('active')
    }
} 



const customSelect = new DropDown('.select')