export const formatDate = (date: string): string => {
  
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const fechaString = date;
  const fecha = new Date(fechaString);
  const dayText = daysOfWeek[fecha.getDay()]?.slice(0, 3);
  const dayNumber = fecha.getDate();
  const monthtext = month[fecha.getMonth()]?.slice(0, 3);
  const formatDate = dayText + ', ' + dayNumber + ' ' + monthtext;

  return formatDate;
};
