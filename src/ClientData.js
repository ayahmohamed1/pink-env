// ─────────────────────────────────────────────────────────────────────────
// ClientData.js
//
// Every piece of content that changes from one client's gift to the next
// lives in this single file. To launch a new client, duplicate this file
// (or just edit the values below) — no component code needs to change.
//
// Image/audio/video paths point at /src/assets/... by default. Drop the
// client's real files into src/assets and update the paths, or swap in
// hosted URLs (e.g. from Cloudinary, S3, etc).
// ─────────────────────────────────────────────────────────────────────────

const ClientData = {
  // Shown in the browser tab
  siteTitle: "Our Little World",

  // ── Page 1: Envelope ──────────────────────────────────────────────────
  envelope: {
    eyebrow: "Open Me",
    heading: "A special message for",
    recipientName: "My Love",
    buttonLabel: "open the envelope",
    // Optional: point this at your own envelope illustration/photo.
    // Leave as null to use the built-in CSS envelope.
    customImageSrc: null,
  },

  // ── Intro letter shown right after the envelope opens ──────────────────
  greeting: {
    salutation: "Hello My Love,",
    lines: [
      "This is a little corner of the internet just for you...",
      "A small reminder of how special you are, how much I love you, and how excited I am for everything that's still to come.",
    ],
    cta: "So, let's begin...",
  },

  // ── Page 2: Two Photos ──────────────────────────────────────────────────
  twoPhotos: {
    heading: "Our First Photos",
    caption: "You & Me",
    photos: [
      { src: "/src/assets/photo-first-1.jpg", alt: "Our first photo together, at the beach" },
      { src: "/src/assets/photo-first-2.jpg", alt: "You, laughing, on our first outing" },
    ],
  },

  // ── Page 3: Message / Letter ────────────────────────────────────────────
  message: {
    heading: "A Letter For You",
    salutation: "My Dearest,",
    paragraphs: [
      "From the very first moment I saw you, I knew my life was about to change in the best possible way.",
      "Every day with you feels like a page from my favorite story — one I never want to put down.",
      "Thank you for your laughter, your patience, and for loving me exactly as I am.",
    ],
    signature: "Forever yours",
  },

  // ── Page 4: Song ─────────────────────────────────────────────────────
  song: {
    heading: "A Song For You",
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    coverArt: "/src/assets/song-cover.jpg",
    audioSrc: "/src/assets/our-song.mp3",
    footerLine: "Because every song reminds me of you...",
  },

  // ── Page 5: Four Photos ─────────────────────────────────────────────────
  fourPhotos: {
    heading: "Our Little World",
    caption: "Together is my favorite place",
    photos: [
      { src: "/src/assets/photo-1.jpg", alt: "A quiet sunset over the trees" },
      { src: "/src/assets/photo-2.jpg", alt: "Breakfast for two" },
      { src: "/src/assets/photo-3.jpg", alt: "Us, silhouetted against the sky" },
      { src: "/src/assets/photo-4.jpg", alt: "Sunset over the water" },
    ],
  },

  // ── Page 6: Video ───────────────────────────────────────────────────────
  video: {
    heading: "One More Thing",
    caption: "A little video, just for you",
    videoSrc: "/src/assets/our-video.mp4",
    poster: "/src/assets/video-poster.jpg",
  },

  // ── Shared closing note (optional, shown at the very end) ──────────────
  closing: {
    heading: "I Love You",
    message: "Thank you for being you. Here's to our little world, and everything still to come.",
    signOff: "— Always yours",
  },
};

export default ClientData;
