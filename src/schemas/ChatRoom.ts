import mongoose, { Document, Schema } from "mongoose";
import { User } from "./User";
import { v4 as uuid } from "uuid";

export type IChatRoom = Document & {
  idUsers: User[];
  idChatRoom: string;
}

const ChatRoomSchema = new Schema({
  idUsers: [{
    type: Schema.Types.ObjectId,
    ref: "Users",
  }],
  idChatRoom: {
    type: String,
    default: uuid,
  },
})

const ChatRoom = mongoose.model<IChatRoom>("ChatRoom", ChatRoomSchema);

export { ChatRoom };
