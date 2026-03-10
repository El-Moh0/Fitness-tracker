export const loadWorkouts = () => {
  const data = localStorage.getItem("workouts");
  return data ? JSON.parse(data) : [];
};

export const saveWorkouts = (workouts) => {
  localStorage.setItem("workouts", JSON.stringify(workouts));
};