import WorkoutItem from "./WorkoutItem";

function WorkoutList({ workouts, deleteWorkout }) {

  if (!workouts.length) {
    return <p className="text-gray-500">No workouts yet.</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {workouts.map((workout) => (
        <WorkoutItem
          key={workout.id}
          workout={workout}
          deleteWorkout={deleteWorkout}
        />
      ))}
    </div>
  );
}

export default WorkoutList;