const questionDatabase = {
  "database_info": {
    "title": "Master Tech Quiz QUESTIONS Issue 107",
    "date": "06/NOV/2025",
    "total_entries_parsed": 15,
    "disclaimer": "Correct answers are derived from explicit text notes found in the source material (e.g., 'Actual Exam Question', 'Feedback suggests...'). Where bolding was not preserved in the text source, options are listed for review."
  },
  "questions": [
    {
      "id": "CB_OMA_001",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.1.7.2 / 8.3.7.1",
      "topic": "Fuel",
      "question": "When can you start to use contingency fuel?",
      "options": [
        "a. Completion of the refueling and release of the fuel bowser.",
        "b. Aircraft acceptance on non-refueling flights",
        "c. Aircraft acceptance",
        "d. After APU START"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Option A",
      "source_notes": "Although both A and B are correct recent feedback suggests the only option you can select is A.",
      "citation": "[1, 2]"
    },
    {
      "id": "CB_OMC_001",
      "section": "Closed Book",
      "manual": "OMC",
      "reference": "OMC 10.4.1.1",
      "topic": "Cold Weather Operations",
      "question": "What do you apply temp correction to if the airfield (or ISA) temp is -30 degrees?",
      "options": [
        "a. MEA / MH / MGA / MOCA",
        "b. ATC Cleared ALT",
        "c. All of the above"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "All of the above (implied)",
      "source_notes": "Note: Not ATC Cleared ALT: (In the EXAM I think the correct answer is ALL OF THE ABOVE)",
      "citation": "[3, 4]"
    },
    {
      "id": "CB_FCOM_001",
      "section": "Closed Book",
      "manual": "FCTM",
      "reference": "FCTM-PRO-AEP-Misc-Emergency Descent",
      "topic": "SOPs / Procedures",
      "question": "What are the initial actions of the PM during an Emergency Descent on the FIRST LOOP?",
      "options": [
        "a. PA announce, Call ATC",
        "b. Set 7700…",
        "c. Crew Oxy Masks… ON / Signs: ON / FMA MONITOR",
        "d. CREW OXY MASK……………ON / SIGNS…ON/FMA MONITOR"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Option C (implied)",
      "source_notes": "Note: Feedback implies that the correct answer is the one with three dots (…).",
      "citation": "[5, 6]"
    },
    {
      "id": "CB_OMA_002",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 7.6.1",
      "topic": "FDP",
      "question": "When does the FDP start and end?",
      "options": [
        "a. Dubai 1h25min to chocks on / Outstation 1h to chocks on"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Refer to Manual",
      "source_notes": null,
      "citation": "[7]"
    },
    {
      "id": "OB_OMC_001",
      "section": "Open Book",
      "manual": "OMC",
      "reference": "OMC 1.1.5",
      "topic": "FDPs",
      "question": "How long do the crew need to be onboard prior to departure?",
      "options": [
        "a. As long as needed...",
        "b. Cabin Crew 1 hour, Flight Deck 40 mins",
        "c. STD-55",
        "d. STD-60"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Option D",
      "source_notes": "d. STD-60 (the is the actual correct answer). Note recent feedback says STD-60 was NOT an option. Suggest you go with old answer [STD-55] for now.",
      "citation": "[4, 7]"
    },
    {
      "id": "OB_FCOM_001",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-DSC-26-Avionics Bays-Controls and Indicators-Entertainment Panel-IFEC Pb",
      "topic": "Fire and SmokeProtection",
      "question": "When the IFEC PB-SW shows SMOKE, what does it mean?",
      "options": [
        "a. Smoke is detected in the shower/spa...",
        "b. The ventilation extraction fan automatically stops...",
        "c. Smoke is detected in the IFEC Center..."
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Option C",
      "source_notes": "Option C text: '(word for word out of the FCOM)'",
      "citation": "[8, 9]"
    },
    {
      "id": "OB_OMA_001",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 5.2.3",
      "topic": "Relief Pilot",
      "question": "Above what FL may a commander delegate the conduct of a flight to a qualified Relief Pilot that is not a Commander?",
      "options": [
        "a. Initial cruise altitude",
        "b. FL100",
        "c. FL200",
        "d. FL300"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "FL200",
      "source_notes": "b. NOTE: ACTUAL EXAM QUESTION",
      "citation": "[10]"
    },
    {
      "id": "CB_FCOM_002",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "SYS-22-FG-Controls and Indicators-FMA-FMA-A/THR Messages and Modes (Column 1)",
      "topic": "Soft Go Around",
      "question": "In case of a go around with an engine failure what flashes on the FMA if you select Soft Go Around?",
      "options": [
        "a. LVR TOGA",
        "b. LVR CLB",
        "c. MAN SOFT G/A",
        "d. SOFT G/A"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "None(Function Unavailable)",
      "source_notes": "NOTE: No soft mode with engine failure",
      "citation": "[11]"
    },
    {
      "id": "OB_FCOM_003",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "DSC-22-FMS-10-15-10",
      "topic": "Fuel / FMS",
      "question": "Which of the following statements regarding failure cases is correct?",
      "options": [
        "a. In the case of failure that affects the fuel consumption, FMS predictions are always correct.",
        "b. In the event of One Engine Inoperative, FMS predictions are inaccurate.",
        "c. In the case of failure that affects the fuel consumption...",
        "d. FMS fuel penalties are never reliable..."
      ],
      "correct_answer": 1,
      "correct_answer_indication": "Option B",
      "source_notes": "b. NOTE: ACTUAL EXAM QUESTION",
      "citation": "[12]"
    },
    {
      "id": "OB_OMA_002",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 2.1.3.1",
      "topic": "Documents",
      "question": "Which Flight document(s) are NOT required to be retained on ground... until the aircraft returns to Dubai?",
      "options": [
        "a. Route specific NOTAM documentation...",
        "b. A copy of the Master Operational Flight plan (OFP)",
        "c. Mass and balance documentation (Load Sheet)",
        "d. Significant Weather Documentation."
      ],
      "correct_answer": 3,
      "correct_answer_indication": "Significant Weather Documentation",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": "[13, 14]"
    },
    {
      "id": "OB_FCOM_004",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-32-System Description-Braking System-Basic Autobrake",
      "topic": "Brakes / Auto Brake",
      "question": "What are the conditions required for Basic AUTO BRK DISARMING/DEACTIVATION?",
      "options": [
        "a. Pedal deflection...",
        "b. Aircraft in flight more than 10s (RTO only)...",
        "c. Mode selector to DISARM...",
        "d. RTO pb pressed..."
      ],
      "correct_answer": 1,
      "correct_answer_indication": "Option containing '10s'",
      "source_notes": "NOTE: The correct answer to this QUESTION is the one that has 10s in it.",
      "citation": "[15, 16]"
    },
    {
      "id": "OB_OMC_002",
      "section": "Open Book",
      "manual": "OMC",
      "reference": "OMC 10.3.8.8",
      "topic": "Hold Over Times",
      "question": "For holdover times, how should Snow Grains and Snow pellets be treated?",
      "options": [
        "a. As snow",
        "b. As ice pellets",
        "c. As freezing fog",
        "d. As rain on a cold soaked wing"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "As snow",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": "[17]"
    },
    {
      "id": "CB_OMA_003",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 1.5.3",
      "topic": "Documents",
      "question": "Who is responsible for the manuals and documents to be valid during the entire flight?",
      "options": [
        "a. Commander",
        "b. First Officer",
        "c. Dispatch",
        "d. Engineer"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Commander",
      "source_notes": "",
      "citation": "[18]"
    },
    {
      "id": "CB_OMA_004",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 6.4",
      "topic": "Documents",
      "question": "Who is responsible for keeping a valid medical nad vaccination card?",
      "options": [
        "a. Licensing department",
        "b. GCAA",
        "c. Documents Keeper",
        "d. Individual crew member"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "Individual crew member",
      "source_notes": "",
      "citation": "[19]"
    },
    {
      "id": "CB_OMA_005",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 2.1.3.1",
      "topic": "Documents",
      "question": "Which	documents	are	NOT	retained	on	ground	in	Dubai?",
      "options": [
        "a. Route specific NOTAM documentation...",
        "b. A copy of the Master Operational Flight plan (OFP)",
        "c. Mass and balance documentation (Load Sheet)",
        "d. Significant Weather chart."
      ],
      "correct_answer": 3,
      "correct_answer_indication": "Significant Weather chart.",
      "source_notes": "NOTE: May have moved to Open Book Section. See 51 DOCUMENTS In Open Book Notes",
      "citation": "[20]"
    },
    {
      "id": "CB_OMA_006",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 2.1.3.1?",
      "topic": "Documents",
      "question": "Must the Commander ensure that Safety Cards are available to passengers?",
      "options": [
        "a. Yes, but normally verified by the purser.",
        "b. No"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Yes, but normally verified by the purser.",
      "source_notes": "NOTE: Someone’s feedback said: Yes the Commander delegates to the Purser and Ensures it is done\nThis question may appear in the Open Book Section",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_007",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.1.11",
      "topic": "Documents",
      "question": "The	Tech	Log	must	be	filled	out	in	accordance	with	which	manual?",
      "options": [
        "a. MEL/CDL",
        "b. FCOM",
        "c. FCTM",
        "d. QRH"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "MEL/CDL",
      "source_notes": "",
      "citation": "[22]"
    },
    {
      "id": "CB_OMA_008",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.1",
      "topic": "Documents",
      "question": "A Captain shall not commence a flight if he is not satisfied?",
      "options": [
        "a. Aircraft is airworthy",
        "b. The load is correctly distributed",
        "c. The airplane configuration is in accordance with the CDL",
        "d. All of the above"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All of the above",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_009",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.2.1.3.2",
      "topic": "Fuel",
      "question": "What are the Flight Crew duties during fuelling?",
      "options": [
        "a. Establish and maintain comms with ground.",
        "b. Inform Cabin Crew when refueling is finished by switching the seat belt signs on.",
        "c. Be ready to action PAX evacuation",
        "d. All of the above"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All of the above",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_010",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.2.1.3.2",
      "topic": "Fuel",
      "question": "Is defueling with passengers embarking / onboard / disembarking allowed?",
      "options": [
        "a. JET B, JP-4 or AVTAG is prohibited",
        "b. Kerosene fuels (Jet A/A1) is permitted when applying the following procedures and the flight crew MUST be notified before commencing.",
        "c. Follow local regulations",
        "d. A and B"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "A and B",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_011",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.1.7.1.3",
      "topic": "Fuel",
      "question": "At the planning stage contingency fuel compensate for deviations in?",
      "options": [
        "a. WX Forecasts",
        "b. ZFW",
        "c. TOW",
        "d. Expected Taxi Fuel"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "WX Forecasts",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_012",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.1.7.2",
      "topic": "Fuel",
      "question": "Standard Fuel Planning requirements are only applicable until?",
      "options": [
        "a. 1 hour before departure",
        "b. Loadsheet acceptance",
        "c. 3 hours before departure",
        "d. Completion of refueling and release of the fuel bowser"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "Completion of refueling and release of the fuel bowser",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_013",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.1.7.6",
      "topic": "Fuel",
      "question": "When is it NOT recommended to do tankering?",
      "options": [
        "a. If TO/LDG runway is contaminated or expected to be so",
        "b. ",
        "c. ",
        "d. "
      ],
      "correct_answer": 0,
      "correct_answer_indication": "If TO/LDG runway is contaminated or expected to be so",
      "source_notes": "NOTE: If temp at destination is <20 degrees should not plan to arrive with more than 25 tons",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_002",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-LIM-Fuel-Maximum Allowed Wing Fuel Imbalance",
      "topic": "Fuel",
      "question": "What are the tolerance limits for the Outer Tank imbalance?",
      "options": [
        "a. Left	/	Right	Outer	tank	imbalance	is	1,200kgs",
        "b. Left	/	Right	Inner	tank	imbalance	is	2,500kgs",
        "c. Left	/	Right	Outer	tank	imbalance	is	3,000kgs",
        "d. Left	/	Right	Outer	tank	imbalance	is	1,000kgs"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Left	/	Right	Outer	tank	imbalance	is	1,200kgs",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCTM_001",
      "section": "Closed Book",
      "manual": "FCTM",
      "reference": "FCTM-PRO-ABN-FUEL-FUEL PEN",
      "topic": "Fuel",
      "question": "What	is the procedure for applying	FPF?",
      "options": [
        "a. The	flight	crew	SHOULD	enter	the	associated	fuel	penalty	in	the	FMS	DATA/STATUS	page.",
        "b. The	flight	crew	MUST	enter	the	sum	of	the	applicable	fuel	penalties	from	the	MEL,	CDL	FCOM	in	the	FMS.",
        "c. Both a and b",
        "d. None of the above"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Both a and b",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_014",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.3.7.3",
      "topic": "Fuel",
      "question": "Which of the following is NOT a correct statement regarding fuel remaining on touchdown?",
      "options": [
        "a. For	Commitment to	Destination	=	Final	Reserve	Fuel",
        "b. For	Destination	=	Alternate	+	Final	Reserve	Fuel",
        "c. For	Alternate	=	Final	Reserve	Fuel",
        "d. For	Destination	=	Alternate	Fuel"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "For	Destination	=	Alternate	Fuel",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_015",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.1.7.5",
      "topic": "Fuel",
      "question": "What is Final Reserve Fuel?",
      "options": [
        "a. The fuel remaining on touchdown",
        "b. Fuel required to fly for 30mins at holding speed at 2000ft above destination/alternate aerodrome elevation in standard conditions, calculated with estimated weight on arrival at the alternate or the destination when no alternate is required.",
        "c. Fuel required to fly for 45mins at holding speed at 1500ft above destination/alternate aerodrome elevation in standard conditions, calculated with estimated weight on arrival at the alternate or the destination when no alternate is required.",
        "d. Fuel required to fly for 30mins at holding speed at 1500ft above destination/alternate aerodrome elevation in standard conditions, calculated with estimated weight on arrival at the alternate or the destination when no alternate is required."
      ],
      "correct_answer": 3,
      "correct_answer_indication": "Fuel required to fly for 30mins at holding speed at 1500ft above destination/alternate aerodrome elevation in standard conditions, calculated with estimated weight on arrival at the alternate or the destination when no alternate is required.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_016",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.3.7.2",
      "topic": "Fuel",
      "question": "If	during	the	in-flight	fuel	check	the	expected	fuel	on	arrival	at	the	destination	is	less	than	Alternate	fuel plus	final	reserve	fuel,	could	you	continue	to	destination	without	knowing	the	EAT?",
      "options": [
        "a. Yes",
        "b. No",
        "c. Flight may continue	towards	the	destination	aerodrome	if it	is possible	to reach at	least	two	aerodromes at	which	a	landing	is assured with at least Final reserve fuel remaining	at touchdown.	Two	separate and independent runways at a single aerodrome within two	hours	of flying	time may be considered to be equivalent to two aerodromes, provided that account is taken of fuel burn due to any	likely ATC	delays",
        "d. Flight may continue	towards	the	destination	aerodrome	if it	is possible	to reach at	least	two	separate runways at	which	a	landing	is assured with at least Final reserve fuel remaining	at touchdown."
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Flight may continue	towards	the	destination	aerodrome	if it	is possible	to reach at	least	two	aerodromes at	which	a	landing	is assured with at least Final reserve fuel remaining	at touchdown.	Two	separate and independent runways at a single aerodrome within two	hours	of flying	time may be considered to be equivalent to two aerodromes, provided that account is taken of fuel burn due to any	likely ATC	delays",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_017",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.2.4",
      "topic": "Cold Weather Operations",
      "question": "How many mm if frost is allowed under the wing?",
      "options": [
        "a. 1mm",
        "b. 2mm",
        "c. 3mm",
        "d. None"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "2mm",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_018",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.2.4",
      "topic": "Cold Weather Operations",
      "question": "With regards to frost?",
      "options": [
        "a. Regulations allow a small layer of frost on top of the fuselage",
        "b. Regulations allow a small layer of frost on top of the wings",
        "c. Regulations allow a small layer of frost on top of the stabillizers",
        "d. Any ice/frost less than 3 mm does not need to be taken into account"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Regulations allow a small layer of frost on top of the fuselage",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_019",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 9.6.3/GOM Chapter 20",
      "topic": "Cold Weather Operations",
      "question": "When does Holdover Protection Expire?",
      "options": [
        "a. At the commencement of take-off roll (due to aerodynamic shedding of fluid)",
        "b. When frozen deposits starts to form or accumulate on treated aircraft surfaces, thereby indicating the loss of effectiveness of the fluid (fluid failure) ",
        "c. Both A & B ",
        "d. None"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Both A & B ",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMC_002",
      "section": "Closed Book",
      "manual": "OMC",
      "reference": "OMC 10.3.6",
      "topic": "Cold Weather Operations",
      "question": "When is a PCI mandatory?",
      "options": [
        "a. When precipitation has started since application of final layer and the shortest time of the HOT is exceeded.",
        "b. When there is heavy snow and a take-off is contemplated. Or Heavy snow conditions exist or has been encountered since the start of anti-icing fluid application.",
        "c. When a passengers report suggest that the anti-icing fluid has failed.",
        "d. All of the above."
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All of the above.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMC_003",
      "section": "Closed Book",
      "manual": "OMC",
      "reference": "OMC 10.3.6",
      "topic": "Cold Weather Operations",
      "question": "When is a PCI mandatory?",
      "options": [
        "a. When precipitation has started since application of final layer and the shortest time of the HOT is exceeded.",
        "b. When precipitation has started since application of final layer and the shortest time of the HOT is exceeded and the pertinent minimum holdover time equals or exceeds 20 mins",
        "c. If Ice pellets are encountered and take off is contemplated ",
        "d. When severe icing conditions are encountered and take off is contemplated "
      ],
      "correct_answer": 0,
      "correct_answer_indication": "When precipitation has started since application of final layer and the shortest time of the HOT is exceeded.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_003",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-SUPP-ICE & RAIN-OP IN ICING",
      "topic": "Cold Weather Operations",
      "question": "When will you turn on ENGINE ANTI ICE?",
      "options": [
        "a. Engine anti-ice must be ON during all ground and flight operations, when icing conditions exist, or are anticipated, except during climb and cruise when the SAT is below –40 °C. Engine anti-ice must be ON before and during a descent in icing conditions, even if the SAT is below –40 °C.",
        "b. Engine anti-ice must be on during all ground and flight operations when icing conditions exist.",
        "c. Engine anti-ice must be on during all ground and flight operations when icing conditions exist, except during the climb and cruise when the SAT is below –40 °C.",
        "d. Engine anti-ice must be ON during all ground and flight operations, when icing conditions exist, except during climb and cruise when the SAT is below –40 °C. Engine anti-ice must be ON before and during a descent in icing conditions, even if the SAT is below –40 °C."
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Engine anti-ice must be ON during all ground and flight operations, when icing conditions exist, or are anticipated, except during climb and cruise when the SAT is below –40 °C. Engine anti-ice must be ON before and during a descent in icing conditions, even if the SAT is below –40 °C.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_004",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-SUPP-ICE & RAIN-OP IN ICING",
      "topic": "Cold Weather Operations",
      "question": "When WILL you turn on WING ANTI ICE?",
      "options": [
        "a. When icing conditions are encountered",
        "b. The flight crew may turn on the wing anti-ice to prevent the ice accretion on the wing leading edge",
        "c. The flight crew must turn on the wing anti-ice if there is evidence of ice accretion, such as ice on the visual indicators or on the wipers, or if the alert A-ICE SEVERE ICE DETECTED is displayed. This is to remove any ice accumulation from the wing leading edge.",
        "d. All the above"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All the above",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_005",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-SUPP-ICE & RAIN-OP IN ICING",
      "topic": "Cold Weather Operations",
      "question": "In cruise the TAT is 10 degrees C and SAT is -50 degrees C. You get an ECAM: ENG 1 N1 HIGH VIBRATIONS. What are your actions?",
      "options": [
        "a. Shutdown the engine",
        "b. Immediately reduce the thrust on the engine",
        "c. Turn on the ENG ANTI-ICE",
        "d. Immediately call the company and plan for a diversion"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Turn on the ENG ANTI-ICE",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_006",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-SUPP-ICE & RAIN-OP IN ICING",
      "topic": "Cold Weather Operations",
      "question": "When SHOULD you turn on WING ANTI ICE?",
      "options": [
        "a. When icing conditions are encountered",
        "b. The flight crew may turn on the wing anti-ice to prevent the ice accretion on the wing leading edge",
        "c. The flight crew must turn on the wing anti-ice if there is evidence of ice accretion, such as ice on the visual indicators or on the wipers, or if the alert A-ICE SEVERE ICE DETECTED is displayed. This is to remove any ice accumulation from the wing leading edge.",
        "d. Only if severe ice detected."
      ],
      "correct_answer": 2,
      "correct_answer_indication": "The flight crew must turn on the wing anti-ice if there is evidence of ice accretion, such as ice on the visual indicators or on the wipers, or if the alert A-ICE SEVERE ICE DETECTED is displayed. This is to remove any ice accumulation from the wing leading edge.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMC_004",
      "section": "Closed Book",
      "manual": "OMC",
      "reference": "OMC 10.3.6",
      "topic": "Cold Weather Operations",
      "question": "What is a Representative Surface?",
      "options": [
        "a. The inner portion of the wing from the root outward to the innermost pylon. It includes the half chord length.",
        "b. The outer portion of the wing from the root inward to the innermost pylon. It includes the entire chord length.",
        "c. The inner portion of the wing from the root outward to the innermost pylon. It includes the entire chord length.",
        "d. There is no representative surface."
      ],
      "correct_answer": 2,
      "correct_answer_indication": "The inner portion of the wing from the root outward to the innermost pylon. It includes the entire chord length.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_020",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.1.2.6.1.4",
      "topic": "Cold Weather Operations",
      "question": "What is the definition of a contaminated runway?",
      "options": [
        "a. More than 25% of a third of the runway is covered with water deposits.",
        "b. More than 50% of a third of the runway is covered with water deposits.",
        "c. More than 75% of a third of the runway is covered with water deposits.",
        "d. More than 25% of the runway is covered with water deposits."
      ],
      "correct_answer": 0,
      "correct_answer_indication": "More than 25% of a third of the runway is covered with water deposits.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMC_005",
      "section": "Closed Book",
      "manual": "OMC",
      "reference": "OMC 10.4.1.1",
      "topic": "Cold Weather Operations",
      "question": "When flying to an airport on altimeter setting and the OAT is -30c at the airfield. Which altitudes need to be corrected for temperature?",
      "options": [
        "a. MEA/MH/MGA? Minimum obstacle",
        "b. Missed approach altitude and engine acceleration altitude.",
        "c. Approach minimum, initial fix, intermediate fix and final fix.",
        "d. All of the above"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All of the above",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMC_006",
      "section": "Closed Book",
      "manual": "OMC",
      "reference": "OMC 10.4.1.1",
      "topic": "Cold Weather Operations",
      "question": "What do you apply temp correction to if the airfield (or ISA) temp is -30 degrees?",
      "options": [
        "a. Min en-route alt MEA / Min Holding Alt MH / Min Grid Alt MGA / Min Obstacle / Obstruction Alt MOCA",
        "b. Missed approach altitude and engine acceleration altitude.",
        "c. Approach minimum, initial fix, intermediate fix and final fix.",
        "d. All of the above"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All of the above",
      "source_notes": "NOTE: Not ATC Cleared ALT: ( In the EXAM I think the correct answer is ALL OF THE ABOVE) ",
      "citation": "[21]"
    },
    {
      "id": "CB_OMC_007",
      "section": "Closed Book",
      "manual": "OMC",
      "reference": "OMC 10.3.6",
      "topic": "Cold Weather Operations",
      "question": "What shall be done once minimum holdover time elapses?",
      "options": [
        "a. Return to the gate",
        "b. PCI is mandatory",
        "c.  Repeat anti and de-icing",
        "d. CSI is mandatory"
      ],
      "correct_answer": 1,
      "correct_answer_indication": "PCI is mandatory",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMC_008",
      "section": "Closed Book",
      "manual": "OMC",
      "reference": "OMC 1.1.5/GOM-annexes-annex B-1.2.5",
      "topic": "Ground operations",
      "question": "How long do the crew need to be onboard prior to departure?",
      "options": [
        "a. As long as needed to perform the required duties",
        "b. Cabin Crew 1 hour, Flight Deck 40 mins",
        "c. STD-55",
        "d. STD-60"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Cabin Crew 1 hour, Flight Deck 40 mins",
      "source_notes": "Note recent feedback says STD-60 was NOT an option. Suggest you go with old answer for now. ",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_021",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.2.2",
      "topic": "Ground operations",
      "question": "When do the crew need to be on board the aircraft?",
      "options": [
        "a. 60 mins for Cabin Crew and 40 mins for Flight Crew",
        "b. As early as they can manage to be on board",
        "c. At least one Flight Crew member and cabin crew shall be on board whenever the passengers are embarking or disembarking or are on board.",
        "d. STD-55"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "At least one Flight Crew member and cabin crew shall be on board whenever the passengers are embarking or disembarking or are on board.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_022",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 7.6.1",
      "topic": "[Flight Duty Period]",
      "question": "When does the FDP start and end?",
      "options": [
        "a. Dubai 1h25min to chocks on / Outstation 1h to chocks on",
        "b. Dubai 1h30min to chocks on / Outstation 1h to chocks on",
        "c. Dubai 1h25min to chocks on / Outstation 1h05min to chocks on",
        "d. Dubai 1h40min to chocks on / Outstation 1h05min to chocks on"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Dubai 1h25min to chocks on / Outstation 1h05min to chocks on",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_023",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 7.7.1/7.7.2/7.15",
      "topic": "[Flight Duty Period]",
      "question": "When can FDP’s be legally extended?",
      "options": [
        "a. Inflight relief",
        "b. Split duty",
        "c. Commander’s discretion",
        "d. All the above"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All the above",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_024",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 7.7.1.3",
      "topic": "[Flight Duty Period]",
      "question": "What FDP should be recorded in your personal logbook?",
      "options": [
        "a. A nominated Captain and FO 100%",
        "b. Augmenting crew their actual operating times on the VR.",
        "c. Both A and B",
        "d. All crew 100% of their operating times"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Both A and B",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_025",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 7.5",
      "topic": "[Flight Duty Period]",
      "question": "For the purpose of flight duty limit what is the definition of being acclimatized?",
      "options": [
        "a. When they have 3 local nights on ground within 2 hour time band",
        "b. When they have 2 local nights on ground within 3 hour time band",
        "c. When they have 3 local nights on ground within 2 hour time",
        "d. Three days off"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "When they have 3 local nights on ground within 2 hour time band",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_026",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 7.2/7.3",
      "topic": "[Flight Duty Period]",
      "question": "Who is responsible for making sure the FTL scheme is monitored?",
      "options": [
        "a. Crew Member",
        "b. Emirates Airline",
        "c. GCAA",
        "d. Answer A & B"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "Answer A & B",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_008",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCTM-PRO-AEP-Misc-Emergency Descent",
      "topic": "Abnormal Procedures",
      "question": "What are the initial actions of the PF during an Emergency Descent?",
      "options": [
        "a. PA announce, Call ATC",
        "b. Set 7700…",
        "c. Crew Oxy Masks… ON / Signs: ON / Descent: Initiate / Heading Bug: PULL / Speed Bug: SET MAX APPROPRIATE / Confirm THR IDLE / SPD BRK LVR: Full",
        "d. CREW OXY MASK……………ON / SIGNS…ON/FMA MONITOR"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Crew Oxy Masks… ON / Signs: ON / Descent: Initiate / Heading Bug: PULL / Speed Bug: SET MAX APPROPRIATE / Confirm THR IDLE / SPD BRK LVR: Full",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_009",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-ABN-MISC-EMER DESCENT",
      "topic": "Abnormal Procedures",
      "question": "What are the immediate actions (memory items) for emergency descent?",
      "options": [
        "a. Emerg PA……………announce Signs………………..on Descent……………initiate Thrust……………….check idle Speed Brake…………full",
        "b. Crew Mask……………on Emerg Pa………………..on Descent……………initiate Speed Brake…………full",
        "c. Emerg PA……………announce Mask………………..on Signs………………..on Descent……………initiate Speed Brake…………full",
        "d. Crew Mask……………on Signs………………..on Descent……………initiate Thrust……………….check idle Speed Brake…………full"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "Emerg PA……………announce Mask………………..on Signs………………..on Descent……………initiate Speed Brake…………full",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_010",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-ABN-CAB PRESS-CAB PRESS EXC-CABALT",
      "topic": "Abnormal Procedures",
      "question": "When must the flight crew press the MASK MAN ON pb?",
      "options": [
        "a. 14,000ft",
        "b. 10,000ft",
        "c. 8,000ft",
        "d. Whenever the pilot thinks"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "14,000ft",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_027",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.3.20.2.27",
      "topic": "Flight Procedures",
      "question": "What are the required conditions to perform an Orbit?",
      "options": [
        "a. In Day VMC, whilst maintaining constant visual contact with terrain, & above 1500ft agl with the autopilot engaged",
        "b. In Day VMC, whilst maintaining constant visual contact with terrain, & above 2500ft agl with the autopilot engaged",
        "c. In Day VMC, whilst maintaining constant visual contact with terrain, & above 1000ft agl with the autopilot disengaged",
        "d. Whenever the pilot thinks it's suitable"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "In Day VMC, whilst maintaining constant visual contact with terrain, & above 1500ft agl with the autopilot engaged",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_028",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.3.14",
      "topic": "Incapacitation",
      "question": "Incapacitation should be suspected when there has been no response to?",
      "options": [
        "a. Two verbal communications when above 1000ft AGL",
        "b. One verbal communication when below 1000ft AGL",
        "c. Any verbal communication associated with significant deviation from the intended flight path",
        "d. All the above."
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All the above.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_011",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-ABN-MEMORY ITEMS",
      "topic": "Memory Items",
      "question": "What is the correct action if you get TAWS CAUTION?",
      "options": [
        "a. If runway in sight continue to land",
        "b. Immediately execute PULL UP TOGA",
        "c. It can be treated the same as a caution if in daylight and VMC with the terrain/obstacle clearly identified.: FLIGHT PATH ADJUST",
        "d. All the above."
      ],
      "correct_answer": 2,
      "correct_answer_indication": "It can be treated the same as a caution if in daylight and VMC with the terrain/obstacle clearly identified.: FLIGHT PATH ADJUST",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_012",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-ABN-MEMORY ITEMS",
      "topic": "Memory Items",
      "question": "What is the correct action if you get GPWS WARNING in Daylight in VMC conditions?",
      "options": [
        "a. Discuss action with the other pilot.",
        "b. Immediately execute a Go Around.",
        "c. PULL UP TOGA (Memory Items because it’s a TAWS WARNING not CAUTION)",
        "d. It can be treated the same as a caution if in day VMC and terrain in sight GPWS Caution flight path adjust."
      ],
      "correct_answer": 3,
      "correct_answer_indication": "It can be treated the same as a caution if in day VMC and terrain in sight GPWS Caution flight path adjust.",
      "source_notes": "NOTE: With the introduction of the FCI regarding GNSS failure you can ignore the warning if VMC and insight of the ground",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_029",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.3.20.3.6.2",
      "topic": "Flight Procedures",
      "question": "For a Non-standard Engine Out turning procedure when do you initiate the acceleration?",
      "options": [
        "a. The aeroplane is established on the final heading, track or course of the Non-Standard engine out procedure and at or about the minimum acceleration height.",
        "b. At or above the applicable MSA",
        "c. The aeroplane meets the specific requirements described in the applicable Non-standard engine out procedure.",
        "d. All of the above."
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All of the above.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_030",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 10.5.4.4.3",
      "topic": "Emergency Procedures",
      "question": "What are the initial actions when you receive a RED BOMB alert whilst flying?",
      "options": [
        "a. Contact SMNC",
        "b. Follow the procedure contained in the FCOM/QRH",
        "c. Make a PA: “This is the captain Purser to the Flight Deck”",
        "d. Both B and C are correct."
      ],
      "correct_answer": 1,
      "correct_answer_indication": "Follow the procedure contained in the FCOM/QRH",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_013",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-BRK-BRAKE MODES-PARK BRK",
      "topic": "Brake",
      "question": "On which landing gear does the system apply pressure when the Parking Brake lever is set to ON?",
      "options": [
        "a. WLG",
        "b. BLG",
        "c. WLG and BLG",
        "d. Depends on the position of the Parking Brake actuator valve."
      ],
      "correct_answer": 1,
      "correct_answer_indication": "BLG",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_014",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-DSC-32-System Description-Braking System-Architecture-Architecture-Emergency Braking Control Unit",
      "topic": "Brake",
      "question": "The EBCU (Emergency Brake Control Unit) receives electrical signal commands from the flight crew via?",
      "options": [
        "a. Brake pedals and Parking brake handle",
        "b. Brake Pedals only",
        "c. Parking brake handle only",
        "d. Depends on the position of the Parking Brake actuator valve."
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Brake pedals and Parking brake handle",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_015",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-DSC-32-System Description-Landing Gear Extension and Retraction System-Architecture-Hydraulic Power Supply",
      "topic": "Landing Gear",
      "question": "Which system is taking care of the WLG retraction?",
      "options": [
        "a. Green",
        "b. Green and Yellow",
        "c. Yellow",
        "d. The LGERS"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Green",
      "source_notes": "NOTE: Very close to the EXAM question",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_016",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-DSC-32-System Description-Braking System-Architecture-Architecture-Emergency Brake Control Unit",
      "topic": "Brake",
      "question": "The EBCU (Emergency Brake Control Unit) controls Ultimate braking on the?",
      "options": [
        "a. WLG Brakes",
        "b. BLG Brakes using the Parking Brake handle",
        "c. BLG Brakes",
        "d. BLG and WLG Brakes using the Parking Brake handle"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "WLG Brakes",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_017",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-LIM-Landing Gear-Maximum Altitude with Landing Gear Extended",
      "topic": "Landing Gear",
      "question": "When can you use the gears on an emergency descent?",
      "options": [
        "a. Max altitude for landing gear extension is 21,000ft",
        "b. Maximum speed for landing gear extension is VLO 250kts / 0.55",
        "c. Never the less in the case of emergency, respecting the M0.55 speed limitation the flight crew can extend the landing gear if necessary above 21,000ft",
        "d. All the above."
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All the above.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_018",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-LIM-Landing Gear-Maximum Altitude with Landing Gear Extended",
      "topic": "Landing Gear",
      "question": "What are limitations to extend landing gear in emergency?",
      "options": [
        "a. Max altitude for L/G extension is 21,000ft",
        "b. Max altitude for L/G extension is 21,000ft and max speed is VLO",
        "c. Max speed is VLO",
        "d. In an Emergency Descent the L/G can be used without any restrictions."
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Max speed is VLO",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_019",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-DSC-34-32-ROW/ROP-Operations-ROW and ROP Operational Description",
      "topic": "Landing Gear",
      "question": "When landing with manual brakes if the ROP activates will it apply any braking?",
      "options": [
        "a. NO: Aural Warning “MAX BRAKING” will trigger until max brakes is applied",
        "b. YES: Aural Warning “MAX BRAKING” will trigger ",
        "c. YES: Aural Warning “MAX BRAKING” will trigger until max brakes AND MAX REVERSE is applied",
        "d. NO: Aural Warning “MAX BRAKING” will trigger until max brakes AND MAX REVERSE is applied"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "NO: Aural Warning “MAX BRAKING” will trigger until max brakes is applied",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCTM_002",
      "section": "Closed Book",
      "manual": "FCTM",
      "reference": "FCTM-PR-AEP-NAV",
      "topic": "Navigation",
      "question": "When should you apply Unreliable Speed Procedure if the safe conduct of the flight is impacted?",
      "options": [
        "a. If the flight crew has any doubt on the current airspeed indications.",
        "b. When speed on the PFD differs from the Standby Instrument.",
        "c. ",
        "d. "
      ],
      "correct_answer": 0,
      "correct_answer_indication": "If the flight crew has any doubt on the current airspeed indications.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_020",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-ABN-NAV-Unreliable Airspeed Indication",
      "topic": "Navigation",
      "question": "What are the pitch and thrust settings for unreliable airspeed at any altitude?",
      "options": [
        "a. < 10,000’ 12.5 degrees TOGA (and after THR RED ALT>>>MCT)",
        "b. >10,000’ and 25,000’ 10 degrees CLB,",
        "c. >25,000’ 5 degrees CLB,",
        "d. All above are correct"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All above are correct",
      "source_notes": "NOTE: After THR RED If DCLB is engaged set all THR LEVERs to MCT and then CLB to cancel DeRate",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_030",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.1.3.1.6 & 8.1.6.1",
      "topic": "Policy",
      "question": "When are 2 Destination Alternates required?",
      "options": [
        "a. No meteorological information available",
        "b. Weather below minimum at destination +-1hr of ETA",
        "c. Aerodrome not suitable for A/C type.",
        "d. A and B correct"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All above are correct",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_031",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.1.3.1.6 & 8.1.6.1",
      "topic": "Policy",
      "question": "When do you need 2 Alternates?",
      "options": [
        "a. No meteorological information available",
        "b. Tempo TS and weather below planned minima +/- 1hr of ETA",
        "c. Tempo Fog and weather below planned minima +/- 1hr of ETA",
        "d. A and C correct"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "A and C correct",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_032",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.1.3.1.1",
      "topic": "Policy",
      "question": "What are the applicable planning minima for Takeoff alternates?",
      "options": [
        "a. A take off alternate is required if the weather minimums at the departure airport are not equal or better than are required to return. The weather must be above the applicable landing minima +/- 1 hour ETA. (Using reports / forecasts or combination of. (OMA 8.1.2.1.4.1)",
        "b. Within two hours of flight time (equal to 950 nm for a A380) at a one engine inoperative speed in still air conditions based on the actual take off weight.",
        "c. All above are correct.",
        "d. None are correct"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "All above are correct",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_033",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.1.3.1.1?8.1.6",
      "topic": "Policy",
      "question": "What weather must you use within 2hrs of your destination?",
      "options": [
        "a. Actual weather and trend information may be used",
        "b. Forecast weather may be used",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Actual weather and trend information may be used",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_034",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.1.3.1.1",
      "topic": "Policy",
      "question": "What is the required visibility for circling minima?",
      "options": [
        "a. Visibility is the HIGHER OF 5,000m OR THE PUBLISHED MINIMA. (Ceiling is The higher of 1,200 ft AAL or the charted Cat D minima rounded up by 200ft)",
        "b. Visibility is Published minima",
        "c. Visibility is 8km",
        "d. Visibility is 2km"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Visibility is the HIGHER OF 5,000m OR THE PUBLISHED MINIMA. (Ceiling is The higher of 1,200 ft AAL or the charted Cat D minima rounded up by 200ft)",
      "source_notes": "Note: This is an old question. Circling minima is now an Enhanced Coded Approach Procedure so none of the answers are correct as it is now charted minimums, but I have left this in for now awaiting feedback. Recent feedback now suggests the answer is b. Visibility is Published minima?? More feedback please",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_021",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-LIM-Aircraft General-Operational Parmeters-Airport Operations and Wind Limitations-Maximum wind for Cabin and Cargo Door Operation",
      "topic": "Limitations",
      "question": "What are the PAX (CABIN) door wind limitations when NOT into wind?",
      "options": [
        "a. 60 knots",
        "b. 25 knots",
        "c. 50 knots",
        "d. 40 knots"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "40 knots",
      "source_notes": "NOTE: 50kts when nose is into wind",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_022",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-22-FG-Controls and Indicators-FMA-FMA-A/THR Messages and Modes (Column 1)",
      "topic": "Autoflight",
      "question": "In case of a go around with an engine failure what flashes on the FMA if you select Soft Go Around?",
      "options": [
        "a. LVR TOGA",
        "b. LVR CLB",
        "c. MAN SOFT G/A",
        "d. SPFT G/A as soft go around is still available with one engine inoperative. NOTE: No soft mode with engine failure"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "LVR TOGA",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_023",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-20-FG-60",
      "topic": "Autoflight",
      "question": "If during a go around you don’t see MAN GA SOFT or MAN TOGA on the FMA what is your immediate action?",
      "options": [
        "a. Change the Autopilot selection and recycle the A/THR",
        "b. Manually put the thrust levers in the TOGA detent",
        "c. Prepare to manually control thrust",
        "d. Recycle the A/THR button"
      ],
      "correct_answer": 1,
      "correct_answer_indication": "Manually put the thrust levers in the TOGA detent",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_024",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-NOR-SOP-GA",
      "topic": "Autoflight",
      "question": "If during a go around you don’t see MAN GA SOFT or MAN TOGA on the FMA what is your immediate action?",
      "options": [
        "a. Change the Autopilot selection and recycle the A/THR",
        "b. Manually put the thrust levers in the TOGA detent",
        "c. Prepare to manually control thrust",
        "d. Recycle the A/THR button"
      ],
      "correct_answer": 1,
      "correct_answer_indication": "Manually put the thrust levers in the TOGA detent",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_035",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 1.1.1",
      "topic": "Policy",
      "question": "If company regulations violate national or international rules or regulations which, should you follow?",
      "options": [
        "a. Company policies",
        "b. International laws",
        "c. National laws",
        "d. B and C"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "B and C",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_036",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 1.1.1",
      "topic": "Policy",
      "question": "Which law must be applied onboard an EK aircraft outside UAE airspace?",
      "options": [
        "a. You must comply with the law of the state you are operating in.",
        "b. National Rule",
        "c. International Rule",
        "d. UAE CAR Rule"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "You must comply with the law of the state you are operating in.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_025",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-22-FG-Autothrust-Scenario Examples-From Soft Go-Around to Thrust Reduction",
      "topic": "Autoflight",
      "question": "What is the targeted vertical speed when soft go-around thrust is applied?",
      "options": [
        "a. 3000 ft/min",
        "b. 2000 ft/min",
        "c. 1500 ft/min",
        "d. 2000 ft/min or 4 degrees if in TRK/FP A mode"
      ],
      "correct_answer": 1,
      "correct_answer_indication": "2000 ft/min",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_026",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-20-Description-Ground Clearance Diagram",
      "topic": "Tailstrike",
      "question": "What pitch will most likely give you a tail strike when the landing gear is compressed?",
      "options": [
        "a. 12.1. degrees",
        "b. 13.5 degrees (this is wrong because it when LG is extended)",
        "c. 9.5 degrees",
        "d. 11.5 degrees"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "11.5 degrees",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_027",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-20-Description-Ground CLearance Diagram",
      "topic": "Tailstrike",
      "question": "What bank angle will cause a wingtip or engine to scrape the ground on take off or landing?",
      "options": [
        "a. 8 degrees",
        "b. 6 degrees",
        "c. 5 degrees",
        "d. 7 degrees"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "7 degrees",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_037",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.1.2.1/OMC 12.1",
      "topic": "Policy",
      "question": "Where will you find the list of airport categories?",
      "options": [
        "a. OMC",
        "b. OMA",
        "c. OMD",
        "d. OME"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "OMC",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_038",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.5.1.6",
      "topic": "Policy",
      "question": "What makes a suitable aerodrome?",
      "options": [
        "a. Enroute wx planning min ceiling + visibility are met",
        "b. Forecast crosswind within limits including gusts",
        "c. Runway conditions suitable for a safe landing",
        "d. All the above"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All the above",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_GOM_001",
      "section": "Closed Book",
      "manual": "GOM",
      "reference": "GOM Chapter 13; 27.1",
      "topic": "Cargo",
      "question": "Which cargo has HIGHEST priority (gets offloaded last if weight restricted)?",
      "options": [
        "a. Animals",
        "b. International mail",
        "c. Food or perishables",
        "d. SkyCargo cargo"
      ],
      "correct_answer": 1,
      "correct_answer_indication": "International mail",
      "source_notes": "NOTE: International mail has loading priority over all other cargo, and will be offloaded only after all other cargo, in the event of a flight being weight restricted. Also due to GOM update “International mail” has now changed to “EMIRATES COMPANY MAIL”. However not sure if the question in the exam has been updated",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_039",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 9.10/9.10.2",
      "topic": "Dangerous Goods",
      "question": "Which aircraft hold(s) can be used for transportation of DG?",
      "options": [
        "a. Only the aft hold.",
        "b. In all the cargo holds, but the bulk is forbidden.",
        "c. Only the forward hold.",
        "d. Any hold"
      ],
      "correct_answer": 1,
      "correct_answer_indication": "In all the cargo holds, but the bulk is forbidden.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_040",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.1.11.2",
      "topic": "Ground Procedures",
      "question": "Under what conditions may a commander accept an aircraft without a CRS (Certificate of Release to Service) being issued?",
      "options": [
        "a. A CRS is NOT required in a case of NIL DEFECTS in the TECH LOG",
        "b. Never",
        "c. Always",
        "d. On Captains discretion"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "A CRS is NOT required in a case of NIL DEFECTS in the TECH LOG",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_041",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.1.11.2",
      "topic": "Ground Procedures",
      "question": "When is a CRS required?",
      "options": [
        "a. When a defect is entered into the Tech Log a CRS is required to revalidate the CofA. If a defect is entered into a Tech Log and the defect has been actioned a CRS MUST be issued",
        "b. Never",
        "c. Always",
        "d. On Captains discretion"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "When a defect is entered into the Tech Log a CRS is required to revalidate the CofA. If a defect is entered into a Tech Log and the defect has been actioned a CRS MUST be issued",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_042",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.3.20.2.27",
      "topic": "Flight Procedures",
      "question": "Which one below is the stabilization criteria for visual circuit?",
      "options": [
        "a. Wings level by 300ft AAL",
        "b. Wings level by 400ft AAL",
        "c. Same as other approaches with cut off platform lowered to 500ft AAL",
        "d. Wings level by 350ft AAL"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Wings level by 300ft AAL",
      "source_notes": "NOTE: This question has come up several times and looks like it’s a throwback to the old OMA, in which case the answer would be ‘a’. However, more feedback is required to confirm this, so I’ve not BOLD any answer.",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_043",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.3.20.2.27",
      "topic": "Flight Procedures",
      "question": "Which of the following is NOT a stabilisations criteria?",
      "options": [
        "a. Speed between Vref +20/-5",
        "b. Landing gear down and locked at 1,000ft.",
        "c. Thrust setting appropriate for the aeroplane configuration",
        "d. Speedbrakes not deployed below 1,000ft AAL."
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Speed between Vref +20/-5",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_028",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-ABN-ECAM-10-34-10 NAV IR1(2)(3) FAULT",
      "topic": "Navigation",
      "question": "With NAV IR 1(2)(3) fault, can IR be recovered at ATT mode if no ATT info showing?",
      "options": [
        "a. Yes. Turn IR 1(2)(3) MODE selector off for 3 mins then ATT",
        "b. It cannot be recovered in any mode",
        "c. Yes. Before setting IR to off, flight crew can try to recover the IR in ATT MODE. Set the IR 1(2)(3) MODE selector to OFF for 10secs then ATT mode.",
        "d. Yes. Before setting the IR off, the flight crew can try to recover IR in ATT mode. Set IR 1(2)(3) MODE selector to OFF mode."
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Yes. Before setting IR to off, flight crew can try to recover the IR in ATT MODE. Set the IR 1(2)(3) MODE selector to OFF for 10secs then ATT mode.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_029",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-NOR-SUPP-EK-Pushback using Portable Towbar",
      "topic": "Navigation",
      "question": "What is the approximate weight of the 380 towbar?",
      "options": [
        "a. 150kg",
        "b. Approximately 80kg",
        "c. Depends on aircraft types.",
        "d. 250 kg"
      ],
      "correct_answer": 1,
      "correct_answer_indication": "Approximately 80kg",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_030",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-29-System Description-Hydralic Generation-Electric Pumps",
      "topic": "Hydraulics",
      "question": "Hydraulic electric pumps operate automatically?",
      "options": [
        "a. Cargo door operation only",
        "b. BWS operation only",
        "c. Both cargo door and BWS operation",
        "d. Something else not relevant"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Both cargo door and BWS operation",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_031",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-System Description-System Architecture-ECB",
      "topic": "APU",
      "question": "What is the function of the ECB, (Electronic Control Box)?",
      "options": [
        "a. It monitors and controls the operation of the APU, and displays the applicable information of the ECAM",
        "b. Monitors the N1, N2 and EGT of the APU as well as other parameters.",
        "c. Sequences and monitors the APU Start.",
        "d. All of the above"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All of the above",
      "source_notes": "NOTE: There is a questions in the OPEN BOOK section on ECB’s where is lists all the monitors and controls but one of the answers is wrong. But as it’s an open book question you can look it up",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_032",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-NOR-SOP-Descent Preparation",
      "topic": "Brake",
      "question": "BTV may be used when the difference between the OANS and charted runway lengths is less than?",
      "options": [
        "a. 15m",
        "b. 35m",
        "c. 50m",
        "d. 150m"
      ],
      "correct_answer": 1,
      "correct_answer_indication": "35m",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_032",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-27-Slats/Flaps-Controls and Indicators-Slats/Flaps Display-Flaps Lever Position",
      "topic": "Flight Controls",
      "question": "Flap lever position FULL in CYAN Blue indicates?",
      "options": [
        "a. Slats/Flaps have reached the selected position",
        "b. Indicates the selected slats configuration",
        "c. Indicates the selected configuration FULL",
        "d. Indicates the selected flap configuration"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Indicates the selected configuration FULL",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_032",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-22-27-Protections-Low Energy Protection",
      "topic": "Autoflight",
      "question": "In manual flight at 3000’ and below VLS but above Alpha Prot what warning will you get?",
      "options": [
        "a. SPEED SPEED SPEED",
        "b. GO AROUND FLAPS",
        "c. None as LOW ENERGY warning is only available below 2500’",
        "d. None"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "None as LOW ENERGY warning is only available below 2500’",
      "source_notes": "NOTE: This is an old question. LOW ENERGY WARNING is now available at ALL ALTs and ALL CONFIGs as long as the AUTOPILOT is ON",
      "citation": "[21]"
    },
    {
      "id": "CB_LIDO_001",
      "section": "Closed Book",
      "manual": "LIDO",
      "reference": "LIDO 1.5.9",
      "topic": "Regulations",
      "question": "What are the RVSM applicable levels?",
      "options": [
        "a. FL290 – FL410 inclusive",
        "b. FL290 – FL410 exclusive",
        "c. FL200 – FL400 inclusive",
        "d. FL200 – FL400 exclusive"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "FL290 – FL410 inclusive",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_LIDO_002",
      "section": "Closed Book",
      "manual": "LIDO",
      "reference": "LIDO 1.5.9.4",
      "topic": "Regulations",
      "question": "In RVSM conditions the ATC must be informed when?",
      "options": [
        "a. Loss of GPS",
        "b. Loss of one or more altimeter sources.",
        "c. Loss of one Auto pilot",
        "d. Moderate turbulence resulting in a height loss of 200ft"
      ],
      "correct_answer": 1,
      "correct_answer_indication": "Loss of one or more altimeter sources.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_033",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-Performance-Takeoff-Takeoff Optimization Conditions-Airport/Runway-Operations on Runway + Shoulders less than 58 m wide",
      "topic": "Performance",
      "question": "If the R/W width plus the shoulders is less than 58m is the Perf Penalty taken into account for the computation when this is displayed?",
      "options": [
        "a. Yes",
        "b. No",
        "c. Yes but only for WET Runways.",
        "d. Moderate turbulence resulting in a height loss of 200ft"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Yes",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_034",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-LIM-Aircraft General-Speeds-Windshield Wipers Maximum Speed",
      "topic": "Limitations",
      "question": "Windshields each have a two-speed electric wiper, limited to a maximum speed of?",
      "options": [
        "a. 210kts",
        "b. 250kts",
        "c. 300kts",
        "d. No limitation"
      ],
      "correct_answer": 1,
      "correct_answer_indication": "250kts",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_035",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-Rain Removal-System Description-Wipers/LIM-Aircraft General-Speeds-Windshield Wipers Maximum Speed",
      "topic": "Ice and Rain Protection",
      "question": "When can you operate the windshield wipe?",
      "options": [
        "a. Taxi",
        "b. Take-off with a max speed of 250kts",
        "c. Holding, Approach and landing with a max speed of 250kts",
        "d. All of the above"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All of the above",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_036",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-30-Rain Removal-System Description-Wipers",
      "topic": "Ice and Rain Protection",
      "question": "When can you operate the windshield wipe?",
      "options": [
        "a. Takeoff, Approach and landing only",
        "b. Take-off with a max speed of 300kts",
        "c. During landing only",
        "d. During taxi, take-off, holding approach and landing"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "During taxi, take-off, holding approach and landing",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_GOM_002",
      "section": "Closed Book",
      "manual": "GOM",
      "reference": "GOM",
      "topic": "Responsibilities",
      "question": "What is the commander NOT responsible for?",
      "options": [
        "a. Calculated weights do not exceed structural limits to take off, landing and ZFW",
        "b. Number of crew shown is correct",
        "c. Aeroplane does not exceed limits after LMC",
        "d. Freight has been loaded in accordance with the trim sheet"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "Freight has been loaded in accordance with the trim sheet",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_037",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM TBC",
      "topic": "Runway length",
      "question": "If RWY length is reduced what do you check and from where?",
      "options": [
        "a. Check Performance software distances against those published in the NOTAM or AIP Supplement",
        "b. Check the runway length is published in the AIP Supplement",
        "c. Check the runway length is published in the NOTAM",
        "d. Check the runway length is published in the charts"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Check Performance software distances against those published in the NOTAM or AIP Supplement",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_038",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-22-FG-30-40 Automatic disengagement",
      "topic": "Autoflight",
      "question": "In which mode will the A/THR mode engage if FD’s are disengaged?",
      "options": [
        "a. TOGA LK",
        "b. Speed / Mach",
        "c. A/THR will disconnect",
        "d. Climb"
      ],
      "correct_answer": 1,
      "correct_answer_indication": "Speed / Mach",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_039",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-22-FG-Controls and Indicators-FMA-FMA-AP/FD Vertical Modes (Column 2)",
      "topic": "Autoflight",
      "question": "What does it mean if the autopilot is in PROT mode and you see a flashing orange box around the VS mode?",
      "options": [
        "a. The auto pilot can maintain the vertical mode guidance",
        "b. The autopilot cannot maintain the vertical guidance mode",
        "c. ",
        "d. "
      ],
      "correct_answer": 1,
      "correct_answer_indication": "The autopilot cannot maintain the vertical guidance mode",
      "source_notes": "NOTE: This is a new question so I need more information on it",
      "citation": "[21]"
    },
    {
      "id": "CB_FCOM_040",
      "section": "Closed Book",
      "manual": "FCOM",
      "reference": "FCOM-LIM-22-30?FCOM-PRO-NOR-SOP-Approach-Approach Guidance Management-Approach Using LOC G/S Guidance-Initial/Intermediate Approach",
      "topic": "Autoflight",
      "question": "Should both Autopilots be engaged for GLS autoland?",
      "options": [
        "a. Yes",
        "b. No",
        "c. Not Allowed",
        "d. Only one can be engaged for GLS"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Yes",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_044",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 4.1.4",
      "topic": "Policy",
      "question": "What is the restriction on two inexperienced crew members flying together?",
      "options": [
        "a. 28 flights",
        "b. 35 days",
        "c. 45 flights",
        "d. 3 months"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "3 months",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_RAIG_001",
      "section": "Closed Book",
      "manual": "RAIG",
      "reference": "RAIG F2.1?",
      "topic": "Policy",
      "question": "Under which circumstances must a commander consider a diversion to a safe and acceptable aerodrome (Which of the following is LAND ANSA)?",
      "options": [
        "a. Fire on board and firefighting effectively",
        "b. ENG fail on 2 ENG aircraft",
        "c. Autopilot failure",
        "d. Communication failure"
      ],
      "correct_answer": 1,
      "correct_answer_indication": "Fire on board and firefighting effectively",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_045",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.3.20.1.7",
      "topic": "Policy",
      "question": "When can a Captain not allow the FO to taxi the aircraft?",
      "options": [
        "a. When the taxiway is wet",
        "b. When the parking guidance system is aligned to the left seat",
        "c. When 180 degree turn is required",
        "d. B & C are correct."
      ],
      "correct_answer": 3,
      "correct_answer_indication": "B & C are correct.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_046",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.2.3.2.1",
      "topic": "Policy",
      "question": "Who can the captain call If there is a medical issue with PAX during check in / boarding?",
      "options": [
        "a. Ground Medical Support",
        "b. Aerodrome Medical Clinic",
        "c. An Emirates doctor, contactable through the Network Operations.",
        "d. All of the above"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All of the above",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_047",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 8.1.8.6.2",
      "topic": "Policy",
      "question": "What do you check after there is a change to the LMC?",
      "options": [
        "a. ZFW / TOW / LW limits are not exceeded (Structural and Perf).",
        "b. Check MAC within 2.4%",
        "c. Inform load control",
        "d. A & B"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "ZFW / TOW / LW limits are not exceeded (Structural and Perf).",
      "source_notes": "NOTE: You must also check T/O Perf is validated with new wts and loading limits are not exceeded",
      "citation": "[21]"
    },
    {
      "id": "CB_FCI_001",
      "section": "Closed Book",
      "manual": "FCI",
      "reference": "FCI 2024-21/FCOM-PRO-NOR-SUP-GPS Interference-Enroute-After the Interference Area",
      "topic": "GPS Interference",
      "question": "What would you do if the Clock is set to INT when entering oceanic airspace?",
      "options": [
        "a. Contact Dispatch.",
        "b. Inform ATC.",
        "c. ADS C will show clock at INT.",
        "d. You must set clock to GPS when GPS 1 is unavailable"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Contact Dispatch.",
      "source_notes": "NOTE: Very close to the EXAM question",
      "citation": "[21]"
    },
    {
      "id": "CB_OMA_048",
      "section": "Closed Book",
      "manual": "OMA",
      "reference": "OMA 6.1.1",
      "topic": "Policy",
      "question": "How many hours before any duty you can’t drink alcohol?",
      "options": [
        "a. 8hrs",
        "b. 12hrs",
        "c. 10hrs",
        "d. 15hrs"
      ],
      "correct_answer": 1,
      "correct_answer_indication": "12hrs",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_041",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-49-System Description-System Architecture-APU Generators",
      "topic": "Electrics",
      "question": "Is the APU KVA same as Engine gen KVA?",
      "options": [
        "a. They are identical and interchangeable",
        "b. The APU = 150KVA",
        "c. They are the same KVA but not interchangeable",
        "d. The APU has a lower KVA"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "The APU has a lower KVA",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_042",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-49-System Description-System Architecture-Oil System",
      "topic": "APU",
      "question": "Can the flight crew operate the APU normally if the OIL LVL LO indication in green appears on the APU SD page?",
      "options": [
        "a. Yes, when the OIL LVL LO indication appears, the APU will continue to operate normally for at least 4h",
        "b. Yes, provide the APU Bleed is not switched on",
        "c. Yes, when the OIL LVL LO indication appears, the APU will continue to operate normally for at least 14h",
        "d. No, maintenance is required to check the APU oil level"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Yes, when the OIL LVL LO indication appears, the APU will continue to operate normally for at least 14h",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_043",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-24-System Description-AC Generation-APU Generators",
      "topic": "Electrics",
      "question": "Can an APU GEN replace an ENG GEN?",
      "options": [
        "a. Any APU generator can replace any engine generator (within the APU operational envelope). On ground, both APU generators can supply the entire aircraft network",
        "b. ",
        "c. ",
        "d. "
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Any APU generator can replace any engine generator (within the APU operational envelope). On ground, both APU generators can supply the entire aircraft network",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_044",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-49-Controls and Indicators-APU System Display-APU FU Indication",
      "topic": "APU",
      "question": "When does the APU FU (Fuel Used) reset?",
      "options": [
        "a. GND > APU FU automatically resets during: \na. 1st ENG start (if APU is running)\nb. Touchdown\nc. Last ENG shutdown (if APU is running)\nFLT>APU FU resets during the APU start",
        "b. GND > APU FU automatically resets during: \nd. 2nd ENG start (if APU is running)\n Touchdown\nLast ENG shutdown (if APU is running)\nFLT>APU FU resets during L\G down",
        "c. ",
        "d. "
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Any APU generator can replace any engine generator (within the APU operational envelope). On ground, both APU generators can supply the entire aircraft network",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_045",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-ABN-Nav-ADR1(2)(3) FAULT",
      "topic": "Electrics",
      "question": "How does ADR1(3) fault affect APU GEN operation?",
      "options": [
        "a. After landing, before last ENG shutdown > IR1(3) MODE SEL > OFF to recover connection to both APU GEN on the ground",
        "b. After landing, before last ENG shutdown > IR1 MODE SEL > OFF to recover connection to both APU GEN on the ground",
        "c. After landing, before last ENG shutdown > IR3 MODE SEL > OFF to recover connection to both APU GEN on the ground",
        "d. None of th above"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "After landing, before last ENG shutdown > IR1(3) MODE SEL > OFF to recover connection to both APU GEN on the ground",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_046",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-24-System Description-AC Generation-AC Generation-APU Generators",
      "topic": "Electrics",
      "question": "What is the result of ADR 1(3) failing in flight upon the APU generators?",
      "options": [
        "a. If ADR 1(3) fails in flight, ADR 1(3) sends the inflight information to the APU, even after landing. In this case, after landing the APU considers that the aircraft is still in flight and only powers one APU GEN.",
        "b. The APU start will be inhibited on ground",
        "c. ADR 1(3) sends the in-flight information to the APU GEN via ENG 1 GEN and all GENS operate as normal",
        "d. There is no effect on the APU generators"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "If ADR 1(3) fails in flight, ADR 1(3) sends the inflight information to the APU, even after landing. In this case, after landing the APU considers that the aircraft is still in flight and only powers one APU GEN.",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_047",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-ABN-NAV-Residual Speed",
      "topic": "Navigation",
      "question": "One ADR provides a residual speed when?",
      "options": [
        "a. 1 ADR fail and speed above 10kts",
        "b. 2 ADR fail and speed above 50kts",
        "c. 1 ADR provide a residual airspeed above 50kts while the other 2 ADRs operate correctly",
        "d. None of the above"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "1 ADR provide a residual airspeed above 50kts while the other 2 ADRs operate correctly",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_048",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-29-System Description-Hydraulic Distribution",
      "topic": "Hydraulics",
      "question": "Which Flight Control surfaces use both G + Y hydraulics?",
      "options": [
        "a. Outboard ailerons / Rudder / Elevators / Flaps / Trimmable Horizontal Stabilizer",
        "b. Inboard ailerons / Elevators / Flaps / Trimmable Horizontal Stabilizer",
        "c. Ailerons / Elevators / Flaps / Trimmable Horizontal Stabilizer",
        "d. None of the above"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Outboard ailerons / Rudder / Elevators / Flaps / Trimmable Horizontal Stabilizer",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_049",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-24-System Description-Overview-DC Generation-Transformer Rectifiers",
      "topic": "APU",
      "question": "The APU is electrically supplied by?",
      "options": [
        "a. The APU starter is electrically supplied via the APU DC busbar, that is powered by the APU battery, OR the APU TR.",
        "b. The APU starter is electrically supplied via the APU DC busbar, that is powered by the APU battery, AND the APU TR",
        "c. ",
        "d. "
      ],
      "correct_answer": 0,
      "correct_answer_indication": "The APU starter is electrically supplied via the APU DC busbar, that is powered by the APU battery, OR the APU TR.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_050",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-32-System Description-Landing Gear Extension Retraction System-Landing Gear Extension Retraction Equipment-Body Landing Gear",
      "topic": "Hydraulics",
      "question": "Are the Pitch Trimmers actuators pressurized during flight?",
      "options": [
        "a. Permanently.",
        "b. For 2 min after takeoff.",
        "c. Not Permanently.",
        "d. Only during landing gear retraction"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Permanently.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_051",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-32-System Description-Braking System-braking Modes-Normal Braking Architecture",
      "topic": "Hydraulics",
      "question": "Which hydraulic system is used for BLG brakes?",
      "options": [
        "a. Blue",
        "b. Green",
        "c. Yellow",
        "d. None"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Yellow",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_052",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-29-System Description-Hydraulic Distribution",
      "topic": "Hydraulics",
      "question": "Which hydraulic system powers the WLG in normal braking mode?",
      "options": [
        "a. The WLG brakes are not hydraulically powered",
        "b. The Green and Yellow Hydraulic System power the brakes of the WLG",
        "c. The Green Hydraulic System powers the brakes of the WLG.",
        "d. The Yellow Hydraulic System powers the brakes of the WLG"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "The Green Hydraulic System powers the brakes of the WLG.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_053",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-29-System Description-Hydraulic Distribution",
      "topic": "Hydraulics",
      "question": "Which hydraulic system powers the BLG in normal braking mode?",
      "options": [
        "a. The WLG brakes are not hydraulically powered",
        "b. The Green and Yellow Hydraulic System power the brakes of the BLG",
        "c. The Yellow Hydraulic System powers the brakes of the BLG.",
        "d. The Green Hydraulic System powers the brakes of the BLG."
      ],
      "correct_answer": 2,
      "correct_answer_indication": "The Yellow Hydraulic System powers the brakes of the BLG.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_054",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-29-System Description-Hydraulic Generation-Engine Driven Pump",
      "topic": "Hydraulics",
      "question": "Regarding hydraulic engine driven pumps which is correct?",
      "options": [
        "a. Each hydraulic system is pressurized by four engine driven pumps, two per engine. The pumps of Engines 1 and 2 pressurize the GREEN hydraulic system and pumps of Engines 3 and 4 pressurize the YELLOW hydraulic system.",
        "b. Each hydraulic system is pressurized by two engine driven pumps, one per engine. The pumps of Engines 1 and 2 pressurize the GREEN hydraulic system and pumps of Engines 3 and 4 pressurize the YELLOW hydraulic system.",
        "c. Each hydraulic system is pressurized by four engine driven pumps, two per engine. The pumps of Engines 1 and 2 pressurize the YELLOW hydraulic system and pumps of Engines 3 and 4 pressurize the GREEN hydraulic system.",
        "d. Each hydraulic system is pressurized by two engine driven pumps, one per engine. The pumps of Engines 1 and 2 pressurize the YELLOW hydraulic system and pumps of Engines 3 and 4 pressurize the GREEN hydraulic system."
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Each hydraulic system is pressurized by four engine driven pumps, two per engine. The pumps of Engines 1 and 2 pressurize the GREEN hydraulic system and pumps of Engines 3 and 4 pressurize the YELLOW hydraulic system.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_055",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-29-Controls and Indicators-Hydraulic System Display-Reservoir Overheat",
      "topic": "Hydraulics",
      "question": "On the Hydraulic System Display, what Temp is associated with an “OVHT” indication (amber colour)?",
      "options": [
        "a. An amber OVHT is an indication that the reservoir temp is above 200C",
        "b. An amber OVHT is an indication that the reservoir temp is above 160C",
        "c. An amber OVHT is an indication that the reservoir temp is above 130C",
        "d. An amber OVHT is an indication that the reservoir temp is above 180C"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "An amber OVHT is an indication that the reservoir temp is above 130C",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_056",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-29-System Description-Hydraulic Generation-Engine Driven Pump",
      "topic": "Hydraulics",
      "question": "If only one engine-driven hydraulic pump is available, what is the result?",
      "options": [
        "a. Ailerons, elevators, rudders, and the THS switch to the other hydraulic system or to an electrical backup. Slats and flaps hydraulic motors are not available. Normal braking and nose wheel steering remain available",
        "b. Ailerons, elevators, rudders, and the THS switch to the other hydraulic system or to an electrical backup. Slats and flaps hydraulic motors and spoilers remain available. Landing gear retraction time is longer than in normal operation. Normal braking and nose wheel steering remain available",
        "c. Only Landing Gear gravity extension is available",
        "d. Landing gear retraction is not possible and nose wheel steering is not available."
      ],
      "correct_answer": 1,
      "correct_answer_indication": "Ailerons, elevators, rudders, and the THS switch to the other hydraulic system or to an electrical backup. Slats and flaps hydraulic motors and spoilers remain available Landing gear retraction time is longer than in normal operation Normal braking and nose wheel steering remain available",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_057",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-32-System Description-Braking System-Architecture-Alternate Hydraulic Power Supply",
      "topic": "Hydraulics",
      "question": "When do the Alternate Refill Valves (ARV) close?",
      "options": [
        "a. The ARV remains open during all phases of flight",
        "b. After any engine start",
        "c. 65 kt ground speed on take off",
        "d. At gear retraction"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "65 kt ground speed on take off",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_058",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-32-System Description-Steering System-Body Wheel Steering",
      "topic": "Hydraulics",
      "question": "The BWS activates when?",
      "options": [
        "a. Automatically when the NWS angle is higher than 20 degrees and the ground speed is less than 30kt",
        "b. Automatically when the NWS angle is higher than 30 degrees and the ground speed is less than 20kt",
        "c. Automatically when the NWS angle is higher than 10 degrees and the ground speed is less than 20kt",
        "d. Automatically when the NWS angle is higher than 20 degrees and the ground speed is less than 10kt"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Automatically when the NWS angle is higher than 200 and the ground speed is less than 30kt",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCTM_003",
      "section": "Open Book",
      "manual": "FCTM",
      "reference": "FCTM-PRO-AEP-FUEL",
      "topic": "Fuel",
      "question": "What calculation must the FPF (Fuel Penalty Factor) be added to?",
      "options": [
        "a. Trip Fuel",
        "b. Alternate Fuel",
        "c. Final Reserve",
        "d. Block Fuel"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Trip Fuel",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCTM_004",
      "section": "Open Book",
      "manual": "FCTM",
      "reference": "FCTM-PRO-AEP-FUEL",
      "topic": "Fuel",
      "question": "What is the minimum FPF (Fuel Penalty Factor) value for an ECAM alert?",
      "options": [
        "a. 2%",
        "b. 3%",
        "c. 4%",
        "d. 5%"
      ],
      "correct_answer": 1,
      "correct_answer_indication": "3%",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_059",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-ABN-FUEL-FQMS 1+2 FAULT",
      "topic": "Fuel",
      "question": "If both FQMS fail what remains available?",
      "options": [
        "a. Manual Transfer, Transfer pump and crossfeed pump control, transfer pump and crossfeed pump indication, and FOB, GW, GWCG is displayed",
        "b. Manual Transfer, Transfer pump and crossfeed pump control, transfer pump and crossfeed pump indication, and FOB, GW, GWCG is not available.",
        "c. FOB, GW, GWCG only",
        "d. Manual fuel transfers only"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Manual Transfer, Transfer pump and crossfeed pump control, transfer pump and crossfeed pump indication, and FOB, GW, GWCG is displayed",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCTM_005",
      "section": "Open Book",
      "manual": "FCTM",
      "reference": "FCTM-PRO-NOR-SOP-70-A LOADSHEET/FCOM-PRO-NOR-SOP-Before Pushback or Start/Before Pushback/Start Clearance-Loadsheet",
      "topic": "Fuel",
      "question": "What are the GWCG requirements after refueling?",
      "options": [
        "a. Within 1% and within FWD and AFT limit from the loadsheet",
        "b. Trim tank +/- 800 and within 1% from the loadsheet",
        "c. Within 5%",
        "d. Within 2%"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Within 1% and within FWD and AFT limit from the loadsheet",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_060",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-ABN-Fuel-Fuel FQMS1+2 Fault",
      "topic": "Fuel",
      "question": "If you have a FQMS 1+2 fault what GW accuracy is expected?",
      "options": [
        "a. +-7 tons",
        "b. +-2 tons",
        "c. +-5 tons",
        "d. +-10 tons"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "+-7 tons",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_061",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-NOR-SOP-Before Pushback or Start/Before Pushback/Start Clearance-Loadsheet",
      "topic": "Fuel",
      "question": "The trim tank tolerance is?",
      "options": [
        "a. Within 400kg, 1% of the ECAM GWCG and within FWD and AFT limit from the loadsheet.",
        "b. Within 800kg, 5% of the ECAM GWCG and within FWD and AFT limit from the loadsheet.",
        "c. Within 400kg, 5% of the ECAM GWCG and within FWD and AFT limit from the loadsheet.",
        "d. Within 1000kg, 1% of the ECAM GWCG and within FWD and AFT limit from the loadsheet"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Within 400kg, 1% of the ECAM GWCG and within FWD and AFT limit from the loadsheet.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_OMA_049",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 8.1.7",
      "topic": "Policy",
      "question": "Fuel policy from the company is based on minimum total cost and maximum payload. It takes into account?",
      "options": [
        "a. Met conditions",
        "b. Expected routing and flight levels",
        "c. Realistic A/C consumption data based on manufacturer data and performance degradation for specific aircraft.",
        "d. All of the above"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All of the above",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCTM_006",
      "section": "Open Book",
      "manual": "FCTM",
      "reference": "FCTM-PRO-AEP-FUEL",
      "topic": "Fuel",
      "question": "Which ECAM alert lines indicates a Fuel Penalty Factor must be applied and where can it be found?",
      "options": [
        "a. For any failure that affects the fuel consumption the associated ECAM alert displays the lines FUEL CONSUMPT INCRESD and FMS PRED UNRELIABLE and FMS PRED UNRRELIABLE WITHOUT ACCURATE FMS FUEL PENALTY INSERTION. Abnormal procedure in the FCOM that provides the corresponding FPF in Layer 2.",
        "b. For any failure that affects the fuel consumption the associated ECAM alert displays the lines FUEL CONSUMPT INCRESD and FMS PRED UNRELIABLE and FMS PRED UNRRELIABLE WITHOUT ACCURATE FMS FUEL PENALTY INSERTION. Abnormal procedure in the FCOM that provides the corresponding FPF in Layer 3.",
        "c. For any failure that affects the fuel consumption the associated ECAM alert displays the lines FUEL CONSUMPT INCRESD and FMS PRED UNRELIABLE and FMS PRED UNRRELIABLE WITHOUT ACCURATE FMS FUEL PENALTY INSERTION. All the FPF are provided in a dedicated FCOM table in the performance section.",
        "d. ECAM does not alert crew to any fuel penalty. Any increase in fuel consumption must be sourced from the relevant FCOM chapter."
      ],
      "correct_answer": 2,
      "correct_answer_indication": "For any failure that affects the fuel consumption the associated ECAM alert displays the lines FUEL CONSUMPT INCRESD and FMS PRED UNRELIABLE and FMS PRED UNRRELIABLE WITHOUT ACCURATE FMS FUEL PENALTY INSERTION. All the FPF are provided in a dedicated FCOM table in the performance section.",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCTM_007",
      "section": "Open Book",
      "manual": "FCTM",
      "reference": "FCTM-PRO-AEP-FUEL",
      "topic": "Fuel",
      "question": "What is the procedure for applying Fuel Penalty Factor?",
      "options": [
        "a. The flight crew must enter the sum of the applicable fuel penalties in the FMS from the MEL CDL or FCOM.",
        "b. The flight crew should enter the associated fuel penalty in the FMS DATA/STATUS page.",
        "c. Answers both A & B",
        "d. The flight crew applies the FPF value to ramp fuel figure on the relevant OFP"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Answers both A & B",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCTM_008",
      "section": "Open Book",
      "manual": "FCTM",
      "reference": "FCTM-PRO-AEP-FUEL",
      "topic": "Fuel",
      "question": "What is the procedure for applying Fuel Penalty Factor?",
      "options": [
        "a. The flight crew shall contact dispatch to request a new OFP which takes into account all FPF’s",
        "b. The flight crew applies the FPF value to the trip fuel + Altn fuel predictions regardless of the current flight conditions (speed and altitude). If only one Fuel Penalty Factor (FPF) is applicable TRIP FUEL = (FOB – EFOB at DEST) x FPF. The FMS fuel predictions must be recomputed to take into account this trip fuel penalty. If two or more Fuel Penalty Factors (FPFs) are applicable TRIP FUEL PENALTY = (FOB – EFOB at DEST) x (FPF1 + FPF2 + …). The FMS fuel predictions must be recomputed to take into account this trip fuel penalty",
        "c. The flight crew applies the FPF value to the ramp fuel figure on the relevant OFP",
        "d. The flight crew applies the FPF value to the trip fuel predictions regardless of the current flight conditions (speed and altitude). If only one Fuel Penalty Factor (FPF) is applicable TRIP FUEL = (FOB – EFOB at DEST) x FPF. The FMS fuel predictions must be recomputed to take into account this trip fuel penalty. If two or more Fuel Penalty Factors (FPFs) are applicable TRIP FUEL PENALTY = (FOB – EFOB at DEST) x (FPF1 + FPF2 + …). The FMS fuel predictions must be recomputed to take into account this trip fuel penalty"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "The flight crew applies the FPF value to the ramp fuel figure on the relevant OFP",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_062",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-22-FMS-10-15-10 PERF ASSUM",
      "topic": "Performance",
      "question": "Which of the following statements regarding failure cases is correct?",
      "options": [
        "a. In the case of failure that affects the fuel consumption, FMS predictions are always correct.",
        "b. In the event of One Engine Inoperative, FMS predictions are inaccurate.",
        "c. In the case of failure that affects the fuel consumption, the fuel penalty can be inserted into the FMS and fuel predictions monitored for accuracy",
        "d. FMS fuel penalties are never reliable in failure cases that affect fuel consumption."
      ],
      "correct_answer": 2,
      "correct_answer_indication": "In the case of failure that affects the fuel consumption, the fuel penalty can be inserted into the FMS and fuel predictions monitored for accuracy",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": "[21]"
    },
    {
      "id": "OB_OMA_050",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 8.1.7.1.3",
      "topic": "Fuel",
      "question": "Which answer is correct? Contingency fuel is a quantity of fuel carried to compensate for items such as:",
      "options": [
        "a. Deviations of an individual aircraft for the expected fuel consumption data (over and above the tail number corrects allowed for in the trip fuel:",
        "b. Deviations for forecast meteorological conditions",
        "c. Deviations from planned routings and/or cruising levels/altitudes",
        "d. All of the above"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All of the above",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_063",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-ABN-FUEL-AUTO GND XFR FAULT",
      "topic": "Fuel",
      "question": "When is Auto Ground Transfer inhibited?",
      "options": [
        "a. Fuel transfer will STOP automatically as soon as at least 2 engines are running",
        "b. Fuel transfer will STOP automatically as soon as at least 1 engine is running",
        "c. Fuel transfer will STOP automatically as soon as at least 3 engines are running",
        "d. All of the above"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Fuel transfer will STOP automatically as soon as at least 2 engines are running",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_064",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-ABN-Fuel-Fuel Abnorm Auto Refuel Distribution",
      "topic": "Fuel",
      "question": "When do you get the ECAM FUEL ABNORM AUTO REFUEL DISTRIBUTION?",
      "options": [
        "a. If the difference between the current distribution and the standard distribution for any given tank is more than 400kg",
        "b. If the difference between the current distribution and the standard distribution for any given tank is more than 500kg",
        "c. If the difference between the current distribution and the standard distribution for any given tank is more than 200kg",
        "d. All of the above"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "If the difference between the current distribution and the standard distribution for any given tank is more than 400kg",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_OMA_051",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 8.2.1.2",
      "topic": "Fuel",
      "question": "Which answer is NOT a Fueling Precaution?",
      "options": [
        "a. Aircraft transmission on VHF must not be made",
        "b. The weather radar system must be switched off",
        "c. Engine ignition system must be off",
        "d. Aircraft strobe light must be switched off"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Aircraft transmission on VHF must not be made",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": "[21]"
    },
    {
      "id": "OB_FCTM_009",
      "section": "Open Book",
      "manual": "FCTM",
      "reference": "FCTM-PRO-AEP-FUEL",
      "topic": "Fuel",
      "question": "Which answer is NOT a Fueling Precaution?",
      "options": [
        "a. FCOM Abnormal Procedure layer 2 (Long answer in the exam)",
        "b. ",
        "c. ",
        "d. "
      ],
      "correct_answer": 0,
      "correct_answer_indication": "FCOM Abnormal Procedure layer 2 (Long answer in the exam)",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_065",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-ABN-FUEL TRIM L+R PMPS FAULT",
      "topic": "Fuel",
      "question": "Can we land with fuel in the trim tank?",
      "options": [
        "a. Yes, as long as the CG is within landing limits",
        "b. No, we must dump the fuel",
        "c. ",
        "d. "
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Yes, as long as the CG is within landing limits",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_066",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-LIM-Fuel-Fuel Temperature",
      "topic": "Fuel",
      "question": "What is the MAX FUEL temp?",
      "options": [
        "a. 53 degrees",
        "b. 55 degrees",
        "c. 57 degrees",
        "d. 50 degrees"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "53 degrees",
      "source_notes": "",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_067",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-28-Abnormal Operations-Fuel Jettison-Jettison Termination",
      "topic": "Fuel",
      "question": "Fuel Jettison is terminated under what conditions?",
      "options": [
        "a. Fuel jettison is terminated when 1. The gross weight reaches the jettison final gross weight entered in the FMS FUEL & LOAD page 2. The flight crew stops the jettison by turning off any of the two JETTISON pushbuttons on the overhead panel. 3. The inner, mid, outer and trim tanks are empty, and the flight crew did not enter a jettison GW in the FMS FUEL & LOAD page",
        "b. Fuel jettison is terminated by the JETTISON pushbuttons only.",
        "c. Fuel jettison is terminated when 1. The gross weight reaches the jettison final gross weight entered in the FMS FUEL & LOAD page minus 500kg 2. The flight crew stops the jettison by turning off any of the two JETTISON pushbuttons on the overhead panel. 3. The inner, mid, outer and trim tanks are empty, and the flight crew did not enter a jettison GW in the FMS FUEL & LOAD page",
        "d. Fuel jettison is terminated when 1. The gross weight reaches the jettison final gross weight entered in the FMS FUEL & LOAD page plus 500kg 2. The flight crew stops the jettison by turning off any of the two JETTISON pushbuttons on the overhead panel. 3. The inner, mid, outer and trim tanks are empty, and the flight crew did not enter a jettison GW in the FMS FUEL & LOAD page"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Fuel jettison is terminated when 1. The gross weight reaches the jettison final gross weight entered in the FMS FUEL & LOAD page 2. The flight crew stops the jettison by turning off any of the two JETTISON pushbuttons on the overhead panel. 3. The inner, mid, outer and trim tanks are empty, and the flight crew did not enter a jettison GW in the FMS FUEL & LOAD page",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_068",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-FUEL-SYS DESCRIPTION-FUEL SYS ARCH-FDQC",
      "topic": "Fuel",
      "question": "What information is being collected by the FQDCs from the in-tank sensor?",
      "options": [
        "a. Fuel level -Fuel density -Fuel Temperature -Fuel SG",
        "b. Fuel level -Fuel density -Fuel temperature",
        "c. Fuel level -Fuel SG -Fuel temperature",
        "d. Fuel level only"
      ],
      "correct_answer": 1,
      "correct_answer_indication": "Fuel level -Fuel density -Fuel temperature",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": "[21]"
    },
    {
      "id": "OB_FCOM_069",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-ABN-FUEL-ABNORM AUTO REFUEL DISTRIBUTION",
      "topic": "Fuel",
      "question": "If there is a difference between the current distribution and the standard distribution of 400kg in any given tank, what ECAM alert will be triggered?",
      "options": [
        "a. FUEL ABNORM AUTO REFUEL DISTRIBUTION",
        "b. ",
        "c. ",
        "d. "
      ],
      "correct_answer": 0,
      "correct_answer_indication": "FUEL ABNORM AUTO REFUEL DISTRIBUTION",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_070",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-FUEL-NORMAL OPS-CG CONTROL TRANSFER",
      "topic": "Fuel",
      "question": "What are the conditions for aft CG transfer in flight?",
      "options": [
        "a. There is NO AFT transfer in-flight because the CG is aft for takeoff due to the CG targeting during automatic refuel.",
        "b. ",
        "c. ",
        "d. "
      ],
      "correct_answer": 0,
      "correct_answer_indication": "There is NO AFT transfer in-flight because the CG is aft for takeoff due to the CG targeting during automatic refuel.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_071",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-22-27-Protections-Low Energy Protection",
      "topic": "Autoflight",
      "question": "In manual flight at 3000’ and below VLS but above Alpha Prot what warning will you get?",
      "options": [
        "a. SPEED SPEED SPEED",
        "b. GO AROUND FLAPS",
        "c. None as LOW ENERGY warning is only available below 2500’",
        "d. "
      ],
      "correct_answer": 2,
      "correct_answer_indication": "None as LOW ENERGY warning is only available below 2500’",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_072",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-SUPP-AIRPORT OPS-BRAKE COOLING",
      "topic": "Brakes",
      "question": "How long will it take to cool the brakes with the following information: Target temp 150 degrees, current temp on ECAM 500 degree, SAT 35 degrees, Wind 340/20, And does the table take wind into account?",
      "options": [
        "a. 126 mins, YES takes wind into account",
        "b. 166 mins, NO it doesn’t take wind into account.",
        "c. 126 mins, NO it doesn’t take wind into account.",
        "d. 166 mins, YES takes wind into account"
      ],
      "correct_answer": 1,
      "correct_answer_indication": "166 mins, NO it doesn’t take wind into account.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_073",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-LND GEAR-SYS DESC-BRK SYS-BRK FUNC",
      "topic": "Brakes",
      "question": "What is the deceleration rate in basic auto brake in RTO?",
      "options": [
        "a. Maximum Braking performance has no limit",
        "b. Maximum braking up to the max break temperature",
        "c. Maximum braking performance limited by A-SKID",
        "d. Deceleration of 3.5m/s or 7kt/s"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Maximum braking performance limited by A-SKID",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_074",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-32-System Description-Braking System-Architecture-Architecture-Braking Control System",
      "topic": "Brakes",
      "question": "What does the Braking Control System Control?",
      "options": [
        "a. The BCS controls the alternate braking mode",
        "b. The BCS controls the normal braking mode",
        "c. The BCS controls the Normal and the Alternate Braking mode",
        "b. The BCS only passively monitors normal braking but will generate an ECAM in the event of any abnormal behavior"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "The BCS controls the Normal and the Alternate Braking mode",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_075",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-NOR-SUP-ADVERSE WEATHER",
      "topic": "Brakes",
      "question": "Why do you release the parking brake on a cold soaked aircraft?",
      "options": [
        "a. So, tires will not deflate",
        "b. So, brakes will not freeze below -20",
        "c. When OAT is below -30 hydraulic fluid may spill if the parking brake is pressured",
        "d. When OAT is below -20 hydraulic fluid may spill if the parking brake is pressured."
      ],
      "correct_answer": 2,
      "correct_answer_indication": "When OAT is below -30 hydraulic fluid may spill if the parking brake is pressured",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_FCOM_076",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-32-System Description-Braking System-Architecture-Architecture-Emergency Braking Control Unit",
      "topic": "Brakes",
      "question": "When is the EBCU activate automatically?",
      "options": [
        "a. When the normal braking mode fails or A-SKID switched off",
        "b. When the alternate braking mode fails or A-SKID switched off",
        "c. When the normal mode OR alternate mode fails or the A-SKID is switched off",
        "d. When the normal AND alternate braking modes fails or A-SKID switched off"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "When the normal mode OR alternate mode fails or the A-SKID is switched off",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_FCOM_077",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-32-System Description-Braking System-Architecture-Architecture-Emergency Braking Control Unit",
      "topic": "Brakes",
      "question": "The EBCU controls Emergency Braking and Ultimate Braking. When does it activate automatically and which wheels does it affect?",
      "options": [
        "a. When the A-Skid switch is set to the off position and the Normal and Alternate Braking modes fail. It affects the BLG & WLG.",
        "b. When the A-Skid switch is set to the off position or the Normal and Alternate Braking modes fail. It affects the BLG & WLG.",
        "c. When the A-Skid switch is set to the off position or the Normal and Alternate Braking modes fail. It affects WLG.",
        "d. When the A-Skid switch is set to the off position or the Normal and Alternate Braking modes fail. It affects the BLG."
      ],
      "correct_answer": 2,
      "correct_answer_indication": "When the A-Skid switch is set to the off position or the Normal and Alternate Braking modes fail. It affects WLG.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_078",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-32-System Description-Braking System-Braking Modes-Ultimate Braking",
      "topic": "Brakes",
      "question": "The Ultimate braking is actuated on which landing gear?",
      "options": [
        "a. WLG & BLG.",
        "b. BLG.",
        "c. WLG.",
        "d. All of the brakes."
      ],
      "correct_answer": 2,
      "correct_answer_indication": "WLG.",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_FCOM_079",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-32-System Description-Brake Temperature Monitoring System (BTMS)",
      "topic": "Brakes",
      "question": "What is the range of the Brake Temp Monitoring System (BTMS)?",
      "options": [
        "a. Displays 0-995 in 10 degrees steps",
        "b. -100 – 1000 in 5 degrees steps.",
        "c. Displays 0-995 degrees with 5 degree steps.",
        "d. All of the brakes."
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Displays 0-995 degrees with 5 degree steps.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_080",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-32-System Description-Brake Temperature Monitoring System (BTMS)",
      "topic": "Brakes",
      "question": "What system monitors the brake temperatures?",
      "options": [
        "a. Brake Temperature Monitoring System.",
        "b. TPIS.",
        "c. TPBIS.",
        "d. Brake temperatures are not considered."
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Brake Temperature Monitoring System.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_081",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-32-System Description-Braking System-Parking Brake",
      "topic": "Brakes",
      "question": "If PARK BRK set ON and pedal depressed by flight crew?",
      "options": [
        "a. The highest commanded pressure between Park brake, Normal brake and Alternate brake will always apply to each gear.",
        "b. ",
        "c. ",
        "d. "
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Brake Temperature Monitoring System.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_082",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-32-System Description-Braking System-Braking Modes",
      "topic": "Brakes",
      "question": "Which brake modes do not have A-Skid protection?",
      "options": [
        "a. There is no Anti-skid protection when in emergency and ultimate braking",
        "b. In ALTN braking mode",
        "c. Only emergency braking has A-skid protection",
        "d. Only ultimate braking has A-skid protection"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "There is no Anti-skid protection when in emergency and ultimate braking",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_083",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-32-System Description-Braking System-Basic Autobrake",
      "topic": "Brakes",
      "question": "What are the conditions required for Basic AUTO BRK DISARMING/DEACTIVATION?",
      "options": [
        "a. The flight crew applies sufficient pedal deflection on one or both brake pedals, or",
        "b. The aircraft is in flight for more than 10 s (for RTO mode only), or",
        "c. The flight crew sets the AUTO BRK Mode selector to DISARM, or",
        "d. The flight crew presses the RTO pb in order to turn off the RTO light, orThe flight crew presses one of the A/THR instinctive disconnect pushbuttons (only with basic",
        "e. AUTO BRK LDG modes, not for RTO mode), or",
        "f. Any basic AUTO BRK arming condition is lost, or",
        "g. The ground spoilers retract."
      ],
      "correct_answer": 1,
      "correct_answer_indication": "The aircraft is in flight for more than 10 s (for RTO mode only)",
      "source_notes": "NOTE: The correct answer to this QUESTION is the one that has 10s in it. If the basic AUTO BRK disarms during landing, the AUTO BRK Mode selector automatically returns to the DISARM position and the AUTO BRK mode no longer appears on the FMA",
      "citation": ""
    },
    {
      "id": "OB_FCOM_084",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-32-System Description-Braking System-Basic Autobrake",
      "topic": "Brakes",
      "question": "What conditions are required for Basic AUTO BRK ARMING?",
      "options": [
        "a. Crew selects a basic AUTO BRK mode",
        "b. A-SKID is available (normal and alternate modes)",
        "c. At least TWO PRIMs are available (PRIMs provide basic AUTO BRK with the ground spoilers extension command)",
        "d. At least ONE ADIRU is available (in NAV mode)"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "At least TWO PRIMs are available (PRIMs provide basic AUTO BRK with the ground spoilers extension command)",
      "source_notes": "NOTE: FEEDBACK indicates that the answer must have “2 PRIM’s and 1 ADR in it. When on GND > Basic AUTO BRK can be armed any mode > Even if park brake is on. / When 3 IRs in ATT mode > Basic AUTO BRK not available. / The flight crew cannot arm RTO mode when the aircraft is in flight.",
      "citation": ""
    },
    {
      "id": "OB_FCOM_085",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SUP-AIRPRT OPS-BRAKE COOLING",
      "topic": "Brakes",
      "question": "How many minutes would it take to cool down the Temp from 450c to 150c at 15c SAT?",
      "options": [
        "a. 128 mins,",
        "b. 115 mins,",
        "c. 138 mins,",
        "d. 142 mins"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "138 mins",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_FCOM_086",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-LDG GEAR-SYS DES-BRK SYS-BRK FUN-BSC AUTOBRK",
      "topic": "Brakes",
      "question": "When does the autobrake activate?",
      "options": [
        "a. The basic AUTO BRK activates when: All the arming conditions are satisfied, the ground spoilers extend and the NLG is on ground, or 5 seconds after the ground spoilers extend, whichever occurs first. The ground spoilers do not extend automatically below 72kts. As a result, in the case of an RTO initiated below 72kts, the basic AUTO BRK does not activate.",
        "b. The basic AUTO BRK activates when: All the arming conditions are satisfied, The ground spoilers extend and the NLG is on ground, or 3 seconds after the ground spoilers extend, whichever occurs first. The ground spoilers do not extend automatically below 72kts. As a result, in the case of an RTO initiated below 72kts, the basic AUTO BRK does not activate.",
        "c. The basic AUTO BRK activates when: All the arming conditions are satisfied, The ground spoilers extend and the NLG is on ground, or 5 seconds after the ground spoilers extend, whichever occurs first. The ground spoilers do not extend automatically below 72kts. As a result, in the case of an RTO initiated below 90 kts, the basic AUTO BRK does not activate.",
        "d. "
      ],
      "correct_answer": 0,
      "correct_answer_indication": "The basic AUTO BRK activates when: All the arming conditions are satisfied, the ground spoilers extend and the NLG is on ground, or 5 seconds after the ground spoilers extend, whichever occurs first. The ground spoilers do not extend automatically below 72kts. As a result, in the case of an RTO initiated below 72kts, the basic AUTO BRK does not activate.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_087",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-32-System Description-Braking System-Braking ModesSUMMARY OF BRAKING MODES",
      "topic": "Brakes",
      "question": "What powers the brakes in Alternate, Emergency and Ultimate braking modes?",
      "options": [
        "a. Just the LEHGS",
        "b. Just the Accumulators",
        "c. The LEHGS or Accumulators.",
        "d. "
      ],
      "correct_answer": 2,
      "correct_answer_indication": "The LEHGS or Accumulators.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_088",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-70-System Description-FADEC-Degraded Mode",
      "topic": "Engines",
      "question": "What parameter replaces THR when operating in DEGRADED mode?",
      "options": [
        "a. N2",
        "b. EPR",
        "c. N3 on RR engines only",
        "d. N1"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "N1",
      "source_notes": "",
      "citation": "NOTE: ACTUAL EXAM QUESTION"
    },
    {
      "id": "OB_FCOM_089",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-70-System Description-FADEC-Engine Protections-Engine Protections-Adverse Weather",
      "topic": "Engines",
      "question": "Which of the following is true regarding continuous engine ignition in heavy rain or hail?",
      "options": [
        "a. Heavy rain or hail does not affect engine operation.",
        "b. The FADEC will not automatically switch on engine igniters during operation in heavy rain or hail.",
        "c. Heavy rain or hail does not affect engine operation. However, if the FADEC detects a risk of engine flame out to excessive rain or hail at low engine power (i.e. idle) the FADEC automatically generates an ECAM to switch on both igniters.",
        "d. Heavy rain or hail does not affect engine operation. However, if the FADEC detects a risk of engine flame out due to excessive rain or hail at low engine power (i.e. idle) the FADEC automatically switches on both igniters."
      ],
      "correct_answer": 3,
      "correct_answer_indication": "Heavy rain or hail does not affect engine operation. However, if the FADEC detects a risk of engine flame out due to excessive rain or hail at low engine power (i.e. idle) the FEDEC automatically switches on both igniters.",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_FCOM_090",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-26-Engines-Description-Engine Fire Protection - Detection-Fire Detection",
      "topic": "Fire Protection",
      "question": "Which are the Engine fire sensitive zones?",
      "options": [
        "a. Fan compartment",
        "b. Intermediate compressor compartment & Core compartment",
        "c. Pylon nacelle area",
        "d. All of the above"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All of the above",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_091",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-ABN-ENG-Two Engs Out on Opposite Side",
      "topic": "Autoflight",
      "question": "With 2 ENG INOP on the opposite side, ILS approach and configuration is approved giving the lowest minima?",
      "options": [
        "a. ILS CAT 2 Autoland in Conf 3",
        "b. ILS CAT 1 NO Autoland in Conf Full",
        "c. ILS CAT 3 Autoland in Conf Full",
        "d. ILS CAT 1 NO Autoland in Conf 3"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "ILS CAT 2 Autoland in Conf 3",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_FCOM_092",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-70-System Description-Thrust Reverser System-Thrust Reverser Protections-Auto-Idle Protection",
      "topic": "Engines",
      "question": "What ensures that the outer engines are at idle during thrust reversers operations?",
      "options": [
        "a. Outer engines have no idle protection",
        "b. Auto – idle protection",
        "c. Thrust lever position",
        "d. The FADEC through the outer engine EEC’s"
      ],
      "correct_answer": 1,
      "correct_answer_indication": "Auto – idle protection",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_FCOM_092",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-LIM-22-30?",
      "topic": "Autoflight",
      "question": "Can you perform a GLS approach to CAT 1 minima with 2 ENG OUT on the same side?",
      "options": [
        "a. YES if ENG out are on different sides",
        "b. NO if ENG out are on the same side",
        "c. Both A & B are correct",
        "d. "
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Both A & B are correct",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_093",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-NAV-GLS 1(2) FAULT",
      "topic": "Autoflight",
      "question": "Will as Single GLS FAULT cause the loss of GLS AUTOLAND?",
      "options": [
        "a. Only if the failure occurs below 1000ft",
        "b. Landing capability will be reduced to CAT2",
        "c. Yes",
        "d. No"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Yes",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_FCOM_094",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-LIM-AUTOFLIGHT-REQ EQUIP GLS CAT1",
      "topic": "Autoflight",
      "question": "Does a GLS CAT 1 require NORMAL and ALTN Braking?",
      "options": [
        "a. Yes: To perform an automatic roll out in GLS CAT 1, the antiskid, the nosewheel steering and the Normal OR Alternate braking must be available",
        "b. No",
        "c. ",
        "d. "
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Yes",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_095",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-30-Ice Protection-System Description-Ice Detection-Ice Detection System",
      "topic": "Ice & Rain Protection",
      "question": "The ECAM ice detected is triggered under what conditions?",
      "options": [
        "a. If two ice detectors detect icing conditions and ENG A-ICE ON",
        "b. If one ice detectors detect icing conditions and only WING A-ICE ON",
        "c. If at least one ice detector detects icing conditions and ENG A-ICE OFF.",
        "d. More than one detector indicates ice accumulation irrespective of the position of the ENG A-ICE P/B"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "If at least one ice detector detects icing conditions and ENG A-ICE OFF.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCTM_010",
      "section": "Open Book",
      "manual": "FCTM",
      "reference": "FCTM-PRO-NOR-STD OP-TAXI-TAXI THRUST-OP REC",
      "topic": "Ice & Rain Protection",
      "question": "On a taxiway more that 54m wide that has been declared contaminated, what is the recommended thrust management procedure?",
      "options": [
        "a. The flight crew should prefer the use of the inner engines. The flight crew should apply any additional thrust on the outer engines as smoothly as possible.",
        "b. The flight crew should prefer the use of the outer engines. The flight crew should apply any additional thrust as required.",
        "c. The flight crew should prefer the use of the outer engines. The flight crew should apply any additional thrust on the outer engines as smoothly as possible.",
        "d. Apply normal thrust management up to taxiway width of 60m"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "The flight crew should prefer the use of the outer engines. The flight crew should apply any additional thrust on the outer engines as smoothly as possible.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCTM_011",
      "section": "Open Book",
      "manual": "FCTM",
      "reference": "FCOM-SYS-30-10-10?",
      "topic": "Ice & Rain Protection",
      "question": "You are taxiing on a contaminated taxiway and additional thrust is needed. Which engines should the flight crew prefer to use and why?",
      "options": [
        "a. Either the inner or outer engines as there is no risk of FOD",
        "b. The inner engines because they are high enough to prevent the risk of ingesting foreign objects at TAXI thrust.",
        "c. The outer engines because they are not fitted with thrust reversers.",
        "d. The outer engines because they are high enough to prevent the risk of ingesting foreign objects at TAXI thrust"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "The outer engines because they are high enough to prevent the risk of ingesting foreign objects at TAXI thrust",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_GOM_003",
      "section": "Open Book",
      "manual": "GOM",
      "reference": "GOM-CHAP 20,9.1",
      "topic": "Ice & Rain Protection",
      "question": "The decision of a qualified person to de-ice prior to flight can be over-ridden?",
      "options": [
        "a. Only by the captain",
        "b. Yes",
        "c. NO",
        "d. EK Operations"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "NO",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCTM_012",
      "section": "Open Book",
      "manual": "FCTM",
      "reference": "FCTM-PRO-NOR-STD OP-TAXI-TAXI THRUST-OP REC",
      "topic": "Ice & Rain Protection",
      "question": "What are the recommendations for taxing on a contaminated taxiway more than 36m wide?",
      "options": [
        "a. Thrust is allowed on all engines",
        "b. Thrust is recommended to be used on the inners only.",
        "c. Flight crew may use the outer engines only if additional thrust is required.",
        "d. Thrust is not allowed on any engines"
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Flight crew may use the outer engines only if additional thrust is required.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_096",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-SUP-OPS IN ICE-WING ANTI-ICE",
      "topic": "Ice & Rain Protection",
      "question": "If there is evidence of ice accretion on de-iced parts of the airframe (WING ANTI ICE inoperative), the minimum speed should be?",
      "options": [
        "a. Green Dot in clean configuration, VLS in CONF 1, 2, and 3 (Landing configuration is CONF 3)",
        "b. VLS in clean configuration, Green Dot in CONF 1, 2, and 3 (Landing configuration is CONF 3)",
        "c. Green dot in clean configuration, Green Dot in CONF 1, 2, and 3 (Landing configuration is CONF 3)",
        "d. "
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Green Dot in clean configuration, VLS in CONF 1, 2, and 3 (Landing configuration is CONF 3)",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_097",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-30-Ice Protection-System Description-Ice Detection System",
      "topic": "Ice & Rain Protection",
      "question": "ECAM Memo “ICE NOT DETECTED’. when does it show and for how long?",
      "options": [
        "a. If icing is not detected for approximately 1 min and WING anti-ice and/or ENG anti-ice are on.",
        "b. If icing is not detected for approximately 2 min and WING anti-ice and/or ENG anti-ice are on.",
        "c. If icing is not detected for approximately 5 min and WING anti-ice and/or ENG anti-ice are on.",
        "d. If icing is not detected for approximately 10 min and WING anti-ice and/or ENG anti-ice are on."
      ],
      "correct_answer": 1,
      "correct_answer_indication": "If icing is not detected for approximately 2 min and WING anti-ice and/or ENG anti-ice are on.",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_FCOM_098",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-30-System Description",
      "topic": "Ice & Rain Protection",
      "question": "Which ice protection comes from Hot Bleed?",
      "options": [
        "a. Engine Anti-Ice and Wing Anti-Ice.",
        "b. Engine Anti-Ice.",
        "c. Wing Anti-Ice.",
        "d. None of the above."
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Engine Anti-Ice and Wing Anti-Ice.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_099",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-30-Ice Protection-System Description-Overview",
      "topic": "Ice & Rain Protection",
      "question": "What ice protection comes from electrical power?",
      "options": [
        "a. Window heating, water/waste drain masts & heating / probe heating.",
        "b. Engine Anti-Ice.",
        "c. Wing Anti-Ice.",
        "d. None of the above."
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Window heating, water/waste drain masts & heating / probe heating.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_051",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 8.1.5.1",
      "topic": "Policy",
      "question": "What is the Takeoff Operating minima for Category ‘C’ respective ‘D’ aircraft on a runway equipped with runway edge and centerline lights will never be less than?",
      "options": [
        "a. 500m",
        "b. 300m",
        "c. 200m",
        "d. 150m"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "150m",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_LIDO_001",
      "section": "Open Book",
      "manual": "LIDO",
      "reference": "LIDO RAR PANS OPS 1.4.5.2",
      "topic": "Regulations",
      "question": "Approach criteria classification a/c category based on?",
      "options": [
        "a. Based on NOMINAL THRESHOLD SPEED",
        "b. ",
        "c. ",
        "d. "
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Based on NOMINAL THRESHOLD SPEED",
      "source_notes": "NOTE: Emirates aircraft are divided into two speed categories C (121-140kts) & D (141-165kts)",
      "citation": ""
    },
    {
      "id": "OB_OMC_003",
      "section": "Open Book",
      "manual": "OMC",
      "reference": "OMC 10.1.8.3.1",
      "topic": "Procedures",
      "question": "MORA is displayed on the OFP and based on which parameters?",
      "options": [
        "a. For a 5nm corridor, based on terrain clearance with terrain elevation above 5000ft: 2000ft above the highest terrain and obstructions",
        "b. Minimum Off Route Altitude at a corridor 10nm either side of the route center line displayed in 2 digits expressed in thousands of feet. LIDO uses CAR OPS calculation method. For terrain lower that 6000ft a buffer of 1000ft is added. For terrain higher than 6000ft a buffer of 2000ft is added.",
        "c. For 5NM corridor, based on terrain clearance with terrain elevation up to 6000ft: 1000ft above the highest terrain and obstructions",
        "d. For a 10NM corridor, based on terrain clearance with Terrain elevation up to 5000ft: 1000ft above the highest terrain and obstructions."
      ],
      "correct_answer": 1,
      "correct_answer_indication": "Minimum Off Route Altitude at a corridor 10nm either side of the route center line displayed in 2 digits expressed in thousands of feet. LIDO uses CAR OPS calculation method. For terrain lower that 6000ft a buffer of 1000ft is added. For terrain higher than 6000ft a buffer of 2000ft is added.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMC_004",
      "section": "Open Book",
      "manual": "OMC",
      "reference": "OMC 10.1.8.2",
      "topic": "Procedures",
      "question": "Which altitude does the OFP show in two digits?",
      "options": [
        "a. MORA",
        "b. MOCA",
        "c. MSA",
        "d. MCPA"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "MORA",
      "source_notes": "NOTE: In the exam it still says JAR-OPS and our manuals say CAR-OPS. The exams hasn’t been updated",
      "citation": ""
    },
    {
      "id": "OB_FCOM_100",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-LIM",
      "topic": "Oxygen",
      "question": "Where will you find the minimum cabin oxy pressures for cabin crew routes not on the OFP?",
      "options": [
        "a. Company NOTAMs on depressurization strategies for particular company routes",
        "b. 350 psi",
        "c. 400 psi",
        "d. 550 psi"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Company NOTAMs on depressurization strategies for particular company routes",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMC_005",
      "section": "Open Book",
      "manual": "OMC",
      "reference": "OMC 10.1.8.3.1",
      "topic": "Procedures",
      "question": "What is the definition of MORA in the OFP?",
      "options": [
        "a. Is a corridor 10NM either side of the Route centerline in 2 digits expressed in thousand",
        "b. Is a corridor 5NM either side of the Route centerline in 2 digits expressed in thousand",
        "c. Is a corridor 15NM either side of the Route centerline in 2 digits expressed in thousand",
        "d. Is a corridor 20NM either side of the Route centerline in 2 digits expressed in thousand"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Is a corridor 10NM either side of the Route centerline in 2 digits expressed in thousand",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_101",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-DSC-26-System Description-Smoke Detection Function (SDF)",
      "topic": "Fire Protection",
      "question": "The smoke Detection Function (SDF) is part of the Cabin Intercommunication Data System (CIDS). It manages fire extinguishing in the cargo compartment and monitors smoke detection in which areas?",
      "options": [
        "a. The avionics bays, The cargo compartments, The cabin Areas",
        "b. The avionics bays only",
        "c. The avionics bays, the cargo compartments",
        "d. The avionics bays, the cargo compartments, the cabin areas and the crew rest areas"
      ],
      "correct_answer": 0,
      "correct_answer_indication": "The avionics bays, The cargo compartments, The cabin Areas",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_FCOM_102",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-DSC-26-System Description-Description-Fire Detection unit",
      "topic": "Fire Protection",
      "question": "What does the FDU (Fire Detection Unit) monitor for fire detection?",
      "options": [
        "a. Engines",
        "b. APU",
        "c. MLG Bay",
        "d. All of the above"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All of the above",
      "source_notes": "NOTE: It also manages fire extinguishing in the Engines and APU",
      "citation": ""
    },
    {
      "id": "OB_FCOM_103",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-DSC-26-System Description-Description-Fire Detection unit",
      "topic": "Fire Protection",
      "question": "The FDU (Fire Detection Unit) monitors MLG for fire detection. The FDU also monitors fire detection and manages fire extinguishing in which areas?",
      "options": [
        "a. Engines & APU",
        "b. Engines, APU and all cargo holds",
        "c. The engines and upper avionics bay.",
        "d. The APU, upper avionics and forward galleys."
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Engines & APU",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_52",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 6.1.20",
      "topic": "Policy",
      "question": "Vaccinations must be administered at least how many hours prior to a flight?",
      "options": [
        "a. 36",
        "b. 48",
        "c. 24",
        "d. 12"
      ],
      "correct_answer": 3,
      "correct_answer_indication": "12",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_OMA_53",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 8.1.3.1",
      "topic": "Policy",
      "question": "An Adequate should fulfil which criteria?",
      "options": [
        "a. Has a runway that is long enough to safely bring an aircraft to a stop within the landing distance available clearing all obstacles in the approach path by a safe margin.",
        "b. Is expected to be available if required.",
        "c. Is equipped with the necessary auxiliary services such as ATC, lighting, communications, meteorological services, navigation and approach aids and rescue and fire fighting services.",
        "d. All of the above."
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All of the above.",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_FCOM_104",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-DSC-21-30-Abnormal Operations-Ditching",
      "topic": "Ditching",
      "question": "Does the Ditching P/B affect the escape slide inflation?",
      "options": [
        "a. Yes, it does. The automatic inflation of escape slide at the M3 door is inhibited and the automatic deployment of the M1 doors extension slide is inhibited.",
        "b. Yes, it does. The automatic inflation of escape slide at the M3 door is inhibited and the automatic deployment of the M5 doors extension slide is inhibited.",
        "c. Yes, all automatic slide inflation is disabled.",
        "d. No, only outflow valves, pack flow valves and Ram Air inlet are affected.",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Yes, it does. The automatic inflation of escape slide at the M3 door is inhibited and the automatic deployment of the M1 doors extension slide is inhibited.",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_FCOM_105",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-DSC-26-Avionics Bays-Controls and Indicators-Entertainment Panel-IFEC Pb",
      "topic": "IFEC",
      "question": "When the IFEC PB-SW shows SMOKE, what does it mean?",
      "options": [
        "a. Smoke is detected in the shower/spa. The ventilation extraction fan automatically stops and electrical power to the IFE system is cut off. The light remains ON for as long as smoke is detected.",
        "b. The ventilation extraction fan automatically stops, and electrical power to the IFE Center is cut off.",
        "c. Smoke is detected in the IFEC Center. The ventilation extraction fan automatically stops and electrical power to the IFE system is cut off. (word for word out of the FCOM)",
        "d. There is a fault in the smoke detection system.",
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Smoke is detected in the IFEC Center. The ventilation extraction fan automatically stops and electrical power to the IFE system is cut off. (word for word out of the FCOM)",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_OMA_54",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 8.2.2.1.2.3",
      "topic": "Policy",
      "question": "What is the definition of WCHS?",
      "options": [
        "a. Passengers who cannot ascend/descent steps but can make their own way slowly to/from their seats. (No restrictions on the number per flight).",
        "b. .",
        "c. ",
        "d. ",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Passengers who cannot ascend/descent steps but can make their own way slowly to/from their seats. (No restrictions on the number per flight).",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_55",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 8.1.2.1",
      "topic": "Policy",
      "question": "Which of the following criteria is NOT a requirement for a CAT A airport?",
      "options": [
        "a. At least one runway with no performance limited procedure for take off and/or landing",
        "b. Night operations capability",
        "c. Published circling minima not higher than 1000 feet AAL",
        "d. Availability of non-standard approach aids and/or approach patterns",
      ],
      "correct_answer": 3,
      "correct_answer_indication": "Availability of non-standard approach aids and/or approach patterns",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_OMA_56",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 1.1",
      "topic": "Policy",
      "question": "What is the Flight Operations Mission?",
      "options": [
        "a. To operate Emirates A/C in the most flexible and cost efficient way",
        "b. To operate Emirates A/C in the safest and most efficient manner",
        "c. To operate Emirates A/C in the safest and most cost effective way",
        "d. To operate Emirates A/C in the most economical and efficient manner",
      ],
      "correct_answer": 1,
      "correct_answer_indication": "To operate Emirates A/C in the safest and most efficient manner",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_57",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA ?",
      "topic": "Policy",
      "question": "Must a passenger who’s baggage has been offloaded as he is missing, be accepted after he is located?",
      "options": [
        "a. SMNC’s discretion",
        "b. Yes",
        "c. Captains discretion",
        "d. No",
      ],
      "correct_answer": 3,
      "correct_answer_indication": "No",
      "source_notes": "OTE: Baggage offload shall commence at -15 STD. If PAX found before baggage is offloaded they MAY be accepted at the discretion of the Captain.",
      "citation": ""
    },
    {
      "id": "OB_FCOM_106",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-DSC-24-System Description-Electrical Networks and Supply Centers-Supply Cneters",
      "topic": "Electrics",
      "question": "What does the Secondary Supply Center provide?",
      "options": [
        "a. Two Secondary Supply Centers distribute low loads (=<15A) To Normal Network",
        "b. Two Secondary Supply Centers distribute low loads (=<15A) To alternate Network",
        "c. ",
        "d. ",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Two Secondary Supply Centers distribute low loads (=<15A) To Normal Network",
      "source_notes": "NOTE: They are ventilated by avionics ventilation system AND by an assigned ventilation system",
      "citation": ""
    },
    {
      "id": "OB_FCOM_107",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-DSC-34-GPS-System Description-GPS Data to FMS",
      "topic": "Navigation",
      "question": "What GPS data is sent to the FMS via the ADIRS?",
      "options": [
        "a. GPS Position, GPS Mode, Number of satellites, Accuracy, True Track, UTC Time, GPS Alt, Groundspeed",
        "b. GPS Position, GPS Mode, Number of satellites, Accuracy, Magnetic Track, UTC Time, GPS Alt, Groundspeed",
        "c. ",
        "d. ",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "GPS Position, GPS Mode, Number of satellites, Accuracy, True Track, UTC Time, GPS Alt, Groundspeed",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_108",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-DSC-34-GPS-System Description-GPS Function-GPS Data to ADIRS",
      "topic": "Navigation",
      "question": "What information does the GPS send to the ADIRS?",
      "options": [
        "a. The MMR sends GPS position to the ADIRS to align the IR part",
        "b. The IR part also uses the GPS data to compute the GPS/IRS position",
        "c. a and b",
        "d. ",
      ],
      "correct_answer": 2,
      "correct_answer_indication": "The IR part also uses the GPS data to compute the GPS/IRS position",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_109",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-22 AFS FMS-System Description-Navigation functions-Aircraft Position-Position Computation Inertial-IRS Position",
      "topic": "Navigation",
      "question": "How does IRS alignment take place if the GPS position is not available?",
      "options": [
        "a. If the GPS position is not available or not accurate, the IRS alignment can start, and the ALIGN IRS message appears in the FMS message zone. The IRS’s calculate the aircraft position using raw data.",
        "b. IRS only navigation is still possible as the level of IRS accuracy is still deemed to be within 0.3nm.",
        "c. IRS alignment is available without GPS information as long as the aircraft is below 65N",
        "d. If the GPS position is not available or not accurate, the IRS alignment cannot start, and the ALIGN IRS message appears in the FMS message zone. In this case, the flight crew must enter the alignment reference point by entering the coordinates on the Align On Other Reference window on the POSITION /IRS page",
      ],
      "correct_answer": 3,
      "correct_answer_indication": "If the GPS position is not available or not accurate, the IRS alignment cannot start, and the ALIGN IRS message appears in the FMS message zone. In this case, the flight crew must enter the alignment reference point by entering the coordinates on the Align On Other Reference window on the POSITION /IRS page",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_FCOM_110",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-DSC-31-EFIS-PFD-Guidance-Flight Path Vector/Velocity Vector",
      "topic": "Navigation",
      "question": "If all ADR’s are OFF the bird is considered reliable - Why?",
      "options": [
        "a. If the ADR’s are OFF the bird is computed from the IRS data only and is considered reliable even if the Air Data is not reliable.",
        "b. The bird is always reliable",
        "c. If the ADR’s are OFF the bird is computed from GPS and IRS data only and is considered reliable even if the Air Data is not reliable.",
        "d. If the ADR’s are OFF the bird is computed from GPS data only and is considered reliable even if the Air Data is not reliable. NOTE: Not displayed unless it is reliable.",
      ],
      "correct_answer": 2,
      "correct_answer_indication": "If the ADR’s are OFF the bird is computed from GPS and IRS data only and is considered reliable even if the Air Data is not reliable.",
      "source_notes": "NOTE: Not displayed unless it is reliable",
      "citation": ""
    },
    {
      "id": "OB_FCOM_111",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-DSC-34-10-Radio Altimeter-Automatic Calllouts-Intermediate Callouts",
      "topic": "Navigation",
      "question": "How are RA callouts rounded between 400ft and 100ft?",
      "options": [
        "a. Lower 10ft (<100ft>Rounded to the lower ft)",
        "b. Lower 5ft (<50ft>Rounded to the lower ft)",
        "c. Lower 1ft (<1ft>Rounded to the lower ft)",
        "d. Lower 20ft (<200ft>Rounded to the lower ft)",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Lower 10ft (<100ft>Rounded to the lower ft)",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_112",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-NAV-ADIRS-NORM-ALIGN",
      "topic": "Navigation",
      "question": "How long does an IRS alignment take in LHR 51N?",
      "options": [
        "a. 8 min and 20 secs.",
        "b. 5 min.",
        "c. 10 min 35 secs.",
        "d. 3 min.",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "8 min and 20 secs.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_113",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-34-ADIRS-Normal Operations-IR Alignment-Complete Alignment",
      "topic": "Navigation",
      "question": "What is used to determine attitude in ADIRS?",
      "options": [
        "a. Gravity",
        "b. GPS",
        "c. Barometric pressure",
        "d. IRS",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Gravity",
      "source_notes": "NOTE: IN COMPLETE ALIGNMENT: ADIRS uses GRAVITY to determine the aircraft ATTITUDE (then true heading and present latitude",
      "citation": ""
    },
    {
      "id": "OB_FCOM_114",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-ABN-ECAM-10-34-10 NAV IR 1(2)(3) FAULT",
      "topic": "Navigation",
      "question": "With NAV IR 1(2)(3) fault, can IR be recovered at ATT mode if no ATT info showing?",
      "options": [
        "a. Yes. Turn IR 1(2)(3) MODE selector off for 3 mins then ATT",
        "b. It cannot be recovered in any mode",
        "c. Yes. Before setting IR to off, flight crew can try to recover the IR in ATT MODE. Set the IR 1(2)(3) MODE selector to OFF for 10secs then ATT mode.",
        "d. Yes. Before setting the IR off, the flight crew can try to recover IR in ATT mode. Set IR 1(2)(3) MODE selector to OFF mode.",
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Yes. Before setting IR to off, flight crew can try to recover the IR in ATT MODE. Set the IR 1(2)(3) MODE selector to OFF for 10secs then ATT mode.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_115",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-28-System Description-Fuel System Architecture-Weight and Balance Backup Computer",
      "topic": "Weight and Balance",
      "question": "The two WBBCs compute the GW and CG based on what?",
      "options": [
        "a. Based on aerodynamic data and the position of the flight control surfaces",
        "b. Fuel on board and fuel used",
        "c. Green dot speed and position of flight control surfaces ZFW and Fuel used",
        "d. Fuel used",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Based on aerodynamic data and the position of the flight control surfaces",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_RAIG_001",
      "section": "Open Book",
      "manual": "RAIG",
      "reference": "RAIG G2.1",
      "topic": "Weight and Balance",
      "question": "Whenever the commander suspects that the weight or balance of an aircraft is grossly in error, he should take which of the following actions?",
      "options": [
        "a. Press the EICAS Event Record Switch",
        "b. Maintaining the aircraft well within the safe operating envelope and buffet margin for the remainder of the flight",
        "c. Divert to the Nearest Suitable Airport?",
        "d. ",
      ],
      "correct_answer": 1,
      "correct_answer_indication": "Maintaining the aircraft well within the safe operating envelope and buffet margin for the remainder of the flight",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_116",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-SYS-33-Signs-System Description",
      "topic": "Pressurization",
      "question": "What lights come on Automatically with Excessive cabin Alt?",
      "options": [
        "a. Fasten seat belt and Exit signs",
        "b. Fasten Seat belt and Exit signs regardless of switch position",
        "c. ",
        "d. ",
      ],
      "correct_answer": 1,
      "correct_answer_indication": "Fasten seat belt and Exit signs regardless of switch position",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_117",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-LIM-Air BLD-CAB PRESS",
      "topic": "Pressurization",
      "question": "What is the normal max cabin altitude?",
      "options": [
        "a. 8000ft",
        "b. 6500ft",
        "c. 7500ft",
        "d. 5000ft",
      ],
      "correct_answer": 2,
      "correct_answer_indication": "7500ft",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_FCOM_118",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM DSC-22-FMS-Abnormal Operations-FMC Reset and Resynchronization-Automatic FMC Reset",
      "topic": "Autoflight",
      "question": "When does FMC auto reset?",
      "options": [
        "a. Software not working correctly or",
        "b. Receives instructions to perform operations that are not possible.",
        "c. ",
        "d. ",
      ],
      "correct_answer": 1,
      "correct_answer_indication": "Software not working correctly or Receives instructions to perform operations that are not possible.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_119",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM DSC-22-FMS-System Description-Navigation Functions-Aircraft Position-Estimated Position Uncertrainty (EPU)",
      "topic": "Navigation",
      "question": "When the IRS re-aligns on the ground, what value does the EPU go to?",
      "options": [
        "a. 0.2 nm",
        "b. 0.5 nm",
        "c. 0.1 nm",
        "d. 0.3 nm",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "0.2 nm",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_120",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM LIM-32-Taxi with Deflated Tires",
      "topic": "Navigation",
      "question": "When you need to taxi an aircraft with deflated tires, what is the maximum nose wheel steering angle?",
      "options": [
        "a. 25 degrees",
        "b. 7 degrees",
        "c. 30 degrees",
        "d. 65 degrees",
      ],
      "correct_answer": 2,
      "correct_answer_indication": "30 degrees",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_058",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 7.5",
      "topic": "Policy",
      "question": "What is the definition of local night?",
      "options": [
        "a. A period of 8hrs falling between 2200hrs and 0800hrs LOCAL TIME",
        "b. A period of 8hrs falling between 2200hrs and 0800hrs UTC TIME",
        "c. A period of 8hrs falling between 2000hrs and 0800hrs LOCAL TIME",
        "d. A period of 8hrs falling between 2000hrs and 0800hrs UTC TIME",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "A period of 8hrs falling between 2200hrs and 0800hrs LOCAL TIME",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OME_001",
      "section": "Open Book",
      "manual": "OME",
      "reference": "OME 5.5.6",
      "topic": "Policy",
      "question": "What should the cabin crew do when they hear “Purser to the flight deck”",
      "options": [
        "a. The remaining cabin crew will clear the cabin of all trolleys, return to their allocated cabin station, review the OM-E, and await a briefing call from either the Purser or the Commander.",
        "b. ",
        "c. ",
        "d. ",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "The remaining cabin crew will clear the cabin of all trolleys, return to their allocated cabin station, review the OM-E, and await a briefing call from either the Purser or the Commander.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_059",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 8.1.8.5",
      "topic": "Policy",
      "question": "What are the age and weight definitions for an adult passenger?",
      "options": [
        "a. Above 16 years. 80kg male. 72kg female",
        "b. above 15 years. 82kg male. 77kg female",
        "c. Above 12 years. 88kg male. 70kg female",
        "d. Above 14years. 87kg male. 75kg female",
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Above 12 years. 88kg male. 70kg female",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_121",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM DSC-31-Control and Display System-ECAM-System Description-Procedure Description-Procedure Description",
      "topic": "Indicating and recording systems",
      "question": "Auto Recall indication means?",
      "options": [
        "a. (AUTO RCL) indication next to a condition line of an ECAM procedure indicates that the procedure will automatically reappear when the applicable condition is met.",
        "b. After the flight crew performs all applicable actions, the flight crew can clear the procedure.",
        "c. When the condition becomes applicable, the ECAM will automatically display the procedure again to remind the flight crew to complete the relevant action steps.",
        "d. The ECAM uses the (AUTO RCL) function for all actions that may take a long time to perform.",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "(AUTO RCL) indication next to a condition line of an ECAM procedure indicates that the procedure will automatically reappear when the applicable condition is met.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_MEL_001",
      "section": "Open Book",
      "manual": "MEL",
      "reference": "MEL 32-42-05",
      "topic": "Brakes",
      "question": "BRAKES AUTO BRK FAULT Is T/O allowed with this failure?",
      "options": [
        "a. YES > Provided no AUTO BRK selected",
        "b. NO",
        "c. YES > Provided AUTO BRK selected",
        "d. ",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "YES > Provided no AUTO BRK selected",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_122",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM DSC-32-System Description-Landing Gear Extension Retraction System-Architecture-Landing Gear Control and Indication System",
      "topic": "Landing Gear",
      "question": "Which landing gear is extended first and why?",
      "options": [
        "a. To cope with all possibilities in terms of failure BLG and WLG.",
        "b. To cope with all possibilities in terms of failure NLG and WLG.",
        "c. To cope with all possibilities in terms of failure NLG and BLG.",
        "d. To cope with all possibilities in terms of failure WLG the BLG and NLG.",
      ],
      "correct_answer": 1,
      "correct_answer_indication": "To cope with all possibilities in terms of failure NLG and WLG.",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_FCOM_123",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM DSC-32-System Description-Tire Pressure Monitoring System-Tire Pressure Indicating System (TPIS)",
      "topic": "Landing Gear",
      "question": "What system measures the pressure of each tire?",
      "options": [
        "a. Tire pressures are not monitored",
        "b. The tire Pressure and Brake Indicating System",
        "c. The tire Pressure Monitoring System (TPMS)",
        "d. The Tire Pressure indicating system (TPIS)",
      ],
      "correct_answer": 3,
      "correct_answer_indication": "The Tire Pressure indicating system (TPIS)",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_FCOM_124",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM DSC-32-System Description-Landing Gear Extension and Retraction System-Architecture-Landing Gear Control and Indication SYstem (LGCIS)",
      "topic": "Landing Gear",
      "question": "In what order is the landing gear extended?",
      "options": [
        "a. All LG extend at the same time.",
        "b. WLG and BLG are extended first. After WLG down lock, the NLG extension proceeds.",
        "c. NLG and WLG extended first. After WLG down lock, the BLG freefalls into position.",
        "d. NLG and WLG are extended first. After WLG down lock, the BLG extension proceeds",
      ],
      "correct_answer": 3,
      "correct_answer_indication": " NLG and WLG are extended first. After WLG down lock, the BLG extension proceeds",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_125",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM DSC-32-Abnormal Operations-Landing Gear Gravity extension-Landing Gear Gravity Extension Control",
      "topic": "Landing Gear",
      "question": "How are the retraction actuators isolated from the hydraulic power during LANDING GEAR GRAVITY EXTENSION?",
      "options": [
        "a. When the crew selects the L/G GRVTY selector to the down position, the FFCMs generate and send the appropriate electrical commands to extend the landing gear by gravity. The commands are sequenced by a TIMER and sent in CHRONOLOGICAL order to the cut-out valves to isolate the retraction actuators from the hydraulic power.",
        "b. When the crew selects the L/G GRVTY selector to the down position, the FFCMs generate and send the appropriate electrical commands to extend the landing gear by gravity. The commands are sequenced by a TIMER and sent in CHRONOLOGICAL order to the cut-out valves to isolate the EXTENSION actuators from the hydraulic power.",
        "c. ",
        "d. ",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "When the crew selects the L/G GRVTY selector to the down position, the FFCMs generate and send the appropriate electrical commands to extend the landing gear by gravity. The commands are sequenced by a TIMER and sent in CHRONOLOGICAL order to the cut-out valves to isolate the retraction actuators from the hydraulic power.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCTM_013",
      "section": "Open Book",
      "manual": "FCTM",
      "reference": "FCTM-A/S-WX RAD-OPER IN CONV WX",
      "topic": "Surveillance",
      "question": "When considering actions to avoid thunderstorms what is the recommended minimum distance to decide by?",
      "options": [
        "a. 20 nm",
        "b. 30 nm",
        "c. 40 nm",
        "d. 50 nm",
      ],
      "correct_answer": 2,
      "correct_answer_indication": "40 nm",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_060",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 8.3.8.2",
      "topic": "Policy",
      "question": "What is the recommended lateral avoidance distance for thunderstorms with Strong Weather Radar echoes?",
      "options": [
        "a. 5nm at 20,000ft, 10NM at 25,000ft, 15NM at 30,000ft",
        "b. At least 10NM at or below FL200, and by at least 20NM above FL200",
        "c. 20 NM on all flight levels",
        "d. 10 NM on all flight levels",
      ],
      "correct_answer": 1,
      "correct_answer_indication": "At least 10NM at or below FL200, and by at least 20NM above FL200",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_OMA_061",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 8.1.3.3",
      "topic": "Policy",
      "question": "What is the Planning Minima for a Destination Alternate, if the only type of approach available is a non precision approach?",
      "options": [
        "a. Circling Minima plus 200 ft / 1,000 m",
        "b. Non-Precision Approach Minima plus 200 ft / 1,000 m",
        "c. Non-Precision Approach Minima",
        "d. Circling Minima",
      ],
      "correct_answer": 1,
      "correct_answer_indication": "Non-Precision Approach Minima plus 200 ft / 1,000 m",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_FCOM_126",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM DSC-22-FMS-Abnormal Operations-Independent Mode",
      "topic": "Autoflight",
      "question": "When does the FMS change from dual to independent mode?",
      "options": [
        "a. The FMS’s change from dual to independent mode if there is a single FMC failure",
        "b. When the NAV database is expired by more than 30 days",
        "c. When the FMS is asked to perform operations that are not possible",
        "d. The FMS’s change from dual to independent mode if there is a communication failure( avionics network problem)between the active FMC’s",
      ],
      "correct_answer": 3,
      "correct_answer_indication": "The FMS’s change from dual to independent mode if there is a communication failure( avionics network problem)between the active FMC’s",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_OMA_062",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 8.3.20.2.13",
      "topic": "Policy",
      "question": "On a standard SID what is the minimum turn height unless procedurally required?",
      "options": [
        "a. 200ft AGL",
        "b. 300ft AGL",
        "c. 400ft AGL",
        "d. 500ft AGL",
      ],
      "correct_answer": 2,
      "correct_answer_indication": "400ft AGL",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_063",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 8.1.5.1",
      "topic": "Policy",
      "question": "Which of the following requirements has NOT to be met, to allow qualified crews reducing their takeoff minima to 150 or 125 m respectively?",
      "options": [
        "a. High Intensity edge lights are spaced 60 m or less and are in operation.",
        "b. Low Visibility Procedures are in force.",
        "c. High intensity runway centerline lights are spaced 15 m or less and are in operation.",
        "d. The REIL must be in operation",
      ],
      "correct_answer": 3,
      "correct_answer_indication": "The REIL must be in operation",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_064",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 5.2.4.4",
      "topic": "Policy",
      "question": "Which of the following is NOT a First Officer restriction for takeoff or Landing?",
      "options": [
        "a. Wet runway",
        "b. Crosswind component exceeding 20kts",
        "c. Visibility less than 2 nm for takeoff",
        "d. Answer A and C",
      ],
      "correct_answer": 3,
      "correct_answer_indication": "Answer A and C",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_OMA_065",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 5.2.4.4",
      "topic": "Policy",
      "question": "Which of the following is NOT a First Officer restriction for takeoff or Landing?",
      "options": [
        "a. RWCC 4 or lower",
        "b. Crosswind component exceeding 20kts",
        "c. RVR 500m",
        "d. RWCC 5",
      ],
      "correct_answer": 3,
      "correct_answer_indication": "Answer A and C",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_OMA_066",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 5.2.16.2",
      "topic": "Policy",
      "question": "When may an FO NOT conduct a take-off?",
      "options": [
        "a. The runway is contaminated, the crosswind component exceeds 20kts, the visibility is 500m or less, the departure is from a CAT C aerodrome.",
        "b. The runway is contaminated, the crosswind component exceeds 20kts, the visibility is 500m or less, if aerodrome categorization is CAT C or CAT B*.",
        "c. The runway is contaminated, the crosswind component exceeds 20kts, the visibility is 500m or less,",
        "d. The runway is contaminated, the crosswind component exceeds 15kts, the visibility is 150m or less, the departure is from a CAT B or CAT C aerodrome.",
      ],
      "correct_answer": 1,
      "correct_answer_indication": "The runway is contaminated, the crosswind component exceeds 20kts, the visibility is 500m or if aerodrome categorization is CAT C or CAT B*.",
      "source_notes": "NOTE: CTA C AND SOME CAT B* AIRPORTS ARE LIMITED TO CM1 TAKEOFFS AND LANDINGS",
      "citation": ""
    },
    {
      "id": "OB_FCOM_127",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM DSC-22-FG-Autothrust-A/THR Disconnection",
      "topic": "Autoflight",
      "question": "How do you disconnect the A/THR with the Instinctive disconnect pb?",
      "options": [
        "a. The flight crew presses ONE A/THR instinctive disconnect pushbutton",
        "b. The flight crew sets all the thrust levers at the idle detent",
        "c. The flight crew presses the A/THR pb (This is applicable, if neither LAND nor FLARE is engaged)",
        "d. The A/THR becomes inoperative.",
        "e. One of the preliminary engagement conditions required for A/THR arming or activation is no longer met.",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "The flight crew presses ONE A/THR instinctive disconnect pushbutton",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_128",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM PRO-NOR-SOP-Cockpit Preparation-Glareshield-Barometric Reference",
      "topic": "Autoflight",
      "question": "What is the maximum altitude difference between both PFD’s and between ISIS and PFD, after setting the QNH on the EFIS CP and on the ISIS?",
      "options": [
        "a. The maximum difference is i. +/- 20ft between both PFD’s ii. +/- 30ft between ISIS and PFD",
        "b. The maximum difference is i. +/- 30ft between both PFD’s ii. +/- 30ft between ISIS and PFD",
        "c. The maximum difference is i. +/- 30ft between both PFD’s ii. +/- 20ft between ISIS and PFD",
        "d. The maximum difference is i. +/- 30ft between both PFD’s only",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "The maximum difference is i. +/- 20ft between both PFD’s ii. +/- 30ft between ISIS and PFD",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_FCOM_129",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-DSC-31-Control and Display System-EFIS-VD-Vertical Display Range",
      "topic": "Indicating and Recording systems",
      "question": "What is th max range if the VD on the ND?",
      "options": [
        "a. Up to 165NM",
        "b. Up to 125NM",
        "c. Cannot exceed 160NM",
        "d. Cannot exceed 180NM",
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Cannot exceed 160NM",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_068",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 8.1.5.1",
      "topic": "Policy",
      "question": "What is the minimum visibility for take-off when the RVR are reported in all the relevant points and with Edge lights + runway RCLL?",
      "options": [
        "a. 125m",
        "b. 150m",
        "c. 200m",
        "d. 300m",
      ],
      "correct_answer": 1,
      "correct_answer_indication": "150m",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_069",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 8.1.5.1",
      "topic": "Policy",
      "question": "Is take off permitted if no RVR is provided?",
      "options": [
        "a. Takeoff is not permitted if RVR is not reported",
        "b. Only if LVO’s not in force",
        "c. When no reported meteorological visibility or RVR is available, a takeoff may only be commenced if the commander can determine that the RVR/visibility along the take-off runway is equal to or better than the required minimum",
        "d. When no reported meteorological visibility or RVR is available, a takeoff may only be commenced if the commander can determine that the RVR/visibility along the take-off runway is equal to or better than 200m",
      ],
      "correct_answer": 2,
      "correct_answer_indication": "When no reported meteorological visibility or RVR is available, a takeoff may only be commenced if the commander can determine that the RVR/visibility along the take-off runway is equal to or better than the required minimum",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_070",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 8.1.5.3.1",
      "topic": "Policy",
      "question": "Which lighting system is NOT an approved visual clue during a CAT 1 approach?",
      "options": [
        "a. Runway Centre Line Lights",
        "b. Runway edge lights",
        "c. Runway threshold lights or identification lights",
        "d. Runway identification lights",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Runway Centre Line Lights",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OME_002",
      "section": "Open Book",
      "manual": "OME",
      "reference": "OME 11.15.8",
      "topic": "Policy",
      "question": "Who must the Captain inform in case of a major infectious disease on board?",
      "options": [
        "a. Medical and Health authorities at destination on arrival",
        "b. VPNC",
        "c. EK Medical services",
        "d. None of the above",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Medical and Health authorities at destination on arrival",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_130",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM DCS-34-Surveillance-System Description-Architecture-Surv Sys",
      "topic": "Navigation",
      "question": "When on the ground which AESU SYS 1(2) is selected as the MASTER?",
      "options": [
        "a. If the flight number is ODD then SYS 1 and when the flight number is EVEN then SYS 2. This enables detection of hidden failures.",
        "b. ",
        "c. ",
        "d. ",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "If the flight number is ODD then SYS 1 and when the flight number is EVEN then SYS 2. This enables detection of hidden failures.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_131",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-GEN-GMAI",
      "topic": "Autoflight",
      "question": "When does the Climb Phase erroneous transition during a Go Around?",
      "options": [
        "a. If the flight crew performs several missed approaches with both following conditions: i. The acceleration alt set in the FMS for the current go-around is above the accelerations alt set during the previous go-around ii. The flight crew initiates the go-around, when the alt of the aircraft is above the acceleration alt set during the previous go-around.",
        "b. ",
        "c. ",
        "d. ",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "If the flight crew performs several missed approaches with both following conditions: i. The acceleration alt set in the FMS for the current go-around is above the accelerations alt set during the previous go-around ii. The flight crew initiates the go-around, when the alt of the aircraft is above the acceleration alt set during the previous go-around.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMC_006",
      "section": "Open Book",
      "manual": "OMC",
      "reference": "OMC 10.3.1/LIDO 1.3.10",
      "topic": "Procedures",
      "question": "In a SNOWTAM decode, what does (P)YES60 mean? (“YES” followed by lateral distance apart (meters) : 60 m)",
      "options": [
        "a. Taxiway Snowbanks higher than 60cm and 60m apart",
        "b. Taxiway Snowbanks higher than 600cm and 60m apart",
        "c. Taxiway Snowbanks higher than 60m and 60cm apart",
        "d. Taxiway Snowbanks higher than 6cm and 6m apart",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Taxiway Snowbanks higher than 60cm and 60m apart",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMC_007",
      "section": "Open Book",
      "manual": "OMC",
      "reference": "OMC 10.3.1?/LIDO 1.3.9.4",
      "topic": "Procedures",
      "question": "In a GRF snowtam what does M) RWY 14L SNOWBANK R30 FM CL mean",
      "options": [
        "a. Snowbanks on the runway 300m from the centreline to the right",
        "b. Snowbanks on the runway 300m from the centreline to the left",
        "c. Snowbanks on the runway 30m from the centreline to the right",
        "d. Snowbanks on the runway 30m from the centreline to the left",
      ],
      "correct_answer": 2,
      "correct_answer_indication": "Snowbanks on the runway 30m from the centreline to the right",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_071",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 8.3.20.2.22",
      "topic": "Policy",
      "question": "Descent and approach: to which approximate rate of decent value should the descent be limited?",
      "options": [
        "a. 4000ft/min to 4000ft",
        "b. 3000ft/min to 3000ft",
        "c. 2000ft/min to 2000ft",
        "d. 1000ft/min to 1000ft",
      ],
      "correct_answer": 1,
      "correct_answer_indication": "3000ft/min to 3000ft",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_OME_003",
      "section": "Open Book",
      "manual": "OME",
      "reference": "OME 10.5.18.2",
      "topic": "Policy",
      "question": "What is the definition of a DEPO?",
      "options": [
        "a. Deportees (DEPO) are persons who have either legally been admitted to a country or obtained entry illegally to a country or whose permits have been rescinded for whatever reason and who are subsequently ordered out of the country",
        "b. A person charged with a criminal offence and is wanted by the authorities.",
        "c. A person who is refused entry by the Immigration Authorities",
        "d. A person who is detained by the Immigration Authorities",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Deportees (DEPO) are persons who have either legally been admitted to a country or obtained entry illegally to a country or whose permits have been rescinded for whatever reason and who are subsequently ordered out of the country",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCOM_132",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM PER-TOF-CTA: Effects on Performance",
      "topic": "Performance",
      "question": "On a contaminated runway what is the effect of precipitation drag?",
      "options": [
        "a. It improves deceleration which has a positive effect during reject and reduces acceleration which has a negative effect during T/O.",
        "b. It negatively effects the deceleration rate, this has a negative effect in the case of a rejected takeoff.",
        "c. It increases the acceleration rate, this has a positive effect during takeoff.",
        "d. It has no effect on the deceleration rate.",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "It improves deceleration which has a positive effect during reject and reduces acceleration which has a negative effect during T/O.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMC_008",
      "section": "Open Book",
      "manual": "OMC",
      "reference": "OMC 10.3.8.8",
      "topic": "Procedures",
      "question": "For holdover times, how should Snow Grains and Snow pellets be treated?",
      "options": [
        "a. As snow",
        "b. As ice pellets",
        "c. As freezing fog",
        "d. As rain on a cold soaked wing",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "As snow",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_OMC_009",
      "section": "Open Book",
      "manual": "OMC",
      "reference": "OMC 10.3.9.7/GOM CHAP20 5.3",
      "topic": "Procedures",
      "question": "What is the definition of LOUT (Lowest Operation Use Temperature)?",
      "options": [
        "a. The lowest temperature at which the fluid meets the aerodynamic acceptance test (according to AS5900) for a given type (high speed or low speed) of airplane; or the freezing point of the fluid plus the freezing point buffer of 10°C (18°F) for all fluid types",
        "b. The highest of lowest temperature at which the fluid meets the aerodynamic acceptance test (according to AS5900) for a given type (high speed or low speed) of airplane; or the freezing point of the fluid plus the freezing point buffer of 10°C (18°F) for Type I fluid and 7°C (13°F) for Type II, III, or IV fluids.",
        "c. The highest of lowest temperature at which the fluid meets the aerodynamic acceptance test (according to AS5900) for a given type (high speed or low speed) of airplane; or the freezing point of the fluid plus the freezing point buffer of 10°C (18°F) for all fluid types.",
        "d. The highest of lowest temperature at which the fluid meets the aerodynamic acceptance test (according to AS5900) for a given type (high speed or low speed) of airplane; or the freezing point of the fluid plus the freezing point buffer of 7°C (13°F) for Type I fluid and 7°C (13°F) for Type II, III, or IV fluids.",
      ],
      "correct_answer": 1,
      "correct_answer_indication": "The highest of lowest temperature at which the fluid meets the aerodynamic acceptance test (according to AS5900) for a given type (high speed or low speed) of airplane; or the freezing point of the fluid plus the freezing point buffer of 10°C (18°F) for Type I fluid and 7°C (13°F) for Type II, III, or IV fluids.",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_072",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 5.2.3",
      "topic": "Policy",
      "question": "At Above what FL may a commander delegate the conduct of a flight to a qualified Relief Pilot that is not a Commander?",
      "options": [
        "a. Initial cruise altitude",
        "b. FL100",
        "c. FL200",
        "d. FL300",
      ],
      "correct_answer": 2,
      "correct_answer_indication": "FL200",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_073",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 2.4.1",
      "topic": "Policy",
      "question": "The VPNC in coordination with relevant stakeholder representatives in NCC, shall ensure that",
      "options": [
        "a. A Commander has been designated, the required crew complement has been allocated and that they meet all required competency and recency requirements.",
        "b. The aircraft is properly prepared for the flight and that all maintenance requirements have been met, and will continue to be met, for the duration of the flight.",
        "c. An Operational Flight Plan has been prepared and all dispatch requirements have been met.",
        "d. All the above",
      ],
      "correct_answer": 3,
      "correct_answer_indication": "All the above",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_074",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 9.4.3.3",
      "topic": "Policy",
      "question": "Where can the provisions for DG (Dangerous Goods) carried by passengers and crew be found?",
      "options": [
        "a. IATA Dangerous Goods Regulations Section 2 – Limitations",
        "b. IATA Dangerous Goods Regulations Section 10 – Limitations",
        "c. IATA Dangerous Goods Regulations Section 4 – Limitations",
        "d. ",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "IATA Dangerous Goods Regulations Section 2 – Limitations",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_075",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 2.1.3.1",
      "topic": "Policy",
      "question": "Which Flight document(s) are NOT required to be retained on ground at the aerodrome of departure until the aircraft returns to Dubai?",
      "options": [
        "a. Route specific NOTAM documentation it edited by Emirates.",
        "b. A copy of the Master Operational Flight plan (OFP)",
        "c. Mass and balance documentation (Load Sheet)",
        "d. Significant Weather Documentation",
      ],
      "correct_answer": 3,
      "correct_answer_indication": "Significant Weather Documentation",
      "source_notes": "NOTE: ACTUAL EXAM QUESTION",
      "citation": ""
    },
    {
      "id": "OB_FCOM_133",
      "section": "Open Book",
      "manual": "FCOM",
      "reference": "FCOM-PRO-ABN-ECAM-10-80:MISC BOMB ON BOARD",
      "topic": "Miscellaneous",
      "question": "What is the altitude equivalent to 1psi?",
      "options": [
        "a. 1500ft",
        "b. 2000ft",
        "c. 2500ft",
        "d. 3000ft",
      ],
      "correct_answer": 2,
      "correct_answer_indication": "2500ft",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_076",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 6.1.14",
      "topic": "Policy",
      "question": "A crew Member should not fly within 12 hours of a no decompression dive. Up to how many hours are required if the dive required decompression stops?",
      "options": [
        "a. 24 hours",
        "b. 12 hours",
        "c. 48 hours",
        "d. 36 hours",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "24 hours",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_FCI_002",
      "section": "Open Book",
      "manual": "FCI",
      "reference": "FCI 2024-21/FCOM-PRO-NOR-SUP-GPS Interference-Enroute-After the Interference Area",
      "topic": "Procedures",
      "question": "What would you do if the Clock is set to INT when entering oceanic airspace?",
      "options": [
        "a. Contact Dispatch.",
        "b. Inform ATC.",
        "c. ADS C will show clock at INT.",
        "d. You must set clock to GPS when GPS 1 is unavailable",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Contact Dispatch.",
      "source_notes": "Very close to EXAM Question",
      "citation": ""
    },
    {
      "id": "OB_OMA_077",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 6.1.15",
      "topic": "Policy",
      "question": "How long must you wait after giving blood before you can go flying?",
      "options": [
        "a. 24 hours",
        "b. 12 hours",
        "c. 48 hours",
        "d. 36 hours",
      ],
      "correct_answer": 2,
      "correct_answer_indication": "48 hours",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_078",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 8.3.20.3.10",
      "topic": "Policy",
      "question": "Following an Overweight landing what items should be reported in the techlog?",
      "options": [
        "a. The ACTUAL Landing weights",
        "b. The Takeoff weight and Landing weight",
        "c. The ZF, TAKEOFF and Landing weight",
        "d. None of the above",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "The ACTUAL Landing weights",
      "source_notes": "",
      "citation": ""
    },
    {
      "id": "OB_OMA_079",
      "section": "Open Book",
      "manual": "OMA",
      "reference": "OMA 1.6.4.3.3",
      "topic": "Policy",
      "question": "Who is responsible to ensure the aircraft is loaded correctly?",
      "options": [
        "a. Aircraft shall be loaded in accordance with the respective Weight and Balance Manual to obtain the best Centre of gravity that the load permits. This responsibility lies with the Handling Agent/Loadmaster who should ensure that the Centre of gravity limits are not exceeded",
        "b. ",
        "c. ",
        "d. ",
      ],
      "correct_answer": 0,
      "correct_answer_indication": "Aircraft shall be loaded in accordance with the respective Weight and Balance Manual to obtain the best Centre of gravity that the load permits. This responsibility lies with the Handling Agent/Loadmaster who should ensure that the Centre of gravity limits are not exceeded",
      "source_notes": "",
      "citation": ""
    },
  ]
};
