import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AppBar from '../../components/Header/Header';
import {styles} from './styles';

const Result = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AppBar />

      <View style={styles.paddingTOP}>
        <Text style={styles.title}>Your Result</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.normal}>NORMAL</Text>
        <Text style={styles.result}>22.1</Text>

        <Text style={styles.heading}>Normal BMI range:</Text>
        <Text style={styles.subHeading}>18,5 - 25 kg/m2</Text>

        <Text style={styles.description}>You have a normal body</Text>
        <Text style={styles.subHeading}>weight. Good job!</Text>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.content}>SAVE RESULT</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text style={styles.btnText}>RE - CALCULATE YOUR BMI</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;
