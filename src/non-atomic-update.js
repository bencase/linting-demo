
// Uncomment the below to create a failure that eslint will detect
/*
let totalLength = 0;

async function addLengthOfSinglePage(pageNum) {
    totalLength += await getPageLength(pageNum);
}

Promise.all([addLengthOfSinglePage(1), addLengthOfSinglePage(2)]).then(() => {
    console.log('The combined length of both pages is', totalLength);
});
*/
