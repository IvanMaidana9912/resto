import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { Link } from 'react-router-dom';
import { cantidadCarritoInicial } from '../layout/Navbar';

const minimoPrecioProducto = 0;
export let cantidadCarritoFinal = cantidadCarritoInicial;

export const Products = (product) => {
  const [[t, datas]] = Object.entries(product);
  const eventoBoton = () => {
    cantidadCarritoFinal++;
    console.log(`${datas.id} ${cantidadCarritoFinal} ${datas.price}`);
  }
  return (
    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }} className="mt-5 mb-5 mx-3">
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src={datas.images}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body3">{datas.categoria}</Typography>
        <Typography fontWeight="xl">{datas.title}</Typography>

        <Typography fontSize="xl" fontWeight="xl" sx={{ mt: 1 }}>
          {datas.price > minimoPrecioProducto ? `$${datas.price} Pesos` : "Sin Stock"}
        </Typography>
        <Typography level="body2">
          <Link onClick={() => { window.open(`/item/${datas.id}`, '_blank') }} className="text-decoration-none text-muted">Más Info</Link>
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" size="lg" onClick={eventoBoton} className='buttonCardProduct'>
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
}