import React, { useEffect, useState } from "react";
import { View, StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './data/store';

import { Styles } from './utils/styles';

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons/faFlagCheckered';
import { faBan } from '@fortawesome/free-solid-svg-icons/faBan';
import { faLockOpen } from '@fortawesome/free-solid-svg-icons/faLockOpen';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faCalendar } from '@fortawesome/free-regular-svg-icons/faCalendar';
import { faClock } from '@fortawesome/free-regular-svg-icons/faClock';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons/faDeleteLeft';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons/faCalendarCheck';

library.add(faFlagCheckered, faBan, faLockOpen, faLock, faChevronRight, faChevronLeft, faCalendar, faClock, faDeleteLeft, faCalendarCheck);

import MainContainer from './containers/MainContainer';
import TestContainer from './containers/TestContainer';

import Connection from './components/Connection';
import Notification from './components/Notification';

import Qbic from './components/api/qbic';
import Newbest from './components/api/Newbest';
import WebApi from './components/api/WebApi';

import DataManager from './data/DataManager';

export const Context = React.createContext();

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin, Montserrat_200ExtraLight, Montserrat_300Light, Montserrat_400Regular, Montserrat_500Medium,
    Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_800ExtraBold, Montserrat_900Black,
  });

  const [date, setDate] = useState(new Date());
  const [update, setUpdate] = useState({});

  const [notification, setNotification] = useState({ text: "", color: "#ffffff" });

  useEffect(() => {
    setDate(new Date());
    let secTimer = setInterval(() => {
      try {
        setDate(new Date());
      } catch (e) {
        console.log('APP: не удалось обновить дату');
      }
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return (
    <Provider store={store}>{
      !fontsLoaded ? <p>загрузка шрифтов...</p> :
        <View style={Styles.bg}>
          <MainContainer
            date={date}
            setUpdate={setUpdate}
          />
          {/* <TestContainer /> */}

          {/* API's */}
          <Qbic  />
          <Newbest  />
          <WebApi  />
          {/* API's */}

          <Notification setNotification={setNotification} notification={notification} />
          <DataManager />
          <Connection
            setNotification={setNotification}
            date={date} update={update}
          />
          <StatusBar hidden={true} translucent={true}></StatusBar>
        </View>
    }</Provider>
  );
}
