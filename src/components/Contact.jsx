import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";




const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setDirty] = useState(false)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onBlur = (e) => {
    setDirty(true)
  }

  return {
    value,
    onChange,
    onBlur
  }
}
const Contact = () => {
  const refForm = useRef()
  const email = useInput('')
  const name = useInput('')
  const notifySucces = (text) => {

    toast.success(text, {
      position: toast.POSITION.TOP_RIGHT
    });


  }

  const notifyError = (text) => {

    toast.error(text, {
      position: toast.POSITION.TOP_RIGHT
    });


  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_vt2d88r',
      'template_8rgt1jr',
      refForm.current,
      '9BJAiDG_HDnJjPZiv'
    ).then(() => {
      notifySucces('Message successfully sent!')
    },
      () => { 
        notifyError('Failed to send the email, please try again!')
      }
    )
  }


  

  return (
    <section className=' py-12 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>

          <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'>
            <div >
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br />
                together!
              </h2>
            </div>
          </motion.div>

          <motion.form
            ref={refForm}
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.3)}
            initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input
              className='placeholder:bg-transparent bg-transparent border-b py-3 outline-none w-full  placeholder:text-white focus:border-accent transition-all '
              type="text"
              placeholder='Your name'
              name='from_name'
            />

            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all '
              type="text"
              placeholder='Your email'
              name='from_email'
              value={email.value}
              onChange={e => email.onChange(e)}
              onBlur={e => email.onBlur(e)}
            />
            <textarea
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all  resize-none mb-12'
              placeholder='Your message'
              name="message"
            ></textarea>
            <button className='btn btn-lg' onClick={sendEmail ? notifySucces : notifyError}>Send message</button>
            <ToastContainer theme="dark" />
          </motion.form>

        </div>
      </div>
    </section>
  )
}

export default Contact
