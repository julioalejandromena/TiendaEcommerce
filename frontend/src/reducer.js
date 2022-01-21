export const inicialState = {
    carrito : [],
    detalle : [],
    usuario : []
}

export const actionTypes = {
    ANIADIR_AL_CARRITO : "ANIADIR_AL_CARRITO",
    VERMAS : "VERMAS",
    CANCELARPEDIO : "CANCELARPEDIO",
    PAGAR : "PAGAR"
    // GUARDARUSUARIO : "GUARDARUSUARIO"
}

const reducer = (state, action) =>
{ 
    console.log(action.payload)

    switch(action.type)
    {
        
        case  actionTypes.ANIADIR_AL_CARRITO :
            return {
                ...state,
                carrito : [...state.carrito, action.item]
            }

        case actionTypes.VERMAS :
            return {
                ...state,
                detalle : [, action.items]
            } 

        // case actionTypes.GUARDARUSUARIO :
        //     return {
        //         ...state,
        //         usuario : [...state.usuario, action.user]
        //     }    
            
        case actionTypes.CANCELARPEDIO : 
            return {
                carrito : []
            } 
        
        case actionTypes.PAGAR :
            return {
                carrito : []
            }

        default : return state;
    }
}

export default reducer;