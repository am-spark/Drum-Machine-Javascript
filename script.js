const BANKS = {
  'TR-707': {
    gain: 1.2,
    pads: [
      {
        id: 'pad-Q',
        keyTrigger: 'Q',
        name: 'Kick',
        src: './assets/samples/tr707/kick.wav',
      },
      {
        id: 'pad-W',
        keyTrigger: 'W',
        name: 'Snare',
        src: './assets/samples/tr707/snare.wav',
      },
      {
        id: 'pad-E',
        keyTrigger: 'E',
        name: 'Rimshot',
        src: './assets/samples/tr707/rimshot.wav',
      },
      {
        id: 'pad-A',
        keyTrigger: 'A',
        name: 'Handclap',
        src: './assets/samples/tr707/handclap.wav',
      },
      {
        id: 'pad-S',
        keyTrigger: 'S',
        name: 'Closed-HH',
        src: './assets/samples/tr707/closed-hh.wav',
      },
      {
        id: 'pad-D',
        keyTrigger: 'D',
        name: 'Open-HH',
        src: './assets/samples/tr707/open-hh.wav',
      },
      {
        id: 'pad-Z',
        keyTrigger: 'Z',
        name: 'Cowbell',
        src: './assets/samples/tr707/cowbell.wav',
      },
      {
        id: 'pad-X',
        keyTrigger: 'X',
        name: 'Ride',
        src: './assets/samples/tr707/ride.wav',
      },
      {
        id: 'pad-C',
        keyTrigger: 'C',
        name: 'Tambourin',
        src: './assets/samples/tr707/tambourin.wav',
      },
    ],
  },
  'TR-808': {
    gain: 1.8,
    pads: [
      {
        id: 'pad-Q',
        keyTrigger: 'Q',
        name: 'Kick',
        src: './assets/samples/tr808/kick.wav',
      },
      {
        id: 'pad-W',
        keyTrigger: 'W',
        name: 'Snare',
        src: './assets/samples/tr808/snare.wav',
      },
      {
        id: 'pad-E',
        keyTrigger: 'E',
        name: 'Rimshot',
        src: './assets/samples/tr808/rimshot.wav',
      },
      {
        id: 'pad-A',
        keyTrigger: 'A',
        name: 'Handclap',
        src: './assets/samples/tr808/handclap.wav',
      },
      {
        id: 'pad-S',
        keyTrigger: 'S',
        name: 'Closed-HH',
        src: './assets/samples/tr808/closed-hh.wav',
      },
      {
        id: 'pad-D',
        keyTrigger: 'D',
        name: 'Open-HH',
        src: './assets/samples/tr808/open-hh.wav',
      },
      {
        id: 'pad-Z',
        keyTrigger: 'Z',
        name: 'Cowbell',
        src: './assets/samples/tr808/cowbell.wav',
      },
      {
        id: 'pad-X',
        keyTrigger: 'X',
        name: 'Ride',
        src: './assets/samples/tr808/ride.wav',
      },
      {
        id: 'pad-C',
        keyTrigger: 'C',
        name: 'Clave',
        src: './assets/samples/tr808/clave.wav',
      },
    ],
  },
  'TR-909': {
    gain: 0.9,
    pads: [
      {
        id: 'pad-Q',
        keyTrigger: 'Q',
        name: 'Kick',
        src: './assets/samples/tr909/kick.wav',
      },
      {
        id: 'pad-W',
        keyTrigger: 'W',
        name: 'Snare',
        src: './assets/samples/tr909/snare.wav',
      },
      {
        id: 'pad-E',
        keyTrigger: 'E',
        name: 'Rimshot',
        src: './assets/samples/tr909/rimshot.wav',
      },
      {
        id: 'pad-A',
        keyTrigger: 'A',
        name: 'Handclap',
        src: './assets/samples/tr909/handclap.wav',
      },
      {
        id: 'pad-S',
        keyTrigger: 'S',
        name: 'Closed-HH',
        src: './assets/samples/tr909/closed-hh.wav',
      },
      {
        id: 'pad-D',
        keyTrigger: 'D',
        name: 'Open-HH',
        src: './assets/samples/tr909/open-hh.wav',
      },
      {
        id: 'pad-Z',
        keyTrigger: 'Z',
        name: 'Kick-2',
        src: './assets/samples/tr909/kick-2.wav',
      },
      {
        id: 'pad-X',
        keyTrigger: 'X',
        name: 'Ride',
        src: './assets/samples/tr909/ride.wav',
      },
      {
        id: 'pad-C',
        keyTrigger: 'C',
        name: 'Crash',
        src: './assets/samples/tr909/crash.wav',
      },
    ],
  },
};

