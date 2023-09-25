import { useField } from "formik"

const TextInput = ({label, ...props}) => {
    cosnt [field,meta] = useField(props)

    // console.log({field, meta})

    return(
        <div  className="control">
            <label className="label">{label}</label>
            <input className="input" {...field} {...props}/>
            {meta.touched && meta.console.error ? <div className="error">{meta.error}</div> : null}
        </div>
    )
}

export default TextInput