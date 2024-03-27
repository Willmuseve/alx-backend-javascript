import ClassRoom from './0-classroom';

function initializeRooms() {
  const classroomx = new ClassRoom(19);
  const classroomy = new ClassRoom(20);
  const classroomz = new ClassRoom(34);

  return [
    classroomx,
    classroomy,
    classroomz,
  ];
}

export default initializeRooms;
