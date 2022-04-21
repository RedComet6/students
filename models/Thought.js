const { Schema, model } = require("mongoose");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            // get: (timestamp) => dateFormat(timestamp),
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
        timestamps: true,
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            // get: (timestamp) => dateFormat(timestamp),
        },
        username: {
            type: String,
            ref: "User",
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
        timestamps: true,
    }
);

// Create a virtual property reactionCount that counts number of friends
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const User = model("user", thoughtSchema);

module.exports = User;
