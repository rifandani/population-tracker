import React from 'react';
import { FlatList, View } from 'react-native';
// files
import useGetUsers from '../../hooks/useGetUsers';
import { ThemedText } from '../common/Themed';

const UserList = (): JSX.Element => {
  const { isLoading, data, error } = useGetUsers({ initialData: [] });

  return (
    <View>
      {isLoading ? <ThemedText>Loading...</ThemedText> : null}
      {error ? <ThemedText>{error.message}</ThemedText> : null}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ThemedText style={{ marginVertical: 10 }}>{item.name}</ThemedText>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default UserList;
