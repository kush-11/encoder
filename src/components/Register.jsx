import React,{ useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// // import { FaUser } from 'react-icons/fa'
import { register, reset } from '../Features/Auth/AuthSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Spinner from '../components/Spinner'

const Register=()=> {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    ConfirmPassword: '',
    Contact:'',
  })

  const { name, email,  password,  ConfirmPassword,  Contact} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  const notify = (msg) =>  toast(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  useEffect(() => {
    if (isError) {
      // toast.error(message)
      notify(message);
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== ConfirmPassword) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
        ConfirmPassword,
        Contact,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <h1>loading.....</h1>
  }

  return (
    <>
      <section className='heading'>
        <h1>
          Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='ConfirmPassword'
              name='ConfirmPassword'
              value={ConfirmPassword}
              placeholder='Confirm password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='number'
              className='form-control'
              id='Contact'
              name='Contact'
              value={Contact}
              placeholder='Contact'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
          <ToastContainer />
        </form>
      </section>
    </>
  )
}

export default Register