import { useState, useEffect } from "react";

function App() {
  // State for workouts and form inputs
  const [workouts, setWorkouts] = useState([]);
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  // Load saved workouts from localStorage on app start
  useEffect(() => {
    const saved = localStorage.getItem("workouts");
    if (saved) {
      setWorkouts(JSON.parse(saved));
    }
  }, []);

  // Save workouts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  // Handle adding a new workout
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!exercise) return;

    const newWorkout = {
      id: Date.now(),
      exercise,
      sets,
      reps,
      weight,
      date: new Date().toLocaleDateString(),
    };

    setWorkouts([...workouts, newWorkout]);
    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
  };

  // Handle deleting a workout
  const handleDelete = (id) => {
    setWorkouts(workouts.filter((w) => w.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Fitness Tracker</h1>

      {/* Workout logging form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow mb-6 flex flex-wrap gap-2 justify-center"
      >
        <input
          type="text"
          placeholder="Exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          className="border p-2 rounded flex-1 min-w-[120px]"
        />
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          className="border p-2 rounded w-20"
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="border p-2 rounded w-20"
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border p-2 rounded w-24"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Workout
        </button>
      </form>

      {/* Workout history */}
      {workouts.length === 0 ? (
        <p className="text-gray-500 text-center">No workouts logged yet.</p>
      ) : (
        <div className="space-y-3">
          {workouts.map((w) => (
            <div
              key={w.id}
              className="bg-white p-3 rounded shadow flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold">{w.exercise}</h3>
                <p>
                  {w.sets} sets × {w.reps} reps @ {w.weight}kg
                </p>
                <p className="text-sm text-gray-500">{w.date}</p>
              </div>
              <button
                onClick={() => handleDelete(w.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
