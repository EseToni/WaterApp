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

  // Reorganizando los días para comenzar por el lunes
  const reorganizedDays = [...daysOfWeek.slice(1), daysOfWeek[0]];

  // Ajustando la lógica para renderizar los días del mes
  const renderDays = () => {
    const days = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDayOfMonth - 1) || day > daysInMonth) {
          // Cambiando el valor inicial
          row.push(<View style={styles.dayContainer} key={`${i}-${j}`} />);
        } else {
          row.push(
            <View style={styles.dayContainer} key={`${i}-${j}`}>
              <Text style={styles.dayText}>{day}</Text>
            </View>,
          );
          day++;
        }
      }
      days.push(
        <View style={styles.weekRow} key={i}>
          {row}
        </View>,
      );
    }

    return days;
  };

  return (
    <View style={styles.container}>
      <View style={styles.monthTitle}>
        <Text style={styles.monthText}>
          {currentMonth} {currentYear}
        </Text>
      </View>
      {/* Días de la semana */}
      <View style={styles.header}>
        {daysOfWeek.map((day, index) => (
          <Text key={index} style={styles.weekDay}>
            {day}
          </Text>
        ))}
      </View>

      {/* Números de los días del mes */}
      <View style={styles.calendarBody}>{renderDays()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  weekDay: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  calendarBody: {
    flexDirection: 'column',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  dayContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dayText: {
    fontSize: 14,
  },
  monthTitle: {
    alignItems: 'center',
    marginBottom: 10,
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Calendar;
