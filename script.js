const activities = [
  { text: "Go for a walk", keyword: "nature walk" },
  { text: "Watch the sunset", keyword: "sunset sky" },
  { text: "Read a few pages of a book", keyword: "reading book" },
  { text: "Listen to calming music", keyword: "relaxing music" },
  { text: "Have a cup of tea or coffee", keyword: "tea coffee" },
  { text: "Do a short stretch", keyword: "stretching yoga" },
  { text: "Go to a movie", keyword: "movie theater" },
  { text: "Write one thing you're grateful for", keyword: "gratitude journal" },
  { text: "Step outside and breathe deeply", keyword: "fresh air outdoors" },
  { text: "Call someone you care about", keyword: "phone call" }
];

const activityText = document.getElementById("activity");
const background = document.getElementById("background");
const button = document.getElementById("newSuggestion");

function setSuggestion() {
  const activity = activities[Math.floor(Math.random() * activities.length)];

  activityText.classList.remove("fade-in");
  void activityText.offsetWidth;
  activityText.classList.add("fade-in");

  activityText.textContent = activity.text;

  const imageUrl = `https://picsum.photos/1920/1080?random=${Date.now()}`;

  background.style.backgroundImage = `url('${imageUrl}')`;
}

button.addEventListener("click", setSuggestion);
setSuggestion();

