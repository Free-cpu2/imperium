
document.querySelectorAll(".scroll-link").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      let target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
  function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    // Bu yerda email va parolni tekshirish
    const savedEmail = "test@example.com"; // Haqiqiy foydalanuvchi emaili
    const savedPassword = "123456"; // Haqiqiy foydalanuvchi paroli

    if (email === savedEmail && password === savedPassword) {
        alert("Tizimga muvaffaqiyatli kirdingiz!");
        window.location.href = "https://google.com"; // Shu yerga kerakli saytni yozing
    } else alert("Parol yoki email noto‘g‘ri!");}
     function login() {
            let email = document.getElementById("emaile").value;
            let password = document.getElementById("passworde").value;
            let repeatPassword = document.getElementById("repeat_passworde").value;

            if (!email.includes("@")) {
                alert("❌ Неверный формат email!");
                return;
            }

            if (password.length < 6) {
                alert("❌ Пароль должен содержать минимум 6 символов!");
                return;
            }

            if (password !== repeatPassword) {
                alert("❌ Пароли не совпадают!");
                return;
            }

            let nickname = email.split("@")[0]; // Emaildan nickname ajratish

            // LocalStorage-ga saqlash
            localStorage.setItem("nickname", nickname);

            alert("✅ Успешная регистрация! Никнейм: " + nickname);

            // Boshqa sahifaga o'tish
            window.location.href = "trader_profil.html";
        }