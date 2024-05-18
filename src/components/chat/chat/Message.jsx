import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import Message from "./messages";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountPr";
import { useState } from "react";
import { useEffect } from "react";
import { getMessages, newMessage } from "../../../service/api";
import { useRef } from "react";

const Wrapper = styled(Box)`
  background-image: url(${`https://images.pexels.com/photos/301717/pexels-photo-301717.jpeg?auto=compress&cs=tinysrgb&w=600`});
  background-size: 100%;
`;

const Component = styled(Box)`
  height: 72vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  const [file, setFile] = useState();
  const [image, setImage] = useState("");
  const scrollRef = useRef();
  const [incomingMessage, setIncomingMessage] = useState(null);

  const { account, socket, newMessageFlag, setNewMessageFlag } =
    useContext(AccountContext);

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now(),
      });
    });
  }, [socket]);

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id);
      setMessages(data);
    };
    conversation._id && getMessageDetails();
  }, [person._id, conversation._id, newMessageFlag]);

  // the code is work but not be properly this is for  new message comming and show it bottom

  useEffect(() => {
      scrollRef.current?.scrollIntoView({ transition: "smooth" })
  }, [messages]);

  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {};
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: value,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }

      socket.current.emit("sendMessage", message);

      await newMessage(message);
      setValue("");
      setFile("");
      setImage("");
      setNewMessageFlag((prev) => !prev);
    }
  };
  return (
    <Wrapper>
      <Component>
        {messages &&
          messages.map((message) => (
            <Container ref={scrollRef}>
              <Message message={message} />
            </Container>
          ))}
      </Component>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </Wrapper>
  );
};
export default Messages;
