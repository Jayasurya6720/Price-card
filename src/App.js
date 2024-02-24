import React from 'react'
import Card from './component/Card'
function App() {
  let details =[
    {
      plan : "FREE",
      price : 0,
      user : "Single User",
      storage : "5GB Storage",
      publicProject : "Unlimited Public Project",
      access : "Community Access",
      privateProject :"Unlimited Private Project",
      privateProjectEnable : false,
      support : "Dedicated Phone Support",
      supportEnable : false,
      subDomain : "Free Subdomain",
      subDomainEnable : false,
      status : "Monthly Status Reports",
      statusEnable : false
    },
    {
      plan : "PLUS",
      price : 9,
      user : "5 User",
      storage : "50GB Storage",
      publicProject : "Unlimited Public Project",
      access : "Community Access",
      privateProject :"Unlimited Private Project",
      privateProjectEnable : true,
      support : "Dedicated Phone Support",
      supportEnable : true,
      subDomain : "Free Subdomain",
      subDomainEnable: true,
      status : "Monthly Status Reports",
      statusEnable : false
    },
    {
      plan : "PRO",
      price : 49, 
      user : "Unlimited User",
      storage : "150GB Storage",
      publicProject : "Unlimited Public Project",
      access : "Community Access",
      privateProject :"Unlimited Private Project",
      privateProjectEnable : true,
      support : "Dedicated Phone Support",
      supportEnable : true,
      subDomain : " Free Subdomain",
      subDomainEnable : true,
      status : "Monthly Status Reports",
      statusEnable: true
    }
  ]
  return (
    <>

    <section class="pricing py-5">
  <div class="container">
    <div class="row">
      {
        details.map((e,i)=>{
          return <Card data = {e} key={i} />
        })
      }
      
    </div>
  </div>
</section>
    </>
  )
}

export default App