import { useState, useEffect } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";
import Stats from "./components/Stats";

function App() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("workouts")) || [];
    setWorkouts(saved);
  }, []);

  const addWorkout = (workout) => {
    const updatedWorkouts = [...workouts, workout];
    setWorkouts(updatedWorkouts);
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
  };

  const deleteWorkout = (id) => {
    const updatedWorkouts = workouts.filter((w) => w.id !== id);
    setWorkouts(updatedWorkouts);
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Fitness Tracker
      </h1>

      <Stats workouts={workouts} />

      <div className="bg-white p-6 rounded shadow w-full max-w-xl">
        <WorkoutForm addWorkout={addWorkout} />
        <WorkoutList workouts={workouts} deleteWorkout={deleteWorkout} />
      </div>
    </div>
  );
}

export default App;