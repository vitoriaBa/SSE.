import React from 'react';
import { View } from 'react-native';
import FcCalendario from './funcoaCalendario'; // Certifique-se de importar corretamente o componente

const Calendario = () => {
  return (
    <View>
      <Calendario month={4} year={2024} />
    </View>
  );
};

export default Calendario;
