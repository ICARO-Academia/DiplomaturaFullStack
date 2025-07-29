import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material'

function TarjetaProducto() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/300"
        alt="Producto"
      />
      <CardContent>
        <Typography variant="h5">Nombre del Producto</Typography>
        <Typography variant="body2">Descripción breve del producto.</Typography>
        <Button variant="contained" color="primary">Comprar</Button>
      </CardContent>
    </Card>
  )
}

export default TarjetaProducto
