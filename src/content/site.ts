/*
 * Single source of truth for all homepage copy and imagery.
 * Every statement here is drawn from Dr. Maya Reynolds' profile
 * (bio, approach, modalities, client focus, office, location).
 */

const unsplash = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const practice = {
  name: "Dr. Maya Reynolds, PsyD",
  shortName: "Maya Reynolds, PsyD",
  title: "Licensed Clinical Psychologist",
  city: "Santa Monica",
  region: "CA",
  address: {
    street: "123th Street 45 W",
    locality: "Santa Monica",
    region: "CA",
    postalCode: "90401",
  },
  sessionFormats: "In-person in Santa Monica · Secure telehealth across California",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Our Office", href: "#office" },
  { label: "FAQs", href: "#faq" },
];

export const images = {
  heroMain: {
    src: unsplash("photo-1649567440948-694356636cea"),
    alt: "A woman walking slowly along a calm, misty shoreline",
  },
  heroAccent: {
    src: unsplash("photo-1769638551746-1eafdf3eeffc"),
    alt: "Soft Pacific waves rolling onto the sand",
  },
  aboutIntro: {
    src: unsplash("photo-1748550479740-cbcfd5b07fe3"),
    alt: "Santa Monica Pier at golden hour seen from the beach",
  },
  quoteBanner: {
    src: unsplash("photo-1564347604874-234c128c6ea8"),
    alt: "Santa Monica Bay coastline at dusk with the mountains beyond",
  },
  headshot: {
    src: "/images/dr-maya-reynolds-headshot.jpg",
    alt: "Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica, CA",
  },
  reflection: {
    src: unsplash("photo-1461468611824-46457c0e11fd"),
    alt: "A woman sitting quietly by the ocean, looking out at the water",
  },
  officeSeating: {
    src: "/images/santa-monica-office-seating.jpg",
    alt: "Dr. Reynolds' Santa Monica therapy room with a soft grey sofa, olive tree, and natural light",
  },
  officeWindows: {
    src: "/images/santa-monica-office-windows.jpg",
    alt: "Sunlit seating area with tall windows, sheer curtains, and exposed brick in the Santa Monica office",
  },
  contactAccent: {
    src: unsplash("photo-1742035119988-556889321bb7"),
    alt: "Beach grass swaying against the ocean",
  },
  contactMain: {
    src: unsplash("photo-1515521761069-02158f96cac7"),
    alt: "Warm sunlight filtering through sheer linen curtains",
  },
};

export const hero = {
  eyebrow: "In-person therapy in Santa Monica & online across California",
  headingLead: "Anxiety & trauma therapy in Santa Monica, for when you’re ready to",
  headingAccent: "exhale",
  subtext:
    "Warm, evidence-based therapy with Dr. Maya Reynolds, PsyD, for high-achieving adults navigating anxiety, panic, trauma, and burnout.",
  cta: { label: "Book a consultation", href: "#contact" },
};

export const aboutIntro = {
  heading: "From the outside, you’re holding it all together. Inside, you’re exhausted.",
  lead: "In my Santa Monica practice, you can finally set down what you’ve been carrying.",
  paragraphs: [
    "Many of the people I work with are thoughtful, self-aware, and high-achieving. Others see someone who has it handled, yet constant worry, overthinking, tension in your body, or restless nights tell a different story. For some, earlier experiences still shape relationships, confidence, or a basic sense of safety.",
    "What you’re feeling is real, and it makes sense. Therapy with me is a warm, collaborative space to slow down and understand what’s happening, both emotionally and physically. Together, we’ll pair practical tools with deeper insight so you feel more regulated in your daily life, not just during our sessions.",
  ],
};

export const services = {
  headingLead: "How I can",
  headingAccent: "help",
  items: [
    {
      title: "Anxiety & Panic Therapy",
      image: {
        src: unsplash("photo-1767127221927-0ad39e216381"),
        alt: "A woman sitting on a sunlit windowsill, deep in thought",
      },
      description:
        "For constant worry, racing thoughts, and the feeling that something is about to go wrong. Using CBT and mindfulness-based practices, we’ll quiet the overthinking, calm your nervous system, and build tools you can reach for the moment anxiety or panic shows up.",
    },
    {
      title: "Trauma Therapy & EMDR",
      image: {
        src: unsplash("photo-1781456505405-76d614cf5746"),
        alt: "A woman writing in a journal beside a window overlooking the ocean",
      },
      description:
        "Whether you’ve lived through a single overwhelming event or long-standing patterns rooted in childhood, relationships, or chronic stress, trauma work is carefully paced. We begin with safety and stabilization, then use EMDR and body-oriented techniques to help the past loosen its grip.",
    },
    {
      title: "Burnout & Perfectionism",
      image: {
        src: unsplash("photo-1573496800440-5c9c48a8d0f0"),
        alt: "A professional woman working on a laptop on a grey sofa in soft daylight",
      },
      description:
        "For entrepreneurs, creatives, and professionals who have spent years pushing through stress and now feel disconnected from themselves. Together, we’ll ease the high internal pressure and build more sustainable ways of living and working.",
    },
  ],
};

export const quoteBanner = {
  statement: "You deserve a space where you feel respected, understood, and truly heard.",
  emphasis: "Here, you can finally slow down and breathe.",
};

