import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import Orientation from 'react-native-orientation-locker'; // Import Orientation

const  Give_Self_Validity = () => {
  const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = useState(false);

  // useEffect to manage orientation when component mounts or is unmounted
  useEffect(() => {
    if (isExpanded) {
      Orientation.lockToLandscape();
    } else {
      Orientation.unlockAllOrientations();
    }

    return () => {
      Orientation.unlockAllOrientations();
    };
  }, [isExpanded]);

  const fullTableHead = [
    'S.No', '  Date of Installation  ', ' Vehicle No. ', 'Vehicle Make Model', 'Device IMEI','Customer Name','Dealer Name', 'Fitment Certificate No.', 'Download Certificate'
  ];

  const collapsedTableHead = ['S.no ','Date of Installation', ' Vehicle No.'];

  const fullTableData = [
    ['01', '     21-02-24','      JH12445', 'Pulser', '         Jharkhand','Dharmendra','Mr. Ashwin', 'TRANS001', 'Download here'],
    // Add more rows as needed
    ['01', '     21-02-24','      JH12445', 'Pulser', '         Jharkhand','Dharmendra','Mr. Ashwin', 'TRANS001', 'Download here'],
    // Additional rows...
  ];

  const collapsedTableData = fullTableData.map(row => [row[0],row[1], row[2]]);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#4e2d87' }}>
      <View style={{ backgroundColor: '#fff', width: '92%', height: '95%', borderRadius: 10, marginTop: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ textDecorationLine: 'underline', fontSize: 18, fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>
             View Certificate
            </Text>
          </View>
       
        </View>

        <View style={styles.container}>
          <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)} style={{ marginBottom: 10 }}>
            <Text style={{ color: '#4e2d87', fontSize: 16 }}>{isExpanded ? 'Collapse' : 'Expand'}</Text>
          </TouchableOpacity>
          <ScrollView horizontal>
            <DataTable>
              <DataTable.Header style={styles.tableHeader}>
                {(isExpanded ? fullTableHead : collapsedTableHead).map((title, index) => (
                  <DataTable.Title key={index} style={styles.columnHeader}>
                    <Text style={styles.headerText}>{title}</Text>
                  </DataTable.Title>
                ))}
              </DataTable.Header>

              {isExpanded ? fullTableData.map((row, rowIndex) => (
                <DataTable.Row key={rowIndex} style={rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow}>
                  {row.map((cell, cellIndex) => (
                    <DataTable.Cell key={cellIndex}>{cell}</DataTable.Cell>
                  ))}
                </DataTable.Row>
              )) : collapsedTableData.map((row, rowIndex) => (
                <DataTable.Row key={rowIndex} style={rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow}>
                  {row.map((cell, cellIndex) => (
                    <DataTable.Cell key={cellIndex}>{cell}</DataTable.Cell>
                  ))}
                </DataTable.Row>
              ))}
            </DataTable>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#4e2d87',
    borderRadius: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  columnHeader: {
    justifyContent: 'center',
    paddingHorizontal: 3, // Add horizontal padding for spacing
  },
  evenRow: {
    backgroundColor: 'rgb(221 214 254)',
    borderRadius:5,
  
    
  },
  oddRow: {
    backgroundColor: 'rgb(226 232 240)',
    borderRadius:5,
  },
});

export default  Give_Self_Validity;

