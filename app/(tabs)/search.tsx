import { View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useState } from 'react';

export default function SearchScreen() {
    const [searchQuery, setSearchQuery] = useState('');

    const recentSearches = ['iPhone', 'Laptop', 'Headphones', 'Smart Watch'];
    const categories = [
        { name: 'Electronics', icon: 'desktopcomputer' },
        { name: 'Fashion', icon: 'tshirt' },
        { name: 'Home & Kitchen', icon: 'house' },
        { name: 'Beauty', icon: 'sparkles' },
        { name: 'Sports', icon: 'figure.run' },
        { name: 'Books', icon: 'book.fill' },
        { name: 'Toys', icon: 'gamecontroller.fill' },
        { name: 'Automotive', icon: 'car.fill' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <IconSymbol name="magnifyingglass" size={20} color="#86939e" style={styles.searchIcon} />
                <TextInput
                    placeholder="Search MainStreet Markets"
                    style={styles.searchInput}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    autoFocus
                    placeholderTextColor="#86939e"
                />
                {searchQuery.length > 0 && (
                    <TouchableOpacity onPress={() => setSearchQuery('')} style={styles.clearButton}>
                        <IconSymbol name="xmark.circle.fill" size={20} color="#86939e" />
                    </TouchableOpacity>
                )}
                <TouchableOpacity style={styles.cameraButton}>
                    <IconSymbol name="camera.fill" size={20} color="#86939e" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content}>
                {/* Recent Searches */}
                <View style={styles.section}>
                    <ThemedText style={styles.sectionTitle}>Recent Searches</ThemedText>
                    {recentSearches.map((search, index) => (
                        <TouchableOpacity key={index} style={styles.recentSearchItem}>
                            <IconSymbol name="clock" size={16} color="#666" />
                            <ThemedText style={styles.recentSearchText}>{search}</ThemedText>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Browse Categories */}
                <View style={styles.section}>
                    <ThemedText style={styles.sectionTitle}>Browse by Category</ThemedText>
                    <View style={styles.categoriesGrid}>
                        {categories.map((category, index) => (
                            <TouchableOpacity key={index} style={styles.categoryCard}>
                                <IconSymbol name={category.icon} size={24} color="#232F3E" />
                                <ThemedText style={styles.categoryText}>{category.name}</ThemedText>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 8,
        borderRadius: 8,
        paddingHorizontal: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        height: 44,
        fontSize: 16,
    },
    clearButton: {
        padding: 8,
    },
    cameraButton: {
        padding: 8,
        borderLeftWidth: 1,
        borderLeftColor: '#eee',
        marginLeft: 8,
    },
    content: {
        flex: 1,
    },
    section: {
        backgroundColor: '#fff',
        marginBottom: 8,
        padding: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#232F3E',
    },
    recentSearchItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#eee',
    },
    recentSearchText: {
        marginLeft: 12,
        fontSize: 16,
        color: '#232F3E',
    },
    categoriesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: -8,
    },
    categoryCard: {
        width: '25%',
        padding: 8,
        alignItems: 'center',
    },
    categoryText: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 4,
        color: '#232F3E',
    },
}); 