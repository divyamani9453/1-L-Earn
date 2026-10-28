function setAuthMode(mode) {
  const isSignup = mode === "signup";

  const fullName = document.getElementById("fullName");
  const fullNameLabel = document.getElementById("fullNameLabel");
  const accountType = document.getElementById("accountType");
  const accountTypeLabel = document.getElementById("accountTypeLabel");

  fullName.hidden = !isSignup;
  fullName.required = isSignup;
  fullNameLabel.hidden = !isSignup;

  accountType.hidden = !isSignup;
  accountType.required = isSignup;
  accountTypeLabel.hidden = !isSignup;

  document.getElementById("authTitle").textContent =
    isSignup ? "Create your account" : "Welcome back!";

  document.getElementById("authSubtitle").textContent =
    isSignup
      ? "Join L-Earn and discover new opportunities."
      : "Log in to continue to L-Earn.";

  document.getElementById("authSubmit").textContent =
    isSignup ? "Create account →" : "Login →";

  document.querySelectorAll("[data-auth]").forEach(button => {
    button.classList.toggle("active", button.dataset.auth === mode);
  });

  document.getElementById("authMessage").textContent =
    isSignup
      ? "Create an account to get started."
      : "Log in to access your account.";
}
