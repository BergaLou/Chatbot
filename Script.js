// DOM selectors (variables that point to selected DOM elements) goes here 👇
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameInput = document.getElementById('name-input');
const sendButton = document.getElementById('send-btn');
const nameForm = document.getElementById('name-form');

// Variables to store user data
let userName = '';
let selectedType = '';

// Functions goes here 👇

// A function that will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  let senderImage = '';
  if (sender === 'user') {
    senderImage = 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/User-yellow.png';
  } else if (sender === 'bot') {
    senderImage = 'https://www.vhv.rs/dpng/f/7-78733_cute-robot-clipart-hd-png-download.png';
  }
  chat.innerHTML += `
    <section class="${sender}-msg">
      <img src="${senderImage}" alt="${sender}" />
      <div class="bubble ${sender}-bubble">
        <p>${message}</p>
      </div>
    </section>
  `;
  chat.scrollTop = chat.scrollHeight;
};

// A function to start the conversation
const greetUser = () => {
  showMessage("Hello there, what's your name?", 'bot');
};

// Function to handle form submission
const handleFormSubmit = (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  if (name === '') {
    showMessage("Please enter your name.", 'bot');
    return;
  }
  userName = name;
  showMessage(`Nice to meet you, ${userName}! `, 'bot');
  inputWrapper.innerHTML = '';
  setTimeout(() => displayPetOptions(), 1000);
};

// Function to display pet options
const displayPetOptions = () => {
  showMessage(`So ${userName}, are you ready to adopt a new family member?`, 'bot');
  inputWrapper.innerHTML = `
    <button id='dog'> 🐶 </button>
    <button id='cat'> 🐱 </button>
    <button id='both'> 🐶🐱 </button>
  `;
  document.getElementById('dog').addEventListener('click', () => {
    selectedType = 'Dog';
    showMessage(`You selected ${selectedType}.`, 'user');
    setTimeout(() => furCare(), 1000);
  });
  document.getElementById('cat').addEventListener('click', () => {
    selectedType = 'Cat';
    showMessage(`You selected ${selectedType}.`, 'user');
    setTimeout(() => furCare(), 1000);
  });
  document.getElementById('both').addEventListener('click', () => {
    selectedType = 'Both dog and cat';
    showMessage(`You selected ${selectedType}.`, 'user');
    setTimeout(() => furCare(), 1000);
  });
};

// Function to ask about the pet
const furCare = () => {
  showMessage(`How much fur care do you want for your future ${selectedType}? Long-haired breeds usually require more fur care, short-haired ones less.`, 'bot');
  inputWrapper.innerHTML = `
    <button id='shorthaired'> Shorthaired </button>
    <button id='longhaired'> Longhaired</button>
    <button id='suprise'> Suprise </button>
  `;
  document.getElementById('shorthaired').addEventListener('click', () => {
    selectedType = 'Shorthaired';
    showMessage(`You selected ${selectedType}.`, 'user');
    setTimeout(() => furryAge(), 1000);
  });
  document.getElementById('longhaired').addEventListener('click', () => {
    selectedType = 'Longhaired';
    showMessage(`You selected ${selectedType}.`, 'user');
    setTimeout(() => furryAge(), 1000);
  });
  document.getElementById('suprise').addEventListener('click', () => {
    selectedType = '🎉Suprise!!🎇';
    showMessage(`You selected ${selectedType}.`, 'user');
    setTimeout(() => furryAge(), 1000);
  });
};

const furryAge = () => {
  showMessage(`How old should your ${selectedType} be?`, 'bot');
  inputWrapper.innerHTML = `
    <button id='young'> Young </button>
    <button id='adult'> Adult </button>
    <button id='senior'> Senior </button>
  `;
  document.getElementById('young').addEventListener('click', () => {
    selectedType = 'Young';
    showMessage(`You selected ${selectedType}.`, 'user');
    setTimeout(() => furryGender(), 1000);
  });
  document.getElementById('adult').addEventListener('click', () => {
    selectedType = 'Adult';
    showMessage(`You selected ${selectedType}.`, 'user');
    setTimeout(() => furryGender(), 1000);
  });
  document.getElementById('senior').addEventListener('click', () => {
    selectedType = 'Senior';
    showMessage(`You selected ${selectedType}.`, 'user');
    setTimeout(() => furryGender(), 1000);
  });
};

const furryGender = () => {
  showMessage(`Which gender should your ${selectedType} be?`, 'bot');
  inputWrapper.innerHTML = `
    <button id='female'> ♀️ </button>
    <button id='male'> ♂️ </button>
    <button id='suprise'> Suprise </button>
  `;
  document.getElementById('female').addEventListener('click', () => {
    selectedType = 'Female';
    showMessage(`You selected ${selectedType}.`, 'user');
    setTimeout(() => furrySure(), 1000);
  });
  document.getElementById('male').addEventListener('click', () => {
    selectedType = 'Male';
    showMessage(`You selected ${selectedType}.`, 'user');
    setTimeout(() => furrySure(), 1000);
  });
  document.getElementById('suprise').addEventListener('click', () => {
    selectedType = 'Suprise';
    showMessage(`You selected ${selectedType}.`, 'user');
    setTimeout(() => furrySure(), 1000);
  });
};

// Function to handle user confirmation
const furrySure = () => {
  showMessage(`Are you sure you want to adopt a new family member? Do you understand the responsibility and everything that comes with having a new family member?`, 'bot')
  inputWrapper.innerHTML = `
    <button id='yesButton'>YES</button>
    <button id='noButton'>NO</button>
  `;
  document.getElementById('yesButton').addEventListener('click', () => {
    showMessage('Yes', 'user');
    setTimeout(() => answerUser('YES'), 1000);
  });
  document.getElementById('noButton').addEventListener('click', () => {
    showMessage('No', 'user');
    setTimeout(() => answerUser('NO'), 1000);
  });
};

// Function to handle user confirmation
const answerUser = (userResponse) => {
  if (userResponse === 'YES') {
    showMessage(`Thank you for confirming! Your future pet is going to have a happy home! 🏡`, 'bot');
  } else if (userResponse === 'NO') {
    showMessage('Sorry to hear that. Have a nice day!', 'bot');
  }
  inputWrapper.innerHTML = '';
};

// Event listeners go here 👇
nameForm.addEventListener('submit', handleFormSubmit);

// Here we invoke the first function to get the chatbot to ask the first question when
// the website is loaded. Normally we invoke functions like this: greeting()
// To add a little delay to it, we can wrap it in a setTimeout (a built-in JavaScript function):
// and pass along two arguments:
// 1.) the function we want to delay, and 2.) the delay in milliseconds 
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);