import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { styles } from './stylesheet';

const Detail = ({ navigation: { state: { params: { dataflow } } } }) => (
  <ScrollView>
    <View style={styles.detail}>
      <Text style={styles.detail_title}>{`${dataflow.name[0]} :`}</Text>
      <View>
        <View style={styles.detail_content}>
          <Text style={styles.detail_title}>id: </Text>
          <Text>{dataflow.id}</Text>
        </View>
        <View style={styles.detail_content}>
          <Text style={styles.detail_title}>agency: </Text>
          <Text>{dataflow.agency}</Text>
        </View>
        <View style={styles.detail_content}>
          <Text style={styles.detail_title}>version: </Text>
          <Text style={styles.detail_description}>{dataflow.version}</Text>
        </View>
        <View style={styles.detail_content}>
          <Text style={styles.detail_title}>description: </Text>
          <Text>{dataflow.description[0]}</Text>
        </View>
        <View style={styles.detail_content}>
          <Text style={styles.detail_title}>category: </Text>
          <View style={styles.detail_description}>
            {dataflow && dataflow.category && dataflow.category.map((item, index) => <Text key={index}>{item}</Text>)}
          </View>
        </View>
        <View style={styles.detail_content}>
          <Text style={styles.detail_title}>frequency: </Text>
          <View style={styles.detail_description}>
            {dataflow && dataflow.frequency && dataflow.frequency.map((item, index) => <Text key={index}>{item}</Text>)}
          </View>
        </View>
        <View style={styles.detail_content}>
          <Text style={styles.detail_title}>reference area: </Text>
          <View style={styles.detail_description}>
            {dataflow && dataflow.reference_area && dataflow.reference_area.map((item, index) => <Text key={index}>{item}</Text>)}
          </View>
        </View>
        <View style={styles.detail_content}>
          <Text style={styles.detail_title}>intereset_rate_type: </Text>
          <View style={styles.detail_description}>
            {dataflow && dataflow.interest_rate_type && dataflow.interest_rate_type.map((item, index) => <Text key={index}>{item}</Text>)}
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
);

export default Detail;