const Mahasiswa = require('../models/Mahasiswa');
const Rating = require('../models/Rating');
const User = require('../models/User');

const allMahasiswa = `Abdul Hafizh Firdaus,18215007,enigma
Abidzar Muhammad Ghifary Kurniawan,18216045,bit
Abiel Putra Dimyati,18217012,unix
Adini Safia Zahra,18217033,unix
Adira Syafi Taruna,18216047,bit
Aditya Dhammawan Tang,18216033,bit
Adiyanti Rifda Hayati,18215010,enigma
Afna Okta Sekar Rima,18215015,enigma
Agung Daryodi,18216022,bit
Ahmad Fawwaz Zuhdi,18215036,enigma
Airinnisa Nur Hidayati,18215020,enigma
Aisyah Nurulhaqi Syahidah,18216013,bit
Akbar Ghifari,18216011,bit
Al Varrel Putra Kusuma,18216020,bit
Alessandro Aria Wibowo,18216002,bit
Alfian Maulana Ibrahim,18217038,unix
Alfiansyah Mahareksa,18217022,unix
Aliyah Sausan Huwel,18215040,enigma
Almyra Ramadhina,18217009,unix
Aloysius Kenny,18216024,bit
Ambar Setia Awan,18216004,bit
Andre Juliantama,18217040,unix
Andrew Dani Arianto,18216016,bit
Ardji Naufal Setiawan,18216021,bit
Arief Septian Nurhada,18215013,enigma
Aries Adjie Pangestu,18215033,enigma
Ariq Radhitama Ariasatya,18217017,unix
Arvin Wahyu Septiandie,18215019,enigma
Athur Naufan Muharam,18216003,bit
Attari Rahmi,18216035,bit
Aulia Nur Adib Phasya,18216012,bit
Avid Santiko Adji,18215032,enigma
Balya Ibnu Sulistiyono,18215005,enigma
Bimasakti Sinar Putra,18215022,enigma
Christabel Eleora Lawandy,18216015,bit
Christopher Calvin,18217039,unix
Christopher Sanjaya,18215009,enigma
Claudia Renata Maharani Danardono,18217048,unix
Condro Wiyono,18215042,enigma
Cyknoris Mayor,18216029,bit
Daeng Muhammad Yusuf Aqsha Alfarabi,18217045,unix
David Petra Natanael,18217011,unix
Deryan Tejasatya Lubis,18216034,bit
Devana Gobel,18215028,enigma
Devin Adam Sanubari,18216006,bit
Dicky,18217041,unix
Dwi Cahyo Pangestu,18217029,unix
Dwi Nova Wijayanti,18217047,unix
Fadel Nararia Rahman,18217005,unix
Fahmi Satria Aji,18215021,enigma
Faras Banas Lubis,18217046,unix
Farrel Fatah Muhammad Atiq,18216043,bit
Fathia Andita Resapati,18215031,enigma
Fausto Axel Evans Keiluhu,18215025,enigma
Fauzan Hanandito,18217015,unix
Fauzan Linnas,18215034,enigma
Feby Eliana Tengry,18217030,unix
Firdausi Aditya Darmawan,18217001,unix
Gabby Aprilia,18216010,bit
Habiib Tsabit Az Zumar,18217010,unix
Haniya Azzahra,18215043,enigma
Haykal Hutama Kahum,18216050,bit
Ihsan Faishal Rasyid,18217032,unix
Ikhsan Widi Adyatma,18215047,enigma
Irfan Reynaldi Sukmananda,18215003,enigma
Ismail Faizal Aziz,18217024,unix
Iswan Aulia,18215017,enigma
Ivan,18216017,bit
Jason Alfian Hartanto,18217004,unix
Jeffry Khosasi,18216028,bit
Jery Octavianus,18215027,enigma
Joe Putera,18217035,unix
Johanes Antonius,18217036,unix
Jundi Amir Syuhada,18215037,enigma
Kevin Caesar Hagata Ginting,18216018,bit
Kukuh Kurniadhi Raharjo,18215030,enigma
Lidya Jessica,18217037,unix
Luthfi Eko Trinowo,18217018,unix
Luthfi Fachriza Sandi,18216027,bit
Makrifat Sabil Haq,18216031,bit
Mario Abraham Sandroto,18216046,bit
Matthew Bima Putra Mukti,18217026,unix
Miftahul Firdaus,18216038,bit
Mira Risty Masyita,18216037,bit
Mohammad Nathiq Ulman,18217023,unix
Muhammad Aditya Hilmy,18217025,unix
Muhammad Ammar Robbani,18216040,bit
Muhammad Ashabul Kahfi,18216042,bit
Muhammad Daffa Alfaridzi,18217013,unix
Muhammad Faisal Aziz,18215044,enigma
Muhammad Fata Nurrahman,18216014,bit
Muhammad Fikri Hafiya,18215023,enigma
Muhammad Fiqri Fatriansyah,18217031,unix
Muhammad Galih Ghiffari,18215026,enigma
Muhammad Habibullah,18215002,enigma
Muhammad Isfan Rahadi,18217019,unix
Muhammad Taufik Rahman,18216030,bit
Muhammad Yanza Hattari,18217043,unix
Nabila Rahmi Maulida,18216051,bit
Nadya Anastasia,18217020,unix
Nafisah Nurul Hakim,18215045,enigma
Naradita Kunti Nabila,18217034,unix
Nicholas Hadi,18215038,enigma
Nicholaus Danispadmanaba Yosodipuro,18217028,unix
Nofandi Surya,18215012,enigma
Pradnya Astari,18215041,enigma
Prahasto Satrio Utomo,18216026,bit
Priska Reysa Sitorus,18215001,enigma
Qonita Salamah Auliya,18216023,bit
Ramadida Rai Pahlevi,18217008,unix
Ramon Antares Sullivan,18217016,unix
Randy Christian Saputra,18217006,unix
Rangga Mahendra Santoso,18215006,enigma
Resha Puspita Dewi,18217014,unix
Reyhan Fadhil Irianto,18216044,bit
Reyhan Tanuwijaya,18216009,bit
Rifda Annelies Az Zahra,18216001,bit
Ronaldo Matthew Raranta,18216007,bit
Salma Fedora,18217007,unix
Saskia Amalia Aryono,18215029,enigma
Savira Dwia Nadela,18216052,bit
Sebastian Dumohar Jeremiah Sihombing,18216048,bit
Sergio Ryan Wibisono,18215014,enigma
Shafwan Aminudin Muhammad,18215024,enigma
Stevani Halim,18215018,enigma
Sukmawening Nastitisari,18215039,enigma
Sulthan Mahdi Muhammad Dhiaulhaq,18216039,bit
Syahruddin,18216025,bit
Teo Wijayarto,18215004,enigma
Tessa Angela,18215046,enigma
Thomas Robin,18216032,bit
Vincent,18217042,unix
William Aristea Tantiono,18215011,enigma
William Halim,18217021,unix
Winaldo Juan,18215016,enigma
Yocia Meiko Oke,18216036,bit
Yudhistira Qasthari Putra,18217003,unix
Yusron Taufiq Anfasa,18217002,unix
Yusuf Noor Muhammad,18217044,unix
Zahid Abdurrohman,18216019,bit
Zalikha Adiera Gambetta,18217027,unix`

