/**
 * Created by denishuang on 2017/11/29.
 */

export var Register = {
    configs: {},
    register (apps) {
        let cs = this.configs
        Object.keys(apps).forEach((a) => {
            let app = apps[a]
            Object.keys(app.models).forEach((m) => {
                let model = app.models[m]
                let config = Object.assign({app: a, name: m, fullName: `${a}.${m}`}, model)
                cs[`${config.app}.${config.name}`] = config
            })
        })
    },
    getConfig (fullName) {
        let config = this.configs[fullName]
        if (!config) {
            throw `model ${fullName} not found!`
        } else {
            return config
        }
    }
}

export default Register
