import { ScreenStyles } from '@styles/layout/SetupScreen';
import React, { useState } from 'react';
import { View, ScrollView, Text, Switch } from 'react-native';

const CustomCard = ({ title, subtitle, text }) => {
  return (
    <View style={ScreenStyles.customCard}>
      <Text style={ScreenStyles.customTitle}>{title}</Text>
      <Text style={ScreenStyles.customSubtitle}>{subtitle}</Text>
      <Text style={ScreenStyles.text}>{text}</Text>
    </View>
  );
};

const Card = ({ title }) => {
  return (
    <View style={ScreenStyles.card}>
      <Text style={ScreenStyles.title}>{title}</Text>
    </View>
  );
};

const SwitchCard = ({ title, subtitle }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={ScreenStyles.switchCard}>
      <View style={ScreenStyles.header}>
        <Text style={ScreenStyles.title}>{title}</Text>
        <Text style={ScreenStyles.subtitle}>{subtitle}</Text>
      </View>
      <View style={ScreenStyles.switchContainer}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const SetupScreen = () => {
  return (
    <ScrollView
      style={ScreenStyles.container}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <SwitchCard
          title="Recordatorios"
          subtitle="Notificaciones saludables cuando olvides beber agua"
        />
        <CustomCard
          title="2000ml"
          subtitle="meta diaria comun"
          text="cambiar el peso, la actividad diaria o el clima"
        />
        <Card title="Agregar/Editar bebidas" />
        <Card title="Sonidos de la aplicaicon" />
        <Card title="Hora de reinicio del día, Semana" />
        <Card title="Widgets" />
        <Card title="Sinc con Salud de Apple" />
        <Card title="Apple Watch" />
        <Card title="Respaldar en iCloud" />
      </View>
    </ScrollView>
  );
};

export default SetupScreen;
