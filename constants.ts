import { Palette, TrendingUp, Layout, Monitor, Instagram, FileText, Video, CreditCard, Printer, Share2 } from "lucide-react";
import { Service, PortfolioItem, Testimonial, Stat, LocalizedString, FAQItem, BlogPost } from "./types";

export const BRAND_NAME = "Rolex Ads";
export const WHATSAPP_NUMBER = "919392556976";

export const TRANSLATIONS = {
  en: {
    nav: {
      services: "Services",
      portfolio: "Portfolio",
      whyUs: "Why Us",
      testimonials: "Reviews",
      blog: "Blog",
      cta: "Get Quote"
    },
    hero: {
      tagline: "", // Removed as per design
      headline: "Are you looking for good posters for social media?",
      subheadline: "Premium design services tailored for ambitious brands. We craft visuals that don't just look good—they convert.",
      check1: "24-48hr Turnaround",
      check2: "Unlimited Revisions",
      check3: "Source Files Included",
      ctaPrimary: "Get a Free Design Consultation",
      ctaSecondary: "Chat on WhatsApp",
      formPlaceholder: "Enter your email or phone...",
      formButton: "Get Free Quote",
      cardLabel: "CURRENTLY WORKING ON",
      cardTitle: "Rebranding Campaign",
      cardTier: "Elite Tier",
      cardStatus: "ACCEPTING NEW CLIENTS",
      validationEmpty: "Please enter your contact details.",
      validationInvalid: "Please enter a valid email or 10-digit phone number."
    },
    services: {
      title: "Our Digital Services",
      cta: "Get a quote"
    },
    portfolio: {
      trustedBy: "Trusted By Businesses in AP",
      title: "Our Recent Work",
      subtitle: "See how we help businesses in Singarayakonda and Ongole stand out.",
      clientLabel: "Client",
      modalButton: "I want this for my brand"
    },
    testimonials: {
      title: "Local Client Reviews"
    },
    contact: {
      title: "Let's Grow Your Business",
      subtitle: "Visit us at TP Nagar, Singarayakonda or contact us online.",
      nameLabel: "Your Name",
      contactLabel: "Phone Number",
      serviceLabel: "Select Service",
      detailsLabel: "Tell us about your project...",
      submit: "Get Free Consultation",
      successTitle: "Great!",
      successMessage: "We're redirecting you to WhatsApp to finalize your request. If it didn't open, click the button below.",
      successChat: "Open WhatsApp",
      contactInfo: "Contact Info",
      quoteText: "Rolex Ads transformed our local presence in Ongole."
    },
    footer: {
      tagline: "WE WILL HELP YOU BUILD YOUR BRAND",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved."
    },
    blog: {
        title: "Latest Insights",
        readMore: "Read More"
    },
    faq: {
        title: "Frequently Asked Questions",
        subtitle: "Everything you need to know about our digital marketing services."
    },
    serviceArea: {
        title: "Our Creative Arsenal",
        subtitle: "We use industry-standard tools to deliver high-quality, editable source files for every project.",
        locations: "" // Unused in new design
    }
  },
  te: {
    nav: {
      services: "సేవలు",
      portfolio: "పోర్ట్‌ఫోలియో",
      whyUs: "మా ప్రత్యేకత",
      testimonials: "రివ్యూస్",
      blog: "బ్లాగ్",
      cta: "కొటేషన్ పొందండి"
    },
    hero: {
      tagline: "",
      headline: "సోషల్ మీడియా కోసం మంచి పోస్టర్ల కోసం చూస్తున్నారా?",
      subheadline: "బ్రాండ్ల కోసం ప్రీమియం డిజైన్ సేవలు. చూడటానికి మాత్రమే కాకుండా, మీ వ్యాపారాన్ని పెంచే విజువల్స్ మేము సృష్టిస్తాము.",
      check1: "24-48 గంటల్లో డెలివరీ",
      check2: "అపరిమిత సవరణలు",
      check3: "సోర్స్ ఫైల్స్ ఉచితం",
      ctaPrimary: "ఉచిత డిజైన్ సలహా పొందండి",
      ctaSecondary: "వాట్సాప్‌లో చాట్ చేయండి",
      formPlaceholder: "మీ ఇమెయిల్ లేదా ఫోన్ నంబర్...",
      formButton: "ఉచిత కొటేషన్ పొందండి",
      cardLabel: "ప్రస్తుత ప్రాజెక్ట్",
      cardTitle: "రీబ్రాండింగ్ క్యాంపెయిన్",
      cardTier: "ఎలైట్ టైర్",
      cardStatus: "కొత్త క్లయింట్లు స్వాగతం",
      validationEmpty: "దయచేసి మీ వివరాలను నమోదు చేయండి.",
      validationInvalid: "దయచేసి సరైన ఇమెయిల్ లేదా ఫోన్ నంబర్ నమోదు చేయండి."
    },
    services: {
      title: "మా డిజిటల్ సేవలు",
      cta: "కొటేషన్ పొందండి"
    },
    portfolio: {
      trustedBy: "ఆంధ్రప్రదేశ్‌లోని ప్రముఖ వ్యాపారాల నమ్మకం",
      title: "మా ఇటీవలి వర్క్",
      subtitle: "సింగరాయకొండ మరియు ఒంగోలులోని వ్యాపారాలకు మేము ఎలా సహాయపడ్డామో చూడండి.",
      clientLabel: "క్లయింట్",
      modalButton: "నా బ్రాండ్ కోసం ఇది కావాలి"
    },
    testimonials: {
      title: "క్లయింట్ రివ్యూస్"
    },
    contact: {
      title: "మీ వ్యాపారాన్ని వృద్ధి చేద్దాం",
      subtitle: "TP నగర్, సింగరాయకొండలో మమ్మల్ని సందర్శించండి లేదా ఆన్‌లైన్‌లో సంప్రదించండి.",
      nameLabel: "మీ పేరు",
      contactLabel: "ఫోన్ నంబర్",
      serviceLabel: "కావలసిన సేవ",
      detailsLabel: "ప్రాజెక్ట్ వివరాలు...",
      submit: "ఉచిత సలహా పొందండి",
      successTitle: "ధన్యవాదాలు!",
      successMessage: "మేము మిమ్మల్ని వాట్సాప్‌కి రీడైరెక్ట్ చేస్తున్నాము. ఓపెన్ కాకపోతే, క్రింది బటన్ నొక్కండి.",
      successChat: "వాట్సాప్ ఓపెన్ చేయండి",
      contactInfo: "సంప్రదించండి",
      quoteText: "ఒంగోలులో మా బ్రాండ్ ఇమేజ్‌ని రోలెక్స్ యాడ్స్ మార్చింది."
    },
    footer: {
      tagline: "WE WILL HELP YOU BUILD YOUR BRAND",
      privacy: "గోప్యతా విధానం",
      terms: "నిబంధనలు",
      rights: "సర్వహక్కులు రిజర్వ్ చేయబడ్డాయి."
    },
    blog: {
        title: "తాజా సమాచారం",
        readMore: "మరింత చదవండి"
    },
    faq: {
        title: "తరచుగా అడిగే ప్రశ్నలు",
        subtitle: "మా డిజిటల్ మార్కెటింగ్ సేవల గురించి మీకు కావలసిన సమాచారం."
    },
    serviceArea: {
        title: "మా టూల్స్",
        subtitle: "మేము మీ ప్రాజెక్ట్ కోసం ఇండస్ట్రీ స్టాండర్డ్ టూల్స్ ఉపయోగిస్తాము.",
        locations: ""
    }
  }
};

