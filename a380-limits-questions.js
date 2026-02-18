// ============================================================
// A380 Limitations Quiz — Question Database
// Source: UAE A380 FCOM (LIM chapter)
// ============================================================

const a380LimitsQuestions = [

    // ── FLIGHT MANEUVERING LOADS ─────────────────────────────────────────────
    {
        id: 1,
        category: 'Flight Loads',
        question: 'What is the maximum positive load factor limit in clean configuration?',
        answer: '+2.5',
        unit: 'g',
        hint: 'Enter as a number (e.g. 2.5)',
        acceptedAnswers: ['+2.5', '2.5', '+2.5g', '2.5g']
    },
    {
        id: 2,
        category: 'Flight Loads',
        question: 'What is the minimum (negative) load factor limit in clean configuration?',
        answer: '-1',
        unit: 'g',
        hint: 'Enter as a number (e.g. -1)',
        acceptedAnswers: ['-1', '-1g', '-1.0', '-1.0g']
    },
    {
        id: 3,
        category: 'Flight Loads',
        question: 'What is the maximum positive load factor limit in configurations other than clean?',
        answer: '+2',
        unit: 'g',
        hint: 'Enter as a number',
        acceptedAnswers: ['+2', '2', '+2g', '2g', '+2.0', '2.0']
    },
    {
        id: 4,
        category: 'Flight Loads',
        question: 'What is the minimum (negative) load factor limit in configurations other than clean?',
        answer: '0',
        unit: 'g',
        hint: 'Enter as a number',
        acceptedAnswers: ['0', '0g', '0.0']
    },

    // ── SPEEDS ───────────────────────────────────────────────────────────────
    {
        id: 5,
        category: 'Speeds',
        question: 'What is the VMO (Maximum Operating Speed)?',
        answer: '340',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['340', '340kt', '340 kt']
    },
    {
        id: 6,
        category: 'Speeds',
        question: 'What is the MMO (Maximum Operating Mach Number)?',
        answer: '0.89',
        unit: 'M',
        hint: 'Enter as a Mach number (e.g. 0.89)',
        acceptedAnswers: ['0.89', 'M0.89', 'm0.89', '.89']
    },
    {
        id: 7,
        category: 'Speeds',
        question: 'What is the VLE / VLO (maximum speed with landing gear extended or operating)?',
        answer: '250',
        unit: 'kt / M0.55',
        hint: 'Enter in knots',
        acceptedAnswers: ['250', '250kt', '250 kt', '250/M0.55', '250kt/M0.55']
    },
    {
        id: 8,
        category: 'Speeds',
        question: 'What is the maximum speed for landing gear gravity extension (VLE/VLO gravity)?',
        answer: '220',
        unit: 'kt / M0.48',
        hint: 'Enter in knots',
        acceptedAnswers: ['220', '220kt', '220 kt', '220/M0.48']
    },
    {
        id: 9,
        category: 'Speeds',
        question: 'What is the maximum tire speed (maximum ground speed)?',
        answer: '204',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['204', '204kt', '204 kt']
    },
    {
        id: 10,
        category: 'Speeds',
        question: 'What is the maximum speed for opening the cockpit window?',
        answer: '250',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['250', '250kt', '250 kt']
    },
    {
        id: 11,
        category: 'Speeds',
        question: 'What is the maximum speed for closing the cockpit window?',
        answer: '160',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['160', '160kt', '160 kt']
    },
    {
        id: 12,
        category: 'Speeds',
        question: 'What is the maximum speed for windshield wipers operation?',
        answer: '250',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['250', '250kt', '250 kt']
    },
    {
        id: 13,
        category: 'Speeds',
        question: 'What is the maximum speed for Flaps 1 (slats 20°, flaps 0°)?',
        answer: '263',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['263', '263kt', '263 kt']
    },
    {
        id: 14,
        category: 'Speeds',
        question: 'What is the maximum speed for Flaps 1+F (slats 20°, flaps 8°)?',
        answer: '222',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['222', '222kt', '222 kt']
    },
    {
        id: 15,
        category: 'Speeds',
        question: 'What is the maximum speed for Flaps 2 (slats 20°, flaps 17°)?',
        answer: '220',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['220', '220kt', '220 kt']
    },
    {
        id: 16,
        category: 'Speeds',
        question: 'What is the maximum speed for Flaps 3 (slats 23°, flaps 26°)?',
        answer: '196',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['196', '196kt', '196 kt']
    },
    {
        id: 17,
        category: 'Speeds',
        question: 'What is the maximum speed for Flaps FULL (slats 23°, flaps 33°)?',
        answer: '182',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['182', '182kt', '182 kt']
    },

    // ── WIND LIMITS ──────────────────────────────────────────────────────────
    {
        id: 18,
        category: 'Wind',
        question: 'What is the maximum certified crosswind for takeoff (gust included)?',
        answer: '35',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['35', '35kt', '35 kt']
    },
    {
        id: 19,
        category: 'Wind',
        question: 'What is the maximum certified crosswind for landing (gust included)?',
        answer: '40',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['40', '40kt', '40 kt']
    },
    {
        id: 20,
        category: 'Wind',
        question: 'What is the maximum tailwind for takeoff?',
        answer: '15',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['15', '15kt', '15 kt']
    },
    {
        id: 21,
        category: 'Wind',
        question: 'What is the maximum tailwind for landing at airports at or below 8,000 ft pressure altitude?',
        answer: '15',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['15', '15kt', '15 kt']
    },
    {
        id: 22,
        category: 'Wind',
        question: 'What is the maximum tailwind for landing at airports above 8,000 ft pressure altitude?',
        answer: '10',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['10', '10kt', '10 kt']
    },
    {
        id: 23,
        category: 'Wind',
        question: 'What is the maximum crosswind for autoland (automatic landing)?',
        answer: '30',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['30', '30kt', '30 kt']
    },
    {
        id: 24,
        category: 'Wind',
        question: 'What is the maximum headwind for autoland (automatic landing)?',
        answer: '38',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['38', '38kt', '38 kt']
    },
    {
        id: 25,
        category: 'Wind',
        question: 'What is the maximum wind for cabin or cargo door operation (general)?',
        answer: '40',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['40', '40kt', '40 kt']
    },
    {
        id: 26,
        category: 'Wind',
        question: 'What is the maximum wind for cabin/cargo door operation if the aircraft nose is oriented into the wind?',
        answer: '50',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['50', '50kt', '50 kt']
    },
    {
        id: 27,
        category: 'Wind',
        question: 'Cabin and cargo doors must be closed before the wind reaches what speed?',
        answer: '60',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['60', '60kt', '60 kt']
    },

    // ── RECOMMENDED CROSSWIND — TAKEOFF ─────────────────────────────────────
    {
        id: 28,
        category: 'Crosswind (Takeoff)',
        question: 'Max recommended crosswind for TAKEOFF on a DRY runway (RWYCC 6)?',
        answer: '35',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['35', '35kt', '35 kt']
    },
    {
        id: 29,
        category: 'Crosswind (Takeoff)',
        question: 'Max recommended crosswind for TAKEOFF on damp, wet (≤3mm), slush (≤3mm), dry/wet snow (≤3mm), or frost (RWYCC 5)?',
        answer: '35',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['35', '35kt', '35 kt']
    },
    {
        id: 30,
        category: 'Crosswind (Takeoff)',
        question: 'Max recommended crosswind for TAKEOFF on compacted snow (OAT ≤ -15°C) — RWYCC 4?',
        answer: '27',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['27', '27kt', '27 kt']
    },
    {
        id: 31,
        category: 'Crosswind (Takeoff)',
        question: 'Max recommended crosswind for TAKEOFF on dry snow (>3mm to 100mm), wet snow (>3mm to 30mm), snow over compacted snow, compacted snow (OAT > -15°C), or slippery wet — RWYCC 3?',
        answer: '20',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['20', '20kt', '20 kt']
    },
    {
        id: 32,
        category: 'Crosswind (Takeoff)',
        question: 'Max recommended crosswind for TAKEOFF on standing water (>3mm to 13mm) or slush (>3mm to 13mm) — RWYCC 2?',
        answer: '20',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['20', '20kt', '20 kt']
    },
    {
        id: 33,
        category: 'Crosswind (Takeoff)',
        question: 'Max recommended crosswind for TAKEOFF on ice (cold & dry) — RWYCC 1?',
        answer: '15',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['15', '15kt', '15 kt']
    },

    // ── RECOMMENDED CROSSWIND — LANDING ─────────────────────────────────────
    {
        id: 34,
        category: 'Crosswind (Landing)',
        question: 'Max recommended crosswind for LANDING on a DRY runway (RWYCC 6)?',
        answer: '40',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['40', '40kt', '40 kt']
    },
    {
        id: 35,
        category: 'Crosswind (Landing)',
        question: 'Max recommended crosswind for LANDING on damp, wet (≤3mm), slush (≤3mm), dry/wet snow (≤3mm), or frost (RWYCC 5)?',
        answer: '40',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['40', '40kt', '40 kt']
    },
    {
        id: 36,
        category: 'Crosswind (Landing)',
        question: 'Max recommended crosswind for LANDING on compacted snow (OAT ≤ -15°C) — RWYCC 4?',
        answer: '27',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['27', '27kt', '27 kt']
    },
    {
        id: 37,
        category: 'Crosswind (Landing)',
        question: 'Max recommended crosswind for LANDING on dry snow (>3mm to 100mm), wet snow (>3mm to 30mm), snow over compacted snow, compacted snow (OAT > -15°C), or slippery wet — RWYCC 3?',
        answer: '20',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['20', '20kt', '20 kt']
    },
    {
        id: 38,
        category: 'Crosswind (Landing)',
        question: 'Max recommended crosswind for LANDING on standing water (>3mm to 13mm) or slush (>3mm to 13mm) — RWYCC 2?',
        answer: '20',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['20', '20kt', '20 kt']
    },
    {
        id: 39,
        category: 'Crosswind (Landing)',
        question: 'Max recommended crosswind for LANDING on ice (cold & dry) — RWYCC 1?',
        answer: '15',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['15', '15kt', '15 kt']
    },

    // ── WEIGHTS ──────────────────────────────────────────────────────────────
    {
        id: 40,
        category: 'Weights',
        question: 'What is the Maximum Landing Weight (MLW)?',
        answer: '395,000',
        unit: 'kg',
        hint: 'Enter in kg (all weight variants share this value)',
        acceptedAnswers: ['395000', '395,000', '395000kg', '395,000kg', '395 000']
    },
    {
        id: 41,
        category: 'Weights',
        question: 'What is the Minimum Weight?',
        answer: '270,000',
        unit: 'kg',
        hint: 'Enter in kg',
        acceptedAnswers: ['270000', '270,000', '270000kg', '270,000kg', '270 000']
    },
    {
        id: 42,
        category: 'Weights',
        question: 'What is the MTOW for Weight Variant WV003?',
        answer: '510,000',
        unit: 'kg',
        hint: 'Enter in kg',
        acceptedAnswers: ['510000', '510,000', '510000kg', '510 000']
    },
    {
        id: 43,
        category: 'Weights',
        question: 'What is the MZFW for Weight Variant WV003?',
        answer: '373,000',
        unit: 'kg',
        hint: 'Enter in kg',
        acceptedAnswers: ['373000', '373,000', '373000kg', '373 000']
    },
    {
        id: 44,
        category: 'Weights',
        question: 'What is the MTOW for Weight Variant WV011?',
        answer: '575,000',
        unit: 'kg',
        hint: 'Enter in kg',
        acceptedAnswers: ['575000', '575,000', '575000kg', '575 000']
    },
    {
        id: 45,
        category: 'Weights',
        question: 'What is the MTOW for Weight Variant WV012?',
        answer: '569,000',
        unit: 'kg',
        hint: 'Enter in kg',
        acceptedAnswers: ['569000', '569,000', '569000kg', '569 000']
    },

    // ── ALTITUDES ────────────────────────────────────────────────────────────
    {
        id: 46,
        category: 'Altitudes',
        question: 'What is the maximum operating altitude with flaps and/or slats extended?',
        answer: '20,000',
        unit: 'ft',
        hint: 'Enter in feet',
        acceptedAnswers: ['20000', '20,000', '20000ft', 'fl200', 'FL200']
    },
    {
        id: 47,
        category: 'Altitudes',
        question: 'What is the maximum altitude at which the landing gear can be extended?',
        answer: '21,000',
        unit: 'ft',
        hint: 'Enter in feet',
        acceptedAnswers: ['21000', '21,000', '21000ft']
    },
    {
        id: 48,
        category: 'Altitudes',
        question: 'What is the maximum altitude for APU bleed air supply?',
        answer: '22,500',
        unit: 'ft',
        hint: 'Enter in feet',
        acceptedAnswers: ['22500', '22,500', '22500ft']
    },
    {
        id: 49,
        category: 'Altitudes',
        question: 'What is the maximum altitude for APU generator operation in flight (one generator only)?',
        answer: '22,500',
        unit: 'ft',
        hint: 'Enter in feet',
        acceptedAnswers: ['22500', '22,500', '22500ft']
    },

    // ── TEMPERATURES ─────────────────────────────────────────────────────────
    {
        id: 50,
        category: 'Temperatures',
        question: 'What is the minimum TAT (Total Air Temperature) for flight?',
        answer: '-53',
        unit: '°C',
        hint: 'Enter in °C',
        acceptedAnswers: ['-53', '-53c', '-53°c', '-53 c', '-53°C']
    },
    {
        id: 51,
        category: 'Temperatures',
        question: 'What is the maximum fuel temperature?',
        answer: '+53',
        unit: '°C',
        hint: 'Enter in °C',
        acceptedAnswers: ['53', '+53', '53c', '+53c', '53°c', '+53°c']
    },
    {
        id: 52,
        category: 'Temperatures',
        question: 'What is the maximum brake temperature for takeoff?',
        answer: '300',
        unit: '°C',
        hint: 'Enter in °C',
        acceptedAnswers: ['300', '300c', '300°c', '300 c']
    },
    {
        id: 53,
        category: 'Temperatures',
        question: 'What is the minimum engine oil temperature prior to takeoff (EA engines)?',
        answer: '50',
        unit: '°C',
        hint: 'Enter in °C',
        acceptedAnswers: ['50', '50c', '50°c', '50 c']
    },
    {
        id: 54,
        category: 'Temperatures',
        question: 'What is the minimum engine oil temperature prior to takeoff (RR engines)?',
        answer: '40',
        unit: '°C',
        hint: 'Enter in °C',
        acceptedAnswers: ['40', '40c', '40°c', '40 c']
    },
    {
        id: 55,
        category: 'Temperatures',
        question: 'What is the minimum engine oil starting temperature (both EA and RR engines)?',
        answer: '-40',
        unit: '°C',
        hint: 'Enter in °C',
        acceptedAnswers: ['-40', '-40c', '-40°c', '-40 c']
    },
    {
        id: 56,
        category: 'Temperatures',
        question: 'What is the maximum EGT for takeoff and go-around (EA engines, all engines operative)?',
        answer: '1002',
        unit: '°C',
        hint: 'Enter in °C',
        acceptedAnswers: ['1002', '1002c', '1002°c', '1002 c']
    },
    {
        id: 57,
        category: 'Temperatures',
        question: 'What is the maximum EGT for MCT (Maximum Continuous Thrust) — EA engines?',
        answer: '970',
        unit: '°C',
        hint: 'Enter in °C',
        acceptedAnswers: ['970', '970c', '970°c']
    },
    {
        id: 58,
        category: 'Temperatures',
        question: 'What is the maximum EGT for engine starting on the ground (EA engines)?',
        answer: '745',
        unit: '°C',
        hint: 'Enter in °C',
        acceptedAnswers: ['745', '745c', '745°c']
    },
    {
        id: 59,
        category: 'Temperatures',
        question: 'What is the maximum EGT for engine starting in flight (EA engines)?',
        answer: '865',
        unit: '°C',
        hint: 'Enter in °C',
        acceptedAnswers: ['865', '865c', '865°c']
    },
    {
        id: 60,
        category: 'Temperatures',
        question: 'What is the maximum EGT for takeoff and go-around (RR engines, all engines operative)?',
        answer: '900',
        unit: '°C',
        hint: 'Enter in °C',
        acceptedAnswers: ['900', '900c', '900°c']
    },
    {
        id: 61,
        category: 'Temperatures',
        question: 'What is the maximum EGT for MCT (Maximum Continuous Thrust) — RR engines?',
        answer: '850',
        unit: '°C',
        hint: 'Enter in °C',
        acceptedAnswers: ['850', '850c', '850°c']
    },
    {
        id: 62,
        category: 'Temperatures',
        question: 'What is the maximum EGT for engine starting on the ground (RR engines)?',
        answer: '700',
        unit: '°C',
        hint: 'Enter in °C',
        acceptedAnswers: ['700', '700c', '700°c']
    },
    {
        id: 63,
        category: 'Temperatures',
        question: 'What is the APU maximum EGT (indicated)?',
        answer: '900',
        unit: '°C',
        hint: 'Enter in °C',
        acceptedAnswers: ['900', '900c', '900°c']
    },
    {
        id: 64,
        category: 'Temperatures',
        question: 'What is the APU maximum EGT for starting on the ground?',
        answer: '700',
        unit: '°C',
        hint: 'Enter in °C',
        acceptedAnswers: ['700', '700c', '700°c']
    },
    {
        id: 65,
        category: 'Temperatures',
        question: 'What is the APU maximum EGT for starting in flight?',
        answer: '800',
        unit: '°C',
        hint: 'Enter in °C',
        acceptedAnswers: ['800', '800c', '800°c']
    },

    // ── APU ──────────────────────────────────────────────────────────────────
    {
        id: 66,
        category: 'APU',
        question: 'What is the APU maximum N1 speed?',
        answer: '106',
        unit: '%',
        hint: 'Enter as a percentage',
        acceptedAnswers: ['106', '106%']
    },
    {
        id: 67,
        category: 'APU',
        question: 'What is the APU maximum N2 speed?',
        answer: '102',
        unit: '%',
        hint: 'Enter as a percentage',
        acceptedAnswers: ['102', '102%']
    },
    {
        id: 68,
        category: 'APU',
        question: 'What is the maximum Mach number for APU operation (normal conditions)?',
        answer: '0.56',
        unit: 'M',
        hint: 'Enter as a Mach number',
        acceptedAnswers: ['0.56', 'M0.56', 'm0.56', '.56']
    },
    {
        id: 69,
        category: 'APU',
        question: 'How long must you wait after an aborted APU start or APU shutdown before a new start attempt?',
        answer: '60',
        unit: 'seconds',
        hint: 'Enter in seconds',
        acceptedAnswers: ['60', '60s', '60 s', '60sec', '60 sec', '60seconds']
    },
    {
        id: 70,
        category: 'APU',
        question: 'After three consecutive APU start attempts, how long must you wait before a new start attempt?',
        answer: '60',
        unit: 'minutes',
        hint: 'Enter in minutes',
        acceptedAnswers: ['60', '60min', '60 min', '60mins', '60 mins', '60minutes', '1hr', '1 hr', '1hour']
    },

    // ── CABIN PRESSURE ───────────────────────────────────────────────────────
    {
        id: 71,
        category: 'Cabin Pressure',
        question: 'What is the maximum positive cabin differential pressure?',
        answer: '9.65',
        unit: 'PSI',
        hint: 'Enter in PSI',
        acceptedAnswers: ['9.65', '9.65psi', '9.65 psi']
    },
    {
        id: 72,
        category: 'Cabin Pressure',
        question: 'What is the maximum negative cabin differential pressure?',
        answer: '-0.725',
        unit: 'PSI',
        hint: 'Enter in PSI',
        acceptedAnswers: ['-0.725', '-0.725psi', '-0.725 psi', '0.725', '0.725psi']
    },

    // ── FUEL ─────────────────────────────────────────────────────────────────
    {
        id: 73,
        category: 'Fuel',
        question: 'What is the minimum fuel quantity in each feed tank before pushback (when transfer tanks are not empty)?',
        answer: '4,000',
        unit: 'kg',
        hint: 'Enter in kg',
        acceptedAnswers: ['4000', '4,000', '4000kg', '4,000kg']
    },
    {
        id: 74,
        category: 'Fuel',
        question: 'What is the maximum allowed wing fuel imbalance between Feed tank 1 and Feed tank 4 (or Feed tank 2 and Feed tank 3)?',
        answer: '3,000',
        unit: 'kg',
        hint: 'Enter in kg',
        acceptedAnswers: ['3000', '3,000', '3000kg', '3,000kg']
    },
    {
        id: 75,
        category: 'Fuel',
        question: 'What is the maximum allowed fuel imbalance between left and right mid tanks?',
        answer: '2,500',
        unit: 'kg',
        hint: 'Enter in kg',
        acceptedAnswers: ['2500', '2,500', '2500kg', '2,500kg']
    },
    {
        id: 76,
        category: 'Fuel',
        question: 'What is the maximum allowed fuel imbalance between left and right outer tanks?',
        answer: '1,200',
        unit: 'kg',
        hint: 'Enter in kg',
        acceptedAnswers: ['1200', '1,200', '1200kg', '1,200kg']
    },

    // ── RUNWAY ───────────────────────────────────────────────────────────────
    {
        id: 77,
        category: 'Runway',
        question: 'What is the minimum runway width for A380 operations?',
        answer: '45',
        unit: 'm',
        hint: 'Enter in metres',
        acceptedAnswers: ['45', '45m', '45 m', '45meters', '45metres']
    },
    {
        id: 78,
        category: 'Runway',
        question: 'What is the maximum mean runway slope?',
        answer: '2',
        unit: '%',
        hint: 'Enter as a percentage (e.g. 2)',
        acceptedAnswers: ['2', '2%', '±2', '±2%', '+/-2', '+/-2%']
    },

    // ── AUTOPILOT ────────────────────────────────────────────────────────────
    {
        id: 79,
        category: 'Autopilot',
        question: 'What is the minimum height for autopilot engagement at takeoff?',
        answer: '100',
        unit: 'ft AGL',
        hint: 'Enter in feet AGL',
        acceptedAnswers: ['100', '100ft', '100 ft', '100ft agl']
    },
    {
        id: 80,
        category: 'Autopilot',
        question: 'What is the minimum height for autopilot use during a non-precision approach?',
        answer: '200',
        unit: 'ft AGL',
        hint: 'Enter in feet AGL',
        acceptedAnswers: ['200', '200ft', '200 ft', '200ft agl']
    },
    {
        id: 81,
        category: 'Autopilot',
        question: 'What is the minimum height for autopilot use during an ILS approach with APPR1 displayed on FMA?',
        answer: '160',
        unit: 'ft AGL',
        hint: 'Enter in feet AGL',
        acceptedAnswers: ['160', '160ft', '160 ft', '160ft agl']
    },
    {
        id: 82,
        category: 'Autopilot',
        question: 'What is the minimum height for autopilot use in all other phases (not approach or takeoff)?',
        answer: '500',
        unit: 'ft AGL',
        hint: 'Enter in feet AGL',
        acceptedAnswers: ['500', '500ft', '500 ft', '500ft agl']
    },
    {
        id: 83,
        category: 'Autopilot',
        question: 'What is the minimum decision height for a GLS CAT I approach?',
        answer: '200',
        unit: 'ft',
        hint: 'Enter in feet',
        acceptedAnswers: ['200', '200ft', '200 ft']
    },
    {
        id: 84,
        category: 'Autopilot',
        question: 'What is the minimum decision height for an ILS CAT II approach?',
        answer: '100',
        unit: 'ft',
        hint: 'Enter in feet',
        acceptedAnswers: ['100', '100ft', '100 ft']
    },
    {
        id: 85,
        category: 'Autopilot',
        question: 'What is the minimum decision height for an ILS CAT III Fail-Passive approach?',
        answer: '50',
        unit: 'ft',
        hint: 'Enter in feet',
        acceptedAnswers: ['50', '50ft', '50 ft']
    },
    {
        id: 86,
        category: 'Autopilot',
        question: 'What is the CAT III Fail-Operational alert height?',
        answer: '200',
        unit: 'ft',
        hint: 'Enter in feet',
        acceptedAnswers: ['200', '200ft', '200 ft']
    },
    {
        id: 87,
        category: 'Autopilot',
        question: 'What is the minimum RVR for CAT III Fail-Operational (no DH) operations?',
        answer: '75',
        unit: 'm',
        hint: 'Enter in metres',
        acceptedAnswers: ['75', '75m', '75 m', '75meters', '75metres']
    },

    // ── LANDING GEAR ─────────────────────────────────────────────────────────
    {
        id: 88,
        category: 'Landing Gear',
        question: 'What is the maximum taxi speed with deflated tires?',
        answer: '3',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['3', '3kt', '3 kt']
    },
    {
        id: 89,
        category: 'Landing Gear',
        question: 'What is the maximum nosewheel steering angle when taxiing with deflated tires?',
        answer: '30',
        unit: '°',
        hint: 'Enter in degrees',
        acceptedAnswers: ['30', '30°', '30 degrees', '30deg']
    },
    {
        id: 90,
        category: 'Landing Gear',
        question: 'What is the maximum taxi speed with one abnormal wing or body landing gear?',
        answer: '5',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['5', '5kt', '5 kt']
    },

    // ── ENGINE SHAFT SPEEDS ──────────────────────────────────────────────────
    {
        id: 91,
        category: 'Engine',
        question: 'What is the maximum N1 speed for EA engines?',
        answer: '111',
        unit: '%',
        hint: 'Enter as a percentage',
        acceptedAnswers: ['111', '111%']
    },
    {
        id: 92,
        category: 'Engine',
        question: 'What is the maximum N2 speed for EA engines?',
        answer: '118.7',
        unit: '%',
        hint: 'Enter as a percentage',
        acceptedAnswers: ['118.7', '118.7%']
    },
    {
        id: 93,
        category: 'Engine',
        question: 'What is the maximum N1 speed for RR (Trent 900) engines?',
        answer: '97.2',
        unit: '%',
        hint: 'Enter as a percentage',
        acceptedAnswers: ['97.2', '97.2%']
    },
    {
        id: 94,
        category: 'Engine',
        question: 'What is the maximum N3 speed for RR (Trent 900) engines?',
        answer: '97.8',
        unit: '%',
        hint: 'Enter as a percentage',
        acceptedAnswers: ['97.8', '97.8%']
    },
    {
        id: 95,
        category: 'Engine',
        question: 'What is the minimum engine oil pressure (EA engines)?',
        answer: '25',
        unit: 'PSI',
        hint: 'Enter in PSI',
        acceptedAnswers: ['25', '25psi', '25 psi']
    },
    {
        id: 96,
        category: 'Engine',
        question: 'Below what speed should maximum reverse thrust NOT be used?',
        answer: '70',
        unit: 'kt',
        hint: 'Enter in knots',
        acceptedAnswers: ['70', '70kt', '70 kt']
    },
    {
        id: 97,
        category: 'Engine',
        question: 'What is the maximum flex temperature above ISA for a reduced thrust takeoff?',
        answer: '60',
        unit: '°C above ISA',
        hint: 'Enter in °C (the ISA offset)',
        acceptedAnswers: ['60', '60c', '60°c', 'isa+60', 'isa + 60']
    },

    // ── NAVIGATION ───────────────────────────────────────────────────────────
    {
        id: 98,
        category: 'Navigation',
        question: 'What is the maximum latitude for IRS ground alignment (North)?',
        answer: '82',
        unit: '°N',
        hint: 'Enter in degrees North',
        acceptedAnswers: ['82', '82n', '82°n', '82 north', '82°north', '82 degrees north']
    },
    {
        id: 99,
        category: 'Navigation',
        question: 'What is the maximum latitude for IRS ground alignment (South)?',
        answer: '78.25',
        unit: '°S',
        hint: 'Enter in degrees South',
        acceptedAnswers: ['78.25', '78.25s', '78.25°s', '78.25 south']
    },
    {
        id: 100,
        category: 'Navigation',
        question: 'What is the minimum pressure altitude for transponder altitude reporting?',
        answer: '-1,000',
        unit: 'ft',
        hint: 'Enter in feet (negative value)',
        acceptedAnswers: ['-1000', '-1,000', '-1000ft', '-1,000ft']
    },

];
