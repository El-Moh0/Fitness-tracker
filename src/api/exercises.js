export const fetchExercises = async () => {
  try {
    const res = await fetch(
      "https://wger.de/api/v2/exercise/?language=2&limit=50"
    );

    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching exercises:", error);
    return [];
  }
};