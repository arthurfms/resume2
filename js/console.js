window.addEventListener("load", (event) => {
  let genWorkExp = (expObjList) => {
    expObjList.forEach((exp) => {
      let tempObj = `%c${exp.nam}: %c{\n   %cCompany: %c"${
        exp.com
      }"%c,\n   %cPeriod: %c"${exp.per}"%c,\n   %cDescription:${
        exp.des.includes("\n") ? "\n" : ""
      }     %c"${exp.des}"%c\n%c}`;
      console.log(
        tempObj,
        "padding: 5px; font: small-caps bold 12px sans-serif;",
        "color: #e59400; font: inherit",
        "color: inherit; font: small-caps bold 12px sans-serif;",
        "font: italic 12px sans-serif;",
        "font: inherit; color: #e59400;",
        "color: inherit; font: small-caps bold 12px sans-serif;",
        "font: italic 12px sans-serif;",
        "font: inherit; color: #e59400;",
        "color: inherit; font: small-caps bold 12px sans-serif;",
        "font: italic 12px sans-serif;",
        "font: inherit; color: #e59400;",
        "padding: 5px; color: #e59400;"
      );
    });
  };
  console.clear();
  console.log(
    `
%c  _____       _    _                _____                             _           
%c |  _  | ___ | |_ | |_  _ _  ___   |   __| ___  ___  ___  ___  ___  _| | ___  ___ 
%c |     ||  _||  _||   || | ||  _|  |   __|| -_||  _||   || .'||   || . || -_||_ -|
%c |__|__||_|  |_|  |_|_||___||_|    |__|   |___||_|  |_|_||__,||_|_||___||___||___|
                                                                                                                                                                               
 %cSoftware Developer with MBA and postgraduate in Tech courses, working as a Global Integration Analyst at Awin. Experienced working with front-end development, APIs, data analysis, data manipulation and customer support (Tier 2).`,
    `word-break: break-all; color: #688087;`,
    `word-break: break-all; color: #7d969e;`,
    `word-break: break-all; color: #93adb6;`,
    `word-break: break-all; color: #aac4cf;`,
    `color: initial; padding: 10px; padding-right: 150px;`
  );
  console.log(
    "%cPage Sections",
    "padding: 5px; font: normal bold 16px sans-serif; text-align: center; display: flex;"
  );
  // Work Experience
  console.groupCollapsed("%cWork Experience", "font: normal 14px sans-serif");
  let experiences = [
    {
      nam: "Global Integration Analyst",
      com: "Awin Global (Remote)",
      per: "Feb, 2024 - Present",
      des: "Provide a high level of technical integration support for global clients, identifying technical issues and escalating to engineering team.\n     Work with technical issues to prompt solve it and guarantee the tracking solution for affiliate marketing clients.",
    },
    {
      nam: "Front-end Software Developer",
      com: "InboundCycle (Remote)",
      per: "Sep, 2022 - Jan, 2024",
      des: "Implement the frontend side for different projects, including full website, blogs, landing pages and emails. Maintain server, create reports and find solutions to different requests received from accounts teams and clients.\n     Analyze incidents, find bugs and work directly on the fix, keeping all projects properly working.",
    },
    {
      nam: "Data Implementation Specialist",
      com: "Doctoralia España (Spain)",
      per: "May, 2021 - Sep, 2022",
      des: "Management and manipulation of big databases to generate specific formats, necessaries to new clients implementations. Process organization and maintenance to guarantee data protection and information quality in company system.\n     Contacting with all involved teams, keeping the process flowing to ensure that every step works as the company standards, and training new import members.",
    },
    {
      nam: "Data Analyst",
      com: "Doctoralia Brasil (Brazil)",
      per: "Mar, 2021 - May, 2021",
      des: "Improve data analysis for Marketing, lead generation and DP phone operations, update and maintenance workflows to optimize data collection. Generate dashboards and data insights for all related teams, focusing on new leads, keep and improve operation control, goals update and team commission standard.",
    },
    {
      nam: "Support Analyst",
      com: "Doctoralia Brasil (Brazil)",
      per: "Sep, 2019 - Mar, 2021",
      des: "Provide support for employees and users with doubts, bugs corrections with scripts on SaaS, Marketplace and financial system. Report weakness, find solutions to prevent bugs, and notify developers about necessary corrections by Jiras. Data report creation and analysis based on Support and Customer Success actions and needs.",
    },
    {
      nam: "Customer Success Analyst - Latam",
      com: "Doctoralia Brasil (Brazil)",
      per: "Apr, 2019 - Sep, 2019",
      des: "Assist health professionals from Chile by phone and email. Made usability training and helping them with platform issues, setting the environment for new clients and keeping track of their needs. Follow client's engagement and guarantee the best usage from the system, generating best results and helping them to achieve their goals.",
    },
  ];
  genWorkExp(experiences);
  console.groupEnd();
  // SKILLS
  console.groupCollapsed("%cSkills", "font: normal 14px sans-serif");
  let mySkills = [
    "JAVASCRIPT",
    "HTML",
    "CSS",
    "API",
    "PHP",
    "NODE.JS",
    "SQL",
    "GIT",
    "JIRA",
    "ZENDESK",
    "WORDPRESS",
    "HUBSPOT CMS",
  ];
  mySkills.forEach((skill) =>
    console.log(
      `%cO %c ${skill}`,
      "color: #96b6c5; background: #96b6c5; border-radius: 10px; font-size: 8px;",
      "background: inherit; border-radius: 0px; padding-top: 4px; padding-bottom: 0px;"
    )
  );
  console.groupEnd();
  // LANGUAGES
  console.groupCollapsed("%cLanguages", "font: normal 14px sans-serif");
  let languages = [
    { lang: "Portuguese", niv: "Native", loc: "PT-BR" },
    { lang: "English", niv: "Fluent", loc: "EN" },
    { lang: "Spanish", niv: "Fluent", loc: "ES" },
  ];
  languages.forEach((ln) =>
    console.log(
      `%c${ln.lang} (${ln.loc}): %c${ln.niv}`,
      "font-weight: 700",
      "font-weight: 400"
    )
  );
  console.groupEnd();
  // EDUCATION
  console.groupCollapsed("%cEducation", "font: normal 14px sans-serif");
  let education = [
    {
      course: "Computer Engineering",
      degree: "Postgraduate's Degree",
      period: "Jul, 2023 - May, 2024",
      place: "Centro Universitário Internacional - UNINTER",
      details:
        "Computer Engineering postgraduate course, focused on products management and emerging technologies.The main subjects of the course were Software Engineering, IT Architecture and Business Model, Projects Analysis and Viability, Computer Network Administration, and Cybersecurity",
    },
    {
      course: "Strategic Management in UX Design",
      degree: "MBA Degree",
      period: "May, 2023 - May, 2024",
      place: "Centro Universitário Internacional - UNINTER",
      details:
        "Master of Business Administration course, focused on User Experience, Product Management and Digital Marketing.The main subjects of the course were Information, Interaction and Usability Design, User Experience and Digital Platforms, Innovation and Design Thinking, Applied Digital Law, and Decision Making and Intuition.",
    },
    {
      course: "Software Analysis and Development",
      degree: "Associate's Degree",
      period: "Jan, 2020 - Aug, 2022",
      place: "Centro Universitário de Maringá - UNICESUMAR",
      details:
        "2.5 years Software development focused Associate's course. The course gave a basis knowledge for different subjects, being the main ones Front-end Development, Back-end Development, Programming Logic, SQL, and Database Structure.",
    },
    {
      course: "Journalism",
      degree: "Bachelor's Degree",
      period: "Jan, 2013 - Dec, 2017",
      place: "Universidade Metodista de São Paulo",
      details:
        "4 years Journalism and Social Communication course, during this graduation I had practical experience creating, editing and publishing communication content. I also produced and published a photojournalism book about Inca's culture influence at contemporary Argentina's Northwest territory, being awarded later as the best thesis production of the graduation year.",
    },
  ];

  education.forEach((course) => {
    console.log(
      `%c${course.course} %c(${course.degree})%c | %c${course.place}\n%c${course.period}\n%c${course.details}`,
      "font-weight: 500; padding: 5px; font: 12px sans-serif;",
      "font: normal 12px sans-serif",
      "color: #96b6c5;",
      "color: inherit;",
      "color: inherit; font: italic 12px sans-serif; padding-bottom: 10px; border-bottom: 2px solid #96b6c5;",
      "font: normal 12px sans-serif; padding-top: 10px;"
    );
  });
  console.groupEnd();
  // PORTFOLIO
});
