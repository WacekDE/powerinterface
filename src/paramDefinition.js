const params = {
  '16.0': {
    key: 'platformFrequency',
    group: 'Netz & lokale Verbindung',
    label: 'Plattformfrequenz',
    unit: 'Hz',
    format: (v) => v / 100,
  },
  '16.1': {
    key: 'platformVoltage',
    group: 'Netz & lokale Verbindung',
    label: 'Plattformspannung',
    unit: 'V',
    format: (v) => v / 10,
  },
  '16.2': {
    key: 'platformTemperature',
    group: 'invisible',
    label: 'Temperatur der Plattform',
    unit: '°C',
    format: (v) => v / 10,
  },
  '16.3': {
    key: 'platformPower',
    group: 'unknown',
    label: 'Leistung Plattform',
    unit: 'W',
    format: (v) => v,
  },
  '16.4': {
    key: 'energyPlatformProduced',
    group: 'invisible',
    label: 'Energy platform produced',
    unit: 'kWh',
    format: (v) => v / 1000,
  },
  '16.5': {
    key: 'energyPlatformConsumed',
    group: 'invisible',
    label: 'Energy platform consumed',
    unit: 'kWh',
    format: (v) => v / 1000,
  },

  '9.0': {
    key: 'lineFrequency',
    group: 'Netz & lokale Verbindung',
    label: 'Netzfrequenz',
    unit: 'Hz',
    format: (v) => v / 100,
  },
  '9.1': {
    key: 'lineVoltage',
    group: 'Netz & lokale Verbindung',
    label: 'Netzspannung',
    unit: 'V',
    format: (v) => v / 10,
  },
  '9.2': {
    key: 'systemPerformance',
    group: 'Netz & lokale Verbindung',
    label: 'Systemleistung',
    unit: 'W',
    format: (v) => v,
  },
  '9.3': {
    key: 'energyProduced',
    group: 'invisible',
    label: 'Energy produced (Netz) [DC/AC]',
    unit: 'kWh',
    format: (v) => v / 1000,
  },
  '9.4': {
    key: 'energyConsumed',
    group: 'invisible',
    label: 'Energy consumed (Netz)',
    unit: 'kWh',
    format: (v) => v / 1000,
  },
  '9.5': {
    key: 'localOutVoltage',
    group: 'Netz & lokale Verbindung',
    label: 'Spannung am Local Out',
    unit: 'V',
    format: (v) => v / 10,
  },
  '9.6': {
    key: 'localOutPower',
    group: 'Netz & lokale Verbindung',
    label: 'Leistung am Local Out',
    unit: 'W',
    format: (v) => v,
  },
  '9.7': {
    key: 'localEnergyConsumed',
    group: 'invisible',
    label: 'Energy local consumed [Local DC/AC consumed]',
    unit: 'kWh',
    format: (v) => v / 1000,
  },
  '9.8': {
    key: 'busPower',
    group: 'invisible',
    label: 'Busspannung [DC/AC]',
    unit: 'V',
    format: (v) => v / 100,
  },
  '9.9': {
    key: 'unknown1',
    group: 'unknown',
    label: '-',
    unit: '?',
    format: (v) => v,
  },
  '9.10': {
    key: 'lineTemperature',
    group: 'Netz & lokale Verbindung',
    label: 'Temperatur am DC/AC',
    unit: '°C',
    format: (v) => v / 10,
  },

  '136.0': {
    key: 'batteryVoltage',
    group: 'Batterie',
    label: 'Spannung',
    unit: 'V',
    format: (v) => v / 100,
  },
  '136.1': {
    key: 'batteryCurrent',
    group: 'Batterie',
    label: 'Strom',
    unit: 'A',
    format: (v) => v / 100,
  },
  '136.2': {
    key: 'batteryPower',
    group: 'Batterie',
    label: 'Leistung',
    unit: 'W',
    format: (v) => v,
  },
  '136.3': {
    key: 'batteryEnergyProduced',
    group: 'Batterie (invisible)',
    label: 'Energie battery produced',
    unit: 'kWh',
    format: (v) => v / 1000,
  },
  '136.4': {
    key: 'batteryEnergyConsumed',
    group: 'Batterie (invisible)',
    label: 'Energy battery consumed',
    unit: 'kWh',
    format: (v) => v / 1000,
  },
  '136.5': {
    key: 'stateOfCharge',
    group: 'Batterie',
    label: 'Ladezustand',
    unit: '%',
    format: (v) => v,
  },
  '136.6': {
    key: 'unknown2',
    group: 'unknown',
    label: '-',
    unit: '?',
    format: (v) => v,
  },
  '136.7': {
    key: 'batteryTemperature',
    group: 'Batterie',
    label: 'Temperatur',
    unit: '°C',
    format: (v) => v / 10,
  },
  '136.8': {
    key: 'moduleTemperature',
    group: 'Batterie (invisible)',
    label: 'Temperatur Modul',
    unit: '°C',
    format: (v) => v / 10,
  },
  '136.9': {
    key: 'chargingVoltage',
    group: 'Batterie (invisible)',
    label: 'Ladespannung',
    unit: 'V',
    format: (v) => v / 100,
  },
  '136.10': {
    key: 'chargingCurrent',
    group: 'Batterie (invisible)',
    label: 'Ladestrom',
    unit: 'A',
    format: (v) => v / 100,
  },
  '136.11': {
    key: 'dischargeVoltage',
    group: 'Batterie (invisible)',
    label: 'Entladespannung',
    unit: 'V',
    format: (v) => v / 100,
  },
  '136.12': {
    key: 'dischargeCurrent',
    group: 'Batterie (invisible)',
    label: 'Entladestrom',
    unit: 'A',
    format: (v) => v / 100,
  },

  '12.0': {
    key: 'line1Voltage',
    group: 'PV Stränge',
    label: 'Spannung Eingang 1',
    unit: 'V',
    format: (v) => v / 100,
  },
  '12.1': {
    key: 'line1Current',
    group: 'PV Stränge',
    label: 'Strom Eingang 1',
    unit: 'A',
    format: (v) => v / 100,
  },
  '12.2': {
    key: 'line1Power',
    group: 'PV Stränge',
    label: 'Leistung Eingang 1',
    unit: 'W',
    format: (v) => v,
  },
  '12.3': {
    key: 'line1EnergyProduced',
    group: 'PV Stränge (invisible)',
    label: 'Energy produced Eingang 1',
    unit: 'kWh',
    format: (v) => v / 1000,
  },
  '12.4': {
    key: 'line1Temperature',
    group: 'PV Stränge',
    label: 'Temperatur Eingang 1',
    unit: '°C',
    format: (v) => v / 10,
  },
  '12.5': {
    key: 'line2Voltage',
    group: 'PV Stränge',
    label: 'Spannung Eingang 2',
    unit: 'V',
    format: (v) => v / 100,
  },
  '12.6': {
    key: 'line2Current',
    group: 'PV Stränge',
    label: 'Strom Eingang 2',
    unit: 'A',
    format: (v) => v / 100,
  },
  '12.7': {
    key: 'line2Power',
    group: 'PV Stränge',
    label: 'Leistung Eingang 2',
    unit: 'W',
    format: (v) => v,
  },
  '12.8': {
    key: 'line2EnergyProduced',
    group: 'PV Stränge (invisible)',
    label: 'Energy produced Eingang 2',
    unit: 'kWh',
    format: (v) => v / 1000,
  },
  '12.9': {
    key: 'line2Temperature',
    group: 'PV Stränge',
    label: 'Temperatur Eingang 2',
    unit: '°C',
    format: (v) => v / 10,
  },
  '12.10': {
    key: 'solarPower',
    group: 'PV Stränge',
    label: 'Solar Leistung gesamt',
    unit: 'W',
    format: (v) => v,
  },
  '12.11': {
    key: 'solarEnergy',
    group: 'PV Stränge (invisible)',
    label: 'Energy solar gesamt',
    unit: 'kWh',
    format: (v) => v / 1000,
  },

  '11.0': {
    key: 'phase1Voltage',
    group: 'Netzsensor',
    label: 'Spannung phase 1',
    unit: 'V',
    format: (v) => v / 10,
  },
  '11.1': {
    key: 'phase1Current',
    group: 'Netzsensor',
    label: 'Strom phase 1',
    unit: 'A',
    format: (v) => v / 100,
  },
  '11.2': {
    key: 'phase1Power',
    group: 'Netzsensor',
    label: 'Leistung phase 1',
    unit: 'W',
    format: (v) => v,
  },
  '11.3': {
    key: 'phase1EnergyConsumed',
    group: 'Netzsensor (invisible)',
    label: 'Energie phase 1 consumed',
    unit: 'kWh',
    format: (v) => v / 1000,
  },
  '11.4': {
    key: 'phase2Voltage',
    group: 'Netzsensor',
    label: 'Spannung phase 2',
    unit: 'V',
    format: (v) => v / 10,
  },
  '11.5': {
    key: 'phase2Current',
    group: 'Netzsensor',
    label: 'Strom phase 2',
    unit: 'A',
    format: (v) => v / 100,
  },
  '11.6': {
    key: 'phase2Power',
    group: 'Netzsensor',
    label: 'Leistung phase 2',
    unit: 'W',
    format: (v) => v,
  },
  '11.7': {
    key: 'phase2EnergyConsumed',
    group: 'Netzsensor (invisible)',
    label: 'Energie phase 2 consumed',
    unit: 'kWh',
    format: (v) => v / 1000,
  },
  '11.8': {
    key: 'phase3Voltage',
    group: 'Netzsensor',
    label: 'Spannung phase 3',
    unit: 'V',
    format: (v) => v / 10,
  },
  '11.9': {
    key: 'phase3Current',
    group: 'Netzsensor',
    label: 'Strom phase 3',
    unit: 'A',
    format: (v) => v / 100,
  },
  '11.10': {
    key: 'phase3Power',
    group: 'Netzsensor',
    label: 'Leistung phase 3',
    unit: 'W',
    format: (v) => v,
  },
  '11.11': {
    key: 'phase3EnergyConsumed',
    group: 'Netzsensor (invisible)',
    label: 'Energie phase 3 consumed',
    unit: 'kWh',
    format: (v) => v / 1000,
  },
}

export default params