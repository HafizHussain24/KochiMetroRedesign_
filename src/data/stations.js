export const STATIONS = [
  { 
    id: 'aluva', name: 'Aluva', malayalam: 'ആലുവ', code: 'AL', zone: 1, line: 'main', 
    lat: 10.1004, lng: 76.3557, 
    facilities: ['lift', 'ramp', 'accessible-toilet', 'atm', 'parking', 'cafeteria'], 
    connectivity: { bus: ['1A', '10', '15C'], auto: true, waterMetro: false },
    nearby: [
      { name: 'Aluva Manapuram', type: 'Landmark', distance: '10 min walk' },
      { name: 'Aluva Palace', type: 'Landmark', distance: '15 min walk' },
      { name: 'Aluva Market', type: 'Shopping', distance: '5 min walk' }
    ],
    nextTrains: { up: [3, 9, 15], down: [6, 12, 18] }
  },
  { 
    id: 'pulinchodu', name: 'Pulinchodu', malayalam: 'പുലിഞ്ചോട്', code: 'PU', zone: 1, line: 'main', 
    lat: 10.0901, lng: 76.3503, 
    facilities: ['lift', 'ramp', 'accessible-toilet', 'parking'], 
    connectivity: { bus: ['10B'], auto: true, waterMetro: false },
    nearby: [
      { name: 'CUSAT Gate', type: 'Landmark', distance: '5 min walk' }
    ],
    nextTrains: { up: [4, 10, 16], down: [5, 11, 17] }
  },
  { 
    id: 'companypady', name: 'Companypady', malayalam: 'കമ്പനിപ്പടി', code: 'CO', zone: 1, line: 'main', 
    lat: 10.0818, lng: 76.3444, 
    facilities: ['lift', 'ramp', 'accessible-toilet'], 
    connectivity: { bus: [], auto: true, waterMetro: false },
    nearby: [
      { name: 'Malayalee Club', type: 'Landmark', distance: '3 min walk' }
    ],
    nextTrains: { up: [6, 12, 18], down: [3, 9, 15] }
  },
  { 
    id: 'ambattukavu', name: 'Ambattukavu', malayalam: 'അമ്പത്തുകാവ്', code: 'AM', zone: 1, line: 'main', 
    lat: 10.0734, lng: 76.3384, 
    facilities: ['lift', 'ramp', 'accessible-toilet'], 
    connectivity: { bus: [], auto: true, waterMetro: false },
    nearby: [
      { name: 'Karumathu Temple', type: 'Landmark', distance: '8 min walk' }
    ],
    nextTrains: { up: [2, 8, 14], down: [7, 13, 19] }
  },
  { 
    id: 'muttom', name: 'Muttom', malayalam: 'മുട്ടം', code: 'MU', zone: 1, line: 'main', 
    lat: 10.0632, lng: 76.3262, 
    facilities: ['lift', 'ramp', 'accessible-toilet', 'parking'], 
    connectivity: { bus: ['12'], auto: true, waterMetro: false },
    nearby: [
      { name: 'Muttom Temple', type: 'Landmark', distance: '4 min walk' }
    ],
    nextTrains: { up: [5, 11, 17], down: [4, 10, 16] }
  },
  { 
    id: 'kalamassery', name: 'Kalamassery', malayalam: 'കളമശ്ശേരി', code: 'KA', zone: 2, line: 'main', 
    lat: 10.0519, lng: 76.3193, 
    facilities: ['lift', 'ramp', 'accessible-toilet', 'atm', 'parking'], 
    connectivity: { bus: ['2', '6B', '14'], auto: true, waterMetro: false },
    nearby: [
      { name: 'Kalamassery Market', type: 'Shopping', distance: '2 min walk' },
      { name: 'KELTRON HQ', type: 'Corporate', distance: '6 min walk' }
    ],
    nextTrains: { up: [4, 10, 16], down: [5, 11, 17] }
  },
  { 
    id: 'cusat', name: 'Cochin University', malayalam: 'കൊച്ചിൻ സർവ്വകലാശാല', code: 'CU', zone: 2, line: 'main', 
    lat: 10.0435, lng: 76.3188, 
    facilities: ['lift', 'ramp', 'accessible-toilet', 'parking'], 
    connectivity: { bus: ['5', '18'], auto: true, waterMetro: false },
    nearby: [
      { name: 'CUSAT Campus', type: 'Education', distance: '10 min walk' }
    ],
    nextTrains: { up: [3, 9, 15], down: [6, 12, 18] }
  },
  { 
    id: 'pathadipalam', name: 'Pathadipalam', malayalam: 'പാതടിപ്പാലം', code: 'PA', zone: 2, line: 'main', 
    lat: 10.0337, lng: 76.3169, 
    facilities: ['lift', 'ramp', 'accessible-toilet'], 
    connectivity: { bus: [], auto: true, waterMetro: false },
    nearby: [
      { name: 'Chembumukku', type: 'Landmark', distance: '8 min walk' }
    ],
    nextTrains: { up: [5, 11, 17], down: [4, 10, 16] }
  },
  { 
    id: 'edapally', name: 'Edapally', malayalam: 'എടപ്പള്ളി', code: 'ED', zone: 2, line: 'main', 
    lat: 10.0253, lng: 76.3094, 
    facilities: ['lift', 'ramp', 'accessible-toilet', 'atm', 'parking', 'shopping'], 
    connectivity: { bus: ['3', '8', '22', '40'], auto: true, waterMetro: false },
    nearby: [
      { name: 'LuLu Mall', type: 'Shopping', distance: '3 min walk' },
      { name: 'NH Bypass Junction', type: 'Landmark', distance: '2 min walk' },
      { name: 'Edapally Church', type: 'Landmark', distance: '10 min walk' }
    ],
    nextTrains: { up: [2, 8, 14], down: [7, 13, 19] }
  },
  { 
    id: 'changampuzha', name: 'Changampuzha Park', malayalam: 'ചങ്ങമ്പുഴ പാർക്ക്', code: 'CP', zone: 2, line: 'main', 
    lat: 10.0160, lng: 76.3039, 
    facilities: ['lift', 'ramp', 'accessible-toilet'], 
    connectivity: { bus: [], auto: true, waterMetro: false },
    nearby: [
      { name: 'Changampuzha Park', type: 'Landmark', distance: '2 min walk' },
      { name: 'PVS Hospital', type: 'Hospital', distance: '5 min walk' }
    ],
    nextTrains: { up: [4, 10, 16], down: [5, 11, 17] }
  },
  { 
    id: 'palarivattom', name: 'Palarivattom', malayalam: 'പാലാരിവട്ടം', code: 'PL', zone: 2, line: 'main', 
    lat: 10.0076, lng: 76.3038, 
    facilities: ['lift', 'ramp', 'accessible-toilet', 'parking'], 
    connectivity: { bus: ['4', '17'], auto: true, waterMetro: false },
    nearby: [
      { name: 'Palarivattom Flyover', type: 'Landmark', distance: '3 min walk' }
    ],
    nextTrains: { up: [6, 12, 18], down: [3, 9, 15] }
  },
  { 
    id: 'jln-stadium', name: 'JLN Stadium', malayalam: 'ജെ.എൽ.എൻ സ്റ്റേഡിയം', code: 'JL', zone: 3, line: 'main', 
    lat: 9.9984, lng: 76.2977, 
    facilities: ['lift', 'ramp', 'accessible-toilet', 'atm', 'parking'], 
    connectivity: { bus: [], auto: true, waterMetro: false },
    nearby: [
      { name: 'Jawaharlal Nehru Stadium', type: 'Landmark', distance: '2 min walk' },
      { name: 'KMRL HQ', type: 'Corporate', distance: '1 min walk' }
    ],
    nextTrains: { up: [3, 9, 15], down: [6, 12, 18] }
  },
  { 
    id: 'kaloor', name: 'Kaloor', malayalam: 'കലൂർ', code: 'KL', zone: 3, line: 'main', 
    lat: 9.9922, lng: 76.2917, 
    facilities: ['lift', 'ramp', 'accessible-toilet', 'atm', 'parking'], 
    connectivity: { bus: ['5', '19'], auto: true, waterMetro: false },
    nearby: [
      { name: 'Kaloor Market', type: 'Shopping', distance: '4 min walk' },
      { name: 'EMS Stadium', type: 'Landmark', distance: '5 min walk' }
    ],
    nextTrains: { up: [2, 8, 14], down: [7, 13, 19] }
  },
  { 
    id: 'town-hall', name: 'Town Hall', malayalam: 'ടൗൺ ഹാൾ', code: 'TH', zone: 3, line: 'main', 
    lat: 9.9867, lng: 76.2878, 
    facilities: ['lift', 'ramp', 'accessible-toilet'], 
    connectivity: { bus: [], auto: true, waterMetro: false },
    nearby: [
      { name: 'Town Hall', type: 'Landmark', distance: '2 min walk' },
      { name: 'Durbar Hall', type: 'Landmark', distance: '12 min walk' }
    ],
    nextTrains: { up: [5, 11, 17], down: [4, 10, 16] }
  },
  { 
    id: 'mg-road', name: 'M.G Road', malayalam: 'എം.ജി. റോഡ്', code: 'MG', zone: 3, line: 'main', 
    lat: 9.9765, lng: 76.2843, 
    facilities: ['lift', 'ramp', 'accessible-toilet', 'shopping'], 
    connectivity: { bus: ['6', '24'], auto: true, waterMetro: false },
    nearby: [
      { name: 'Dhe Puttu', type: 'Restaurant', distance: '2 min walk' },
      { name: 'Centre Square Mall', type: 'Shopping', distance: '3 min walk' },
      { name: 'Marine Drive Promenade', type: 'Landmark', distance: '4 min walk' },
      { name: 'The Grand Hotel Kochi', type: 'Hotel', distance: '5 min walk' },
      { name: 'Kashi Art Café', type: 'Café', distance: '4 min walk' },
      { name: 'Amrita Institute', type: 'Hospital', distance: '8 min walk' }
    ],
    nextTrains: { up: [3, 9, 15], down: [6, 12, 18] }
  },
  { 
    id: 'maharajas', name: 'Maharajas College', malayalam: 'മഹാരാജാസ് കോളേജ്', code: 'MC', zone: 3, line: 'main', 
    lat: 9.9678, lng: 76.2831, 
    facilities: ['lift', 'ramp', 'accessible-toilet', 'parking'], 
    connectivity: { bus: [], auto: true, waterMetro: false },
    nearby: [
      { name: 'Maharajas College', type: 'Education', distance: '2 min walk' },
      { name: 'Durbar Hall Ground', type: 'Landmark', distance: '5 min walk' }
    ],
    nextTrains: { up: [4, 10, 16], down: [5, 11, 17] }
  },
  { 
    id: 'ernakulam-south', name: 'Ernakulam South', malayalam: 'എറണാകുളം സൗത്ത്', code: 'ES', zone: 4, line: 'main', 
    lat: 9.9613, lng: 76.2918, 
    facilities: ['lift', 'ramp', 'accessible-toilet', 'atm'], 
    connectivity: { bus: ['7', '29'], auto: true, waterMetro: true, waterMetroPlatform: 'Ernakulam Boat Jetty' },
    nearby: [
      { name: 'Ernakulam Jn. Railway Stn', type: 'Landmark', distance: '3 min walk' }
    ],
    nextTrains: { up: [2, 8, 14], down: [7, 13, 19] }
  },
  { 
    id: 'kadavanthra', name: 'Kadavanthra', malayalam: 'കടവന്ത്ര', code: 'KD', zone: 4, line: 'main', 
    lat: 9.9647, lng: 76.3015, 
    facilities: ['lift', 'ramp', 'accessible-toilet', 'parking'], 
    connectivity: { bus: [], auto: true, waterMetro: false },
    nearby: [
      { name: 'Kadavanthra Market', type: 'Shopping', distance: '3 min walk' }
    ],
    nextTrains: { up: [6, 12, 18], down: [3, 9, 15] }
  },
  { 
    id: 'elamkulam', name: 'Elamkulam', malayalam: 'ഏലംകുളം', code: 'EK', zone: 4, line: 'main', 
    lat: 9.9676, lng: 76.3117, 
    facilities: ['lift', 'ramp', 'accessible-toilet'], 
    connectivity: { bus: [], auto: true, waterMetro: false },
    nearby: [
      { name: 'Lotus Club', type: 'Landmark', distance: '5 min walk' },
      { name: 'InfoPark Road', type: 'Landmark', distance: '8 min walk' }
    ],
    nextTrains: { up: [5, 11, 17], down: [4, 10, 16] }
  },
  { 
    id: 'vyttila', name: 'Vyttila', malayalam: 'വൈറ്റില', code: 'VY', zone: 4, line: 'main', 
    lat: 9.9669, lng: 76.3199, 
    facilities: ['lift', 'ramp', 'accessible-toilet', 'atm', 'parking', 'cafeteria'], 
    connectivity: { bus: ['9', '11', '31', 'Hub'], auto: true, waterMetro: true, waterMetroPlatform: 'Vyttila Jetty' },
    nearby: [
      { name: 'Vyttila Hub', type: 'Landmark', distance: '1 min walk' },
      { name: 'Willingdon Island', type: 'Landmark', distance: '20 min bus' }
    ],
    nextTrains: { up: [3, 9, 15], down: [6, 12, 18] }
  },
  { 
    id: 'thaikoodam', name: 'Thaikoodam', malayalam: 'തൈക്കൂടം', code: 'TK', zone: 4, line: 'main', 
    lat: 9.9579, lng: 76.3216, 
    facilities: ['lift', 'ramp', 'accessible-toilet'], 
    connectivity: { bus: [], auto: true, waterMetro: false },
    nearby: [
      { name: 'Thaikoodam Bridge', type: 'Landmark', distance: '3 min walk' }
    ],
    nextTrains: { up: [4, 10, 16], down: [5, 11, 17] }
  },
  { 
    id: 'petta', name: 'Petta', malayalam: 'പേട്ട', code: 'PT', zone: 5, line: 'main', 
    lat: 9.9485, lng: 76.3312, 
    facilities: ['lift', 'ramp', 'accessible-toilet', 'parking'], 
    connectivity: { bus: [], auto: true, waterMetro: false },
    nearby: [
      { name: 'Petta Market', type: 'Shopping', distance: '2 min walk' }
    ],
    nextTrains: { up: [6, 12, 18], down: [3, 9, 15] }
  },
  { 
    id: 'vadakkekotta', name: 'Vadakkekotta', malayalam: 'വടക്കേക്കോട്ട', code: 'VK', zone: 5, line: 'main', 
    lat: 9.9442, lng: 76.3400, 
    facilities: ['lift', 'ramp', 'accessible-toilet'], 
    connectivity: { bus: [], auto: true, waterMetro: false },
    nearby: [
      { name: 'Vadakkekotta Fort', type: 'Landmark', distance: '5 min walk' }
    ],
    nextTrains: { up: [2, 8, 14], down: [7, 13, 19] }
  },
  { 
    id: 'sn-junction', name: 'SN Junction', malayalam: 'എസ്.എൻ. ജംഗ്ഷൻ', code: 'SN', zone: 5, line: 'main', 
    lat: 9.9450, lng: 76.3479, 
    facilities: ['lift', 'ramp', 'accessible-toilet', 'parking'], 
    connectivity: { bus: [], auto: true, waterMetro: false },
    nearby: [
      { name: 'SN College', type: 'Education', distance: '3 min walk' }
    ],
    nextTrains: { up: [5, 11, 17], down: [4, 10, 16] }
  },
  { 
    id: 'thripunithura', name: 'Thripunithura', malayalam: 'തൃപ്പൂണിത്തുറ', code: 'TR', zone: 5, line: 'main', 
    lat: 9.9502, lng: 76.3533, 
    facilities: ['lift', 'ramp', 'accessible-toilet', 'atm', 'parking'], 
    connectivity: { bus: ['8', '35'], auto: true, waterMetro: false },
    nearby: [
      { name: 'Hill Palace Museum', type: 'Landmark', distance: '10 min auto' },
      { name: 'Thripunithura Palace', type: 'Landmark', distance: '5 min auto' }
    ],
    nextTrains: { up: [4, 10, 16], down: [0, 0, 0] }
  },
  { 
    id: 'kakkanad', name: 'Kakkanad', malayalam: 'കക്കനാട്', code: 'KK', zone: 6, line: 'branch', 
    lat: 10.0163, lng: 76.3421, 
    facilities: ['lift', 'ramp', 'accessible-toilet'], 
    connectivity: { bus: [], auto: true, waterMetro: false },
    nearby: [
      { name: 'InfoPark', type: 'Corporate', distance: '5 min walk' },
      { name: 'Kochi SEZ', type: 'Corporate', distance: '10 min walk' }
    ],
    nextTrains: { up: [10, 25, 40], down: [5, 20, 35] }
  }
];
