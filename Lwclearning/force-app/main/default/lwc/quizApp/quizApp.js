import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={}
    allCorrectAnswers = 0
    isSubmitted = false
    myQuestions=[
        {
            id:"Question1",
            question:"Which of this is not a template loop?",
            answer:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which of the following file is invalid in lightning component folder?",
            answer:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"Which of the following is not a directive?",
            answer:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ]
    get allNotSelected(){
        return !(Object.keys(this.selected).length == this.myQuestions.length)
    }
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.allCorrectAnswers?
        `slds-text-color_success`:`slds-text-color_error`}`
    }
    onChangeHandler(event){
        //console.log("name",event.target.name)
        //console.log("value",event.target.value)
        const {name,value}= event.target
        this.selected = {...this.selected,[name]:value}
    }
    onSubmitHandler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.allCorrectAnswers = correct.length
        this.isSubmitted = true
        //console.log('Correct Answers',this.allCorrectAnswers)
    }
    onResetHandler(){
        this.selected = {}
        this.allCorrectAnswers = 0
        this.isSubmitted = false
    }
}