const Msg = require('../js/models/msg'); // Import the Msg model
const rsaLib = require('../js/libs/rsa-lib'); // Import the RSA library for encryption/decryption

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
    const key = rsaLib.key;
    const key_public = key.exportKey('public'); // Export the public key
    const key_private = key.exportKey('private'); // Export the private key
    // Encrypt the message using RSA
    body.message = rsaLib.encrypted(body.message, key_public); // Encrypt the message
    body.key_public = key_public
    body.key_private = key_private
    // Create a new message instance
    console.log("Creating new message with encrypted data");
    console.log("Encrypted message:", body);
    // Save the new message to the database
    let newMsg = new Msg({
      message: body.message,
      key_public: body.key_public,
      key_private: body.key_private,
    });
    await newMsg.save();
    console.log("New message created:", newMsg);
    // Return the new message
    dataRetur = {
      newMsg,
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

// Find message by ID (not implemented)
const findMessageById = async (req, res) => { 
    try {
    let dataRetur = {};
    const body = req.body;
    console.log("Body Message", body);
    const msg = await Msg.findById({ _id: body.id });
    if (!msg) {
      dataRetur = {
        deleteMessage: [],
        message: "Message not found", Ok: false
      };
      return res.status(404).json(dataRetur);
    }
    msg.message = rsaLib.decrypted(msg.message, msg.key_private); //  Decrypt the message
    console.log("Message find:", msg);
    dataRetur = {
      msg,
      message: "Message find successfully", Ok: true
    };
    res.json(dataRetur);
  } catch (e) {
    console.log(e);
    dataRetur = {
      deleteMessage: [],
      message: "Error finding message:" + e, Ok: false
    };
    res.json(dataRetur);
  }
}

//Export methods
module.exports = { getMessages, createMessage, deleteMessage , findMessageById };