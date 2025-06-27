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
    question: "איך אתה מ
