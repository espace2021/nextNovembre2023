'use client';
import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useRouter} from 'next/navigation';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Plus from '@mui/icons-material/AddAlarm';
import Minus from '@mui/icons-material/RemoveCircle';
import Delete from '@mui/icons-material/Delete';

const ShoppingCart = () => {
  const { cartDetails, removeItem , clearCart, totalPrice, cartCount,incrementItem,decrementItem } = useShoppingCart();
  
  const router = useRouter();

  const commander = () => {
    
  };

  const more = () => {
    router.push('/client/cartProducts');
  };

  const clear = () => {
    clearCart();
  };

  if (cartCount === 0) return <h1>Cart Empty</h1>;

  return (
    <div>
      <Grid container spacing={2} columns={15} marginTop={10} marginLeft={10}>
        <Grid item xs={8}>
          {cartDetails && Object.values(cartDetails).map((item) => { 
            return (
              <Grid item xs={8} key={item.id}>
                <img
                  alt={item.title}
                  style={{ margin: "0 auto", maxHeight: "100px" }}
                  src={item.image} 
                  className="img-fluid d-block"
                />
                <h5>{item.title}</h5>
                <p>Prix: {item.price} TND</p>
                <p>Qté: {item.quantity}</p>
                <button
                  onClick={() => {
                    if (item.quantity < item.qtestock) {
                      incrementItem(item.id);
                    } else {
                      alert("Quantité stock indisponible");
                    }
                  }}
                >
                  <Plus color="success" />
                </button>
                {item.quantity > 1 && (
                  <button
                  onClick={() => decrementItem(item.id)}
                  >
                    <Minus color="warning" />
                  </button>
                )}
                {item.quantity === 1 && (
                  <button onClick={() => removeItem(item.id)}>
                    <Delete color="error" />
                  </button>
           ) }
                <hr />
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={5}>
          <Button color="error" variant="outlined" onClick={more}>
            Ajouter des articles
          </Button>
          <p>Total Articles</p>
          <h4>{cartCount}</h4>
          <p>Total Payement</p>
          <h3>{totalPrice} TND</h3>
          <hr />
          <div>
            <Button color="warning" variant="outlined" onClick={commander}>
              Commander
            </Button>
            <Button color="info" variant="outlined" onClick={clear}>
              Annuler
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShoppingCart;
