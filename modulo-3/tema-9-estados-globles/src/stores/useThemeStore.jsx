import { create } from 'zustand'

const useThemeStore = create((set) => ({
  tema: 'claro',
  cambiarTema: () => set((state) => ({
    tema: state.tema === 'claro' ? 'oscuro' : 'claro'
  }))
}))

export default useThemeStore