import {useFormik} from 'formik'


const createFormValidate = (values) => {
    const errors = {}
    if (!values.courseTitle) {
        errors.courseTitle = "Course Title is required";
      }
    
      if (!values.courseCategory) {
        errors.courseCategory = "Course Category is required";
      }else if (!/^[a-zA-Z0-9 ]*$/.test(values.courseCategory)) {
        errors.courseCategory = "Only alphanumeric characters and spaces are allowed";
      }
    
      if (!values.courseDescription) {
        errors.courseDescription = "Course Description is required";
      }else if (!/^[a-zA-Z0-9 ]*$/.test(values.courseDescription)) {
        errors.courseDescription = "Only alphanumeric characters and spaces are allowed";
      }
     
      
    return errors;
}

const Form = () => {

    const formik = useFormik(
        {
            initialValues: {
                courseTitle: "",
                courseCategory:"",
                courseDescription:"",
            },
            onSubmit: (values) => {
                console.log(values)
            },

            validate: createFormValidate,
            
        }

    )
    return (
        <div>
           <form onSubmit={formik.handleSubmit}>
           <div>
                <label htmlFor="courseTitle">CourseTitle:</label>
                <input type="text" name='courseTitle' onChange={formik.handleChange} />
                {formik.errors.courseTitle && <div>{formik.errors.courseTitle}</div>}
            </div>
            <div>
                <label htmlFor="courseCategory">CourseCategory:</label>
                <input type="text" name='courseCategory' onChange={formik.handleChange}/>
                {formik.errors.courseCategory && <div>{formik.errors.courseCategory}</div>}
                
            </div>
            <div>
                <label htmlFor="courseDescription">courseDescription:</label>
                <input type="text" name='courseDescription' onChange={formik.handleChange} />
                {formik.errors.courseDescription&& <div>{formik.errors.courseDescription}</div>}

            </div>
            <div>
            <button type='submit'>submit</button>
            </div>
           </form>
        </div>
    )
}

export default Form