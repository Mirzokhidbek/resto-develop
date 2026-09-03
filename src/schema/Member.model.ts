import { MemberStatus, MemberType } from "../libs/enums/member.enum";
import mongoose, { Schema } from "mongoose";

// Schema = blueprint for what a Member document looks like in MongoDB
// Every member saved to the DB must follow this structure

const memberSchema = new Schema(
    {
        memberType: {
            type: String,
            enum: MemberType, // only allows: "USER" or "RESTAURANT"
            default: MemberType.USER, // if not provided, defaults to USER
        },

        memberStatus: {
            type: String,
            enum: MemberStatus, // only allows: "ACTIVE", "BLOCK", "DELETE"
            default: MemberStatus.ACTIVE, // new members start as ACTIVE
        },

        memberNick: {
            type: String,
            index: { unique: true, sparse: true }, // no two members can have the same nick
            required: true,
        },

        memberPhone: {
            type: String,
            index: { unique: true, sparse: true }, // no two members can have the same phone
            required: true,
        },

        memberPassword: {
            type: String,
            select: false, // IMPORTANT: password is hidden by default in all queries
            required: true,
        },

        memberAddress: {
            type: String, // optional
        },

        memberDesc: {
            type: String, // optional bio/description
        },

        memberImage: {
            type: String, // optional profile image URL
        },

        memberPoints: {
            type: Number,
            default: 0, // every new member starts with 0 points
        },
    },
    { timestamps: true }, // auto-adds: createdAt and updatedAt fields
);

// export the model so other files can use it to query MongoDB
export default mongoose.model("Member", memberSchema);
