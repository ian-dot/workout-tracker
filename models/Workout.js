// many exercises
// duration

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now,
    },

    exercises: [
        {
            name: {
                type: String,      
                trim: true,        
            },
        
            type: {
                type: String,      
                trim: true,
            },
        
            weight: {
                type: Number,      
                
            },
        
            sets: {
                type: String,      
                
                },
            
            reps: {
                type: Number,      
                
            },
            
            duration: {
                type: String,
                
            },
        
            distance: {
                type: Number,      
                
                },
        },
    ],
    totalDuration: {
        type: Number,
    },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
