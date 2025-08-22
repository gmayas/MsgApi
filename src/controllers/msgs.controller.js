// Models
const Msg = require('../js/models/msg');

// Get all messages
const getMessages = async (req, res) => {
  try {
    let dataRetur = {};
    const msgs = await Msg.find({}).sort({ _id: -1 });
    dataRetur = {
      msgs,
      message: "Query Success",
      Ok: true
    }
    res.json(dataRetur);
  } catch (e) {
    console.log(e);
    dataRetur = {
      msgs: [],
      message: "Error in query:" + e, Ok: false
    }
    res.json(dataRetur);
  }
};

// Create a new message
const createMessage = async (req, res) => {
  try {
    let dataRetur = {};
    const body = req.body;
    console.log("Body createMessage", body);
    let newMsg = new Msg({
      message: body.message,
      key: body.key
    });
    await newMsg.save();
    console.log("New message created:", newMsg);
    // Return the new message
    dataRetur = {
      newMsg: [],
      message: "Data addNewUser Ok", Ok: true
    }
    res.json(dataRetur);
  } catch (e) {
    console.log(e);
    dataRetur = {
      newMsg: [],
      message: "Error addNewUser:" + e, Ok: false
    }
    res.json(dataRetur);
  }
};

// Delete a message
 const deleteMessage = async (req, res) => {
     try {    
        let dataRetur = {};
        const body = req.body;
        console.log("Body deleteMessage", body);
        const msg = await Msg.findByIdAndDelete({ _id: body.id });
        if (!msg) {
            dataRetur = {
                deleteMessage: [],
                message: "Message not found", Ok: false
            };
            return res.status(404).json(dataRetur);
        }       
        console.log("Message deleted:", msg);
        dataRetur = {
            deleteMessage: msg,
            message: "Message deleted successfully", Ok: true
        };
        res.json(dataRetur);
    } catch (e) {
        console.log(e);
        dataRetur = {
            deleteMessage: [],
            message: "Error deleting message:" + e, Ok: false
        };
        res.json(dataRetur);
    }   
}


//Export methods
module.exports = { getMessages, createMessage, deleteMessage };