(function () {
  "use strict";

  function getUser() {
    try {
      return JSON.parse(localStorage.getItem("loggedInUser") || "null") || {};
    } catch (error) {
      return {};
    }
  }

  function getAvatar(user) {
    return user.avatar || user.avatarUrl || user.profileImage || user.profilePicture || user.photo || user.image || user.dp || user.profilePic || "";
  }

  function initials(user) {
    const name = String(user.name || user.fullName || "User").trim();
    const parts = name.split(/\s+/).filter(Boolean);
    return (parts.length > 1 ? parts[0][0] + parts[parts.length - 1][0] : name.slice(0, 2)).toUpperCase();
  }

  function buildMenu(button) {
    if (document.querySelector(".profile-menu")) return;
    const user = getUser();
    const name = user.name || user.fullName || "User";
    const avatar = getAvatar(user);
    const menu = document.createElement("div");
    menu.className = "profile-menu";
    menu.setAttribute("role", "menu");
    menu.innerHTML = `
      <div class="profile-menu__account">
        <span class="profile-menu__avatar">${avatar ? `<img src="${String(avatar).replace(/"/g, "&quot;")}" alt="">` : initials(user)}</span>
        <span class="profile-menu__account-text"><strong>${name}</strong><small>Free</small></span>
        <span class="profile-menu__chevron">›</span>
      </div>
      <div class="profile-menu__divider"></div>
      <a href="#" class="profile-menu__item" data-menu-action="plus">✦ <span>Try Plus free</span></a>
      <a href="profile.html" class="profile-menu__item">◷ <span>Personalization</span></a>
      <a href="profile.html" class="profile-menu__item">◎ <span>Profile</span></a>
      <a href="settings.html" class="profile-menu__item">⚙ <span>Settings</span></a>
      <div class="profile-menu__divider"></div>
      <a href="#" class="profile-menu__item" data-menu-action="help">◉ <span>Help</span><b>›</b></a>
      <button type="button" class="profile-menu__item profile-menu__logout" data-menu-action="logout">⇥ <span>Log out</span></button>
    `;
    button.parentElement.appendChild(menu);

    button.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      const open = menu.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
    });

    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
      }
    });

    menu.addEventListener("click", function (event) {
      const logout = event.target.closest('[data-menu-action="logout"]');
      if (logout) {
        event.preventDefault();
        localStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
      }
    });
  }

  function init() {
    const button = document.querySelector(".nav-profile");
    if (!button) return;
    button.setAttribute("aria-haspopup", "menu");
    button.setAttribute("aria-expanded", "false");
    buildMenu(button);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
