const mongoose = require('mongoose');
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/e-gov');
}

main()
.then((res)=>{
    console.log("connection successful")
})
.catch((err)=>{
    console.log(err)
})
const {Issue}=require("./models/e-gov.js")
const moreDemoIssues = [
    // Punjab
    {
        username: "deepak_gill",
        state: "Punjab",
        district: "Ludhiana",
        subject: "High pollution levels",
        description: "Ludhiana's air pollution is rising rapidly due to industrial activities. The air quality has dropped drastically, making it difficult for residents to breathe, especially the elderly.",
        upvote: 6
    },
    {
        username: "mohit_singh",
        state: "Punjab",
        district: "Patiala",
        subject: "Lack of proper sanitation",
        description: "Patiala faces major sanitation issues, with open drains and garbage piles in several localities. This has led to the spread of diseases.",
        upvote: 4
    },
    {
        username: "geeta_rani",
        state: "Punjab",
        district: "Jalandhar",
        subject: "Unreliable public transport",
        description: "The public transport system in Jalandhar is inadequate and unreliable, with buses often being overcrowded and running late.",
        upvote: 3
    },

    // Uttar Pradesh
    {
        username: "arvind_shukla",
        state: "Uttar Pradesh",
        district: "Kanpur",
        subject: "Water scarcity",
        description: "Kanpur has been facing acute water shortage due to mismanagement of resources, and many areas are going without proper water supply for days.",
        upvote: 7
    },
    {
        username: "priyanka_agarwal",
        state: "Uttar Pradesh",
        district: "Agra",
        subject: "Poor drainage system",
        description: "Agra's drainage system is clogged and poorly maintained, leading to frequent waterlogging during the rainy season, causing inconvenience to residents.",
        upvote: 5
    },
    {
        username: "shailendra_rana",
        state: "Uttar Pradesh",
        district: "Varanasi",
        subject: "Inadequate health facilities",
        description: "Health facilities in Varanasi are insufficient to meet the growing demand, leading to overcrowding in hospitals and long waiting times.",
        upvote: 4
    },

    // Bihar
    {
        username: "sujata_rai",
        state: "Bihar",
        district: "Gaya",
        subject: "Frequent power cuts",
        description: "Gaya has been experiencing frequent power cuts, which are affecting daily life and making it difficult for students to study and workers to complete their tasks.",
        upvote: 6
    },
    {
        username: "rohit_kumar",
        state: "Bihar",
        district: "Muzaffarpur",
        subject: "Unsafe roads",
        description: "The roads in Muzaffarpur are in poor condition and lack proper street lighting, making it unsafe for commuters, especially at night.",
        upvote: 3
    },
    {
        username: "neha_kumari",
        state: "Bihar",
        district: "Patna",
        subject: "School infrastructure issues",
        description: "Schools in Patna suffer from inadequate infrastructure, with insufficient classrooms, basic facilities, and poor maintenance.",
        upvote: 8
    },

    // Maharashtra
    {
        username: "sandeep_desai",
        state: "Maharashtra",
        district: "Pune",
        subject: "Traffic congestion",
        description: "Pune has been facing heavy traffic congestion, especially in the city center, leading to longer commute times and increased pollution.",
        upvote: 5
    },
    {
        username: "kavita_nayak",
        state: "Maharashtra",
        district: "Nagpur",
        subject: "Health care access",
        description: "Nagpur is facing challenges in accessing quality healthcare, especially in rural areas, where hospitals and clinics are insufficient to meet the demand.",
        upvote: 6
    },
    {
        username: "ajay_bansal",
        state: "Maharashtra",
        district: "Mumbai",
        subject: "Water pollution in local rivers",
        description: "The local rivers in Mumbai are heavily polluted, impacting the environment and health of the residents, especially in coastal areas.",
        upvote: 7
    },

    // Tamil Nadu
    {
        username: "srinivasan_venkat",
        state: "Tamil Nadu",
        district: "Coimbatore",
        subject: "Unregulated industrial pollution",
        description: "Industrial units in Coimbatore are releasing untreated waste into rivers, causing severe pollution and affecting the local water sources.",
        upvote: 4
    },
    {
        username: "latha_sundaram",
        state: "Tamil Nadu",
        district: "Chennai",
        subject: "Air pollution due to vehicles",
        description: "Chennai is facing rising air pollution levels caused by the increasing number of vehicles on the roads, affecting the health of the residents.",
        upvote: 8
    },
    {
        username: "karthik_krishna",
        state: "Tamil Nadu",
        district: "Madurai",
        subject: "Irrigation problems",
        description: "Farmers in Madurai are facing irrigation problems due to irregular water supply and inefficient use of available water resources.",
        upvote: 3
    },

    // Kerala
    {
        username: "maria_fernandes",
        state: "Kerala",
        district: "Thiruvananthapuram",
        subject: "Waste management issues",
        description: "Thiruvananthapuram is facing challenges in waste management, with piles of uncollected garbage leading to unhygienic conditions in several areas.",
        upvote: 5
    },
    {
        username: "pradeep_nair",
        state: "Kerala",
        district: "Kochi",
        subject: "Flood control measures",
        description: "Kochi needs better flood control measures to manage the increasing water levels during monsoon seasons, causing damage to property and livelihoods.",
        upvote: 6
    },
    {
        username: "rahul_narayan",
        state: "Kerala",
        district: "Kozhikode",
        subject: "Traffic accidents",
        description: "The roads in Kozhikode are not well-maintained, and the lack of proper traffic regulations has led to a rise in road accidents.",
        upvote: 4
    },

    // Delhi
    {
        username: "neeraj_jain",
        state: "Delhi",
        district: "South Delhi",
        subject: "Illegal parking issues",
        description: "Illegal parking in South Delhi has led to traffic jams and created safety hazards for pedestrians, especially near busy markets and residential areas.",
        upvote: 3
    },
    {
        username: "sonal_agarwal",
        state: "Delhi",
        district: "East Delhi",
        subject: "Availability of healthcare",
        description: "There is a shortage of public healthcare facilities in East Delhi, and many people are struggling to find affordable treatment options.",
        upvote: 5
    },
    {
        username: "anu_sharma",
        state: "Delhi",
        district: "North Delhi",
        subject: "Street lighting issues",
        description: "North Delhi faces poor street lighting, particularly in residential areas, making it unsafe for people to walk or travel at night.",
        upvote: 6
    },

    // Gujarat
    {
        username: "jayesh_patel",
        state: "Gujarat",
        district: "Surat",
        subject: "Water supply issues",
        description: "Surat has been facing water supply issues, particularly in the summer, leading to water scarcity and affecting residents' daily needs.",
        upvote: 4
    },
    {
        username: "priya_shah",
        state: "Gujarat",
        district: "Ahmedabad",
        subject: "Electricity fluctuation",
        description: "Frequent electricity fluctuations in Ahmedabad have disrupted businesses, especially in the industrial areas, leading to financial losses.",
        upvote: 3
    },
    {
        username: "sanjay_patel",
        state: "Gujarat",
        district: "Vadodara",
        subject: "Sanitation problems",
        description: "Vadodara faces sanitation problems, with poorly maintained public toilets and open sewage lines in several parts of the city.",
        upvote: 6
    },

    // West Bengal
    {
        username: "tanya_roy",
        state: "West Bengal",
        district: "Kolkata",
        subject: "Traffic management",
        description: "Kolkata faces severe traffic jams during peak hours, causing delays and discomfort to commuters. Better traffic management is urgently needed.",
        upvote: 7
    },
    {
        username: "sanjay_ghosh",
        state: "West Bengal",
        district: "Howrah",
        subject: "Waterlogging",
        description: "Howrah suffers from waterlogging issues after heavy rains, which leads to traffic disruptions and makes it difficult for people to move around.",
        upvote: 5
    },
    {
        username: "neha_ghosh",
        state: "West Bengal",
        district: "Durgapur",
        subject: "Health issues due to pollution",
        description: "The industrial pollution in Durgapur has led to an increase in respiratory diseases among the population, especially in children and the elderly.",
        upvote: 6
    },

    // Andhra Pradesh
    {
        username: "shivani_murthy",
        state: "Andhra Pradesh",
        district: "Visakhapatnam",
        subject: "Fishermen's safety",
        description: "Fishermen in Visakhapatnam are facing safety concerns due to poor infrastructure and lack of safety measures in fishing operations.",
        upvote: 5
    },
    {
        username: "arjun_rao",
        state: "Andhra Pradesh",
        district: "Vijayawada",
        subject: "Road maintenance",
        description: "The roads in Vijayawada are riddled with potholes, making it dangerous for vehicles and pedestrians, and affecting daily commuting.",
        upvote: 3
    },
    {
        username: "saraswati_singh",
        state: "Andhra Pradesh",
        district: "Tirupati",
        subject: "Garbage disposal issues",
        description: "Tirupati faces major issues with garbage collection and disposal, leading to littering in the streets and unhygienic conditions in residential areas.",
        upvote: 4
    }
];



Issue.insertMany(moreDemoIssues)
  