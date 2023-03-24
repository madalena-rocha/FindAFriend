window.addEventListener("scroll", onScroll);

onScroll();

function onScroll() {
  activateMenuAtCurrentSection(home);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;

  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;

  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

  const sectionId = section.getAttribute("id");

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}
