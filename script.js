const selectTheme = document.getElementById("theme-button");

const findAndReplaceThemeClass = (classlist, newclass) => {
  if (classlist.contains("theme-pink")) {
    classlist.replace("theme-pink", newclass);
  } else if (classlist.contains("theme-default")) {
    classlist.replace("theme-default", newclass);
  } else if (classlist.contains("theme-teal")) {
    classlist.replace("theme-teal", newclass);
  } else if (classlist.contains("theme-dark")) {
    classlist.replace("theme-dark", newclass);
  } else {
    classlist.add(newclass);
  }
};

selectTheme.addEventListener("change", (e) => {
  const theme = selectTheme.value;

  if (theme === "pink") {
    findAndReplaceThemeClass(document.body.classList, "theme-pink");
  } else if (theme === "default") {
    findAndReplaceThemeClass(document.body.classList, "theme-default");
  } else if (theme === "teal") {
    findAndReplaceThemeClass(document.body.classList, "theme-teal");
  } else if (theme === "dark") {
    findAndReplaceThemeClass(document.body.classList, "theme-dark");
  }
});

findAndReplaceThemeClass(document.body.classList, "theme-default");
