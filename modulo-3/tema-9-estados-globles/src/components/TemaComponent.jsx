import useThemeStore from './themeStore'

function TemaComponent() {
  const { tema, cambiarTema } = useThemeStore()

  return (
    <div style={{
      background: tema === 'claro' ? '#fff' : '#333',
      color: tema === 'claro' ? '#000' : '#fff',
      padding: '20px'
    }}>
      <h1>Tema Actual: {tema}</h1>
      <button onClick={cambiarTema}>Cambiar Tema</button>
    </div>
  )
}

export default TemaComponent