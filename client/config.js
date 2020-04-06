// Button to open the computer, controls can be found at the FiveM docs.
const key = 38;

// Display the markers?
const displayMarkers = true;

// The text to display for each marker, can be set to false to disable it. (This won't be displayed if the displayMarkers variable is set to false)
const markerHelpText = 'Press ~g~~h~E~h~~s~ to use the computer';

// Locations of the computers, more locations can be added.
// To add more backgrounds simply place your image in the html/asset/images folder. 
// You don't have to add it to the __resource.lua, it reads all .gif, .jpg and .png files.
const locations = {
    'hospital': {
        coords: { x: 308.0204162597656, y: -595.9227294921875, z: 43.496363830566406 }, // Coords of the marker
        marker: {
            drawDistance: 2, // Player distance before the marker is visible
            type: 0, // Marker type
            size: { x: 0.3, y: 0.3, z: 0.2 }, // Marker size
            color: { r: 26, g: 55, b: 186 }, // Marker color
            animate: false, // Makes the marker move up and down
        },
        loginLogo: 'assets/images/logo_hospital.png', // Computer login logo image path
        loginBackground: 'assets/images/login_hospital.jpg', // Computer login background image path
        desktopBackground: 'assets/images/windows.png', // Computer desktop background image path
        excludePrograms: [ 'jobcenter', 'cardealer', 'folder', 'twitter' ], // Array of program names to exclude on the location
        overrideBackground: true, // Overrides the user background with the one specified above 
        job: 'ambulance', // The user needs to have the specified job to be able to login to the computer
        login: true, // Required to login? (Useful if you just want to display something in a store etc.. without asking the user to login)
        run: false // You can specify a program to run on start, see the cardealer marker down below
    },
    'policestation': {
        coords: { x: 442.0035607910156, y: -979.3918676757812, z: 30.689603805541992 },
        marker: {
            drawDistance: 1.5,
            type: 0,
            size: { x: 0.3, y: 0.3, z: 0.2 },
            color: { r: 28, g: 252, b: 3 },
            animate: false,
        },
        loginLogo: 'assets/images/logo_police.png',
        loginBackground: 'assets/images/login_police.jpg',
        desktopBackground: 'assets/images/police.jpg',
        excludePrograms: [ 'jobcenter', 'cardealer', 'folder', 'twitter' ],
        overrideBackground: true,
        job: 'police',
        login: true,
        run: false
    },
    'cardealer': {
        coords: { x: -56.209499359131, y: -1096.6896972656, z: 25.422355651855 },
        marker: {
            drawDistance: 5,
            type: 27,
            size: { x: 2.0, y: 2.0, z: 1.0 },
            color: { r: 26, g: 55, b: 186 },
            animate: false
        },
        desktopBackground: 'assets/images/login_cardealer.jpg',
        login: false,
        run: 'cardealer'
    },
}

// A command that lets a player open the computer or tablet, disabled by default. 
// # disableDistance:
// # if set to true the player can open the computer everywhere. If set to false the player needs to be standing next to one of the positions above ^
const commands = {
    'computer': {
        enable: true, // Command enabled?
        disableDistance: true,
        name: 'computer' // Name of the command /computer [location]
    }
}

const NUICallbacks = [
    'jsfour-computer:login',
    'jsfour-computer:medicalrecordsFetchAll',
    'jsfour-computer:medicalrecordsFetchUser',
    'jsfour-computer:medicalrecordsSearch',
    'jsfour-computer:medicalrecordsDelete',
    'jsfour-computer:medicalrecordsAdd',
    'jsfour-computer:fetchMail',
    'jsfour-computer:fetchUserEmails',
    'jsfour-computer:sendMail',
    'jsfour-computer:updateMailRead',
    'jsfour-computer:updateMailFolder',
    'jsfour-computer:deleteMail',
    'jsfour-computer:fetchEmail',
    'jsfour-computer:registerMail',
    'jsfour-computer:fetchAllJobAds',
    'jsfour-computer:addJobAd',
    'jsfour-computer:deleteJobAd',
    'jsfour-computer:updateJobAd',
    'jsfour-computer:fetchAllUsers',
    'jsfour-computer:fetchUsersByJob',
    'jsfour-computer:updateUser',
    'jsfour-computer:addUser',
    'jsfour-computer:updateForumAvatar',
    'jsfour-computer:fetchID',
    'jsfour-computer:updateEmail',
    'jsfour-computer:deleteUser',
    'jsfour-computer:deleteEmail',
    'jsfour-computer:fetchForumPosts',
    'jsfour-computer:addForumPost',
    'jsfour-computer:deleteForumPost',
    'jsfour-computer:getSocieties',
    'jsfour-computer:updateForumAvatar',
];