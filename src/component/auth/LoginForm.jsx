import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const initialValues={
    email:"",
    password:""
}

function LoginForm() {
    const navigate=useNavigate();
    const handleSubmit=()=>{
    }
  return (
    <div>
        <Typography variant='h5' className='text-center'>
            Login
        </Typography>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form>
            <Field
                      as={TextField}
                      name="email"
                      label="Email"
                      fullWidth
                      variant="outlined"
                      margin="normal"
                    />
            <Field
                      as={TextField}
                      name="password"
                      label="Password"
                      fullWidth
                      variant="outlined"
                      margin="normal"
                    />
                <Button sx={{mt:2, padding:"1rem" }} fullWidth type='submit' variant='contained'>
                        Login
                </Button>
            </Form>
        </Formik>
        <Typography variant='body2' align='center' sx={{mt:3}}>
            <p>Don't have an account?</p>
            <Button sx={{ml:1}} size='small' onClick={()=>navigate("/account/register")}>Register</Button>
        </Typography>
    </div>
  )
}

export default LoginForm