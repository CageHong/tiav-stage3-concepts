// 由 build_data.py 產生，不要手改
window.STAGE3_DATA = {
  "meta": {
    "title": "Stage 3: Concept Generation",
    "course": "Transport Innovation and Valorisation, UHasselt",
    "meeting": "2026-11-15",
    "revised": "2026-11-23",
    "code_note": "Concept codes renumbered on 2026-11-23 (D119); code_before_d119 holds the old code.",
    "counts": {
      "raw": 80,
      "distinct": 78,
      "concepts": 39,
      "groups": 3,
      "subgroups": 10,
      "eliminated": 6,
      "core": 20,
      "not_core": 13,
      "candidates": 3
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
      "name": "Data Collection & Generation",
      "name_zh": "取得資料"
    },
    {
      "id": "2",
      "name": "Data Processing & Delivery",
      "name_zh": "處理與傳遞"
    },
    {
      "id": "3",
      "name": "Incentives & Financing",
      "name_zh": "誘因與付費"
    }
  ],
  "subgroups": [
    {
      "id": "1A",
      "group": "1",
      "name": "Physical & Sensor-Based Measurement",
      "name_zh": "物理與感測器量測"
    },
    {
      "id": "1B",
      "group": "1",
      "name": "Connected & Software-Based Reading",
      "name_zh": "連線與軟體讀取"
    },
    {
      "id": "1C",
      "group": "1",
      "name": "On-Site, Mobile & Group Testing Services",
      "name_zh": "定點、到府與團體檢測服務"
    },
    {
      "id": "1D",
      "group": "1",
      "name": "Existing Data Source Aggregation & Databases",
      "name_zh": "既有數據源匯集與資料庫"
    },
    {
      "id": "2A",
      "group": "2",
      "name": "Delivery",
      "name_zh": "傳遞"
    },
    {
      "id": "2B",
      "group": "2",
      "name": "Translation",
      "name_zh": "轉譯"
    },
    {
      "id": "2C",
      "group": "2",
      "name": "Verification",
      "name_zh": "驗證"
    },
    {
      "id": "3A",
      "group": "3",
      "name": "Motivating Information Sharing",
      "name_zh": "促成提供資訊"
    },
    {
      "id": "3B",
      "group": "3",
      "name": "Who Pays & Pricing",
      "name_zh": "費用由誰負擔與定價"
    },
    {
      "id": "3C",
      "group": "3",
      "name": "Replacing Information with Risk-Sharing or Mandates",
      "name_zh": "以風險或強制取代資訊"
    }
  ],
  "concepts": [
    {
      "code": "1A-1",
      "code_before_d119": "1A-1",
      "name": "Smart Charger Diagnostics",
      "name_zh": "智慧充電器檢測",
      "description": "A smart charger that estimates battery health while charging, either by monitoring the electrical flow during the charge cycle or by directly reading the Battery Management System (BMS) data.",
      "description_zh": "充電時估算電池健康度的智慧充電器：監測充電過程的電流變化，或直接讀取電池管理系統（BMS）的資料。",
      "group": "1",
      "subgroup": "1A",
      "sources": [
        "P3",
        "P4"
      ],
      "criteria": [
        "M1",
        "M2",
        "M3",
        "M4",
        "M6",
        "M7",
        "N8"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "1A-2",
      "code_before_d119": "1A-2",
      "name": "Non-Invasive Physical Diagnostics",
      "name_zh": "非侵入式物理檢測",
      "description": "Detect degradation without opening the battery: infrared/thermal imaging of heat distribution to reveal internal resistance anomalies, or acoustic analysis of the electrical flow / charger sound patterns.",
      "description_zh": "不拆電池就偵測衰退：用紅外線熱成像看熱分布，找出內阻異常；或分析電流、充電器聲音的聲紋。",
      "group": "1",
      "subgroup": "1A",
      "sources": [
        "P8",
        "P9"
      ],
      "criteria": [
        "M3",
        "M6",
        "M7",
        "N1",
        "N8"
      ],
      "eliminated": null,
      "status": "not_core"
    },
    {
      "code": "1A-3",
      "code_before_d119": "1A-3",
      "name": "Self-Service Battery Check Kiosk",
      "name_zh": "自助電池檢測站",
      "description": "Standalone self-service station where users plug in a battery for an automated check.",
      "description_zh": "獨立的自助機台，使用者插上電池就自動檢測。",
      "group": "1",
      "subgroup": "1A",
      "sources": [
        "P5"
      ],
      "criteria": [
        "M1",
        "M3",
        "M4",
        "M6",
        "M7",
        "N8",
        "T3"
      ],
      "eliminated": {
        "reason": "Requires heavy physical infrastructure",
        "reason_zh": "需要重資產的實體設施"
      },
      "status": "eliminated"
    },
    {
      "code": "1A-4",
      "code_before_d119": "1A-4",
      "name": "Battery Health Check at Home",
      "name_zh": "居家電池健康檢查",
      "description": "Guided remote steps let owners submit compatible diagnostic data without visiting a shop.",
      "description_zh": "依遠端引導的步驟，車主在家提交相容的診斷資料，不用跑車行。",
      "group": "1",
      "subgroup": "1A",
      "sources": [
        "#9"
      ],
      "criteria": [
        "M1",
        "M6",
        "M7",
        "N8"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "1B-1",
      "code_before_d119": "1B-1",
      "name": "Connected Battery with Automatic Updates",
      "name_zh": "自動更新的聯網電池",
      "description": "IoT-connected batteries automatically transmit health data to the cloud, so compatible systems keep battery-health records updated periodically without user action.",
      "description_zh": "電池聯網（IoT），自動把健康度資料傳到雲端，相容的系統定期更新紀錄，使用者不用動手。",
      "group": "1",
      "subgroup": "1B",
      "sources": [
        "P2",
        "#38"
      ],
      "criteria": [
        "M1",
        "M3",
        "T1"
      ],
      "eliminated": {
        "reason": "Requires mandatory cooperation from drive-system manufacturers",
        "reason_zh": "需要系統廠強制配合（電池要改成聯網）"
      },
      "status": "eliminated"
    },
    {
      "code": "1B-2",
      "code_before_d119": "1B-2",
      "name": "Battery Testing App",
      "name_zh": "電池檢測 App",
      "description": "Dedicated mobile application for testing or reading battery health.",
      "description_zh": "專門用來檢測或讀取電池健康度的手機 App。",
      "group": "1",
      "subgroup": "1B",
      "sources": [
        "P26"
      ],
      "criteria": [
        "M1",
        "M6",
        "M7",
        "N8"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "1C-1",
      "code_before_d119": "1C-1",
      "name": "Fixed-Site Testing (Bike Shops & Independent Centres)",
      "name_zh": "定點檢測（車行與獨立檢測中心）",
      "description": "In-store diagnostic testing at local bicycle shops, or at dedicated testing facilities that are independent of bike brands and sellers to guarantee neutrality.",
      "description_zh": "在在地車行做診斷檢測，或在獨立於品牌和賣家的檢測機構檢測，確保中立。",
      "group": "1",
      "subgroup": "1C",
      "sources": [
        "P22",
        "P27"
      ],
      "criteria": [
        "M2",
        "M3",
        "M6",
        "M7",
        "N8",
        "T3"
      ],
      "eliminated": null,
      "status": "not_core"
    },
    {
      "code": "1C-2",
      "code_before_d119": "1C-2",
      "name": "Mobile & On-Demand Testing",
      "name_zh": "到府與隨叫檢測",
      "description": "An on-demand van or technician performs checks locally, possibly for several users in one visit; one variant partners with food-delivery couriers to perform quick 5-minute doorstep battery checks.",
      "description_zh": "檢測車或技師到現場檢測，一次可服務多位使用者；其中一種做法是和外送員合作，送餐順路做 5 分鐘到府檢測。",
      "group": "1",
      "subgroup": "1C",
      "sources": [
        "P37",
        "#14",
        "P6"
      ],
      "criteria": [
        "M1",
        "M3",
        "M6",
        "M7",
        "N8"
      ],
      "eliminated": null,
      "status": "not_core"
    },
    {
      "code": "1C-3",
      "code_before_d119": "1C-3",
      "name": "Group & Workplace Testing",
      "name_zh": "團體與職場檢測",
      "description": "Employers arrange collective battery-check events at work, and testing several batteries in one session lowers the per-bike service cost (also relates to 3B).",
      "description_zh": "雇主在公司辦集體電池檢測活動，一次量多顆電池，降低每台的服務成本（也和「誰付錢」相關）。",
      "group": "1",
      "subgroup": "1C",
      "sources": [
        "#13",
        "#20"
      ],
      "criteria": [
        "M1",
        "M3",
        "M6",
        "M7",
        "N10",
        "N8"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "1D-1",
      "code_before_d119": "1D-1",
      "name": "Data-Sharing Partnerships",
      "name_zh": "資料共享合作",
      "description": "Pool battery data from parties that already hold it: real-world degradation and usage datasets from shared e-bike operators, diagnostic data from dealers' routine maintenance and trade-ins, and BMS health records shared by drive-system / battery manufacturers.",
      "description_zh": "匯集已經掌握電池資料的單位：共享電動車業者的實際衰退與使用資料、車行例行保養與收車時的診斷資料、系統廠或電池廠分享的 BMS 健康紀錄。",
      "group": "1",
      "subgroup": "1D",
      "sources": [
        "P13",
        "P14",
        "P28"
      ],
      "criteria": [
        "M2",
        "T1"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "1D-2",
      "code_before_d119": "1D-2",
      "name": "Central Battery History Database & Integrated Service",
      "name_zh": "中央電池歷史資料庫與整合服務",
      "description": "A central repository storing a battery's health records across its lifecycle, offered as a B2B database to enterprises that need data (dealers, refurbishers, insurers) and acting as one access point connecting testers, leasing companies, sellers and marketplaces (also relates to Group 2).",
      "description_zh": "儲存一顆電池整個生命週期健康紀錄的中央資料庫，以 B2B 資料庫賣給需要資料的企業（車行、翻新商、保險公司），也作為串連檢測者、租賃公司、賣家和平台的單一入口（也和分享轉譯組相關）。",
      "group": "1",
      "subgroup": "1D",
      "sources": [
        "P32",
        "P20",
        "#40"
      ],
      "criteria": [
        "BM",
        "M1",
        "N8",
        "T1"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "2A-1",
      "code_before_d119": "2A-1",
      "name": "QR Code Battery Report",
      "name_zh": "QR Code 電池報告",
      "description": "Scan a code on the bike to open its latest available verified battery report, with no shop visit required.",
      "description_zh": "掃車上的 QR Code，就能打開最新一份經驗證的電池報告，不用跑車行。",
      "group": "2",
      "subgroup": "2A",
      "sources": [
        "P31",
        "#1"
      ],
      "criteria": [
        "M1",
        "M3"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "2A-2",
      "code_before_d119": "2A-2",
      "name": "Battery Health Lookup Portal (incl. SMS)",
      "name_zh": "電池健康查詢入口（含簡訊）",
      "description": "One standardized website showing available reports from different brands; anyone can enter a battery ID or report number to retrieve an existing report free of charge, or receive a short verified summary by SMS without needing a smartphone.",
      "description_zh": "一個標準化網站，顯示不同品牌現有的報告；任何人輸入電池序號或報告編號就能免費查到既有報告，沒有智慧型手機也能用簡訊收到經驗證的摘要。",
      "group": "2",
      "subgroup": "2A",
      "sources": [
        "#2",
        "#8",
        "#7"
      ],
      "criteria": [
        "M1",
        "M3",
        "M4",
        "N8"
      ],
      "eliminated": null,
      "status": "not_core"
    },
    {
      "code": "2A-3",
      "code_before_d119": "2A-3",
      "name": "Owner-Controlled Report Sharing & Transfer",
      "name_zh": "車主自管的報告分享與轉移",
      "description": "Owners store past reports in a digital wallet, share a verifiable report link with potential buyers through chat, WhatsApp or email, and transfer the battery records to the buyer with appropriate authorization at the time of sale.",
      "description_zh": "車主把過去的報告存在數位錢包，透過聊天軟體、WhatsApp 或 email 把可驗證的報告連結分享給買家，成交時經授權把電池紀錄轉給買家。",
      "group": "2",
      "subgroup": "2A",
      "sources": [
        "#4",
        "#5",
        "#37"
      ],
      "criteria": [
        "M1",
        "M3",
        "M6",
        "M9",
        "T1"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "2A-4",
      "code_before_d119": "2B-1",
      "name": "Battery Report at the Moment of Purchase",
      "name_zh": "購買當下的電池報告",
      "description": "Place evidence where the buying decision happens: a browser extension or platform plug-in embedded in second-hand e-bike marketplaces, a battery-health report attached directly to online listings, and professional sellers showing reports before buyers commit.",
      "description_zh": "把證據放在做購買決定的地方：二手平台上的瀏覽器擴充或外掛、刊登頁面直接附報告、專業賣家在買家決定前出示報告。",
      "group": "2",
      "subgroup": "2A",
      "sources": [
        "P15",
        "#3",
        "#11"
      ],
      "criteria": [
        "M1",
        "M6",
        "N7"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "2A-5",
      "code_before_d119": "2B-2",
      "name": "End-of-Lease & Leasing Battery Report",
      "name_zh": "租約到期與租賃電池報告",
      "description": "Leasing companies provide existing reports when bikes are collected or returned, show battery information inside the leasing app already in use, and send lessees a report before they decide whether to buy the bike at lease end; this can be backed by a policy or contractual rule requiring leasing companies to track and disclose battery health (also relates to 3C).",
      "description_zh": "租賃公司在收車或還車時提供既有報告，在既有的租賃 App 裡顯示電池資訊，並在承租人決定是否買斷前寄送報告；可用政策或合約規定租賃公司追蹤並揭露電池健康度（也和法規強制相關）。",
      "group": "2",
      "subgroup": "2A",
      "sources": [
        "#10",
        "#12",
        "#16",
        "P19"
      ],
      "criteria": [
        "M1",
        "N10"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "2B-1",
      "code_before_d119": "2C-1",
      "name": "Standardised Battery Health Score & Label",
      "name_zh": "標準化電池健康分數與標籤",
      "description": "A single standardized score turned into an intuitive label: a Nutri-Score-style A–E grade, a visual condition label, a green/amber/red traffic light with supporting test data and thresholds, or remaining capacity as a percentage with an explanation of what was measured.",
      "description_zh": "把單一標準分數轉成直覺的標籤：類似 Nutri-Score 的 A–E 等級、視覺化狀態標籤、附檢測資料與門檻的紅黃綠燈，或剩餘容量百分比並說明量了什麼。",
      "group": "2",
      "subgroup": "2B",
      "sources": [
        "P10",
        "P29",
        "P40",
        "#25",
        "P21",
        "#26"
      ],
      "criteria": [
        "M4",
        "M5",
        "N2"
      ],
      "eliminated": null,
      "status": "not_core"
    },
    {
      "code": "2B-2",
      "code_before_d119": "2C-2",
      "name": "Battery Health Comparison Tool",
      "name_zh": "電池健康比較工具",
      "description": "Normalizes different battery metrics into comparable evidence so multiple bikes can be compared using the same units and report fields.",
      "description_zh": "把不同的電池指標正規化成可比較的形式，讓多台車用相同的單位和報告欄位比較。",
      "group": "2",
      "subgroup": "2B",
      "sources": [
        "P34",
        "#27"
      ],
      "criteria": [
        "M4",
        "M5",
        "N8"
      ],
      "eliminated": null,
      "status": "not_core"
    },
    {
      "code": "2B-3",
      "code_before_d119": "2C-3",
      "name": "Battery Replacement Cost Estimator",
      "name_zh": "電池更換成本估算",
      "description": "Calculates the expected battery replacement expense and shows it beside the battery condition.",
      "description_zh": "算出預期的換電池費用，顯示在電池狀況旁邊。",
      "group": "2",
      "subgroup": "2B",
      "sources": [
        "P33",
        "P39",
        "#28"
      ],
      "criteria": [
        "M5"
      ],
      "eliminated": null,
      "status": "not_core"
    },
    {
      "code": "2B-4",
      "code_before_d119": "2C-4",
      "name": "Personalized Travel Range Calculator",
      "name_zh": "個人化續航計算",
      "description": "Estimates whether the bike suits a buyer's commute using available battery data and riding assumptions.",
      "description_zh": "用現有的電池資料和騎乘假設，估算這台車適不適合買家的通勤。",
      "group": "2",
      "subgroup": "2B",
      "sources": [
        "#29"
      ],
      "criteria": [
        "M5"
      ],
      "eliminated": null,
      "status": "not_core"
    },
    {
      "code": "2B-5",
      "code_before_d119": "2C-5",
      "name": "Standardized, Visual & Multilingual Report Format",
      "name_zh": "標準化、視覺化、多語報告格式",
      "description": "A common report template with shared fields, units and test methods across brands; charts and icons explaining capacity, method and uncertainty; a clearly shown test date so buyers can judge how current it is; available in Dutch, French and English.",
      "description_zh": "跨品牌共用的報告範本，欄位、單位和檢測方法一致；用圖表和圖示說明容量、方法與不確定性；清楚標出檢測日期讓買家判斷新舊；提供荷、法、英文版。",
      "group": "2",
      "subgroup": "2B",
      "sources": [
        "#34",
        "#31",
        "#35",
        "#30"
      ],
      "criteria": [
        "M3",
        "M4",
        "M5",
        "N2",
        "N8"
      ],
      "eliminated": null,
      "status": "not_core"
    },
    {
      "code": "2B-6",
      "code_before_d119": "2D-2",
      "name": "Battery Report Interpreter / Chatbot",
      "name_zh": "電池報告解讀聊天機器人",
      "description": "Upload an existing report or technical diagnostic printout and receive plain-language takeaways, including the results and their limitations.",
      "description_zh": "上傳既有報告或技術診斷單，得到白話的重點，包含結果和它的限制。",
      "group": "2",
      "subgroup": "2B",
      "sources": [
        "P35",
        "#6"
      ],
      "criteria": [
        "M5",
        "N2"
      ],
      "eliminated": null,
      "status": "not_core"
    },
    {
      "code": "2B-7",
      "code_before_d119": "2D-3",
      "name": "Battery Information Assistant",
      "name_zh": "電池資訊助理",
      "description": "Guides buyers through missing information and suggests useful questions to ask sellers.",
      "description_zh": "引導買家找出缺少的資訊，建議可以問賣家的問題。",
      "group": "2",
      "subgroup": "2B",
      "sources": [
        "#32"
      ],
      "criteria": [
        "NONE"
      ],
      "eliminated": {
        "reason": "Does not address any criterion in the need specification",
        "reason_zh": "不對應任何 criterion"
      },
      "status": "eliminated"
    },
    {
      "code": "2C-1",
      "code_before_d119": "2E-1",
      "name": "Digital & Third-Party Battery Certificate",
      "name_zh": "數位第三方電池證書",
      "description": "A tamper-resistant digital certificate stating battery condition, issued by an independent, neutral organization.",
      "description_zh": "由獨立、中立機構簽發、防竄改的數位證書，載明電池狀況。",
      "group": "2",
      "subgroup": "2C",
      "sources": [
        "P25",
        "P36"
      ],
      "criteria": [
        "M3",
        "N8",
        "T3"
      ],
      "eliminated": null,
      "status": "not_core"
    },
    {
      "code": "2C-2",
      "code_before_d119": "2E-2",
      "name": "Online Report Verification",
      "name_zh": "線上報告驗證",
      "description": "A web platform where buyers confirm the authenticity of a battery-health claim online using a unique report code, instead of contacting or visiting the issuing shop.",
      "description_zh": "買家在網站上用唯一的報告編號確認電池健康聲明的真偽，不用聯絡或跑一趟出具報告的店。",
      "group": "2",
      "subgroup": "2C",
      "sources": [
        "P30",
        "#15",
        "#39"
      ],
      "criteria": [
        "M3"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "2C-3",
      "code_before_d119": "2E-3",
      "name": "Verified Battery Health Badge",
      "name_zh": "電池健康認證徽章",
      "description": "A marketplace badge displayed only after a report has been authenticated.",
      "description_zh": "報告通過驗證後，才在二手平台上顯示的徽章。",
      "group": "2",
      "subgroup": "2C",
      "sources": [
        "#33"
      ],
      "criteria": [
        "M3",
        "M6",
        "N7"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "2C-4",
      "code_before_d119": "2E-4",
      "name": "Battery Health Passport",
      "name_zh": "電池健康護照",
      "description": "A lifecycle digital passport recording battery identity and health events.",
      "description_zh": "記錄電池身分與健康事件的生命週期數位護照。",
      "group": "2",
      "subgroup": "2C",
      "sources": [
        "P38"
      ],
      "criteria": [
        "M3",
        "T1"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "3A-1",
      "code_before_d119": "3A-1",
      "name": "Battery Community & Gamification",
      "name_zh": "電池社群與遊戲化",
      "description": "A social network where e-bike owners share and benchmark battery health data, with gamified mechanics (rankings, streaks, challenges) encouraging ongoing tracking and sharing.",
      "description_zh": "車主分享並比較電池健康資料的社群網路，用排行、連續紀錄、挑戰等遊戲機制鼓勵持續追蹤和分享。",
      "group": "3",
      "subgroup": "3A",
      "sources": [
        "P1",
        "P17"
      ],
      "criteria": [
        "BM",
        "M1",
        "T1"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "3A-2",
      "code_before_d119": "3A-2",
      "name": "Give-to-Get Data Credits",
      "name_zh": "以分享換取點數",
      "description": "Every time owners share their battery data they earn credits that unlock reports on other bikes.",
      "description_zh": "車主每分享一次電池資料就得到點數，可以解鎖其他車的報告。",
      "group": "3",
      "subgroup": "3A",
      "sources": [
        "P16"
      ],
      "criteria": [
        "BM",
        "M1"
      ],
      "eliminated": null,
      "status": "not_core"
    },
    {
      "code": "3A-3",
      "code_before_d119": "3A-3",
      "name": "Buyer-Initiated Report Request",
      "name_zh": "買家發起的報告請求",
      "description": "Buyers prompt sellers to disclose battery health, either with a one-click request button or by placing a bid / bounty on the bike.",
      "description_zh": "買家促使賣家揭露電池健康度：按一鍵請求，或對這台車出價、懸賞。",
      "group": "3",
      "subgroup": "3A",
      "sources": [
        "P12",
        "#36"
      ],
      "criteria": [
        "BM",
        "M1",
        "M6"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "3A-4",
      "code_before_d119": "2D-1",
      "name": "Personified Battery (AI Agent / Digital Pet)",
      "name_zh": "擬人化電池（AI 代理人／電子寵物）",
      "description": "Turn each battery into something you can interact with: a conversational AI digital twin that buyers and owners can question directly, or a Tamagotchi-style virtual pet reflecting the battery's state and care habits (its AI Q&A function is covered by 2B-6 Battery Report Interpreter / Chatbot).",
      "description_zh": "把每顆電池變成可以互動的對象：買家和車主可以直接問問題的 AI 數位分身，或反映電池狀態與保養習慣的電子雞式虛擬寵物（也和社群誘因相關）。（AI 問答的功能由轉譯組的「報告解讀聊天機器人」負責。）",
      "group": "3",
      "subgroup": "3A",
      "sources": [
        "P7",
        "P18"
      ],
      "criteria": [
        "BM",
        "M5"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "3B-1",
      "code_before_d119": "3B-1",
      "name": "Free Basic Battery Health Report",
      "name_zh": "免費基本電池健康報告",
      "description": "A free basic summary of an existing report; charge only for optional advanced services.",
      "description_zh": "既有報告的免費基本摘要；只有選用的進階服務收費。",
      "group": "3",
      "subgroup": "3B",
      "sources": [
        "#17"
      ],
      "criteria": [
        "BM",
        "M1"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "3B-2",
      "code_before_d119": "3B-2",
      "name": "Seller-Paid Certificate with Deferred Payment",
      "name_zh": "賣家付費、延後付款的證書",
      "description": "One seller-funded test becomes freely accessible to all potential buyers, and the seller's verification fee can be deferred until the bike is successfully sold.",
      "description_zh": "賣家出錢做一次檢測，所有潛在買家都能免費看；賣家的驗證費可以延到車賣出後再付。",
      "group": "3",
      "subgroup": "3B",
      "sources": [
        "#18",
        "#24"
      ],
      "criteria": [
        "BM",
        "M1",
        "M6"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "3B-3",
      "code_before_d119": "3B-3",
      "name": "Lease- & Employer-Funded Testing",
      "name_zh": "租賃與雇主出資檢測",
      "description": "Battery-test costs are spread through lease fees instead of being charged at resale, or employers pay for checks for employees in bicycle leasing schemes.",
      "description_zh": "檢測費攤進租金，不在轉賣時收；或由雇主替參加自行車租賃方案的員工付檢測費。",
      "group": "3",
      "subgroup": "3B",
      "sources": [
        "#19",
        "#21"
      ],
      "criteria": [
        "BM",
        "M1",
        "N10"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "3B-4",
      "code_before_d119": "3B-4",
      "name": "Marketplace-Funded Verification",
      "name_zh": "平台出資驗證",
      "description": "Online marketplaces subsidize report checks as a buyer-protection feature.",
      "description_zh": "二手平台補貼報告驗證，當作買家保障功能。",
      "group": "3",
      "subgroup": "3B",
      "sources": [
        "#22"
      ],
      "criteria": [
        "BM",
        "M1",
        "M6"
      ],
      "eliminated": null,
      "status": "core"
    },
    {
      "code": "3B-5",
      "code_before_d119": "3B-5",
      "name": "Battery Information Voucher",
      "name_zh": "電池資訊折價券",
      "description": "Discounts for testing through participating shops.",
      "description_zh": "在合作車行檢測可以打折。",
      "group": "3",
      "subgroup": "3B",
      "sources": [
        "#23"
      ],
      "criteria": [
        "BM",
        "M1"
      ],
      "eliminated": null,
      "status": "not_core"
    },
    {
      "code": "3C-1",
      "code_before_d119": "3C-1",
      "name": "Pay-as-You-Ride Battery Pricing",
      "name_zh": "依里程付費的電池定價",
      "description": "Buyers pay only part of the battery price upfront and the rest based on the distance they ride.",
      "description_zh": "買家先付部分電池價格，其餘依騎乘里程付。",
      "group": "3",
      "subgroup": "3C",
      "sources": [
        "P11"
      ],
      "criteria": [
        "BM",
        "N9"
      ],
      "eliminated": {
        "reason": "Only shifts risk; provides no battery information",
        "reason_zh": "只轉移風險，不提供電池資訊"
      },
      "status": "eliminated"
    },
    {
      "code": "3C-2",
      "code_before_d119": "3C-2",
      "name": "Battery Health Warranty",
      "name_zh": "電池健康保固",
      "description": "Warranty covering an unexpected battery capacity drop after a second-hand purchase.",
      "description_zh": "保障二手購買後電池容量意外下降的保固。",
      "group": "3",
      "subgroup": "3C",
      "sources": [
        "P24"
      ],
      "criteria": [
        "BM",
        "N9"
      ],
      "eliminated": {
        "reason": "Only shifts risk; provides no battery information",
        "reason_zh": "只轉移風險，不提供電池資訊"
      },
      "status": "eliminated"
    },
    {
      "code": "3C-3",
      "code_before_d119": "3C-3",
      "name": "Mandatory Battery Health Report for Second-Hand Sales",
      "name_zh": "二手交易強制附電池健康報告",
      "description": "Regulatory mandate requiring a battery health report in second-hand e-bike transactions, similar to Car-Pass.",
      "description_zh": "立法要求二手 e-bike 交易附電池健康報告，類似汽車的 Car-Pass。",
      "group": "3",
      "subgroup": "3C",
      "sources": [
        "P23"
      ],
      "criteria": [
        "M1",
        "M6"
      ],
      "eliminated": {
        "reason": "Requires new legislation",
        "reason_zh": "需要修法或新法規"
      },
      "status": "eliminated"
    }
  ],
  "candidates": [
    {
      "id": 1,
      "name": "Workplace-First Battery Testing",
      "name_zh": "職場起步的電池檢測（暫名）",
      "target": "Starts in closed fleets (leasing companies) and expands step by step to the private second-hand market",
      "members": [
        "1A-1",
        "1B-2",
        "1C-3",
        "1D-1",
        "2A-5",
        "2A-3",
        "2C-2",
        "3A-1",
        "3A-4",
        "3B-3"
      ],
      "related": [],
      "collection": "Employees in a bike-leasing scheme get a measurement adapter that works with the original charger (1A-1, 1B-2), with testing organised through the employer (1C-3). Every battery is measured with the same method (SoH = measured capacity ÷ rated capacity), which makes reports comparable across brands. Dealer diagnostics from routine maintenance (1D-1) serve as a cross-check.",
      "sharing_funding": "Lessees receive the report before the lease-end buyout decision (2A-5) and can carry it to the next owner through owner-controlled sharing and transfer (2A-3); buyers check a report's authenticity online (2C-2). An internal game with a battery pet keeps employees measuring and builds a health history (3A-1, 3A-4). Leasing companies and employers fund the testing (3B-3). Expansion path: leasing companies → other closed fleets (logistics, sharing) → delivery couriers → the private market."
    },
    {
      "id": 2,
      "name": "Marketplace Trust Plug-in & Buyer Bounty",
      "name_zh": "二手平台信任外掛＋買家懸賞",
      "target": "Targets private sales on 2dehands.be & point of sale",
      "members": [
        "2A-4",
        "2C-3",
        "3A-3",
        "1A-4",
        "3B-4",
        "3B-2"
      ],
      "related": [
        "2B-6",
        "2B-2"
      ],
      "collection": "Sellers complete guided home diagnostic steps (1A-4) or upload existing dealer printouts translated by the AI interpreter (2B-6).",
      "sharing_funding": "Embedded directly in online listings (2A-4) with a Verified Badge (2C-3) and cross-bike comparison (2B-2). For unlisted batteries, buyers click a 1-click request or place a micro-bounty (3A-3) to prompt seller disclosure; fee deferred until sale (3B-2) or subsidized by marketplace (3B-4)."
    },
    {
      "id": 3,
      "name": "QR Battery Health Passport & Central Lifecycle DB",
      "name_zh": "QR 電池健康護照＋中央生命週期資料庫",
      "target": "Targets cross-brand standardization & B2B data access",
      "members": [
        "2C-4",
        "1D-2",
        "2A-1",
        "2A-3",
        "1D-1",
        "3B-1"
      ],
      "related": [
        "2A-2"
      ],
      "collection": "Aggregates partner dealer maintenance checks (1D-1), home checks, and post-2027 EU passport records into a central database (1D-2) tied to battery ID.",
      "sharing_funding": "Tamper-evident QR code on the battery (2A-1) + owner digital wallet (2A-3). Buyers scan the QR or query the portal/SMS (2A-2) for free (3B-1); records transfer on resale. Monetized via B2B database access (1D-2) for dealers, refurbishers, and insurers."
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
      "concept": "3A-4"
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
      "concept": "2B-1"
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
      "concept": "2A-4"
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
      "concept": "3A-4"
    },
    {
      "id": "P19",
      "text": "Lease end policy that ask lease company to track and share data with lessee in the end point of the lease period",
      "note": "Policy or contractual rule requiring leasing companies to track and disclose battery health to lessees at lease end *(also relates to 3C)*.",
      "duplicate_of": null,
      "concept": "2A-5"
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
      "concept": "2B-1"
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
      "concept": "2C-1"
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
      "concept": "2B-1"
    },
    {
      "id": "P30",
      "text": "Online Battery Verification Platform",
      "note": "Web platform dedicated to verifying the authenticity of battery health claims.",
      "duplicate_of": null,
      "concept": "2C-2"
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
      "concept": "2B-3"
    },
    {
      "id": "P34",
      "text": "Comparable battery evidence tool",
      "note": "Tool normalizing different battery metrics into comparable evidence across bikes.",
      "duplicate_of": null,
      "concept": "2B-2"
    },
    {
      "id": "P35",
      "text": "Battery report interpreter",
      "note": "Tool that translates technical diagnostic printouts into plain consumer takeaways.",
      "duplicate_of": null,
      "concept": "2B-6"
    },
    {
      "id": "P36",
      "text": "Third-party Battery Certification",
      "note": "Independent certification issued by a neutral organization.",
      "duplicate_of": null,
      "concept": "2C-1"
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
      "concept": "2C-4"
    },
    {
      "id": "P39",
      "text": "Battery Replacement Cost Estimator",
      "note": "",
      "duplicate_of": "P33",
      "concept": "2B-3"
    },
    {
      "id": "P40",
      "text": "Battery Health Label",
      "note": "",
      "duplicate_of": "P29",
      "concept": "2B-1"
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
      "concept": "2A-4"
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
      "concept": "2B-6"
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
      "concept": "2A-5"
    },
    {
      "id": "#11",
      "text": "Battery Information at Point of Sale",
      "note": "Professional sellers show battery reports before buyers commit to a purchase.",
      "duplicate_of": null,
      "concept": "2A-4"
    },
    {
      "id": "#12",
      "text": "Information in Leasing Apps",
      "note": "View available battery-health information within the leasing app already in use.",
      "duplicate_of": null,
      "concept": "2A-5"
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
      "concept": "2C-2"
    },
    {
      "id": "#16",
      "text": "Automatic Report at End of Lease",
      "note": "Lessees receive a battery report before deciding whether to buy the bike at the end of the lease.",
      "duplicate_of": null,
      "concept": "2A-5"
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
      "concept": "2B-1"
    },
    {
      "id": "#26",
      "text": "Simple Battery Health Score",
      "note": "Show remaining capacity as a percentage with an explanation of what was measured.",
      "duplicate_of": null,
      "concept": "2B-1"
    },
    {
      "id": "#27",
      "text": "Battery Health Comparison Tool",
      "note": "Compare multiple bikes using the same units and report fields.",
      "duplicate_of": null,
      "concept": "2B-2"
    },
    {
      "id": "#28",
      "text": "Battery Replacement Cost Indicator",
      "note": "Show estimated replacement expense beside battery condition.",
      "duplicate_of": null,
      "concept": "2B-3"
    },
    {
      "id": "#29",
      "text": "Personalized Travel Range Calculator",
      "note": "Estimate suitability for a buyer's commute using available battery data and riding assumptions.",
      "duplicate_of": null,
      "concept": "2B-4"
    },
    {
      "id": "#30",
      "text": "Multilingual Battery Health Reports",
      "note": "Provide reports in Dutch, French and English.",
      "duplicate_of": null,
      "concept": "2B-5"
    },
    {
      "id": "#31",
      "text": "Visual Battery Health Report",
      "note": "Use charts and icons to explain capacity, test date, method and uncertainty.",
      "duplicate_of": null,
      "concept": "2B-5"
    },
    {
      "id": "#32",
      "text": "Battery Information Assistant",
      "note": "Guide buyers through missing information and useful questions to ask sellers.",
      "duplicate_of": null,
      "concept": "2B-7"
    },
    {
      "id": "#33",
      "text": "Verified Battery Health Badge",
      "note": "Display a marketplace badge only after a report has been authenticated.",
      "duplicate_of": null,
      "concept": "2C-3"
    },
    {
      "id": "#34",
      "text": "Standardized Battery Health Report",
      "note": "Use common fields, units and test methods across brands.",
      "duplicate_of": null,
      "concept": "2B-5"
    },
    {
      "id": "#35",
      "text": "Battery Report with Test Date",
      "note": "Show when a test was performed so buyers can judge how current it is.",
      "duplicate_of": null,
      "concept": "2B-5"
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
      "concept": "2C-2"
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
