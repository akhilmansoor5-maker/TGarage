export const site = {
  name: "T Garage",
  mark: "Tgarage",
  line: "Washing · Detailing · Protecting",
  since: "2003",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://akhilmansoor5-maker.github.io/TGarage",
  phoneDisplay: "79941 75378",
  phoneTel: "+917994175378",
  whatsapp: "917994175378",
  instagram: "https://www.instagram.com/t.garage._/",
  instagramHandle: "@t.garage._",
  address: {
    street: "Kizhakethala, near Korambayil Hospital",
    locality: "Manjeri",
    region: "Kerala",
    district: "Malappuram",
    country: "IN",
  },
  maps: "https://www.google.com/maps/search/?api=1&query=Kizhakethala+near+Korambayil+Hospital+Manjeri",
  mapsEmbed:
    "https://maps.google.com/maps?q=Kizhakethala%20near%20Korambayil%20Hospital%20Manjeri&t=&z=16&ie=UTF8&iwloc=&output=embed",
} as const;

export const addressLine = `${site.address.street}, ${site.address.locality}, ${site.address.district}, ${site.address.region}`;

export function whatsappLink(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const defaultWhatsApp = whatsappLink(
  "Hi T Garage, I would like to book a car wash / detailing / coating. Please share the next available slot.",
);

export type Faq = { q: string; a: string };

export type Group = "Wash" | "Detailing" | "Coating";

export type Service = {
  slug: string;
  name: string;
  title: string;
  group: Group;
  summary: string;
  description: string;
  lead: string;
  includes: string[];
  image: string;
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "foam-wash",
    name: "Foam wash",
    title: "Foam Car Wash in Manjeri",
    group: "Wash",
    summary: "Exterior foam wash in the covered workshop.",
    description:
      "Foam car wash in Kizhakethala, Manjeri. T Garage foams, rinses and dries the car under cover so road dust comes off without baking water spots into the paint.",
    lead: "A foam wash is the regular visit. Foam lifts the dust, the rinse takes it off, and the car is dried before it sits in the sun.",
    includes: ["Foam and rinse", "Wheels and arches", "Dry-down under cover", "Quick paint check before handover"],
    image: "/images/gen/hero.webp",
    faqs: [
      {
        q: "Is foam wash safe on a coated car?",
        a: "Yes. Tell us if the car already has ceramic, graphene or borophene coating so we wash it as a coated car.",
      },
      {
        q: "How long does a foam wash take?",
        a: "Most cars are done the same visit. Call 79941 75378 and we will give you a time for your car.",
      },
    ],
  },
  {
    slug: "wax-wash",
    name: "Wax wash",
    title: "Wax Wash in Manjeri",
    group: "Wash",
    summary: "Wash finished with wax for a short-term gloss.",
    description:
      "Wax wash in Manjeri at T Garage. The car is washed first, then waxed for a warmer gloss that lasts weeks, not years.",
    lead: "Wax is a finish for this month. After the wash, we apply wax and buff it off so the paint looks dressed without booking a full coating.",
    includes: ["Full exterior wash", "Wax on painted panels", "Buff to a clean gloss"],
    image: "/images/gen/coating.webp",
    faqs: [
      {
        q: "How long does wax last?",
        a: "Usually a few weeks, depending on rain, sun and how often you wash. It is not a ceramic coating.",
      },
    ],
  },
  {
    slug: "deep-cleaning",
    name: "Deep cleaning",
    title: "Deep Car Cleaning in Manjeri",
    group: "Detailing",
    summary: "Shut lines, wheels, arches and the edges a quick wash skips.",
    description:
      "Deep car cleaning in Manjeri. T Garage details the gaps, wheels and arches that a foam wash leaves behind.",
    lead: "Deep cleaning is the slower wash. Panels, badges, door shuts, wheels and sills are cleaned as their own surfaces.",
    includes: ["Exterior wash", "Shut lines and badges", "Wheels, barrels and arches", "Sills and door edges"],
    image: "/images/gen/overhead.webp",
    faqs: [
      {
        q: "Should I deep clean before a coating?",
        a: "Yes. Coating only holds on a surface that has actually been cleaned.",
      },
    ],
  },
  {
    slug: "dry-clean",
    name: "Dry clean",
    title: "Car Interior Dry Clean in Manjeri",
    group: "Detailing",
    summary: "Seats, carpets, mats and cabin trim.",
    description:
      "Car interior dry clean in Manjeri. T Garage cleans seats, carpets, mats and trim so the cabin is usable the same day.",
    lead: "Interior dry clean covers the cabin you sit in: vacuum, upholstery, mats, dash and door trim.",
    includes: ["Vacuum of seats, carpets and boot", "Upholstery and mats", "Dash, console and door trim"],
    image: "/images/gen/interior.webp",
    faqs: [
      {
        q: "Will the seats be wet when I collect the car?",
        a: "They should not be. That is the point of a dry clean in this climate.",
      },
    ],
  },
  {
    slug: "hard-water-spots",
    name: "Hard water spots",
    title: "Hard Water Spot Removal in Manjeri",
    group: "Detailing",
    summary: "Mineral spots that washing will not lift.",
    description:
      "Hard water spot removal in Manjeri. T Garage corrects bonded mineral marks on paint and glass before any coating goes on.",
    lead: "Once minerals bake into the clear coat, more soap will not move them. This is a correction job, not a harder wash.",
    includes: ["Inspection of paint and glass", "Spot correction", "Wash and dry after the work"],
    image: "/images/gen/coating.webp",
    faqs: [
      {
        q: "Can you coat over water spots?",
        a: "No. Spots have to come off first, or the coating locks them in.",
      },
    ],
  },
  {
    slug: "glass-polish",
    name: "Glass polish",
    title: "Car Glass Polish in Manjeri",
    group: "Detailing",
    summary: "Windscreen haze, wiper film and light mineral stain.",
    description:
      "Car glass polish in Manjeri. T Garage clears haze and wiper smear so night driving is cleaner. Glass coating is a separate step after the glass is clear.",
    lead: "Polish restores the glass you already have. Coating helps rain leave a clear screen.",
    includes: ["Clean and inspect the glass", "Polish haze and film", "Wipe-down, ready for coating if booked"],
    image: "/images/gen/glass.webp",
    faqs: [
      {
        q: "Is glass polish the same as glass coating?",
        a: "No. Polish corrects the glass. Coating is a rain-beading layer on glass that is already clear.",
      },
    ],
  },
  {
    slug: "engine-bay",
    name: "Engine bay",
    title: "Engine Bay Cleaning in Manjeri",
    group: "Detailing",
    summary: "Degrease and dress the engine bay.",
    description:
      "Engine bay cleaning in Manjeri. T Garage degreases and dresses the bay without blasting covers and connectors.",
    lead: "We cover what should stay dry, lift the oil film, and dress the bay so you can actually see the engine.",
    includes: ["Cover sensitive parts", "Degrease and rinse", "Dry and dress"],
    image: "/images/gen/engine.webp",
    faqs: [
      {
        q: "Is it safe to wash an engine?",
        a: "Yes, when it is cleaned as an engine bay, not pressure-washed like a floor.",
      },
    ],
  },
  {
    slug: "underbody",
    name: "Underbody",
    title: "Underbody Wash in Manjeri",
    group: "Detailing",
    summary: "Mud out of the arches and underside.",
    description:
      "Underbody wash in Manjeri. T Garage rinses packed mud from the underside and wheel arches.",
    lead: "The body can look clean while the floor pan still holds a mat of wet mud. Underbody is booked as its own job.",
    includes: ["Wheel arches", "Underside rinse", "Lower sills"],
    image: "/images/gen/suv.webp",
    faqs: [
      {
        q: "Is underbody included in a foam wash?",
        a: "No. Foam wash is the body you see. Ask for underbody if you want the underside done.",
      },
    ],
  },
  {
    slug: "ceramic-coating",
    name: "Ceramic coating",
    title: "Ceramic Coating in Manjeri",
    group: "Coating",
    summary: "Paint coating for gloss and easier washing.",
    description:
      "Ceramic coating in Manjeri. T Garage prepares the paint and applies ceramic coating for gloss, water beading and easier washing.",
    lead: "Ceramic coating bonds to prepared paint. The car still needs a gentle wash afterwards — it just stays cleaner for longer.",
    includes: ["Wash and inspection", "Correction where needed", "Ceramic coating", "Aftercare notes"],
    image: "/images/gen/coating.webp",
    faqs: [
      {
        q: "How long does ceramic coating last?",
        a: "It depends on the product and how the car is washed. We tell you the grade before work starts.",
      },
      {
        q: "Does ceramic coating stop stone chips?",
        a: "No. It is a coating, not paint protection film.",
      },
    ],
  },
  {
    slug: "graphene-coating",
    name: "Graphene coating",
    title: "Graphene Coating in Manjeri",
    group: "Coating",
    summary: "Graphene paint coating, booked on its own.",
    description:
      "Graphene coating in Manjeri. T Garage applies graphene as its own paint coating after the same prep as ceramic.",
    lead: "Graphene is on the menu next to ceramic, not as another name for wax. Prep still comes first.",
    includes: ["Paint inspection", "Prep and correction", "Graphene coating", "Wash advice"],
    image: "/images/gen/hands.webp",
    faqs: [
      {
        q: "Is graphene the same as ceramic?",
        a: "It is a different coating. If ceramic is the better match for the car, we will say so.",
      },
    ],
  },
  {
    slug: "borophene-coating",
    name: "Borophene coating",
    title: "Borophene Coating in Manjeri",
    group: "Coating",
    summary: "Top paint coating on the T Garage menu.",
    description:
      "Borophene coating in Manjeri. T Garage books borophene as a dedicated coating day with full paint prep.",
    lead: "Borophene is the top coat we offer on paint. It is still a coating — it is not armour and it is not PPF.",
    includes: ["Inspection", "Wash and correction", "Borophene coating", "Cure time and aftercare"],
    image: "/images/gen/hands.webp",
    faqs: [
      {
        q: "Borophene or borophen?",
        a: "Same booking. The Instagram highlight says Borophen coat. Ask for the top paint coating.",
      },
    ],
  },
  {
    slug: "glass-coating",
    name: "Glass coating",
    title: "Car Glass Coating in Manjeri",
    group: "Coating",
    summary: "Rain-beading layer for a clear windscreen.",
    description:
      "Car glass coating in Manjeri. T Garage coats a clear windscreen so rain beads and the wipers work less.",
    lead: "Glass coating goes on after the screen is clean. If it is hazed, we polish first.",
    includes: ["Glass check", "Polish if needed", "Glass coating"],
    image: "/images/gen/glass.webp",
    faqs: [
      {
        q: "Do I still need wipers?",
        a: "Yes. Coating helps water move. Torn blades will still smear.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function relatedServices(service: Service) {
  return services.filter((item) => item.group === service.group && item.slug !== service.slug).slice(0, 3);
}

export const groups: { key: Group; title: string; text: string; href: string }[] = [
  {
    key: "Wash",
    title: "Wash",
    text: "Foam wash and wax wash in the covered workshop.",
    href: "/services/#wash",
  },
  {
    key: "Detailing",
    title: "Detailing",
    text: "Deep clean, interior, water spots, glass, engine bay and underbody.",
    href: "/services/#detailing",
  },
  {
    key: "Coating",
    title: "Coating",
    text: "Ceramic, graphene, borophene and glass coating.",
    href: "/services/#coating",
  },
];

export const homeFaqs: Faq[] = [
  {
    q: "Where is T Garage?",
    a: "Kizhakethala, near Korambayil Hospital, Manjeri, Malappuram. Call 79941 75378 when you are close and we will guide you in.",
  },
  {
    q: "How do I book?",
    a: "WhatsApp or call 79941 75378. Tell us the car and the job — wash, interior, water spots, or a named coating.",
  },
  {
    q: "Do you do ceramic, graphene and borophene coating?",
    a: "Yes. All three are listed on the Instagram and booked here, along with glass coating.",
  },
];

export type Shot = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export const media = {
  hero: {
    src: "/images/gen/hero.webp",
    width: 1280,
    height: 720,
    alt: "Foam wash on a grey sedan in the covered T Garage bay, Kizhakethala.",
    caption: "Foam wash",
  },
  foam: {
    src: "/images/gen/foam.webp",
    width: 1280,
    height: 720,
    alt: "Snow foam sliding off dark metallic paint.",
    caption: "Foam",
  },
  overhead: {
    src: "/images/gen/overhead.webp",
    width: 1280,
    height: 720,
    alt: "White sedan being rinsed from above in the T Garage wash bay.",
    caption: "Deep clean",
  },
  coating: {
    src: "/images/gen/coating.webp",
    width: 1280,
    height: 720,
    alt: "Water beading on freshly coated dark paint.",
    caption: "Coating",
  },
  hands: {
    src: "/images/gen/hands.webp",
    width: 1280,
    height: 720,
    alt: "Ceramic coating being applied to a dark panel with an applicator.",
    caption: "Paint coating",
  },
  interior: {
    src: "/images/gen/interior.webp",
    width: 1152,
    height: 864,
    alt: "Tan leather cabin after an interior dry clean.",
    caption: "Interior",
  },
  glass: {
    src: "/images/gen/glass.webp",
    width: 1280,
    height: 720,
    alt: "Rain on a windscreen at night after glass work.",
    caption: "Glass",
  },
  engine: {
    src: "/images/gen/engine.webp",
    width: 1152,
    height: 864,
    alt: "Cleaned and dressed engine bay.",
    caption: "Engine bay",
  },
  suv: {
    src: "/images/gen/suv.webp",
    width: 864,
    height: 1152,
    alt: "Glossed black SUV under Kerala trees after a wash.",
    caption: "Finished gloss",
  },
  dusk: {
    src: "/images/gen/dusk.webp",
    width: 1280,
    height: 720,
    alt: "White Innova being dried in a covered Kerala bay at dusk.",
    caption: "The bay at dusk",
  },
  wheel: {
    src: "/images/gen/wheel.webp",
    width: 1280,
    height: 720,
    alt: "Freshly washed alloy wheel with water still on the tyre.",
    caption: "Wheels",
  },
  studio: {
    src: "/images/gen/studio.webp",
    width: 1280,
    height: 720,
    alt: "Two finished cars under cool workshop light.",
    caption: "After coating",
  },
  bay: {
    src: "/images/bay-hero.webp",
    width: 360,
    height: 472,
    alt: "Foam wash on a grey BMW inside the T Garage workshop in Kizhakethala, Manjeri.",
    caption: "From the workshop",
  },
  before: {
    src: "/images/before.webp",
    width: 360,
    height: 640,
    alt: "Dusty black door panel before detailing at T Garage.",
    caption: "As it comes in",
  },
  cabin: {
    src: "/images/interior.webp",
    width: 360,
    height: 640,
    alt: "Cleaned tan leather interior with a T Garage floor mat.",
    caption: "Cabin",
  },
  van: {
    src: "/images/van.webp",
    width: 360,
    height: 640,
    alt: "White Toyota van after a wash at T Garage Manjeri.",
    caption: "After wash",
  },
  gloss: {
    src: "/images/gloss.webp",
    width: 360,
    height: 640,
    alt: "Black Toyota Innova with a finished gloss after detailing.",
    caption: "Innova, finished",
  },
  sign: {
    src: "/images/sign.webp",
    width: 360,
    height: 640,
    alt: "Blue T Garage mark on the workshop wall in Kizhakethala.",
    caption: "The wall",
  },
} as const satisfies Record<string, Shot>;

export const photos: Shot[] = [
  media.hero,
  media.bay,
  media.before,
  media.cabin,
  media.van,
  media.gloss,
  media.sign,
  media.coating,
  media.hands,
  media.interior,
  media.overhead,
  media.suv,
  media.glass,
  media.dusk,
  media.wheel,
  media.foam,
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/contact/", label: "Contact" },
] as const;
