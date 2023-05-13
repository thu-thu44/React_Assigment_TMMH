import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    //Footerကိုအသေမထားတဲ့အတွက်fixedကိုfalseပေးထားတယ်
    <CFooter fixed={false}>
      {/* <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">CoreUI</a>
        <span className="ml-1">&copy; 2020 creativeLabs.</span>
      </div> */}

      {/* mfs auto - margin end auto */}
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        {/* ကိုယ့်နာမည်ကိုပြောင်းလို့ရ */}
        <a style={{color: "blue"}} target="_blank" rel="noopener noreferrer">Thu Thu</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
