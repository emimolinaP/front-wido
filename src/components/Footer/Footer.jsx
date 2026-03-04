import { useUser } from '../../context/UserContext'
import toast from 'react-hot-toast'
import { logoutService } from '../../services/authServices'
import { Link } from 'react-router'

const Footer = () => {
    const { loading, userInfo, setUserInfo } = useUser()
    const handleLogout = async () => {
        try {
            await logoutService()
            setUserInfo({})
            toast.success('Sesión cerrada correctamente')
        } catch (error) {
            console.error('Error al cerrar sesión', error)
            toast.error('Error al cerrar sesión intente más tarde')
        }
    }
    return (
        <footer className="bg-[#331947] text-white px-8 py-14">
            <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
             
                <div>
                    <h2 className="text-2xl font-bold mb-3">Wido Rugs</h2>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Alfombras hechas a mano con técnica tufting.
                    </p>
                     <p className="text-sm text-gray-400 leading-relaxed">
                        Diseños
                        personalizados para tu espacio.
                    </p>
                </div>

                
                <div>
                    <h3 className="font-semibold mb-3">Secciones</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/rugs">Pedir mi alfombra</Link>
                        </li>
                    </ul>
                </div>

               
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold mb-2">Acceso</h3>

                    {!loading && userInfo?.username && (
                        <Link
                            to="/dashboard"
                            className="text-sm text-[#BADA6F] hover:underline"
                        >
                            Administración
                        </Link>
                    )}

                    {loading ? null : userInfo?.username ? (
                        <button
                            onClick={handleLogout}
                            className="text-sm text-gray-400 hover:text-red-400 transition"
                        >
                            Cerrar sesión
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="text-sm text-gray-400 hover:text-[#BADA6F] transition"
                        >
                            Login administrador
                        </Link>
                    )}
                </div>
            </div>

            {/* Línea inferior */}
            <div className="mt-10 border-t border-white pt-6 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Wido Rugs — Todos los derechos
                reservados.
            </div>
        </footer>
    )
}

export default Footer
