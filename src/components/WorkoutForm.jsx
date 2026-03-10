import { useState } from "react";

function WorkoutForm({ addWorkout }) {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const workout = {
      id: Date.now(),
      exercise,
      sets: Number(sets),
      reps: Number(reps),
      weight: Number(weight),
      date: new Date().toLocaleDateString(),
    };

    addWorkout(workout);

    setExercise("");
    setSets("");
    setReps("");
    setWeight("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-4">
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
        placeholder="Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="border p-2 rounded"
      />

      <button className="bg-blue-500 text-white p-2 rounded">
        Add Workout
      </button>
    </form>
  );
}

export default WorkoutForm;