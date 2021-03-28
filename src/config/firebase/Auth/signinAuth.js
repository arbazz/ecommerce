import firebase from '../index'


const signInAuth = async(email, password)=>{
    return new Promise((response, reject)=>{
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
               // Handle Errors here.
               var errorCode = error.code;
               response(errorCode);
               console.log(error)
               var errorMessage = error.message;
               // ...
             }).then(()=>{
                 response(true)
             })
   })   
   }

   export {
       signInAuth
   }