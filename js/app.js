import Button from "./components/button.js"
import "./components/button.js"
import "./components/input.js"
import "./components/table.js"
import "./components/video.js"
import Video from "../components/video.js"

/*let vectorLoco = ["Login","Password","logout"];

let vectorInput = ["text","password","email"];

let boton = vectorLoco.filter(element => element == "Login");

function renderButon(text){
    let botoncito = new Button("app", text);



}

//importante leer Read me

function renderInput(type){

    let input_type = "none";

    switch(input_type){
        case "password":
            input_type = "password";
            break;
        case  "text" : 
            input_type = "text";
            break;
        case  "email":  
         input_type = "email";
            break;

    }

    let newInput = new Input("app" , input_type);


}

vectorLoco.forEach(element => {
           renderButon; 

}); 

vectorInput.forEach(element =>{
        renderInput;
});*/

let myVideo =  new Video("videoID", "doc/videos/movie.mp4" ,320,480,"video/mp4");
myVideo.render();