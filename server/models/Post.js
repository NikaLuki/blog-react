const { Schema, model } = require("mongoose");

const schema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        categories: { type: Schema.Types.ObjectId, ref: "Category" },
    },
    {
        timestamps: true,
    }
);

module.exports = model("Post", schema);
