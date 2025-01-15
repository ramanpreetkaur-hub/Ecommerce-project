import*as Yup from 'Yup'
// strict help to check type
const numberValidator = Yup.number().strict().min (0) .max(10) ;
const var1 = 3
numberValidator .validateSync(var1)
const numbervalidators =Yup.number().strict().min(0).max(10);
const var2 =2 
 numbervalidators .validateSync(var2);
 const emailvalidator =Yup.string() .email();
 emailvalidator .validateSync("abc@gmail.com");
 const stringvalidator =Yup.string() .strict();
 stringvalidator .validateSync("3000");

 const userobjectvalidator = Yup.object().shape({
    Username: Yup.string() .required() .min(10),
    Useremail : Yup.string() .required() .email(),
    Userpassword : Yup.string() .required() .min(6),
 });

 userobjectvalidator .validateSync({
    Username :"ramanpreet",
    Useremail :"raman@gmail.com",
    Userpassword:"123456",
 },
{
   // gather all the validation errors
    abortEarly:false,
   //  It indicates that detailed information about the error    to prevent revealing sensitive information or to keep logs cleaner and less cluttered
    disableStackTrace:true,     
},


);