var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Main = new Schema({
    symbol: {
        type: String
    },
    data:{
        psar: [{
        0: {
            type: String,
        },
        1: {
            type: String,
        }
    }],
    adx: [{
        0: {
            type: String,

        },
        1: {
            type: String,

        },
        2: {
            type: String,

        },
        3: {
            type: String,

        },
        4: {
            type: String,

        }
    }],
    rsi: [{
        0: {
            type: String,

        },
        1: {
            type: String,

        },
        2: {
            type: String,

        }
    }],
    macd: [{
        0: {
            type: String,

        },
        1: {
            type: String,

        },
        2: {
            type: String,

        },
        3: {
            type: String,

        }
    }],
    mfi: [{
        0: {
            type: String,

        },
        1: {
            type: String,

        },
        2: {
            type: String,

        }
    }],
    cci: [{
        0: {
            type: String,

        },
        1: {
            type: String,

        },
        2: {
            type: String,

        }
    }],
    wr: [{
        0: {
            type: String,

        },
        1: {
            type: String,

        },
        2: {
            type: String,

        }
    }],
    bb: [{
        0: {
            type: String,

        },
        1: {
            type: String,

        },
        2: {
            type: String,

        },
        3: {
            type: String,

        },
        4: {
            type: String,

        }
    }],
    stoch: [{
        0: {
            type: String,

        },
        1: {
            type: String,

        },
        2: {
            type: String,

        }
    }],
    ichimoku: [{
        0: {
            type: String,

        },
        1: {
            type: String,
            default: ''
        },
        2: {
            type: String,
            default: ''
        },
        3: {
            type: String,
        },
        4: {
            type: String,
        }
    }],
}
}, { collection: 'new_data_new' });
module.exports = mongoose.model("new_data_new", Main);