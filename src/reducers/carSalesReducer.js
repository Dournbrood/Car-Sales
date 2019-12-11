import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/carSalesActions";

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const carSalesReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case ADD_FEATURE:

            //We're going to want to remove the selected feature from state.additionalFeatures, and add it to state.car.features, returning new state... hmm.
            //Here, our action.payload is going to be the ID of whatever feature we click on.
            console.log(action, state);
            return ({
                ...state,
                additionalPrice: state.additionalPrice + state.additionalFeatures.filter((feature) => (feature.id === action.payload))[0].price,
                car: {
                    ...state.car,
                    // features: state.car.features.filter((feature) => (feature.id !== action.payload)),
                    features: [...state.car.features, state.additionalFeatures.filter((feature) => (feature.id === action.payload))[0]]
                },

                // additionalFeatures: [...state.additionalFeatures, state.car.features.filter((feature) => (feature.id === action.payload))[0]]
                additionalFeatures: state.additionalFeatures.filter((feature) => (feature.id !== action.payload))
            })
        case REMOVE_FEATURE:

            //Thankfully, we can just inverse the logic of the above and BAM, off we go.
            console.log(action, state);
            return ({
                ...state,
                additionalPrice: state.additionalPrice - state.car.features.filter((feature) => (feature.id === action.payload))[0].price,
                car: {
                    ...state.car,
                    features: state.car.features.filter((feature) => (feature.id !== action.payload)),
                },

                additionalFeatures: [...state.additionalFeatures, state.car.features.filter((feature) => (feature.id === action.payload))[0]]
            })
        default:
            return (state);
    };
}