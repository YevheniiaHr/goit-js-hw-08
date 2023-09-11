import  throttle  from "lodash.throttle";
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const textarea = form.querySelector('textarea[name="message"]');
const STORAGE_KEY = "feedback-form-state"



function formState(){
    const feedback = {
        email: emailInput.value,
        message: textarea.value,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
};
function loadFormState(){
    const savedFeedback = localStorage.getItem(STORAGE_KEY);
    if (savedFeedback){
        const {email, message} = JSON.parse(savedFeedback);
        emailInput.value = email;
        textarea.value = message;
    }
};


function onSubmit(e){
    e.preventDefault();
    const feedback = {
        email: emailInput.value,
        message: textarea.value
    };
    console.log(feedback)
    localStorage.removeItem(STORAGE_KEY);
    emailInput.value = '';
    textarea.value = '';
};


form.addEventListener('input', throttle(formState, 500));
form.addEventListener('submit', onSubmit);
window.addEventListener('load', loadFormState)




