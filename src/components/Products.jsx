import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

export default function Products() {
  return (
    <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }} className="mt-5 mb-5 mx-3">
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body3">Bluetooth Headset</Typography>
        <Typography fontWeight="xl">Super Rockez A400</Typography>

        <Typography fontSize="xl" fontWeight="xl" sx={{ mt: 1 }}>
          2,900 Pesos
        </Typography>
        {/* <Typography level="body2">
          (Only <b>7</b> left in stock!)
        </Typography> */}
      </CardContent>
      <CardOverflow>
        <Button variant="solid" size="lg" className='buttonCardProduct'>
          <p>Add to cart</p>
        </Button>
      </CardOverflow>
    </Card>
  );
}
