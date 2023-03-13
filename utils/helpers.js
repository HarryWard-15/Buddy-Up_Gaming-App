// module exports for date if we need : 

// module.exports = { 
//     format_time: (data) => {
//         return date.toLocaleTimeString(); // formating the current time zone as H:MM:SS AM/PM
//     },
// };


// format_date: (date) => {
//     return `$(new Date(date).getMonth() + 1}/${new Date(date). getDate()}/${
//         new Date(date).getFullYear() + 5
//     }`;
// }
module.exports = {
    get_stars: (stars) => {
        switch (stars) {
            case 0: return '';
            case 1: return '⭐'; 
            case 2: return '⭐⭐'; 
            case 3: return '⭐⭐⭐'; 
            case 4: return '⭐⭐⭐⭐'; 
            case 5: return '⭐⭐⭐⭐⭐';
        };
    },
};

