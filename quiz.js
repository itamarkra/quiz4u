import { db } from "./firebase-config.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const urlParams = new URLSearchParams(window.location.search);
const quizId = urlParams.get("id");
const form = document.getElementById("answer-form");

async function loadQuiz() {
  const docSnap = await getDoc(doc(db, "quizzes", quizId));
  if (!docSnap.exists()) {
    form.innerHTML = "<p>השאלון לא נמצא.</p>";
    return;
  }
  const data = docSnap.data();
  data.questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.innerHTML = `<p>${q.question}</p>` +
      q.options.map((opt, idx) =>
        `<label><input type="radio" name="q${i}" value="${idx}"> ${opt}</label><br>`
      ).join("");
    form.appendChild(div);
  });

  document.getElementById("check-btn").addEventListener("click", () => {
    const answers = data.questions.map((q, i) => {
      const selected = document.querySelector(`input[name=q${i}]:checked`);
      return selected ? parseInt(selected.value) : null;
    });
    let correct = 0;
    answers.forEach((a, i) => {
      if (a === data.questions[i].correctAnswer) correct++;
    });
    document.getElementById("result").textContent = `נכון: ${correct} מתוך ${data.questions.length}`;
  });
}

loadQuiz();
