import { useState, useEffect } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";
import Stats from "./components/Stats";

function App() {
  const [workouts, setWorkouts] = useState([]);

  // Load workouts from LocalStorage when app starts
  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
    setWorkouts(storedWorkouts);
  }, []);

  // Save workouts to LocalStorage whenever workouts change
  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  // Add workout
  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  // Delete workout
  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Fitness Tracker
      </h1>

      {/* Stats */}
      <Stats workouts={workouts} />

      {/* Card container */}
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-md">
        <WorkoutForm addWorkout={addWorkout} />

        <WorkoutList
          workouts={workouts}
          deleteWorkout={deleteWorkout}
        />
      </div>
    </div>
  );
}

export default App;