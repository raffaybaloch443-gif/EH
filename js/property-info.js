
const params = new URLSearchParams(window.location.search);
const propertyId = parseInt(params.get("id"));



// Property Database
const properties = [
    // ===============================
    // MODERN HOUSES (1-10)
    // ===============================

    {
        id: 1,
        type: "house",
        name: "Modern House 1",
        location: "DHA Phase 6, Lahore",
        price: "PKR 2.5 Crore",
        images: [
            "assets/img/photo-1568605114967-8130f3a36994-w1200-q80.jpg",
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600585154526-990dced4db0d-w1200-q80.jpg"
        ], bedrooms: "5",
        bathrooms: "6",
        area: "10 Marla",
        parking: "2 Cars",
        kitchen: "2 Modern Kitchens",
        tvLounge: "2",
        servantQuarter: "Yes",
        description: "A beautiful modern house with spacious bedrooms, luxury bathrooms, stylish kitchen and secure parking."
    },

    {
        id: 2,
        type: "house",
        name: "Modern House 2",
        location: "Bahria Town, Lahore",
        price: "PKR 2.8 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ],
        bedrooms: "5",
        bathrooms: "5",
        area: "12 Marla",
        parking: "2 Cars",
        kitchen: "2 Modern Kitchens",
        tvLounge: "2",
        servantQuarter: "Yes",
        description: "Premium family house with elegant interior design and modern facilities."
    },

    {
        id: 3,
        type: "house",
        name: "Modern House 3",
        location: "Johar Town, Lahore",
        price: "PKR 3.0 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], bedrooms: "6",
        bathrooms: "6",
        area: "1 Kanal",
        parking: "3 Cars",
        kitchen: "2",
        tvLounge: "2",
        servantQuarter: "Yes",
        description: "Luxury modern house with a beautiful front elevation and spacious rooms."
    },

    {
        id: 4,
        type: "house",
        name: "Modern House 4",
        location: "Model Town, Lahore",
        price: "PKR 3.2 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], bedrooms: "5",
        bathrooms: "5",
        area: "15 Marla",
        parking: "2 Cars",
        kitchen: "2",
        tvLounge: "2",
        servantQuarter: "Yes",
        description: "Modern house with beautiful architecture and luxury finishing."
    },

    {
        id: 5,
        type: "house",
        name: "Modern House 5",
        location: "Wapda Town, Lahore",
        price: "PKR 3.5 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], bedrooms: "6",
        bathrooms: "6",
        area: "1 Kanal",
        parking: "3 Cars",
        kitchen: "2",
        tvLounge: "2",
        servantQuarter: "Yes",
        description: "Spacious modern villa with luxury design and peaceful surroundings."
    },

    {
        id: 6,
        type: "house",
        name: "Modern House 6",
        location: "Lake City, Lahore",
        price: "PKR 3.8 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], bedrooms: "4",
        bathrooms: "4",
        area: "12 Marla",
        parking: "2 Cars",
        kitchen: "1",
        tvLounge: "2",
        servantQuarter: "Yes",
        description: "Stylish family home with modern layout and quality construction."
    },

    {
        id: 7,
        type: "house",
        name: "Modern House 7",
        location: "DHA Phase 8, Lahore",
        price: "PKR 4.0 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], bedrooms: "5",
        bathrooms: "6",
        area: "1 Kanal",
        parking: "3 Cars",
        kitchen: "2",
        tvLounge: "2",
        servantQuarter: "Yes",
        description: "Luxury designer house in one of Lahore's most prestigious communities."
    },

    {
        id: 8,
        type: "house",
        name: "Modern House 8",
        location: "Askari 11, Lahore",
        price: "PKR 4.3 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], bedrooms: "5",
        bathrooms: "5",
        area: "1 Kanal",
        parking: "3 Cars",
        kitchen: "2",
        tvLounge: "2",
        servantQuarter: "Yes",
        description: "Beautiful luxury home with modern architecture and premium finishes."
    },

    {
        id: 9,
        type: "house",
        name: "Modern House 9",
        location: "Valencia Town, Lahore",
        price: "PKR 4.5 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], bedrooms: "5",
        bathrooms: "4",
        area: "1 Kanal",
        parking: "3 Cars",
        kitchen: "2",
        tvLounge: "2",
        servantQuarter: "Yes",
        description: "Luxury family home with elegant interior and spacious outdoor area."
    },

    {
        id: 10,
        type: "house",
        name: "Modern House 10",
        location: "Gulberg, Lahore",
        price: "PKR 5.0 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], bedrooms: "6",
        bathrooms: "6",
        area: "2 Kanal",
        parking: "4 Cars",
        kitchen: "2",
        tvLounge: "3",
        servantQuarter: "Yes",
        description: "A premium luxury mansion with exceptional design and world-class facilities."
    },
    // ===============================
    // LUXURY APARTMENTS (11-20)
    // ===============================

    {
        id: 11,
        type: "apartment",
        name: "Luxury Apartment 1",
        location: "Clifton, Karachi",
        price: "PKR 2.5 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], bedrooms: "3",
        bathrooms: "4",
        floor: "5th Floor",
        area: "1800 Sq Ft",
        balcony: "2",
        lift: "Available",
        parking: "1 Car",
        description: "Luxury apartment with sea view and premium amenities."
    },

    {
        id: 12,
        type: "apartment",
        name: "Luxury Apartment 2",
        location: "DHA, Karachi",
        price: "PKR 2.8 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], bedrooms: "3",
        bathrooms: "3",
        floor: "7th Floor",
        area: "1900 Sq Ft",
        balcony: "2",
        lift: "Available",
        parking: "1 Car",
        description: "Modern apartment in a prime location with elegant interiors."
    },

    {
        id: 13,
        type: "apartment",
        name: "Luxury Apartment 3",
        location: "Gulshan-e-Iqbal, Karachi",
        price: "PKR 3.0 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], bedrooms: "4",
        bathrooms: "4",
        floor: "10th Floor",
        area: "2200 Sq Ft",
        balcony: "3",
        lift: "Available",
        parking: "2 Cars",
        description: "Spacious apartment with luxury finishes and city views."
    },

    {
        id: 14,
        type: "apartment",
        name: "Luxury Apartment 4",
        location: "PECHS, Karachi",
        price: "PKR 3.2 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], bedrooms: "3",
        bathrooms: "3",
        floor: "6th Floor",
        area: "2000 Sq Ft",
        balcony: "2",
        lift: "Available",
        parking: "2 Cars",
        description: "Beautiful apartment with modern design and excellent security."
    },

    {
        id: 15,
        type: "apartment",
        name: "Luxury Apartment 5",
        location: "Bahria Town, Karachi",
        price: "PKR 3.5 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], bedrooms: "4",
        bathrooms: "4",
        floor: "9th Floor",
        area: "2400 Sq Ft",
        balcony: "3",
        lift: "Available",
        parking: "2 Cars",
        description: "Premium apartment with spacious rooms and modern facilities."
    },

    {
        id: 16,
        type: "apartment",
        name: "Luxury Apartment 6",
        location: "Clifton, Karachi",
        price: "PKR 3.8 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], bedrooms: "3",
        bathrooms: "3",
        floor: "11th Floor",
        area: "2100 Sq Ft",
        balcony: "2",
        lift: "Available",
        parking: "2 Cars",
        description: "Modern apartment with luxury lifestyle and premium location."
    },

    {
        id: 17,
        type: "apartment",
        name: "Luxury Apartment 7",
        location: "DHA, Karachi",
        price: "PKR 4.0 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ],
        bedrooms: "4",
        bathrooms: "4",
        floor: "12th Floor",
        area: "2500 Sq Ft",
        balcony: "3",
        lift: "Available",
        parking: "2 Cars",
        description: "Luxury apartment with breathtaking views and top-class amenities."
    },

    {
        id: 18,
        type: "apartment",
        name: "Luxury Apartment 8",
        location: "Gulistan-e-Johar, Karachi",
        price: "PKR 4.3 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], bedrooms: "4",
        bathrooms: "5",
        floor: "14th Floor",
        area: "2600 Sq Ft",
        balcony: "3",
        lift: "Available",
        parking: "2 Cars",
        description: "Elegant apartment offering comfort, security and luxury."
    },

    {
        id: 19,
        type: "apartment",
        name: "Luxury Apartment 9",
        location: "Scheme 33, Karachi",
        price: "PKR 4.5 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], bedrooms: "4",
        bathrooms: "4",
        floor: "15th Floor",
        area: "2700 Sq Ft",
        balcony: "3",
        lift: "Available",
        parking: "2 Cars",
        description: "Premium apartment with world-class facilities."
    },

    {
        id: 20,
        type: "apartment",
        name: "Luxury Apartment 10",
        location: "Clifton, Karachi",
        price: "PKR 5.0 Crore",
        images: [
            "assets/img/photo-1460317442991-0ec209397118-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ],
        bedrooms: "5",
        bathrooms: "5",
        floor: "18th Floor",
        area: "3000 Sq Ft",
        balcony: "4",
        lift: "Available",
        parking: "3 Cars",
        description: "Ultra luxury penthouse apartment with panoramic city views."
    },
    // ===============================
    // COMMERCIAL PLAZAS (21-25)
    // ===============================

    {
        id: 21,
        type: "plaza",
        name: "Commercial Plaza 1",
        location: "Blue Area, Islamabad",
        price: "PKR 9 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], floors: "4",
        shops: "16",
        offices: "8",
        parking: "Basement Parking",
        elevators: "2",
        rentalIncome: "PKR 6 Lakh / Month",
        description: "Modern commercial plaza in the heart of Islamabad with shops, offices and ample parking."
    },

    {
        id: 22,
        type: "plaza",
        name: "Commercial Plaza 2",
        location: "F-10 Markaz, Islamabad",
        price: "PKR 10 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], floors: "5",
        shops: "20",
        offices: "10",
        parking: "Basement Parking",
        elevators: "2",
        rentalIncome: "PKR 7 Lakh / Month",
        description: "Commercial building in a busy business area with excellent rental potential."
    },

    {
        id: 23,
        type: "plaza",
        name: "Commercial Plaza 3",
        location: "G-11, Islamabad",
        price: "PKR 11 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], floors: "6",
        shops: "24",
        offices: "12",
        parking: "Basement Parking",
        elevators: "2",
        rentalIncome: "PKR 8 Lakh / Month",
        description: "A premium commercial plaza with modern facilities and spacious office floors."
    },

    {
        id: 24,
        type: "plaza",
        name: "Commercial Plaza 4",
        location: "DHA Phase 2, Islamabad",
        price: "PKR 12 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], floors: "7",
        shops: "28",
        offices: "14",
        parking: "Covered Parking",
        elevators: "3",
        rentalIncome: "PKR 9 Lakh / Month",
        description: "Luxury commercial plaza suitable for corporate offices and branded outlets."
    },

    {
        id: 25,
        type: "plaza",
        name: "Commercial Plaza 5",
        location: "Bahria Town, Islamabad",
        price: "PKR 13 Crore",
        images: [
            "assets/img/photo-1570129477492-45c003edd2be-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ], floors: "8",
        shops: "32",
        offices: "16",
        parking: "Covered Parking",
        elevators: "3",
        rentalIncome: "PKR 10 Lakh / Month",
        description: "Modern commercial plaza with premium retail shops and office spaces."
    },
    // ===============================
    // COMMERCIAL PLAZAS (26-30)
    // ===============================

    {
        id: 26,
        type: "plaza",
        name: "Commercial Plaza 6",
        location: "Gulberg Greens, Islamabad",
        price: "PKR 14 Crore",
        images: [
            "assets/img/photo-1497366811353-6870744d04b2-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ],
        floors: "8",
        shops: "34",
        offices: "18",
        parking: "Covered Parking",
        elevators: "3",
        rentalIncome: "PKR 11 Lakh / Month",
        description: "Premium commercial plaza with modern offices and retail outlets."
    },

    {
        id: 27,
        type: "plaza",
        name: "Commercial Plaza 7",
        location: "DHA Phase 5, Islamabad",
        price: "PKR 15 Crore",
        images: [
            "assets/img/photo-1486406146926-c627a92ad1ab-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ],
        floors: "9",
        shops: "36",
        offices: "20",
        parking: "Basement Parking",
        elevators: "4",
        rentalIncome: "PKR 12 Lakh / Month",
        description: "High-end commercial plaza located in a prime business district."
    },

    {
        id: 28,
        type: "plaza",
        name: "Commercial Plaza 8",
        location: "F-8 Markaz, Islamabad",
        price: "PKR 16 Crore",
        images: [
            "assets/img/photo-1448630360428-65456885c650-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ],
        floors: "9",
        shops: "38",
        offices: "22",
        parking: "Covered Parking",
        elevators: "4",
        rentalIncome: "PKR 13 Lakh / Month",
        description: "Large commercial building with premium office space and retail shops."
    },

    {
        id: 29,
        type: "plaza",
        name: "Commercial Plaza 9",
        location: "Blue Area, Islamabad",
        price: "PKR 17 Crore",
        images: [
            "assets/img/photo-1497366754035-f200968a6e72-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ],
        floors: "10",
        shops: "40",
        offices: "24",
        parking: "Basement Parking",
        elevators: "4",
        rentalIncome: "PKR 14 Lakh / Month",
        description: "Luxury commercial plaza in the heart of the city."
    },

    {
        id: 30,
        type: "plaza",
        name: "Commercial Plaza 10",
        location: "Blue Area, Islamabad",
        price: "PKR 18 Crore",
        images: [
            "assets/img/photo-1511818966892-d7d671e672a2-w1200-q80.jpg",
            "assets/img/photo-1600607687939-ce8a6c25118c-w1200-q80.jpg",
            "assets/img/photo-1605146769289-440113cc3d00-w1200-q80.jpg"
        ],
        floors: "10",
        shops: "40",
        offices: "25",
        parking: "Basement Parking",
        elevators: "4",
        rentalIncome: "PKR 15 Lakh / Month",
        description: "A landmark commercial plaza with excellent rental returns."
    }


];
// 👇 PASTE THE FINAL JAVASCRIPT HERE

const property = properties.find(item => item.id === propertyId);
window.EstateHubProperty = property || null;

if (property) {

    document.getElementById("propertyName").innerHTML = "🏠 " + property.name;
    document.getElementById("propertyLocation").innerHTML = "📍 " + property.location;
    document.getElementById("propertyPrice").innerHTML = "💰 " + property.price;
    let currentImage = 0;

    // If the property has multiple images
    if (property.images && property.images.length > 0) {

        document.getElementById("propertyImage").src = property.images[currentImage];

        document.getElementById("nextBtn").onclick = function () {

            currentImage++;

            if (currentImage >= property.images.length) {
                currentImage = 0;
            }

            document.getElementById("propertyImage").src = property.images[currentImage];

        };

        document.getElementById("prevBtn").onclick = function () {

            currentImage--;

            if (currentImage < 0) {
                currentImage = property.images.length - 1;
            }

            document.getElementById("propertyImage").src = property.images[currentImage];

        };

    } else {

        // If the property has only one image
        document.getElementById("propertyImage").src = property.image;

    }
    setInterval(() => {

        if (property.images && property.images.length > 1) {

            currentImage++;

            if (currentImage >= property.images.length) {
                currentImage = 0;
            }

            document.getElementById("propertyImage").src = property.images[currentImage];

        }

    }, 3000);
    document.getElementById("description").innerHTML = property.description;

    let details = "";

    if (property.type === "house") {

        details = `
            <p><strong>Bedrooms:</strong> ${property.bedrooms}</p>
            <p><strong>Bathrooms:</strong> ${property.bathrooms}</p>
            <p><strong>Area:</strong> ${property.area}</p>
            <p><strong>Parking:</strong> ${property.parking}</p>
            <p><strong>Kitchen:</strong> ${property.kitchen}</p>
            <p><strong>TV Lounge:</strong> ${property.tvLounge}</p>
            <p><strong>Servant Quarter:</strong> ${property.servantQuarter}</p>
        `;

    } else if (property.type === "apartment") {

        details = `
            <p><strong>Bedrooms:</strong> ${property.bedrooms}</p>
            <p><strong>Bathrooms:</strong> ${property.bathrooms}</p>
            <p><strong>Floor:</strong> ${property.floor}</p>
            <p><strong>Area:</strong> ${property.area}</p>
            <p><strong>Balcony:</strong> ${property.balcony}</p>
            <p><strong>Lift:</strong> ${property.lift}</p>
            <p><strong>Parking:</strong> ${property.parking}</p>
        `;

    } else if (property.type === "plaza") {

        details = `
            <p><strong>Floors:</strong> ${property.floors}</p>
            <p><strong>Shops:</strong> ${property.shops}</p>
            <p><strong>Offices:</strong> ${property.offices}</p>
            <p><strong>Parking:</strong> ${property.parking}</p>
            <p><strong>Elevators:</strong> ${property.elevators}</p>
            <p><strong>Rental Income:</strong> ${property.rentalIncome}</p>
        `;

    }

    document.getElementById("propertyDetails").innerHTML = details;

} else {
    const container = document.querySelector(".container");
    if (container) {
        container.innerHTML = `
            <h1>Property Not Found</h1>
            <p class="muted">The selected property could not be found. Please return to the listings and choose another property.</p>
            <a class="btn" href="properties.html">Back to Properties</a>
        `;
    }
}
// ===============================
// Similar Properties
// ===============================

function loadSimilarProperties() {
    if (!property) return;

    const container = document.getElementById("similarProperties");
    if (!container) return;

    const similar = properties
        .filter(item =>
            item.type === property.type &&
            item.id !== property.id
        )
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    similar.forEach(item => {

        container.innerHTML += `

        <div class="similar-card"
        onclick="window.location.href='property-info.html?id=${item.id}'">

           <img src="${item.images ? item.images[0] : item.image}" alt="${item.name}">

            <div class="similar-body">

                <h3>${item.name}</h3>

                <p>📍 ${item.location}</p>

                <p class="similar-price">
                    💰 ${item.price}
                </p>

            </div>

        </div>

    `;

    });

}

loadSimilarProperties();
function addFavorite() {

    console.log("Property:", property);

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    console.log("Old Favorites:", favorites);

    favorites.push(property);

    localStorage.setItem("favorites", JSON.stringify(favorites));

    console.log("New Favorites:", favorites);

    const button = document.getElementById("favoriteBtn");

    button.innerHTML = "💖 Added to Favorites";
    button.classList.add("favorite-animation");

    setTimeout(() => {
        button.classList.remove("favorite-animation");
    }, 500);
}
const visitBtn = document.getElementById("visitBtn");
const visitForm = document.getElementById("visitForm");

if (visitBtn) {

    visitBtn.addEventListener("click", function () {

        visitForm.style.display = "block";

    });

}
const bookVisitBtn = document.getElementById("bookVisitBtn");

if (bookVisitBtn) {

    bookVisitBtn.addEventListener("click", function () {

        const name = document.getElementById("visitorName").value;
        const phone = document.getElementById("visitorPhone").value;
        const date = document.getElementById("visitDate").value;
        const time = document.getElementById("visitTime").value;

        if (!name || !phone || !date || !time) {
            alert("Please fill in all fields.");
            return;
        }

        const booking = {
            propertyId: property.id,
            propertyName: property.name,
            name: name,
            phone: phone,
            date: date,
            time: time
        };

        let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

        bookings.push(booking);

        localStorage.setItem("bookings", JSON.stringify(bookings));

        alert("✅ Your visit has been booked successfully!");

        window.location.href = "my-bookings.html";
    });

}
const deleteButtons = document.querySelectorAll(".deleteBookingBtn");

deleteButtons.forEach((button) => {

    button.addEventListener("click", function () {

        const index = this.getAttribute("data-index");

        bookings.splice(index, 1);

        localStorage.setItem("bookings", JSON.stringify(bookings));

        location.reload();

    });

});
// ===============================
// Property Reviews
// ===============================

const submitReviewBtn = document.getElementById("submitReviewBtn");

if (submitReviewBtn) {

    submitReviewBtn.addEventListener("click", function () {

        const reviewText = document.getElementById("reviewText").value;
        const reviewRating = document.getElementById("reviewRating").value;

        if (!reviewText) {
            alert("Please write a review.");
            return;
        }

        const review = {
            propertyId: property.id,
            propertyName: property.name,
            rating: reviewRating,
            text: reviewText
        };

        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

        reviews.push(review);

        localStorage.setItem("reviews", JSON.stringify(reviews));

        alert("⭐ Review submitted successfully!");

    });

}
// ===============================
// Load Property Reviews
// ===============================

const reviewsContainer = document.getElementById("reviewsContainer");

if (reviewsContainer) {

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    const propertyReviews = reviews.filter(
        review => review.propertyId === property.id
    );

    if (propertyReviews.length === 0) {

        reviewsContainer.innerHTML = `
            <p>No reviews yet. Be the first to review this property!</p>
        `;

    } else {

        propertyReviews.forEach((review, index) => {

            reviewsContainer.innerHTML += `
            
          <div class="review-card">

    <h4>${"⭐".repeat(Number(review.rating))}</h4>

    <p>${review.text}</p>

    <button class="deleteReviewBtn" data-index="${index}">
        🗑 Delete Review
    </button>

    <hr>

</div>

            `;

        });

    }

}
const deleteReviewButtons = document.querySelectorAll(".deleteReviewBtn");

deleteReviewButtons.forEach((button) => {

    button.addEventListener("click", function () {

        const index = this.getAttribute("data-index");

        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

        const propertyReviews = reviews.filter(
            review => review.propertyId === property.id
        );

        const reviewToDelete = propertyReviews[index];

        const updatedReviews = reviews.filter(
            review => review !== reviewToDelete
        );

        localStorage.setItem("reviews", JSON.stringify(updatedReviews));

        location.reload();

    });

});
