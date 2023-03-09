window.addEventListener("DOMContentLoaded", () => {
  const repalceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerHTML = text;
  };
  for (const dependency of ["chrome", "node", "electron"]) {
    repalceText(`${dependency}-version`, process.versions[dependency]);
  }
});
