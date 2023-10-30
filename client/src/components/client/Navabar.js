'use client';
import Link from "next/link";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useSession, signOut} from 'next-auth/react';

const NavBar = () => {
    const {data} =useSession();
return (
<nav className="navbar navbar-expand-lg bg-light">   
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
        <Link className="nav-link" href={"/client"}>Home</Link>
    </li>
   <li className="nav-item">
   <Link className="btn btn-default" href={'/client/cartProducts'}><ShoppingBasketIcon style={{ color: 'pink' }}/> Shopping Cart </Link>
   </li> 
   <li className="nav-item">
   {data ?  ( <>
      
      <button className="btn btn-default"  onClick={() => {signOut();}}>Logout </button>
    
              </>
              ):  null
              }
   
   </li>
</ul>
</nav>
);
};
export default NavBar;
