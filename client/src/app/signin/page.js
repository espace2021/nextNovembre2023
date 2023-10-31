'use client';
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

const SignInPage = () => {

    const searchParams = useSearchParams()

    const callbackUrl = searchParams.get('callbackUrl')

    signIn('resend', { callbackUrl })

  return (
<></>
  )
}

export default SignInPage
