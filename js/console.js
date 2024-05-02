window.addEventListener("load", () => {
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

  // SKILLS
  console.groupCollapsed(
    "%cContact Information",
    "font: normal bold 14px sans-serif;"
  );
  let mySkills = [
    " Phone: %c+55 11 97107-1806",
    " Email: %ca.fms@hotmail.com",
    " Github: %cwww.linkedin.com/in/arthur-fms",
    " Linkedin: %cwww.github.com/arthurfms",
  ];
  mySkills.forEach((skill) =>
    console.log(
      `%cO %c ${skill}`,
      "color: #96b6c5; background: #96b6c5; border-radius: 10px; font-size: 8px;",
      "background: inherit; border-radius: 0px; font: normal bold 12px sans-serif;",
      "background: inherit; border-radius: 0px;"
    )
  );
  console.groupEnd();
});
