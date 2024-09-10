import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { Section } from 'lucide-react'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Saikat', lastName:'Tanti', email: 'saikattanti2005@gmail.com'};
  return (
    <section className="home">
      <div className="home-content">
         <header className="home-header">
           <HeaderBox 
             type="greeting"
             title="Welcome"
             user={loggedIn?.firstName || 'Guest'}
             subtext="Access and manage your account and transactions."
           />

           <TotalBalanceBox 
             accounts={[]}
             totalBanks={1}
             totalCurrentBalance={12500.25}
           />
         </header>

         RESENT TRANSACTIONS
      </div>


      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1230.50 }, {
        currentBalance: 4000.50 }]}
      
      />
    </section>
  )
}

export default Home
