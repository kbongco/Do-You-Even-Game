let gamingQuestions = [];
let shuffledGame = [];

async function getQuestions() {
  try {
    const gamingData = await axios.get(`https://opentdb.com/api.php?amount=10&category=15`);
    console.log(gamingData);
    gamingQuestions = gamingData.data.results;
    console.log(gamingQuestions);
  }
  catch (error) {
    alert(`Your questions are in another castle, your current castle and error is : ${error}`)
  }
}

// const shuffledQsArr = () => {
//   let i = gamingQuestions.length;
//   let correct = [gaminQuestions[i].]
// }

const shuffledQ = () => {
  for (let i = shuffledGame.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = shuffledGame[i];
    shuffledGame[i] = shuffledGame[j];
    shuffledGame[j] = temp;

  }
};

getQuestions();
