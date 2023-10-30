'use client';
import NavScroll from '@/components/admin/NavScroll'
import {SessionProvider} from "next-auth/react";

export default function AdminLayout({ children,session }) {
  return (
    <>
    <SessionProvider session={session}>
       <NavScroll/>
        {children}
    </SessionProvider>   
    </>
  )
}
