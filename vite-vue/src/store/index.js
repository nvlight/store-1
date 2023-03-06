import {createStore} from "vuex";

const store = createStore({
    state: () => {
        return {
            user: {
                name: 'Martin German',
                email: 'martin@mgdev.ru'
            }
        }
    },
    getters:{

    },
    actions:{

    },
    mutations:{

    }

});

export default store;
