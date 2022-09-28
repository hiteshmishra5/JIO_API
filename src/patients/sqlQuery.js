const { values } = require("lodash");

const getPatients = "Select * from STG_JIO_PATIENT";
const addPatients = "INSERT INTO STG_JIO_PATIENT(firstName, lastName, healthHubID, address_line1, addressType, postalCode, fullAddress, address_line2, state, city, country, email, salutation, mobileNumber, dob, gender) Values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)";

const getbookingdetails = "Select * from STG_JIO_BOOKING_DETAILS";
const addbookingdetails = "INSERT INTO STG_JIO_BOOKING_DETAILS(healthHubID, status, clientID, clientCode, locationCode, orgCode, dispatchType, netAmount, externalRefNo, paymentStatus, bookingDTTM, grossAmount, discountAmount, collectionTime) Values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)"; 

const getservicemapping = "Select * from JIO_XRAI_SERVICE_MAPPING";
const addservicemapping = "INSERT INTO JIO_XRAI_SERVICE_MAPPING(mapping_id, xrai_id, jio_id) Values ($1, $2, $3)";

const getAllUserDetails = "Select * from EXTERNAL_PROJECT_USER_MASTER";
const addUser = "INSERT INTO EXTERNAL_PROJECT_USER_MASTER (userid, username, password, email, mobile, address, address1, city, state, pin, registrationtypeid, fullname, gender, mpin, isactive) Values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)";

const getTestInfo = "Select* from STG_JIO_TEST_INFO";
const addTestInfo = "INSERT INTO STG_JIO_TEST_INFO(healthHubID, pkgordritm_packageid, pkginfo_entitytype, pkginfo_entityid, suborderid, packageName, actual_price, discounted_price, discount_percentage,handling_charge, collectionStatus, sampleCollectedTime, reason, orderedFrom, type, price, testCode) Values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17 )";
module.exports={
    getPatients,
    addPatients,
    getbookingdetails,
    addbookingdetails,
    getservicemapping,
    addservicemapping,
    getAllUserDetails,
    addUser,
    getTestInfo,
    addTestInfo
}

                                                        







                                                      