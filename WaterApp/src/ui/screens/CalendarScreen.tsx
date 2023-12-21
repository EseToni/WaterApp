import Calendar from '@ui/components/Calendar';
import CircleLevel from '@ui/components/CircleLevel';
import React from 'react';
import { View } from 'react-native';

const CalendarScreen = () => {
  return (
    <View>
      <CircleLevel />
      <Calendar />
    </View>
  );
};

export default CalendarScreen;
