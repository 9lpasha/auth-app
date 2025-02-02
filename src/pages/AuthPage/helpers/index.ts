export const animateAuthForm = (div: HTMLDivElement) => {
  div.classList.add("duration-250");
  div.classList.add("translate-x-full", "opacity-0");

  setTimeout(() => {
    div.classList.remove("duration-250");
    div.classList.remove("transition-all");
    div.classList.remove("translate-x-full", "opacity-0");
    div.classList.add("-translate-x-full");

    setTimeout(() => {
      div.classList.add("duration-250");
      div.classList.add("transition-all");
      div.classList.remove("-translate-x-full");
      div.classList.remove("translate-x-0", "opacity-100");
    }, 10);
  }, 250);
};
