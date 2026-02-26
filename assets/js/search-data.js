// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/type";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A list of projects that I am (or was) involved throughout the years",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-vitae",
          title: "Vitae",
          description: "A PDF version of my CVs",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-datasets",
          title: "Datasets",
          description: "Available datasets",
          section: "Navigation",
          handler: () => {
            window.location.href = "/dataset/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/newspage/";
          },
        },{id: "datasets-human-body-tracking-walking-actions-dataset",
          title: 'Human Body Tracking - Walking Actions Dataset',
          description: "A dataset of body tracking information captured using two Azure Kinect sensors",
          section: "Datasets",handler: () => {
              window.location.href = "/datasets/body_tracking/";
            },},{id: "datasets-data-drift-streetlight-images-dataset",
          title: 'Data Drift Streetlight Images Dataset',
          description: "~526k JPEG images of streetlight columns showing data drift across time.",
          section: "Datasets",handler: () => {
              window.location.href = "/datasets/data_drift/";
            },},{id: "datasets-flourish-car-trials-dataset-1",
          title: 'FLOURISH Car Trials Dataset 1',
          description: "A dataset of ~50M exchanged CAMs.",
          section: "Datasets",handler: () => {
              window.location.href = "/datasets/flourish1/";
            },},{id: "datasets-flourish-car-trials-dataset-2",
          title: 'FLOURISH Car Trials Dataset 2',
          description: "A large-scale dataset of ETSI ITS-G5 DSRC measurements.",
          section: "Datasets",handler: () => {
              window.location.href = "/datasets/flourish2/";
            },},{id: "datasets-multi-sensor-multi-device-indoor-environmental-dataset",
          title: 'Multi-sensor, Multi-device Indoor Environmental Dataset',
          description: "Raw environmental sensor data from a deployment in an indoor office area.",
          section: "Datasets",handler: () => {
              window.location.href = "/datasets/multisensor_multidevice/";
            },},{id: "datasets-public-streetlight-images-dataset",
          title: 'Public Streetlight Images Dataset',
          description: "~350k JPEG images of streetlight columns installed on a public road infrastructure located in the city of Bristol, UK.",
          section: "Datasets",handler: () => {
              window.location.href = "/datasets/streetcare/";
            },},{id: "datasets-container-escape-detection",
          title: 'Container Escape Detection',
          description: "Two container escape malicious scenarios.",
          section: "Datasets",handler: () => {
              window.location.href = "/datasets/synergia/";
            },},{id: "news-my-paper-parallel-implementation-of-the-omnet-inet-framework-for-v2x-communications-won-the-ieee-popularity-award-at-ieee-vnc-2018-check-this-out",
          title: 'My paper “Parallel Implementation of the OMNeT++ INET Framework for V2X Communications” won...',
          description: "",
          section: "News",},{id: "news-my-paper-agile-data-offloading-over-novel-fog-computing-infrastructure-for-cavs-won-the-ieee-best-paper-award-at-ieee-vtc-spring-2019-check-this-out",
          title: 'My paper “Agile Data Offloading over Novel Fog Computing Infrastructure for CAVs” won...',
          description: "",
          section: "News",},{id: "news-from-today-i-start-my-new-role-as-a-research-engineer-with-toshiba-europe-limited-very-excited-for-that",
          title: 'From today, I start my new role as a Research Engineer with Toshiba...',
          description: "",
          section: "News",},{id: "news-my-new-website-is-online",
          title: 'My new website is online!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/new_website/";
            },},{id: "news-drive-simulation-framework-is-available-on-github",
          title: 'DRIVE simulation framework is available on GitHub!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/drive/";
            },},{id: "news-new-role-folks-from-today-i-hold-the-position-of-senior-research-engineer-with-toshiba-s-bristol-research-and-innovation-laboratory",
          title: 'New role folks! From today I hold the position of Senior Research Engineer...',
          description: "",
          section: "News",},{id: "news-some-more-great-news-as-of-today-i-hold-the-role-of-principal-research-engineer-with-toshiba-s-bristol-research-and-innovation-laboratory",
          title: 'Some more great news! As of today I hold the role of Principal...',
          description: "",
          section: "News",},{id: "news-very-pleased-that-umbrella-won-the-connected-britain-s-industrial-innovation-award-for-2022-such-a-big-achievement-and-deligthed-seeing-the-culminations-of-my-hard-work-paying-off",
          title: 'Very pleased that UMBRELLA won the Connected Britain’s Industrial Innovation Award for 2022!...',
          description: "",
          section: "News",},{id: "news-attending-ieee-ccnc-2023-at-las-vegas-two-papers-presented-and-a-panel-discussion",
          title: 'Attending IEEE CCNC 2023 at Las Vegas! Two papers presented and a panel...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/panel/";
            },},{id: "news-attending-ieee-cscn-2023-at-munich-germany-let-39-s-discuss-about-sustainability-in-ml-and-o-ran",
          title: 'Attending IEEE CSCN 2023 at Munich, Germany! Let&amp;#39;s discuss about sustainability in ML...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/cscn2023/";
            },},{id: "news-this-is-my-first-day-as-a-lead-5g-future-networks-technologist-at-digital-catapult-in-london-uk-hooray",
          title: 'This is my first day as a Lead 5G/Future Networks Technologist at Digital...',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-at-ieee-percom-2024-check-them-out",
          title: 'Two papers accepted at IEEE PerCom 2024! Check them out!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/percom/";
            },},{id: "news-i-am-attending-a-panel-discusison-on-6g-technology-roadmap-at-ieee-6g-summit-at-leeds-uk-hope-to-see-you-there",
          title: 'I am attending a panel discusison on “6G Technology Roadmap” at IEEE 6G...',
          description: "",
          section: "News",},{id: "news-very-thrilled-that-reason-open-networks-project-has-won-the-ai-award-for-high-tech-amp-amp-telecom-at-the-national-ai-awards-2024-check-out-this-link-for-more-details",
          title: 'Very thrilled that REASON Open Networks Project, has won the AI Award for...',
          description: "",
          section: "News",},{id: "news-i-am-co-hosting-emerge-2024-workshop-collocated-with-this-year-s-ewsn-2024-see-you-there",
          title: 'I am co-hosting EMERGE 2024 Workshop, collocated with this year’s EWSN 2024. See...',
          description: "",
          section: "News",},{id: "news-what-a-great-event-connected-futures-at-digital-catapult-s-offices-was-a-great-success-and-our-demonstrations-were-greatly-perceived-check-this-out",
          title: 'What a great event! Connected Futures at Digital Catapult’s offices was a great...',
          description: "",
          section: "News",},{id: "news-paper-alert-our-in-house-built-cloud-native-and-intent-based-orchestrator-is-publicly-available-you-can-find-the-paper-on-arxiv",
          title: 'Paper alert… Our in-house built cloud-native and intent-based orchestrator is publicly available! You...',
          description: "",
          section: "News",},{id: "news-we-investigated-discriminative-and-generative-ai-energy-consumption-and-uncover-surprising-insights-for-greener-mlops-and-genops-read-more-in-our-paper",
          title: 'We investigated Discriminative and Generative AI energy consumption, and uncover surprising insights for...',
          description: "",
          section: "News",},{id: "news-after-last-year-s-success-i-am-co-hosting-again-emerge-2025-workshop-collocated-with-ewsn-2025-let-s-talk-about-mlops-for-iot-systems",
          title: 'After last year’s success I am co-hosting again EMERGE 2025 Workshop, collocated with...',
          description: "",
          section: "News",},{id: "projects-the-beacon-5g-project",
          title: 'The BEACON-5G Project',
          description: "Funded by DCSM Future RAN - Diversifying the 5G Supply Chain",
          section: "Projects",handler: () => {
              window.location.href = "/projects/beacon/";
            },},{id: "projects-the-cavshield-project",
          title: 'The CAVShield Project',
          description: "Funded by Innovate UK under Grant Number 133898",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cavshield/";
            },},{id: "projects-the-cheddar-cheese-project",
          title: 'The CHEDDAR CHEESE Project',
          description: "Funded by EPSRC",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cheese/";
            },},{id: "projects-the-flourish-project",
          title: 'The FLOURISH Project',
          description: "Funded by Innovate UK under Grant Number 102582",
          section: "Projects",handler: () => {
              window.location.href = "/projects/flourish/";
            },},{id: "projects-the-n-connect-project",
          title: 'The N-CONNECT Project',
          description: "Funded by the Royal Academy of Engineering Frontiers Seedcorn Funding",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nepal/";
            },},{id: "projects-the-ng-cdi-project",
          title: 'The NG-CDI Project',
          description: "Funded by BT Group and EPSRC (EP/R004935/1)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ngcdi/";
            },},{id: "projects-the-reason-project",
          title: 'The REASON Project',
          description: "Funded by DSIT",
          section: "Projects",handler: () => {
              window.location.href = "/projects/reason/";
            },},{id: "projects-the-sonic-project",
          title: 'The SONIC  Project',
          description: "Funded by DSIT",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sonic/";
            },},{id: "projects-the-sustainet-guardian-project",
          title: 'The SUSTAINET-guarDian Project',
          description: "Funded by CelticNext",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sustainet/";
            },},{id: "projects-the-synergia-project",
          title: 'The SYNERGIA Project',
          description: "Funded by Innovate UK under Grant Number 53707",
          section: "Projects",handler: () => {
              window.location.href = "/projects/synergia/";
            },},{id: "projects-the-ucare-project",
          title: 'The UCare Project',
          description: "Funded by South Gloucestershire Council",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ucare/";
            },},{id: "projects-the-umbrella-project",
          title: 'The UMBRELLA Project',
          description: "Funded by South Gloucestershire Council",
          section: "Projects",handler: () => {
              window.location.href = "/projects/umbrella/";
            },},{id: "projects-the-venturer-project",
          title: 'The VENTURER Project',
          description: "Funded by Innovate UK under Grant Number 102202",
          section: "Projects",handler: () => {
              window.location.href = "/projects/venturer/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
