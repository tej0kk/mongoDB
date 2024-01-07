const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/belajar_express');

const pesertaSchema = mongoose.Schema({
    nama: String,
    alamat: String,
    umur: Number
});

const peserta = mongoose.model('peserta', pesertaSchema);

peserta.updateOne({'nama':'Anies Baswedan'},{'umur':100})
    .catch((res) => { 
        mongoose.connection.close();
    })
    .then((err) => { 
        console.log(err);
    });
