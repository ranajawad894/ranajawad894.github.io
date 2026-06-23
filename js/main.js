// Called by index.html once all section HTML files have been loaded into the page
function initMuwahidSite() {
  // Mobile menu toggle
  const burger = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      mobileMenu.style.display =
        mobileMenu.style.display === "flex" ? "none" : "flex";
    });
    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mobileMenu.style.display = "none";
      }),
    );
  }

  // FAQ accordion
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.querySelector(".q").addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document
        .querySelectorAll(".faq-item")
        .forEach((i) => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });

  // Flight form
  const flightForm = document.getElementById("flightForm");

  if (flightForm) {
    flightForm.addEventListener("submit", function (e) {
      e.preventDefault();

      submitToWeb3Forms(
        this,
        "Thank you! Your flight inquiry has been received. Our travel consultant will contact you shortly.",
        this.querySelector('button[type="submit"]'),
      );
    });
  }

  // Contact form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      submitToWeb3Forms(
        this,
        "Thank you for reaching out to Muwahid Travels! Your message has been sent and we will contact you shortly.",
        this.querySelector('button[type="submit"]'),
      );
    });
  }
}

// Generic Web3Forms submit handler (used by flight and contact forms)
async function submitToWeb3Forms(form, successMsg, btn) {
  const originalText = btn.textContent;
  btn.textContent = "Sending...";
  btn.disabled = true;
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    });
    const data = await res.json();
    if (data.success) {
      alert(successMsg);
      form.reset();
    } else {
      alert(
        "Sorry, something went wrong sending your request. Please call us directly at +44‑7345‑088622.",
      );
    }
  } catch (err) {
    alert(
      "Sorry, something went wrong sending your request. Please call us directly at +44‑7345‑088622.",
    );
  } finally {
    btn.textContent = originalText;
    btn.disabled = false;
  }
}
