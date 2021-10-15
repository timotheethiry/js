const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

const toCheck = new Map(); // association table
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0].toLowerCase(); // valid file extension, case sensitivity
    const MT = inputs[1]; // corresponding MIME type.
    toCheck.set(EXT, MT);
}

for (let i = 0; i < Q; i++) {
    const fileName = readline().toLowerCase(); // One file name per line, case sensitivity
    const ext = fileName.split('.').pop() // extention is the substring after the last dot
    const validName = new RegExp(/([\w,]*\.)+\.*[A-Za-z]{2,}/);
    let type = "UNKNOWN";

    // check if filename is valid and if a value corresponds to the file extention
    if (validName.test(fileName) && toCheck.get(ext)) {
        type = toCheck.get(ext);
    }
    console.log(type);
}
// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
