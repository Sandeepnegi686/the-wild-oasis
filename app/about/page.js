export default async function AboutPage() {
  await fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((json) => console.log(json.slip.advice));
  return (
    <div>
      <h1>About Wild Oasis</h1>
    </div>
  );
}
