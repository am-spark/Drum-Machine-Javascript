const BANKS = {
  'TR-707': {
    gain: 1.2,
    pads: [
      {
        id: 'pad-Q',
        keyTrigger: 'Q',
        name: 'Kick',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR707.zip/Roland%20TR707%2FBd0.wav',
      },
      {
        id: 'pad-W',
        keyTrigger: 'W',
        name: 'Snare',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR707.zip/Roland%20TR707%2FSd0.wav',
      },
      {
        id: 'pad-E',
        keyTrigger: 'E',
        name: 'Rimshot',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR707.zip/Roland%20TR707%2FRim.wav',
      },
      {
        id: 'pad-A',
        keyTrigger: 'A',
        name: 'Handclap',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR707.zip/Roland%20TR707%2FHcp.wav',
      },
      {
        id: 'pad-S',
        keyTrigger: 'S',
        name: 'Closed-HH',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR707.zip/Roland%20TR707%2FHH_c.wav',
      },
      {
        id: 'pad-D',
        keyTrigger: 'D',
        name: 'Open-HH',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR707.zip/Roland%20TR707%2FHH_o.wav',
      },
      {
        id: 'pad-Z',
        keyTrigger: 'Z',
        name: 'Cowbell',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR707.zip/Roland%20TR707%2FCow.wav',
      },
      {
        id: 'pad-X',
        keyTrigger: 'X',
        name: 'Ride',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR707.zip/Roland%20TR707%2FRid.wav',
      },
      {
        id: 'pad-C',
        keyTrigger: 'C',
        name: 'Tambourin',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR707.zip/Roland%20TR707%2FTam.wav',
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
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR808%20hifi%20set.zip/Roland%20TR808%20hifi%20set%2FBD1010.WAV',
      },
      {
        id: 'pad-W',
        keyTrigger: 'W',
        name: 'Snare',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR808%20hifi%20set.zip/Roland%20TR808%20hifi%20set%2FSD2510.WAV',
      },
      {
        id: 'pad-E',
        keyTrigger: 'E',
        name: 'Rimshot',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR808%20hifi%20set.zip/Roland%20TR808%20hifi%20set%2FRS.WAV',
      },
      {
        id: 'pad-A',
        keyTrigger: 'A',
        name: 'Handclap',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR808%20hifi%20set.zip/Roland%20TR808%20hifi%20set%2FCP.WAV',
      },
      {
        id: 'pad-S',
        keyTrigger: 'S',
        name: 'Closed-HH',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR808%20hifi%20set.zip/Roland%20TR808%20hifi%20set%2FCH.WAV',
      },
      {
        id: 'pad-D',
        keyTrigger: 'D',
        name: 'Open-HH',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR808%20hifi%20set.zip/Roland%20TR808%20hifi%20set%2FOH10.WAV',
      },
      {
        id: 'pad-Z',
        keyTrigger: 'Z',
        name: 'Cowbell',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR808%20hifi%20set.zip/Roland%20TR808%20hifi%20set%2FCB.WAV',
      },
      {
        id: 'pad-X',
        keyTrigger: 'X',
        name: 'Ride',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR808%20hifi%20set.zip/Roland%20TR808%20hifi%20set%2FCY1010.WAV',
      },
      {
        id: 'pad-C',
        keyTrigger: 'C',
        name: 'Clave',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR808%20hifi%20set.zip/Roland%20TR808%20hifi%20set%2FCL.WAV',
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
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR-909.zip/Roland%20TR-909%2FSet1%2FBT0A0D3.WAV',
      },
      {
        id: 'pad-W',
        keyTrigger: 'W',
        name: 'Snare',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR-909.zip/Roland%20TR-909%2FSet1%2FST0T0S7.WAV',
      },
      {
        id: 'pad-E',
        keyTrigger: 'E',
        name: 'Rimshot',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR-909.zip/Roland%20TR-909%2FSet1%2FRIM63.WAV',
      },
      {
        id: 'pad-A',
        keyTrigger: 'A',
        name: 'Handclap',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR-909.zip/Roland%20TR-909%2FSet1%2FHANDCLP1.WAV',
      },
      {
        id: 'pad-S',
        keyTrigger: 'S',
        name: 'Closed-HH',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR-909.zip/Roland%20TR-909%2FSet1%2FHHCD2.WAV',
      },
      {
        id: 'pad-D',
        keyTrigger: 'D',
        name: 'Open-HH',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR-909.zip/Roland%20TR-909%2FSet1%2FHHOD6.WAV',
      },
      {
        id: 'pad-Z',
        keyTrigger: 'Z',
        name: 'Kick-2',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR-909.zip/Roland%20TR-909%2FSet1%2FBT3AADA.WAV',
      },
      {
        id: 'pad-X',
        keyTrigger: 'X',
        name: 'Ride',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR-909.zip/Roland%20TR-909%2FSet1%2FRIDED0.WAV',
      },
      {
        id: 'pad-C',
        keyTrigger: 'C',
        name: 'Crash',
        src: 'https://archive.org/download/drum-machines-collection/Roland%20TR-909.zip/Roland%20TR-909%2FSet1%2FCSHD2.WAV',
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