const KEY_LAYOUTS = {
  QWERTY: {
    Q: 'Q',
    W: 'W',
    E: 'E',
    A: 'A',
    S: 'S',
    D: 'D',
    Z: 'Z',
    X: 'X',
    C: 'C',
  },
  AZERTY: {
    Q: 'A',
    W: 'Z',
    E: 'E',
    A: 'Q',
    S: 'S',
    D: 'D',
    Z: 'W',
    X: 'X',
    C: 'C',
  },
};

let state = {
  power: false,
  display: '',
  currentPadBankId: 'TR-707',
  sliderVal: 0.3,
  keyLayout: 'QWERTY',
};

const powerBtn = document.getElementById('pushBtn');
const display = document.getElementById('display');
const kits = document.querySelectorAll('input[name="kits"]');
const kit707 = document.getElementById('TR-707');
const keyboardSwitch = document.getElementById('keyboard-switch');
const switchContainer = document.querySelector('.keyboard-switch-container');

const switchVisibility = () => {
  const shouldHide = window.innerWidth < 1025;
  switchContainer.hidden = shouldHide ? true : false;
};

switchVisibility();

const audioCtx = new AudioContext();
const audioSources = new Map(); // pad.id -> { source, gainNode }

document.addEventListener(
  'pointerdown',
  () => {
    if (audioCtx.state === 'suspended') audioCtx.resume();
  },
  { once: true }
);

const updatePadLabels = () => {
  const mapping = KEY_LAYOUTS[state.keyLayout];

  pads.forEach((pad) => {
    const physicalKey = pad.id.replace('pad-', '');
    const displayLetter = mapping[physicalKey];

    pad.querySelector('.pad-label').textContent = displayLetter;
  });
};

const setDisplay = (text) => {
  state.display = text;
  display.textContent = text;
};

let displayTimer = null;

const powerOn = () => {
  kits.forEach((i) => (i.disabled = false));
  loadKit(kit707);

  clearTimeout(displayTimer);
  displayTimer = setTimeout(() => {
    setDisplay('Power On');
    displayTimer = setTimeout(
      () => setDisplay(`Kit : ${state.currentPadBankId}`),
      1500
    );
  }, 500);
};

const powerOff = () => {
  kits.forEach((i) => {
    i.checked = false;
    i.removeAttribute('checked');
    i.disabled = true;
    i.nextElementSibling.classList.replace('is-on', 'is-off');
  });

  state.currentPadBankId = '';

  clearTimeout(displayTimer);
  displayTimer = setTimeout(() => {
    setDisplay('Power Off');
    displayTimer = setTimeout(() => setDisplay(''), 800);
  }, 200);
};

const powerControl = () => {
  state.power = !state.power;
  powerBtn.classList.toggle('is-off', !state.power);
  powerBtn.classList.toggle('is-on', state.power);
  powerBtn.setAttribute('aria-pressed', state.power);

  state.power ? powerOn() : powerOff();
};

const padBank = document.getElementById('pad-bank');
const pads = padBank.querySelectorAll('.drum-pad');

