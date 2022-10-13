// async function numberFact(n) {
//     let res = await axios.get(`http://numbersapi.com/${n}?json`);
//     console.log(res.data.text);
//   }
  
// numberFact(33);


// async function numberFact(nums) {
//     let res = await axios.get(`http://numbersapi.com/${nums}?json`);
//     console.log(res.data);
//   }
  
// numberFact([3, 6, 8]);


async function fourFacts(n) {
    let facts = await Promise.all([
        axios.get(`http://numbersapi.com/${n}?json`),
        axios.get(`http://numbersapi.com/${n}?json`),
        axios.get(`http://numbersapi.com/${n}?json`),
        axios.get(`http://numbersapi.com/${n}?json`)
    ]);
  
    $('body').append(`<p>${facts[0].data.text}</p>`)
    $('body').append(`<p>${facts[1].data.text}</p>`)
    $('body').append(`<p>${facts[2].data.text}</p>`)
    $('body').append(`<p>${facts[3].data.text}</p>`)
}
  
fourFacts(8);