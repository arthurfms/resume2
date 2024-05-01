window.addEventListener("load", (event) => {
  let genWorkExp = (expObjList) => {
    expObjList.forEach((exp) => {
      let tempObj = `%c${exp.nam}: %c{\n   %cCompany: %c"${exp.com}"%c,\n   %cPeriod: %c"${exp.per}"%c,\n   %cDescription:\n     %c"${exp.des}"%c,\n%c}`;
      console.log(
        tempObj,
        "padding: 5px; font: small-caps bold 12px sans-serif;",
        "color: #e59400; font: inherit",
        "color: inherit; font: small-caps bold 12px sans-serif;",
        "font: italic 12px sans-serif;",
        "font: inherit;",
        "color: inherit; font: small-caps bold 12px sans-serif;",
        "font: italic 12px sans-serif;",
        "font: inherit;",
        "color: inherit; font: small-caps bold 12px sans-serif;",
        "font: italic 12px sans-serif;",
        "font: inherit;",
        "color: #e59400;"
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
  console.log("Page Sections:");
  console.group("Work Experience");
  let experiences = [
    {
      nam: "Global Integration Analyst",
      com: "Awin Global (Remote)",
      per: "Feb, 2024 - Present",
      des: "Provide a high level of technical integration support for global clients, identifying technical issues and escalating to engineering team.\n   Work with technical issues to prompt solve it and guarantee the tracking solution for affiliate marketing clients.",
    },
    {
      nam: "Front-end Software Developer",
      com: "InboundCycle (Remote)",
      per: "Sep, 2022 - Jan, 2024",
      des: "Implement the frontend side for different projects, including full website, blogs, landing pages and emails. Maintain server, create reports and find solutions to different requests received from accounts teams and clients.\n   Analyse incidents, find bugs and work directly on the fix, keeping all projects properly working.",
    },
    {
      nam: "Front-end Software Developer",
      com: "InboundCycle (Remote)",
      per: "Sep, 2022 - Jan, 2024",
      des: "Implement the frontend side for different projects, including full website, blogs, landing pages and emails. Maintain server, create reports and find solutions to different requests received from accounts teams and clients.\n   Analyse incidents, find bugs and work directly on the fix, keeping all projects properly working.",
    },
    {
      nam: "Front-end Software Developer",
      com: "InboundCycle (Remote)",
      per: "Sep, 2022 - Jan, 2024",
      des: "Implement the frontend side for different projects, including full website, blogs, landing pages and emails. Maintain server, create reports and find solutions to different requests received from accounts teams and clients.\n   Analyse incidents, find bugs and work directly on the fix, keeping all projects properly working.",
    },
    {
      nam: "Front-end Software Developer",
      com: "InboundCycle (Remote)",
      per: "Sep, 2022 - Jan, 2024",
      des: "Implement the frontend side for different projects, including full website, blogs, landing pages and emails. Maintain server, create reports and find solutions to different requests received from accounts teams and clients.\n   Analyse incidents, find bugs and work directly on the fix, keeping all projects properly working.",
    },
  ];
  genWorkExp(experiences);
  console.groupEnd();
});