export const expertise = {
  headingLead: "Areas of",
  headingAccent: "focus",
  columns: [
    ["Anxiety", "Panic attacks", "Overthinking & worry", "Single-incident trauma", "Complex & childhood trauma", "Chronic stress"],
    ["Professional burnout", "Perfectionism", "High internal pressure", "Sleep difficulties", "Confidence & relationships", "…and more."],
  ],
};

export const bio = {
  eyebrow: "Meet Dr. Maya Reynolds, PsyD",
  heading: "Practical tools, real depth, and a pace that feels safe.",
  lead: "I’m a licensed clinical psychologist in Santa Monica, and I understand the realities of living and working in a fast-paced world.",
  paragraphsLeft: [
    "My approach is warm, collaborative, and grounded. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods, including CBT, EMDR, mindfulness, and body-oriented techniques, to address both the emotional and physiological sides of what you’re experiencing.",
  ],
  paragraphsRight: [
    "I believe therapy works best when you feel respected, understood, and actively involved in the process. My goal isn’t only symptom relief. It’s helping you build insight, resilience, and a stronger relationship with yourself over time.",
    "If you’re looking for a therapist who combines practical tools with depth-oriented work, I may be a good fit.",
  ],
  cta: { label: "Explore my approach", href: "#approach" },
};

export const reflection = {
  headingLead: "Healing what you’ve carried",
  headingAccent: "&",
  headingTail: "building a calmer way forward.",
};

export const approach = {
  headingLead: "My",
  headingAccent: "approach",
  headingTail: "includes…",
  items: [
    {
      title: "Cognitive-Behavioral Therapy",
      description:
        "CBT helps you notice the thought patterns that fuel worry, panic, and perfectionism, then gently reshape them. You’ll leave sessions with practical, evidence-based tools for the moments that matter most.",
    },
    {
      title: "EMDR",
      description:
        "Eye Movement Desensitization and Reprocessing (EMDR) helps the brain reprocess painful memories so they feel less overwhelming. It is a well-researched, carefully paced path to healing from both single-incident and complex trauma.",
    },
    {
      title: "Mindfulness-Based Practices",
      description:
        "Mindfulness helps you step out of overthinking and back into the present. Over time, you’ll learn to meet difficult thoughts and feelings with more calm, clarity, and self-compassion.",
    },
    {
      title: "Body-Oriented Techniques",
      description:
        "Anxiety and trauma live in the body as well as the mind. Body-oriented work helps you recognize tension, regulate your nervous system, and feel more settled in your day-to-day life.",
    },
  ],
  cta: { label: "Learn more", href: "#faq" },
};

export const office = {
  eyebrow: "Our office · Santa Monica, CA",
  headingLead: "A calm space for",
  headingAccent: "healing",
  paragraphs: [
    "My Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.",
    "Clients often share that the space itself helps them feel more at ease the moment they arrive. If coming in isn’t possible, secure telehealth sessions are available anywhere in California.",
  ],
  details: [
    { label: "Location", value: "123th Street 45 W, Santa Monica, CA 90401" },
    { label: "Sessions", value: "In-person in Santa Monica, or secure telehealth for clients located in California" },
    { label: "What to expect", value: "A private, unhurried setting built around your safety and comfort" },
  ],
  cta: { label: "Book an in-person visit", href: "#contact" },
};

export const faq = {
  headingLead: "Frequently asked",
  headingAccent: "questions",
  items: [
    {
      q: "Who do you work with?",
      a: "I work with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many are high-achieving professionals, entrepreneurs, and creatives who seem “functional” on the outside while quietly struggling with worry, panic, trauma, or burnout.",
    },
    {
      q: "Do you offer online therapy?",
      a: "Yes. I offer secure telehealth sessions for clients located anywhere in California, as well as in-person therapy at my Santa Monica office. You can choose whichever feels right for you.",
    },
    {
      q: "What is EMDR, and how can it help?",
      a: "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy that helps your brain reprocess distressing memories so they carry less emotional charge. I use it as part of carefully paced trauma work that always starts with safety and stabilization.",
    },
    {
      q: "What are sessions like?",
      a: "Sessions are warm, collaborative, and structured enough to feel supportive, while still leaving room for reflection and depth. We’ll combine practical tools such as CBT and mindfulness with deeper work, so you understand both the emotional and the physical sides of what you’re experiencing.",
    },
    {
      q: "Where is your office?",
      a: "My office is at 123th Street 45 W, Santa Monica, CA 90401. It’s a quiet, private space with natural light and a comfortable, uncluttered feel, designed to help you feel at ease as soon as you arrive.",
    },
    {
      q: "What can I expect from therapy over time?",
      a: "My goal is not just symptom relief. Over time, clients develop greater insight, resilience, and a stronger relationship with themselves, along with more sustainable ways of living and working.",
    },
  ],
};

export const contact = {
  eyebrow: "Schedule a consultation",
  headingLead: "Take the first step toward feeling like",
  headingAccent: "you",
  headingTail: "again.",
  paragraphs: [
    "Reaching out can feel like a big step, especially when you’re used to handling everything on your own. You don’t have to have the right words yet. We’ll start wherever you are and move at a pace that feels safe.",
    "Whether you’d like to meet in person in Santa Monica or online from anywhere in California, I’d be glad to hear from you.",
  ],
  cta: { label: "Book now", href: "#contact" },
};

export const footer = {
  blurb:
    "Getting started should feel simple. Meet in person at my Santa Monica office, or schedule secure telehealth sessions from anywhere in California—whatever works best for you.",
  serving: "Serving Santa Monica, the Westside, and clients throughout California via telehealth.",
};
