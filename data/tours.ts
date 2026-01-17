export const tours = [
    {
    id: "europe-tour",
    title: "Europe",
    location: "Switzerland • France • Italy",
    price: "$1,150 / person",
    image: "/images/paris.png",
    rating: 4.7,
    category: "Multi-Country",
    tag: "Best Seller",
    duration: "Multiple Options",
    description: "Embark on a journey through the heart of Europe. Choose from our curated packages ranging from quick getaways to extensive explorations.",
    packages: [
      {
        id: "paris-zurich-express",
        duration: "5 Days",
        days: 5,
        name: "Paris & Zurich Express",
        price: "$1,150",
        image: "/images/paris.png",
        images: ["/images/paris.png", "/images/venice.png", "/images/santorini.png"],
        route: [
          { city: "Paris", days: 3 },
          { city: "Zurich", days: 2 }
        ],
        highlights: ["Eiffel Tower Visit", "Seine River Cruise", "Zurich Old Town"],
        itinerary: [
          { 
            day: 1, 
            title: "Welcome to Paris – The City of Romance, Lights, and Glamour", 
            activity: "Transfer", 
            description: "Welcome to Paris, a city celebrated for its high fashion, world-famous museums, awe-inspiring landmarks, and captivating cabarets! Upon arrival, you’ll be welcomed by a tour manager who’ll transfer you to the hotel. The remainder of the day is at your leisure to unwind.\n\nOvernight at the hotel in Paris (Dinner).", 
            image: "/images/paris.png",
            stay: "Hotel Mercure Paris Centre Tour Eiffel (4 Star)",
            transfer: "Private Luxury Sedan"
          },
          { 
            day: 2, 
            title: "Paris", 
            activity: "Sightseeing", 
            description: "Today, we embark on a guided tour of Paris, where you’ll explore some of the most iconic Parisian landmarks. We’ll visit sites such as Place Vendôme, Place de l’Opéra Garnier, the Musée d’Orsay, Place de la Concorde, and the famous Champs Elysées, known as one of the world’s most fashionable avenues. Along the way, we’ll also stop at the Arc de Triomphe, Alexander Bridge, Les Invalides, and other notable locations.\n\nFollowing our city exploration, we'll ascend to the 3rd Level of the Eiffel Tower, providing us with a breathtaking panoramic view of the city. The Eiffel Tower, distinguished by its iconic tapering cast iron tip, is a symbol of the city and testament to the nation's spirit.\n\nOur adventure continues with a visit to the Palace of Versailles, an internationally acclaimed masterpiece located in Versailles, approximately 12 miles (19 km) west of Paris, France. This magnificent palace is the property of the French Republic and has been under the stewardship of the Public Establishment of the Palace, Museum, and National Estate of Versailles, overseen by the French Ministry of Culture since 1995. Drawing in a staggering 15,000,000 visitors each year, the Palace, Park, and Gardens of Versailles rank among the most sought-after tourist destinations globally.", 
            image: "/images/paris.png",
            stay: "Hotel Mercure Paris Centre Tour Eiffel (4 Star)",
            transfer: "Shared Coach"
          },
          { 
            day: 3, 
            title: "Paris to Zurich", 
            activity: "Train", 
            description: "High-speed TGV train to Zurich.", 
            image: "/images/venice.png",
            stay: "Novotel Zurich City West (4 Star)",
            transfer: "First Class Train Ticket"
          },
          { 
            day: 4, 
            title: "Zurich Highlights", 
            activity: "Tour", 
            description: "Walking tour of Zurich Old Town and Lake Zurich.", 
            image: "/images/venice.png",
            stay: "Novotel Zurich City West (4 Star)",
            transfer: "Walking Tour"
          },
          { 
            day: 5, 
            title: "Departure", 
            activity: "Transfer", 
            description: "Transfer to airport for departure.",
            stay: "N/A",
            transfer: "Private Luxury Sedan"
          }
        ]
      },
      {
        id: "european-trio-paris-zurich-milan",
        duration: "8 Days",
        days: 8,
        name: "European Trio: Paris, Zurich & Milan",
        price: "$1,550",
        image: "/images/venice.png",
        images: ["/images/venice.png", "/images/amalfi.png", "/images/paris.png"],
        route: [
          { city: "Paris", days: 3 },
          { city: "Zurich", days: 2 },
          { city: "Milan", days: 3 }
        ],
        highlights: ["Eiffel Tower", "Swiss Alps", "Milan Duomo"],
        itinerary: [
          { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris!", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Private Car" },
          { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Eiffel Tower and Louvre.", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Coach" },
          { day: 3, title: "Paris to Zurich", activity: "Train", description: "Train to Zurich.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Train" },
          { day: 4, title: "Mount Titlis", activity: "Adventure", description: "Excursion to Mount Titlis.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Coach" },
          { day: 5, title: "Zurich to Milan", activity: "Train", description: "Scenic train to Milan.", image: "/images/amalfi.png", stay: "Hilton Milan", transfer: "Train" },
          { day: 6, title: "Milan Fashion Tour", activity: "Shopping", description: "Explore the fashion capital.", image: "/images/amalfi.png", stay: "Hilton Milan", transfer: "Walking" },
          { day: 7, title: "Lake Como Day Trip", activity: "Excursion", description: "Day trip to beautiful Lake Como.", image: "/images/amalfi.png", stay: "Hilton Milan", transfer: "Coach" },
          { day: 8, title: "Departure", activity: "Transfer", description: "Transfer to airport.", stay: "N/A", transfer: "Private Car" }
        ]
      },
      {
        id: "grand-european-discovery",
        duration: "12 Days",
        days: 12,
        name: "Grand European Discovery",
        price: "$2,800",
        image: "/images/santorini.png",
        images: ["/images/santorini.png", "/images/venice.png", "/images/paris.png"],
        route: [
          { city: "Paris", days: 3 },
          { city: "Zurich", days: 2 },
          { city: "Venice", days: 2 },
          { city: "Rome", days: 5 }
        ],
        highlights: ["Eiffel Tower", "Swiss Alps", "Gondola Ride", "Colosseum"],
        itinerary: [
           { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris!", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Private Car" },
           { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Eiffel Tower and Louvre.", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Coach" },
           { day: 3, title: "Paris to Zurich", activity: "Train", description: "Train to Zurich.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Train" },
           { day: 4, title: "Mount Titlis", activity: "Adventure", description: "Excursion to Mount Titlis.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Coach" },
           { day: 5, title: "Zurich to Venice", activity: "Train", description: "Train to Venice.", image: "/images/venice.png", stay: "Hotel Danieli", transfer: "Train" },
           { day: 6, title: "Venice Canals", activity: "Boat Tour", description: "Gondola ride and St. Mark's Square.", image: "/images/venice.png", stay: "Hotel Danieli", transfer: "Boat" },
           { day: 7, title: "Venice to Rome", activity: "Train", description: "High-speed train to Rome.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "Train" },
           { day: 8, title: "Ancient Rome", activity: "History", description: "Colosseum and Roman Forum.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "Coach" },
           { day: 9, title: "Vatican City", activity: "Culture", description: "St. Peter's Basilica and Vatican Museums.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "Coach" },
           { day: 10, title: "Rome Leisure", activity: "Leisure", description: "Free day for shopping.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "None" },
           { day: 11, title: "Farewell Dinner", activity: "Dining", description: "Authentic Italian dinner.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "Coach" },
           { day: 12, title: "Departure", activity: "Transfer", description: "Transfer to airport.", stay: "N/A", transfer: "Private Car" }
        ]
      },
      // Duplicates for UI demonstration (Total 8 items)
      {
        id: "paris-zurich-express-v2",
        duration: "5 Days",
        days: 5,
        name: "Paris & Zurich Express",
        price: "$1,150",
        image: "/images/paris.png",
        images: ["/images/paris.png", "/images/venice.png", "/images/santorini.png"],
        route: [{ city: "Paris", days: 3 }, { city: "Zurich", days: 2 }],
        highlights: ["Eiffel Tower Visit", "Seine River Cruise", "Zurich Old Town"],
        itinerary: [
          { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris! Private transfer to hotel.", image: "/images/paris.png", stay: "Hotel Mercure Paris Centre Tour Eiffel (4 Star)", transfer: "Private Luxury Sedan" },
          { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Visit Eiffel Tower, Louvre, and Notre Dame.", image: "/images/paris.png", stay: "Hotel Mercure Paris Centre Tour Eiffel (4 Star)", transfer: "Shared Coach" },
          { day: 3, title: "Paris to Zurich", activity: "Train", description: "High-speed TGV train to Zurich.", image: "/images/venice.png", stay: "Novotel Zurich City West (4 Star)", transfer: "First Class Train Ticket" },
          { day: 4, title: "Zurich Highlights", activity: "Tour", description: "Walking tour of Zurich Old Town and Lake Zurich.", image: "/images/venice.png", stay: "Novotel Zurich City West (4 Star)", transfer: "Walking Tour" },
          { day: 5, title: "Departure", activity: "Transfer", description: "Transfer to airport for departure.", stay: "N/A", transfer: "Private Luxury Sedan" }
        ]
      },
      {
        id: "european-trio-paris-zurich-milan-v2",
        duration: "8 Days",
        days: 8,
        name: "European Trio: Paris, Zurich & Milan",
        price: "$1,550",
        image: "/images/venice.png",
        images: ["/images/venice.png", "/images/amalfi.png", "/images/paris.png"],
        route: [{ city: "Paris", days: 3 }, { city: "Zurich", days: 2 }, { city: "Milan", days: 3 }],
        highlights: ["Eiffel Tower", "Swiss Alps", "Milan Duomo"],
        itinerary: [
          { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris!", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Private Car" },
          { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Eiffel Tower and Louvre.", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Coach" },
          { day: 3, title: "Paris to Zurich", activity: "Train", description: "Train to Zurich.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Train" },
          { day: 4, title: "Mount Titlis", activity: "Adventure", description: "Excursion to Mount Titlis.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Coach" },
          { day: 5, title: "Zurich to Milan", activity: "Train", description: "Scenic train to Milan.", image: "/images/amalfi.png", stay: "Hilton Milan", transfer: "Train" },
          { day: 6, title: "Milan Fashion Tour", activity: "Shopping", description: "Explore the fashion capital.", image: "/images/amalfi.png", stay: "Hilton Milan", transfer: "Walking" },
          { day: 7, title: "Lake Como Day Trip", activity: "Excursion", description: "Day trip to beautiful Lake Como.", image: "/images/amalfi.png", stay: "Hilton Milan", transfer: "Coach" },
          { day: 8, title: "Departure", activity: "Transfer", description: "Transfer to airport.", stay: "N/A", transfer: "Private Car" }
        ]
      },
      {
        id: "grand-european-discovery-v2",
        duration: "12 Days",
        days: 12,
        name: "Grand European Discovery",
        price: "$2,800",
        image: "/images/santorini.png",
        images: ["/images/santorini.png", "/images/venice.png", "/images/paris.png"],
        route: [{ city: "Paris", days: 3 }, { city: "Zurich", days: 2 }, { city: "Venice", days: 2 }, { city: "Rome", days: 5 }],
        highlights: ["Eiffel Tower", "Swiss Alps", "Gondola Ride", "Colosseum"],
        itinerary: [
           { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris!", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Private Car" },
           { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Eiffel Tower and Louvre.", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Coach" },
           { day: 3, title: "Paris to Zurich", activity: "Train", description: "Train to Zurich.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Train" },
           { day: 4, title: "Mount Titlis", activity: "Adventure", description: "Excursion to Mount Titlis.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Coach" },
           { day: 5, title: "Zurich to Venice", activity: "Train", description: "Train to Venice.", image: "/images/venice.png", stay: "Hotel Danieli", transfer: "Train" },
           { day: 6, title: "Venice Canals", activity: "Boat Tour", description: "Gondola ride and St. Mark's Square.", image: "/images/venice.png", stay: "Hotel Danieli", transfer: "Boat" },
           { day: 7, title: "Venice to Rome", activity: "Train", description: "High-speed train to Rome.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "Train" },
           { day: 8, title: "Ancient Rome", activity: "History", description: "Colosseum and Roman Forum.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "Coach" },
           { day: 9, title: "Vatican City", activity: "Culture", description: "St. Peter's Basilica and Vatican Museums.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "Coach" },
           { day: 10, title: "Rome Leisure", activity: "Leisure", description: "Free day for shopping.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "None" },
           { day: 11, title: "Farewell Dinner", activity: "Dining", description: "Authentic Italian dinner.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "Coach" },
           { day: 12, title: "Departure", activity: "Transfer", description: "Transfer to airport.", stay: "N/A", transfer: "Private Car" }
        ]
      },
      {
        id: "paris-zurich-express-v3",
        duration: "5 Days",
        days: 5,
        name: "Paris & Zurich Express",
        price: "$1,150",
        image: "/images/paris.png",
        images: ["/images/paris.png", "/images/venice.png", "/images/santorini.png"],
        route: [{ city: "Paris", days: 3 }, { city: "Zurich", days: 2 }],
        highlights: ["Eiffel Tower Visit", "Seine River Cruise", "Zurich Old Town"],
        itinerary: [
          { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris! Private transfer to hotel.", image: "/images/paris.png", stay: "Hotel Mercure Paris Centre Tour Eiffel (4 Star)", transfer: "Private Luxury Sedan" },
          { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Eiffel Tower and Louvre.", image: "/images/paris.png", stay: "Hotel Mercure Paris Centre Tour Eiffel (4 Star)", transfer: "Shared Coach" },
          { day: 3, title: "Paris to Zurich", activity: "Train", description: "High-speed TGV train to Zurich.", image: "/images/venice.png", stay: "Novotel Zurich City West (4 Star)", transfer: "First Class Train Ticket" },
          { day: 4, title: "Zurich Highlights", activity: "Tour", description: "Walking tour of Zurich Old Town and Lake Zurich.", image: "/images/venice.png", stay: "Novotel Zurich City West (4 Star)", transfer: "Walking Tour" },
          { day: 5, title: "Departure", activity: "Transfer", description: "Transfer to airport for departure.", stay: "N/A", transfer: "Private Luxury Sedan" }
        ]
      },
      {
        id: "european-trio-paris-zurich-milan-v3",
        duration: "8 Days",
        days: 8,
        name: "European Trio: Paris, Zurich & Milan",
        price: "$1,550",
        image: "/images/venice.png",
        images: ["/images/venice.png", "/images/amalfi.png", "/images/paris.png"],
        route: [{ city: "Paris", days: 3 }, { city: "Zurich", days: 2 }, { city: "Milan", days: 3 }],
        highlights: ["Eiffel Tower", "Swiss Alps", "Milan Duomo"],
        itinerary: [
          { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris!", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Private Car" },
          { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Eiffel Tower and Louvre.", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Coach" },
          { day: 3, title: "Paris to Zurich", activity: "Train", description: "Train to Zurich.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Train" },
          { day: 4, title: "Mount Titlis", activity: "Adventure", description: "Excursion to Mount Titlis.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Coach" },
          { day: 5, title: "Zurich to Milan", activity: "Train", description: "Scenic train to Milan.", image: "/images/amalfi.png", stay: "Hilton Milan", transfer: "Train" },
          { day: 6, title: "Milan Fashion Tour", activity: "Shopping", description: "Explore the fashion capital.", image: "/images/amalfi.png", stay: "Hilton Milan", transfer: "Walking" },
          { day: 7, title: "Lake Como Day Trip", activity: "Excursion", description: "Day trip to beautiful Lake Como.", image: "/images/amalfi.png", stay: "Hilton Milan", transfer: "Coach" },
          { day: 8, title: "Departure", activity: "Transfer", description: "Transfer to airport.", stay: "N/A", transfer: "Private Car" }
        ]
      }
    ]
  },
  {
    id: "europe-tour-v2",
    title: "Grand Europe Tour",
    location: "Switzerland • France • Italy",
    price: "$1,150 / person",
    image: "/images/paris.png",
    rating: 4.7,
    category: "Multi-Country",
    tag: "Best Seller",
    duration: "Multiple Options",
    description: "Embark on a journey through the heart of Europe. Choose from our curated packages ranging from quick getaways to extensive explorations.",
    packages: [
      {
        id: "paris-zurich-express",
        duration: "5 Days",
        days: 5,
        name: "Paris & Zurich Express",
        price: "$1,150",
        image: "/images/paris.png",
        images: ["/images/paris.png", "/images/venice.png", "/images/santorini.png"],
        route: [
          { city: "Paris", days: 3 },
          { city: "Zurich", days: 2 }
        ],
        highlights: ["Eiffel Tower Visit", "Seine River Cruise", "Zurich Old Town"],
        itinerary: [
          { 
            day: 1, 
            title: "Welcome to Paris – The City of Romance, Lights, and Glamour", 
            activity: "Transfer", 
            description: "Welcome to Paris, a city celebrated for its high fashion, world-famous museums, awe-inspiring landmarks, and captivating cabarets! Upon arrival, you’ll be welcomed by a tour manager who’ll transfer you to the hotel. The remainder of the day is at your leisure to unwind.\n\nOvernight at the hotel in Paris (Dinner).", 
            image: "/images/paris.png",
            stay: "Hotel Mercure Paris Centre Tour Eiffel (4 Star)",
            transfer: "Private Luxury Sedan"
          },
          { 
            day: 2, 
            title: "Paris", 
            activity: "Sightseeing", 
            description: "Today, we embark on a guided tour of Paris, where you’ll explore some of the most iconic Parisian landmarks. We’ll visit sites such as Place Vendôme, Place de l’Opéra Garnier, the Musée d’Orsay, Place de la Concorde, and the famous Champs Elysées, known as one of the world’s most fashionable avenues. Along the way, we’ll also stop at the Arc de Triomphe, Alexander Bridge, Les Invalides, and other notable locations.\n\nFollowing our city exploration, we'll ascend to the 3rd Level of the Eiffel Tower, providing us with a breathtaking panoramic view of the city. The Eiffel Tower, distinguished by its iconic tapering cast iron tip, is a symbol of the city and testament to the nation's spirit.\n\nOur adventure continues with a visit to the Palace of Versailles, an internationally acclaimed masterpiece located in Versailles, approximately 12 miles (19 km) west of Paris, France. This magnificent palace is the property of the French Republic and has been under the stewardship of the Public Establishment of the Palace, Museum, and National Estate of Versailles, overseen by the French Ministry of Culture since 1995. Drawing in a staggering 15,000,000 visitors each year, the Palace, Park, and Gardens of Versailles rank among the most sought-after tourist destinations globally.", 
            image: "/images/paris.png",
            stay: "Hotel Mercure Paris Centre Tour Eiffel (4 Star)",
            transfer: "Shared Coach"
          },
          { 
            day: 3, 
            title: "Paris to Zurich", 
            activity: "Train", 
            description: "High-speed TGV train to Zurich.", 
            image: "/images/venice.png",
            stay: "Novotel Zurich City West (4 Star)",
            transfer: "First Class Train Ticket"
          },
          { 
            day: 4, 
            title: "Zurich Highlights", 
            activity: "Tour", 
            description: "Walking tour of Zurich Old Town and Lake Zurich.", 
            image: "/images/venice.png",
            stay: "Novotel Zurich City West (4 Star)",
            transfer: "Walking Tour"
          },
          { 
            day: 5, 
            title: "Departure", 
            activity: "Transfer", 
            description: "Transfer to airport for departure.",
            stay: "N/A",
            transfer: "Private Luxury Sedan"
          }
        ]
      },
      {
        id: "european-trio-paris-zurich-milan",
        duration: "8 Days",
        days: 8,
        name: "European Trio: Paris, Zurich & Milan",
        price: "$1,550",
        image: "/images/venice.png",
        images: ["/images/venice.png", "/images/amalfi.png", "/images/paris.png"],
        route: [
          { city: "Paris", days: 3 },
          { city: "Zurich", days: 2 },
          { city: "Milan", days: 3 }
        ],
        highlights: ["Eiffel Tower", "Swiss Alps", "Milan Duomo"],
        itinerary: [
          { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris!", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Private Car" },
          { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Eiffel Tower and Louvre.", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Coach" },
          { day: 3, title: "Paris to Zurich", activity: "Train", description: "Train to Zurich.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Train" },
          { day: 4, title: "Mount Titlis", activity: "Adventure", description: "Excursion to Mount Titlis.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Coach" },
          { day: 5, title: "Zurich to Milan", activity: "Train", description: "Scenic train to Milan.", image: "/images/amalfi.png", stay: "Hilton Milan", transfer: "Train" },
          { day: 6, title: "Milan Fashion Tour", activity: "Shopping", description: "Explore the fashion capital.", image: "/images/amalfi.png", stay: "Hilton Milan", transfer: "Walking" },
          { day: 7, title: "Lake Como Day Trip", activity: "Excursion", description: "Day trip to beautiful Lake Como.", image: "/images/amalfi.png", stay: "Hilton Milan", transfer: "Coach" },
          { day: 8, title: "Departure", activity: "Transfer", description: "Transfer to airport.", stay: "N/A", transfer: "Private Car" }
        ]
      },
      {
        id: "grand-european-discovery",
        duration: "12 Days",
        days: 12,
        name: "Grand European Discovery",
        price: "$2,800",
        image: "/images/santorini.png",
        images: ["/images/santorini.png", "/images/venice.png", "/images/paris.png"],
        route: [
          { city: "Paris", days: 3 },
          { city: "Zurich", days: 2 },
          { city: "Venice", days: 2 },
          { city: "Rome", days: 5 }
        ],
        highlights: ["Eiffel Tower", "Swiss Alps", "Gondola Ride", "Colosseum"],
        itinerary: [
           { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris!", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Private Car" },
           { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Eiffel Tower and Louvre.", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Coach" },
           { day: 3, title: "Paris to Zurich", activity: "Train", description: "Train to Zurich.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Train" },
           { day: 4, title: "Mount Titlis", activity: "Adventure", description: "Excursion to Mount Titlis.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Coach" },
           { day: 5, title: "Zurich to Venice", activity: "Train", description: "Train to Venice.", image: "/images/venice.png", stay: "Hotel Danieli", transfer: "Train" },
           { day: 6, title: "Venice Canals", activity: "Boat Tour", description: "Gondola ride and St. Mark's Square.", image: "/images/venice.png", stay: "Hotel Danieli", transfer: "Boat" },
           { day: 7, title: "Venice to Rome", activity: "Train", description: "High-speed train to Rome.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "Train" },
           { day: 8, title: "Ancient Rome", activity: "History", description: "Colosseum and Roman Forum.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "Coach" },
           { day: 9, title: "Vatican City", activity: "Culture", description: "St. Peter's Basilica and Vatican Museums.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "Coach" },
           { day: 10, title: "Rome Leisure", activity: "Leisure", description: "Free day for shopping.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "None" },
           { day: 11, title: "Farewell Dinner", activity: "Dining", description: "Authentic Italian dinner.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "Coach" },
           { day: 12, title: "Departure", activity: "Transfer", description: "Transfer to airport.", stay: "N/A", transfer: "Private Car" }
        ]
      },
      // Duplicates for UI demonstration (Total 8 items)
      {
        id: "paris-zurich-express-v2",
        duration: "5 Days",
        days: 5,
        name: "Paris & Zurich Express",
        price: "$1,150",
        image: "/images/paris.png",
        images: ["/images/paris.png", "/images/venice.png", "/images/santorini.png"],
        route: [{ city: "Paris", days: 3 }, { city: "Zurich", days: 2 }],
        highlights: ["Eiffel Tower Visit", "Seine River Cruise", "Zurich Old Town"],
        itinerary: [
          { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris! Private transfer to hotel.", image: "/images/paris.png", stay: "Hotel Mercure Paris Centre Tour Eiffel (4 Star)", transfer: "Private Luxury Sedan" },
          { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Visit Eiffel Tower, Louvre, and Notre Dame.", image: "/images/paris.png", stay: "Hotel Mercure Paris Centre Tour Eiffel (4 Star)", transfer: "Shared Coach" },
          { day: 3, title: "Paris to Zurich", activity: "Train", description: "High-speed TGV train to Zurich.", image: "/images/venice.png", stay: "Novotel Zurich City West (4 Star)", transfer: "First Class Train Ticket" },
          { day: 4, title: "Zurich Highlights", activity: "Tour", description: "Walking tour of Zurich Old Town and Lake Zurich.", image: "/images/venice.png", stay: "Novotel Zurich City West (4 Star)", transfer: "Walking Tour" },
          { day: 5, title: "Departure", activity: "Transfer", description: "Transfer to airport for departure.", stay: "N/A", transfer: "Private Luxury Sedan" }
        ]
      },
      {
        id: "european-trio-paris-zurich-milan-v2",
        duration: "8 Days",
        days: 8,
        name: "European Trio: Paris, Zurich & Milan",
        price: "$1,550",
        image: "/images/venice.png",
        images: ["/images/venice.png", "/images/amalfi.png", "/images/paris.png"],
        route: [{ city: "Paris", days: 3 }, { city: "Zurich", days: 2 }, { city: "Milan", days: 3 }],
        highlights: ["Eiffel Tower", "Swiss Alps", "Milan Duomo"],
        itinerary: [
          { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris!", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Private Car" },
          { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Eiffel Tower and Louvre.", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Coach" },
          { day: 3, title: "Paris to Zurich", activity: "Train", description: "Train to Zurich.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Train" },
          { day: 4, title: "Mount Titlis", activity: "Adventure", description: "Excursion to Mount Titlis.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Coach" },
          { day: 5, title: "Zurich to Milan", activity: "Train", description: "Scenic train to Milan.", image: "/images/amalfi.png", stay: "Hilton Milan", transfer: "Train" },
          { day: 6, title: "Milan Fashion Tour", activity: "Shopping", description: "Explore the fashion capital.", image: "/images/amalfi.png", stay: "Hilton Milan", transfer: "Walking" },
          { day: 7, title: "Lake Como Day Trip", activity: "Excursion", description: "Day trip to beautiful Lake Como.", image: "/images/amalfi.png", stay: "Hilton Milan", transfer: "Coach" },
          { day: 8, title: "Departure", activity: "Transfer", description: "Transfer to airport.", stay: "N/A", transfer: "Private Car" }
        ]
      },
      {
        id: "grand-european-discovery-v2",
        duration: "12 Days",
        days: 12,
        name: "Grand European Discovery",
        price: "$2,800",
        image: "/images/santorini.png",
        images: ["/images/santorini.png", "/images/venice.png", "/images/paris.png"],
        route: [{ city: "Paris", days: 3 }, { city: "Zurich", days: 2 }, { city: "Venice", days: 2 }, { city: "Rome", days: 5 }],
        highlights: ["Eiffel Tower", "Swiss Alps", "Gondola Ride", "Colosseum"],
        itinerary: [
           { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris!", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Private Car" },
           { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Eiffel Tower and Louvre.", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Coach" },
           { day: 3, title: "Paris to Zurich", activity: "Train", description: "Train to Zurich.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Train" },
           { day: 4, title: "Mount Titlis", activity: "Adventure", description: "Excursion to Mount Titlis.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Coach" },
           { day: 5, title: "Zurich to Venice", activity: "Train", description: "Train to Venice.", image: "/images/venice.png", stay: "Hotel Danieli", transfer: "Train" },
           { day: 6, title: "Venice Canals", activity: "Boat Tour", description: "Gondola ride and St. Mark's Square.", image: "/images/venice.png", stay: "Hotel Danieli", transfer: "Boat" },
           { day: 7, title: "Venice to Rome", activity: "Train", description: "High-speed train to Rome.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "Train" },
           { day: 8, title: "Ancient Rome", activity: "History", description: "Colosseum and Roman Forum.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "Coach" },
           { day: 9, title: "Vatican City", activity: "Culture", description: "St. Peter's Basilica and Vatican Museums.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "Coach" },
           { day: 10, title: "Rome Leisure", activity: "Leisure", description: "Free day for shopping.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "None" },
           { day: 11, title: "Farewell Dinner", activity: "Dining", description: "Authentic Italian dinner.", image: "/images/santorini.png", stay: "Hotel Artemide", transfer: "Coach" },
           { day: 12, title: "Departure", activity: "Transfer", description: "Transfer to airport.", stay: "N/A", transfer: "Private Car" }
        ]
      },
      {
        id: "paris-zurich-express-v3",
        duration: "5 Days",
        days: 5,
        name: "Paris & Zurich Express",
        price: "$1,150",
        image: "/images/paris.png",
        images: ["/images/paris.png", "/images/venice.png", "/images/santorini.png"],
        route: [{ city: "Paris", days: 3 }, { city: "Zurich", days: 2 }],
        highlights: ["Eiffel Tower Visit", "Seine River Cruise", "Zurich Old Town"],
        itinerary: [
          { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris! Private transfer to hotel.", image: "/images/paris.png", stay: "Hotel Mercure Paris Centre Tour Eiffel (4 Star)", transfer: "Private Luxury Sedan" },
          { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Eiffel Tower and Louvre.", image: "/images/paris.png", stay: "Hotel Mercure Paris Centre Tour Eiffel (4 Star)", transfer: "Shared Coach" },
          { day: 3, title: "Paris to Zurich", activity: "Train", description: "High-speed TGV train to Zurich.", image: "/images/venice.png", stay: "Novotel Zurich City West (4 Star)", transfer: "First Class Train Ticket" },
          { day: 4, title: "Zurich Highlights", activity: "Tour", description: "Walking tour of Zurich Old Town and Lake Zurich.", image: "/images/venice.png", stay: "Novotel Zurich City West (4 Star)", transfer: "Walking Tour" },
          { day: 5, title: "Departure", activity: "Transfer", description: "Transfer to airport for departure.", stay: "N/A", transfer: "Private Luxury Sedan" }
        ]
      },
      {
        id: "european-trio-paris-zurich-milan-v3",
        duration: "8 Days",
        days: 8,
        name: "European Trio: Paris, Zurich & Milan",
        price: "$1,550",
        image: "/images/venice.png",
        images: ["/images/venice.png", "/images/amalfi.png", "/images/paris.png"],
        route: [{ city: "Paris", days: 3 }, { city: "Zurich", days: 2 }, { city: "Milan", days: 3 }],
        highlights: ["Eiffel Tower", "Swiss Alps", "Milan Duomo"],
        itinerary: [
          { day: 1, title: "Arrival in Paris", activity: "Transfer", description: "Welcome to Paris!", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Private Car" },
          { day: 2, title: "Paris City Tour", activity: "Sightseeing", description: "Eiffel Tower and Louvre.", image: "/images/paris.png", stay: "Hotel Mercure", transfer: "Coach" },
          { day: 3, title: "Paris to Zurich", activity: "Train", description: "Train to Zurich.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Train" },
          { day: 4, title: "Mount Titlis", activity: "Adventure", description: "Excursion to Mount Titlis.", image: "/images/venice.png", stay: "Novotel Zurich", transfer: "Coach" },
          { day: 5, title: "Zurich to Milan", activity: "Train", description: "Scenic train to Milan.", image: "/images/amalfi.png", stay: "Hilton Milan", transfer: "Train" },
          { day: 6, title: "Milan Fashion Tour", activity: "Shopping", description: "Explore the fashion capital.", image: "/images/amalfi.png", stay: "Hilton Milan", transfer: "Walking" },
          { day: 7, title: "Lake Como Day Trip", activity: "Excursion", description: "Day trip to beautiful Lake Como.", image: "/images/amalfi.png", stay: "Hilton Milan", transfer: "Coach" },
          { day: 8, title: "Departure", activity: "Transfer", description: "Transfer to airport.", stay: "N/A", transfer: "Private Car" }
        ]
      }
    ]
  },
  {
    id: "japan-cherry-blossom",
    title: "Japan Cherry Blossom",
    location: "Japan",
    price: "$3,200 / person",
    image: "/images/kyoto.png",
    rating: 4.9,
    category: "Cultural",
    tag: "Seasonal",
    duration: "10 Days",
    description: "Experience the magic of Japan during the cherry blossom season. Visit ancient temples, bustling cities, and serene gardens.",
    itinerary: []
  },
  {
    id: "greek-island-hopping",
    title: "Greek Island Hopping",
    location: "Greece",
    price: "$2,800 / person",
    image: "/images/santorini.png",
    rating: 4.8,
    category: "Island",
    tag: "Popular",
    duration: "9 Days",
    description: "Hop between the beautiful Greek islands of Santorini, Mykonos, and Crete. Enjoy sun, sea, and history.",
    itinerary: []
  },
  {
    id: "amalfi-coast-retreat",
    title: "Amalfi Coast Retreat",
    location: "Italy",
    price: "$3,500 / person",
    image: "/images/amalfi.png",
    rating: 5.0,
    category: "Relaxation",
    tag: "Luxury",
    duration: "7 Days",
    description: "Relax on the stunning Amalfi Coast. Stay in luxury villas, enjoy private boat tours, and taste the best Italian cuisine.",
    itinerary: []
  },
];
