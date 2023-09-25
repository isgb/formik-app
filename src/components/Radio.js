import { useField } from "formik"

const Radio = () => {
    const [field] = useField({...props,type:'radio'})
  return (
    <div>
        <label>
            <input type="radio" {...field} {...props}/>
            {label}
        </label>
    </div>
  )
}

export default Radio