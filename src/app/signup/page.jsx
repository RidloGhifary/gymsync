"use client"

import { useState } from 'react';
import PageBackground from '../components/pageBackground';
import Link from 'next/link';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from '/src/app/firebase.js'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const router = useRouter();
  const [handleName, setHandleName] = useState("")
  const [handleEmail, setHandleEmail] = useState("")
  const [handlePass, setHandlePass] = useState("")

  const auth = getAuth();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, handleEmail, handlePass)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        setHandleEmail("")
        setHandlePass("")
        Toast.fire({
          icon: "success",
          title: "Signed up successfully"
        });
        //router.push('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        Toast.fire({
          icon: "error",
          title: "Signed up failed"
        });
      });
  };

  const handleNameChange = (event) => {
    setHandleName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setHandleEmail(event.target.value);
  };

  const handlePassChange = (event) => {
    setHandlePass(event.target.value);
  };

  return (
    <section className="w-full">
      <PageBackground name='Sign Up' />

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
              <div className="mt-2">
                <input id="name" value={handleName} name="name" type="text" autoComplete="name" placeholder='Full Name*' required className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6"
                  onChange={handleNameChange} />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input id="email" value={handleEmail} name="email" type="email" autoComplete="email" placeholder='Email address*' required className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6"
                  onChange={handleEmailChange} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="text-sm">
                  <Link href="#" className="font-semibold text-red">Forgot password?</Link>
                </div>
              </div>
              <div className="mt-2">
                <input id="password" value={handlePass} name="password" type="password" min={8} autoComplete="current-password" placeholder='Password*' required className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6"
                  onChange={handlePassChange}
                />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-red px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
                onClick={handleSubmit}
              >Sign up</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?
            <Link href="/singin" className="font-semibold leading-6 text-red"> Sign in your account</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
