import { useState } from "react";

function WorkoutForm({ addWorkout }) {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!exercise || !sets || !reps || !weight) return;

    addWorkout({
      id: Date.now(),
      exercise,
      sets: Number(sets),
      reps: Number(reps),
      weight: Number(weight),
      date: new Date().toLocaleDateString(),
    });

    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
      <input
        placeholder="Exercise"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="number"
        placeholder="Sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="border p-2 rounded"
      />

      <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Add Workout
      </button>
    </form>
  );
}

export default WorkoutForm;