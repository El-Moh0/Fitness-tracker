import WorkoutItem from "./WorkoutItem";

function WorkoutList({ workouts, deleteWorkout }) {
  if (!workouts.length) return <p className="text-gray-500 mt-2">No workouts yet.</p>;

  return (
    <div className="mt-4">
      {workouts.map(w => <WorkoutItem key={w.id} workout={w} deleteWorkout={deleteWorkout} />)}
    </div>
  );
}

export default WorkoutList;