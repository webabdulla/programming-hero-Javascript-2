
function fullname(first , last = 'Raj'){
    const names = first + '' + last;

    return names ;
}
const fullnames = fullname('miraj');
console.log(fullnames);