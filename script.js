let isEnglish = true;
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
let callHistory = [];

function toggleLanguage() {
  isEnglish = !isEnglish;
  const langSwitch = document.querySelector('.lang-switch');
  langSwitch.value = isEnglish ? 'en' : 'bn';
  const titles = {
    'hero-title': { en: 'Emergency Service Directory', bn: 'জরুরী সেবা' },
    'hero-slogan': { en: 'Government Emergency Services at Your Fingertip - A Project by Government of the People\'s Republic of Bangladesh', bn: 'সরকারি  সকল জরুরি সেবা আপনার আঙ্গুলের ডগায় - গণ-প্রজাতন্ত্রী বাংলাদেশ সরকারের একটি প্রকল্প' },
    'national-emergency-title': { en: 'National Emergency', bn: 'জাতীয় জরুরী সেবা' },
    'national-emergency-subtitle': { en: 'National Emergency Number', bn: 'জাতীয় জরুরী নম্বর' },
    'police-title': { en: 'Police', bn: 'পুলিশ' },
    'police-subtitle': { en: 'Police Helpline Number', bn: 'পুলিশ হেল্পলাইন নম্বর' },
    'fire-title': { en: 'Fire Service', bn: 'দমকল ' },
    'fire-subtitle': { en: 'Fire Service Number', bn: 'অগ্নিনির্বাপণ সেবা নম্বর' },
    'ambulance-title': { en: 'Ambulance', bn: 'অ্যাম্বুলেন্স' },
    'ambulance-subtitle': { en: 'Ambulance Service', bn: 'অ্যাম্বুলেন্স সেবা' },
    'women-child-title': { en: 'Women & Child', bn: 'নারী ও শিশু সাহায্য' },
    'women-child-subtitle': { en: 'Women & Child Helpline', bn: 'নারী ও শিশু হেল্পলাইন' },
    'anti-corruption-title': { en: 'Anti-Corruption', bn: 'দু দ ক' },
    'anti-corruption-subtitle': { en: 'Anti-Corruption Helpline', bn: 'দুর্নীতি প্রতিরোধ হেল্পলাইন' },
    'electricity-title': { en: 'Electricity', bn: 'বিদ্যুৎ বিভ্রাট' },
    'electricity-subtitle': { en: 'Electricity Helpline Outage', bn: 'বিদ্যুৎ আউটেজ হেল্পলাইন' },
    'brac-title': { en: 'Brac', bn: 'ব্র্যাক' },
    'brac-subtitle': { en: 'Brac Helpline', bn: 'ব্র্যাক হেল্পলাইন' },
    'railway-title': { en: 'Bangladesh Railway', bn: 'বাংলাদেশ রেলওয়ে' },
    'railway-subtitle': { en: 'Bangladesh Railway Helpline', bn: 'বাংলাদেশ রেলওয়ে হেল্পলাইন' }
  };

  for (let id in titles) {
    document.getElementById(id).textContent = titles[id][isEnglish ? 'en' : 'bn'];
  }
}

function updateHeartCount(element) {
  heartCount++;
  document.getElementById('heart-count').textContent = heartCount;
}

function copyNumber(number) {
  navigator.clipboard.writeText(number).then(() => {
    copyCount++;
    document.getElementById('copy-count').textContent = copyCount;
    alert('Number copied to clipboard: ' + number);
  });
}

function makeCall(serviceName, number) {
  if (coinCount < 20) {
    alert('Insufficient coins! You need at least 20 coins to make a call.');
    return;
  }
  coinCount -= 20;
  document.getElementById('coin-count').textContent = coinCount;
  alert(`Calling ${serviceName}: ${number}`);
  const now = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  callHistory.push({ serviceName, number, time: now });
  updateCallHistory();
}

function updateCallHistory() {
  const historyList = document.getElementById('call-history');
  historyList.innerHTML = '';
  callHistory.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = `${entry.serviceName}: ${entry.number} - ${entry.time}`;
    historyList.appendChild(li);
  });
}

function clearHistory() {
  callHistory = [];
  updateCallHistory();
}

document.getElementById('heart-count').textContent = heartCount;
document.getElementById('coin-count').textContent = coinCount;
document.getElementById('copy-count').textContent = copyCount;

// Set initial language
document.querySelector('.lang-switch').value = 'en';