const mongoose = require("mongoose")

async function main() {

  try {

    mongoose.set("strictQuery", true)
    await mongoose.connect("mongodb+srv://keomargomes:admin123@cluster0.imuzkhu.mongodb.net/?retryWrites=true&w=majority")
    console.log("Conectado ao banco")
  } catch (error) {
    console.log(`Erro? ${error}`)
  }
}


module.exports = main