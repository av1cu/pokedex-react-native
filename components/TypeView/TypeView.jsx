import { View, Text, SectionList } from 'react-native';
import React from 'react';

export default function TypeView(props) {
  return (
    <View>
      <Text>Type Name</Text>
      <SectionList
        renderSectionHeader={() => <Text>Strong against</Text>}
        sections={[]}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <SectionList
        renderSectionHeader={() => <Text>Weak against</Text>}
        sections={[]}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <SectionList
        renderSectionHeader={() => <Text>Neutral</Text>}
        sections={[]}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
}
