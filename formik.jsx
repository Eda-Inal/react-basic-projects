
import './App.css';
import { formik, useFormik} from 'formik';
import * as Yup from 'yup';

function App() {

    const validationSchema = Yup.object({
    firstName: Yup.string().required("Zorunlu alan"),
    lastName: Yup.string().required("Zorunlu alan"),
    email: Yup.string().email('Geçersiz e-mail adresi').required('Zorunlu alan'),
    password : Yup.string().min(6, "Lütfen en az 6 karakter giriniz").required("Zorunlu alan")
  });
  const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password : ""
    },
    validationSchema : validationSchema,
    onSubmit: values => {
    console.log(values);
    },
  });

  return (
    <div className="App" >
        <form onSubmit={handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
    
         name="firstName"
         type="text"
         onChange={handleChange}
         value={values.firstName}
         onBlur={handleBlur}
         />
         {errors.firstName &&  touched.firstName&& <div className='red'>{errors.firstName}</div> }
         <br /><br />
       
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={handleChange}
         value={values.lastName}
         onBlur={handleBlur}
       /> 
        {errors.lastName && touched.lastName && <div className='red'>{errors.lastName}</div> }
<br /><br />

       <label htmlFor="email">Email Address</label>
       <input
        
         name="email"
         type="email"
         onChange={handleChange}
         value={values.email}
         onBlur={handleBlur}
         
       />  {errors.email && touched.email&& <div className='red'>{errors.email}</div> } <br /><br />
        <label >Password</label>
       <input
       
         name="password"
         onChange={handleChange}
         value={values.password}
         onBlur={handleBlur}
         
       />  {errors.password && touched.password&&<div className='red'>{errors.password}</div> }
       <br /><br />
       <button type="submit">Submit</button>
     </form>

    
    </div>
  );
}

export default App;