module.exports = new Promise((resolve, reject) => {
  arrMahasiswa = allMahasiswa.split('\n');
  arrMahasiswa.forEach(function(mahasiswa){
    var data = mahasiswa.split(',');
    var _nama = data[0];
    var _nim = data[1];
    var _angkatan = data[2]
    // console.log(_nama, _nim, _angkatan);
    
    Mahasiswa.findOne({
      nim: _nim,
    })
      .then((foundMahasiswa) => {
        if (foundMahasiswa) {
          const countRating = Rating.find({'untuk': _nim}).countDocuments();
          const haveLogin = User.findOne({'email': _nim + '@std.stei.itb.ac.id'});
          Promise.all([countRating, haveLogin])
            .then(([countRate, login]) => {
              foundMahasiswa.count = countRate
              if (!login) {
                foundMahasiswa.haveLogin = false;
              }
              else {
                foundMahasiswa.haveLogin = true;
              }
              return foundMahasiswa.save();
            })
            .catch(e => console.log(e));
        }
        const newMahasiswa = new Mahasiswa({
          nim: _nim,
          nama: _nama,
          angkatan: _angkatan,
          rating: 0,
          count: 0,
          haveLogin: false,
          image: null,
          jurusan: 'sti',
        });
        return newMahasiswa.save();
      })

      .then((createdMahasiswa) => {
        if (createdMahasiswa) {
          resolve(createdMahasiswa);
        }
        resolve(null);
      })
      .catch(e => reject(e));  
  })  
});
