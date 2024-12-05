import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { IconSymbol } from './IconSymbol';
import { ThemedText } from '../ThemedText';

interface MainHeaderProps {
  onMenuPress?: () => void;
}

export function MainHeader({ onMenuPress }: MainHeaderProps) {
  const insets = useSafeAreaInsets();
  const cartItemCount = 3; // This should come from your cart state management

  return (
    <View 
      style={[
        styles.container, 
        { 
          paddingTop: insets.top,
        }
      ]}
    >
      <View style={styles.topBar}>
        <Link href="/profile" asChild>
          <TouchableOpacity style={styles.iconButton}>
            <IconSymbol name="person.circle.fill" size={28} color="#fff" />
          </TouchableOpacity>
        </Link>

        <TouchableOpacity style={styles.locationButton}>
          <IconSymbol name="mappin" size={16} color="#fff" />
          <View>
            <ThemedText style={styles.locationLabel}>Deliver to</ThemedText>
            <ThemedText style={styles.locationText}>New York 10001</ThemedText>
          </View>
        </TouchableOpacity>

        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <IconSymbol name="bell.fill" size={22} color="#fff" />
          </TouchableOpacity>
          
          <Link href="/cart" asChild>
            <TouchableOpacity style={styles.cartButton}>
              <View style={styles.cartBadge}>
                <ThemedText style={styles.cartBadgeText}>{cartItemCount}</ThemedText>
              </View>
              <IconSymbol name="cart.fill" size={28} color="#fff" />
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <IconSymbol name="magnifyingglass" size={20} color="#86939e" style={styles.searchIcon} />
        <TextInput
          placeholder="Search MainStreet Markets"
          style={styles.searchInput}
          placeholderTextColor="#86939e"
        />
        <TouchableOpacity style={styles.voiceButton}>
          <IconSymbol name="mic.fill" size={20} color="#86939e" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraButton}>
          <IconSymbol name="camera.fill" size={20} color="#86939e" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesBar}
        contentContainerStyle={styles.categoriesContent}
      >
        {['Today\'s Deals', 'Prime', 'Fashion', 'Electronics', 'Home', 'Grocery', 'Pharmacy'].map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton}>
            <ThemedText style={styles.categoryText}>{category}</ThemedText>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#232F3E',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  iconButton: {
    padding: 8,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 8,
  },
  locationLabel: {
    color: '#ccc',
    fontSize: 12,
    marginLeft: 8,
  },
  locationText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartButton: {
    padding: 8,
    marginLeft: 4,
  },
  cartBadge: {
    position: 'absolute',
    top: 2,
    right: 4,
    backgroundColor: '#FF9900',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  cartBadgeText: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  voiceButton: {
    padding: 8,
    borderLeftWidth: 1,
    borderLeftColor: '#eee',
    marginLeft: 8,
  },
  cameraButton: {
    padding: 8,
    borderLeftWidth: 1,
    borderLeftColor: '#eee',
  },
  categoriesBar: {
    backgroundColor: '#37475A',
  },
  categoriesContent: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  categoryText: {
    color: '#fff',
    fontSize: 14,
  },
}); 