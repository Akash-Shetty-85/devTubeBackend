import mongoose, {Schema} from 'mongoose'

const userschema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique: true,
            index:true,
            lowercase:true
        },
        email :{
            type:String,
            required:true,
            unique: true,
            lowercase:true
        },
        fullname :{
            type:String,
            required:true,
        },
        password :{
            type:String,
            required:true
        },
        avatra:{
            type:String,
            required:true
        },
        coverimage:{
            type:String,
        },
        refreshToken:
        {
            type:String
        },
        watchHistory:[{
             type:Schema.Types.ObjectId,
             ref:"Video"
        }]
 },
 {
    timestamps:true
}
)

export const User= mongoose.model("User",userschema)