import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from './styles';
import {Icon} from 'react-native-elements';
import Slider from '@react-native-community/slider';
import Icons from 'react-native-vector-icons/dist/AntDesign';

// Components
import AppBar from '../../components/Header/Header';
import {COLORS} from '../../constants';

const Home = ({navigation}) => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);

  return (
    <View style={styles.container}>
      <AppBar />

      <View style={styles.body}>
        <TouchableOpacity style={styles.cards}>
          <Icon
            reverse
            name="male"
            type="ionicon"
            color={COLORS.grey}
            size={70}
          />
          <Text style={styles.text}>MALE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards}>
          <Icon
            reverse
            name="female"
            type="ionicon"
            color={COLORS.grey}
            size={70}
          />
          <Text style={styles.text}>FEMALE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sliderCard}>
        <Text style={styles.heading}>HEIGHT</Text>

        <View style={styles.marginTOP}>
          <Text style={styles.text}>{height} cm</Text>
        </View>

        <Slider
          style={styles.sliderSize}
          step={height}
          onValueChange={value => setHeight(value + 1)}
          maximumValue={1000}
          minimumTrackTintColor={COLORS.white}
          maximumTrackTintColor={COLORS.black}
          thumbTintColor={COLORS.pink}
        />
      </View>

      <View style={styles.body}>
        <View style={styles.card}>
          <Text style={styles.subheading}>WEIGHT</Text>
          <Text style={styles.subheading}>{weight}</Text>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => setWeight(weight - 1)}>
              <Icons
                name="minuscircle"
                type="AntDesign"
                color={COLORS.lightgrey}
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setWeight(weight + 1)}
              style={styles.marginLEFT}>
              <Icons
                name="pluscircle"
                type="AntDesign"
                color={COLORS.lightgrey}
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.subheading}>AGE</Text>
          <Text style={styles.subheading}>{age}</Text>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => setAge(age - 1)}>
              <Icons
                name="minuscircle"
                type="AntDesign"
                color={COLORS.lightgrey}
                size={30}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setAge(age + 1)}
              style={styles.marginLEFT}>
              <Icons
                name="pluscircle"
                type="AntDesign"
                color={COLORS.lightgrey}
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Result')}
        style={styles.button}>
        <Text style={styles.btnText}>CALCULATE YOUR BMI</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
