const questionText = document.getElementById("question-text");
const buttonsContainer = document.getElementById("buttons-container");
const finalMessage = document.getElementById("final-message");
const mainImage = document.getElementById("mainImage");

const stepImages = {
  "1": "hi-habibi.jpg",
  "2": "mhjezlek.jpg",
  "2_1": "if-no.jpg",
  "3": "ekhtar.jpg",
  "end_wait": "if-no (2).jpg",
  "end_surprise": "bahebak.jpg",
  "end_love": "special-day.jpg"
};

/* الأسئلة */
const questions = {
  "1": {
    text: "    ربما كان يومك مرهقًا… لكني هُنا  ، نبلش! 💗",
    buttons: [
      { text: "يلا", next: "2" },
      { text: "لا", next: "end_wait", movingNo: true }
    ]
  },

  "2": {
    text: "مجهزالك اشي حلو مثلك يكيكه  ، تشوفه هسا؟",
    buttons: [
      { text: "اه", next: "3" },
      { text: "لا لا", next: "2_1" }
    ]
  },

  "2_1": {
    text: "ليه يا اُمي مبدك تشوفها👈🏼👉🏼؟",
    buttons: [
      { text: "يلا حبيبي", next: "3" }
    ]
  },

  "3": {
    text: " اختر، فكل الطرق هنا تقود لشيء جميل… مثلك ",
    buttons: [
      { text: "تشوف اشي حلو زيك؟", next: "end_love" },
      { text: "كلام مني", next: "end_surprise" }
    ]
  },

  "end_wait": {
    text: "مستحيل تختار لا 😏💗",
    buttons: []
  },

  "end_love": {
    text: `
      <div class="video-container">
        <video class="final-video" controls playsinline>
<source src="hob-omri.mp4" type="video/mp4">         
متصفحك لا يدعم تشغيل الفيديو
        </video>
      </div>
    `,
    buttons: []
  },

  "end_surprise": {
    text: `
      <div class="love-text">اليوم مُختلف طبعاً … لأنه اليوم اللي جيت فيه على هالدنيا يا روحي..اجا باندتي وفرحوا فيو اهله بس ميرو ما كانت موجوده راحو 19 سنه من عمرك انا ما كنت معك بس هسا انا معك 💗  
متخيل انه اليوم انولد فيه بطلي الوحيد الي مكتفيه فيو والي مغنييني عن الدنيا كُلها هو وخدوده ونكده .

أول عيد ميلاد الك واحنا سوا…  🥹🥹🥹
ويمكن ما عم أكون جنبك بس … قلبي معك، وكل لحظة فيني عم اعيشها معك سواء واحنا بنحكي او فمخيلتي الي انتَ ما بتفارقها ابداً..
أفضل رجل بهالدنيا من بعد بابا شافته عيني  مو بس بكلامي او فعيوني… بحقيقتك.  
أنت البداية، وأنت النهاية وكل شي بيناتهم اخميد ،،،مُميز بطريقة ما بتنشرح سبحان الي سواك…  
مثل دعوة أم بنص الضيق مثل طمأنينة بتيجي بدون سبب أنا فخورة فيك… فكل تعبك، فكل محاولاتك، بكل مرة وقعت وقمت لحالك ااه هيه سنة صعبة… بس أنت كُنت قدها وتحملت فوق طاقتك في سبيل لقمه العيش على قولتك .
مفكر انه حسيبك لحالك لو تطاوشنا ونكدت علي ؟  
بالعكس حلزق فيك اكثر عشان ازعجك
اشتقتلك جداً… بطريقة ما بتنحكى  وبنفسي أكون جنبك اليوم، وبكره والي بعده واكون اقرب حد واقدر المسك واهون عليك فاحضاني وأضحك معك، واحكيلك كم انتَ كبير فعيني وكم انا فخوره فيك بدي ياك تضل بطل…  
مو بس اليوم ولا بس هالسنة… للآخر بدي أشوفك عم تكبر قدامي وأشوف انجازاتك وأشوفك عم تكافح وأشوفك عم تحقق كل شي حلمت فيو وبدك تحققه وحدعمك فكُل الطرق المُمكنه لانه عندي باندا واحد وحياتي كلها اله.

حضل ماسكة ايدك فكل طريق بتمشيه ورح أكون أول وحدة تسمع قراراتك وتدعمك فيهم ان كانوا صح وان كانا غلط اصححلك مسارك وأول وحدة بتآمن فيك…

يا حظي فيك… ويا حظ قلبي اللي اختارك.🤎🫂

كل عمرك اللي فات صفحة وانطوت هسا انتَ طفلي وبابا وبطلي حتبلش حياه جديده فنفسيه جديده وطموح واهداف جديده مو بس عشان مُقيد فيوم نولدت فيو لا ، لأنه هيك المفروض يصير بس عقلك من الا وعي بربط عمرك الجديد فبدايات وانجازات جديده 
يا جعل عُمرك بجنبي كُل الأعوام.
ويا جعل عيد ميلادك يُمر الف عام.
بحبك يا عُمر عمري…  
HAPPY BIRTHDAY YA ROOHI ❤️  

وعد مني…  
رح أضل جنبك بكل أعوامك الجاية…  
وكل سنينك تكون بأحضاني 💞
      </div>
    `,
    buttons: []
  }
};

