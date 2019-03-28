/*
    Empty template:
    {
        name: "", 
        description: "",
        logo: "",
        tags: [],
        phone:"",
        social: {
            "website": "",
            "facebook": "",
            "twitter": "",
            "instagram": "",
        },
        email: "",
        address: "",
        hours: {
            "monday": "",
            "tuesday": "",
            "wednesday": "",
            "thursday": "",
            "friday": "",
            "saturday": "",
            "sunday": "",
            "others": "",
        },
    }
*/

export default [
    {
        name: "UBC Counselling Service", 
        description: "Professional counselling for students feeling  persistently stressed, anxious, or sad.",
        logo: "https://ubyssey.storage.googleapis.com/media/images/2016/11/jack-skate-1-2_A1HlLVn-medium.jpg",
        tags: ["onCampus", "professional", "appointment", "recurring", "walkIn"],
        phone:"604-822-3811",
        social: {
            "website": "https://students.ubc.ca/health/counselling-services",
        },
        address: "Brock Hall Room 1040\n1874 East Mall\nVancouver, BC V6T 1Z1",
        hours: {
            "monday": "8:30am-3:30pm",
            "tuesday": "8:30am-3:30pm",
            "wednesday": "8:30am-6:00pm",
            "thursday": "10:00am-3:30pm",
            "friday": "8:30am-3:30pm",
        }
    },
    {
        name: "UBC Yoga Club", 
        description: "We provide affordable and accessible yoga to the UBC and greater Vancouver community to support mental health and physical health", 
        logo: "https://ubcyogaclub.files.wordpress.com/2014/12/10486_10151094924483521_1103997231_n-1.png",
        tags: ["onCampus", "generalAwareness"], 
        social: {
            "website": "ubcyogaclub.com",
        }, 
        email: "info.ubcyogaclub@gmail.com",
        address: "AMS Student Nest\n6133 University Blvd\nVancouver, BC V6T 1Z1", 
        hours:{
            "others": "Our class schedule is available at ubcyogaclub.com/schedule with the most current times and class locations",
        }
    },
    {
        name: "UBC Chaplains", 
        description: "One-on-one pastoral/spiritual counselling and opportunities to engage in exploring in the faith tradition they represent (Buddhist, Muslim, Jewish, Christian, and Bahá'í).",
        logo: "https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.0-9/11173354_939496622751482_114544511837677719_n.jpg?_nc_cat=108&_nc_ht=scontent.fyvr3-1.fna&oh=1eb4418bec882fffd6fd47326e0353a6&oe=5D04DB48",
        tags: ["onCampus", "professional", "walkIn", "spiritual"],
        phone:"",
        social: {
            "website": "https://students.ubc.ca/campus-life/religion-spirituality/chaplains",
            "facebook": "https://www.facebook.com/UMCAssociation/",
        },
        address: "University Multifaith Chaplains Association\nUBC Life Room 1303\n6000 Student Union Blvd\nVancouver, BC V6T 1Z1",
    },
    {
        name: "UBC Student Health Service", 
        description: "A wide range of health assessments and treatments provided by doctors, nurses, and specialists. ",
        logo: "https://thethunderbird.ca/wp-content/uploads//2016/11/StudentHealth1-1-1024x680.jpg",
        tags: ["onCampus", "professional", "appointment", "walkIn"],
        phone:" 604-822-7011",
        social: {
            "website": "https://students.ubc.ca/health/student-health-service",
        },
        email: "student.health@ubc.ca",
        address: "Student Health Services\nUBC Hospital Room M334\n2211 Wesbrook Mall\nVancouver, BC V6T 2A1",
        hours: {
            "monday": "8:00am-4:00pm",
            "tuesday": "8:00am-4:00pm",
            "wednesday": "8:00am-8:00pm",
            "thursday": "9:00am-4:00pm",
            "friday": "8:00am-4:00pm",
            "saturday": "8:00am-4:00pm",
        },
    }
];