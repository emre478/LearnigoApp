import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerText: {
    flex: 1,
  },
  label: {
    color: '#1e88e5',
    fontSize: 14,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0d47a1',
  },
  bannerImage: {
    width: 140,
    height: 140,
    marginLeft: 10,
    borderRadius: 10,
  },
   headerRow: {
    top: 12,
    left : 75,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
   icon: {
    width: 30,
    height: 45,
    resizeMode: 'contain',
  },
   icon1: {
    width: 30,
    height: 25,
    resizeMode: 'contain',
  },
    mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#003366',
    marginLeft: 10,
  },
});
