import React from 'react'
import App from '../App'
import { appWithTranslation } from "next-i18next";
import { useTranslation } from 'next-i18next'

 export default function Layout ({children}){
  return (
    <App>
           <div className='h-screen p-4 w-full  bg-gray-200'>{children}</div>
    </App>
  )
}
