import styles from './Button.module.css'

function Button({ texto, color = 'blue', tamaño = 'medium' }) {
  return (
    <button
      className={styles.boton}
      style={{ backgroundColor: color, fontSize: tamaño === 'large' ? '18px' : '14px' }}
    >
      {texto}
    </button>
  )
}

export default Button
