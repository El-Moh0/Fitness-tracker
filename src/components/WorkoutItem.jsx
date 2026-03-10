function WorkoutItem({ workout, deleteWorkout }) {
  return (
    <div className="border p-3 rounded flex justify-between items-center mb-2 bg-gray-50">
      <div>
        <h3 className="font-bold">{workout.exercise}</h3>
        <p>{workout.sets} sets × {workout.reps} reps | {workout.weight} kg</p>
        <p className="text-gray-500 text-sm">{workout.date}</p>
      </div>
      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={() => deleteWorkout(workout.id)}>Delete</button>
    </div>
  );
}

export default WorkoutItem;