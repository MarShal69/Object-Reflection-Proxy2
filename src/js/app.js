export default function logCharacter({ special }) {
// function logCharacter({ special }) {
  const special1 = [];
  special.forEach((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;

    special1.push({
      id, name, icon, description,
    });
  });

  // console.log(special1);
  return special1;
}

// const character = {
//   name: 'Лучник',
//   type: 'Bowman',
//   health: 50,
//   level: 3,
//   attack: 40,
//   defence: 10,
//   special: [
//     {
//       id: 8,
//       name: 'Двойной выстрел',
//       icon: 'http://...',
//       description: 'Двойной выстрел наносит двойной урон',
//     },
//     {
//       id: 9,
//       name: 'Нокаутирующий удар',
//       icon: 'http://...',
//     },
//   ],
// };

// logCharacter(character);
