import React from 'react'
import OurServices from '../components/OurServices'
import '../section/css/Hero.css'
function Service() {
  return (
    <div>
        <h3 className='text-center mb-4 fs-2 title'>Provides the <span className='text-primary'>best service</span> for you</h3>
        <p className='text-center text-font'>Our customer is our first priority. The following are the available services you can get</p>
        <OurServices 
            img="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37375.jpg?w=740&t=st=1669045546~exp=1669046146~hmac=88682e83c4dca00c71fd730df18362cae787a6e0bf1b34a10da8b6e19d5fa05d"
            title="Safely Saved Lists"
            description="Neatly arranged for your ease of access. Go to Saved at the top navigation bar, where we save your save items. Just a few clicks from starting your journey! When you want to make a purchase from Saved"
            
        />
        <OurServices  
            img="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            title="Flight Price Alert"
            description="Instant notification. You will get alerted as soon as the flight price match your budget,so you will be able to book the right flight at the right time"
            
        />
        <OurServices  
            img="https://img.freepik.com/free-vector/policy-insurance-items_603843-52.jpg?t=st=1669087100~exp=1669087700~hmac=6d255848ab8d7fb9f0c58898097d18eae64a03c6c387a22003c1efd51971d109"
            title="Stay Gurantee"
            description="Open your app and follow the instructions."
            
        />
    </div>
  )
}

export default Service