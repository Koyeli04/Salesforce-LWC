import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname = "Koyeli Rakshit"
    course = "Zero to Hero"
    title = "Aura"
    changeHandler(event){
        this.title = event.target.value;
    }
}