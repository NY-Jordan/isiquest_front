import React from 'react'
import "./../app/globals.css"
import { appWithTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Provider } from 'react-redux';
import { store } from './../redux/store/store';


 function App({children}) {
    return (
     // <Provider store={store}>
        <div className='h-full'>{children}</div>
      //</Provider>

    )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
export default appWithTranslation(App);