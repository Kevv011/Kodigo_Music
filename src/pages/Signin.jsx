import { useForm } from "react-hook-form"; // Importar el hook para manejar formularios

export const Signin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-75 container my-5">
            <div className="text-center">
                <h2><strong>Ingresa tus credenciales</strong></h2>
                <h5>Para una mejor experiencia</h5>
            </div>
            
            {/* Campo Nombre */}
            <div className="mb-3 mt-4">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Escribe tu nombre"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    {...register("name", {
                        required: "El nombre es obligatorio",
                        minLength: {
                            value: 3,
                            message: "El nombre debe tener al menos 3 caracteres",
                        },
                    })}
                />
                {errors.name && (
                    <div className="invalid-feedback">{errors.name.message}</div>
                )}
            </div>

            {/* Campo Correo Electrónico */}
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Escribe tu correo"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    {...register("email", {
                        required: "El correo es obligatorio",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                            message: "Correo electrónico no válido",
                        },
                    })}
                />
                {errors.email && (
                    <div className="invalid-feedback">{errors.email.message}</div>
                )}
            </div>

            {/* Campo Contraseña */}
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Escribe tu contraseña"
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                    {...register("password", {
                        required: "La contraseña es obligatoria",
                        minLength: {
                            value: 6,
                            message: "La contraseña debe tener al menos 6 caracteres",
                        },
                    })}
                />
                {errors.password && (
                    <div className="invalid-feedback">{errors.password.message}</div>
                )}
            </div>

            {/* Botón de Enviar */}
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
};