const createdUser = require('./user');
// const createdMahasiswa1 = require('./mahasiswa1');
// const createdMahasiswa2 = require('./mahasiswa2');
// const createdMahasiswa3 = require('./mahasiswa3');
// const createdMahasiswa4 = require('./mahasiswa4');
// const createdMahasiswa5 = require('./mahasiswa5');
// const createdMahasiswa6 = require('./mahasiswa6');
const createdAllMahasiswaSTI = require('./allMahasiswaSTI');
const createdAllMahasiswaIF = require('./allMahasiswaIF');

module.exports = () => Promise.all([
  createdUser,
  createdAllMahasiswaSTI,
  createdAllMahasiswaIF,
  // createdMahasiswa1,
  // createdMahasiswa2,
  // createdMahasiswa3,
  // createdMahasiswa4,
  // createdMahasiswa5,
  // createdMahasiswa6,
])
  .then(([
    user,
    allMahasiswaSTI,
    allMahasiswaIF,
    // mahasiswa1,
    // mahasiswa2,
    // mahasiswa3,
    // mahasiswa4,
    // mahasiswa5,
    // mahasiswa6,
  ]) => {
    // const userMessage = !user ? 'User is already exist' : 'Successfully created User';
    // console.log('User : ', userMessage);

    // const allMahasiswaSTIMessage = !user ? 'User is already exist' : 'Successfully created User';
    // console.log('All Mahasiswa : '. allMahasiswaSTIMessage);

    // const allMahasiswaIFMessage = !user ? 'User is already exist' : 'Successfully created User';
    // console.log('All Mahasiswa : '. allMahasiswaIFMessage);

    // const mahasiswa1Message = !mahasiswa1 ? 'Mahasiswa1 is already exist' : 'Successfully created Mahasiswa1';
    // console.log('Mahasiswa1 : ', mahasiswa1Message);

    // const mahasiswa2Message = !mahasiswa2 ? 'Mahasiswa2 is already exist' : 'Successfully created Mahasiswa2';
    // console.log('Mahasiswa2 : ', mahasiswa2Message);

    // const mahasiswa3Message = !mahasiswa3 ? 'Mahasiswa3 is already exist' : 'Successfully created Mahasiswa3';
    // console.log('Mahasiswa3 : ', mahasiswa3Message);

    // const mahasiswa4Message = !mahasiswa4 ? 'Mahasiswa4 is already exist' : 'Successfully created Mahasiswa4';
    // console.log('Mahasiswa4 : ', mahasiswa4Message);

    // const mahasiswa5Message = !mahasiswa5 ? 'Mahasiswa5 is already exist' : 'Successfully created Mahasiswa5';
    // console.log('Mahasiswa5 : ', mahasiswa5Message);

    // const mahasiswa6Message = !mahasiswa6 ? 'Mahasiswa6 is already exist' : 'Successfully created Mahasiswa6';
    // console.log('Mahasiswa6 : ', mahasiswa6Message);
  })
  .catch((e) => {
    console.log('Error : ', e);
  });
