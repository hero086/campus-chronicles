/* =========================
   DATA
   ========================= */

const FIXED_DATE = "9 August 2025";
const REPORTERS = ["Priya Nair", "Rohan Verma", "Anika Roy", "James Miller", "Sophia Patel", "Liam O'Connor", "Olivia Bennett", "Noah Wilson", "Aisha Rahman", "Daniel Brooks", "Hannah Ellis", "Ravi Desai", "Maya Thompson", "Ethan Rivera", "Sofia Kim", "Oliver Grant", "Priya Sharma", "Lucas Martin", "Zara Ahmed", "Michael Chen"];

function byline(idx) {
    return `By ${REPORTERS[idx % REPORTERS.length]} — ${FIXED_DATE}`;
}

const AD_POOL = [
    { title: "Campus Burger — Student Special", copy: "Click to view the student menu & discounts.", link: "LINK_HERE", restaurant: true, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800" },
    { title: "Textbook Swap", copy: "Used textbooks, fair prices. Swap table outside Student Union.", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800" },
    { title: "2AM Espresso Deals", copy: "The Midnight Mug offers double-shot discounts for students.", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800" },
    { title: "Resume Tune-Up — Free 15 min", copy: "Peer mentors at Career Hub. Walk-ins welcome.", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" },
    { title: "TutorMatch — Micro tutoring", copy: "Affordable micro-sessions in maths & coding. First session free.", img: "https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?auto=format&fit=crop&q=80&w=800" },
    { title: "Poster Printing — Next-day", copy: "Event posters printed affordably. Student societies discount.", img: "https://plus.unsplash.com/premium_photo-1682145489846-081721a9b272?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyJTIwcHJpbnRpbmd8ZW58MHx8MHx8fDA%3D" },
    { title: "Campus Combo Meal Deal", copy: "Main + drink + snack at a student-friendly price (weekdays).", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=800" },
    { title: "DIY Bike Light Workshop", copy: "Make your own lights and learn basic maintenance.", img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800" },
    { title: "Late Night Study Snacks", copy: "Order hot samosas delivered to your dorm — 10% student discount.", img: "https://plus.unsplash.com/premium_photo-1695297516676-04a259917c03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftb3NhfGVufDB8fDB8fHww" },
    { title: "Poster Printing Express", copy: "Get event posters printed and laminated within 24 hours.", img: "https://images.unsplash.com/photo-1577617996819-43c0bc61ce57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvc3RlciUyMHByaW50aW5nfGVufDB8fDB8fHww" }
];

const FOOD_POSTS = [
    { title: "Secret: 'Midnight Masala'—Library Café", author: "Anika Roy", body: "A whispered-off-menu chai-latte with an extra spice hit for late-night revision." },
    { title: "Three Canteen Hacks That Work", author: "Jonah Park", body: "Add grilled paneer to a veg wrap and request extra chutney during quiet hours." },
    { title: "Review: Midnight Curry Cart", author: "Sophia Lee", body: "Generous portions and bold spice — reliable comfort food after labs." },
    { title: "Secret Orders to Impress Friends", author: "Marcus Bell", body: "Ask for 'double pesto' on paninis and keep it between you and the cashier." },
    { title: "The 'Stealth Sandwich' for Exam Energy", author: "Leila Gomez", body: "Boiled egg, hummus and pickles keep you alert without carbs coma." },
    { title: "How to Get Chai Fast", author: "Omar Rizvi", body: "Order 'to-go, low-sugar' and pick up right before the bell." },
    { title: "Five Minutes: Quick Breakfasts", author: "Priya Menon", body: "Yoghurt + fruit, bagel + peanut butter, or overnight oats beat instant noodles." },
    { title: "Interview: The Sauce Everyone Asks About", author: "Daniel Brooks", body: "Owner reveals a simple roasted tomato + yoghurt base with smoky paprika." },
    { title: "Cool Spicy Meals Without Losing Flavour", author: "Maya Thompson", body: "Lemon zest + yoghurt cools spice without diluting it." },
    { title: "Greenhouse Café's Herb Toast", author: "Ethan Rivera", body: "Fresh herbs from the campus greenhouse turn toast into a fragrant treat." }
];

function article(title, reporterIndex, lead, body, closing, img) {
    return { title, byline: byline(reporterIndex), lead, body, closing, img };
}

const CATEGORIES = [
    {
        slug: "breaking",
        name: "Breaking Campus Buzz",
        articles: [
            article("Student Union Declares Pop-Up Study Zones Across Campus", 0, "The Student Union announced ten new pop-up study zones in previously underused campus corners to increase quiet study space.", "Union representatives explained they audited underused spaces and fitted them with flexible seating, power outlets and small 'focus kits' including lamps and sound-dampening panels. The decision followed months of student feedback and a pilot last term that saw high occupancy. Bookings are open via the campus app and the union plans to rotate themed quiet hours so different faculties can make use.", "Third-year Harsh Patel: 'Saved my deadline and my sanity.'", "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1024"),
            article("Cafeteria Launches Local Dish Week After Petition", 1, "After a student petition, the main cafeteria will trial 'Local Dish Week' celebrating regional recipes suggested by students and staff.", "Kitchen staff collaborated with cultural societies and nutritionists to adapt recipes for mass service while maintaining allergy labelling and portion control. Dishes will be sampled at lunchtime and evening service, with feedback forms available. If uptake is strong, the pilot may become a recurrent event that spotlights student-submitted recipes.", "A student called the biryani 'a tiny taste of home' and returned for seconds.", "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=1024"),
            article("Library Adds 'Focus Booths' With Soundproofing Tests", 2, "The library installed small soundproof 'focus booths' to help students practice presentations and study in private.", "Designed to be bookable in thirty-minute slots, the booths include improved acoustics and a small whiteboard. The library will monitor usage and satisfaction during the month-long trial, and staff emphasised fair-access booking rules to avoid monopolisation. Early testers praised the privacy for recorded presentations and mock interviews.", "'Blissful silence' was the recurring feedback from first users.", "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1024"),
            article("Gardening Society Distributes 'Pocket Herb' Planters", 3, "An initiative from the Gardening Society distributed compact herb planters to dorm windows to encourage small-scale greening.", "Volunteers ran short workshops on watering and trimming, and provided QR-labelled care guides. The scheme aims to boost wellbeing and offer fresh herbs for student cooking projects. Organisers hope to pair the planters with a seed-exchange event and a campus recipe booklet.", "'We can't promise fewer exams, but basil is morale-boosting,' said one volunteer.", "https://plus.unsplash.com/premium_photo-1678652878688-e4638fbff9bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FyZGVuaW5nJTIwc29jaWV0eXxlbnwwfHwwfHx8MA%3D%3D"),
            article("Late-Night Shuttle Gains Extra Runs During Exams", 4, "Transport services extended late-night shuttle runs between halls and the library to support students racing deadlines.", "Extra capacity was added on high-demand routes during exam weeks after feedback from residential students. Drivers noted steady evening patronage and a calmer atmosphere on the later runs. Facilities will analyze ridership to decide whether to keep the service longer-term.", "A grateful commuter said the extra run saved a soggy walk home after midnight.", "https://images.unsplash.com/photo-1606326608690-4e0281b1e588?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGV4YW18ZW58MHx8MHx8fDA%3D"),
            article("Campus Radio Launches 'Speed-Study' Revision Slots", 5, "The student radio launched 'speed-study' segments offering condensed revision tips and subject-focused playlists for exam preparation.", "Short-form segments cover one topic per episode and pair quick study hacks with calming music. Producers are crowd-sourcing topics from listeners and inviting tutors for bite-sized micro-lectures. The format aims to support students on short breaks between study sessions.", "One listener quipped it made statistics 'mildly less terrifying.'", "https://images.unsplash.com/photo-1588523900549-d60e602ced7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhZGlvfGVufDB8fDB8fHww"),
            article("Freshers' Fair Debuts 'Try-a-Club' Micro-Sessions", 6, "This year's freshers' fair offered ten-minute club tasters so students could sample activities rapidly without long queues.", "The micro-session format increased variety and reduced wait times; societies reported higher sign-ups and better conversion to regular membership. Attendees could try everything from fencing to improv in quick bursts, making the fair feel lively and approachable.", "A fresher managed three tasters and still made it to lunch on time.", "https://images.unsplash.com/photo-1570872626485-d8ffea69f463?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2x1YnxlbnwwfHwwfHx8MA%3D%3D"),
            article("Student Pantry Extends Hours for Late-Shift Residents", 7, "To help students with late shifts, the student pantry extended opening hours and increased volunteer shifts.", "Organisers reported stronger donations and volunteer uptake; extended hours have noticeably improved access for those balancing work and study. The pantry also introduced a small prepacked shelf for quick pick-up kits targeted at late-night dwellers.", "Volunteers called midnight sandwich-making both rewarding and unexpectedly fun.", "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&q=80&w=1024"),
            article("Bike Repair Pop-Up Sees Early Morning Lines", 8, "A volunteer-run bike repair pop-up offered free tube fixes and basic maintenance to commuting students, prompting early queues.", "Mechanics fixed punctures, adjusted brakes and gave safety checks while signing up students for future workshops. The event highlighted sustained demand for affordable commuter maintenance and organisers plan monthly pop-ups during term-time.", "Organisers hope monthly events keep cyclists rolling through winter.", "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&q=80&w=1024"),
            article("Sustainability Hub Pilots No-Packaging Lunches", 9, "The Sustainability Hub piloted reusable-container lunches to reduce single-use packaging on campus.", "Students borrowed containers in a deposit scheme and returned them in collection points; the pilot significantly reduced disposable waste. Hygiene and return logistics were tracked closely and student volunteers helped manage the system during peak hours.", "'Small changes add up' was the volunteer consensus after the trial.", "https://images.unsplash.com/photo-1542601904-8241f061d4d5?auto=format&fit=crop&q=80&w=1024")
        ]
    },
    {
        slug: "events",
        name: "Events",
        articles: [
            article("Open Mic Night Returns to the Student Union", 10, "Open mic night is back with a welcoming stage for music, poetry and comedy next Friday at the Union.", "Organisers emphasise inclusivity and a supportive audience; sign-ups will be open online two days before the event. Light refreshments will be available and performers are encouraged to bring short, sharp sets to allow more stage time for newcomers.", "'The best place to try new material,' said a regular performer.", "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=1024"),
            article("Repair Café To Run During Sustainability Week", 11, "A repair café will offer free help to fix small appliances and electronics during Sustainability Week.", "Volunteers will assist with simple repairs and run short tutorials on maintenance and safety, aiming to reduce landfill and empower students with practical skills. The event will include a small swap shelf for spare parts.", "Organisers expect a steady stream of grateful attendees.", "https://plus.unsplash.com/premium_photo-1664970900025-1e3099ca757a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D"),
            article("Campus Cultural Festival Announces Headliners", 12, "The cultural festival confirmed headliners and a varied programme of food stalls, performances and workshops spanning the weekend.", "Student societies will curate stages, and organisers promise accessible ticketing and a broad representation of campus communities. Pop-up workshops aim to get attendees involved rather than just watching.", "Subsidised student tickets aim to boost wide participation.", "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1024"),
            article("Career Fair Introduces Micro-Internship Booths", 13, "This year's career fair will feature micro-internship booths for quick interviews and short project matching.", "Employers will offer short, practical tasks and rapid interviews suitable for students seeking hands-on experience. Career advisers will host CV clinics and quick-pitch workshops adjacent to the hall.", "Students are advised to bring concise tailored CVs for quick booth chats.", "https://images.unsplash.com/photo-1573496130407-57329f01f769?auto=format&fit=crop&q=80&w=1024"),
            article("Open Lecture Series Explores Local History", 14, "A series of open lectures will explore the local area's history with staff and alumni speakers followed by guided walks.", "Sessions combine archive materials and oral histories to create accessible talks with audience participation. The final guided walk will map several local sites discussed in the lectures.", "Attendees will leave with new context for familiar neighbourhood streets.", "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D"),
            article("Wellbeing Fair Offers Mini-Treatments and Talks", 15, "A wellbeing fair offers short therapy taster-sessions, resource stalls and practical talks on coping strategies.", "Visitors can book short, low-pressure sessions and pick up signposting to longer-term support. Workshops include breathing techniques and desk-based movement to counter long study hours.", "Organisers emphasise the fair is a gentle introduction to wellbeing resources.", "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1024"),
            article("Hackathon Announces Social Good Challenges", 16, "The annual hackathon focuses on social-good briefs with NGO mentors supporting ideation and deployment.", "Teams will work across weekend sprints with mentors offering guidance on impact, ethics and user testing. Final projects will be judged for practical impact and feasibility, with seed support for promising initiatives.", "Organisers hope projects continue after the event with community partners.", "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80&w=1024"),
            article("Outdoor Film Night to Feature Student Shorts", 17, "An outdoor film night will screen student short films with picnic seating and a Q&A with filmmakers.", "Curators selected a diverse programme across genres and departments, and filmmakers will discuss process after the screening. Attendees are encouraged to bring reusable picnic ware.", "The cinema vibe aims to celebrate student creativity in a relaxed setting.", "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1024"),
            article("Volunteer Awards Call For Nominations", 18, "Nominations are open for volunteer awards recognising students and staff who supported community projects this year.", "Shortlisted nominees will present reflections at the awards night where the community can celebrate collective impact. Organisers encourage early nominations to ensure fairness and representation.", "Peers are urged to nominate those who quietly made a difference.", "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?auto=format&fit=crop&q=80&w=1024"),
            article("Study Space App Adds Quiet Zone Indicator", 19, "The campus study-space app introduced a quiet-zone indicator to help students find calmer areas.", "The update uses volunteer reports and simple sensors to flag quieter rooms during busy periods. Developers plan to add seating counts and a booking window for high-demand zones.", "Students welcomed the clearer signals for quiet places during revision peaks.", "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwfGVufDB8fDB8fHww")
        ]
    },
    {
        slug: "sports",
        name: "Sports & Competitions",
        articles: [
            article("Intercollege Football Final Set for Saturday", 0, "The intercollege football final is scheduled for Saturday with high local interest and free student entry.", "Teams prepared with intense training sessions and the fixture promises competitive play and a lively crowd. Organisers emphasised safety measures and a family-friendly atmosphere with food stalls and first aid on site.", "Fans hope for a close match and an uplifting campus atmosphere.", "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=1024"),
            article("Swim Team Breaks Regional Relay Record", 1, "The university swim team set a new regional relay time at last weekend's meet.", "Coaches credited disciplined lap training and technical tweaks; the squad now eyes national trials with renewed confidence. The result was celebrated with a small campus gathering and plaque presentation to the retiring coach.", "Team members dedicated the race to their supportive training staff.", "https://images.unsplash.com/photo-1565982806196-8d63a8e945e4?auto=format&fit=crop&q=80&w=1024"),
            article("Basketball Club Hosts Charity Match", 2, "The basketball club organised a charity match pairing alumni and current players to raise funds for youth sport programmes.", "The event combined competitive play, halftime entertainment and raffle fundraising. Local sponsors provided refreshments and prizes to boost donations during the closing ceremony.", "Organisers thanked supporters for a celebratory turnout.", "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1024"),
            article("Marathon Event Draws Record Crowd", 3, "A campus charity marathon attracted record numbers of runners and walkers raising funds for wellbeing projects.", "Routes were accessible with water points and first aid stations; family-friendly entries were encouraged. The event showcased strong community spirit and raised more than projected that day.", "Participants described the morning as energising and hopeful.", "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1024"),
            article("Table Tennis League Expands Club Numbers", 4, "The intramural table tennis league added new teams as interest grew across halls.", "The format changed for more players and shorter matches, helping maintain momentum and keep the schedule tight. New practice slots were introduced to accommodate rising demand.", "Players praised the social but competitive environment the league fostered.", "https://images.unsplash.com/photo-1554127044-0965d6e2467d?auto=format&fit=crop&q=80&w=1024"),
            article("Cricket Team Announces New Captain", 5, "The cricket club appointed a new captain ahead of the inter-university season to lead selection and training goals.", "The captain prioritised fielding drills, consistent selection policy, and team culture focused on small, reliable improvements. Pre-season friendlies will test the new combinations.", "The new leader emphasised commitment and steady progress for measurable gains.", "https://images.unsplash.com/photo-1593341643-346215346162?auto=format&fit=crop&q=80&w=1024"),
            article("Volleyball Squad Holds Beach Practice", 6, "To build cohesion and fitness, the volleyball squad held beach practice focused on movement and team drills.", "Coaches used the relaxed environment for conditioning and tactical sessions that translate back indoors. Players enjoyed the change of scene and lighter training stressors.", "The day ended grinning and sun-kissed, according to participants.", "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80&w=1024"),
            article("Campus Cycling Race Returns This Term", 7, "The annual campus cycling race returned with increased safety marshals and a novice-friendly category to encourage new riders.", "Route markers and helmet checks were strictly enforced and repair kits were available at the start. Novice prizes and short routes helped widen participation beyond seasoned cycling groups.", "Organisers thanked sponsors and local cycling clubs for support.", "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80&w=1024"),
            article("Fencing Club Opens Taster Sessions for Beginners", 8, "Free taster sessions introduced basic foil technique to newcomers interested in fencing.", "Coaches loaned protective equipment and emphasised posture and footwork to new participants. Sessions focused on confidence-building and safe practice to encourage longer-term membership.", "A first-time fencer called the session 'fiercely fun.'", "https://images.unsplash.com/photo-1542491172-0b1d58334468?auto=format&fit=crop&q=80&w=1024"),
            article("Cheerleading Team Prepares for Nationals", 9, "The cheerleading squad increased training intensity as nationals approach, focusing on synchrony and safety.", "Conditioning, lifts and checklists were central to practices alongside spotter drills and injury prevention sessions. Supporters plan a send-off rally to boost morale before travel.", "The team remains optimistic about performing well at qualifiers.", "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1024")
        ]
    },
    {
        slug: "food",
        name: "Food & Restaurant Blogs",
        articles: [
            article("Top 5 Late-Night Study Bites on Campus", 10, "A roundup of reliable late-night snacks that study-doers swear by when the library lights burn late.", "From the cafeteria's spiced samosas to the tucked-away curry cart, this list walks through quick comforting options that won’t require long queues. Tips on ordering fast and budget-friendly combos are included for late-shift students.", "Testers recommend trying the samosa-chai combo for nostalgic comfort.", "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1024"),
            article("Secret Menu: 'Midnight Masala' at Library Café", 11, "An off-menu chai concoction called 'Midnight Masala' circulates by word-of-mouth among late-night regulars.", "Baristas add an extra pinch of spice and a touch of sweet condensed milk for a warming revision pick-me-up. Word of the drink spreads via campus chat groups and quiet queues after midnight lectures.", "One regular swears it tastes like home on a cold evening.", "https://images.unsplash.com/photo-1556742053-995136e85353?auto=format&fit=crop&q=80&w=1024"),
            article("How to Hack the Canteen Queue (Politely)", 12, "A practical guide to getting food fast without breaking rules or ruffling tempers at busy lunchtimes.", "Pointers include ordering specific combos, timing visits around lecture breaks, and joining slower counters that swap to faster service during peak shifts. The piece emphasises courtesy and the cashless pickup lane as a time-saver.", "Politeness and an extra patience always help in busy canteens.", "https://images.unsplash.com/photo-1606787366850-de633012821e?auto=format&fit=crop&q=80&w=1024"),
            article("Review: The New Vegan Stall Scores Points", 13, "A recent review of the campus vegan stall praises inventive flavours and generous portions that satisfy even non-vegan diners.", "The stall's rotating bowl menu focuses on seasonal veg, fermented sauces and protein-rich additives; students appreciated the flavour depth and the good value. Nutritional info and allergy labelling were noted as positives.", "Customers praised the creative sauces and hearty textures.", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1024"),
            article("Hidden Gem: The Terrace's Secret Brunch", 14, "The Terrace café runs an under-the-radar brunch on Sundays with sharable plates and iced coffee specials.", "The menu rotates weekly and includes a crowd-pleasing shakshuka and a crowd-sourced pancake stack. It remains a soft secret among upper-year students who value a calmer weekend vibe.", "Reserve a seat early — spots vanish fast for the golden-hour brunches.", "https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?auto=format&fit=crop&q=80&w=1024"),
            article("Interview: The Sauce Everyone Asks About", 15, "We sat down with the canteen's head cook to learn the simple roasted-tomato-and-yoghurt sauce behind a viral wrap hack.", "The cook explained balancing acidity with a smoky paprika finish, and advised how students could replicate a milder version at home. The interview includes quick batch tips and a refrigerator-friendly recipe.", "Small tweaks can turn a basic wrap into a crowd favourite.", "https://images.unsplash.com/photo-1628209384834-aa6181734893?auto=format&fit=crop&q=80&w=1024"),
            article("Five Comfortable Canteen Combos for Tight Budgets", 16, "A list of low-cost combos that maximise calories and taste for the student budget-conscious.", "Includes balance suggestions (protein + carb + greens) and tips on asking for sensible additions without extra costs. The goal is steady energy for long study days without blowing the weekly allowance.", "Savvy ordering beats expensive impulse buys every time.", "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=1024"),
            article("Best Coffee Runs Between Lectures", 17, "A mapped route of quick coffee pickups that fit short gaps between classes and labs.", "Each stop lists average service time and the ideal order to keep you caffeinated without missing the next lecture. The article also includes a note on reusable cup offers to reduce waste.", "Time-and-taste tested so students don't have to improvise.", "https://images.unsplash.com/photo-1511920183353-3c9c9b5a6a8b?auto=format&fit=crop&q=80&w=1024"),
            article("Cook-on-a-Desk: Microwave Meals That Don't Suck", 18, "A practical how-to on making surprisingly decent microwave meals using simple staples and a few fresh add-ins.", "Recipes focus on texture rescue, tasteful seasonings and using instant proteins to make meals filling. Tips include reheating hacks to avoid soggy meals and quick plating ideas for better enjoyment.", "A little care can transform a microwave meal into a study-night win.", "https://images.unsplash.com/photo-1588694853510-85f2d5b6e6e2?auto=format&fit=crop&q=80&w=1024"),
            article("Cafeteria Sustainability: Composting Progress", 19, "The campus food services expanded their composting scheme and improved meal-waste sorting across service points.", "New bins and clearer labelling reduced contamination rates; staff report higher student willingness to separate waste given clearer signage and volunteer support. The article includes practical steps other campuses have used to scale programs.", "Organisers emphasised small changes stack to big environmental benefits.", "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1024")
        ]
    },
    {
        slug: "tech",
        name: "Tech Trends",
        articles: [
            article("Engineering Students Reveal Solar Car Prototype", 10, "An engineering team presented a low-speed solar car prototype designed for campus demonstrations and outreach.", "Built using inexpensive materials and focused on energy efficiency, the vehicle will undergo slow-speed trials on campus grounds and be used to teach students about design constraints and iteration. Mentors said the focus on affordability was deliberate to encourage replication.", "Student inventors plan future refinements and public demos.", "https://images.unsplash.com/photo-1504220239859-c2153835639d?auto=format&fit=crop&q=80&w=1024"),
            article("Campus App Adds Quiet-Zone Heatmap", 11, "The campus study-space app now features a heatmap indicating quieter areas, crowdsourced from student reports.", "The feature combines voluntary ping reports with scheduled room bookings to provide a snapshot of relative quiet levels. Developers encouraged students to contribute to improve accuracy over time.", "Early feedback praises the transparency for library visitors.", "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&q=80&w=1024"),
            article("AI-Powered Grading Pilot Expands to Two Departments", 12, "A pilot using AI-assisted grading tools expanded to include two more departments with human oversight in the loop.", "The system provides draft feedback and flags common issues for tutors to review; developers stressed that final marks are instructor-approved. Training sessions are available to ensure fair use and transparency.", "Advocates call for clear student communication about tool usage.", "https://images.unsplash.com/photo-1678454238789-53457a353683?auto=format&fit=crop&q=80&w=1024"),
            article("Robotics Club Builds Assistive Device for Community", 13, "The robotics club’s latest project is an assistive arm prototype designed to help with household tasks for older residents.", "Combining mechanical design and user-led testing, the team emphasised safety and low-cost parts for scalability. Plans include publishing open-source build notes as part of ethical dissemination.", "A local charity expressed interest in trialling small numbers next term.", "https://images.unsplash.com/photo-1581094794329-c8112a89af10?auto=format&fit=crop&q=80&w=1024"),
            article("Computer Science Offers Short Course on Ethical AI", 14, "A short-term module on ethical AI and responsible deployment will be available to non-computer science students this term.", "The module covers bias awareness, explainability, and human-centred design, aiming to prepare students from any discipline for interactions with algorithmic systems. Course includes practical case studies and guest lectures.", "Organisers hope to widen participation beyond the faculty.", "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1024"),
            article("Campus 3D-Printing Lab Cuts Turnaround Time", 15, "The makerspace improved its 3D-printing workflow, shortening print turnaround and expanding student access.", "New booking rules and a tiered priority system for prototypes versus final pieces helped allocate printing time more fairly. Training sessions ensure safety and better result quality for first-time users.", "The change reduced frustrations and improved output consistency.", "https://images.unsplash.com/photo-1617791160536-595cfb22c054?auto=format&fit=crop&q=80&w=1024"),
            article("Student Hackathon Adds Accessibility Challenge", 16, "This year’s hackathon included a dedicated accessibility challenge with mentors from local charities.", "Teams focused on assistive technologies and inclusive UX, and judges rewarded measurable impact and co-design with end users. The organisers emphasised that accessible design improves products for everyone.", "Several projects intend to continue beyond the weekend sprint.", "https://images.unsplash.com/photo-1516116216624-53e6973bea12?auto=format&fit=crop&q=80&w=1024"),
            article("AR Tour App Maps Campus Hidden Spots", 17, "A student team created an augmented-reality tour app highlighting lesser-known campus landmarks and stories.", "The app overlays audio snippets and photos at points around campus to add historical context and student anecdotes. Developers aim to expand content with contributions from alumni.", "The pilot promises playful discovery for new students and visitors.", "https://images.unsplash.com/photo-1593431189133-76d78d85ed8a?auto=format&fit=crop&q=80&w=1024"),
            article("Library Pilots 'No-Phone' Study Pods With Sensors", 18, "The library trialled small pods that optionally block notifications when students opt in for focused sessions.", "Participants reported higher concentration and appreciated optionality rather than enforced bans. The trial will evaluate whether the feature should be added permanently to booking options.", "Volunteers will collate feedback and adjust the feature next term.", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1024"),
            article("Quantum Computing Talk Draws Packed Lecture Hall", 19, "A public talk on quantum computing fundamentals attracted a surprising cross-disciplinary audience keen to hear practical implications.", "The talk focused on concepts at a high level with interactive analogies and a panel Q&A that tackled sceptical and excited viewpoints equally. Organisers plan follow-ups to meet demand.", "Attendees left with clear next-steps for learning paths.", "https://images.unsplash.com/photo-1550745165-9bc0b252726a?auto=format&fit=crop&q=80&w=1024")
        ]
    },
    {
        slug: "arts",
        name: "Arts & Culture",
        articles: [
            article("Community Choir Introduces 'Study Songs' Between Lectures", 10, "A community choir launched brief 'study songs' to give students melodic pauses between busy timetables.", "Short sets performed in common areas aim to create restful musical breaks and provide an accessible cultural moment for passing students. Organisers hope to expand to different campus spots each week.", "A student joked the songs should count towards wellbeing credits.", "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1024"),
            article("Student Zine Publishes Quarterly Issue", 11, "The student-run zine released its latest issue with fiction, essays and art reflecting campus life.", "Editors showcased cross-disciplinary voices and hosted a small launch night with readings and open mics. Print copies sold quickly and the team invited contributors for the next issue.", "Contributors hope the zine sparks more creative projects next term.", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1024"),
            article("Pop-Up Gallery Features Molecule Art", 12, "A pop-up gallery combined chemistry models and art to make molecular structures visually engaging.", "Student pieces ranged from polymer sculptures to illuminated crystal displays, attracting visitors across arts and sciences faculties. The exhibit used approachable captions and interactive demos.", "Attendees left with a newfound appreciation for the beauty of molecules.", "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&q=80&w=1024"),
            article("Drama Club Stages Contemporary Reimagining of a Classic", 13, "The drama club’s contemporary reimagining placed a classic play in a campus context and provoked lively post-show discussion.", "Directorial choices invited audience participation in small ways and the run sold out quickly. Cast and crew praised community enthusiasm and collaboration across departments.", "Students appreciated the fresh take on familiar themes.", "https://images.unsplash.com/photo-1524950642874-83d6a2a68e27?auto=format&fit=crop&q=80&w=1024"),
            article("Photography Club Launches Weekly Photo Contest", 14, "The photography club's weekly contest spotlights student work and awards small print prizes each week.", "Themes vary from 'micro-portraits' to 'campus textures' and winners are featured in the library display. Beginners are encouraged to enter and mentoring pairs help skill development.", "Winning images receive display space and social coverage.", "https://images.unsplash.com/photo-1520392499114-1b38f8445720?auto=format&fit=crop&q=80&w=1024"),
            article("Outdoor Film Night Features Student Shorts", 15, "An outdoor screening highlighted student short films followed by a Q&A with the filmmakers.", "The program showcased diverse genres and provided a casual setting for filmmakers to explain choices and production stories. Picnic-goers enjoyed a shared creative evening under the stars.", "Organisers urged attendees to bring reusable picnic sets.", "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1024"),
            article("Creative Writing Workshop Pairs Poets and Programmers", 16, "A workshop experimented with collaborative writing between poets and programmers to explore algorithmic prompts and creative constraint.", "Participants produced short pieces that combined procedural prompts with lyrical editing, showing surprising results about constraints and creativity. Mentors encouraged playful future pairings.", "The workshop will publish a small zine with selected pieces.", "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1024"),
            article("Street Art Trail Mapped for New Students", 17, "A student project mapped the campus' best street art and murals to help new students explore creative corners.", "The trail included QR tags with artist notes and short histories; curators aim to keep the trail updated each term to reflect new works.", "The trail offers a walkable introduction to local visual culture.", "https://images.unsplash.com/photo-1531956531709-0821e2da8e48?auto=format&fit=crop&q=80&w=1024"),
            article("Salsa Nights Bring Dance to the Union", 18, "Weekly salsa lessons paired with social dancing attracted both beginners and experienced dancers to the union.", "Short lessons followed by social time created a friendly atmosphere and rotated themes to keep the nights fresh. Attendance grew steadily as word spread.", "Many praised the warm and welcoming vibe for all abilities.", "https://images.unsplash.com/photo-1522158637959-30385a09e0da?auto=format&fit=crop&q=80&w=1024"),
            article("Pop-Up Photo Booth Produces Instant Keepsakes", 19, "A temporary photo booth sold instant prints and raised funds for departmental initiatives during graduation season.", "Students queued for mementos and volunteers managed lighting and props for quick portraits. Funds supported small creative scholarships and community projects.", "Visitors left with printed memories and a smile.", "https://images.unsplash.com/photo-1531875456634-a1f7380d1056?auto=format&fit=crop&q=80&w=1024")
        ]
    },
    {
        slug: "opinion",
        name: "Opinion & Editorial",
        articles: [
            article("Why Small Rituals Help During Exam Week", 10, "A columnist argues that tiny rituals can ground students during the intense exam period and reduce stress.", "Micro-habits like a brief pre-study tea, a short walk, or a consistent study-start routine can create small pockets of control and help regulate anxiety. The column invites readers to share rituals that worked for them.", "Readers are encouraged to submit their rituals for a follow-up piece.", "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&w=1024"),
            article("On Quiet Spaces: A Case for Shared Calm", 11, "An opinion piece makes the case for protecting quiet pockets across campus for diverse study needs.", "Suggestions include clearer signage, gentle booking rules and a culture of considerate behaviour. The author calls for pilot schemes with community feedback before permanent changes.", "Pilot schemes can show practical benefits without heavy upfront investment.", "https://images.unsplash.com/photo-1516132532452-1205369c339a?auto=format&fit=crop&q=80&w=1024"),
            article("Student Entrepreneurship: Small Steps, Big Learning", 12, "A column celebrates small student ventures for the practical skills they teach beyond classroom theory.", "Early experiments — even those that pivot or fail — deliver iteration experience, resilience and real-world problem framing. The piece urges mentorship and small seed grants to support prototypes.", "Authors recommend low-cost pilots rather than large unproven projects.", "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1024"),
            article("Humour in Policy: Why It Helps", 13, "A short argument for introducing respectful humour into policy discussions to widen engagement and lower barriers.", "On-campus trials showed improved attendance when sessions included short light segments that humanised contributors. The piece suggests formats combining levity with clear outcomes.", "Trial formats can humanise dry topics without undermining seriousness.", "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=1024"),
            article("Letter: Shared Kitchens and Simple Rules", 14, "An open letter proposes practical etiquette for shared kitchens to reduce friction and improve cohabitation.", "Suggestions include clear labelling, cleaning rosters and simple templates for awkward conversations. The author offered a few gentle communication phrases to smooth tense situations.", "Shared rules paired with goodwill reduce most petty disputes.", "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=1024"),
            article("Reflections on Mentorship: A Two-Way Street", 15, "A reflective piece highlights how mentorship benefits both mentee and mentor through mutual learning.", "Stories show mentors who picked up new digital tools and perspectives from mentees, underlining reciprocity. The piece advocates for informal micro-mentoring alongside formal schemes.", "Mentorship often surprises both sides with what they learn.", "https://images.unsplash.com/photo-1531536102144-5d5f1593501a?auto=format&fit=crop&q=80&w=1024"),
            article("The Value of Breaking Routine", 16, "A columnist suggests occasional deliberate routine-breaking sparks creativity and prevents burnout.", "From swapping study spots to a one-day 'no-screen' afternoon, small deviations can refresh perspective. The column proposes a short experiment readers can try and report back on.", "Try one small deviation this week and reflect next Monday.", "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1024"),
            article("Open Letter to Planners: More Benches, Please", 17, "An open letter argues for modest additions of benches at key campus routes to enhance informal meeting spaces.", "Footfall data supports adding benches in crowded routes and near study nodes. Student groups offered to help identify priority trial spots for low-cost installations.", "Benches invite pauses and informal conversations that strengthen community.", "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1024"),
            article("Opinion: Student-Led Initiatives Move the Needle", 18, "A piece arguing small student pilots can deliver practical improvements at low cost and scale quickly with modest support.", "Case studies include peer tutoring and micro-grants that funded successful events; the author calls for seed funding and reduced bureaucracy to speed impact.", "Supportive small grants can catalyse large cultural effects.", "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1024"),
            article("Editorial: Rethinking Busyness as a Badge", 19, "An editorial challenges the culture of equating busyness with worth and calls for institutional changes to support balanced workloads.", "Recommended practices include workload audits, clearer assessment calendars and staff modelling of healthy behaviours. The editorial asks for a pilot of compassionate scheduling in one faculty.", "Small policy shifts can ripple into healthier academic cultures.", "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1024")
        ]
    }
];


/* =========================
   DOM & UI LOGIC
   ========================= */

// Create a lookup map for faster category access
const CATEGORY_MAP = {};
CATEGORIES.forEach(cat => CATEGORY_MAP[cat.slug] = cat);

// Get references to DOM elements
const navTabsEl = document.getElementById('navTabs');
const pageWrapper = document.getElementById('pageWrapper');
const adsPoolEl = document.getElementById('adsPool');
const foodBlogEl = document.getElementById('foodBlog');
const trendingListEl = document.getElementById('trendingList');

/**
 * Builds the navigation tabs from the CATEGORIES data.
 */
function buildNav() {
    navTabsEl.innerHTML = '';
    CATEGORIES.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'tab';
        btn.textContent = cat.name;
        btn.dataset.slug = cat.slug;
        btn.onclick = () => { location.hash = '#' + cat.slug; };
        navTabsEl.appendChild(btn);
    });
}

/**
 * Renders the ad pool in the left column.
 */
function renderAds() {
    adsPoolEl.innerHTML = '';
    AD_POOL.forEach((a) => {
        const d = document.createElement('div');
        d.className = 'ad' + (a.restaurant ? ' restaurant' : '');
        const imgTag = a.img ? `<img src="${escapeHtml(a.img)}" alt="${escapeHtml(a.title)}">` : '';

        if (a.link) {
            const safe = (a.link === 'LINK_HERE') ? '#' : a.link;
            d.innerHTML = `<a href="${escapeHtml(safe)}" target="${safe === '#' ? '_self' : '_blank'}" rel="noopener noreferrer" style="text-decoration:none;color:inherit;">
                               ${imgTag}
                               <div class="title">${escapeHtml(a.title)}</div>
                               <div class="copy">${escapeHtml(a.copy)}</div>
                             </a>`;
            if (a.link === 'LINK_HERE') {
                const note = document.createElement('div');
                note.style.cssText = 'margin-top:6px; font-size:12px; color:var(--muted);';
                note.textContent = 'Replace LINK_HERE with your restaurant URL.';
                d.appendChild(note);
            }
        } else {
            d.innerHTML = `${imgTag}<div class="title">${escapeHtml(a.title)}</div><div class="copy">${escapeHtml(a.copy)}</div>`;
        }
        adsPoolEl.appendChild(d);
    });
}

/**
 * Renders the food blog in the right sidebar.
 */
function renderFood() {
    foodBlogEl.innerHTML = '';
    FOOD_POSTS.forEach(p => {
        const d = document.createElement('div');
        d.className = 'food-item';
        d.innerHTML = `<h5>${escapeHtml(p.title)}</h5><div style="color:var(--muted);font-size:.82rem">${escapeHtml(p.author)}</div><p>${escapeHtml(p.body)}</p>`;
        foodBlogEl.appendChild(d);
    });
}

/**
 * Renders the trending topics in the right sidebar.
 */
function renderTrending() {
    trendingListEl.innerHTML = '';
    CATEGORIES.forEach(cat => {
        const first = cat.articles[0];
        if (!first) return;
        const t = document.createElement('div');
        t.className = 'trend-tag';
        t.textContent = '#' + first.title.split(' ').slice(0, 3).join('');
        t.title = first.title;
        t.onclick = () => {
            location.hash = '#' + cat.slug;
            setTimeout(() => {
                const el = document.getElementById(cat.slug + '-0');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 180);
        };
        trendingListEl.appendChild(t);
    });
}

/**
 * Renders a full category page with all its articles.
 * @param {string} slug - The slug of the category to render.
 */
function renderCategory(slug) {
    const cat = CATEGORY_MAP[slug];
    if (!cat) return;

    // Highlight the active tab
    document.querySelectorAll('.tab').forEach(b => b.classList.toggle('active', b.dataset.slug === slug));

    pageWrapper.innerHTML = '';
    const page = document.createElement('div');
    page.className = 'page';
    page.innerHTML = `<h1>${escapeHtml(cat.name)}</h1><div class="article-list" id="list-${slug}"></div>`;
    pageWrapper.appendChild(page);

    const listEl = document.getElementById('list-' + slug);
    cat.articles.forEach((a, idx) => {
        const art = document.createElement('article');
        art.className = 'article';
        art.id = slug + '-' + idx;
        const imgHtml = (a.img) ? `<img class="article-image" src="${escapeHtml(a.img)}" alt="${escapeHtml(a.title)}">` : '';

        art.innerHTML = `${imgHtml}
          <div class="meta">
            <div class="leftmeta">
              <div class="headline" tabindex="0">${escapeHtml(a.title)}</div>
              <div class="byline">${escapeHtml(a.byline)}</div>
            </div>
            <div class="tagline small">${escapeHtml(cat.name)}</div>
          </div>
          <div class="details">
            <p style="font-weight:700">${escapeHtml(a.lead)}</p>
            <div>${escapeHtml(a.body)}</div>
            <p style="margin-top:10px;color:var(--muted)"><em>${escapeHtml(a.closing)}</em></p>
          </div>`;
        listEl.appendChild(art);

        const head = art.querySelector('.headline');
        head.addEventListener('click', () => toggleArticle(art));
        head.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                head.click();
            }
        });
    });

    // Scroll to the specific article if linked directly
    setTimeout(() => {
        const hash = location.hash.replace(/^#/, '');
        if (hash && hash.startsWith(slug + '-')) {
            const el = document.getElementById(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 60);
}

/**
 * Toggles the visibility of an article's details.
 * @param {HTMLElement} artEl - The article element to toggle.
 */
function toggleArticle(artEl) {
    const isOpen = artEl.classList.contains('open');
    // Close any other open articles
    document.querySelectorAll('.article.open').forEach(x => {
        if (x !== artEl) {
            x.classList.remove('open');
            x.querySelector('.details').style.display = 'none';
        }
    });

    // Toggle the clicked article
    if (isOpen) {
        artEl.classList.remove('open');
        artEl.querySelector('.details').style.display = 'none';
    } else {
        artEl.classList.add('open');
        const details = artEl.querySelector('.details');
        details.style.display = 'block';
        setTimeout(() => artEl.scrollIntoView({ behavior: 'smooth', block: 'center' }), 120);
    }
}

/**
 * Simple client-side router based on the URL hash.
 */
function router() {
    const hash = location.hash.replace(/^#/, '') || CATEGORIES[0].slug;
    let slug = hash;
    if (hash.includes('-')) {
        slug = hash.split('-')[0];
    }
    if (!CATEGORY_MAP[slug]) {
        location.hash = '#' + CATEGORIES[0].slug;
        return;
    }
    renderCategory(slug);
}

// Quick Reactions Logic
const reactionCounts = { fire: 0, lol: 0, clap: 0, wow: 0 };
document.getElementById('reactions').addEventListener('click', (e) => {
    const btn = e.target.closest('.react-btn');
    if (!btn) return;
    const em = btn.dataset.emoji;
    if (em === '🔥') reactionCounts.fire++;
    if (em === '😂') reactionCounts.lol++;
    if (em === '👏') reactionCounts.clap++;
    if (em === '🤯') reactionCounts.wow++;
    updateReactionDisplay();
});

function updateReactionDisplay() {
    document.getElementById('c-fire').textContent = reactionCounts.fire;
    document.getElementById('c-lol').textContent = reactionCounts.lol;
    document.getElementById('c-clap').textContent = reactionCounts.clap;
    document.getElementById('c-wow').textContent = reactionCounts.wow;
}

/**
 * Escapes HTML to prevent injection attacks.
 * @param {string} s - The string to escape.
 * @returns {string} The escaped string.
 */
function escapeHtml(s) {
    return String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}


/* =========================
   INITIALIZATION
   ========================= */

// Build the initial UI
buildNav();
renderAds();
renderFood();
renderTrending();

// Listen for hash changes to navigate between pages
window.addEventListener('hashchange', router);

// Load the correct page on initial visit
router();

// Set initial reaction counts

updateReactionDisplay();


