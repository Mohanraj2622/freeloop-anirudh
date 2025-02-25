document.addEventListener("DOMContentLoaded", () => {
  const savedTrack = localStorage.getItem("currentTrack");
  if (savedTrack) {
    const track = JSON.parse(savedTrack);
    playSong(track);
    localStorage.removeItem("currentTrack"); // Remove to prevent replay
  }
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && (event.key === "=" || event.key === "-" || event.key === "0")) {
    event.preventDefault();
  }
});

document.addEventListener("wheel", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
}, { passive: false });

// WebViewString Communication with MIT App Inventor
function updateAppInventorState(state) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString(state);
  }
}

// Function to send a message to MIT App Inventor about Media Session status
function updateAppInventorWithMediaSessionStatus(status) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString("MediaSessionStatus: " + status);
  }
}

// Media Session API Integration
function setupMediaSession() {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler("play", playSong);
    navigator.mediaSession.setActionHandler("pause", pauseSong);
    navigator.mediaSession.setActionHandler("nexttrack", playNextSong);
    navigator.mediaSession.setActionHandler("previoustrack", playPrevSong);

    // Inform App Inventor that the Media Session is enabled
    updateAppInventorWithMediaSessionStatus("Media Session Enabled");
  } else {
    // Inform App Inventor that the Media Session is not supported
    updateAppInventorWithMediaSessionStatus("Media Session Not Supported");
  }
}

