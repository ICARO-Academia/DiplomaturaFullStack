import Contador from '../../tema-3-estados/src/components/Contador'
import Separador from '../../tema-3-estados/src/components/Separador'
import Despedida from '../../tema-3-estados/src/components/Despedida'
import Saludo from '../../tema-3-estados/src/components/Saludo'

const App = () => {
    return (
        <div>
            <Contador />
            <Separador />
            <Saludo nombre="Agustín" edad={25} />
            <Separador />
            <Saludo nombre="Ludmila" edad={28} />
            <Separador />
            <Saludo nombre="Lucas" edad={30} />
            <Despedida />
        </div>
    )
}

export default App
