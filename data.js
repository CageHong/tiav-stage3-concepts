// 由 build_data.py 產生，不要手改
window.STAGE3_DATA = {
  "meta": {
    "title": "Stage 3: Concept Generation",
    "course": "Transport Innovation and Valorisation, UHasselt",
    "meeting": "2026-11-15",
    "counts": {
      "raw": 80,
      "distinct": 78,
      "concepts": 39,
      "groups": 3,
      "subgroups": 12,
      "eliminated": 6,
      "core": 20,
      "candidates": 5
    },
    "status_values": {
      "core": "core concept of at least one candidate",
      "not_core": "kept after screening, not a core concept of any candidate",
      "eliminated": "screened out in initial selection"
    }
  },
  "groups": [
    {
      "id": "1",
      "name": "Data Collection & Generation"
    },
    {
      "id": "2",
      "name": "Data Sharing, Translation & Verification"
    },
    {
      "id": "3",
      "name": "Incentives, Financing & Transaction Guarantees"
    }
  ],
  "subgroups": [
    {
      "id": "1A",
      "group": "1",
      "name": "Physical & Sensor-Based Measurement"
    },
    {
      "id": "1B",
      "group": "1",
      "name": "Connected & Software-Based Reading"
    },
    {
      "id": "1C",
      "group": "1",
      "name": "On-Site, Mobile & Group Testing Services"
    },
    {
      "id": "1D",
      "group": "1",
      "name": "Existing Data Source Aggregation & Databases"
    },
    {
      "id": "2A",
      "group": "2",
      "name": "On-Bike / Direct Digital Access & Transfer Channels"
    },
    {
      "id": "2B",
      "group": "2",
      "name": "Marketplace, Point-of-Sale & Leasing Workflow Integration"
    },
    {
      "id": "2C",
      "group": "2",
      "name": "Translation, Standardization & Cross-Bike Comparison"
    },
    {
      "id": "2D",
      "group": "2",
      "name": "AI Agents, Interactive Pets & Report Interpreters"
    },
    {
      "id": "2E",
      "group": "2",
      "name": "Authenticity Verification, Badges & Certification"
    },
    {
      "id": "3A",
      "group": "3",
      "name": "Community, Gamification & Sharing Incentives"
    },
    {
      "id": "3B",
      "group": "3",
      "name": "Financial Barrier Reduction & Who-Pays Models"
    },
    {
      "id": "3C",
      "group": "3",
      "name": "Risk-Sharing Pricing, Warranties & Mandatory Policies"
    }
  ],
  "concepts": [
    {
      "code": "1A-1",
      "name": "Smart Charger Diagnostics",
      "description": "A smart charger that estimates battery health while charging, either by monitoring the electrical flow during the charge cycle or by directly reading the Battery Management System (BMS) data.",
      "group": "1",
      "subgroup": "1A",
      "sources": [
        "P3",
        "P4"
      ],
      "status": "core"
    },
    {
      "code": "1A-2",
      "name": "Non-Invasive Physical Diagnostics",
      "description": "Detect degradation without opening the battery: infrared/thermal imaging of heat distribution to reveal internal resistance anomalies, or acoustic analysis of the electrical flow / charger sound patterns.",
      "group": "1",
      "subgroup": "1A",
      "sources": [
        "P8",
        "P9"
      ],
      "status": "not_core"
    },
    {
      "code": "1A-3",
      "name": "Self-Service Battery Check Kiosk",
      "description": "Standalone self-service station where users plug in a battery for an automated check.",
      "group": "1",
      "subgroup": "1A",
      "sources": [
        "P5"
      ],
      "status": "eliminated"
    },
    {
      "code": "1A-4",
      "name": "Battery Health Check at Home",
      "description": "Guided remote steps let owners submit compatible diagnostic data without visiting a shop.",
      "group": "1",
      "subgroup": "1A",
      "sources": [
        "#9"
      ],
      "status": "core"
    },
    {
      "code": "1B-1",
      "name": "Connected Battery with Automatic Updates",
      "description": "IoT-connected batteries automatically transmit health data to the cloud, so compatible systems keep battery-health records updated periodically without user action.",
      "group": "1",
      "subgroup": "1B",
      "sources": [
        "P2",
        "#38"
      ],
      "status": "eliminated"
    },
    {
      "code": "1B-2",
      "name": "Battery Testing App",
      "description": "Dedicated mobile application for testing or reading battery health.",
      "group": "1",
      "subgroup": "1B",
      "sources": [
        "P26"
      ],
      "status": "core"
    },
    {
      "code": "1C-1",
      "name": "Fixed-Site Testing (Bike Shops & Independent Centres)",
      "description": "In-store diagnostic testing at local bicycle shops, or at dedicated testing facilities that are independent of bike brands and sellers to guarantee neutrality.",
      "group": "1",
      "subgroup": "1C",
      "sources": [
        "P22",
        "P27"
      ],
      "status": "not_core"
    },
    {
      "code": "1C-2",
      "name": "Mobile & On-Demand Testing",
      "description": "An on-demand van or technician performs checks locally, possibly for several users in one visit; one variant partners with food-delivery couriers to perform quick 5-minute doorstep battery checks.",
      "group": "1",
      "subgroup": "1C",
      "sources": [
        "P37",
        "#14",
        "P6"
      ],
      "status": "not_core"
    },
    {
      "code": "1C-3",
      "name": "Group & Workplace Testing",
      "description": "Employers arrange collective battery-check events at work, and testing several batteries in one session lowers the per-bike service cost (also relates to 3B).",
      "group": "1",
      "subgroup": "1C",
      "sources": [
        "#13",
        "#20"
      ],
      "status": "core"
    },
    {
      "code": "1D-1",
      "name": "Data-Sharing Partnerships",
      "description": "Pool battery data from parties that already hold it: real-world degradation and usage datasets from shared e-bike operators, diagnostic data from dealers' routine maintenance and trade-ins, and BMS health records shared by drive-system / battery manufacturers.",
      "group": "1",
      "subgroup": "1D",
      "sources": [
        "P13",
        "P14",
        "P28"
      ],
      "status": "core"
    },
    {
      "code": "1D-2",
      "name": "Central Battery History Database & Integrated Service",
      "description": "A central repository storing a battery's health records across its lifecycle, offered as a B2B database to enterprises that need data (dealers, refurbishers, insurers) and acting as one access point connecting testers, leasing companies, sellers and marketplaces (also relates to Group 2).",
      "group": "1",
      "subgroup": "1D",
      "sources": [
        "P32",
        "P20",
        "#40"
      ],
      "status": "core"
    },
    {
      "code": "2A-1",
      "name": "QR Code Battery Report",
      "description": "Scan a code on the bike to open its latest available verified battery report, with no shop visit required.",
      "group": "2",
      "subgroup": "2A",
      "sources": [
        "P31",
        "#1"
      ],
      "status": "core"
    },
    {
      "code": "2A-2",
      "name": "Battery Health Lookup Portal (incl. SMS)",
      "description": "One standardized website showing available reports from different brands; anyone can enter a battery ID or report number to retrieve an existing report free of charge, or receive a short verified summary by SMS without needing a smartphone.",
      "group": "2",
      "subgroup": "2A",
      "sources": [
        "#2",
        "#8",
        "#7"
      ],
      "status": "not_core"
    },
    {
      "code": "2A-3",
      "name": "Owner-Controlled Report Sharing & Transfer",
      "description": "Owners store past reports in a digital wallet, share a verifiable report link with potential buyers through chat, WhatsApp or email, and transfer the battery records to the buyer with appropriate authorization at the time of sale.",
      "group": "2",
      "subgroup": "2A",
      "sources": [
        "#4",
        "#5",
        "#37"
      ],
      "status": "core"
    },
    {
      "code": "2B-1",
      "name": "Battery Report at the Moment of Purchase",
      "description": "Place evidence where the buying decision happens: a browser extension or platform plug-in embedded in second-hand e-bike marketplaces, a battery-health report attached directly to online listings, and professional sellers showing reports before buyers commit.",
      "group": "2",
      "subgroup": "2B",
      "sources": [
        "P15",
        "#3",
        "#11"
      ],
      "status": "core"
    },
    {
      "code": "2B-2",
      "name": "End-of-Lease & Leasing Battery Report",
      "description": "Leasing companies provide existing reports when bikes are collected or returned, show battery information inside the leasing app already in use, and send lessees a report before they decide whether to buy the bike at lease end; this can be backed by a policy or contractual rule requiring leasing companies to track and disclose battery health (also relates to 3C).",
      "group": "2",
      "subgroup": "2B",
      "sources": [
        "#10",
        "#12",
        "#16",
        "P19"
      ],
      "status": "core"
    },
    {
      "code": "2C-1",
      "name": "Standardised Battery Health Score & Label",
      "description": "A single standardized score turned into an intuitive label: a Nutri-Score-style A–E grade, a visual condition label, a green/amber/red traffic light with supporting test data and thresholds, or remaining capacity as a percentage with an explanation of what was measured.",
      "group": "2",
      "subgroup": "2C",
      "sources": [
        "P10",
        "P29",
        "P40",
        "#25",
        "P21",
        "#26"
      ],
      "status": "not_core"
    },
    {
      "code": "2C-2",
      "name": "Battery Health Comparison Tool",
      "description": "Normalizes different battery metrics into comparable evidence so multiple bikes can be compared using the same units and report fields.",
      "group": "2",
      "subgroup": "2C",
      "sources": [
        "P34",
        "#27"
      ],
      "status": "not_core"
    },
    {
      "code": "2C-3",
      "name": "Battery Replacement Cost Estimator",
      "description": "Calculates the expected battery replacement expense and shows it beside the battery condition.",
      "group": "2",
      "subgroup": "2C",
      "sources": [
        "P33",
        "P39",
        "#28"
      ],
      "status": "not_core"
    },
    {
      "code": "2C-4",
      "name": "Personalized Travel Range Calculator",
      "description": "Estimates whether the bike suits a buyer's commute using available battery data and riding assumptions.",
      "group": "2",
      "subgroup": "2C",
      "sources": [
        "#29"
      ],
      "status": "not_core"
    },
    {
      "code": "2C-5",
      "name": "Standardized, Visual & Multilingual Report Format",
      "description": "A common report template with shared fields, units and test methods across brands; charts and icons explaining capacity, method and uncertainty; a clearly shown test date so buyers can judge how current it is; available in Dutch, French and English.",
      "group": "2",
      "subgroup": "2C",
      "sources": [
        "#34",
        "#31",
        "#35",
        "#30"
      ],
      "status": "not_core"
    },
    {
      "code": "2D-1",
      "name": "Personified Battery (AI Agent / Digital Pet)",
      "description": "Turn each battery into something you can interact with: a conversational AI digital twin that buyers and owners can question directly, or a Tamagotchi-style virtual pet reflecting the battery's state and care habits (also relates to 3A).",
      "group": "2",
      "subgroup": "2D",
      "sources": [
        "P7",
        "P18"
      ],
      "status": "core"
    },
    {
      "code": "2D-2",
      "name": "Battery Report Interpreter / Chatbot",
      "description": "Upload an existing report or technical diagnostic printout and receive plain-language takeaways, including the results and their limitations.",
      "group": "2",
      "subgroup": "2D",
      "sources": [
        "P35",
        "#6"
      ],
      "status": "not_core"
    },
    {
      "code": "2D-3",
      "name": "Battery Information Assistant",
      "description": "Guides buyers through missing information and suggests useful questions to ask sellers.",
      "group": "2",
      "subgroup": "2D",
      "sources": [
        "#32"
      ],
      "status": "eliminated"
    },
    {
      "code": "2E-1",
      "name": "Digital & Third-Party Battery Certificate",
      "description": "A tamper-resistant digital certificate stating battery condition, issued by an independent, neutral organization.",
      "group": "2",
      "subgroup": "2E",
      "sources": [
        "P25",
        "P36"
      ],
      "status": "not_core"
    },
    {
      "code": "2E-2",
      "name": "Online Report Verification",
      "description": "A web platform where buyers confirm the authenticity of a battery-health claim online using a unique report code, instead of contacting or visiting the issuing shop.",
      "group": "2",
      "subgroup": "2E",
      "sources": [
        "P30",
        "#15",
        "#39"
      ],
      "status": "not_core"
    },
    {
      "code": "2E-3",
      "name": "Verified Battery Health Badge",
      "description": "A marketplace badge displayed only after a report has been authenticated.",
      "group": "2",
      "subgroup": "2E",
      "sources": [
        "#33"
      ],
      "status": "core"
    },
    {
      "code": "2E-4",
      "name": "Battery Health Passport",
      "description": "A lifecycle digital passport recording battery identity and health events.",
      "group": "2",
      "subgroup": "2E",
      "sources": [
        "P38"
      ],
      "status": "core"
    },
    {
      "code": "3A-1",
      "name": "Battery Community & Gamification",
      "description": "A social network where e-bike owners share and benchmark battery health data, with gamified mechanics (rankings, streaks, challenges) encouraging ongoing tracking and sharing.",
      "group": "3",
      "subgroup": "3A",
      "sources": [
        "P1",
        "P17"
      ],
      "status": "core"
    },
    {
      "code": "3A-2",
      "name": "Give-to-Get Data Credits",
      "description": "Every time owners share their battery data they earn credits that unlock reports on other bikes.",
      "group": "3",
      "subgroup": "3A",
      "sources": [
        "P16"
      ],
      "status": "core"
    },
    {
      "code": "3A-3",
      "name": "Buyer-Initiated Report Request",
      "description": "Buyers prompt sellers to disclose battery health, either with a one-click request button or by placing a bid / bounty on the bike.",
      "group": "3",
      "subgroup": "3A",
      "sources": [
        "P12",
        "#36"
      ],
      "status": "core"
    },
    {
      "code": "3B-1",
      "name": "Free Basic Battery Health Report",
      "description": "A free basic summary of an existing report; charge only for optional advanced services.",
      "group": "3",
      "subgroup": "3B",
      "sources": [
        "#17"
      ],
      "status": "core"
    },
    {
      "code": "3B-2",
      "name": "Seller-Paid Certificate with Deferred Payment",
      "description": "One seller-funded test becomes freely accessible to all potential buyers, and the seller's verification fee can be deferred until the bike is successfully sold.",
      "group": "3",
      "subgroup": "3B",
      "sources": [
        "#18",
        "#24"
      ],
      "status": "core"
    },
    {
      "code": "3B-3",
      "name": "Lease- & Employer-Funded Testing",
      "description": "Battery-test costs are spread through lease fees instead of being charged at resale, or employers pay for checks for employees in bicycle leasing schemes.",
      "group": "3",
      "subgroup": "3B",
      "sources": [
        "#19",
        "#21"
      ],
      "status": "core"
    },
    {
      "code": "3B-4",
      "name": "Marketplace-Funded Verification",
      "description": "Online marketplaces subsidize report checks as a buyer-protection feature.",
      "group": "3",
      "subgroup": "3B",
      "sources": [
        "#22"
      ],
      "status": "core"
    },
    {
      "code": "3B-5",
      "name": "Battery Information Voucher",
      "description": "Discounts for testing through participating shops.",
      "group": "3",
      "subgroup": "3B",
      "sources": [
        "#23"
      ],
      "status": "not_core"
    },
    {
      "code": "3C-1",
      "name": "Pay-as-You-Ride Battery Pricing",
      "description": "Buyers pay only part of the battery price upfront and the rest based on the distance they ride.",
      "group": "3",
      "subgroup": "3C",
      "sources": [
        "P11"
      ],
      "status": "eliminated"
    },
    {
      "code": "3C-2",
      "name": "Battery Health Warranty",
      "description": "Warranty covering an unexpected battery capacity drop after a second-hand purchase.",
      "group": "3",
      "subgroup": "3C",
      "sources": [
        "P24"
      ],
      "status": "eliminated"
    },
    {
      "code": "3C-3",
      "name": "Mandatory Battery Health Report for Second-Hand Sales",
      "description": "Regulatory mandate requiring a battery health report in second-hand e-bike transactions, similar to Car-Pass.",
      "group": "3",
      "subgroup": "3C",
      "sources": [
        "P23"
      ],
      "status": "eliminated"
    }
  ],
  "candidates": [
    {
      "id": 1,
      "name": "End-of-Lease Battery Hub",
      "target": "Targets our primary market entry point: 35k–47k returning lease e-bikes/yr",
      "members": [
        "2B-2",
        "1C-3",
        "1D-1",
        "3B-3"
      ],
      "collection": "Collected during workplace group events (1C-3), routine lease maintenance at partner dealers (1D-1), or lease-return inspection.",
      "sharing_funding": "Automatically delivered via the leasing app/email (2B-2) before the lessee's buyout decision; returned bikes flow with standardized reports to refurbishers/dealers for batch bidding. Funded via lease fees, employers, or refurbishers (3B-3).",
      "related": []
    },
    {
      "id": 2,
      "name": "Marketplace Trust Plug-in & Buyer Bounty",
      "target": "Targets private sales on 2dehands.be & point of sale",
      "members": [
        "2B-1",
        "2E-3",
        "3A-3",
        "1A-4",
        "3B-4",
        "3B-2"
      ],
      "collection": "Sellers complete guided home diagnostic steps (1A-4) or upload existing dealer printouts translated by the AI interpreter (2D-2).",
      "sharing_funding": "Embedded directly in online listings (2B-1) with a Verified Badge (2E-3) and cross-bike comparison (2C-2). For unlisted batteries, buyers click a 1-click request or place a micro-bounty (3A-3) to prompt seller disclosure; fee deferred until sale (3B-2) or subsidized by marketplace (3B-4).",
      "related": [
        "2D-2",
        "2C-2"
      ]
    },
    {
      "id": 3,
      "name": "QR Battery Health Passport & Central Lifecycle DB",
      "target": "Targets cross-brand standardization & B2B data access",
      "members": [
        "2E-4",
        "1D-2",
        "2A-1",
        "2A-3",
        "1D-1",
        "3B-1"
      ],
      "collection": "Aggregates partner dealer maintenance checks (1D-1), home checks, and post-2027 EU passport records into a central database (1D-2) tied to battery ID.",
      "sharing_funding": "Tamper-evident QR code on the battery (2A-1) + owner digital wallet (2A-3). Buyers scan the QR or query the portal/SMS (2A-2) for free (3B-1); records transfer on resale. Monetized via B2B database access (1D-2) for dealers, refurbishers, and insurers.",
      "related": [
        "2A-2"
      ]
    },
    {
      "id": 4,
      "name": "Smart Charger Home Diagnostic Kit",
      "target": "Targets brand-independent physical measurement, incl. older bikes",
      "members": [
        "1A-1",
        "1B-2",
        "1A-4",
        "2A-3",
        "3B-2"
      ],
      "collection": "Low-cost smart charger adapter tracks charging electrical flow (1A-1) + thermal/acoustic safety check (1A-2) via mobile app (1B-2), bypassing OEM BMS locks and covering older batteries.",
      "sharing_funding": "One charge cycle at home (1A-4) generates a test report with battery ID and test date, shared in one click via WhatsApp/chat (2A-3). Hardware offered via deposit rental for P2P sellers or B2B subscription for dealers; the seller pays for the test, and buyers view the report for free (3B-2).",
      "related": [
        "1A-2"
      ]
    },
    {
      "id": 5,
      "name": "Gamified Battery Community & AI Digital Pet",
      "target": "Targets ongoing owner engagement, history building & peer benchmarking",
      "members": [
        "3A-1",
        "3A-2",
        "2D-1",
        "1D-1"
      ],
      "collection": "Owners log charging/usage via app, combined with shared e-bike fleet datasets (1D-1) to train cross-brand real-world degradation benchmarks.",
      "sharing_funding": "Turns the battery into an interactive digital pet / conversational AI twin (2D-1) with peer leaderboards (3A-1). Owners earn credits by sharing data to unlock reports on other bikes (3A-2) and export a verified longitudinal care history at resale. Monetized via B2B benchmark database and replacement leads.",
      "related": []
    }
  ],
  "ideas": [
    {
      "id": "P1",
      "text": "a battery health data social media",
      "note": "Social network / community where e-bike owners share and benchmark battery health data.",
      "duplicate_of": null,
      "concept": "3A-1"
    },
    {
      "id": "P2",
      "text": "All battery connect to internet and share data",
      "note": "IoT-connected batteries that automatically transmit health data to the cloud.",
      "duplicate_of": null,
      "concept": "1B-1"
    },
    {
      "id": "P3",
      "text": "Use smart charger to track charging electric flow",
      "note": "Estimate battery health by monitoring electrical flow during charging.",
      "duplicate_of": null,
      "concept": "1A-1"
    },
    {
      "id": "P4",
      "text": "A smart charger that can read BMS",
      "note": "Smart charger capable of directly reading Battery Management System data.",
      "duplicate_of": null,
      "concept": "1A-1"
    },
    {
      "id": "P5",
      "text": "Self service battery check Kiosk",
      "note": "Standalone self-service station where users plug in a battery for an automated check.",
      "duplicate_of": null,
      "concept": "1A-3"
    },
    {
      "id": "P6",
      "text": "Work with delivery, when delivering food, provide some kind of bike battery check in 5 mins",
      "note": "Partner with food delivery couriers to perform quick 5-minute doorstep battery checks.",
      "duplicate_of": null,
      "concept": "1C-2"
    },
    {
      "id": "P7",
      "text": "A battery agent AI that make every battery into an agent that you can talk to",
      "note": "Conversational AI digital twin representing the specific battery so buyers/owners can ask it questions directly.",
      "duplicate_of": null,
      "concept": "2D-1"
    },
    {
      "id": "P8",
      "text": "Use infrared ray to check the heat of battery",
      "note": "Thermal / infrared inspection of heat distribution to detect degradation or internal resistance anomalies.",
      "duplicate_of": null,
      "concept": "1A-2"
    },
    {
      "id": "P9",
      "text": "Use device to listen to the electric flow sound",
      "note": "Acoustic diagnosis of electrical flow / charger sound patterns.",
      "duplicate_of": null,
      "concept": "1A-2"
    },
    {
      "id": "P10",
      "text": "Nutri-Score for Batteries",
      "note": "Food-label-style A–E grading scale for intuitive battery health evaluation.",
      "duplicate_of": null,
      "concept": "2C-1"
    },
    {
      "id": "P11",
      "text": "Buyers only pay part of battery and pay the rest based on how many distance they ride",
      "note": "Pay-as-you-ride deferred pricing for the battery portion of a second-hand e-bike purchase.",
      "duplicate_of": null,
      "concept": "3C-1"
    },
    {
      "id": "P12",
      "text": "Buyers can bit on a bike to ask seller to share battery health",
      "note": "Buyer-initiated bounty / bid prompting a seller to disclose battery health.",
      "duplicate_of": null,
      "concept": "3A-3"
    },
    {
      "id": "P13",
      "text": "Get data from share bike company",
      "note": "Collect real-world battery degradation and usage datasets from shared e-bike operators.",
      "duplicate_of": null,
      "concept": "1D-1"
    },
    {
      "id": "P14",
      "text": "Work with bike dealers to share data",
      "note": "Partner with bike dealers to pool diagnostic data from routine maintenance and trade-ins.",
      "duplicate_of": null,
      "concept": "1D-1"
    },
    {
      "id": "P15",
      "text": "A plug-in tools on second hand bike trade platform",
      "note": "Browser extension or platform plug-in embedded directly into second-hand e-bike marketplaces.",
      "duplicate_of": null,
      "concept": "2B-1"
    },
    {
      "id": "P16",
      "text": "Every time bike owners share data they get credit that they can use it to check other battery's data",
      "note": "Give-to-get credit mechanism: sharing your own battery data earns credits to unlock reports on other bikes.",
      "duplicate_of": null,
      "concept": "3A-2"
    },
    {
      "id": "P17",
      "text": "Battery health gamification",
      "note": "Gamified mechanics (rankings, streaks, challenges) encouraging ongoing battery tracking and data sharing.",
      "duplicate_of": null,
      "concept": "3A-1"
    },
    {
      "id": "P18",
      "text": "Make battery into some kind of digital pet that you can interact with",
      "note": "Interactive Tamagotchi-style virtual pet reflecting the battery's state and care habits *(also relates to 3A)*.",
      "duplicate_of": null,
      "concept": "2D-1"
    },
    {
      "id": "P19",
      "text": "Lease end policy that ask lease company to track and share data with lessee in the end point of the lease period",
      "note": "Policy or contractual rule requiring leasing companies to track and disclose battery health to lessees at lease end *(also relates to 3C)*.",
      "duplicate_of": null,
      "concept": "2B-2"
    },
    {
      "id": "P20",
      "text": "A battery database for enterprise who need data",
      "note": "Aggregated B2B battery database serving enterprises (dealers, refurbishers, insurers) that need data *(also relates to Group 2)*.",
      "duplicate_of": null,
      "concept": "1D-2"
    },
    {
      "id": "P21",
      "text": "Standardised Battery Health Score",
      "note": "Single standardized numeric score representing overall battery condition.",
      "duplicate_of": null,
      "concept": "2C-1"
    },
    {
      "id": "P22",
      "text": "Battery Testing at Bike Shops",
      "note": "In-store diagnostic testing performed at local bicycle shops.",
      "duplicate_of": null,
      "concept": "1C-1"
    },
    {
      "id": "P23",
      "text": "Mandatory Battery Health Report for Second-hand Sales",
      "note": "Regulatory mandate requiring a battery health report in second-hand e-bike transactions (similar to Car-Pass).",
      "duplicate_of": null,
      "concept": "3C-3"
    },
    {
      "id": "P24",
      "text": "Battery Health Warranty",
      "note": "Warranty covering unexpected battery capacity drop after a second-hand purchase.",
      "duplicate_of": null,
      "concept": "3C-2"
    },
    {
      "id": "P25",
      "text": "Digital Battery Health Certificate",
      "note": "Tamper-resistant digital certificate stating battery condition.",
      "duplicate_of": null,
      "concept": "2E-1"
    },
    {
      "id": "P26",
      "text": "Battery Testing app",
      "note": "Dedicated mobile application for testing or reading battery health.",
      "duplicate_of": null,
      "concept": "1B-2"
    },
    {
      "id": "P27",
      "text": "Independent Battery Testing Centres",
      "note": "Dedicated neutral testing facilities independent of bike brands or sellers.",
      "duplicate_of": null,
      "concept": "1C-1"
    },
    {
      "id": "P28",
      "text": "Manufacturer Data-sharing System",
      "note": "System enabling drive-system / battery manufacturers to share BMS health records.",
      "duplicate_of": null,
      "concept": "1D-1"
    },
    {
      "id": "P29",
      "text": "Battery Health Label",
      "note": "Standardized visual label indicating battery condition.",
      "duplicate_of": null,
      "concept": "2C-1"
    },
    {
      "id": "P30",
      "text": "Online Battery Verification Platform",
      "note": "Web platform dedicated to verifying the authenticity of battery health claims.",
      "duplicate_of": null,
      "concept": "2E-2"
    },
    {
      "id": "P31",
      "text": "QR Code Battery Report",
      "note": "Battery health report accessed via a QR code.",
      "duplicate_of": null,
      "concept": "2A-1"
    },
    {
      "id": "P32",
      "text": "Battery History Database",
      "note": "Central repository storing historical health records across a battery's lifecycle.",
      "duplicate_of": null,
      "concept": "1D-2"
    },
    {
      "id": "P33",
      "text": "Battery Replacement Cost Estimator",
      "note": "Tool calculating expected battery replacement expense.",
      "duplicate_of": null,
      "concept": "2C-3"
    },
    {
      "id": "P34",
      "text": "Comparable battery evidence tool",
      "note": "Tool normalizing different battery metrics into comparable evidence across bikes.",
      "duplicate_of": null,
      "concept": "2C-2"
    },
    {
      "id": "P35",
      "text": "Battery report interpreter",
      "note": "Tool that translates technical diagnostic printouts into plain consumer takeaways.",
      "duplicate_of": null,
      "concept": "2D-2"
    },
    {
      "id": "P36",
      "text": "Third-party Battery Certification",
      "note": "Independent certification issued by a neutral organization.",
      "duplicate_of": null,
      "concept": "2E-1"
    },
    {
      "id": "P37",
      "text": "Mobile Battery Testing Service",
      "note": "On-demand mobile van or technician performing battery checks.",
      "duplicate_of": null,
      "concept": "1C-2"
    },
    {
      "id": "P38",
      "text": "Battery Health Passport",
      "note": "Lifecycle digital passport recording battery identity and health events.",
      "duplicate_of": null,
      "concept": "2E-4"
    },
    {
      "id": "P39",
      "text": "Battery Replacement Cost Estimator",
      "note": "",
      "duplicate_of": "P33",
      "concept": "2C-3"
    },
    {
      "id": "P40",
      "text": "Battery Health Label",
      "note": "",
      "duplicate_of": "P29",
      "concept": "2C-1"
    },
    {
      "id": "#1",
      "text": "Scan-and-Know QR Code",
      "note": "Scan a code on the bike to open its latest available verified battery report; no shop visit required.",
      "duplicate_of": null,
      "concept": "2A-1"
    },
    {
      "id": "#2",
      "text": "Free Battery Health Lookup Website",
      "note": "Enter a battery ID or report number to retrieve an existing report without paying to view it.",
      "duplicate_of": null,
      "concept": "2A-2"
    },
    {
      "id": "#3",
      "text": "Battery Information in Online Advertisements",
      "note": "Show an attached battery-health report directly in a second-hand e-bike listing.",
      "duplicate_of": null,
      "concept": "2B-1"
    },
    {
      "id": "#4",
      "text": "One-Click Battery Report Sharing",
      "note": "Seller shares a verifiable report link through chat, WhatsApp or email.",
      "duplicate_of": null,
      "concept": "2A-3"
    },
    {
      "id": "#5",
      "text": "Digital Battery Health Wallet",
      "note": "Owners store past reports and share them with potential buyers at resale.",
      "duplicate_of": null,
      "concept": "2A-3"
    },
    {
      "id": "#6",
      "text": "Battery Health Chatbot",
      "note": "Upload an existing report and receive a plain-language explanation of its results and limitations.",
      "duplicate_of": null,
      "concept": "2D-2"
    },
    {
      "id": "#7",
      "text": "Battery Health Information Through SMS",
      "note": "Receive a short verified-report summary by text message without needing a smartphone.",
      "duplicate_of": null,
      "concept": "2A-2"
    },
    {
      "id": "#8",
      "text": "Universal Battery Health Information Portal",
      "note": "View available reports from different brands through one standardized website.",
      "duplicate_of": null,
      "concept": "2A-2"
    },
    {
      "id": "#9",
      "text": "Battery Health Check at Home",
      "note": "Use guided remote steps to submit compatible diagnostic data without visiting a shop.",
      "duplicate_of": null,
      "concept": "1A-4"
    },
    {
      "id": "#10",
      "text": "Battery Report at Bike Collection",
      "note": "Leasing companies provide existing reports when bikes are collected or returned.",
      "duplicate_of": null,
      "concept": "2B-2"
    },
    {
      "id": "#11",
      "text": "Battery Information at Point of Sale",
      "note": "Professional sellers show battery reports before buyers commit to a purchase.",
      "duplicate_of": null,
      "concept": "2B-1"
    },
    {
      "id": "#12",
      "text": "Information in Leasing Apps",
      "note": "View available battery-health information within the leasing app already in use.",
      "duplicate_of": null,
      "concept": "2B-2"
    },
    {
      "id": "#13",
      "text": "Workplace Bike Information Events",
      "note": "Employers arrange collective access to battery checks at work.",
      "duplicate_of": null,
      "concept": "1C-3"
    },
    {
      "id": "#14",
      "text": "Mobile Battery Information Service",
      "note": "A visiting service gathers diagnostic information or performs checks for several users locally.",
      "duplicate_of": null,
      "concept": "1C-2"
    },
    {
      "id": "#15",
      "text": "Remote Report Verification",
      "note": "Confirm report authenticity online rather than contacting or visiting its issuing shop.",
      "duplicate_of": null,
      "concept": "2E-2"
    },
    {
      "id": "#16",
      "text": "Automatic Report at End of Lease",
      "note": "Lessees receive a battery report before deciding whether to buy the bike at the end of the lease.",
      "duplicate_of": null,
      "concept": "2B-2"
    },
    {
      "id": "#17",
      "text": "Free Basic Battery Health Report",
      "note": "Provide a free basic summary of an existing report; charge only for optional advanced services.",
      "duplicate_of": null,
      "concept": "3B-1"
    },
    {
      "id": "#18",
      "text": "Seller-Paid Battery Certificate",
      "note": "One seller-funded test becomes freely accessible to all potential buyers.",
      "duplicate_of": null,
      "concept": "3B-2"
    },
    {
      "id": "#19",
      "text": "Testing Included in Lease Fees",
      "note": "Spread battery-test costs through lease arrangements instead of charging at resale.",
      "duplicate_of": null,
      "concept": "3B-3"
    },
    {
      "id": "#20",
      "text": "Group Battery Testing Discounts",
      "note": "Test several batteries in one session to lower per-bike service costs *(also relates to 3B)*.",
      "duplicate_of": null,
      "concept": "1C-3"
    },
    {
      "id": "#21",
      "text": "Employer-Funded Battery Information",
      "note": "Employers pay for checks for employees using bicycle leasing schemes.",
      "duplicate_of": null,
      "concept": "3B-3"
    },
    {
      "id": "#22",
      "text": "Marketplace-Funded Verification",
      "note": "Online marketplaces subsidize report checks as a buyer-protection feature.",
      "duplicate_of": null,
      "concept": "3B-4"
    },
    {
      "id": "#23",
      "text": "Battery Information Voucher",
      "note": "Offer discounts for testing through participating shops.",
      "duplicate_of": null,
      "concept": "3B-5"
    },
    {
      "id": "#24",
      "text": "Pay Only When the Bike Is Sold",
      "note": "Defer the seller's verification fee until a successful sale.",
      "duplicate_of": null,
      "concept": "3B-2"
    },
    {
      "id": "#25",
      "text": "Battery Health Traffic-Light System",
      "note": "Display an easy colour indicator (green/amber/red) with supporting test data and thresholds.",
      "duplicate_of": null,
      "concept": "2C-1"
    },
    {
      "id": "#26",
      "text": "Simple Battery Health Score",
      "note": "Show remaining capacity as a percentage with an explanation of what was measured.",
      "duplicate_of": null,
      "concept": "2C-1"
    },
    {
      "id": "#27",
      "text": "Battery Health Comparison Tool",
      "note": "Compare multiple bikes using the same units and report fields.",
      "duplicate_of": null,
      "concept": "2C-2"
    },
    {
      "id": "#28",
      "text": "Battery Replacement Cost Indicator",
      "note": "Show estimated replacement expense beside battery condition.",
      "duplicate_of": null,
      "concept": "2C-3"
    },
    {
      "id": "#29",
      "text": "Personalized Travel Range Calculator",
      "note": "Estimate suitability for a buyer's commute using available battery data and riding assumptions.",
      "duplicate_of": null,
      "concept": "2C-4"
    },
    {
      "id": "#30",
      "text": "Multilingual Battery Health Reports",
      "note": "Provide reports in Dutch, French and English.",
      "duplicate_of": null,
      "concept": "2C-5"
    },
    {
      "id": "#31",
      "text": "Visual Battery Health Report",
      "note": "Use charts and icons to explain capacity, test date, method and uncertainty.",
      "duplicate_of": null,
      "concept": "2C-5"
    },
    {
      "id": "#32",
      "text": "Battery Information Assistant",
      "note": "Guide buyers through missing information and useful questions to ask sellers.",
      "duplicate_of": null,
      "concept": "2D-3"
    },
    {
      "id": "#33",
      "text": "Verified Battery Health Badge",
      "note": "Display a marketplace badge only after a report has been authenticated.",
      "duplicate_of": null,
      "concept": "2E-3"
    },
    {
      "id": "#34",
      "text": "Standardized Battery Health Report",
      "note": "Use common fields, units and test methods across brands.",
      "duplicate_of": null,
      "concept": "2C-5"
    },
    {
      "id": "#35",
      "text": "Battery Report with Test Date",
      "note": "Show when a test was performed so buyers can judge how current it is.",
      "duplicate_of": null,
      "concept": "2C-5"
    },
    {
      "id": "#36",
      "text": "Buyer-Requested Information Button",
      "note": "Allow buyers to request a report from sellers in one click.",
      "duplicate_of": null,
      "concept": "3A-3"
    },
    {
      "id": "#37",
      "text": "Information Included in Ownership Transfer",
      "note": "Transfer available battery records to the buyer with appropriate authorization at the time of sale.",
      "duplicate_of": null,
      "concept": "2A-3"
    },
    {
      "id": "#38",
      "text": "Automatic Battery Health Updates",
      "note": "Compatible systems periodically update battery-health records automatically.",
      "duplicate_of": null,
      "concept": "1B-1"
    },
    {
      "id": "#39",
      "text": "Independent Report Verification Code",
      "note": "Allow buyers to verify a certificate using a unique report code.",
      "duplicate_of": null,
      "concept": "2E-2"
    },
    {
      "id": "#40",
      "text": "Integrated Battery Information Service",
      "note": "Connect testers, leasing companies, sellers and marketplaces through one access point *(also relates to Group 2)*.",
      "duplicate_of": null,
      "concept": "1D-2"
    }
  ]
};
