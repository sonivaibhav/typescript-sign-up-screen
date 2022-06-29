// Import stylesheets
import './style.css';

//Note:
//Enhancement could be adding validation rules for individual input fields
//but as per requirements it's out of scope for this assignment

const form: HTMLFormElement = document.querySelector('form');
type InputFields = { username: string; confirm: string; password: string };

form.addEventListener('submit', (event: any): void => {
  // prevent the default form submit action
  // (i.e browser sends a post requests with the form data)
  event.preventDefault();

  // instantiate a new FormData object and pass it the form element (the form is the target for the submit event)
  let formData: FormData = new FormData(event.target);

  // this empty object will hold formData's key/value pairs
  let inputFields: InputFields = {
    username: '',
    confirm: '',
    password: '',
  };

  // this turns the data from the form into a regular JavaScript object
  formData.forEach((value: FormDataEntryValue, name: string): void => {
    inputFields[name] = value;
  });

  //Validate if password and confirm password are same
  if (inputFields.password === inputFields.confirm) {
    alert('Sign up is successful !!!');
  } else {
    alert('Passwords do not match');
  }
});
