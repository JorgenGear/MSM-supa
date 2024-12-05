import { ScrollView, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function HomeScreen() {
    // Add prime banner data
    const primeBanner = {
        title: 'Try Prime free for 30 days',
        description: 'Fast, FREE delivery, exclusive deals, and more',
    };

    return (
        <ScrollView style={styles.container}>
            {/* Prime Banner */}
            <TouchableOpacity style={styles.primeBanner}>
                <View style={styles.primeContent}>
                    <ThemedText style={styles.primeTitle}>{primeBanner.title}</ThemedText>
                    <ThemedText style={styles.primeDescription}>{primeBanner.description}</ThemedText>
                </View>
                <IconSymbol name="chevron.right" size={20} color="#fff" />
            </TouchableOpacity>

            {/* Hero Banner */}
            <Image
                source={{ uri: 'https://via.placeholder.com/400x200' }}
                style={styles.heroBanner}
            />

            {/* Deal of the Day */}
            <View style={styles.dealOfDay}>
                <View style={styles.dealHeader}>
                    <ThemedText style={styles.dealTitle}>Deal of the Day</ThemedText>
                    <TouchableOpacity>
                        <ThemedText style={styles.seeAllText}>See all deals</ThemedText>
                    </TouchableOpacity>
                </View>
                <Image
                    source={{ uri: 'https://via.placeholder.com/400x200' }}
                    style={styles.dealImage}
                />
                <View style={styles.dealInfo}>
                    <View style={styles.discountBadge}>
                        <ThemedText style={styles.discountText}>Up to 40% off</ThemedText>
                    </View>
                    <ThemedText style={styles.dealPrice}>$199.99</ThemedText>
                    <ThemedText style={styles.originalPrice}>List: $329.99</ThemedText>
                    <ThemedText style={styles.dealDescription}>Top Rated Electronics</ThemedText>
                </View>
            </View>

            {/* Deal Categories */}
            <View style={styles.dealsGrid}>
                <View style={styles.dealCard}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/150' }}
                        style={styles.dealImage}
                    />
                    <ThemedText style={styles.dealText}>Up to 60% off</ThemedText>
                    <ThemedText style={styles.dealCategory}>Electronics</ThemedText>
                </View>
                <View style={styles.dealCard}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/150' }}
                        style={styles.dealImage}
                    />
                    <ThemedText style={styles.dealText}>Daily Deals</ThemedText>
                    <ThemedText style={styles.dealCategory}>Fashion</ThemedText>
                </View>
                <View style={styles.dealCard}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/150' }}
                        style={styles.dealImage}
                    />
                    <ThemedText style={styles.dealText}>New Arrivals</ThemedText>
                    <ThemedText style={styles.dealCategory}>Home</ThemedText>
                </View>
                <View style={styles.dealCard}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/150' }}
                        style={styles.dealImage}
                    />
                    <ThemedText style={styles.dealText}>Member Exclusive</ThemedText>
                    <ThemedText style={styles.dealCategory}>Beauty</ThemedText>
                </View>
            </View>

            {/* Keep Shopping Section */}
            <View style={styles.section}>
                <ThemedText style={styles.sectionTitle}>Keep shopping for</ThemedText>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <TouchableOpacity key={item} style={styles.recentItem}>
                            <Image
                                source={{ uri: `https://via.placeholder.com/100` }}
                                style={styles.recentImage}
                            />
                            <ThemedText style={styles.recentText}>Product {item}</ThemedText>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Recommendations */}
            <View style={styles.section}>
                <ThemedText style={styles.sectionTitle}>Recommended for you</ThemedText>
                <View style={styles.recommendationsGrid}>
                    {[1, 2, 3, 4].map((item) => (
                        <TouchableOpacity key={item} style={styles.recommendationCard}>
                            <Image
                                source={{ uri: `https://via.placeholder.com/150` }}
                                style={styles.recommendationImage}
                            />
                            <ThemedText style={styles.recommendationPrice}>$19.99</ThemedText>
                            <ThemedText style={styles.recommendationTitle} numberOfLines={2}>
                                Product with a long title that might need two lines
                            </ThemedText>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    heroBanner: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    dealsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 8,
        backgroundColor: '#fff',
        marginBottom: 8,
    },
    dealCard: {
        width: '50%',
        padding: 8,
    },
    dealImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    dealText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 4,
    },
    dealCategory: {
        fontSize: 14,
        color: '#666',
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
    },
    horizontalScroll: {
        flexDirection: 'row',
    },
    recentItem: {
        marginRight: 16,
        width: 100,
    },
    recentImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    recentText: {
        fontSize: 14,
        marginTop: 4,
    },
    recommendationsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: -8,
    },
    recommendationCard: {
        width: '50%',
        padding: 8,
    },
    recommendationImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    recommendationPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 4,
    },
    recommendationTitle: {
        fontSize: 14,
        color: '#666',
    },
    primeBanner: {
        backgroundColor: '#232F3E',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        justifyContent: 'space-between',
    },
    primeContent: {
        flex: 1,
    },
    primeTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    primeDescription: {
        color: '#fff',
        fontSize: 14,
        opacity: 0.8,
    },
    dealOfDay: {
        backgroundColor: '#fff',
        marginBottom: 8,
    },
    dealHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    dealTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#232F3E',
    },
    seeAllText: {
        color: '#007185',
        fontSize: 14,
    },
    dealImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    dealInfo: {
        padding: 16,
    },
    discountBadge: {
        backgroundColor: '#CC0C39',
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        marginBottom: 8,
    },
    discountText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    dealPrice: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#232F3E',
    },
    originalPrice: {
        fontSize: 14,
        color: '#666',
        textDecorationLine: 'line-through',
    },
    dealDescription: {
        fontSize: 16,
        color: '#232F3E',
        marginTop: 4,
    },
}); 