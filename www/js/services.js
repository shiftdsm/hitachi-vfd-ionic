angular.module('starter.services', [])

.factory('Catalog', function() {
  // Might use a resource here that returns a JSON array

  // Inverter data
  var catalog = [{

    ///////////////////////////
    //NE-S1 Series 
    //////////////////////////
    ///////////////////////////
    //NE-S1 1-PHASE 200V CLASS
    //////////////////////////
    
        id: 1,
        series: 'NE-S1',
        model: 'NES1-004SB',
        imageURL: 'img/NES1.jpg',
        kw: 0.4,
        hp: 0.5,
        hpdisplay: '1/2',
        amp: 2.6,
        volts: 200,
        phase: true,
        phasedisplay: 'Single Phase',
        emcfilter: true,
        easysq: false,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=NES1-004SB',
        features: ['Preconfigured for out of the box use', 'Remote keypad with built in potentiometer', 'ProDriveNext PC based configuration software- optional', 'Economical and Simple to use', 'Ultra compact design', '3 wire Start Stop compatible', 'Logic and time delay functions built in', 'Sink or Source input compatible', 'RS-485 Modbus RTU built in', 'CE/UL/cUL/c-Tick approvals', 'Energy Saving function built in', 'EMC Filter']
      },  {
        id: 2,
        series: 'NE-S1',
        model: 'NES1-007SB',
        imageURL: 'img/NES1.jpg',
        kw: 0.75,
        hp: 1,
        hpdisplay: '1',
        amp: 4.0,
        volts: 200,
        phase: 1,
        phasedisplay: 'Single Phase',
        emcfilter: true,
        easysq: false,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=NES1-007SB',
        features: ['Preconfigured for out of the box use', 'Remote keypad with built in potentiometer', 'ProDriveNext PC based configuration software- optional', 'Economical and Simple to use', 'Ultra compact design', '3 wire Start Stop compatible', 'Logic and time delay functions built in', 'Sink or Source input compatible', 'RS-485 Modbus RTU built in', 'CE/UL/cUL/c-Tick approvals', 'Energy Saving function built in', 'EMC Filter']
      },  {
        id: 3,
        series: 'NE-S1',
        model: 'NES1-015SB',
        imageURL: 'img/NES1.jpg',
        kw: 1.5,
        hp: 2,
        hpdisplay: '2',
        amp: 7.1,
        volts: 200,
        phase: 1,
        phasedisplay: 'Single Phase',
        emcfilter: true,
        easysq: false,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=NES1-015SB',
        features: ['Preconfigured for out of the box use', 'Remote keypad with built in potentiometer', 'ProDriveNext PC based configuration software- optional', 'Economical and Simple to use', 'Ultra compact design', '3 wire Start Stop compatible', 'Logic and time delay functions built in', 'Sink or Source input compatible', 'RS-485 Modbus RTU built in', 'CE/UL/cUL/c-Tick approvals', 'Energy Saving function built in', 'EMC Filter']
      }, {
        id: 4,
        series: 'NE-S1',
        model: 'NES1-022SB',
        imageURL: 'img/NES1.jpg',
        kw: 2.2,
        hp: 3,
        hpdisplay: '3',
        amp: 10.0,
        volts: 200,
        phase: 1,
        phasedisplay: 'Single Phase',
        emcfilter: true,
        easysq: false,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=NES1-022SB',
        features: ['Preconfigured for out of the box use', 'Remote keypad with built in potentiometer', 'ProDriveNext PC based configuration software- optional', 'Economical and Simple to use', 'Ultra compact design', '3 wire Start Stop compatible', 'Logic and time delay functions built in', 'Sink or Source input compatible', 'RS-485 Modbus RTU built in', 'CE/UL/cUL/c-Tick approvals', 'Energy Saving function built in', 'EMC Filter']
      }, 
    
    ///////////////////////////
    //NE-S1 3-PHASE 200V CLASS
    //////////////////////////
    
      {
        id: 5,
        series: 'NE-S1',
        model: 'NES1-002LB',
        imageURL: 'img/NES1.jpg',
        kw: 0.2,
        hp: 0.25,
        hpdisplay: '1/4',
        amp: 1.4,
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: false,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=NES1-002LB',
        features: ['Preconfigured for out of the box use', 'Remote keypad with built in potentiometer', 'ProDriveNext PC based configuration software- optional', 'Economical and Simple to use', 'Ultra compact design', '3 wire Start Stop compatible', 'Logic and time delay functions built in', 'Sink or Source input compatible', 'RS-485 Modbus RTU built in', 'CE/UL/cUL/c-Tick approvals', 'Energy Saving function built in', 'EMC Filter']
      }, {
        id: 6,
        series: 'NE-S1',
        model: 'NES1-004LB',
        imageURL: 'img/NES1.jpg',
        kw: 0.4,
        hp: 0.5,
        hpdisplay: '1/2',
        amp: 2.6,
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: false,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=NES1-004LB',
        features: ['Preconfigured for out of the box use', 'Remote keypad with built in potentiometer', 'ProDriveNext PC based configuration software- optional', 'Economical and Simple to use', 'Ultra compact design', '3 wire Start Stop compatible', 'Logic and time delay functions built in', 'Sink or Source input compatible', 'RS-485 Modbus RTU built in', 'CE/UL/cUL/c-Tick approvals', 'Energy Saving function built in', 'EMC Filter']
      }, {
        id: 7,
        series: 'NE-S1',
        model: 'NES1-007LB',
        imageURL: 'img/NES1.jpg',
        kw: 0.75,
        hp: 1,
        hpdisplay: '1',
        amp: 4.0,
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: false,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=NES1-007LB',
        features: ['Preconfigured for out of the box use', 'Remote keypad with built in potentiometer', 'ProDriveNext PC based configuration software- optional', 'Economical and Simple to use', 'Ultra compact design', '3 wire Start Stop compatible', 'Logic and time delay functions built in', 'Sink or Source input compatible', 'RS-485 Modbus RTU built in', 'CE/UL/cUL/c-Tick approvals', 'Energy Saving function built in', 'EMC Filter']
        }, {
        id: 8,
        series: 'NE-S1',
        model: 'NES1-015LB',
        imageURL: 'img/NES1.jpg',
        kw: 1.5,
        hp: 2,
        hpdisplay: '2',
        amp: 7.1,
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: false,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=NES1-015LB',
        features: ['Preconfigured for out of the box use', 'Remote keypad with built in potentiometer', 'ProDriveNext PC based configuration software- optional', 'Economical and Simple to use', 'Ultra compact design', '3 wire Start Stop compatible', 'Logic and time delay functions built in', 'Sink or Source input compatible', 'RS-485 Modbus RTU built in', 'CE/UL/cUL/c-Tick approvals', 'Energy Saving function built in', 'EMC Filter']
        }, {
        id: 9,
        series: 'NE-S1',
        model: 'NES1-022LB',
        imageURL: 'img/NES1.jpg',
        kw: 2.2,
        hp: 3,
        hpdisplay: '3',
        amp: 10.0,
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: false,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=NES1-022LB',
        features: ['Preconfigured for out of the box use', 'Remote keypad with built in potentiometer', 'ProDriveNext PC based configuration software- optional', 'Economical and Simple to use', 'Ultra compact design', '3 wire Start Stop compatible', 'Logic and time delay functions built in', 'Sink or Source input compatible', 'RS-485 Modbus RTU built in', 'CE/UL/cUL/c-Tick approvals', 'Energy Saving function built in', 'EMC Filter']
        }, 
    
    ///////////////////////////
    //NE-S1 3-PHASE 400V CLASS
    //////////////////////////
    
        {
        id: 10,
        series: 'NE-S1',
        model: 'NES1-004HB',
        imageURL: 'img/NES1.jpg',
        kw: 2.2,
        hp: 0.5,
        hpdisplay: '1/2',
        amp: 1.5,
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: false,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=NES1-004HB',
        features: ['Preconfigured for out of the box use', 'Remote keypad with built in potentiometer', 'ProDriveNext PC based configuration software- optional', 'Economical and Simple to use', 'Ultra compact design', '3 wire Start Stop compatible', 'Logic and time delay functions built in', 'Sink or Source input compatible', 'RS-485 Modbus RTU built in', 'CE/UL/cUL/c-Tick approvals', 'Energy Saving function built in', 'EMC Filter']
        }, {
        id: 11,
        series: 'NE-S1',
        model: 'NES1-007HB',
        imageURL: 'img/NES1.jpg',
        kw: 2.2,
        hp: 1,
        hpdisplay: '1',
        amp: 2.5,
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: false,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=NES1-007HB',
        features: ['Preconfigured for out of the box use', 'Remote keypad with built in potentiometer', 'ProDriveNext PC based configuration software- optional', 'Economical and Simple to use', 'Ultra compact design', '3 wire Start Stop compatible', 'Logic and time delay functions built in', 'Sink or Source input compatible', 'RS-485 Modbus RTU built in', 'CE/UL/cUL/c-Tick approvals', 'Energy Saving function built in', 'EMC Filter']
        }, {
        id: 12,
        series: 'NE-S1',
        model: 'NES1-015HB',
        imageURL: 'img/NES1.jpg',
        kw: 2.2,
        hp: 2,
        hpdisplay: '2',
        amp: 4.1,
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: false,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=NES1-015HB',
        features: ['Preconfigured for out of the box use', 'Remote keypad with built in potentiometer', 'ProDriveNext PC based configuration software- optional', 'Economical and Simple to use', 'Ultra compact design', '3 wire Start Stop compatible', 'Logic and time delay functions built in', 'Sink or Source input compatible', 'RS-485 Modbus RTU built in', 'CE/UL/cUL/c-Tick approvals', 'Energy Saving function built in', 'EMC Filter']
        }, {
        id: 13,
        series: 'NE-S1',
        model: 'NES1-022HB',
        imageURL: 'img/NES1.jpg',
        kw: 2.2,
        hp: 3,
        hpdisplay: '3',
        amp: 5.5,
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: false,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=NES1-022HB',
        features: ['Preconfigured for out of the box use', 'Remote keypad with built in potentiometer', 'ProDriveNext PC based configuration software- optional', 'Economical and Simple to use', 'Ultra compact design', '3 wire Start Stop compatible', 'Logic and time delay functions built in', 'Sink or Source input compatible', 'RS-485 Modbus RTU built in', 'CE/UL/cUL/c-Tick approvals', 'Energy Saving function built in', 'EMC Filter']
        }, {
        id: 14,
        series: 'NE-S1',
        model: 'NES1-040HB',
        imageURL: 'img/NES1.jpg',
        kw: 2.2,
        hp: 5,
        hpdisplay: '5',
        amp: 9.0,
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: false,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=NES1-040HB',
        features: ['Preconfigured for out of the box use', 'Remote keypad with built in potentiometer', 'ProDriveNext PC based configuration software- optional', 'Economical and Simple to use', 'Ultra compact design', '3 wire Start Stop compatible', 'Logic and time delay functions built in', 'Sink or Source input compatible', 'RS-485 Modbus RTU built in', 'CE/UL/cUL/c-Tick approvals', 'Energy Saving function built in', 'EMC Filter']
        },
    
    ///////////////////////////////////////
    //BEGIN WJ200 SERIES! OMG!
    //////////////////////////////////////
    ///////////////////////////
    //WJ200 1-PHASE 100V CLASS
    //////////////////////////
    
        {
        id: 15,
        series: 'WJ200',
        model: 'WJ200-004MF',
        imageURL: 'img/WJ200.jpg',
        kw: 0.4,
        hp: 0.5,
        hpdisplay: '1/2',
        amp: 3.5,
        volts: 100,
        phase: 1,
        phasedisplay: 'Single Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-004MF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 16,
        series: 'WJ200',
        model: 'WJ200-007MF',
        imageURL: 'img/WJ200.jpg',
        kw: 0.75,
        hp: 1,
        hpdisplay: '1',
        amp: 5.0,
        volts: 100,
        phase: 1,
        phasedisplay: 'Single Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-007MF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, 
    
    ///////////////////////////
    //WJ200 1-PHASE 200V CLASS
    //////////////////////////
    
        {
        id: 17,
        series: 'WJ200',
        model: 'WJ200-001SF',
        imageURL: 'img/WJ200.jpg',
        kw: 0.1,
        hp: 0.125,
        hpdisplay: '1/8',
        amp: '1.0 (1.2)',
        volts: 200,
        phase: 1,
        phasedisplay: 'Single Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-001SF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 18,
        series: 'WJ200',
        model: 'WJ200-002SF',
        imageURL: 'img/WJ200.jpg',
        kw: 0.2,
        hp: 0.25,
        hpdisplay: '1/4',
        amp: '1.6 (1.9)',
        volts: 200,
        phase: 1,
        phasedisplay: 'Single Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-002SF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 19,
        series: 'WJ200',
        model: 'WJ200-004SF',
        imageURL: 'img/WJ200.jpg',
        kw: 0.4,
        hp: 0.50,
        hpdisplay: '1/2',
        amp: '3.0 (3.5)',
        volts: 200,
        phase: 1,
        phasedisplay: 'Single Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-004SF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 20,
        series: 'WJ200',
        model: 'WJ200-007SF',
        imageURL: 'img/WJ200.jpg',
        kw: 0.75,
        hp: 1,
        hpdisplay: '1',
        amp: '5.0 (6.0)',
        volts: 200,
        phase: 1,
        phasedisplay: 'Single Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-007SF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 21,
        series: 'WJ200',
        model: 'WJ200-015SF',
        imageURL: 'img/WJ200.jpg',
        kw: 1.5,
        hp: 2,
        hpdisplay: '2',
        amp: '8.0 (9.6)',
        volts: 200,
        phase: 1,
        phasedisplay: 'Single Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-015SF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 22,
        series: 'WJ200',
        model: 'WJ200-022SF',
        imageURL: 'img/WJ200.jpg',
        kw: 2.2,
        hp: 3,
        hpdisplay: '3',
        amp: '11.0 (12.0)',
        volts: 200,
        phase: 1,
        phasedisplay: 'Single Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-022SF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, 
    
    ///////////////////////////
    //WJ200 3-PHASE 200V CLASS
    //////////////////////////
    
        {
        id: 23,
        series: 'WJ200',
        model: 'WJ200-001LF',
        imageURL: 'img/WJ200.jpg',
        kw: 0.1,
        hp: 0.125,
        hpdisplay: '1/8',
        amp: '1.0 (1.2)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 24,
        series: 'WJ200',
        model: 'WJ200-002LF',
        imageURL: 'img/WJ200.jpg',
        kw: 0.2,
        hp: 0.25,
        hpdisplay: '1/4',
        amp: '1.6 (1.9)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-002LF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 25,
        series: 'WJ200',
        model: 'WJ200-004LF',
        imageURL: 'img/WJ200.jpg',
        kw: 0.4,
        hp: 0.50,
        hpdisplay: '1/2',
        amp: '3.0 (3.5)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-004LF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 26,
        series: 'WJ200',
        model: 'WJ200-007LF',
        imageURL: 'img/WJ200.jpg',
        kw: 0.75,
        hp: 1,
        hpdisplay: '1',
        amp: '5.0 (6.0)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-007LF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 27,
        series: 'WJ200',
        model: 'WJ200-015LF',
        imageURL: 'img/WJ200.jpg',
        kw: 1.5,
        hp: 2,
        hpdisplay: '2',
        amp: '8.0 (9.6)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-015LF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 28,
        series: 'WJ200',
        model: 'WJ200-022LF',
        imageURL: 'img/WJ200.jpg',
        kw: 2.2,
        hp: 3,
        hpdisplay: '3',
        amp: '11.0 (12.0)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-022LF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 29,
        series: 'WJ200',
        model: 'WJ200-037LF',
        imageURL: 'img/WJ200.jpg',
        kw: 3.7,
        hp: 5,
        hpdisplay: '5',
        amp: '17.5 (19.6)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-037LF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 30,
        series: 'WJ200',
        model: 'WJ200-055LF',
        imageURL: 'img/WJ200.jpg',
        kw: 5.5,
        hp: 7.5,
        hpdisplay: '7 1/2',
        amp: '25.0 (30.0)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-055LF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 31,
        series: 'WJ200',
        model: 'WJ200-075LF',
        imageURL: 'img/WJ200.jpg',
        kw: 7.5,
        hp: 10,
        hpdisplay: '10',
        amp: '33.0 (40.0)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-075LF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 32,
        series: 'WJ200',
        model: 'WJ200-110LF',
        imageURL: 'img/WJ200.jpg',
        kw: 11,
        hp: 15,
        hpdisplay: '15',
        amp: '47.0 (56.0)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-110LF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 33,
        series: 'WJ200',
        model: 'WJ200-150LF',
        imageURL: 'img/WJ200.jpg',
        kw: 15,
        hp: 20,
        hpdisplay: '20',
        amp: '60.0 (69.0)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-150LF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, 
    
    ///////////////////////////
    //WJ200 3-PHASE 400V CLASS
    //////////////////////////
    
        {
        id: 34,
        series: 'WJ200',
        model: 'WJ200-004HF',
        imageURL: 'img/WJ200.jpg',
        kw: 0.4,
        hp: 0.50,
        hpdisplay: '1/2',
        amp: '1.8 (2.1)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-004HF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 35,
        series: 'WJ200',
        model: 'WJ200-007HF',
        imageURL: 'img/WJ200.jpg',
        kw: 0.75,
        hp: 1,
        hpdisplay: '1',
        amp: '3.4 (4.1)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-007HF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 36,
        series: 'WJ200',
        model: 'WJ200-015HF',
        imageURL: 'img/WJ200.jpg',
        kw: 1.5,
        hp: 2,
        hpdisplay: '2',
        amp: '4.8 (5.4)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-015HF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 37,
        series: 'WJ200',
        model: 'WJ200-022HF',
        imageURL: 'img/WJ200.jpg',
        kw: 2.2,
        hp: 4,
        hpdisplay: '4',
        amp: '5.5 (6.9)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-022HF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 38,
        series: 'WJ200',
        model: 'WJ200-030HF',
        imageURL: 'img/WJ200.jpg',
        kw: 3.0,
        hp: 4,
        hpdisplay: '4',
        amp: '7.2 (8.8)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-030HF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 39,
        series: 'WJ200',
        model: 'WJ200-040HF',
        imageURL: 'img/WJ200.jpg',
        kw: 4.0,
        hp: 5,
        hpdisplay: '5',
        amp: '9.2 (11.1)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-040HF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 40,
        series: 'WJ200',
        model: 'WJ200-055HF',
        imageURL: 'img/WJ200.jpg',
        kw: 5.5,
        hp: 7.5,
        hpdisplay: '7 1/2',
        amp: '14.8 (17.5)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-055HF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 41,
        series: 'WJ200',
        model: 'WJ200-075HF',
        imageURL: 'img/WJ200.jpg',
        kw: 7.5,
        hp: 10,
        hpdisplay: '10',
        amp: '18.0 (23.0)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-075HF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 42,
        series: 'WJ200',
        model: 'WJ200-110HF',
        imageURL: 'img/WJ200.jpg',
        kw: 11,
        hp: 15,
        hpdisplay: '15',
        amp: '24.0 (31.0)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-110HF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
        }, {
        id: 43,
        series: 'WJ200',
        model: 'WJ200-150HF',
        imageURL: 'img/WJ200.jpg',
        kw: 15,
        hp: 20,
        hpdisplay: '20',
        amp: '31.0 (38.0)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=WJ200-150HF',
        features: ['High starting torque and dramatically improved speed stability thanks to advanced sensorless vector control', 'Simplified autotuning procedure', 'Easy setup and operation via standard integral keypad, optional enhanced keypad or via PC software', 'Dynamic braking transistor in all models', 'EasySequence (EzSQ) PLC-like functionality built in', 'Simple position control capability', 'Capable of driving permanent magnet as well as standard induction motors', 'Dual rated for CT/VT applications', 'EMC Filter', 'New and more effective trip avoidance functions, safe-stop function and much more']
    
    ///////////////////////////////////////
    //NOW TIME FOR THE SJ-P1 SERIES! OMG!
    //////////////////////////////////////
    ///////////////////////////
    //SJ-P1 3-PHASE 200V CLASS
    //////////////////////////
    
        }, {
        id: 44,
        series: 'SJ-P1',
        model: 'P1-00044-LFUF',
        imageURL: 'img/SJp1web.png',
        kw: 0.4,
        hp: 0.50,
        hpdisplay: '1/2',
        amp: '3.0 (3.7)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00044-LFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 45,
        series: 'SJ-P1',
        model: 'P1-00080-LFUF',
        imageURL: 'img/SJp1web.png',
        kw: 0.75,
        hp: 1,
        hpdisplay: '1',
        amp: '5.0 (6.3)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00080-LFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 46,
        series: 'SJ-P1',
        model: 'P1-00104-LFUF',
        imageURL: 'img/SJp1web.png',
        kw: 1.5,
        hp: 2,
        hpdisplay: '2',
        amp: '7.5 (9.4)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00104-LFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 47,
        series: 'SJ-P1',
        model: 'P1-00156-LFUF',
        imageURL: 'img/SJp1web.png',
        kw: 2.2,
        hp: 3,
        hpdisplay: '3',
        amp: '10.5 (12)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00156-LFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 48,
        series: 'SJ-P1',
        model: 'P1-00228-LFUF',
        imageURL: 'img/SJp1web.png',
        kw: 3.7,
        hp: 5,
        hpdisplay: '5',
        amp: '16.5 (19.6)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00228-LFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 49,
        series: 'SJ-P1',
        model: 'P1-00330-LFUF',
        imageURL: 'img/SJp1web.png',
        kw: 5.5,
        hp: 7.5,
        hpdisplay: '7 1/2',
        amp: '24 (30)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00330-LFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 50,
        series: 'SJ-P1',
        model: 'P1-00460-LFUF',
        imageURL: 'img/SJp1web.png',
        kw: 7.5,
        hp: 10,
        hpdisplay: '10',
        amp: '32 (44)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00460-LFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 51,
        series: 'SJ-P1',
        model: 'P1-00600-LFUF',
        imageURL: 'img/SJp1web.png',
        kw: 11,
        hp: 15,
        hpdisplay: '15',
        amp: '46 (58)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00600-LFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 52,
        series: 'SJ-P1',
        model: 'P1-00800-LFUF',
        imageURL: 'img/SJp1web.png',
        kw: 15,
        hp: 20,
        hpdisplay: '20',
        amp: '64 (73)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00800-LFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 53,
        series: 'SJ-P1',
        model: 'P1-00930-LFUF',
        imageURL: 'img/SJp1web.png',
        kw: 18.5,
        hp: 25,
        hpdisplay: '25',
        amp: '76 (85)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00930-LFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 54,
        series: 'SJ-P1',
        model: 'P1-01240-LFUF',
        imageURL: 'img/SJp1web.png',
        kw: 22,
        hp: 30,
        hpdisplay: '30',
        amp: '95 (113)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-01240-LFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 55,
        series: 'SJ-P1',
        model: 'P1-01530-LFUF',
        imageURL: 'img/SJp1web.png',
        kw: 30,
        hp: 40,
        hpdisplay: '40',
        amp: '121 (140)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-01530-LFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 56,
        series: 'SJ-P1',
        model: 'P1-01850-LFUF',
        imageURL: 'img/SJp1web.png',
        kw: 37,
        hp: 50,
        hpdisplay: '50',
        amp: '145 (169)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-01850-LFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 57,
        series: 'SJ-P1',
        model: 'P1-02290-LFUF',
        imageURL: 'img/SJp1web.png',
        kw: 45,
        hp: 60,
        hpdisplay: '60',
        amp: '182 (210)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-02290-LFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 58,
        series: 'SJ-P1',
        model: 'P1-02950-LFUF',
        imageURL: 'img/SJp1web.png',
        kw: 55,
        hp: 75,
        hpdisplay: '75',
        amp: '220 (270)',
        volts: 200,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-02950-LFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        },
    
    ///////////////////////////
    //SJ-P1 3-PHASE 400V CLASS
    //////////////////////////
    
        {
        id: 59,
        series: 'SJ-P1',
        model: 'P1-00041-HFUF',
        imageURL: 'img/SJp1web.png',
        kw: 0.75,
        hp: 1,
        hpdisplay: '1',
        amp: '2.5 (3.1)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00041-HFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 60,
        series: 'SJ-P1',
        model: 'P1-00054-HFUF',
        imageURL: 'img/SJp1web.png',
        kw: 1.5,
        hp: 2,
        hpdisplay: '2',
        amp: '3.8 (4.8)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00054-HFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 61,
        series: 'SJ-P1',
        model: 'P1-00083-HFUF',
        imageURL: 'img/SJp1web.png',
        kw: 2.2,
        hp: 3,
        hpdisplay: '3',
        amp: '5.3 (6.7)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00083-HFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 62,
        series: 'SJ-P1',
        model: 'P1-00126-HFUF',
        imageURL: 'img/SJp1web.png',
        kw: 4.0,
        hp: 5,
        hpdisplay: '5',
        amp: '9.0 (11.1)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00126-HFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 63,
        series: 'SJ-P1',
        model: 'P1-00175-HFUF',
        imageURL: 'img/SJp1web.png',
        kw: 5.5,
        hp: 7.5,
        hpdisplay: '7 1/2',
        amp: '14 (16)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00175-HFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 64,
        series: 'SJ-P1',
        model: 'P1-00250-HFUF',
        imageURL: 'img/SJp1web.png',
        kw: 7.5,
        hp: 10,
        hpdisplay: '10',
        amp: '19 (22)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00250-HFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 65,
        series: 'SJ-P1',
        model: 'P1-00310-HFUF',
        imageURL: 'img/SJp1web.png',
        kw: 11,
        hp: 15,
        hpdisplay: '15',
        amp: '25 (29)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00310-HFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 66,
        series: 'SJ-P1',
        model: 'P1-00400-HFUF',
        imageURL: 'img/SJp1web.png',
        kw: 15,
        hp: 20,
        hpdisplay: '20',
        amp: '32 (37)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00400-HFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 67,
        series: 'SJ-P1',
        model: 'P1-00470-HFUF',
        imageURL: 'img/SJp1web.png',
        kw: 18.5,
        hp: 25,
        hpdisplay: '25',
        amp: '38 (43)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00470-HFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 68,
        series: 'SJ-P1',
        model: 'P1-00620-HFUF',
        imageURL: 'img/SJp1web.png',
        kw: 22,
        hp: 30,
        hpdisplay: '30',
        amp: '48 (57)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00620-HFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 69,
        series: 'SJ-P1',
        model: 'P1-00770-HFUF',
        imageURL: 'img/SJp1web.png',
        kw: 30,
        hp: 40,
        hpdisplay: '40',
        amp: '58 (70)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00770-HFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 70,
        series: 'SJ-P1',
        model: 'P1-00930-HFUF',
        imageURL: 'img/SJp1web.png',
        kw: 37,
        hp: 50,
        hpdisplay: '50',
        amp: '75 (85)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-00930-HFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 71,
        series: 'SJ-P1',
        model: 'P1-01160-HFUF',
        imageURL: 'img/SJp1web.png',
        kw: 45,
        hp: 60,
        hpdisplay: '60',
        amp: '91 (105)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-01160-HFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 72,
        series: 'SJ-P1',
        model: 'P1-01470-HFUF',
        imageURL: 'img/SJp1web.png',
        kw: 55,
        hp: 75,
        hpdisplay: '75',
        amp: '112 (135)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-01470-HFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 73,
        series: 'SJ-P1',
        model: 'P1-01760-HFUF',
        imageURL: 'img/SJp1web.png',
        kw: 75,
        hp: 100,
        hpdisplay: '100',
        amp: '149 (160)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-01760-HFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 74,
        series: 'SJ-P1',
        model: 'P1-02130-HFUF',
        imageURL: 'img/SJp1web.png',
        kw: 90,
        hp: 125,
        hpdisplay: '125',
        amp: '176 (195)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-02130-HFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 75,
        series: 'SJ-P1',
        model: 'P1-02520-HFUF',
        imageURL: 'img/SJp1web.png',
        kw: 110,
        hp: 150,
        hpdisplay: '150',
        amp: '217 (230)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-02520-HFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
        }, {
        id: 72,
        series: 'SJ-P1',
        model: 'P1-03160-HFUF',
        imageURL: 'img/SJp1web.png',
        kw: 150,
        hp: 200,
        hpdisplay: '200',
        amp: '260 (290)',
        volts: 400,
        phase: 3,
        phasedisplay: 'Three Phase',
        emcfilter: true,
        easysq: true,
        url: 'https://i-store.hitachi.us/ISDWebStore/Shop?op=pd&item=P1-03160-HFUF',
        features: ['Easy operation and setup by standard keypad (shown) or optional PC-based ProDriveNext software', 'Powerful high-torque performance - 200% @ 3 Hz', 'Internal DB transistor up to 22 kW (30 hp)', 'EzSQ Internal PLC-like controller', 'Position control function offers servo-like performance', 'Long-life, easy-to-maintain design', 'NEMA1-style conduit box optional', 'EMC Filter']
      }];

  return {
    filteredProducts: catalog,
    all: function() {
      return catalog;
    },
    remove: function(catalog) {
      catalog.splice(catalog.indexOf(catalog), 1);
    },
    get: function(catalogId) {
      for (var i = 0; i < catalog.length; i++) {
        if (catalog[i].id === parseInt(catalogId)) {
          return catalog[i];
        }
      }
      return null;
    },

    filter: function(query){
      // series, Kw, volts, Hp, phase, sequence
      var results = []
      catalog.forEach(function(product){
        
        if (query.series && !contains(product.series, query.series)) { // product.series.indexOf(query.series.toUpperCase()) == -1){
          return 
        }
        if (query.volts && parseInt(query.volts) !== product.volts) {
          return
        }
        if (query.kw && parseFloat(query.kw) !== product.kw) {
          return
        }
        if (query.hp && parseFloat(query.hp) !== product.hp){
          return
        }

        if (query.snglphase === true && false === product.snglphase){
          return
        }
        
        if (query.threephase === true && false === product.threephase){
          return
        }
        if (query.emcfilter === true && false === product.emcfilter){
          return
        }
        if (query.easysq === true && false === product.easysq){
          return
        }
        results.push(product)
      })
    return results
    }
  };
});

function contains(x, y) {
  if (x.toUpperCase().indexOf(y.toUpperCase()) != -1) {
    return true
  }
  return false
}

//ivan was here :)  