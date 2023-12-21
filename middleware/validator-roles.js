

const esAmdinRole = (req, res, next) => {
  if (!req.user) {
    return res.status(500).json({
      msg: "Se quiere verificar el role sin validar el token primero"
    })
  }

  const {role, name} = req.user

  if (role !== 'ADMIN_ROLE') {
    return res.status(401).json({
      msg: `${name} no tiene el rol de administrador para hacer esto`
    });
  }

  next();
}

const tieneRole = ( ...roles ) => {
  
  return (req, res, next) => {
    
    if (!req.user) {
      return res.status(500).json({
        msg: "Se quiere verificar el role sin validar el token primero"
      })
    }

    if (!roles.includes(req.user.role)) {
      return res.status(401).json({
        msg: `El servicio requiere uno de estos roles ${roles}`
      })  
    }

    next();
  };

  next();
}

module.exports = {
  esAmdinRole,
  tieneRole
}