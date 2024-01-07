const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/belajar_express');

const pesertaSchema = mongoose.Schema({
    nama: String,
    alamat: String,
    umur: Number
});

const peserta = mongoose.model('peserta', pesertaSchema);

peserta.findById('659a2c435a84466f932a2823')
    .catch((res) => { 
        console.log(res);
    })
    .then((err) => { 
        console.log(err);
    });

    // peserta.findOne({'nama':'Anies Baswedan'})
    // .catch((res) => { 
    //     console.log(res);
    // })
    // .then((err) => { 
    //     console.log(err);
    // });

// peserta.find()
//     .catch((res) => {
//         res.forEach(function (item) {
//             console.log(item.nama);
//         });
//         mongoose.connection.close();
//     })
//     .then((err) => { 
//         console.log(err);
//     });