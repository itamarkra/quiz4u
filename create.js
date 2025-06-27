import { db } from "./firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const questions = [
  {
    question: "מה הכי מתאר את הדרך שלך להתמודד עם לחץ?",
    options: ["מתעלם", "מדבר עם מישהו", "פעילות מרגיעה", "כותב או מצייר"]
  },
  {
    question: "כשאתה פוגש מישהו חדש, מה אתה עושה קודם?",
    options: ["מחכה", "מציג את עצמי", "שואל שאלות", "מחפש דברים משותפים"]
  },
  {
    question: "מה חשוב לך יותר ביום-יום?",
    options: ["שגרה יציבה", "ריגוש והרפתקה", "מערכות יחסים", "למידה"]
  },
  {
    question: "מה הדבר הראשון שאתה חושב כשאתה מתעורר?",
    options: ["מה אני צריך להספיק?", "רוצה להישאר במיטה", "למי לכתוב קודם", "נזכר בחלום"]
  },
  {
    question: "איך אתה מתמודד עם כישלון?",
    options: ["מאשים את עצמי", "מחפש לשפר", "מתעודד מאחרים", "מתעלם"]
  }
];

const form = document.getElementById("quiz-form");

questions.forEach((q, i) => {
  const div = document.createElement("div");
  div.innerHTML = `<p>${q.question}</p>` +
    q.options.map((opt, idx) =>
      `<label><input type="radio" name="q${i}" value="${idx}"> ${opt}</label><br>`
    ).join("");
  form.appendChild(div);
});

document.getElementById("submit-btn").addEventListener("click", async () => {
  const answers = questions.map((q, i) => {
    const selected = document.querySelector(`input[name=q${i}]:checked`);
    return selected ? parseInt(selected.value) : null;
  });

  const quizData = questions.map((q, i) => ({
    question: q.question,
    options: q.options,
    correctAnswer: answers[i]
  }));

  const docRef = await addDoc(collection(db, "quizzes"), { questions: quizData });
  const link = `quiz.html?id=${docRef.id}`;
  const a = document.getElementById("quiz-link");
  a.textContent = link;
  a.href = link;
});
