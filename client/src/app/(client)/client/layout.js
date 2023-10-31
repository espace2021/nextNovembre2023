'use client';
import Navabar from '@/components/client/Navabar'
import {SessionProvider} from "next-auth/react";
import { CartProvider } from "use-shopping-cart";

export default function ClientLayout({ children,session }) {
  return (
    <>
    <SessionProvider session={session}>
    <CartProvider
    // Enables local storage
    shouldPersist={true}
  >
       <Navabar/>
        {children}
        </CartProvider>  
    </SessionProvider>   
    </>
  )
}
