const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({

    name: {
        type: String,      
        required: true,        
    },

    type: {
        type: String,      
        required: true,
    },

    weight: {
        type: Number,      
        required: false,
    },

    sets: {
        type: String,      
        required: false,
        },
    
    reps: {
        type: Number,      
        required: false,
        default: 10
    },
    
    duration: {
        type: String,
        required: true
    },

    distance: {
        type: Number,      
        required: false,
        },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;