/* تغيير الصورة */
function changeImage(step) {
  if (stepImages[step]) {
    mainImage.src = stepImages[step];
  }
}

/* تحريك زر لا داخل حدود الكونتينر */
function moveNoButton(button) {
  const containerWidth = buttonsContainer.clientWidth;
  const containerHeight = buttonsContainer.clientHeight;

  const buttonWidth = button.offsetWidth || 80;
  const buttonHeight = button.offsetHeight || 45;

  const maxX = Math.max(containerWidth - buttonWidth, 10);
  const maxY = Math.max(containerHeight - buttonHeight, 10);

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}

/* تجهيز زر لا للموبايل */
function setupMovingNoButton(button) {
  button.classList.add("moving-no");

  setTimeout(() => {
    moveNoButton(button);
  }, 50);

  button.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton(button);
  }, { passive: false });

  button.addEventListener("touchmove", (e) => {
    e.preventDefault();
    moveNoButton(button);
  }, { passive: false });

  button.addEventListener("mouseenter", () => {
    moveNoButton(button);
  });

  button.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton(button);
  });
}

/* عرض الخطوات */
function renderStep(step = "1") {
  const data = questions[step];
  changeImage(step);

  if (step.startsWith("end")) {
    questionText.classList.add("hidden");
    buttonsContainer.classList.add("hidden");
    finalMessage.classList.remove("hidden");
    finalMessage.innerHTML = data.text;
    return;
  }

  questionText.classList.remove("hidden");
  buttonsContainer.classList.remove("hidden");
  finalMessage.classList.add("hidden");

  questionText.innerHTML = data.text;
  buttonsContainer.innerHTML = "";

  data.buttons.forEach((btn) => {
    const button = document.createElement("button");
    button.className = "action-button";
    button.textContent = btn.text;

    if (step === "1" && btn.movingNo) {
      setupMovingNoButton(button);
    } else {
      button.addEventListener("click", () => {
        renderStep(btn.next);
      });
    }

    buttonsContainer.appendChild(button);
  });
}

/* تشغيل أولي */
window.addEventListener("load", () => {
  renderStep();
});

/* القلوب */
setInterval(() => {
  const heartsBg = document.querySelector(".bg_heart");

  const size = Math.random() * 30 + 10;
  const left = Math.random() * 100;
  const greenBlue = 150 + Math.random() * 100;
  const time = 5 + Math.random() * 5;

  heartsBg.insertAdjacentHTML(
    "beforeend",
    `
      <div
        class="floating-heart"
        style="
          width:${size}px;
          height:${size}px;
          left:${left}%;
          background:rgba(255,${greenBlue - 50},${greenBlue},0.8);
          animation:love ${time}s linear;
        ">
      </div>
    `
  );

  const hearts = document.querySelectorAll(".floating-heart");
  if (hearts.length > 60) {
    hearts[0].remove();
  }
}, 400);
