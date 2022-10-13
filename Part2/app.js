let url = 'https://deckofcardsapi.com/api/deck';


// async function getCard() {
//     let res = await axios.get(`${url}/new/draw/`);
//     console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`);
//   }
  
// getCard();


// async function getAnotherCard() {
//     let res1 = await axios.get(`${url}/new/draw/`);
//     let firstCard = res1.data.cards[0]
//     let deckId = res1.data.deck_id;
//     let res2 = await axios.get(`${url}/${deckId}/draw/`);
//     let secondCard = res2.data.cards[0]
//     console.log(`${firstCard.value} of ${firstCard.suit}`)
//     console.log(`${secondCard.value} of ${secondCard.suit}`)

// };

// getAnotherCard();


async function drawCard() {
    let $btn = $('#button');
    let $cardArea = $('#card-area');

    let res = await axios.get(`${url}/new/shuffle/`);
    let deckInfo = res.data

    $btn.on('click', async function() {
        let res = await axios.get(`${url}/${deckInfo.deck_id}/draw/`);
        let cardInfo = res.data
        let cardSrc = cardInfo.cards[0].image;
        $cardArea.append($('<img>', {
            src: cardSrc
            })
        );
        
        if (cardInfo.remaining === 0) $btn.remove();
    });
}

drawCard();














// async function setup() {
//     let $btn = $('button');
//     let $cardArea = $('#card-area');

//     let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
//     $btn.show().on('click', async function() {
//       let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
//       let cardSrc = cardData.cards[0].image;
//       let angle = Math.random() * 90 - 45;
//       let randomX = Math.random() * 40 - 20;
//       let randomY = Math.random() * 40 - 20;
//       $cardArea.append(
//         $('<img>', {
//           src: cardSrc,
//           css: {
//             transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
//           }
//         })
//       );
//       if (cardData.remaining === 0) $btn.remove();
//     });
//   }
//   setup();

