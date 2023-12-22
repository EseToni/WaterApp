import colors from '@styles/colors/colors';
import { StyleSheet } from 'react-native';

const CalendarStyles = StyleSheet.create({
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
    color: colors.bluePrimary,
  },
  calendarBody: {
    flexDirection: 'column',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  monthTitle: {
    alignItems: 'center',
    marginBottom: 10,
    color: 'grey',
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dayContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 2,
    borderRadius: 15,
    backgroundColor: 'transparent',
  },
  dayText: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
  },
  todayCircle: {
    backgroundColor: colors.greyDark,
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todayText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  pastDayCircle: {
    backgroundColor: colors.greyMedium,
    width: 16,
    height: 16,
    borderRadius: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CalendarStyles;
