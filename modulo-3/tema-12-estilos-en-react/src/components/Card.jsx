import styles from '../assets/Card.module.css'

function Card() {
  return (
    <div className={styles.card}>
      <h2>Tarjeta de Ejemplo</h2>
      <p>Esto es una tarjeta con estilos en módulos CSS.</p>
      <button className={styles.boton}>Ver más</button>
    </div>
  )
}

export default Card
