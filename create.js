const mongoose = require('mongoose');
let koneksi = mongoose.connect('mongodb://127.0.0.1:27017/belajar_express');

const pesertaSchema = new mongoose.Schema({
    nama: String,
    alamat: String,
    umur: Number,
});

const peserta = mongoose.model('peserta', pesertaSchema);

const peserta1 = new peserta({
    nama: 'Anies Baswedan',
    alamat: 'Jl. Jakarta Raya No. 1',
    umur: 50
});

const peserta2 = new peserta({
    nama: 'Muhaimin Iskandar',
    alamat: 'Jl. Surabaya Raya No. 1',
    umur: 50
});

const peserta3 = new peserta({
    nama: 'Gibran Rakabuming',
    alamat: 'Jl. Solo Raya No. 2',
    umur: 35
});

const peserta4 = new peserta({
    nama: 'Ganjar Pranowo',
    alamat: 'Jl. Semarang Raya No. 3',
    umur: 50
});

// peserta.insertMany([peserta2, peserta3, peserta4]);

// peserta2.save()
//     .catch((res) => {
//         mongoose.connection.close();
//         console.log('Data Berhasil ditambahkan !');
//      })
//     .then((err) => {
//         console.log(err);
//      });