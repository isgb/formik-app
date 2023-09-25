import {Formik, Form, Field, ErrorMessage} from 'formik'
import TextInput from './components/TextInput'
import CheckBox from './components/Checkbox'
import Radio from './components/Radio'
import Select from './components/Select'

const validate = (values) => {
    const erros = {}
    if(!values.name){
     errors.name = 'Requerido'
    } else if(values.name.length < 5){
      errors.name = 'El nombre es muy corto'
    }

    if(!values.lastname){
      errors.lastname = 'Requerido'
     } else if(values.lastname.length < 5){
       errors.lastname = 'El apellido es muy corto'
     }
    
    if(!values.radio){
        errors.radio = 'Requerido'
    }

    return errors
}

function App() {
    
  return (

    <Formik 
        initialValues={{ name: '', lastname: '', email: '', chancho:'', radio: ''}}
        validate={validate}
        onSubmit={values => console.log(values)}
    >
    
       <Form onSubmit={formik.handleSubmit}>
        <TextInput name="name" label="Nombre"/>
        {/* <label>Nombre</label> */}
        {/* <Field name="name" type='text'/> */}
        {/* <Field name="name" as='select'>
            <option value={chanchitofeliz}>Chanchito feliz</option>
        </Field> */}
        {/* <ErrorMessage name='name'/> */}
        <br/>
        <TextInput name="lastname" label="Apellido"/>
        {/* <label>Apellido</label>
        <Field name="lastname" type='text'/>
        <ErrorMessage name='lastname'/> */}
        <br/>
        <TextInput name="email" label="Correo"/>
        <Select label="Tipo de chancho" name="chancho">
            <option value="">Seleccione el tipo de chancho</option>
            <option value="felipe">Felipe</option>
            <option value="chanchitofeliz">Chaanchito feliz</option>
            <option value="chanchitotriste">Chaanchito triste</option>
        </Select>
        {/* <label>Correo</label>
        <Field name="email" type='text'/>
        <ErrorMessage name='email'/> */}
        <CheckBox name="accept">
            Aceptar términos y condiciones
        </CheckBox>
        <Radio name="radio" value="chanchito1" label="chanchito 1"/>
        <Radio name="radio" value="chanchito2" label="chanchito 2"/>
        <Radio name="radio" value="chanchito3" label="chanchito 3"/>
        <ErrorMessage name="radio"/>
        <button type="submit">Enviar</button>
       </Form>

    </Formik>
    
  );
}

export default App;
