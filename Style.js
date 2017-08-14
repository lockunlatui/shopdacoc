import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
const imageWidthCategory = width;
const imageHeightCategory = imageWidthCategory / 1100 * 400;
const imageWidthContact = width;
const imageHeightContact = imageWidthContact / 576 * 576;
const productImageWidth = (width - 10) / 2;
const productImageHeight = productImageWidth / 650 * 976;
const productImageWidthC = (width - 10) / 4;
const productImageHeightC = productImageWidthC / 650 * 976;
export default {
  heightP: {
    height: height * 0.1
  },
  containerCI: {
    backgroundColor: "#efefef",
    flex: 1
  },
  styleboxInfo: {
    backgroundColor: "#FFF",
    padding: 10
  },
  textPer: {
    fontSize: 20,
    color: "#4f4f4f",
    padding: 10
  },
  textNEP: {
    color: "#b4b4b4",
    backgroundColor: "#efefef",
    height: 40,
    marginBottom: 10,
    justifyContent: "center",
    padding: 10
  },
  btnCI: {
    backgroundColor: "#4f4f4f",
    justifyContent: "center",
    alignItems: "center",
    height: 50
  },
  textCI: {
    color: "#FFF"
  },
  containerMenu: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 20,
    borderColor: "#ff6f66",
    borderWidth: 2
  },
  btnStyle: {
    height: 50,
    alignItems: "center",
    paddingHorizontal: 20,
    marginRight: 100,
    flexDirection: "row"
  },
  btnText: {
    color: "#4f4f4f",
    fontSize: 13
  },
  nameMem: {
    flexDirection: "row",
    alignItems: "center"
  },
  nameMemStyle: {
    color: "#5d5d5d",
    fontSize: 18,
    width: 150,
    left: 10
  },
  loginContainer: {
    alignItems: "center"
  },
  styleImageSI: {
    width: 15,
    height: 15,
    right: 20
  },
  containerP: {
    marginTop: 30,
    margin: 10
  },
  containerN: {
    marginTop: 0,
    margin: 10
  },
  titleContainer: {
    height: 50,
    justifyContent: "center"
  },
  title: {
    fontSize: 18,
    color: "#4f4f4f"
  },
  productContainer: {
    width: productImageWidth
  },
  productImage: {
    width: productImageWidth,
    height: productImageHeight
  },
  boxPrice: {
    height: 30,
    alignContent: "center"
  },
  titlePrice: {
    paddingLeft: 10,
    color: "#ff766d",
    fontSize: 15
  },
  titleName: {
    paddingLeft: 10,
    fontSize: 18,
    color: "#525252",
    height: 20,
    width: 150,
    marginTop: 10
  },
  boxProduct: {
    backgroundColor: "#FFF",
    marginBottom: 15,
    marginRight: 12
  },
  wrapperLC: {
    flex: 1,
    backgroundColor: "#efefef"
  },
  imagePL: {
    width: productImageWidth,
    height: productImageHeight
  },
  boxL: {
    flexDirection: "row",
    backgroundColor: "#FFF"
  },
  nameLP: {
    color: "#4f4f4f",
    fontSize: 20
  },
  boxCP: {
    flexDirection: "column",
    justifyContent: "center",
    width: 250,
    marginLeft: 20
  },
  contentLP: {
    color: "#9a9a9a",
    fontSize: 15,
    height: 40,
    width: 150
  },
  priceLP: {
    color: "#ff6f66",
    fontSize: 15
  },
  boxPA: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  btnATCLC: {
    backgroundColor: "#ff6f66",
    height: width * 0.1,
    marginRight: 100,
    justifyContent: "center",
    width: width * 0.1,
    alignItems: "center"
  },
  nameATC: {
    color: "#FFF",
    fontSize: 15
  },
  boxAll: {
    marginTop: 10,
    marginBottom: 20
  },
  containerDP: {
    backgroundColor: "#efefef",
    flex: 1
  },
  imageProductStyle: {
    width: productImageWidthC,
    height: productImageHeightC
  },
  styleImageProduct: {
    alignItems: "center",
    marginVertical: 10
  },
  styleboxDetail: {
    backgroundColor: "#ffffff"
  },
  styletextDetail: {
    color: "#4f4f4f",
    fontSize: 20,
    padding: 10
  },
  textDetail: {
    color: "#a4a4a4",
    padding: 10
  },
  numberProduct: {
    width: width * 0.05,
    height: width * 0.05,
    backgroundColor: "#efefef",
    alignItems: "center",
    justifyContent: "center"
  },
  textnumberProduct: {
    color: "#b0b0b0"
  },
  styleQuantity: {
    flexDirection: "row",
    padding: 10
  },
  btnATC: {
    height: width * 0.1,
    backgroundColor: "#ff6f66",
    marginBottom: 20,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  textATC: {
    color: "#FFF",
    fontSize: 20
  },
  avatar: {
    height: imageHeightContact,
    width: imageWidthContact
  },
  contactStyle: {
    flexDirection: "column"
  },
  boxCT: {
    alignItems: "center",
    backgroundColor: "#FFF",
    margin: 10,
    flexDirection: "row",
    marginBottom: 20
  },
  styleNCT: {
    color: "#ff6f66",
    fontSize: 30,
    left: 30,
    position: "relative"
  },
  textN: {
    color: "#c8c8c8",
    fontSize: 13,
    marginLeft: 20,
    width: 200
  },
  boxstyleCT: {
    left: 20,
    marginBottom: 20,
    marginTop: 20
  },
  styleAbout: {
    color: "#787878",
    fontSize: 20
  },
  wrapperCategory: {
    height: height * 0.25
  },
  textStyle: {
    fontSize: 18,
    color: "#4f4f4f",
    padding: 10
  },
  imageStyle: {
    width: imageWidthCategory,
    height: imageHeightCategory,
    justifyContent: "center",
    alignItems: "center"
  },
  namePS: {
    color: "#FFF",
    fontSize: 30
  },
  containerCart: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: height / 3.5,
    margin: 10
  },
  boxlist: {
    backgroundColor: "#FFF",
    marginBottom: 10
  },
  nameProduct: {
    color: "#4f4f4f",
    fontSize: 15
  },
  namePrice: {
    color: "#ff6f66",
    fontWeight: "bold",
    fontSize: 15
  },
  btnBuyProduct: {
    backgroundColor: "#ff6f66",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "row"
  },
  textBuyProduct: {
    color: "#FFF",
    fontSize: 20
  },
  btnXoaHang: {
    backgroundColor: "#ff6f66",
    width: width * 0.05,
    height: width * 0.05
  },
  controlBuy: {
    backgroundColor: "#FFF",
    height: 80
  },
  priceTotal: {
    color: "#989898",
    fontSize: 20
  },
  priceTotalMoney: {
    marginLeft: 20,
    color: "#FFF",
    fontSize: 20
  },
  nameTotalMoney: {
    color: "#4f4f4f",
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
    width: 100
  },
  indeNumber: {
    width: width * 0.07,
    height: width * 0.07,
    backgroundColor: "#b0b0b0",
    alignItems: "center",
    justifyContent: "center"
  },
  textindeNumber: {
    color: "#efefef"
  },
  numberProduct: {
    width: width * 0.07,
    height: width * 0.07,
    backgroundColor: "#efefef",
    alignItems: "center",
    justifyContent: "center"
  },
  textnumberProduct: {
    color: "#b0b0b0"
  },
  textPrice: {
    color: "#ff6f66",
    fontSize: 20
  },
  textstylePrice: {
    color: "#979797",
    fontSize: 20
  },
  wrapper: {
    height: height * 0.07,
    backgroundColor: "#fff",
    padding: 10,
    flex: 1
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  iconStyle: { width: width * 0.08, height: width * 0.08 },
  textInput: {
    backgroundColor: "#efefef",
    padding: 10,
    color: "#b0b0b0"
  },
  titleStyle: {
    color: "#303030",
    fontSize: 25
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  controlStyle: {
    alignItems: "center",
    flexDirection: "row",
    width: 300,
    marginTop: 30,
    marginBottom: 20
  },
  styleSignIn: {
    backgroundColor: "#FFF",
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginRight: 1
  },
  styleSignUp: {
    backgroundColor: "#FFF",
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: 1
  },
  inputStyle: {
    height: 40,
    backgroundColor: "#efefef",
    paddingLeft: 10,
    width: 300
  },
  btnButton: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff6f66",
    padding: 10,
    width: 300
  },
  styleButton: {
    color: "#FFF"
  },
  inactiveStyle: {
    color: "#D7D7D7"
  },
  activeStyle: {
    color: "#d1514e"
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  boxInputStyle: {
    backgroundColor: "#FFF"
  },
  textnameAPP: {
    color: "#ffffff",
    fontSize: 50
  },
  textsloganAPP: {
    color: "#f9e0dc"
  },
  styleboxAPP: {
    flexDirection: "column",
    marginVertical: 20,
    alignItems: "center"
  },
  styleLogo: {
    width: 100,
    height: 100
  },
  styleboxInput: {
    padding: 10
  },
  styleboxLC: {
    backgroundColor: "#FFF",
    flexDirection: "row"
  },
  styleboxMT: {
    width: width / 1.5,
    paddingLeft: 10,
    height: width / 4,
    marginTop: 10
  },
  vtxtPrice: {
    paddingLeft: 10
  },
  txtMOTASP: {
    color: "#9b9b9b",
    fontSize: 13,
    width: width / 2,
    height: width / 4
  }
};
