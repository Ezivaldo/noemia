/* Contactos: altere só aqui (indicativo de Angola 244, sem espaços) */
const WHATSAPP = "244933190710";
const MSG = "Olá, Noémia! Vi o vosso site e gostaria de saber mais sobre os serviços e marcar um horário.";

// Links de WhatsApp (qualquer elemento com data-wa; mensagem própria via data-msg)
document.querySelectorAll("[data-wa]").forEach(a => {
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(a.dataset.msg || MSG)}`;
});

// Ano atual no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Menu móvel
const burger = document.querySelector(".burger"), menu = document.getElementById("menu");
const setMenu = open => {
  menu.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
};
burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));

// Galeria: ampliar ao clicar, fechar com × , fundo ou Esc
const lb = document.querySelector(".lb"), lbImg = lb.querySelector("img");
let lastFocus;
const closeLb = () => { lb.hidden = true; lastFocus && lastFocus.focus(); };
document.querySelectorAll(".shot").forEach(b => b.addEventListener("click", () => {
  const img = b.querySelector("img");
  lbImg.src = img.src; lbImg.alt = img.alt;
  lastFocus = b; lb.hidden = false;
  lb.querySelector(".lb-x").focus();
}));
lb.addEventListener("click", e => { if (e.target !== lbImg) closeLb(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !lb.hidden) closeLb(); });
