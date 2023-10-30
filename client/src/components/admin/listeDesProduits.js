import React from 'react'

const ListeDesProduits = ({produits}) => {
  return (
    <div>
        <table className="table table-striped">
    {
produits && produits.map(produit => (
    <tr>
    <td>{produit.designation}</td>
    <td>{produit.prix}</td>
    </tr>
    )
  )
    }  
    </table>
    </div>
  )
}

export default ListeDesProduits