const playSound = (pad) => {
  if (!state.power) return;

  const audio = pad.querySelector('audio');
  audio.currentTime = 0;

  if (!audioSources.has(pad.id)) {
    const source = audioCtx.createMediaElementSource(audio);
    const gainNode = audioCtx.createGain();
    source.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    audioSources.set(pad.id, gainNode);
  }

  const bankGain = BANKS[state.currentPadBankId].gain;
  audioSources.get(pad.id).gain.value = state.sliderVal * bankGain;

  audio.play().catch((err) => console.error('Erreur lecture audio:', err));

  const padData = BANKS[state.currentPadBankId].pads.find(
    (p) => p.id === pad.id
  );

  clearTimeout(displayTimer);
  setDisplay(padData.name);
  displayTimer = setTimeout(() => {
    setDisplay(`Kit : ${state.currentPadBankId}`);
  }, 2000);
};

const loadKit = (input) => {
  if (!state.power) return;

  audioSources.forEach((gainNode) => {
    gainNode.disconnect();
  });
  audioSources.clear();

  kits.forEach((i) =>
    i.nextElementSibling.classList.replace('is-on', 'is-off')
  );
  input.nextElementSibling.classList.replace('is-off', 'is-on');
  input.checked = true;
  input.setAttribute('checked', '');

  BANKS[input.id].pads.forEach(({ id, name, src }) => {
    const pad = document.getElementById(id);
    const audio = pad.querySelector('audio');

    audio.crossOrigin = 'anonymous';
    audio.src = src;
    audio.load();

    pad.setAttribute('aria-label', `Pad ${id.replace('pad-', '')} - ${name}`);
  });

  state.currentPadBankId = input.id;

  clearTimeout(displayTimer);
  setDisplay('');
  displayTimer = setTimeout(() => setDisplay(`Kit : ${input.id}`), 100);
};

const volume = document.getElementById('volume-control');

const adjustVolume = (val) => {
  state.sliderVal = val;
  if (!state.power) return;

  clearTimeout(displayTimer);
  setDisplay(`Volume : ${Math.round(val * 100)}`);
  displayTimer = setTimeout(() => {
    setDisplay(`Kit : ${state.currentPadBankId}`);
  }, 2000);

  const bankGain = BANKS[state.currentPadBankId].gain;
  audioSources.forEach((gainNode) => {
    gainNode.gain.value = val * bankGain;
  });
};

const savedVolume = parseFloat(localStorage.getItem('sliderVal') ?? 0.3);
volume.value = savedVolume * 100;
adjustVolume(savedVolume);

volume.addEventListener('input', (e) => {
  const val = parseFloat(e.target.value) / 100;
  localStorage.setItem('sliderVal', val);
  adjustVolume(val);
});

const savedLayout = localStorage.getItem('keyLayout') ?? 'QWERTY';
state.keyLayout = savedLayout;
keyboardSwitch.checked = savedLayout === 'AZERTY';
updatePadLabels();

keyboardSwitch.addEventListener('change', (e) => {
  state.keyLayout = e.target.checked ? 'AZERTY' : 'QWERTY';
  localStorage.setItem('keyLayout', state.keyLayout);
  updatePadLabels();
});

kits.forEach((input) => {
  input.addEventListener('change', () => loadKit(input));
});

pads.forEach((pad) => {
  pad.addEventListener('pointerdown', () => {
    playSound(pad);
  });
});

document.addEventListener('keydown', (e) => {
  if (!state.power) return;

  const pressedChar = e.key.toUpperCase();

  const mapping = KEY_LAYOUTS[state.keyLayout];
  const physicalKey = Object.keys(mapping).find(
    (k) => mapping[k] === pressedChar
  );
  if (!physicalKey) return;

  const padData = BANKS[state.currentPadBankId].pads.find(
    (p) => p.keyTrigger === physicalKey
  );
  if (!padData) return;

  const pad = document.getElementById(padData.id);
  pad.classList.add('is-active');
  setTimeout(() => pad.classList.remove('is-active'), 100);

  playSound(pad);
});

powerBtn.addEventListener('click', powerControl);

window.addEventListener('resize', switchVisibility);