// Existing code remains the same
const SONGS = [
  // 1 list
  {
    title: "Chuttamalle",
    artist: "Anirudh",
    url: "Chuttamalle.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Come Back Indian",
    artist: "Anirudh",
    url: "Come Back Indian.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Dheema",
    artist: "Anirudh",
    url: "Dheema-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Aaha-Kalyanam",
    artist: "Anirudh",
    url: "Aaha-Kalyanam-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
   {
    title: "Aathi",
    artist: "Anirudh",
    url: "Aathi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Anbenum",
    artist: "Anirudh",
    url: "Anbenum-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Andha-Kanna-Paathaakaa",
    artist: "Anirudh",
    url: "Andha-Kanna-Paathaakaa-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Arabic-Kuthu---Halamithi-Habibo",
    artist: "Anirudh",
    url: "Arabic-Kuthu---Halamithi-Habibo-MassTamilan.so.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Bad-Eyes-Villain",
    artist: "Anirudh",
    url: "Bad-Eyes-Villain-Theme.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Badass-MassTamilan",
    artist: "Anirudh",
    url: "Badass-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Bae-MassTamilan",
    artist: "Anirudh",
    url: "Bae-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Beast-Mode",
    artist: "Anirudh",
    url: "Beast-Mode-MassTamilan.so.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Boomi-Enna-Suthudhe",
    artist: "Anirudh",
    url: "Boomi-Enna-Suthudhe.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Chellamma",
    artist: "Anirudh",
    url: "Chellamma-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Chumma-Kizhi",
    artist: "Anirudh",
    url: "Chumma-Kizhi-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Dippam-Dappam",
    artist: "Anirudh",
    url: "Dippam-Dappam-MassTamilan.so (1).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Don'u Don'u Don'u (The Don's Romance)",
    artist: "Anirudh",
    url: "Don'u Don'u Don'u (The Don's Romance).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Edakku-Modakku",
    artist: "Anirudh",
    url: "Edakku-Modakku-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Enakenna-Yaarum-Illaye-(Zingaroe-Remix)",
    artist: "Anirudh",
    url: "Enakenna-Yaarum-Illaye-(Zingaroe-Remix)-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ilamai-Thirumbudhe",
    artist: "Anirudh",
    url: "",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Jailer-Drill-Theme-(Instrumental)",
    artist: "Anirudh",
    url: "Jailer-Drill-Theme-(Instrumental)-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Coolie Disco",
    artist: "Anirudh",
    url: "Coolie Disco.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Daavudi",
    artist: "Anirudh",
    url: "Daavudi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Daavuya",
    artist: "Anirudh",
    url: "Daavuya.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Darling-Dambakku",
    artist: "Anirudh",
    url: "Darling-Dambakku.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Dharala-Prabhu-Title-Track",
    artist: "Anirudh",
    url: "Dharala-Prabhu-Title-Track-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Jalabulajangu",
    artist: "Anirudh",
    url: "Jalabulajangu-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Jawan-Title-Track",
    artist: "Anirudh",
    url: "Jawan-Title-Track-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Jolly-O-Gymkhana",
    artist: "Anirudh",
    url: "Jolly-O-Gymkhana-MassTamilan.so.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kaathu-Vaakula-Rendu",
    artist: "Anirudh",
    url: "Kaathu-Vaakula-Rendu-MassTamilan.so.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kaavaalaa",
    artist: "Anirudh",
    url: "Kaavaalaa-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Enna-Solla",
    artist: "Anirudh",
    url: "Enna-Solla.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ethir-Neechal",
    artist: "Anirudh",
    url: "Ethir-Neechal.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Fear Song",
    artist: "Anirudh",
    url: "Fear Song.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Hayyoda",
    artist: "Anirudh",
    url: "Hayyoda-MassTamilan.dev (1).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Idhazhin-Oram",
    artist: "Anirudh",
    url: "Idhazhin-Oram.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Kadhal-Kan-Kattudhe",
    artist: "Anirudh",
    url: "Kadhal-Kan-Kattudhe.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kadhalaada-Kadhal-Aada",
    artist: "Anirudh",
    url: "Kadhalaada-Kadhal-Aada-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kadharalz",
    artist: "Anirudh",
    url: "Kadharalz.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kanave-Kanave",
    artist: "Anirudh",
    url: "Kanave-Kanave-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kattikida",
    artist: "Anirudh",
    url: "Kattikida.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kakki-Sattai-Theme",
    artist: "Anirudh",
    url: "Kakki-Sattai-Theme-Music.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kalyaana-Vayasu",
    artist: "Anirudh",
    url: "Kalyaana-Vayasu-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Kutti-Story",
    artist: "Anirudh",
    url: "Kutti-Story-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Life-of-Pazham",
    artist: "Anirudh",
    url: "Life-of-Pazham-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Maanja",
    artist: "Anirudh",
    url: "Maanja.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Maari Thara Local (Here Comes Maari)",
    artist: "Anirudh",
    url: "Maari Thara Local (Here Comes Maari).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Marana-Mass",
    artist: "Anirudh",
    url: "Marana-Mass-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Master-the-Blaster",
    artist: "Anirudh",
    url: "Master-the-Blaster-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kannana-Kanne",
    artist: "Anirudh",
    url: "Kannana-Kanne.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kannazhaga",
    artist: "Anirudh",
    url: "Kannazhaga.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kannula-Thimiru",
    artist: "Anirudh",
    url: "Kannula-Thimiru-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kaththi-Theme-The-Sword-Of-Destiny",
    artist: "Anirudh",
    url: "Kaththi-Theme-The-Sword-Of-Destiny.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Mayakkama-Kalakkama",
    artist: "Anirudh",
    url: "Mayakkama-Kalakkama-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Meesa-Beauty",
    artist: "Anirudh",
    url: "Meesa-Beauty.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Megham-Karukatha",
    artist: "Anirudh",
    url: "Megham-Karukatha-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Naanum-Rowdy-Dhaan",
    artist: "Anirudh",
    url: "Naanum-Rowdy-Dhaan.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nee-Partha",
    artist: "Anirudh",
    url: "Nee-Partha.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mudhal-Naayagan",
    artist: "Anirudh",
    url: "Mudhal-Naayagan-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Naa-Ready",
    artist: "Anirudh",
    url: "Naa-Ready-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Naan-Pizhai",
    artist: "Anirudh",
    url: "Naan-Pizhai-MassTamilan.so.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Naana-Thaana-Veena-Ponaa",
    artist: "Anirudh",
    url: "Naana-Thaana-Veena-Ponaa-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Neeyum-Naanum",
    artist: "Anirudh",
    url: "Neeyum-Naanum.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nenjame",
    artist: "Anirudh",
    url: "Nenjame-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Open-The-Tasmac",
    artist: "Anirudh",
    url: "Open-The-Tasmac.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oru-Kutti-Katha",
    artist: "Anirudh",
    url: "Oru-Kutti-Katha-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Paalam",
    artist: "Anirudh",
    url: "Paalam.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Never-Give-Up",
    artist: "Anirudh",
    url: "Never-Give-Up-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nijamellam",
    artist: "Anirudh",
    url: "Nijamellam-Maranthupochu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Not-Ramaiya-Vastavaiya",
    artist: "Anirudh",
    url: "Not-Ramaiya-Vastavaiya-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oh-Oh-Uyire-Uyirin",
    artist: "Anirudh",
    url: "Oh-Oh-Uyire-Uyirin.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Paaraa",
    artist: "Anirudh",
    url: "Paaraa.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pakkam-Vanthu",
    artist: "Anirudh",
    url: "Pakkam-Vanthu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pathala-Pathala",
    artist: "Anirudh",
    url: "Pathala-Pathala-MassTamilan.so.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Peela-Peela-Vudathe",
    artist: "Anirudh",
    url: "Peela-Peela-Vudathe-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Petta-Paraak",
    artist: "Anirudh",
    url: "Petta-Paraak-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Paththavaikkum",
    artist: "Anirudh",
    url: "Paththavaikkum.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pattasa",
    artist: "Anirudh",
    url: "Pattasa-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Polakatum-Para-Para",
    artist: "Anirudh",
    url: "Polakatum-Para-Para-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Poo-Nee-Poo-2",
    artist: "Anirudh",
    url: "Poo-Nee-Poo-2.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Porkanda-Singam",
    artist: "Anirudh",
    url: "Porkanda-Singam-MassTamilan.so.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Rendu-Kaadhal",
    artist: "Anirudh",
    url: "Rendu-Kaadhal-MassTamilan.so.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Royapuram-Peter",
    artist: "Anirudh",
    url: "Royapuram-Peter.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Private-Party",
    artist: "Anirudh",
    url: "Private-Party-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Quit-Pannuda",
    artist: "Anirudh",
    url: "Quit-Pannuda-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Rathamaarey",
    artist: "Anirudh",
    url: "Rathamaarey-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Remo-Nee-Kadhalan",
    artist: "Anirudh",
    url: "Remo-Nee-Kadhalan.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Selfie-Pulla",
    artist: "Anirudh",
    url: "Selfie-Pulla.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Senjitaley",
    artist: "Anirudh",
    url: "Senjitaley.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Sirikkadhey",
    artist: "Anirudh",
    url: "Sirikkadhey.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "So-Baby",
    artist: "Anirudh",
    url: "So-Baby-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thaai-Kelavi",
    artist: "Anirudh",
    url: "Thaai-Kelavi-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thala Forever - Whistle for Dhoni",
    artist: "Anirudh",
    url: "Thala Forever - Whistle for Dhoni.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Sodakku-Mela-Sodakku",
    artist: "Anirudh",
    url: "Sodakku-Mela-Sodakku-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Surviva",
    artist: "Anirudh",
    url: "Surviva-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Tamilselvi",
    artist: "Anirudh",
    url: "Tamilselvi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Thalai-Viduthalai",
    artist: "Anirudh",
    url: "Thalai-Viduthalai-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thangame",
    artist: "Anirudh",
    url: "Thangame.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thangamey",
    artist: "Anirudh",
    url: "Thangamey-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thani-Vazhi",
    artist: "Anirudh",
    url: "Thani-Vazhi-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Two-Two-Two-MassTamilan",
    artist: "Anirudh",
    url: "Two-Two-Two-MassTamilan.so.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ullaallaa-MassTamilan",
    artist: "Anirudh",
    url: "Ullaallaa-MassTamilan.org.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thappa Dhaan Theriyum (Maari's Karuthu)",
    artist: "Anirudh",
    url: "Thappa Dhaan Theriyum (Maari's Karuthu).mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Tharam-Maara-Single",
    artist: "Anirudh",
    url: "Tharam-Maara-Single-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Theme-of-3",
    artist: "Anirudh",
    url: "Theme-of-3.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Thittam-Poda-Theriyala",
    artist: "Anirudh",
    url: "Thittam-Poda-Theriyala-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Un-Paarvayil",
    artist: "Anirudh",
    url: "Un-Paarvayil.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Un-Vizhigalil",
    artist: "Anirudh",
    url: "Un-Vizhigalil.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vaathi-Coming",
    artist: "Anirudh",
    url: "Vaathi-Coming-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vaathi-Kabaddi",
    artist: "Anirudh",
    url: "Vaathi-Kabaddi-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vaathi-Raid",
    artist: "Anirudh",
    url: "Vaathi-Raid-MassTamilan.io.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vandha-Edam",
    artist: "Anirudh",
    url: "Vandha-Edam-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Why-this-kolaveri-di",
    artist: "Anirudh",
    url: "Why-this-kolaveri-di.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yennai-Maatrum-Kadhale",
    artist: "Anirudh",
    url: "Yennai-Maatrum-Kadhale.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Varava-Varava",
    artist: "Anirudh",
    url: "Varava-Varava.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Velicha-Poove",
    artist: "Anirudh",
    url: "Velicha-Poove.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vikram-Title-Track",
    artist: "Anirudh",
    url: "Vikram-Title-Track-MassTamilan.so.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Wasted",
    artist: "Anirudh",
    url: "Wasted-MassTamilan.so.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

];

let currentSongIndex = 0;
let isPlaying = false;
let userPaused = false;
let isSearchActive = false;
let searchResults = [];
const audio = new Audio();
const trackList = document.getElementById('trackList');
const searchInput = document.getElementById('search');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const playPauseButton = document.getElementById('playPause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progress = document.getElementById('progress');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Function to send media control events to MIT App Inventor
function sendMediaControlEvent(event) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString(`MediaControl:${event}`);
  }
}

// Function to send metadata updates to MIT App Inventor
function sendMetadataUpdate(song) {
  if (window.AppInventor) {
    const metadata = {
      title: song.title,
      artist: song.artist,
      coverUrl: song.coverUrl || "default-cover.jpg",
    };
    window.AppInventor.setWebViewString(`MetadataUpdate:${JSON.stringify(metadata)}`);
  }
}

const loadSong = (index) => {
  const song = SONGS[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.url;
  progress.value = 0;
  currentTimeDisplay.textContent = "0:00";
  durationDisplay.textContent = "0:00";
  updateMediaSession(song);
  cover.src = song.coverUrl || "default-cover.jpg";
  // Try to extract cover image from MP3 metadata
  fetch(song.url)
    .then(response => response.blob())
    .then(blob => {
      jsmediatags.read(blob, {
        onSuccess: function (tag) {
          const picture = tag.tags.picture;
          if (picture) {
            let base64String = "";
            for (let i = 0; i < picture.data.length; i++) {
              base64String += String.fromCharCode(picture.data[i]);
            }
            const base64 = btoa(base64String);
            cover.src = `data:${picture.format};base64,${base64}`;
          } else {
            cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
          }
        },
        onError: function (error) {
          console.error("Error reading cover art:", error);
          cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
        }
      });
    })
    .catch(error => {
      console.error("Error fetching MP3 file:", error);
      cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
    });
};

// Play the current song
const playSong = () => {
  userPaused = false;
  isPlaying = true;
  audio.play().catch(error => {
    console.error("Playback failed:", error);
  });
  playPauseButton.textContent = '⏸';
  updateAppInventorState(`Playing: ${SONGS[currentSongIndex].title}`)
  sendMediaControlEvent('play');
};

// Pause the current song (only when user explicitly pauses)
const pauseSong = () => {
  userPaused = true;
  isPlaying = false;
  audio.pause();
  playPauseButton.textContent = '▶️';
  updateAppInventorState(`Paused: ${SONGS[currentSongIndex].title}`);
  sendMediaControlEvent('pause');
};

// Toggle play/pause
const togglePlayPause = () => {
  isPlaying ? pauseSong() : playSong();
};

// Play the next song
const playNextSong = () => {
  if (isSearchActive && searchResults.length > 0) {
    currentSongIndex = (currentSongIndex + 1) % searchResults.length;
    loadSong(SONGS.indexOf(searchResults[currentSongIndex]));
  } else {
    currentSongIndex = (currentSongIndex + 1) % SONGS.length;
    loadSong(currentSongIndex);
  }
  playSong();
  sendMediaControlEvent('next');
};

// Play the previous song
const playPrevSong = () => {
  if (isSearchActive && searchResults.length > 0) {
    currentSongIndex = (currentSongIndex - 1 + searchResults.length) % searchResults.length;
    loadSong(SONGS.indexOf(searchResults[currentSongIndex]));
  } else {
    currentSongIndex = (currentSongIndex - 1 + SONGS.length) % SONGS.length;
    loadSong(currentSongIndex);
  }
  playSong();
  sendMediaControlEvent('previous');
};

// Update the progress bar and time display
const updateProgress = () => {
  const { currentTime, duration } = audio;
  progress.value = (currentTime / duration) * 100 || 0;
  currentTimeDisplay.textContent = formatTime(currentTime);
  durationDisplay.textContent = formatTime(duration);
};

// Format time for display
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

// Handle seeking through the progress bar
const handleSeek = (e) => {
  const seekTime = (e.target.value / 100) * audio.duration;
  audio.currentTime = seekTime;
};

// Update WebViewString to prevent App Inventor from stopping
updateAppInventorState("Playing: " + SONGS[currentSongIndex].title + " - " + Math.floor(audio.currentTime) + "s");

// Debounce function to limit the rate of execution
const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

// Filter the song list based on the search input
const filterSongs = debounce(() => {
  const query = searchInput.value.toLowerCase();
  searchResults = SONGS.filter((song) => song.title.toLowerCase().includes(query));
  isSearchActive = query.length > 0;
  renderSongList(searchResults);
}, 300);

const renderSongList = (songs) => {
  trackList.innerHTML = ''; // Clear the existing list
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.classList.add('track');

    // Create an image element for the cover
    const img = document.createElement('img');
    img.src = "default-cover.jpg"; // Set default initially
    img.alt = song.title;
    img.classList.add('track-cover'); // Add CSS class for styling

    // Array of random cover images (URLs or Base64 data)
    const defaultCovers = [
      "anirudh-cover-1.png",
      "anirudh-cover-2.png",
      "anirudh-cover-3.png",
      "anirudh-cover-4.png"
    ];

    // Function to get a random cover image
    function getRandomCover() {
      return defaultCovers[Math.floor(Math.random() * defaultCovers.length)];
    }

    // Set a random cover icon immediately
    img.src = getRandomCover();

    // Create a div for track info
    const trackInfo = document.createElement('div');
    trackInfo.classList.add('track-info');

    // Create a div for the title
    const trackTitle = document.createElement('div');
    trackTitle.classList.add('track-title');
    trackTitle.textContent = song.title;
    trackInfo.appendChild(trackTitle);

    li.appendChild(img);
    li.appendChild(trackInfo);

    li.addEventListener('click', () => {
      if (isSearchActive) {
        currentSongIndex = SONGS.indexOf(song);
      } else {
        currentSongIndex = index;
      }
      loadSong(currentSongIndex);
      playSong();
    });

    trackList.appendChild(li);
  });
};

