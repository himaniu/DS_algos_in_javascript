

const createStore = (reducer) => {
    let state;

    let listeners = [];
    const getState = () => state;
    const disptach = (action) => {
        let state = reducer(state, action);
        listeners.forEach((listener) => {
            listener();
        });
    }
    const subscribe = (listener) => {
        listeners.push(listener);

        return () => {
            listeners.filter((list) => list != listener);
        }
    };
    return {
        disptach, subscribe, getState
    }

}