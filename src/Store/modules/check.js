export default {
    namespaced: true,
    state: {
        info: [
            {
                name: 'Name',
                value: '',
                pattern: /^[a-zA-Z ]{2,30}$/,
                status: false
            },
            {
                name: 'Phone',
                value: '',
                pattern: /^[0-9]{7,14}$/,
                status: false
            },
            {
                name: 'Email',
                value: '',
                pattern: /.+/,
                status: false
            },
            {
                name: 'Some Field 1',
                value: '',
                pattern: /.+/,
                status: false
            },
            {
                name: 'Some Field 2',
                value: '',
                pattern: /.+/,
                status: false
            }
        ],
        formProcess: false,
        formSubmited: false,
        done: 0
    },
    getters: {
        info(state) {
            return state.info
        },
        validCnt(state) {
            let done = 0;
            for (let i in state.info) {
                if (state.info[i].status) {
                    done++
                }
            }
            return done
        },
        name(state) {
            return state.info[0].status ? state.info[0].value : ''
        },
        formSubmited(state) {
            return state.formSubmited
        },
        formProcess(state) {
            return state.formProcess
        }
    },
    mutations: {
        onChangeValue(state, payLoad) {
            state.info[payLoad.i].value = payLoad.value;

        },
        onChangeStatus(state, payLoad) {
            state.info[payLoad.i].status = payLoad.status
        },
        startSubmit(state) {
            state.formProcess = true
        },
        submitted(state) {
            state.formSubmited = true;
            state.formProcess = false
        }
    },
    actions: {
        submit(store) {
            store.commit('startSubmit');
            setTimeout(() => store.commit('submitted'), 1000)
        }
    }
}

