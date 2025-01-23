import AuthFrom from '@/components/AuthFrom'
import React from 'react'

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthFrom type="sign-in" />
    </section>
  )
}

export default SignIn
