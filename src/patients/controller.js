const pool = require("../../db");
const sqlqry = require("./sqlQuery")


// get patients****
const getPatients = (req, res) => {
	console.log("Getting patient....")
	pool.query(sqlqry.getPatients, (Err, resResult) => {
		if (Err) {
			res.status(400).json(Err.message)
		}
		else {
			res.status(200).json(resResult.rows);
		} np
	})
}

// add patients****
const addPatients = (req, res) => {
	const { patientInfoVO, bookingInfo, testInfoList } = req.body;
	const { firstName, lastName, healthHubID, addressDetails, email, salutation, mobileNumber, dob, gender } = patientInfoVO;
	const { address_line1, addressType, postalCode, fullAddress, address_line2, state, city, country } = addressDetails[0];
	const { status, clientID, clientCode, collectionTime, netAmount, locationCode, orgCode, externalRefNo, paymentStatus, bookingDTTM, dispatchType, grossAmount, discountAmount } = bookingInfo;
	const response_message = "";
	pool.query(sqlqry.addPatients, [firstName, lastName, healthHubID, address_line1, addressType, postalCode, fullAddress, address_line2, state, city, country, email, salutation, mobileNumber, dob, gender], (Err, resResult) => {
		console.log(firstName, lastName, healthHubID, address_line1, addressType, postalCode, fullAddress, address_line2, state, city, country, email, salutation, mobileNumber, dob, gender)
		if (Err) {
			res.status(400).json(Err.message);
		}
		else {
			 
			res.status(201).json("All details added");
		}
	})

	pool.query(sqlqry.addbookingdetails, [healthHubID, status, clientID, clientCode, locationCode, orgCode, dispatchType, netAmount, externalRefNo, paymentStatus, bookingDTTM, grossAmount, discountAmount, collectionTime], (Err, resResult) => {
		if (Err) {
			res.status(400).json(Err.message);
		}
		else {
			res.status(201).json("All details added.");
		}
	})

	if (testInfoList.length > 0) {
		for (let i = 0; i <= testInfoList.length - 1; i++) {
			const { healthHubID, pkgordritm_packageid, pkginfo_entitytype, pkginfo_entityid, suborderid, packageName, actual_price, discounted_price, discount_percentage, handling_charge, collectionStatus, sampleCollectedTime, reason, orderedFrom, type, price, testCode } = testInfoList[i]
			console.log(sampleCollectedTime)
			pool.query(sqlqry.addTestInfo, [healthHubID, pkgordritm_packageid, pkginfo_entitytype, pkginfo_entityid, suborderid, packageName, actual_price, discounted_price, discount_percentage, handling_charge, collectionStatus, sampleCollectedTime, reason, orderedFrom, type, price, testCode], (Err, resResult) => {
				if (Err) {
					res.status(400).json(Err.message);
				}
				else {
					res.status(201).json("All details added.");
				}
			})
		}
	}
}


// export module***

module.exports = {
	getPatients,
	addPatients,
}