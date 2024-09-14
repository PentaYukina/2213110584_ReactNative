import { View, Text, Button, FlatList, ListRenderItem } from "react-native";
import React, {
  useCallback,
  useLayoutEffect,
  useState,
} from "react";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { findAllProduct } from "../services/product-service";
import { Avatar, Badge, ListItem } from "@rneui/base";
import { ActivityIndicator } from "react-native";

const MaterialHeaderButton = (props: any) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const ProductScreen = (): React.JSX.Element => {
  const navigation = useNavigation<any>();

  const [product, setProduct] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Product",
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await findAllProduct();
      setProduct(response.data.data);
      //console.log(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProduct();
    }, [])
  );

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#1230AE" />
      </View>
    );
  }

  const _renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      /*{<View>
        <Text>{item.title}</Text>
        <Text>{item.detail}</Text>
      </View>}*/
      <>
        <ListItem
          bottomDivider
          onPress={() => {
            navigation.navigate("Details", { 
              id: item.id,
              title: item.title });
          }}
        >
          <Avatar source={{ uri: item.picture }} size={50} rounded />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
          <Badge value={item.view} status="success" />
        </ListItem>
      </>
    );
  };

  return (
    <View>
      <FlatList
        data={product}
        renderItem={_renderItem}
        keyExtractor={(item: any) => item.id.toString()}
        onRefresh={async () => {
          await getProduct();
        }}
        refreshing={loading}
      />

      {/* {JSON.stringify(product)} */}
    </View>
  );
};

export default ProductScreen;
