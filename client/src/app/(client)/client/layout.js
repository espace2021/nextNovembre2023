'use client';
import Navabar from '@/components/client/Navabar'
import {SessionProvider} from "next-auth/react";

export default function ClientLayout({ children,session }) {
  return (
    <>
    <SessionProvider session={session}>
       <Navabar/>
        {children}
    </SessionProvider>   
    </>
  )
}
