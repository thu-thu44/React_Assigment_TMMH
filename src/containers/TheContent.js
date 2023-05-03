import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

// routes config
import routes from '../routes'
  
const loading = (
  //ဒါလေးကလုတ်ဒင်းလည်တဲ့ဟာလေးပါ၊ပြောင်းလို့ရပါတယ်။
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {
  return (
    //mainကhtmlbodyရဲ့ ထူးခြားတဲ့အပိုင်း
    <main className="c-main">
      {/* CContainerမှာ၂မျိုးရှိပြီးfluid,tag */}
      <CContainer fluid>

        {/* Suspenseဆိုတာက reactမှာloadingကို အလုပ်လုပ်စေတဲ့functionပါ။ stated in above  */}
        <Suspense fallback={loading}>

          {/* pathလမ်ကြောင်းတွေတူညီမှသာ renderလုပ်ပေးတာက switch */}
          <Switch>

            {/* routesသတ်မှတ်ထားတဲ့ဖိုင်ထဲကဟာတွေကို loopပတ်လိုက်တယ်
            ဒီအောက်ကcodeကိုသုံးခြင်းအားဖြင့် routesတွေကိုကာကွယ်ပြီးသားဖြစ်စေမယ် */}
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <CFade>
                      <route.component {...props} />
                    </CFade>
                  )} />
              )
            })}
            <Redirect from="/" to="/login" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
