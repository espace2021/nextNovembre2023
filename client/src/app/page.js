import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>APPLICATION</h1>
      <Link className="btn btn-default" href={'/client'}> Espace Client </Link>
    </div>
  )
}

export default page