// Function to update media session metadata and send status to App Inventor
const updateMediaSession = (song) => {
  if ('mediaSession' in navigator) {
    // Default to provided coverUrl or a fallback image
    let artworkUrl = song.coverUrl || "default-cover.jpg";

    // Try extracting embedded cover art from MP3 metadata
    fetch(song.url)
      .then(response => response.blob())
      .then(blob => {
        jsmediatags.read(blob, {
          onSuccess: (tag) => {
            const picture = tag.tags.picture;
            if (picture) {
              let base64String = "";
              for (let i = 0; i < picture.data.length; i++) {
                base64String += String.fromCharCode(picture.data[i]);
              }
              artworkUrl = `data:${picture.format};base64,${btoa(base64String)}`;
            }

            // Update media session with extracted or fallback artwork
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song.title,
              artist: song.artist,
              album: song.album || "Unknown Album",
              artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
            });

            // Send update to App Inventor
            updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title}`);
          },
          onError: (error) => {
            console.error("Error extracting metadata:", error);

            // Use fallback cover if metadata extraction fails
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song.title,
              artist: song.artist,
              album: song.album || "Unknown Album",
              artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
            });

            updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title} (No Cover Found)`);
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching MP3 file:", error);

        // Use fallback cover if fetching fails
        navigator.mediaSession.metadata = new MediaMetadata({
          title: song.title,
          artist: song.artist,
          album: song.album || "Unknown Album",
          artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
        });

        updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title} (Failed to Fetch)`);
      });
  }
};

  // Notification functions
  function showNotification() {
    console.log("Showing notification...");
    // Add your notification UI logic here
  }

  function hideNotification() {
    console.log("Hiding notification...");
    // Add your notification UI logic here
  }

// Ensure playback continues when app is in the background
document.addEventListener("visibilitychange", () => {
  if (document.hidden && isPlaying) {
    showNotification();
  } else {
    hideNotification();
    if (isPlaying) {
      audio.play().catch(error => {
        console.error("Resume after visibility change failed:", error);
      });
    }
  }
});


// Handle system-triggered pauses (e.g., app backgrounded)
audio.addEventListener('pause', (event) => {
  if (!userPaused && isPlaying) {
    // Automatically resume playback if paused by the system (not user)
    setTimeout(() => {
      audio.play().catch(error => {
        console.error("Auto-resume failed:", error);
      });
    }, 100);
  }
});

// Event listeners for audio and controls
audio.addEventListener('ended', playNextSong);
audio.addEventListener('timeupdate', updateProgress);
searchInput.addEventListener('input', () => {
  if (searchInput.value === '') {
    isSearchActive = false;
    searchResults = [];
    renderSongList(SONGS);
  } else {
    filterSongs();
  }
});

playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
progress.addEventListener('input', handleSeek);

// Event listeners for audio and controls
audio.addEventListener('ended', playNextSong);
audio.addEventListener('timeupdate', updateProgress);
searchInput.addEventListener('input', filterSongs);
playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
progress.addEventListener('input', handleSeek);

// Initial setup
loadSong(currentSongIndex);
renderSongList(SONGS);
setupMediaSession();
