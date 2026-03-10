function WorkoutItem({ workout, deleteWorkout }) {
  return (
    <div className="flex justify-between items-center border p-3 rounded">

      <div>
        <h3 className="font-bold">{workout.exercise}</h3>

        <p>
          {workout.sets} sets × {workout.reps} reps | {workout.weight}kg
        </p>

        <p className="text-sm text-gray-500">{workout.date}</p>
      </div>

      <button
        onClick={() => deleteWorkout(workout.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>

    </div>
  );
}

export default WorkoutItem;