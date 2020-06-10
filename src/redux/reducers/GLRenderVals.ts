const initialState = {
    glDrawingBufferWidth: 0,
    glDrawingBufferHeight: 0,
};

export const GLRenderVals = (state = initialState, action) => {
    switch(action.type){
        case "SET_GlDrawingBufferWidth": return {...state, glDrawingBufferWidth: action.val};
        case "SET_GlDrawingBufferHeight": return {...state, glDrawingBufferHeight: action.val};
        default: return state;
    }
};