export const SERVICES: Service[] = [
  {
    id: "graphic-designing",
    title: { en: "Graphic Designing", te: "గ్రాఫిక్ డిజైనింగ్" },
    description: { 
      en: "Best graphic designing in Singarayakonda. We create stunning logos, banners, and social media posts that make your brand stand out in Ongole and Kandukur.", 
      te: "సింగరాయకొండలో ఉత్తమ గ్రాఫిక్ డిజైనింగ్. మీ బ్రాండ్‌ను ప్రత్యేకంగా నిలబెట్టే లోగోలు, బ్యానర్లు మరియు సోషల్ మీడియా పోస్ట్‌లను మేము రూపొందిస్తాము." 
    },
    icon: Palette,
  },
  {
    id: "digital-marketing",
    title: { en: "Digital Marketing", te: "డిజిటల్ మార్కెటింగ్" },
    description: { 
      en: "Top-rated digital marketing services in Singarayakonda. Reach more customers in AP with targeted Facebook Ads, Google Ads, and SEO strategies.", 
      te: "సింగరాయకొండలో టాప్ రేటెడ్ డిజిటల్ మార్కెటింగ్ సేవలు. ఫేస్‌బుక్ మరియు గూగుల్ యాడ్స్ ద్వారా ఎక్కువ మంది కస్టమర్లను చేరండి." 
    },
    icon: TrendingUp,
  },
  {
    id: "web-designing",
    title: { en: "Web Designing", te: "వెబ్ డిజైనింగ్" },
    description: { 
      en: "Professional web design agency in Singarayakonda. Get a mobile-friendly, fast-loading website to showcase your business to the world.", 
      te: "ప్రొఫెషనల్ వెబ్ డిజైనింగ్ ఏజెన్సీ. మీ వ్యాపారాన్ని ప్రపంచానికి చూపించడానికి మొబైల్-ఫ్రెండ్లీ మరియు వేగవంతమైన వెబ్‌సైట్‌ను పొందండి." 
    },
    icon: Monitor,
  },
  {
    id: "social-management",
    title: { en: "Social Media Mgmt", te: "సోషల్ మీడియా మేనేజ్మెంట్" },
    description: { 
      en: "Expert social media management in AP. We handle your Instagram and Facebook pages to increase followers and engagement for your local business.", 
      te: "మీ ఇన్‌స్టాగ్రామ్ మరియు ఫేస్‌బుక్ పేజీలను నిర్వహించి, ఫాలోవర్స్ మరియు ఎంగేజ్‌మెంట్‌ను పెంచడంలో మేము నిపుణులం." 
    },
    icon: Share2,
  },
  {
    id: "video-editing",
    title: { en: "Video Editing", te: "వీడియో ఎడిటింగ్" },
    description: { 
      en: "High-quality video editing services in Singarayakonda. Perfect for reels, YouTube promos, and business advertisements.", 
      te: "రీల్స్, యూట్యూబ్ ప్రమోషన్లు మరియు వ్యాపార ప్రకటనల కోసం హై-క్వాలిటీ వీడియో ఎడిటింగ్ సేవలు." 
    },
    icon: Video,
  },
  {
    id: "flex-flyers",
    title: { en: "Flex & Flyers", te: "ఫ్లెక్స్ & ఫ్లయర్స్" },
    description: { 
      en: "Best flex printing designs and flyer makers in Singarayakonda. Eye-catching designs for shop openings and events in Ongole.", 
      te: "సింగరాయకొండలో ఉత్తమ ఫ్లెక్స్ మరియు ఫ్లయర్ డిజైన్‌లు. షాప్ ఓపెనింగ్స్ మరియు ఈవెంట్స్ కోసం ఆకర్షణీయమైన డిజైన్‌లు." 
    },
    icon: Printer,
  },
  {
    id: "visiting-cards",
    title: { en: "Visiting Cards", te: "విజిటింగ్ కార్డ్స్" },
    description: { 
      en: "Premium visiting card designs. Create a lasting first impression with unique business cards tailored for your profession.", 
      te: "ప్రీమియం విజిటింగ్ కార్డ్ డిజైన్‌లు. మీ వృత్తికి తగినట్లుగా ప్రత్యేకమైన బిజినెస్ కార్డ్‌లతో మంచి ఇంప్రెషన్ పొందండి." 
    },
    icon: CreditCard,
  },
  {
    id: "brochures",
    title: { en: "Brochures", te: "బ్రోచర్లు" },
    description: { 
      en: "Informative brochure designs for schools, hospitals, and businesses in Andhra Pradesh. Clear communication leads to more sales.", 
      te: "పాఠశాలలు, ఆసుపత్రులు మరియు వ్యాపారాల కోసం సమాచారంతో కూడిన బ్రోచర్ డిజైన్‌లు." 
    },
    icon: FileText,
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    title: { en: "Hospital Branding", te: "హాస్పిటల్ బ్రాండింగ్" },
    category: { en: "Social Media", te: "సోషల్ మీడియా" },
    client: "Sneha Hospitals",
    imageUrl: "/assets/sneha.png",
  },
  {
    id: "2",
    title: { en: "Jewellery Shop Launch", te: "జ్యువెలరీ షాప్ లాంచ్" },
    category: { en: "Identity", te: "ఐడెంటిటీ" },
    client: "CMR Jewellery",
    imageUrl: "/assets/cmrjewellery.png",
  },
  {
    id: "3",
    title: { en: "Real Estate Campaign", te: "రియల్ ఎస్టేట్ క్యాంపెయిన్" },
    category: { en: "Lead Gen", te: "లీడ్ జనరేషన్" },
    client: "Sri Bhavya",
    imageUrl: "/assets/sribhavya.png",
  },
  {
    id: "4",
    title: { en: "Gold & Diamonds Ad", te: "గోల్డ్ & డైమండ్స్ యాడ్" },
    category: { en: "Social Media", te: "సోషల్ మీడియా" },
    client: "Malabar Gold",
    imageUrl: "/assets/malabar.png",
  },
  {
    id: "5",
    title: { en: "Hospital Promo", te: "హాస్పిటల్ ప్రోమో" },
    category: { en: "Print Ads", te: "ప్రింట్ యాడ్స్" },
    client: "KIMS Hospitals",
    imageUrl: "/assets/kims.png",
  },
  {
    id: "6",
    title: { en: "Shopping Mall Event", te: "షాపింగ్ మాల్ ఈవెంట్" },
    category: { en: "Print", te: "ప్రింట్" },
    client: "CMR Shopping Mall",
    imageUrl: "/assets/cmrmall.png",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "M. Chandra Sekhar",
    role: { en: "Managing Director", te: "మేనేజింగ్ డైరెక్టర్" },
    company: "CMR Jewellery, Ongole",
    quote: { 
      en: "Rolex Ads provided the best digital marketing in Ongole. Our festive sales doubled thanks to their creative social media posts.", 
      te: "రోలెక్స్ యాడ్స్ ఒంగోలులో ఉత్తమ డిజిటల్ మార్కెటింగ్ అందించింది. వారి క్రియేటివ్ పోస్ట్‌ల వల్ల మా సేల్స్ రెట్టింపు అయ్యాయి." 
    },
    avatar: "https://picsum.photos/seed/cmr_face/100/100",
  },
  {
    id: "t2",
    name: "Dr. Bhaskar Rao",
    role: { en: "Medical Director", te: "మెడికల్ డైరెక్టర్" },
    company: "KIMS Hospitals",
    quote: { 
      en: "Reliable graphic design agency in Singarayakonda. They understood our medical requirements and delivered professional designs.", 
      te: "సింగరాయకొండలో నమ్మదగిన గ్రాఫిక్ డిజైన్ ఏజెన్సీ. మా వైద్య అవసరాలను అర్థం చేసుకుని ప్రొఫెషనల్ డిజైన్‌లను అందించారు." 
    },
    avatar: "https://picsum.photos/seed/kims_face/100/100",
  },
  {
    id: "t3",
    name: "K. Srinivas",
    role: { en: "Marketing Head", te: "మార్కెటింగ్ హెడ్" },
    company: "Malabar Gold",
    quote: { 
      en: "The best social media management service in AP. Their team is very responsive and creative.", 
      te: "ఏపీలో ఉత్తమ సోషల్ మీడియా మేనేజ్‌మెంట్ సేవలు. వారి టీమ్ చాలా బాగా స్పందిస్తుంది." 
    },
    avatar: "https://picsum.photos/seed/malabar_face/100/100",
  },
  {
    id: "t4",
    name: "G. Lakshmi Narayana",
    role: { en: "Founder", te: "వ్యవస్థాపకులు" },
    company: "Sri Bhavya Constructions",
    quote: { 
      en: "Excellent flex printing designs. We use Rolex Ads for all our construction site hoardings in Kandukur.", 
      te: "అద్భుతమైన ఫ్లెక్స్ డిజైన్‌లు. కందుకూరులో మా నిర్మాణ సైట్ హోర్డింగ్‌ల కోసం మేము రోలెక్స్ యాడ్స్‌నే వాడుతాము." 
    },
    avatar: "https://picsum.photos/seed/bhavya_face/100/100",
  },
];

