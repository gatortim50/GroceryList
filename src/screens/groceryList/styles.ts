import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    marginLeft: 20,
    backgroundColor: 'white',
    color: 'black',
    flexDirection: 'column',
  },
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  rowContainer: {
    width: '95%',
    height: 50,
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginLeft: 10,
  },
  cardContainer: {
    width: '95%',
    height: 50,
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    marginLeft: 10,
  },
  addContainer: {
    width: '95%',
    height: 80,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginLeft: 10,
  },
  textinputContainer: {
    width: '55%',
    height: 35,
    backgroundColor: 'white',
    flexDirection: 'column',
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  checkboxContainer: {
    marginTop: 5,
    height: 40,
    flexDirection: 'row',
  },
  countContainer: {
    marginTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
  },
  card: {
    marginTop: 5,
    width: '98%',
    height: 111,
    backgroundColor: 'white',
    borderColor: 'red',
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
    marginLeft: 5,
    marginBottom: 15,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  count: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    margin: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    color: 'black',
  },
  button: {
    width: '95%',
    height: '80%',
    margin: 5,
    backgroundColor: 'gray',
    borderColor: 'gray',
    padding: 10,
    flexDirection: 'row',
  },
  buttonContainer: {
    marginRight: 5,
    marginTop: 10,
    width: 25,
    height: 25,
  },
  countButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
});

export default styles;
