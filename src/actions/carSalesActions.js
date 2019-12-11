//Action types:
export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

//actions
// ADD_FEATURES and REMOVE_FEATURES

export const addFeature = (payload) => {
    return ({ type: ADD_FEATURE, payload: payload });
};

export const removeFeature = (payload) => {
    return ({ type: REMOVE_FEATURE, payload: payload });
};