export const STATS: Stat[] = [
  { id: "s1", value: 15, suffix: "+", label: { en: "Years in Business", te: "సంవత్సరాల అనుభవం" } },
  { id: "s2", value: 500, suffix: "+", label: { en: "Local Clients", te: "లోకల్ క్లయింట్లు" } },
  { id: "s3", value: 100, suffix: "%", label: { en: "Delivery On Time", te: "సమయానికి డెలివరీ" } },
];

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    question: { en: "Do you provide services in Ongole and Kandukur?", te: "మీరు ఒంగోలు మరియు కందుకూరులో సేవలు అందిస్తారా?" },
    answer: { 
      en: "Yes, we serve clients all across Singarayakonda, Ongole, Kandukur, Kavali, and surrounding areas in Andhra Pradesh.", 
      te: "అవును, మేము సింగరాయకొండ, ఒంగోలు, కందుకూరు, కావలి మరియు పరిసర ప్రాంతాలలో సేవలు అందిస్తాము." 
    }
  },
  {
    id: "f2",
    question: { en: "How much do you charge for a logo design?", te: "లోగో డిజైన్‌కు ఎంత ఛార్జ్ చేస్తారు?" },
    answer: { 
      en: "Our logo design packages are affordable for small businesses. Contact us on WhatsApp (9392556976) for a free quote.", 
      te: "మా లోగో డిజైన్ ధరలు చిన్న వ్యాపారాలకు అందుబాటులో ఉంటాయి. ఉచిత కొటేషన్ కోసం వాట్సాప్‌లో మమ్మల్ని సంప్రదించండి." 
    }
  },
  {
    id: "f3",
    question: { en: "Can you manage our social media pages?", te: "మీరు మా సోషల్ మీడియా పేజీలను నిర్వహించగలరా?" },
    answer: { 
      en: "Absolutely! We specialize in Social Media Management, creating daily posts, reels, and running ads to grow your business.", 
      te: "తప్పకుండా! మేము సోషల్ మీడియా మేనేజ్‌మెంట్‌లో నిపుణులం. మీ వ్యాపారాన్ని పెంచడానికి రోజువారీ పోస్ట్‌లు మరియు రీల్స్‌ను క్రియేట్ చేస్తాము." 
    }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: { en: "Best Digital Marketing Strategies for Small Businesses in Andhra Pradesh", te: "ఆంధ్రప్రదేశ్‌లోని చిన్న వ్యాపారాల కోసం ఉత్తమ డిజిటల్ మార్కెటింగ్ వ్యూహాలు" },
    excerpt: { en: "Learn how local SEO and Facebook Ads can double your customers in Singarayakonda and Ongole.", te: "లోకల్ SEO మరియు ఫేస్‌బుక్ యాడ్స్ మీ కస్టమర్లను ఎలా రెట్టింపు చేయగలవో తెలుసుకోండి." },
    content: {
        en: `
        <p class="mb-4">Digital marketing is no longer just an option for small businesses in Andhra Pradesh—it's a necessity. With the increasing number of smartphone users in towns like Singarayakonda, Ongole, and Kandukur, your customers are searching for services online before they step out of their homes.</p>
        <h3 class="text-xl font-bold text-white mb-2">1. Local SEO is Key</h3>
        <p class="mb-4">For a local business, appearing on Google Maps is crucial. When someone searches for "best graphic designer near me" or "clothing store in Ongole," your business should appear in the top 3 results. At Rolex Ads, we help you optimize your Google Business Profile with correct NAP (Name, Address, Phone) details, photos, and customer reviews.</p>
        <h3 class="text-xl font-bold text-white mb-2">2. Leverage Facebook & Instagram Ads</h3>
        <p class="mb-4">Organic reach is declining. To reach potential customers in specific areas like TP Nagar or Trunk Road, paid advertising on Facebook and Instagram is highly effective. You can target users based on their location, interests, and behavior.</p>
        <h3 class="text-xl font-bold text-white mb-2">3. Video Content Wins</h3>
        <p class="mb-4">Short-form videos (Reels and Shorts) get the most engagement today. Showcasing your products or behind-the-scenes footage of your service can build immense trust with your local audience.</p>
        `,
        te: `
        <p class="mb-4">ఆంధ్రప్రదేశ్‌లోని చిన్న వ్యాపారాలకు డిజిటల్ మార్కెటింగ్ ఇప్పుడు చాలా అవసరం. సింగరాయకొండ, ఒంగోలు మరియు కందుకూరు వంటి పట్టణాల్లో స్మార్ట్‌ఫోన్ వినియోగదారులు పెరుగుతున్నందున, మీ కస్టమర్లు ఆన్‌లైన్‌లో సేవలను వెతుకుతున్నారు.</p>
        <h3 class="text-xl font-bold text-white mb-2">1. లోకల్ SEO ముఖ్యం</h3>
        <p class="mb-4">లోకల్ బిజినెస్ కోసం, గూగుల్ మ్యాప్స్‌లో కనిపించడం చాలా ముఖ్యం. ఎవరైనా "best graphic designer near me" అని వెతికినప్పుడు, మీ వ్యాపారం మొదటి 3 ఫలితాల్లో ఉండాలి. రోలెక్స్ యాడ్స్‌లో, మేము మీ గూగుల్ బిజినెస్ ప్రొఫైల్‌ను సరైన వివరాలతో ఆప్టిమైజ్ చేస్తాము.</p>
        <h3 class="text-xl font-bold text-white mb-2">2. ఫేస్‌బుక్ & ఇన్‌స్టాగ్రామ్ యాడ్స్</h3>
        <p class="mb-4">ఆర్గానిక్ రీచ్ తగ్గుతోంది. TP నగర్ లేదా ట్రంక్ రోడ్ వంటి నిర్దిష్ట ప్రాంతాల్లో కస్టమర్లను చేరుకోవడానికి, ఫేస్‌బుక్ మరియు ఇన్‌స్టాగ్రామ్‌లో పెయిడ్ అడ్వర్టైజింగ్ చాలా ప్రభావవంతంగా ఉంటుంది.</p>
        `
    },
    date: "Oct 15, 2024",
    slug: "#"
  },
  {
    id: "b2",
    title: { en: "Why Every Local Business in Singarayakonda Needs Professional Poster Designs", te: "సింగరాయకొండలోని ప్రతి వ్యాపారానికి ప్రొఫెషనల్ పోస్టర్ డిజైన్ ఎందుకు అవసరం?" },
    excerpt: { en: "Good design builds trust. See how professional posters help you stand out from competitors.", te: "మంచి డిజైన్ నమ్మకాన్ని పెంచుతుంది. ప్రొఫెషనల్ పోస్టర్లు మిమ్మల్ని పోటీదారుల నుండి ఎలా వేరు చేస్తాయో చూడండి." },
    content: {
        en: `
        <p class="mb-4">First impressions matter. Whether it's a festival offer poster or a shop opening banner in Singarayakonda, the quality of your design reflects the quality of your business.</p>
        <h3 class="text-xl font-bold text-white mb-2">1. Stand Out from Competitors</h3>
        <p class="mb-4">A cluttered, poorly designed poster often gets ignored. A clean, professional design by Rolex Ads captures attention instantly and conveys your message clearly.</p>
        <h3 class="text-xl font-bold text-white mb-2">2. Builds Brand Trust</h3>
        <p class="mb-4">Customers trust businesses that look professional. High-quality visuals on social media and print media signal that you are serious about your business and care about customer experience.</p>
        `,
        te: `
        <p class="mb-4">మొదటి అభిప్రాయం చాలా ముఖ్యం. సింగరాయకొండలో పండుగ ఆఫర్ పోస్టర్ అయినా లేదా షాప్ ఓపెనింగ్ బ్యానర్ అయినా, మీ డిజైన్ నాణ్యత మీ వ్యాపార నాణ్యతను ప్రతిబింబిస్తుంది.</p>
        <h3 class="text-xl font-bold text-white mb-2">1. పోటీదారుల నుండి ప్రత్యేకంగా నిలబడండి</h3>
        <p class="mb-4">చూడటానికి బాగోలేని పోస్టర్లను జనం పట్టించుకోరు. రోలెక్స్ యాడ్స్ రూపొందించిన క్లీన్ మరియు ప్రొఫెషనల్ డిజైన్ వెంటనే దృష్టిని ఆకర్షిస్తుంది.</p>
        <h3 class="text-xl font-bold text-white mb-2">2. బ్రాండ్ నమ్మకాన్ని పెంచుతుంది</h3>
        <p class="mb-4">ప్రొఫెషనల్‌గా కనిపించే వ్యాపారాలను కస్టమర్లు నమ్ముతారు. సోషల్ మీడియా మరియు ప్రింట్ మీడియాలో హై-క్వాలిటీ విజువల్స్ ఉంటే, మీరు మీ వ్యాపారం పట్ల సీరియస్‌గా ఉన్నారని అర్థం.</p>
        `
    },
    date: "Oct 22, 2024",
    slug: "#"
  },
  {
    id: "b3",
    title: { en: "How Branding Helps Businesses Grow in Ongole & Kandukur", te: "ఒంగోలు & కందుకూరులో వ్యాపారాలు ఎదగడానికి బ్రాండింగ్ ఎలా సహాయపడుతుంది?" },
    excerpt: { en: "Branding is more than just a logo. It's your identity. Discover the impact of strong branding.", te: "బ్రాండింగ్ అంటే కేవలం లోగో మాత్రమే కాదు. అది మీ గుర్తింపు. బలమైన బ్రాండింగ్ ప్రభావాన్ని తెలుసుకోండి." },
    content: {
        en: `
        <p class="mb-4">Many small business owners in Ongole think branding is only for big companies like Apple or Nike. But branding is even more critical for local businesses to build customer loyalty.</p>
        <h3 class="text-xl font-bold text-white mb-2">What is Branding?</h3>
        <p class="mb-4">Branding is not just a logo. It is your business's personality. It includes your colors, your fonts, the tone of your content, and how you treat your customers.</p>
        <h3 class="text-xl font-bold text-white mb-2">Recognition and Loyalty</h3>
        <p class="mb-4">When you use consistent colors and logos across your shop board, visiting cards, and Facebook posts, customers start recognizing you easily. Familiarity breeds trust, and trust leads to sales.</p>
        `,
        te: `
        <p class="mb-4">ఒంగోలులోని చాలా మంది చిన్న వ్యాపార యజమానులు బ్రాండింగ్ అనేది పెద్ద కంపెనీలకే అని అనుకుంటారు. కానీ కస్టమర్ లాయల్టీని పెంచుకోవడానికి లోకల్ బిజినెస్లకు బ్రాండింగ్ చాలా ముఖ్యం.</p>
        <h3 class="text-xl font-bold text-white mb-2">బ్రాండింగ్ అంటే ఏమిటి?</h3>
        <p class="mb-4">బ్రాండింగ్ అంటే కేవలం లోగో మాత్రమే కాదు. ఇది మీ వ్యాపార వ్యక్తిత్వం. ఇందులో మీ రంగులు, ఫాంట్‌లు మరియు మీరు కస్టమర్లతో మాట్లాడే విధానం ఉంటాయి.</p>
        <h3 class="text-xl font-bold text-white mb-2">గుర్తింపు మరియు నమ్మకం</h3>
        <p class="mb-4">మీరు మీ షాప్ బోర్డ్, విజిటింగ్ కార్డ్స్ మరియు ఫేస్‌బుక్ పోస్ట్‌లలో ఒకే రకమైన రంగులు మరియు లోగోలను వాడినప్పుడు, కస్టమర్లు మిమ్మల్ని సులభంగా గుర్తుపడతారు. ఇది నమ్మకాన్ని పెంచుతుంది.</p>
        `
    },
    date: "Oct 28, 2024",
    slug: "#"
  },
  {
    id: "b4",
    title: { en: "Why Small Businesses in Ongole Need a Mobile-Friendly Website", te: "2024లో ఒంగోలులోని చిన్న వ్యాపారాలకు వెబ్‌సైట్ ఎందుకు అవసరం?" },
    excerpt: { en: "In the digital age, a website is your digital shop front. Learn why Ongole businesses need to go online.", te: "డిజిటల్ యుగంలో, వెబ్‌సైట్ మీ ఆన్‌లైన్ షాప్. ఒంగోలు వ్యాపారాలు ఆన్‌లైన్‌లోకి ఎందుకు వెళ్లాలో తెలుసుకోండి." },
    content: {
        en: `
        <p class="mb-4">Is your business visible when people search on Google? If not, you are losing customers to competitors who have a website. A professional website acts as a 24/7 salesman for your business in Ongole.</p>
        <h3 class="text-xl font-bold text-white mb-2">1. Credibility and Trust</h3>
        <p class="mb-4">A well-designed website makes your business look professional and established. Customers are more likely to trust a shop that has a proper online presence.</p>
        <h3 class="text-xl font-bold text-white mb-2">2. Local SEO Benefits</h3>
        <p class="mb-4">With a mobile-friendly website, you can rank for keywords like 'Best Saree Shop in Ongole' or 'Top Restaurant in Ongole'. This drives organic traffic and new walk-ins to your store.</p>
        <h3 class="text-xl font-bold text-white mb-2">3. Mobile Accessibility</h3>
        <p class="mb-4">Most users in Ongole and Singarayakonda use smartphones to find services. A responsive website ensures they can view your products and contact you easily from their phones.</p>
        `,
        te: `
        <p class="mb-4">గూగుల్‌లో వెతికినప్పుడు మీ వ్యాపారం కనిపిస్తుందా? లేకపోతే, వెబ్‌సైట్ ఉన్న మీ పోటీదారుల దగ్గరికి మీ కస్టమర్లు వెళ్తున్నారు. ఒక ప్రొఫెషనల్ వెబ్‌సైట్ మీ వ్యాపారం కోసం 24 గంటల సేల్స్‌మెన్‌లా పనిచేస్తుంది.</p>
        <h3 class="text-xl font-bold text-white mb-2">1. నమ్మకం మరియు గుర్తింపు</h3>
        <p class="mb-4">మంచి వెబ్‌సైట్ మీ వ్యాపారాన్ని ప్రొఫెషనల్‌గా చూపిస్తుంది. ఆన్‌లైన్ ఉనికి ఉన్న షాపులను కస్టమర్లు ఎక్కువగా నమ్ముతారు.</p>
        <h3 class="text-xl font-bold text-white mb-2">2. మొబైల్ సౌలభ్యం</h3>
        <p class="mb-4">ఒంగోలు మరియు సింగరాయకొండలోని చాలా మంది వినియోగదారులు సేవలను కనుగొనడానికి స్మార్ట్‌ఫోన్‌లను ఉపయోగిస్తారు. రెస్పాన్సివ్ వెబ్‌సైట్ ద్వారా వారు మీ ఉత్పత్తులను సులభంగా చూడగలరు.</p>
        `
    },
    date: "Nov 05, 2024",
    slug: "#"
  },
  {
    id: "b5",
    title: { en: "Growing Your Clothing Store in Kandukur using Instagram Ads", te: "కందుకూరులో మీ బట్టల షాపును ఇన్‌స్టాగ్రామ్ ద్వారా ఎలా అభివృద్ధి చేసుకోవాలి?" },
    excerpt: { en: "Fashion and Instagram go hand in hand. Discover how to use Reels to attract youth in Kandukur.", te: "ఫ్యాషన్ మరియు ఇన్‌స్టాగ్రామ్ ఒకదానికొకటి తోడుగా ఉంటాయి. కందుకూరు యువతను ఆకర్షించడానికి రీల్స్‌ను ఎలా ఉపయోగించాలో తెలుసుకోండి." },
    content: {
        en: `
        <p class="mb-4">For clothing stores in Kandukur, traditional paper ads are becoming less effective. Your customers, especially the youth, are on Instagram.</p>
        <h3 class="text-xl font-bold text-white mb-2">1. Showcase Your Collection</h3>
        <p class="mb-4">Instead of just photos, create short Reels showing the fabric quality and latest designs. Video content gets 3x more engagement than static images.</p>
        <h3 class="text-xl font-bold text-white mb-2">2. Run Location-Based Ads</h3>
        <p class="mb-4">You can run Instagram ads specifically targeting people living in Kandukur and nearby villages. This ensures your budget is spent only on potential local customers.</p>
        <h3 class="text-xl font-bold text-white mb-2">3. Influencer Marketing</h3>
        <p class="mb-4">Collaborate with local influencers to wear your clothes and tag your store. This builds immediate trust and social proof.</p>
        `,
        te: `
        <p class="mb-4">కందుకూరులోని బట్టల షాపులకు పేపర్ ప్రకటనలు పాతబడిపోయాయి. మీ కస్టమర్లు, ముఖ్యంగా యువత, ఇన్‌స్టాగ్రామ్‌లో ఉన్నారు.</p>
        <h3 class="text-xl font-bold text-white mb-2">1. మీ కలెక్షన్‌ను చూపించండి</h3>
        <p class="mb-4">కేవలం ఫోటోలే కాకుండా, బట్టల క్వాలిటీ మరియు డిజైన్లను చూపిస్తూ చిన్న రీల్స్ చేయండి. వీడియోలకు ఫోటోల కంటే ఎక్కువ ఆదరణ ఉంటుంది.</p>
        <h3 class="text-xl font-bold text-white mb-2">2. లొకేషన్ ఆధారిత యాడ్స్</h3>
        <p class="mb-4">మీరు కందుకూరు మరియు చుట్టుపక్కల గ్రామాల ప్రజలను మాత్రమే టార్గెట్ చేసి ఇన్‌స్టాగ్రామ్ యాడ్స్ రన్ చేయవచ్చు.</p>
        `
    },
    date: "Nov 12, 2024",
    slug: "#"
  },
  {
    id: "b6",
    title: { en: "The Impact of Professional Video Editing for Singarayakonda Businesses", te: "సింగరాయకొండ వ్యాపారాల కోసం ప్రొఫెషనల్ వీడియో ఎడిటింగ్ యొక్క ప్రభావం" },
    excerpt: { en: "High-quality videos build high-quality brands. Why DIY editing might be hurting your image.", te: "హై-క్వాలిటీ వీడియోలు హై-క్వాలిటీ బ్రాండ్లను నిర్మిస్తాయి. సొంతంగా ఎడిటింగ్ చేసుకోవడం మీ ఇమేజ్‌ను ఎందుకు దెబ్బతీస్తుందో తెలుసుకోండి." },
    content: {
        en: `
        <p class="mb-4">In Singarayakonda, competition is rising. To grab attention on WhatsApp statuses and Facebook, you need professional video content.</p>
        <h3 class="text-xl font-bold text-white mb-2">1. Professional Transitions & Audio</h3>
        <p class="mb-4">Bad audio and choppy cuts make a video look amateur. Professional editing ensures smooth transitions and clear sound, which reflects positively on your product quality.</p>
        <h3 class="text-xl font-bold text-white mb-2">2. Storytelling</h3>
        <p class="mb-4">A professional editor knows how to tell a story in 30 seconds. They highlight the problem and present your service as the solution effectively.</p>
        <p>At Rolex Ads, we provide cinema-quality video editing for local businesses, perfect for social media ads and YouTube promos.</p>
        `,
        te: `
        <p class="mb-4">సింగరాయకొండలో పోటీ పెరుగుతోంది. వాట్సాప్ స్టేటస్ మరియు ఫేస్‌బుక్‌లో దృష్టిని ఆకర్షించడానికి, మీకు ప్రొఫెషనల్ వీడియో కంటెంట్ అవసరం.</p>
        <h3 class="text-xl font-bold text-white mb-2">1. ప్రొఫెషనల్ క్వాలిటీ</h3>
        <p class="mb-4">బాగోలేని ఆడియో మరియు కట్స్ వీడియోను చెడగొడతాయి. ప్రొఫెషనల్ ఎడిటింగ్ మీ వీడియోకు సినిమా లుక్ ఇస్తుంది, ఇది మీ ప్రోడక్ట్ క్వాలిటీని పెంచుతుంది.</p>
        <h3 class="text-xl font-bold text-white mb-2">2. కథ చెప్పడం</h3>
        <p class="mb-4">ప్రొఫెషనల్ ఎడిటర్ 30 సెకన్లలో కథను ఎలా చెప్పాలో తెలుసుకుంటారు. వారు మీ సర్వీస్‌ను కస్టమర్ సమస్యకు పరిష్కారంగా చూపిస్తారు.</p>
        `
    },
    date: "Nov 18, 2024",
    slug: "#"
  },
  {
    id: "b7",
    title: { en: "Designing Effective Hoardings for High-Traffic Areas in Ongole", te: "ఒంగోలులోని రద్దీ ప్రాంతాల కోసం ప్రభావవంతమైన హోర్డింగ్ డిజైనింగ్" },
    excerpt: { en: "You only have 3 seconds to catch a driver's attention. Make your flex banners count.", te: "డ్రైవర్ దృష్టిని ఆకర్షించడానికి మీకు కేవలం 3 సెకన్లు మాత్రమే ఉంటాయి. మీ ఫ్లెక్స్ బ్యానర్లు ప్రభావవంతంగా ఉండాలి." },
    content: {
        en: `
        <p class="mb-4">Placing a hoarding in Ongole's Trunk Road or near the Bus Stand costs money. Don't waste it with a bad design.</p>
        <h3 class="text-xl font-bold text-white mb-2">1. Keep it Simple</h3>
        <p class="mb-4">Too much text is a mistake. A hoarding should have one headline, one large image, and a phone number. People driving by cannot read a paragraph.</p>
        <h3 class="text-xl font-bold text-white mb-2">2. High Contrast Colors</h3>
        <p class="mb-4">Use bold colors that stand out against the sky and surrounding buildings. Red and Yellow (like Rolex Ads branding) work very well for grabbing attention.</p>
        <h3 class="text-xl font-bold text-white mb-2">3. Readable Fonts</h3>
        <p class="mb-4">Avoid cursive or thin fonts. Use thick, bold fonts that are readable from a distance.</p>
        `,
        te: `
        <p class="mb-4">ఒంగోలు ట్రంక్ రోడ్ లేదా బస్ స్టాండ్ దగ్గర హోర్డింగ్ పెట్టడం ఖర్చుతో కూడుకున్న పని. చెడ్డ డిజైన్‌తో డబ్బు వృధా చేసుకోకండి.</p>
        <h3 class="text-xl font-bold text-white mb-2">1. సింపుల్‌గా ఉంచండి</h3>
        <p class="mb-4">ఎక్కువ మేటర్ రాయడం తప్పు. హోర్డింగ్‌లో ఒక హెడ్‌లైన్, ఒక పెద్ద ఫోటో మరియు ఫోన్ నంబర్ మాత్రమే ఉండాలి. వెళ్లేవారు పేరాగ్రాఫ్‌లు చదవలేరు.</p>
        <h3 class="text-xl font-bold text-white mb-2">2. బోల్డ్ రంగులు</h3>
        <p class="mb-4">ఆకాశం మరియు భవనాల మధ్య కనిపించేలా బోల్డ్ రంగులను వాడండి. ఎరుపు మరియు పసుపు రంగులు దృష్టిని ఆకర్షించడానికి బాగా పనిచేస్తాయి.</p>
        `
    },
    date: "Nov 25, 2024",
    slug: "#"
  }
];