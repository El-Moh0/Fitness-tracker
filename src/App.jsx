import { useState, useEffect } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import { fetchExercises } from "./api/exercises";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [loadingExercises, setLoadingExercises] = useState(true);

  // Load workouts from LocalStorage
  useEffect(() => {
    const savedWorkouts =
      JSON.parse(localStorage.getItem("workouts")) || [];
    setWorkouts(savedWorkouts);
  }, []);

  // Fetch exercises from WGER API
  useEffect(() => {
    const loadExercises = async () => {
      try {
        const data = await fetchExercises();
        setExercises(data);
      } catch (error) {
        console.error("Failed to load exercises:", error);
      } finally {
        setLoadingExercises(false);
      }
    };

    loadExercises();
  }, []);

  // Add workout
  const addWorkout = (workout) => {
    const updatedWorkouts = [...workouts, workout];
    setWorkouts(updatedWorkouts);

    localStorage.setItem(
      "workouts",
      JSON.stringify(updatedWorkouts)
    );
  };

  // Delete workout
  const deleteWorkout = (id) => {
    const updatedWorkouts = workouts.filter(
      (workout) => workout.id !== id
    );

    setWorkouts(updatedWorkouts);

    localStorage.setItem(
      "workouts",
      JSON.stringify(updatedWorkouts)
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Main content */}
      <div className="flex-grow p-6 flex flex-col items-center">

        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Fitness Tracker
        </h1>

        {/* Stats */}
        <Stats workouts={workouts} />

        {/* Workout Form + List */}
        <div className="bg-white p-6 rounded shadow w-full max-w-xl">

          {loadingExercises ? (
            <p className="text-gray-500 mb-3">
              Loading exercises...
            </p>
          ) : null}

          <WorkoutForm
            addWorkout={addWorkout}
            exercises={exercises}
          />

          <WorkoutList
            workouts={workouts}
            deleteWorkout={deleteWorkout}
          />

        </div>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;