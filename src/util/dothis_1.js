
// Uncomment the below to create a failure that eslint will detect
/*
if (true) {
    console.log('Bad!');
}

alert = () => {
    console.log('No!!!');
};
*/

export const my_add = (a, b) => {
    return a + b;
};

export const my_switch = (stmt) => {
    switch (stmt) {
        case 1:
            console.log('One.');
        case 2:
            console.log('Two.');
    }
};
