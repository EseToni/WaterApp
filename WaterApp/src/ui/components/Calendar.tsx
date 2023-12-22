import CalendarStyles from '@styles/components/CalendarStyle';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Calendar = () => {
  const daysOfWeek = ['L', 'M', 'X', 'J', 'V', 'S', 'D']; // Cambiado el orden de los días
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).getDay();

  // Ajustando la lógica para renderizar los días del mes
  const renderDays = () => {
    const days = [];
    let day = 1;
    const today = new Date(); // Obtener la fecha actual
    const currentMonth = currentDate.toLocaleString('default', {
      month: 'long',
    });

    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfMonth - 1) || day > daysInMonth) {
          row.push(
            <View style={CalendarStyles.dayContainer} key={`${i}-${j}`} />,
          );
        } else {
          let content = <Text style={CalendarStyles.dayText}>{day}</Text>;

          // Obtener la fecha del día actual en el bucle
          const currentDay = new Date(currentYear, currentDate.getMonth(), day);

          if (currentDay.toDateString() === today.toDateString()) {
            content = (
              <View style={CalendarStyles.todayCircle} key={`${i}-${j}`}>
                <Text style={CalendarStyles.todayText}>{day}</Text>
              </View>
            );
          } else if (currentDay < today) {
            content = (
              <View style={CalendarStyles.pastDayCircle} key={`${i}-${j}`}>
                {/* No incluir el texto en el círculo gris */}
              </View>
            );
          }

          row.push(
            <View style={CalendarStyles.dayContainer} key={`${i}-${j}`}>
              {content}
            </View>,
          );
          day++;
        }
      }
      days.push(
        <View style={CalendarStyles.weekRow} key={i}>
          {row}
        </View>,
      );
    }

    return days;
  };
  return (
    <View style={CalendarStyles.container}>
      <View style={CalendarStyles.monthTitle}>
        <Text style={CalendarStyles.monthText}>
          {currentMonth} {currentYear}
        </Text>
      </View>
      {/* Días de la semana */}
      <View style={CalendarStyles.header}>
        {daysOfWeek.map((day, index) => (
          <Text key={index} style={CalendarStyles.weekDay}>
            {day}
          </Text>
        ))}
      </View>

      {/* Números de los días del mes */}
      <View style={CalendarStyles.calendarBody}>{renderDays()}</View>
    </View>
  );
};

export default Calendar;
