import { injectable } from "tsyringe";
import { Message } from "../schemas/Message";

@injectable()
class GetMessagesByChatRoomService {

  async execute(chatRoomId: string) {
    // console.log("chatRoomId on class", chatRoomId)
    const messages = await Message.find({
      roomId: chatRoomId
    }).populate("to").exec();
    // console.log("messages on class", messages)
    return messages;
  }
}

export { GetMessagesByChatRoomService }
