function Stats({ workouts }) {
  const totalWorkouts = workouts.length;

  const totalSets = workouts.reduce((total, w) => total + w.sets, 0);

  const totalWeight = workouts.reduce(
    (total, w) => total + w.weight * w.reps * w.sets,
    0
  );

  return (
    <div className="grid grid-cols-3 gap-4 mb-6 w-full max-w-xl">
      <div className="bg-white p-4 rounded shadow text-center">
        <p className="text-gray-500">Workouts</p>
        <h2 className="text-xl font-bold">{totalWorkouts}</h2>
      </div>

      <div className="bg-white p-4 rounded shadow text-center">
        <p className="text-gray-500">Total Sets</p>
        <h2 className="text-xl font-bold">{totalSets}</h2>
      </div>

      <div className="bg-white p-4 rounded shadow text-center">
        <p className="text-gray-500">Weight Lifted</p>
        <h2 className="text-xl font-bold">{totalWeight} kg</h2>
      </div>
    </div>
  );
}

export default Stats;