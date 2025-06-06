const destinations = {
    delhi: {
        name: "Delhi",
        country: "India",
        description:
            "India's capital territory, a massive metropolitan area in the country's north. Delhi is known for its heritage buildings, ancient monuments, and being the political hub of India.",
        image: "/gateway-bg.jpg",
        itinerary: [
            {
                day: 1,
                morning: "India Gate - A war memorial dedicated to WWI soldiers.",
                afternoon: "Qutub Minar - A 73-metre tall UNESCO World Heritage Site.",
                evening: "Red Fort - Historic fort, main residence of Mughal emperors.",
                stay: "The Imperial",
                food: "Paranthe Wali Gali"
            },
            {
                day: 2,
                morning: "Humayun’s Tomb - A magnificent Mughal architecture and UNESCO site.",
                afternoon: "Lotus Temple - A lotus-shaped Bahá'í House of Worship.",
                evening: "Connaught Place - Shopping and dining hub with colonial architecture.",
                stay: "Bloomrooms",
                food: "Karim's"
            },
            {
                day: 3,
                morning: "Akshardham Temple - A Hindu temple showcasing Indian culture.",
                afternoon: "National Museum - Rich artifacts from India's history.",
                evening: "India Habitat Centre - Art exhibitions and performances.",
                stay: "The Claridges",
                food: "Indian Accent"
            },
            {
                day: 4,
                morning: "Jama Masjid - One of the largest mosques in India.",
                afternoon: "Chandni Chowk - Bustling market famous for street food and shops.",
                evening: "Raj Ghat - Memorial of Mahatma Gandhi.",
                stay: "Taj Palace",
                food: "Al Jawahar"
            },
            {
                day: 5,
                morning: "Lodhi Garden - Historical tombs in a beautifully landscaped park.",
                afternoon: "Hauz Khas Village - Urban village with cafés, boutiques, and ruins.",
                evening: "Dilli Haat - Crafts bazaar and food plaza.",
                stay: "The Leela Palace",
                food: "SodaBottleOpenerWala"
            },

            {
                day: 6,
                morning: "Rashtrapati Bhavan - Presidential residence with Mughal gardens.",
                afternoon: "Museum of Illusions - Fun, interactive experience.",
                evening: "Kingdom of Dreams (Gurgaon) - Live entertainment, Bollywood shows.",
                stay: "Shangri-La Eros",
                food: "Bukhara"
            }
        ],
        accommodations: [
            {
                name: "The Imperial",
                address: "Janpath Lane, Connaught Place",
                rating: 4.7,
                description: "Luxury heritage hotel with colonial architecture.",
                budget: "₹12,000 - ₹18,000"
            },
            {
                name: "Bloomrooms",
                address: "Jangpura Extension",
                rating: 4.3,
                description: "Bright, budget-friendly hotel with great location.",
                budget: "₹2,000 - ₹4,000"
            },
            {
                name: "The Claridges",
                address: "Dr. APJ Abdul Kalam Road",
                rating: 4.6,
                description: "Classic hotel with elegance and greenery.",
                budget: "₹10,000 - ₹14,000"
            },
            {
                name: "Taj Palace",
                address: "Diplomatic Enclave, Sardar Patel Marg",
                rating: 4.8,
                description: "Elegant hotel with luxury dining and lush gardens.",
                budget: "₹14,000 - ₹20,000"
            },
            {
                name: "The Leela Palace",
                address: "Chanakyapuri",
                rating: 4.9,
                description: "Opulent hotel with majestic interiors.",
                budget: "₹18,000+"
            },
            {
                name: "Shangri-La Eros",
                address: "Ashoka Road, Connaught Place",
                rating: 4.6,
                description: "High-end hotel with skyline views and global cuisine.",
                budget: "₹12,000 - ₹16,000"
            }
        ],

        restaurants: [
            {
                name: "Paranthe Wali Gali",
                address: "Chandni Chowk",
                rating: 4.2,
                description: "Iconic for delicious, stuffed parathas."
            },
            {
                name: "Karim’s",
                address: "Jama Masjid, Old Delhi",
                rating: 4.4,
                description: "Legendary Mughlai cuisine spot."
            },
            {
                name: "Indian Accent",
                address: "The Lodhi Hotel",
                rating: 4.7,
                description: "Fusion fine dining with Indian roots."
            },
            {
                name: "Al Jawahar",
                address: "Opposite Jama Masjid",
                rating: 4.3,
                description: "Mughlai dishes like nihari and biryani."
            },
            {
                name: "SodaBottleOpenerWala",
                address: "Khan Market",
                rating: 4.4,
                description: "Irani café serving Parsi Bombay food."
            },
            {
                name: "Bukhara",
                address: "ITC Maurya",
                rating: 4.6,
                description: "World-famous tandoori cuisine."
            }
        ],
        pointsOfInterest: [
            {
                name: "India Gate",
                category: "Monument",
                image: "/gateway-bg.jpg",
                description: "A war memorial dedicated to soldiers who died during World War I."
            },
            {
                name: "Qutub Minar",
                category: "Monument",
                image: "/qutb-bg.jpeg",
                description: "A 73-metre tall tower and UNESCO World Heritage Site built in 1193."
            },
            {
                name: "Red Fort",
                category: "Historic Fort",
                image: "/redfort-bg.jpg",
                description: "17th-century fort that served as the main residence of the Mughal emperors."
            },
            {
                name: "Lotus Temple",
                category: "Religious Site",
                image: "/lotus-bg.jpeg",
                description: "Bahá'í House of Worship known for its lotus-like architecture and spiritual atmosphere."
            },
            {
                name: "Akshardham Temple",
                category: "Religious Site",
                image: "/akshardam-bg.jpeg",
                description: "A spiritual-cultural campus showcasing Hindu art, culture, and spirituality."
            },
            {
                name: "Chandni Chowk",
                category: "Market",
                image: "/chandni-bg.jpeg",
                description: "A historic marketplace known for its narrow lanes, vibrant bazaars, and street food."
            },
            {
                name: "Humayun’s Tomb",
                category: "Monument",
                image: "/humayun-bg.jpeg",
                description: "A UNESCO World Heritage Site and the tomb of Mughal Emperor Humayun."
            }
        ]
    },
    jaipur: {
        name: "Jaipur",
        country: "India",
        description: "Jaipur, the Pink City, is famous for its vibrant culture, royal palaces, forts, and monuments.",
        image: "/jaipur-bg.jpg",
        itinerary: [
            {
                day: 1,
                morning: "Visit Amber Fort, a majestic fort perched on a hilltop.",
                afternoon: "Explore City Palace, an architectural marvel with museums and courtyards.",
                evening: "Stroll through Hawa Mahal, the Palace of Winds.",
                stay: "The Oberoi Rajvilas",
                food: "Chokhi Dhani"
            },
            {
                day: 2,
                morning: "Visit Jantar Mantar, the world’s largest stone astronomical observatory.",
                afternoon: "Explore the picturesque Jal Mahal set in the middle of Man Sagar Lake.",
                evening: "Visit Nahargarh Fort to enjoy a panoramic view of the city.",
                stay: "Trident Jaipur",
                food: "Laxmi Misthan Bhandar"
            },
            {
                day: 3,
                morning: "Relax and explore the Albert Hall Museum.",
                afternoon: "Visit Johari Bazaar for Rajasthani jewelry and textiles.",
                evening: "Explore the Birla Mandir, a beautiful temple dedicated to Lord Vishnu.",
                stay: "Taj Jai Mahal Palace",
                food: "Spice Court"
            },
            {
                day: 4,
                morning: "Visit the Jaigarh Fort to see one of the largest cannons in the world.",
                afternoon: "Explore Sisodia Rani Garden, a historic garden with murals.",
                evening: "Catch a traditional Rajasthani dance performance at Raj Mandir Cinema.",
                stay: "The Raj Palace",
                food: "Bapusa Roti"
            },
            {
                day: 5,
                morning: "Visit the beautiful Ganesh Temple.",
                afternoon: "Explore the Rajputana architecture at the Jai Singh’s Observatory.",
                evening: "Watch a sound and light show at Amber Fort.",
                stay: "The Trident Jaipur",
                food: "The Royal Food Court"
            },
            {
                day: 6,
                morning: "Discover the Tiger Fort.",
                afternoon: "Visit the Bapu Bazaar for local souvenirs and handicrafts.",
                evening: "Spend the evening at the Central Park of Jaipur for relaxation.",
                stay: "The Oberoi Rajvilas",
                food: "The Heritage Restaurant"
            }
        ],
        accommodations: [
            {
                name: "The Oberoi Rajvilas",
                address: "Goner Road",
                rating: 4.8,
                description: "An opulent hotel offering traditional Rajasthani hospitality and world-class service.",
                budget: "₹25,000+"
            },
            {
                name: "Trident Jaipur",
                address: "Amber Fort Road",
                rating: 4.6,
                description: "Luxury hotel overlooking the beautiful Mansagar Lake.",
                budget: "₹7,000 - ₹12,000"
            },
            {
                name: "Taj Jai Mahal Palace",
                address: "Jacob Road",
                rating: 4.7,
                description: "A historic palace hotel that combines Rajasthani heritage with modern luxury.",
                budget: "₹15,000 - ₹22,000"
            }
        ],
        restaurants: [
            {
                name: "Chokhi Dhani",
                address: "Jagdish Colony",
                rating: 4.5,
                description: "A cultural village offering Rajasthani food and traditional performances."
            },
            {
                name: "Laxmi Misthan Bhandar",
                address: "Johari Bazar",
                rating: 4.6,
                description: "Famous for traditional sweets and snacks."
            },
            {
                name: "Spice Court",
                address: "Khasa Kothi, M.I. Road",
                rating: 4.7,
                description: "Serving delectable Rajasthani and North Indian cuisine."
            }
        ],
        pointsOfInterest: [
            {
                name: "Amber Fort",
                category: "Fort",
                image: "/amber-fort.jpeg",
                description: "A UNESCO World Heritage site, famous for its architecture and grandiose."
            },
            {
                name: "City Palace",
                category: "Palace",
                image: "/city-palace.jpeg",
                description: "A beautiful palace complex that houses museums and courtyards."
            },
            {
                name: "Hawa Mahal",
                category: "Palace",
                image: "/hawa-mahal.jpeg",
                description: "The iconic 'Palace of Winds', known for its intricate façade."
            },
            {
                name: "Jantar Mantar",
                category: "Astronomical Observatory",
                image: "/jantar-mantar.jpeg",
                description: "An astronomical observatory with ancient instruments for measuring time and distance."
            },
            {
                name: "Jai Singh’s Observatory",
                category: "Observatory",
                image: "/jai-singh.jpeg",
                description: "An astronomical observatory built by Maharaja Jai Singh II."
            }
        ]
    }
    ,
    goa: {
        name: "Goa",
        country: "India",
        description: "Goa is known for its beautiful beaches, rich Portuguese heritage, vibrant nightlife, and lush greenery.",
        image: "/goa-bg.jpg",
        itinerary: [
            {
                day: 1,
                morning: "Relax on Baga Beach and try water sports.",
                afternoon: "Visit the Basilica of Bom Jesus, a UNESCO World Heritage Site.",
                evening: "Explore the vibrant Anjuna Beach market.",
                stay: "Taj Exotica Resort & Spa",
                food: "Gunpowder"
            },
            {
                day: 2,
                morning: "Take a boat trip on the Mandovi River.",
                afternoon: "Visit Dudhsagar Waterfalls.",
                evening: "Enjoy the lively nightlife in Tito’s Lane.",
                stay: "The Leela Goa",
                food: "Vinayak Family Restaurant"
            },
            {
                day: 3,
                morning: "Visit Chapora Fort for a scenic view of the coastline.",
                afternoon: "Explore the colorful streets of Fontainhas in Panaji.",
                evening: "Enjoy the sunset at Palolem Beach.",
                stay: "Park Hyatt Goa Resort & Spa",
                food: "Sakana"
            },
            {
                day: 4,
                morning: "Relax at Palolem Beach.",
                afternoon: "Take a trip to the Rachol Seminary, an architectural gem.",
                evening: "Enjoy the Goan seafood at a beachside shack.",
                stay: "Alila Diwa Goa",
                food: "Ritz Classic"
            },
            {
                day: 5,
                morning: "Visit Se Cathedral, one of the largest churches in Asia.",
                afternoon: "Explore the beaches of South Goa.",
                evening: "Enjoy a traditional Goan dinner at a local restaurant.",
                stay: "W Goa",
                food: "The Fisherman’s Wharf"
            },
            {
                day: 6,
                morning: "Explore the Salim Ali Bird Sanctuary.",
                afternoon: "Take a short hike to the Cabo De Rama Fort.",
                evening: "Watch the sunset at Butterfly Beach.",
                stay: "The Leela Goa",
                food: "La Plage"
            }
        ],
        accommodations: [
            {
                name: "Taj Exotica Resort & Spa",
                address: "Benaulim Beach",
                rating: 4.8,
                description: "A luxurious beachfront resort offering world-class service and tranquility.",
                budget: "₹20,000 - ₹30,000"
            },
            {
                name: "The Leela Goa",
                address: "Cavelossim",
                rating: 4.7,
                description: "A stunning resort with beautiful views of the Arabian Sea.",
                budget: "₹18,000 - ₹28,000"
            },
            {
                name: "Park Hyatt Goa Resort & Spa",
                address: "Arossim Beach",
                rating: 4.6,
                description: "A luxurious resort offering unparalleled service and stunning surroundings.",
                budget: "₹15,000 - ₹25,000"
            }
        ],
        restaurants: [
            {
                name: "Gunpowder",
                address: "Assagao",
                rating: 4.6,
                description: "Known for its delicious South Indian and Goan cuisine."
            },
            {
                name: "Vinayak Family Restaurant",
                address: "Assagao",
                rating: 4.4,
                description: "A local favorite for authentic Goan seafood."
            },
            {
                name: "Sakana",
                address: "Cavelossim",
                rating: 4.5,
                description: "An upscale Japanese restaurant offering sushi and Asian fusion."
            }
        ],
        pointsOfInterest: [
            {
                name: "Baga Beach",
                category: "Beach",
                image: "/baga-beach.jpeg",
                description: "One of the most popular beaches in Goa, known for water sports and nightlife."
            },
            {
                name: "Basilica of Bom Jesus",
                category: "Church",
                image: "/bom-jesus.jpeg",
                description: "A UNESCO World Heritage site, this church houses the remains of St. Francis Xavier."
            },
            {
                name: "Dudhsagar Waterfalls",
                category: "Waterfall",
                image: "/dudhsagar-waterfall.jpeg",
                description: "A majestic four-tiered waterfall located on the border of Goa and Karnataka."
            },
            {
                name: "Chapora Fort",
                category: "Fort",
                image: "/chapora-fort.jpeg",
                description: "A 16th-century fort with spectacular views of the Arabian Sea."
            }
        ]
    }
    ,
    mumbai: {
        name: "Mumbai",
        country: "India",
        description: "Mumbai, the financial capital of India, is known for its bustling streets, beautiful beaches, colonial architecture, and vibrant nightlife.",
        image: "/mumbai-bg.jpg",
        itinerary: [
            {
                day: 1,
                morning: "Visit the Gateway of India, Mumbai’s iconic landmark.",
                afternoon: "Take a ferry ride to Elephanta Island and explore the Elephanta Caves.",
                evening: "Walk along Marine Drive, also known as the Queen’s Necklace.",
                stay: "The Oberoi Mumbai",
                food: "Bademiya"
            },
            {
                day: 2,
                morning: "Explore the Chhatrapati Shivaji Maharaj Terminus, a UNESCO World Heritage site.",
                afternoon: "Visit the Prince of Wales Museum, now known as Chhatrapati Shivaji Maharaj Vastu Sangrahalaya.",
                evening: "Enjoy the vibrant nightlife at Colaba and the nearby cafés.",
                stay: "Trident Nariman Point",
                food: "The Bombay Canteen"
            },
            {
                day: 3,
                morning: "Visit the historic Haji Ali Dargah, a mosque and tomb located on an islet.",
                afternoon: "Explore the famous Chowpatty Beach and the Girgaon Chowpatty.",
                evening: "Spend time at the Siddhivinayak Temple, one of the most important Ganesh temples in Mumbai.",
                stay: "The Taj Mahal Palace",
                food: "Sarvi Restaurant"
            },
            {
                day: 4,
                morning: "Visit the Juhu Beach, one of Mumbai’s most famous beaches.",
                afternoon: "Explore the ISKCON Temple, a spiritual and cultural center.",
                evening: "Catch a Bollywood movie at a famous cinema hall in the city.",
                stay: "JW Marriott Mumbai Juhu",
                food: "Prakash Upahaar Kendra"
            },
            {
                day: 5,
                morning: "Take a walk around the Dharavi Slum to learn about its thriving industries.",
                afternoon: "Visit the Sanjay Gandhi National Park, home to wildlife and the Kanheri Caves.",
                evening: "Explore the vibrant street food scene at Lokhandwala Market.",
                stay: "ITC Maratha",
                food: "Anand Stall"
            },
            {
                day: 6,
                morning: "Visit the Nehru Planetarium and Science Centre.",
                afternoon: "Explore the Banganga Tank and the nearby Walkeshwar Temple.",
                evening: "Watch the sunset at the Worli Sea Face.",
                stay: "The St. Regis Mumbai",
                food: "Britannia & Co."
            }
        ],
        accommodations: [
            {
                name: "The Oberoi Mumbai",
                address: "Nariman Point",
                rating: 4.8,
                description: "An elegant 5-star hotel offering luxury accommodations and stunning views of the Arabian Sea.",
                budget: "₹25,000 - ₹40,000"
            },
            {
                name: "Trident Nariman Point",
                address: "Nariman Point",
                rating: 4.7,
                description: "A luxurious hotel offering modern amenities with a view of the famous Marine Drive.",
                budget: "₹18,000 - ₹30,000"
            },
            {
                name: "The Taj Mahal Palace",
                address: "Colaba",
                rating: 4.9,
                description: "One of Mumbai's iconic landmarks offering timeless elegance, luxury, and unparalleled service.",
                budget: "₹30,000 - ₹50,000"
            }
        ],
        restaurants: [
            {
                name: "Bademiya",
                address: "Colaba",
                rating: 4.5,
                description: "A popular late-night spot serving mouth-watering kebabs and rolls."
            },
            {
                name: "The Bombay Canteen",
                address: "Kamala Mills Compound",
                rating: 4.7,
                description: "A trendy place serving innovative Indian cuisine in a chic setting."
            },
            {
                name: "Sarvi Restaurant",
                address: "Mohammad Ali Road",
                rating: 4.3,
                description: "Known for its hearty Parsi cuisine and delicious non-vegetarian dishes."
            }
        ],
        pointsOfInterest: [
            {
                name: "Gateway of India",
                category: "Monument",
                image: "/gateway-of-india.jpeg",
                description: "A historic gateway and one of Mumbai’s iconic landmarks built during the British rule."
            },
            {
                name: "Elephanta Caves",
                category: "Caves",
                image: "/elephanta-caves.jpeg",
                description: "A UNESCO World Heritage site with ancient rock-cut temples dedicated to Hindu deities."
            },
            {
                name: "Marine Drive",
                category: "Beachfront",
                image: "/marine-drive.jpeg",
                description: "A 3.6 km long boulevard along the coast, offering a stunning view of the Arabian Sea."
            },
            {
                name: "Chhatrapati Shivaji Maharaj Terminus",
                category: "Train Station",
                image: "/shivaji-terminus.jpeg",
                description: "A UNESCO World Heritage site, known for its Victorian Gothic architecture."
            },
            {
                name: "Siddhivinayak Temple",
                category: "Temple",
                image: "/siddhivinayak.jpg",
                description: "A significant temple dedicated to Lord Ganesha, revered by devotees from all over the world."
            }
        ]
    }
    ,
    kolkata: {
        name: "Kolkata",
        country: "India",
        description: "Kolkata, also known as Calcutta, is a cultural capital with colonial-era architecture, vibrant festivals, and rich historical significance.",
        image: "/kolkata-bg.jpg",
        itinerary: [
            {
                day: 1,
                morning: "Visit the iconic Howrah Bridge, a historic symbol of Kolkata.",
                afternoon: "Explore the Victoria Memorial, a white marble marvel.",
                evening: "Stroll through Park Street and enjoy Kolkata’s street food.",
                stay: "The Oberoi Grand",
                food: "Bhojohori Manna"
            },
            {
                day: 2,
                morning: "Visit Kalighat Temple, one of the 51 Shakti Peethas.",
                afternoon: "Explore the Indian Museum, the oldest and largest museum in India.",
                evening: "Enjoy a boat ride along the Hooghly River.",
                stay: "The Park Kolkata",
                food: "6 Ballygunge Place"
            },
            {
                day: 3,
                morning: "Visit the Marble Palace, an elegant mansion with art collections.",
                afternoon: "Explore Belur Math, the headquarters of the Ramakrishna Mission.",
                evening: "Take a walk along the Dakshineswar Kali Temple, situated on the banks of the Hooghly River.",
                stay: "ITC Sonar",
                food: "Tung Nam"
            },
            {
                day: 4,
                morning: "Visit the Botanical Gardens and the famous Great Banyan Tree.",
                afternoon: "Explore the Science City and enjoy interactive exhibits.",
                evening: "Visit the famous New Market for shopping and street food.",
                stay: "The Gateway Hotel",
                food: "Kewpie's"
            },
            {
                day: 5,
                morning: "Visit the Tagore House, the home of Rabindranath Tagore.",
                afternoon: "Explore the Dakshineswar Kali Temple and enjoy the tranquility of the temple’s surroundings.",
                evening: "Take a tram ride to experience Kolkata's colonial-era charm.",
                stay: "Hyatt Regency Kolkata",
                food: "Mocambo"
            },
            {
                day: 6,
                morning: "Visit the Sundarbans for a day trip, one of the world’s largest mangrove forests.",
                afternoon: "Take a wildlife safari in the Sundarbans.",
                evening: "Relax and enjoy a traditional Bengali dinner at a local restaurant.",
                stay: "The Oberoi Grand",
                food: "Oh! Calcutta"
            }
        ],
        accommodations: [
            {
                name: "The Oberoi Grand",
                address: "Chowringhee Road",
                rating: 4.8,
                description: "A historic luxury hotel offering colonial-era elegance combined with modern amenities.",
                budget: "₹20,000 - ₹35,000"
            },
            {
                name: "The Park Kolkata",
                address: "Park Street",
                rating: 4.7,
                description: "A contemporary luxury hotel offering modern amenities and an urban experience.",
                budget: "₹15,000 - ₹25,000"
            },
            {
                name: "ITC Sonar",
                address: "JBS Haldane Avenue",
                rating: 4.9,
                description: "A luxury hotel set amidst 5 acres of greenery offering the best of luxury and comfort.",
                budget: "₹25,000 - ₹45,000"
            }
        ],
        restaurants: [
            {
                name: "Bhojohori Manna",
                address: "Multiple Locations",
                rating: 4.5,
                description: "Famous for traditional Bengali cuisine and home-style dishes."
            },
            {
                name: "6 Ballygunge Place",
                address: "Ballygunge",
                rating: 4.6,
                description: "Serving authentic Bengali dishes in a cozy, homely atmosphere."
            },
            {
                name: "Tung Nam",
                address: "Lakeshore",
                rating: 4.4,
                description: "Famous for Chinese cuisine and seafood."
            }
        ],
        pointsOfInterest: [
            {
                name: "Howrah Bridge",
                category: "Bridge",
                image: "/howrah-bridge.png",
                description: "An iconic cantilever bridge that spans the Hooghly River, symbolizing Kolkata."
            },
            {
                name: "Victoria Memorial",
                category: "Monument",
                image: "/victoria-memorial.jpg",
                description: "A grand marble building dedicated to Queen Victoria, housing a museum."
            },
            {
                name: "Kalighat Temple",
                category: "Temple",
                image: "/kalighat-temple.jpeg",
                description: "A prominent Shakti Peetha and a sacred site for Hindu devotees."
            }
        ]
    }
    ,
    kerala: {
        name: "Kerala",
        country: "India",
        description: "Kerala, known as 'God’s Own Country', is famous for its pristine beaches, serene backwaters, lush hill stations, and rich culture.",
        image: "/kerala-bg.jpg",
        itinerary: [
            {
                day: 1,
                morning: "Arrive in Kochi and explore Fort Kochi, a historic area with colonial architecture.",
                afternoon: "Visit the Mattancherry Palace and the Jewish Synagogue.",
                evening: "Enjoy the Kerala Kathakali performance at a local theatre.",
                stay: "Taj Malabar Resort & Spa",
                food: "Kashi Art Café"
            },
            {
                day: 2,
                morning: "Visit the famous Chinese Fishing Nets at Fort Kochi.",
                afternoon: "Take a relaxing boat ride along the backwaters of Kochi.",
                evening: "Walk along the Marine Drive promenade and enjoy the sunset.",
                stay: "Le Meridien Kochi",
                food: "Sree Krishna Café"
            },
            {
                day: 3,
                morning: "Travel to Munnar, a hill station known for its tea gardens and beautiful landscapes.",
                afternoon: "Visit the Tea Museum and take a guided tour through the tea plantations.",
                evening: "Explore the local market in Munnar and enjoy some local snacks.",
                stay: "The Panoramic Getaway",
                food: "Saravana Bhavan"
            },
            {
                day: 4,
                morning: "Visit the Eravikulam National Park, home to the endangered Nilgiri Tahr.",
                afternoon: "Explore the Mattupetty Dam and enjoy a boat ride in the reservoir.",
                evening: "Relax at Echo Point, known for its natural acoustics.",
                stay: "Windermere Estate",
                food: "Rapsy Restaurant"
            },
            {
                day: 5,
                morning: "Head to Alleppey for a houseboat cruise along the tranquil backwaters.",
                afternoon: "Enjoy a traditional Kerala lunch served on the houseboat.",
                evening: "Relax and enjoy the peaceful atmosphere of the backwaters.",
                stay: "Punnamada Resort",
                food: "Thaff Restaurant"
            },
            {
                day: 6,
                morning: "Travel to Kovalam Beach, a famous coastal destination.",
                afternoon: "Relax on the beach or indulge in water sports like parasailing.",
                evening: "Watch the sunset at the lighthouse and enjoy the coastal breeze.",
                stay: "The Leela Kovalam",
                food: "The Tides"
            }
        ],
        accommodations: [
            {
                name: "Taj Malabar Resort & Spa",
                address: "Willingdon Island, Kochi",
                rating: 4.8,
                description: "A luxury resort offering beautiful views of the backwaters and the Arabian Sea.",
                budget: "₹18,000 - ₹30,000"
            },
            {
                name: "Le Meridien Kochi",
                address: "National Highway 47A",
                rating: 4.7,
                description: "A stunning hotel located on the backwaters, offering world-class amenities.",
                budget: "₹12,000 - ₹25,000"
            },
            {
                name: "The Panoramic Getaway",
                address: "Chinnakanal, Munnar",
                rating: 4.5,
                description: "A serene hilltop resort with breathtaking views of the tea plantations and valleys.",
                budget: "₹10,000 - ₹18,000"
            }
        ],
        restaurants: [
            {
                name: "Kashi Art Café",
                address: "Fort Kochi",
                rating: 4.6,
                description: "A quaint café serving fusion food with an artistic vibe."
            },
            {
                name: "Sree Krishna Café",
                address: "Fort Kochi",
                rating: 4.4,
                description: "A local favorite for traditional Kerala breakfast and snacks."
            },
            {
                name: "Saravana Bhavan",
                address: "Munnar",
                rating: 4.3,
                description: "A popular vegetarian restaurant offering delicious South Indian cuisine."
            }
        ],
        pointsOfInterest: [
            {
                name: "Fort Kochi",
                category: "Historic Site",
                image: "/fort-kochi.jpeg",
                description: "A historic colonial area known for its unique architecture and cultural heritage."
            },
            {
                name: "Mattancherry Palace",
                category: "Museum",
                image: "/mattancherry-palace.jpeg",
                description: "A palace built by the Portuguese and later renovated by the Dutch, now a museum."
            },
            {
                name: "Eravikulam National Park",
                category: "Nature Reserve",
                image: "/eravikulam-national-park.jpg",
                description: "A wildlife sanctuary famous for its rich biodiversity, especially the Nilgiri Tahr."
            }
        ]
    },
    agra: {
        name: "Agra",
        country: "India",
        description: "Home to the iconic Taj Mahal, Agra is a city steeped in Mughal history, showcasing magnificent architecture and rich cultural heritage.",
        image: "/agra-bg.jpeg",
        itinerary: [
            {
                day: 1,
                morning: "Taj Mahal - Witness the sunrise at this magnificent mausoleum.",
                afternoon: "Agra Fort - Explore the impressive red sandstone fort, a UNESCO World Heritage Site.",
                evening: "Mehtab Bagh - Enjoy a serene view of the Taj Mahal from across the Yamuna River at sunset.",
                stay: "The Oberoi Amarvilas",
                food: "Esphahan"
            },
            {
                day: 2,
                morning: "Fatehpur Sikri - A historic city built by Emperor Akbar, including Buland Darwaza and Jodha Bai's Palace.",
                afternoon: "Sikandra (Akbar's Tomb) - Visit the tomb of Emperor Akbar, a blend of architectural styles.",
                evening: "Kalakriti Cultural & Convention Centre - Experience a live show depicting the story of the Taj Mahal (Mohabbat the Taj).",
                stay: "ITC Mughal, a Luxury Collection Hotel",
                food: "Pinch of Spice"
            },
            {
                day: 3,
                morning: "Itmad-ud-Daula's Tomb (Baby Taj) - A beautiful Mughal mausoleum, often considered a precursor to the Taj Mahal.",
                afternoon: "Jama Masjid - Visit one of the largest mosques in Agra, opposite Agra Fort.",
                evening: "Sadar Bazaar - Explore for local crafts, souvenirs, and street food.",
                stay: "Courtyard by Marriott Agra",
                food: "Mughal Room"
            },
            {
                day: 4,
                morning: "Agra Bear Rescue Facility - Learn about and support rescued sloth bears.",
                afternoon: "Kinari Bazaar - A bustling market for textiles, jewelry, and handicrafts.",
                evening: "Subhash Emporium - Shop for marble inlay work and other local specialties.",
                stay: "Hotel Taj Resorts",
                food: "Joney's Place"
            },
            {
                day: 5,
                morning: "Chini Ka Rauza - A Persian-style tomb with glazed tile work.",
                afternoon: "Roman Catholic Cemetery - An old cemetery with unique tombs and history.",
                evening: "Local cooking class - Learn to prepare traditional Mughlai dishes.",
                stay: "The Grand Imperial",
                food: "Agra Chat House"
            },
            {
                day: 6,
                morning: "Mankameshwar Temple - An ancient Shiva temple near Taj Mahal.",
                afternoon: "Coronation Park - See the remnants of British statues.",
                evening: "Departure from Agra.",
                stay: "The Grand Imperial",
                food: "The Salt Cafe"
            }
        ],
        accommodations: [
            {
                "name": "The Oberoi Amarvilas",
                "address": "Fatehabad Road",
                "rating": 4.9,
                "description": "Luxury hotel with uninterrupted views of the Taj Mahal.",
                "budget": "₹25,000 - ₹40,000+"
            },
            {
                "name": "ITC Mughal, a Luxury Collection Hotel",
                "address": "Fatehabad Road",
                "rating": 4.7,
                "description": "Grand hotel inspired by Mughal architecture, spread over 35 acres.",
                "budget": "₹10,000 - ₹18,000"
            },
            {
                "name": "Courtyard by Marriott Agra",
                "address": "Fatehabad Road",
                "rating": 4.5,
                "description": "Modern hotel with comfortable rooms and a range of amenities.",
                "budget": "₹6,000 - ₹10,000"
            },
            {
                "name": "Hotel Taj Resorts",
                "address": "Taj East Gate Rd",
                "rating": 4.3,
                "description": "Unpretentious hotel offering contemporary rooms & 2 restaurants, plus views of the Taj Mahal.",
                "budget": "₹3,000 - ₹6,000"
            },
            {
                "name": "The Grand Imperial",
                "address": "Mahatma Gandhi Rd, opposite D.M Bungalow",
                "rating": 4.2,
                "description": "Refined heritage hotel featuring an outdoor pool, a spa & a restaurant, plus a terrace with Taj Mahal views.",
                "budget": "₹4,000 - ₹8,000"
            }
        ],
        "restaurants": [
            {
                "name": "Esphahan",
                "address": "The Oberoi Amarvilas",
                "rating": 4.7,
                "description": "Fine dining specializing in authentic Mughal cuisine."
            },
            {
                "name": "Pinch of Spice",
                "address": "Fatehabad Road",
                "rating": 4.5,
                "description": "Popular for North Indian, Mughlai, and Chinese dishes."
            },
            {
                "name": "Mughal Room",
                "address": "Clarks Shiraz",
                "rating": 4.0,
                "description": "Offers exotic Mughal cuisine with city views."
            },
            {
                "name": "Joney's Place",
                "address": "Tajganj",
                "rating": 4.0,
                "description": "Small, local eatery famous for its homely food and snacks."
            },
            {
                "name": "The Salt Cafe",
                "address": "Fatehabad Road",
                "rating": 4.1,
                "description": "Rooftop restaurant with a view of the Taj Mahal, serving Indian and international cuisine."
            }
        ],
        "pointsOfInterest": [
            {
                "name": "Taj Mahal",
                "category": "Mausoleum",
                "image": "/tajmahal-bg.jpg",
                "description": "An ivory-white marble mausoleum, a UNESCO World Heritage Site, and one of the New Seven Wonders of the World."
            },
            {
                "name": "Agra Fort",
                "category": "Historic Fort",
                "image": "/agrafort-bg.jpg",
                "description": "A historic fort, a UNESCO World Heritage Site, that served as the main residence of the Mughal emperors."
            },
            {
                "name": "Fatehpur Sikri",
                "category": "Historic City",
                "image": "/fatehpursikri-bg.jpg",
                "description": "A city built by Mughal Emperor Akbar, featuring impressive architectural complexes."
            },
            {
                "name": "Mehtab Bagh",
                "category": "Garden",
                "image": "/mehtabbagh-bg.jpg",
                "description": "A charbagh complex across the Yamuna River, offering a perfect view of the Taj Mahal."
            },
            {
                "name": "Itmad-ud-Daula's Tomb",
                "category": "Mausoleum",
                "image": "/itmaduddaula-bg.jpg",
                "description": "Often called the 'Baby Taj', this exquisite tomb is made of marble with intricate pietra dura work."
            }
        ]
    },
    udaipur: {
        "name": "Udaipur",
        "country": "India",
        "description": "Known as the 'City of Lakes' and 'Venice of the East', Udaipur is famous for its stunning palaces, picturesque lakes, and vibrant culture.",
        "image": "/udaipur-bg.jpeg",
        "itinerary": [
            {
                "day": 1,
                "morning": "City Palace - Explore the grand palace complex overlooking Lake Pichola.",
                "afternoon": "Boat ride on Lake Pichola - Enjoy scenic views of the palaces and ghats.",
                "evening": "Jag Mandir - Visit the island palace in Lake Pichola.",
                "stay": "The Leela Palace Udaipur",
                "food": "Sheesh Mahal"
            },
            {
                "day": 2,
                "morning": "Jagdish Temple - Visit the large Hindu temple in the center of Udaipur.",
                "afternoon": "Saheliyon-ki-Bari - Relax in the beautiful garden of maids.",
                "evening": "Bagore Ki Haveli - Witness a traditional Rajasthani cultural show.",
                "stay": "Taj Lake Palace",
                "food": "Upre by 1559 AD"
            },
            {
                "day": 3,
                "morning": "Monsoon Palace (Sajjan Garh Palace) - Enjoy panoramic views of the city and lakes.",
                "afternoon": "Fateh Sagar Lake - Enjoy a boat ride or visit Nehru Park.",
                "evening": "Badi Lake (Jiyan Sagar) - A serene lake with a peaceful atmosphere.",
                "stay": "The Lalit Laxmi Vilas Palace Udaipur",
                "food": "Ambrai Restaurant"
            },
            {
                "day": 4,
                "morning": "Shilpgram - A rural arts and crafts complex showcasing traditional Rajasthani village life.",
                "afternoon": "Vintage and Classic Car Collection Museum - Admire a collection of antique cars.",
                "evening": "Hathi Pol Bazaar - Shop for traditional Rajasthani handicrafts and textiles.",
                "stay": "Radisson Blu Udaipur Palace Resort & Spa",
                "food": "Natraj Dining Hall & Restaurant"
            },
            {
                "day": 5,
                "morning": "Eklingji Temple - Visit this ancient Hindu temple complex dedicated to Lord Shiva.",
                "afternoon": "Nagda - Explore the ruins of ancient temples near Eklingji.",
                "evening": "Dharohar Folk Dance Show at Bagore Ki Haveli (if not seen on Day 2).",
                "stay": "Hotel Lakend",
                "food": "Millets of Mewar"
            },
            {
                "day": 6,
                "morning": "Udaipur Ropeway - Enjoy aerial views of the city and lakes.",
                "afternoon": "Ahar Cenotaphs - Visit the royal crematorium grounds with beautiful cenotaphs.",
                "evening": "Departure from Udaipur.",
                "stay": "Hotel Lakend",
                "food": "Charcoal by Carlsson"
            }
        ],
        "accommodations": [
            {
                "name": "The Leela Palace Udaipur",
                "address": "Lake Pichola",
                "rating": 4.9,
                "description": "Opulent palace hotel offering breathtaking views of Lake Pichola and City Palace.",
                "budget": "₹20,000 - ₹35,000+"
            },
            {
                "name": "Taj Lake Palace",
                "address": "Pichola, Udaipur",
                "rating": 4.9,
                "description": "An iconic floating palace on Lake Pichola, offering unparalleled luxury.",
                "budget": "₹30,000 - ₹50,000+"
            },
            {
                "name": "The Lalit Laxmi Vilas Palace Udaipur",
                "address": "Fateh Sagar Lake",
                "rating": 4.6,
                "description": "A heritage hotel with grand architecture and stunning lake views.",
                "budget": "₹8,000 - ₹15,000"
            },
            {
                "name": "Radisson Blu Udaipur Palace Resort & Spa",
                "address": "Fateh Sagar Lake",
                "rating": 4.5,
                "description": "Modern resort with excellent facilities and views of Fateh Sagar Lake.",
                "budget": "₹7,000 - ₹12,000"
            },
            {
                "name": "Hotel Lakend",
                "address": "Fateh Sagar Lake",
                "rating": 4.4,
                "description": "Contemporary hotel with comfortable rooms and lake views.",
                "budget": "₹5,000 - ₹9,000"
            }
        ],
        "restaurants": [
            {
                "name": "Sheesh Mahal",
                "address": "The Leela Palace Udaipur",
                "rating": 4.7,
                "description": "Open-air lakeside restaurant serving authentic Indian delicacies."
            },
            {
                "name": "Upre by 1559 AD",
                "address": "Lake Pichola Hotel",
                "rating": 4.5,
                "description": "Rooftop restaurant with stunning views of City Palace and Lake Palace, multi-cuisine."
            },
            {
                "name": "Ambrai Restaurant",
                "address": "Amet Haveli, Pichola",
                "rating": 4.5,
                "description": "Riverside dining with beautiful views of Jagdish Temple and City Palace."
            },
            {
                "name": "Natraj Dining Hall & Restaurant",
                "address": "Near Railway Station",
                "rating": 4.2,
                "description": "Famous for its authentic Rajasthani and Gujarati thalis."
            },
            {
                "name": "Millets of Mewar",
                "address": "Hanuman Ghat",
                "rating": 4.3,
                "description": "Known for healthy and organic food options with a focus on local ingredients."
            }
        ],
        "pointsOfInterest": [
            {
                "name": "City Palace",
                "category": "Palace",
                "image": "/udaipur-city-palace-bg.jpg",
                "description": "A majestic complex of palaces built over centuries, overlooking Lake Pichola."
            },
            {
                "name": "Lake Pichola",
                "category": "Lake",
                "image": "/lake-pichola-bg.jpg",
                "description": "An artificial freshwater lake, famous for its islands and palaces."
            },
            {
                "name": "Jag Mandir",
                "category": "Island Palace",
                "image": "/jag-mandir-bg.jpg",
                "description": "A beautiful palace located on an island in Lake Pichola."
            },
            {
                "name": "Monsoon Palace (Sajjan Garh Palace)",
                "category": "Palace",
                "image": "/monsoon-palace-bg.jpg",
                "description": "A hilltop palatial residence offering panoramic views of Udaipur and its lakes."
            },
            {
                "name": "Jagdish Temple",
                "category": "Religious Site",
                "image": "/jagdish-temple-bg.jpg",
                "description": "A large Hindu temple dedicated to Lord Vishnu, known for its intricate carvings."
            }
        ]
    },
    rishikesh: {
        "name": "Rishikesh",
        "country": "India",
        "description": "Nestled in the foothills of the Himalayas, Rishikesh is known as the 'Yoga Capital of the World' and a spiritual hub on the banks of the Ganges River.",
        "image": "/rishikesh-bg.jpeg",
        "itinerary": [
            {
                "day": 1,
                "morning": "Laxman Jhula and Ram Jhula - Explore these iconic suspension bridges and surrounding ashrams.",
                "afternoon": "Parmarth Niketan Ashram - Attend the evening Ganga Aarti (river worship ceremony).",
                "evening": "Triveni Ghat - Witness the captivating Ganga Aarti.",
                "stay": "Anand in the Himalayas",
                "food": "Chotiwala Restaurant"
            },
            {
                "day": 2,
                "morning": "Yoga and Meditation Session - Participate in a morning yoga class at a local ashram.",
                "afternoon": "Neer Garh Waterfall - Enjoy a refreshing dip and hike to the waterfall.",
                "evening": "Beatles Ashram (Maharishi Mahesh Yogi Ashram) - Explore the abandoned ashram known for its graffiti.",
                "stay": "Taj Rishikesh Resort & Spa",
                "food": "Ramana's Garden Organic Cafe"
            },
            {
                "day": 3,
                "morning": "White Water Rafting - Experience the thrill of rafting on the Ganges River (seasonal).",
                "afternoon": "Cliff Jumping/Body Surfing (as part of rafting activity).",
                "evening": "Walk along the Ganga Ghats - Enjoy the serene atmosphere.",
                "stay": "Ganga Kinare - A Riverside Boutique Hotel",
                "food": "Little Buddha Cafe"
            },
            {
                "day": 4,
                "morning": "Kunjapuri Devi Temple Trek - Enjoy a sunrise trek for panoramic views of the Himalayas and the Ganges.",
                "afternoon": "Vashishta Gufa (Cave) - Meditate in this ancient cave where sage Vashishta meditated.",
                "evening": "Visit local cafes and enjoy the bohemian vibe.",
                "stay": "Aloha on the Ganges by Leisure Hotels",
                "food": "Devraj Coffee Corner"
            },
            {
                "day": 5,
                "morning": "Rajaji National Park Safari - (Optional, located nearby) Explore wildlife in a jeep safari (seasonal).",
                "afternoon": "Tera Manzil Temple (Trayambakeshwar Temple) - Visit the thirteen-storeyed temple with various deities.",
                "evening": "Shopping for spiritual items, yoga wear, and local handicrafts.",
                "stay": "Modi Yoga Retreat",
                "food": "Bistro Nirvana"
            },
            {
                "day": 6,
                "morning": "Ayurvedic massage or wellness session.",
                "afternoon": "Visit to local markets - Explore local produce and daily life.",
                "evening": "Departure from Rishikesh.",
                "stay": "Modi Yoga Retreat",
                "food": "60's Cafe (The Beatles Cafe)"
            }
        ],
        "accommodations": [
            {
                "name": "Anand in the Himalayas",
                "address": "Narendra Nagar, Tehri Garhwal",
                "rating": 4.8,
                "description": "Award-winning luxury destination spa resort for wellness and yoga.",
                "budget": "₹30,000 - ₹50,000+"
            },
            {
                "name": "Taj Rishikesh Resort & Spa",
                "address": "Village Singthali, Badrinath Road",
                "rating": 4.7,
                "description": "Luxurious resort offering stunning views of the Ganges and the Himalayas.",
                "budget": "₹15,000 - ₹25,000"
            },
            {
                "name": "Ganga Kinare - A Riverside Boutique Hotel",
                "address": "Haridwar Road",
                "rating": 4.5,
                "description": "A charming boutique hotel situated directly on the banks of the Ganges.",
                "budget": "₹7,000 - ₹12,000"
            },
            {
                "name": "Aloha on the Ganges by Leisure Hotels",
                "address": "Tapovan",
                "rating": 4.3,
                "description": "Riverfront resort offering comfortable stays and beautiful views.",
                "budget": "₹5,000 - ₹9,000"
            },
            {
                "name": "Modi Yoga Retreat",
                "address": "Badrinath Road, Tapovan",
                "rating": 4.2,
                "description": "Yoga-focused retreat with serene surroundings and comfortable accommodations.",
                "budget": "₹4,000 - ₹8,000"
            }
        ],
        "restaurants": [
            {
                "name": "Chotiwala Restaurant",
                "address": "Ram Jhula",
                "rating": 4.0,
                "description": "A Rishikesh institution, serving traditional Indian vegetarian food."
            },
            {
                "name": "Ramana's Garden Organic Cafe",
                "address": "Laxman Jhula Road",
                "rating": 4.5,
                "description": "Serves delicious organic food with a focus on fresh, local ingredients."
            },
            {
                "name": "Little Buddha Cafe",
                "address": "Laxman Jhula Road",
                "rating": 4.2,
                "description": "Popular cafe with a relaxed ambiance and river views, serving various cuisines."
            },
            {
                "name": "Devraj Coffee Corner",
                "address": "Laxman Jhula Road",
                "rating": 4.0,
                "description": "Known for its coffee, baked goods, and multi-cuisine menu with river views."
            },
            {
                "name": "Bistro Nirvana",
                "address": "Near Laxman Jhula",
                "rating": 4.3,
                "description": "Offers a good range of Indian and international dishes in a cozy setting."
            }
        ],
        "pointsOfInterest": [
            {
                "name": "Laxman Jhula",
                "category": "Bridge",
                "image": "/laxman-jhula-bg.jpg",
                "description": "An iron suspension bridge across the Ganges River, offering panoramic views."
            },
            {
                "name": "Ram Jhula",
                "category": "Bridge",
                "image": "/ram-jhula-bg.jpg",
                "description": "Another iconic suspension bridge connecting various ashrams and temples."
            },
            {
                "name": "Parmarth Niketan Ashram",
                "category": "Ashram",
                "image": "/parmarth-niketan-bg.jpg",
                "description": "One of the largest ashrams in Rishikesh, famous for its evening Ganga Aarti."
            },
            {
                "name": "Neer Garh Waterfall",
                "category": "Natural Attraction",
                "image": "/neer-garh-waterfall-bg.jpg",
                "description": "A serene waterfall accessible via a short trek, perfect for a refreshing dip."
            },
            {
                "name": "Beatles Ashram (Maharishi Mahesh Yogi Ashram)",
                "category": "Historic Site",
                "image": "/beatles-ashram-bg.jpg",
                "description": "An abandoned ashram where The Beatles famously stayed, now a popular spot for its art and tranquility."
            }
        ]
    },
    shimla: {
        "name": "Shimla",
        "country": "India",
        "description": "The 'Queen of Hills', Shimla is a charming hill station, known for its colonial architecture, scenic beauty, and pleasant climate.",
        "image": "/shimla-bg.jpeg",
        "itinerary": [
            {
                "day": 1,
                "morning": "The Ridge - Explore the open space in the heart of Shimla with panoramic views.",
                "afternoon": "Mall Road - Stroll, shop, and soak in the colonial charm.",
                "evening": "Christ Church - Visit the second oldest church in North India.",
                "stay": "The Oberoi Cecil, Shimla",
                "food": "Cafe Sol"
            },
            {
                "day": 2,
                "morning": "Jakhu Temple - Trek or take a ropeway to the highest peak in Shimla, home to a large Hanuman statue.",
                "afternoon": "Indian Institute of Advanced Study - Visit the historic Viceregal Lodge.",
                "evening": "Shimla State Museum - Explore the rich cultural heritage of Himachal Pradesh.",
                "stay": "Clarkes Hotel, A Grand Heritage Hotel",
                "food": "Honey Hut"
            },
            {
                "day": 3,
                "morning": "Kufri - Enjoy adventure activities like horse riding, yak rides, and visit the Himalayan Nature Park.",
                "afternoon": "Fagu - Experience the scenic beauty and apple orchards.",
                "evening": "Chail - Visit the Chail Palace and the highest cricket ground in the world.",
                "stay": "Radisson Hotel Shimla",
                "food": "Eighteen71 Cookhouse & Bar"
            },
            {
                "day": 4,
                "morning": "Naldehra - Play golf at the scenic golf course or enjoy a pony ride.",
                "afternoon": "Tattapani - Relax in the hot springs by the Sutlej River.",
                "evening": "Sanjauli Bazaar - Experience local life and enjoy street food.",
                "stay": "The Orchid Shimla",
                "food": "Ashiana & Goofa"
            },
            {
                "day": 5,
                "morning": "Summer Hill - Visit the beautiful residential area with lush greenery, home to Himachal Pradesh University.",
                "afternoon": "Annandale - Enjoy the open space and golf course.",
                "evening": "Gaiety Heritage Cultural Complex - Catch a play or performance.",
                "stay": "Hotel Peterhof",
                "food": "Devicos Bar & Restaurant"
            },
            {
                "day": 6,
                "morning": "Shopping at Lakkar Bazaar for wooden crafts and souvenirs.",
                "afternoon": "Explore local cafes and enjoy the serene atmosphere.",
                "evening": "Departure from Shimla.",
                "stay": "Hotel Peterhof",
                "food": "Wake & Bake"
            }
        ],
        "accommodations": [
            {
                "name": "The Oberoi Cecil, Shimla",
                "address": "Chaura Maidan Road",
                "rating": 4.8,
                "description": "A grand heritage hotel offering colonial charm and luxurious amenities.",
                "budget": "₹15,000 - ₹25,000+"
            },
            {
                "name": "Clarkes Hotel, A Grand Heritage Hotel",
                "address": "Mall Road",
                "rating": 4.6,
                "description": "A historic hotel with classic interiors and excellent service, located on the Mall Road.",
                "budget": "₹8,000 - ₹15,000"
            },
            {
                "name": "Radisson Hotel Shimla",
                "address": "Goodwood Estate, Lower Khalini",
                "rating": 4.4,
                "description": "Modern hotel with comfortable rooms and good facilities, offering valley views.",
                "budget": "₹6,000 - ₹10,000"
            },
            {
                "name": "The Orchid Shimla",
                "address": "Mashobra, Shimla",
                "rating": 4.3,
                "description": "Eco-friendly hotel set amidst pine forests, offering tranquil surroundings.",
                "budget": "₹5,000 - ₹9,000"
            },
            {
                "name": "Hotel Peterhof",
                "address": "Chaura Maidan",
                "rating": 4.1,
                "description": "A heritage hotel with a rich history and grand architecture, offering comfortable stays.",
                "budget": "₹4,000 - ₹7,000"
            }
        ],
        "restaurants": [
            {
                "name": "Cafe Sol",
                "address": "Hotel Combermere, The Mall",
                "rating": 4.2,
                "description": "Popular for its multi-cuisine menu, especially Italian, with a lively ambiance."
            },
            {
                "name": "Honey Hut",
                "address": "The Mall",
                "rating": 4.0,
                "description": "Known for its honey-based products and healthy snacks."
            },
            {
                "name": "Eighteen71 Cookhouse & Bar",
                "address": "Hotel Willow Banks, The Mall",
                "rating": 4.5,
                "description": "Fine dining restaurant with a varied menu and good ambiance."
            },
            {
                "name": "Ashiana & Goofa",
                "address": "The Ridge",
                "rating": 3.8,
                "description": "Government-run restaurants offering Indian and Chinese cuisine with good views."
            },
            {
                "name": "Devicos Bar & Restaurant",
                "address": "The Mall",
                "rating": 4.0,
                "description": "A popular spot for Himachali dishes and a wide range of beverages."
            }
        ],
        "pointsOfInterest": [
            {
                "name": "The Ridge",
                "category": "Public Space",
                "image": "/the-ridge-shimla-bg.jpg",
                "description": "A large open space in the heart of Shimla, offering panoramic views of the mountains."
            },
            {
                "name": "Mall Road",
                "category": "Shopping & Entertainment",
                "image": "/mall-road-shimla-bg.jpg",
                "description": "The main street of Shimla, lined with shops, restaurants, and colonial buildings."
            },
            {
                "name": "Jakhu Temple",
                "category": "Religious Site",
                "image": "/jakhu-temple-bg.jpg",
                "description": "An ancient Hanuman temple located on the highest peak in Shimla."
            },
            {
                "name": "Kufri",
                "category": "Hill Station",
                "image": "/kufri-bg.jpg",
                "description": "A small hill station near Shimla, popular for its scenic beauty and adventure activities."
            },
            {
                "name": "Indian Institute of Advanced Study",
                "category": "Historic Building",
                "image": "/indian-institute-of-advanced-study-bg.jpg",
                "description": "Formerly the Viceregal Lodge, a magnificent building with historical significance."
            }
        ]
    },
    "leh-ladakh": {
        "name": "Leh",
        "country": "India",
        "description": "A high-altitude desert region in the Himalayas, known for its breathtaking landscapes, Buddhist monasteries, and unique culture.",
        "image": "/leh-ladakh-bg.jpeg",
        "itinerary": [
            {
                "day": 1,
                "morning": "Arrival in Leh - Acclimatize to the high altitude.",
                "afternoon": "Leh Palace - Visit the former royal palace of Ladakh.",
                "evening": "Shanti Stupa - Enjoy panoramic views of Leh and the surrounding mountains at sunset.",
                "stay": "The Grand Dragon Ladakh",
                "food": "Gesmo Restaurant"
            },
            {
                "day": 2,
                "morning": "Shey Palace & Monastery - Explore the old summer palace of the Ladakhi kings.",
                "afternoon": "Thiksey Monastery - Visit the impressive monastery resembling the Potala Palace in Lhasa.",
                "evening": "Hemis Monastery - Discover the largest and wealthiest monastery in Ladakh.",
                "stay": "Hotel Ladakh Sarai",
                "food": "Tibetan Kitchen"
            },
            {
                "day": 3,
                "morning": "Magnetic Hill - Experience the optical illusion of vehicles moving uphill.",
                "afternoon": "Gurudwara Pathar Sahib - Visit the sacred Sikh shrine.",
                "evening": "Hall of Fame - A museum dedicated to the Indian Army's role in the region.",
                "stay": "Stok Palace Heritage Hotel",
                "food": "La Piazzetta"
            },
            {
                "day": 4,
                "morning": "Khardung La Pass - Drive through one of the highest motorable roads in the world to Nubra Valley.",
                "afternoon": "Diskit Monastery - Visit the oldest and largest monastery in Nubra Valley.",
                "evening": "Hunder (Nubra Valley) - Enjoy a double-humped camel ride and stay in a camp.",
                "stay": "Hunder Sarai Resort",
                "food": "Nubra Valley Restaurants"
            },
            {
                "day": 5,
                "morning": "Pangong Lake - Drive to the mesmerizing Pangong Tso (Lake), known for its changing colors.",
                "afternoon": "Enjoy the scenic beauty and take photos at Pangong Lake.",
                "evening": "Return to Leh.",
                "stay": "The Bodhi Tree Hotel",
                "food": "Chopsticks Noodle Bar"
            },
            {
                "day": 6,
                "morning": "Leh Main Bazaar - Explore the local market for souvenirs, handicrafts, and local produce.",
                "afternoon": "Spituk Monastery - Visit this monastery offering stunning views of the Indus Valley.",
                "evening": "Departure from Leh.",
                "stay": "The Bodhi Tree Hotel",
                "food": "Cafe Jeevan"
            }
        ],
        "accommodations": [
            {
                "name": "The Grand Dragon Ladakh",
                "address": "Old Road, Leh",
                "rating": 4.5,
                "description": "A luxury hotel offering modern amenities and traditional Ladakhi hospitality.",
                "budget": "₹12,000 - ₹20,000"
            },
            {
                "name": "Hotel Ladakh Sarai",
                "address": "Leh-Manali Highway",
                "rating": 4.3,
                "description": "A charming hotel with traditional architecture, offering comfortable stays.",
                "budget": "₹8,000 - ₹15,000"
            },
            {
                "name": "Stok Palace Heritage Hotel",
                "address": "Stok Village",
                "rating": 4.6,
                "description": "Stay in a wing of the historic Stok Palace, offering a unique heritage experience.",
                "budget": "₹15,000 - ₹25,000"
            },
            {
                "name": "Hunder Sarai Resort",
                "address": "Hunder, Nubra Valley",
                "rating": 4.0,
                "description": "Comfortable tented camp in Nubra Valley, providing an authentic desert experience.",
                "budget": "₹5,000 - ₹10,000"
            },
            {
                "name": "The Bodhi Tree Hotel",
                "address": "Upper Karzoo, Leh",
                "rating": 4.8,
                "description": "Upscale hotel featuring airy rooms with mountain views, plus a refined restaurant & a garden.",
                "budget": "₹9,000 - ₹16,000"
            }
        ],
        "restaurants": [
            {
                "name": "Gesmo Restaurant",
                "address": "Fort Road, Leh",
                "rating": 4.1,
                "description": "Famous for its Israeli and Indian cuisine, especially yak cheese pizza."
            },
            {
                "name": "Tibetan Kitchen",
                "address": "Fort Road, Leh",
                "rating": 4.4,
                "description": "Offers authentic Tibetan, Chinese, and Indian dishes."
            },
            {
                "name": "La Piazzetta",
                "address": "Leh Main Market",
                "rating": 4.0,
                "description": "Italian restaurant with a good selection of pizzas and pastas."
            },
            {
                "name": "Chopsticks Noodle Bar",
                "address": "Leh Main Market",
                "rating": 4.2,
                "description": "Popular for its Asian cuisine, especially noodles and momos."
            },
            {
                "name": "Cafe Jeevan",
                "address": "Main Bazaar, Leh",
                "rating": 3.9,
                "description": "A cozy cafe offering snacks, coffee, and light meals."
            }
        ],
        "pointsOfInterest": [
            {
                "name": "Leh Palace",
                "category": "Palace",
                "image": "/leh-palace-bg.jpg",
                "description": "A former royal palace offering panoramic views of Leh and the surrounding mountains."
            },
            {
                "name": "Shanti Stupa",
                "category": "Buddhist Stupa",
                "image": "/shanti-stupa-bg.jpg",
                "description": "A white-domed Buddhist stupa offering stunning sunset views."
            },
            {
                "name": "Thiksey Monastery",
                "category": "Monastery",
                "image": "/thiksey-monastery-bg.jpg",
                "description": "An impressive Buddhist monastery resembling the Potala Palace in Lhasa."
            },
            {
                "name": "Pangong Lake",
                "category": "Lake",
                "image": "/pangong-lake-bg.jpg",
                "description": "A breathtaking high-altitude lake known for its changing blue hues."
            },
            {
                "name": "Khardung La Pass",
                "category": "Mountain Pass",
                "image": "/khardung-la-bg.jpg",
                "description": "One of the highest motorable roads in the world, leading to Nubra Valley."
            }
        ]
    },
    jaisalmer: {
        "name": "Jaisalmer",
        "country": "India",
        "description": "The 'Golden City' of Rajasthan, known for its magnificent Jaisalmer Fort, vibrant markets, and desert landscapes.",
        "image": "/jaisalmer-bg.jpeg",
        "itinerary": [
            {
                "day": 1,
                "morning": "Jaisalmer Fort (Sonar Quila) - Explore the living fort, its palaces, and Jain temples.",
                "afternoon": "Patwon Ki Haveli - Admire the intricate architecture of these grand mansions.",
                "evening": "Gadisar Lake - Enjoy a boat ride and witness the beautiful sunset.",
                "stay": "Suryagarh Jaisalmer",
                "food": "Desert Boy's Dhani"
            },
            {
                "day": 2,
                "morning": "Salim Singh Ki Haveli - Visit this unique haveli with a peacock-shaped roof.",
                "afternoon": "Nathmal Ji Ki Haveli - Marvel at the intricately carved facade of this haveli.",
                "evening": "Vyas Chhatri - Enjoy sunset views from these royal cenotaphs.",
                "stay": "Hotel Pleasant Haveli",
                "food": "The Trio"
            },
            {
                "day": 3,
                "morning": "Kuldhara Abandoned Village - Explore the mysterious abandoned village.",
                "afternoon": "Sam Sand Dunes - Experience a camel safari and cultural evening with folk music and dance.",
                "evening": "Overnight stay at a desert camp in Sam Sand Dunes.",
                "stay": "Sam Sand Dunes Camp",
                "food": "Dinner at desert camp"
            },
            {
                "day": 4,
                "morning": "Bada Bagh - Visit the royal cenotaphs of the Maharajas of Jaisalmer.",
                "afternoon": "Jain Temples inside Jaisalmer Fort (if not covered on Day 1).",
                "evening": "Shopping at Sadar Bazaar and Manek Chowk for handicrafts, leather goods, and traditional clothing.",
                "stay": "Hotel Fort Rajwada",
                "food": "Gajane Restaurant"
            },
            {
                "day": 5,
                "morning": "Desert National Park - Explore the unique flora and fauna of the Thar Desert (optional jeep safari).",
                "afternoon": "Khaba Fort - Visit the ruined fort and village with a chilling history.",
                "evening": "Sunset point near Jaisalmer Fort for photography.",
                "stay": "Chokhi Dhani The Palace Hotel Jaisalmer",
                "food": "Kebab Corner"
            },
            {
                "day": 6,
                "morning": "Mandir Palace - Admire the architecture of this historic palace.",
                "afternoon": "Jaisalmer War Museum - Learn about the military history of the region.",
                "evening": "Departure from Jaisalmer.",
                "stay": "Chokhi Dhani The Palace Hotel Jaisalmer",
                "food": "Romany Restaurant"
            }
        ],
        "accommodations": [
            {
                "name": "Suryagarh Jaisalmer",
                "address": "Kahala Phata, Sam Road",
                "rating": 4.8,
                "description": "A luxurious fortress hotel, offering a blend of traditional Rajputana hospitality and modern amenities.",
                "budget": "₹15,000 - ₹25,000+"
            },
            {
                "name": "Hotel Pleasant Haveli",
                "address": "Gandhi Chowk",
                "rating": 4.5,
                "description": "A charming heritage hotel inside the fort, offering comfortable stays and fort views.",
                "budget": "₹3,000 - ₹7,000"
            },
            {
                "name": "Sam Sand Dunes Camp",
                "address": "Sam Sand Dunes",
                "rating": 4.0,
                "description": "Experience desert camping with cultural programs and camel safaris.",
                "budget": "₹4,000 - ₹8,000"
            },
            {
                "name": "Hotel Fort Rajwada",
                "address": "Jodhpur Barmer Link Road",
                "rating": 4.3,
                "description": "A palatial hotel offering elegant rooms, luxury dining, and an outdoor pool.",
                "budget": "₹6,000 - ₹12,000"
            },
            {
                "name": "Chokhi Dhani The Palace Hotel Jaisalmer",
                "address": "Barmer Road National Highway 15",
                "rating": 4.0,
                "description": "Laid-back hotel featuring an outdoor pool & a spa area, plus 2 restaurants & a bar.",
                "budget": "₹5,000 - ₹9,000"
            }
        ],
        "restaurants": [
            {
                "name": "Desert Boy's Dhani",
                "address": "Near Fort",
                "rating": 4.2,
                "description": "Offers traditional Rajasthani thali and live folk performances."
            },
            {
                "name": "The Trio",
                "address": "Gandhi Chowk",
                "rating": 4.3,
                "description": "Known for its authentic Rajasthani cuisine and rooftop dining with fort views."
            },
            {
                "name": "Gajane Restaurant",
                "address": "Inside Jaisalmer Fort",
                "rating": 4.0,
                "description": "Offers a variety of Indian and international dishes with a view of the city."
            },
            {
                "name": "Kebab Corner",
                "address": "Gandhi Chowk",
                "rating": 3.9,
                "description": "Popular for its succulent kebabs and other non-vegetarian delights."
            },
            {
                "name": "Romany Restaurant",
                "address": "Near Fort",
                "rating": 4.1,
                "description": "Serves a mix of Indian and international cuisines in a relaxed setting."
            }
        ],
        "pointsOfInterest": [
            {
                "name": "Jaisalmer Fort (Sonar Quila)",
                "category": "Fort",
                "image": "/jaisalmer-fort-bg.jpg",
                "description": "A magnificent living fort, a UNESCO World Heritage Site, made of golden-yellow sandstone."
            },
            {
                "name": "Patwon Ki Haveli",
                "category": "Mansion",
                "image": "/patwon-ki-haveli-bg.jpg",
                "description": "A cluster of five intricately carved Havelis, showcasing exquisite architecture."
            },
            {
                "name": "Gadisar Lake",
                "category": "Lake",
                "image": "/gadisar-lake-bg.jpg",
                "description": "An artificial lake surrounded by temples and ghats, offering boat rides and serene views."
            },
            {
                "name": "Sam Sand Dunes",
                "category": "Desert",
                "image": "/sam-sand-dunes-bg.jpg",
                "description": "Vast stretches of sand dunes, popular for camel safaris and cultural evenings."
            },
            {
                "name": "Kuldhara Abandoned Village",
                "category": "Historic Site",
                "image": "/kuldhara-bg.jpg",
                "description": "A mysterious abandoned village with a captivating history, rumored to be cursed."
            }
        ]
    }
};
export default destinations;