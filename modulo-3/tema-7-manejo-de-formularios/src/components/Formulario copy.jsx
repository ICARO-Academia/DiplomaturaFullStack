import { useForm } from 'react-hook-form'

function Formulario() {
  const { register, watch, formState: { errors } } = useForm()

  const contraseña = watch('contraseña')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre:</label>
        <input {...register('nombre', { required: 'El nombre es obligatorio' })} />
        {errors.nombre && <p>{errors.nombre.message}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          {...register('email', {
            required: 'El email es obligatorio',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'El formato del email no es válido'
            }
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          {...register('contraseña', {
            required: 'La contraseña es obligatoria',
            minLength: { value: 8, message: 'Debe tener al menos 8 caracteres' },
            pattern: { value: /\d/, message: 'Debe contener al menos un número' }
          })}
        />
        {errors.contraseña && <p>{errors.contraseña.message}</p>}
      </div>
      <div>
        <label>Confirmar Contraseña:</label>
        <input
          type="password"
          {...register('confirmarContraseña', {
            required: 'Debes confirmar tu contraseña',
            validate: (value) =>
              value === contraseña || 'Las contraseñas no coinciden'
          })}
        />
        {errors.confirmarContraseña && ( <p>{errors.confirmarContraseña.message}</p> )}
      </div>
      <button type="submit">Registrar</button>
    </form>
  )
}

export default Formulario
