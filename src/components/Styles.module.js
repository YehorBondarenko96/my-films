// export const script = () => {
// const container = document.getElementById('divForContactList');
// const listContacts = document.getElementById('listContacts');
// const itemsContact = document.querySelectorAll('#itemContact');
// if(listContacts){
//   listContacts.addEventListener('scroll', () => {
//     console.log(1);
//       itemsContact.forEach(function(element) {
//         // Отримайте позицію елемента відносно контейнера
//         const rect = element.getBoundingClientRect();
//         console.log('rect: ', rect);
//         const position = rect.top + container.scrollTop;
    
//         // Визначте позицію, при якій елемент буде вирівнюватися по центру
//         var centerPosition = container.clientHeight / 2 - element.clientHeight / 2;
    
//         // Перевірте, чи елемент досягнув цієї позиції під час прокрутки
//         if (position < centerPosition) {
//           // Змініть стилі елемента для вирівнювання по центру
//           element.style.position = 'relative';
//           element.style.top = centerPosition + 'px';
//         } else {
//           // Поверніть стилі до значень за замовчуванням
//           element.style.position = 'static';
//           element.style.top = 'auto';
//         }
//       });
//     }
// );
// }
// };