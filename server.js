
const mongoose = require('mongoose');
const Property = require('./models/Property.js');
 const property = {
  "properties": [
    {
      "id": 1,
      "address": "9 Independent Road, Blackheath, London, SE3 9LF",
      "composition": "10 x 1-Bed Flats, 4 x 2-Bed Duplex, 2 x 3-Bed Duplex",
      "buildInfo": "New Build block (2012) in the Borough of Lewisham, South East London yielding 7%, generating ungeared returns of 14% IRR and 1.4x EM",
      "financials": {
        "purchasePrice": -7380740,
        "rentalIncome": [449177, 497702, 497702, 497702],
        "salePrice": 8520842,
        "unleveredCFs": [-6931563, 497702, 497702, 9018545],
        "yieldOnCost": [6.1, 6.7, 6.7, null],
        "exitYield": 5.5,
        "unleveredIRREM": "14%/1.44x"
      },
      "imageArray":[
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511452/Indipendent_Road_30_zrsj1b.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511452/Indipendent_Road_5_kip7it.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511452/Indipendent_Road_6_fb6yw1.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511452/Indipendent_Road_29_jisbra.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511452/Indipendent_Road_7_b7xsjj.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511452/Indipendent_Road_8_adxhtk.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511453/Indipendent_Road_31_morkkn.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511453/Indipendent_Road_46_roh2jz.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511453/Indipendent_Road_48_hu7hkm.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511453/Indipendent_Road_47_e26ev8.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511453/Indipendent_Road_33_zmj81u.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511454/Indipendent_Road_34_xbqwu0.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511454/Indipendent_Road_4_jqqxxn.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511454/Indipendent_Road_27_dzdloa.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511454/Indipendent_Road_3_mlgdbz.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511454/Indipendent_Road_35_pnkskj.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511454/Indipendent_Road_26_yrpjm7.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511454/Indipendent_Road_36_pp3934.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511454/Indipendent_Road_28_cbxgxk.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511454/Indipendent_Road_38_ftxfah.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511454/Indipendent_Road_37_udl8py.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511455/Indipendent_Road_49_zsgwnr.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511455/Indipendent_Road_39_pdevjo.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511455/Indipendent_Road_40_kmgunq.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511455/Indipendent_Road_44_egfvfo.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511455/Indipendent_Road_42_thobml.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511455/Indipendent_Road_45_vg3vxo.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511455/Indipendent_Road_43_zctsnr.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511456/Indipendent_Road_10_osmb6q.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511457/Indipendent_Road_13_yefara.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511457/Indipendent_Road_12_olcop9.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511457/Indipendent_Road_11_foymvu.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511457/Indipendent_Road_14_o5e84j.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511457/Indipendent_Road_17_unde17.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511458/Indipendent_Road_20_opbbdp.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722511458/Indipendent_Road_19_jfojqu.jpg"
],
    },
    {
      "id": 2,
      "address": "Shepard Bush Apts - 1 Westwick Gardens, Nelson House, W14 0BU",
      "composition": "5 x 1-Bed, 4 x 2-Bed",
      "buildInfo": "New Build block (2017) in the Borough of Fulham & Hammersmith, West London yielding 8%, generating ungeared returns of 22% IRR and 1.8x EM",
      "financials": {
        "purchasePrice": -3832167,
        "rentalIncome": [233218, 314122, 314122, 314122],
        "salePrice": 5377874,
        "unleveredCFs": [-3598949, 314122, 314122, 5695991],
        "yieldOnCost": [6.1, 8.2, 8.2, null],
        "exitYield": 5.5,
        "unleveredIRREM": "22%/1.76x"
      },
      "imageArray":[
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1722515111/Nelson_House_1_Westwick_Gardens_London_W14_0BU_1_ed4wye.jpg",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1722515111/Nelson_House_1_Westwick_Gardens_London_W14_0BU_6_cmeiho.jpg",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1722515111/Nelson_House_1_Westwick_Gardens_London_W14_0BU_7_xk3m6q.jpg",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1722515111/Nelson_House_1_Westwick_Gardens_London_W14_0BU_2_yekjpi.jpg",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1722515112/Nelson_House_1_Westwick_Gardens_London_W14_0BU_5_w3jze0.jpg",
        "https://res.cloudinary.com/dzkldv06d/image/upload/v1722515111/Nelson_House_1_Westwick_Gardens_London_W14_0BU_3_mziajl.jpg",
      
],
    },
    {
      "id": 3,
      "address": "Southern Row Apts - 77-79 Southern Road, W10 5AL",
      "composition": "2 x 1-Bed, 6 x 2-Bed, 2 x 3-Bed",
      "buildInfo": "New Build block (2013) in the Borough of Kensington & Chelsea, West London, yielding 9%, generating ungeared returns of 14% IRR and 1.4x EM",
      "financials": {
        "purchasePrice": -5779093,
        "rentalIncome": [351704, 496704, 496704, 496704],
        "salePrice": 8503749,
        "unleveredCFs": [-5427389, 496704, 496704, 9000453],
        "yieldOnCost": [6.1, 8.6, 8.6, null],
        "exitYield": 5.5,
        "unleveredIRREM": "24%/1.84x"
      },
      "imageArray":[
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722516990/3_Bed_-_Southern_Row1_kysewu.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722516991/3_Bed_-_Southern_Row3_ikqn94.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722516991/3_Bed_-_Southern_Row2_ttad2s.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722516991/3_Bed_-_Southern_Row6_bmtkbc.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722516992/3_Bed_-_Southern_Row4_r8jfa2.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722516992/3_Bed_-_Southern_Row7_il3pz3.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722516992/3_Bed_-_Southern_Row5_zeuxfi.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722516995/3_Bed_-_Southern_Row8_o3ewbn.jpg",
  "https://res.cloudinary.com/dzkldv06d/image/upload/v1722516996/3_Bed_-_Southern_Row10_d6nh1z.jpg"

],
    }
  ]
}



async function main() {
  await mongoose.connect('mongodb+srv://prajjwalbh25:AtZMTaWRJWT6uRl1@cluster0.rbysjio.mongodb.net/syc');

  // Insert properties
  for (const prop of property.properties) {
    const property = new Property(prop);
    await property.save();
  }

  console.log('Data inserted successfully');
  mongoose.disconnect();
}

main().catch(err => console.log(err));