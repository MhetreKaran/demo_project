
export const dummyMarkers = [
    {
      lat: 18.516128,
      long: 73.855911,
      title: 'Shreemant Dagdusheth Halwai Ganpati Mandir',
      description:
        `The Dagadusheth Halwai Ganapati temple is a Hindu Temple located in Pune and is dedicated to the Hindu god Ganesh. The temple is visited by over hundred thousand pilgrims every year.[1][2] Devotees of the temple include celebrities and chief ministers of Maharashtra who visit during the annual ten-day Ganeshotsav festival.[3] The main Ganesh idol is insured for sum of ₹10 million (US$130,000).[4] It celebrated 130 years of its Ganapati in 2022`,
    },
    {
      lat: 18.51344,
      long: 73.857468,
      title: `McDonald's`,
      description:
       `McDonald's Corporation is an American multinational fast food chain, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States. They rechristened their business as a hamburger stand, and later turned the company into a franchise, with the Golden Arches logo being introduced in 1953 at a location in Phoenix, Arizona. In 1955, Ray Kroc, a businessman, joined the company as a franchise agent and in 1961 bought out the McDonald brothers. Previously headquartered in Oak Brook, Illinois, it moved to nearby Chicago in June 2018.[9][10][11][12] McDonald's is also a real estate company through its ownership of around 70% of restaurant buildings and 45% of the underlying land (which it leases to its franchisees)`,
    },
    {lat: 18.5230585, long: 73.8344631, title: 'KEM Hospital', description: `
    The KEM Hospital, Pune, India, is the largest Non-Government Organization hospital in the Pune District of Maharashtra State. Run by the KEM Hospital Society, it is registered under the Societies' Registration Act 1860 and the Bombay Public Trusts Act 1950. The hospital is a 550-bedded, tertiary-level teaching institution, serving not only the people of the city itself, but also a large populace coming from the surrounding urban and rural areas.
    
    The KEM also runs a secondary level Rural Hospital at Vadu, which serves a rural population of about 68,000 people through a network of primary health centers. All the major clinical departments like Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Pathology and Radiology, are recognized for the Pune University MD and MS degrees and for the National Board DNB.`},
    {
      lat: 18.5242481,
      long: 73.8326117,
      title: 'Garware College Of Commerce',
      description: `MES Garware College of Commerce was established in 1967 as an independent commerce college on the campus of the then ‘M.E.S. Arts and Science College’ which started in 1945. Initially Commerce classes were started in Arts College. The College was renamed as “M.E.S. Garware College of Commerce” in 1971. It was the second largest and independent commerce college imparting higher education in Commerce in Pune. The College got the momentum very soon and now is a leading single faculty Commerce College under Savitribai Phule Pune University. After getting very good grade continuously in the Accreditation process by National Assessment and Accreditation Council (NAAC), MES Garware College of Commerce has shown phenomenal growth on the front of number of programmes offered, research activities, presence of international students on the campus, industrial and institutional tie-ups and collaborations.`,
    },
    {
      lat: 18.5140493,
      long: 73.8501934,
      title: 'Shaniwar Wada',
      description:
        `The Shaniwar Wada was normally the seven-story capital building of the Peshwas of the Maratha Empire. It was supposed to be made entirely of stone. However, after the completion of the base floor or the first story, the people of Satara (the national capital) complained to the Chhatrapati Shahu I (Emperor) saying that a stone monument can be sanctioned and built only by the emperor himself and not the Peshwas. Following this, an official letter was written to the Peshwas stating that the remaining building had to be made of brick and not stone.

        By 1758, at least a thousand people lived in the fort.
        
        In 1773, Narayanrao, who was the fifth and ruling Peshwa then, was murdered by guards on orders of his uncle Raghunathrao and aunt Anandibai. A popular legend has it that Narayanrao's ghost still calls for help on full moon nights. Various people, working around the area, have allegedly reported the cries[3][4] of "Kaka mala vachava" (Uncle, save me) by Narayanrao Peshwa after his death.
        
        In June 1818, the Peshwa, Bajirao II, abdicated his Gaadi (throne) to Sir John Malcolm of the British East India Company and went into political exile at Bithoor, near Kanpur in present-day Uttar Pradesh, India.
        
        On 27 February 1828, a great fire started inside the palace complex. The conflagration raged for seven days. Only the heavy granite ramparts, strong teak gateways and deep foundations and ruins of the buildings within the fort survived.[5]
        
        According to Haricharitramrutsagar, a biographical text of Bhagwan Swaminarayan, he had visited Shaniwarwada on the insistence of Bajirao II in 1799`,
    },
    {
      lat: 18.5205932,
      long: 73.8466491,
      title: 'Kamala Nehru Park',
      description:`Kamala Nehru Park is part of the Hanging Gardens complex in Mumbai, Maharashtra, India covering an area of approximate 16,000 sq.mt. (4 acres). Located at the top of Mumbai's Malabar Hill, it is developed and maintained by the Hydraulic Engineer's Department of Municipal Corporation of Greater Mumbai. One of Mumbai's premier gardens it is popular with young children and tourists.[citation needed] The garden has views of the Marine drive below - also known as Queen's necklace.`,
    },
  ];

  const User={
    username:'abc@b.com',
    password:'Abc@123'
}
export const checkUserCredentials =(email,password)=>{
    if(User.username===email && User.password===password){
        return true;
    }
    else{
        return false;
    }
}

