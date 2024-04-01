import React from 'react'
import Layout from '../../Layout/Layout'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'



export default function index() {
    const router = useRouter()
    const { t } = useTranslation();

  return (
    <Layout>
       <div className=' w-screen flex pt-40     justify-center'>
          <div className=' rounded-lg bg-white  border-2 px-6 border-t-blue-800 pt-6 pb-6'  style={{ width : '23%' }}>
            <div className='flex items-center justify-between	'>
                <div className='text-md text-indigo-500 ' style={{ fontWeight : 500 }}>Connexion isiQuest</div>
            </div>
            <div className='mt-8'>
              <form>

                <label className="form-control w-full max-w-xs space-y-2 my-4">
                  <div className="label">
                    <span className="label-text">Email</span>
                  </div>
                  <input type="email" className="input input-bordered w-full max-w-xs  border-0.5 border-blue-100  " />
                </label>

                <label className="form-control w-full max-w-xs space-y-2 my-4">
                  <div className="label">
                    <span className="label-text text-md">Mot de passe</span>
                    <span className="label-text">
                      <a className=" text-sm hover:link  focus:text-indigo-400 "><span className='hover:text-indigo-400 text-indigo-400'> Mot de passe Oublié ? </span></a>
                    </span>
                  </div>
                  <input type="password" className="input w-full max-w-xs  border-0.5 border-blue-100  " />
                </label>

                <label className=" label space-x-4 justify-start my-4">
                <input type="checkbox" defaultChecked className="rounded-md  checkbox-blue-200" />
                  <span className="label-text text-gray-400">Se rappeler de moi</span>
                </label>

                <label className='my-10'>
                  <button className="btn w-full bg-indigo-400  text-white hover:bg-indigo-700  btn-xs sm:btn-xs md:btn-sm lg:btn-md">Se connecter</button>
                </label>
                <label className='my-10 flex items-center justify-center'>
                  <button className="btn  bg-indigo-400  text-white hover:bg-indigo-700  btn-xs sm:btn-xs md:btn-sm lg:btn-md">Se connecter SSO</button>
                </label>
              </form>
            </div>
          </div>
       </div>
    </Layout>
  )
}
