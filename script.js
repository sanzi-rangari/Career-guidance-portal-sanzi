function getCareer() {
  const subject = document.getElementById("subject").value;
  const interest = document.getElementById("interest").value;
  const workStyle = document.getElementById("workStyle").value;
  const output = document.getElementById("careerOutput");

  let suggestion = "";

  // Basic logic for recommendation
  if (subject === "science" && interest === "research") {
    suggestion = "You could pursue a career as a Scientist or Biomedical Researcher!";
  } else if (subject === "science" && interest === "technology") {
    suggestion = "A great match could be Software Developer, Engineer, or AI Specialist!";
  } else if (subject === "math" && interest === "business") {
    suggestion = "You might enjoy becoming a Financial Analyst, Data Scientist, or Economist!";
  } else if (subject === "arts" && interest === "creative") {
    suggestion = "Consider careers like Graphic Designer, Writer, or Film Maker!";
  } else if (subject === "commerce" && interest === "business") {
    suggestion = "You may thrive as an Entrepreneur, Marketing Manager, or Business Consultant!";
  } else if (subject === "arts" && interest === "technology") {
    suggestion = "Try UX/UI Designer or Game Developer — creative meets tech!";
  } else {
    suggestion = "You have diverse interests! Explore hybrid careers like Product Manager or Content Strategist.";
  }

  // Display result
  output.textContent = suggestion;
}
