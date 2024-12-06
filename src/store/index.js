import {createStore, createLogger} from "vuex";
import auth from "@/store/modules/auth.js";
import request from "@/store/modules/request.js";

const plugins = []

if (process.env.NODE_ENV === 'development') {
    plugins.push(createLogger())
}

export default createStore({
    plugins,
    state() {
        return {
            message: null,
            sidebar: false
        }
    },
    mutations: {
        setMessage(state, message) {
            state.message = message
        },
        clearMessage(state) {
            state.message = null
        },
        openSidebar(state) {
            state.sidebar = true
        },
        closeSidebar(state) {
            state.sidebar = false
        }
    },
    actions: {
        setMessage({commit}, message) {
            commit("setMessage", message)

            setTimeout(() => {
                commit("clearMessage")
            }, 50000)
        }
    },
    getters: {},
    modules: {auth, request},
})