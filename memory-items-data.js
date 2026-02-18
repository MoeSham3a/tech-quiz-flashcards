// ============================================================
// A380 Memory Items — Procedure Database
// Source: UAE A380 FCOM (PRO-ABN chapter)
// Each step has: id, text, actor (PF/PM/BOTH/—), and optional note
// ============================================================

const memoryItemsProcedures = [

    // ─────────────────────────────────────────────────────────────────────────
    {
        id: 'loss-of-braking',
        title: 'Loss of Braking',
        reference: 'PRO-ABN-BRAKES',
        description: 'If the braking system does not automatically reconfigure after a significant failure.',
        category: 'Abnormal',
        steps: [
            {
                id: 1,
                text: 'REV — MAX',
                actor: 'PF',
                note: 'If needed, maximum reverse thrust may be kept until full aircraft stop.'
            },
            {
                id: 2,
                text: 'BRAKE PEDALS — RELEASE',
                actor: 'PF',
                note: 'Release before A-SKID is set OFF to avoid brutal braking application.'
            },
            {
                id: 3,
                text: 'A-SKID OFF — ORDER',
                actor: 'PF',
                note: 'PF orders PM to select A-SKID OFF.'
            },
            {
                id: 4,
                text: 'A-SKID — OFF',
                actor: 'PM',
                note: 'Emergency braking mode is activated.'
            },
            {
                id: 5,
                text: 'BRAKE PEDALS — PRESS',
                actor: 'PF',
                note: 'Pressure on the brakes is automatically limited.'
            },
            {
                id: 6,
                text: 'PARK BRK — ON (if still no braking)',
                actor: 'PF',
                note: 'Ultimate braking mode. If ground spoilers not extended, parking brake only is activated.'
            },
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
        id: 'emer-descent',
        title: 'Emergency Descent',
        reference: 'PRO-ABN-MISC',
        description: 'Initiate an emergency descent to a safe altitude.',
        category: 'Abnormal',
        steps: [
            {
                id: 1,
                text: 'CREW OXY MASKS — USE',
                actor: 'BOTH',
                note: null
            },
            {
                id: 2,
                text: 'SIGNS — ON',
                actor: 'BOTH',
                note: null
            },
            {
                id: 3,
                text: 'EMER DESCENT — INITIATE',
                actor: 'BOTH',
                note: null
            },
            {
                id: 4,
                text: 'ALL THR LEVERS — IDLE (if A/THR not active)',
                actor: 'PF',
                note: 'Only if A/THR is not active.'
            },
            {
                id: 5,
                text: 'SPEED BRAKE LEVER — FULL (if A/THR not active)',
                actor: 'PF',
                note: 'Only if A/THR is not active.'
            },
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
        id: 'stall-recovery',
        title: 'Stall Recovery',
        reference: 'PRO-ABN-MISC',
        description: 'Apply as soon as any stall indication is recognized (aural warning, buffet, etc.).',
        category: 'Abnormal',
        steps: [
            {
                id: 1,
                text: 'NOSE DOWN PITCH CONTROL — APPLY',
                actor: 'PF',
                note: 'Reduces angle of attack. If lack of pitch down authority, reducing thrust may be necessary.'
            },
            {
                id: 2,
                text: 'BANK — WINGS LEVEL',
                actor: 'PF',
                note: null
            },
            {
                id: 3,
                text: 'THRUST — INCREASE SMOOTHLY AS NEEDED',
                actor: 'PF',
                note: 'When out of stall (no longer stall indications). If OEI, progressively compensate thrust asymmetry with rudder.'
            },
            {
                id: 4,
                text: 'SPEEDBRAKES — CHECK RETRACTED',
                actor: 'PF',
                note: 'When out of stall.'
            },
            {
                id: 5,
                text: 'FLIGHT PATH — RECOVER SMOOTHLY',
                actor: 'PF',
                note: 'When out of stall.'
            },
            {
                id: 6,
                text: 'FLAPS 1 — SELECT (if clean config and below 20,000 ft)',
                actor: 'PF',
                note: 'Only if in clean configuration and below 20,000 ft.'
            },
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
        id: 'stall-warning-liftoff',
        title: 'Stall Warning at Liftoff',
        reference: 'PRO-ABN-MISC',
        description: 'If stall warnings trigger at liftoff.',
        category: 'Abnormal',
        steps: [
            {
                id: 1,
                text: 'THRUST — TOGA',
                actor: 'PF',
                note: 'Apply simultaneously with pitch attitude.'
            },
            {
                id: 2,
                text: 'PITCH ATTITUDE — 12.5°',
                actor: 'PF',
                note: 'Apply simultaneously with TOGA thrust.'
            },
            {
                id: 3,
                text: 'BANK — WINGS LEVEL',
                actor: 'PF',
                note: null
            },
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
        id: 'unreliable-airspeed',
        title: 'Unreliable Airspeed Indication',
        reference: 'PRO-ABN-NAV',
        description: 'If safe conduct of flight is impacted by unreliable airspeed.',
        category: 'Abnormal',
        steps: [
            {
                id: 1,
                text: 'AP — OFF',
                actor: 'PF',
                note: null
            },
            {
                id: 2,
                text: 'A/THR — OFF',
                actor: 'PF',
                note: null
            },
            {
                id: 3,
                text: 'FD — OFF',
                actor: 'PF',
                note: null
            },
            {
                id: 4,
                text: 'ALL THR LEVERS — TOGA',
                actor: 'PF',
                note: 'Before thrust reduction. Pitch target: 12.5° below 10,000 ft / 10° above 10,000 ft.'
            },
            {
                id: 5,
                text: 'ALL THR LEVERS — CLB',
                actor: 'PF',
                note: 'After thrust reduction. Pitch target: 12.5° below FL100 / 10° FL100–FL250 / 5° above FL250.'
            },
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
        id: 'taws-caution',
        title: 'TAWS Caution — Night / IMC',
        reference: 'PRO-ABN-MISC',
        description: '"OBSTACLE AHEAD", "TERRAIN AHEAD", "TERRAIN, TERRAIN", "TOO LOW TERRAIN" — during night or IMC conditions.',
        category: 'Abnormal',
        steps: [
            {
                id: 1,
                text: 'AP — OFF',
                actor: 'PF',
                note: 'Simultaneously with pitch and thrust.'
            },
            {
                id: 2,
                text: 'PITCH — PULL UP (full backstick)',
                actor: 'PF',
                note: 'Pull up to full backstick and maintain.'
            },
            {
                id: 3,
                text: 'THRUST LEVERS — TOGA',
                actor: 'PF',
                note: 'Simultaneously.'
            },
            {
                id: 4,
                text: 'SPEED BRAKE LEVER — CHECK RETRACTED',
                actor: 'PF',
                note: null
            },
            {
                id: 5,
                text: 'BANK — WINGS LEVEL or ADJUST',
                actor: 'PF',
                note: 'Best climb when wings level. Can adjust bank if turning is safest action.'
            },
            {
                id: 6,
                text: 'DO NOT CHANGE CONFIGURATION until clear of obstacle',
                actor: 'BOTH',
                note: 'No slats/flaps or gear changes until clear.'
            },
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
        id: 'taws-warning',
        title: 'TAWS Warning — PULL UP',
        reference: 'PRO-ABN-MISC',
        description: '"PULL UP" / "TERRAIN AHEAD, PULL UP" / "OBSTACLE AHEAD, PULL UP"',
        category: 'Abnormal',
        steps: [
            {
                id: 1,
                text: 'AP — OFF',
                actor: 'PF',
                note: 'Simultaneously with pitch and thrust.'
            },
            {
                id: 2,
                text: 'PITCH — PULL UP (full backstick)',
                actor: 'PF',
                note: 'Pull up to full backstick and maintain.'
            },
            {
                id: 3,
                text: 'THRUST LEVERS — TOGA',
                actor: 'PF',
                note: 'Simultaneously.'
            },
            {
                id: 4,
                text: 'SPEED BRAKE LEVER — CHECK RETRACTED',
                actor: 'PF',
                note: null
            },
            {
                id: 5,
                text: 'BANK — WINGS LEVEL or ADJUST',
                actor: 'PF',
                note: 'Best climb when wings level. Can adjust bank if turning is safest action.'
            },
            {
                id: 6,
                text: 'DO NOT CHANGE CONFIGURATION until clear of obstacle',
                actor: 'BOTH',
                note: 'No slats/flaps or gear changes until clear.'
            },
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
        id: 'tcas-ta',
        title: 'TCAS Caution — Traffic Advisory (TA)',
        reference: 'PRO-ABN-MISC',
        description: 'Actions when a TCAS Traffic Advisory is received.',
        category: 'Abnormal',
        steps: [
            {
                id: 1,
                text: 'TCAS MODE — CHECK ARMED (blue)',
                actor: 'BOTH',
                note: 'If AP/FD TCAS mode is available, it arms. Be prepared to apply TCAS procedure if RA follows.'
            },
            {
                id: 2,
                text: 'A/THR — ON (if A/THR is off)',
                actor: 'PF',
                note: 'Set A/THR ON to avoid AUTO FLT A/THR LIMITED alert if RA is triggered.'
            },
            {
                id: 3,
                text: 'DO NOT MANEUVER based on TA alone',
                actor: 'BOTH',
                note: null
            },
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
        id: 'tcas-ra-ap-fd',
        title: 'TCAS Warning — Resolution Advisory (AP/FD TCAS Mode)',
        reference: 'PRO-ABN-MISC',
        description: 'When RA triggers and AP/FD TCAS mode engages. For all RA except CLIMB RA during approach in CONF 3 or FULL.',
        category: 'Abnormal',
        steps: [
            {
                id: 1,
                text: 'FD ORDERS — FOLLOW',
                actor: 'PF',
                note: 'AP can be engaged. AP/FD TCAS mode follows RA orders.'
            },
            {
                id: 2,
                text: 'VERTICAL SPEED — MONITOR',
                actor: 'PF',
                note: 'Preventive RA: check VS remains out of red area. Corrective RA: check VS gets into green area.'
            },
            {
                id: 3,
                text: 'ATC — NOTIFY',
                actor: 'PM',
                note: 'When "CLEAR OF CONFLICT" sounds.'
            },
            {
                id: 4,
                text: 'LATERAL AND VERTICAL GUIDANCE — ADJUST',
                actor: 'PF',
                note: 'Engage appropriate vertical mode per latest ATC clearance.'
            },
            {
                id: 5,
                text: 'SPEED — ADJUST',
                actor: 'PF',
                note: 'Adjust speed target and revert to managed speed as appropriate.'
            },
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
        id: 'tcas-ra-basic',
        title: 'TCAS Warning — Resolution Advisory (Basic TCAS)',
        reference: 'PRO-ABN-MISC',
        description: 'When RA triggers and AP/FD TCAS mode does NOT engage. For all RA except CLIMB RA during approach in CONF 3 or FULL.',
        category: 'Abnormal',
        steps: [
            {
                id: 1,
                text: 'AP (if engaged) — OFF',
                actor: 'PF',
                note: 'Respond promptly and smoothly.'
            },
            {
                id: 2,
                text: 'FDs — OFF',
                actor: 'PF',
                note: null
            },
            {
                id: 3,
                text: 'VERTICAL SPEED — ADJUST or MAINTAIN',
                actor: 'PF',
                note: 'Adjust or maintain VS as required to stay in green area and avoid red area.'
            },
            {
                id: 4,
                text: 'ATC — NOTIFY',
                actor: 'PM',
                note: 'When "CLEAR OF CONFLICT" sounds.'
            },
            {
                id: 5,
                text: 'LATERAL AND VERTICAL GUIDANCE — ADJUST',
                actor: 'PF',
                note: 'Resume normal navigation per ATC clearance.'
            },
            {
                id: 6,
                text: 'AP/FD — AS REQUIRED',
                actor: 'PF',
                note: 'Reengage AP/FD if necessary.'
            },
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
        id: 'windshear-airborne',
        title: 'Windshear Warning — Reactive (Airborne)',
        reference: 'PRO-ABN-MISC',
        description: 'When airborne (initial climb or landing) and windshear is detected.',
        category: 'Abnormal',
        steps: [
            {
                id: 1,
                text: 'THR LEVERS — TOGA (set or confirm)',
                actor: 'PF',
                note: null
            },
            {
                id: 2,
                text: 'AP (if engaged) — KEEP ON',
                actor: 'PF',
                note: null
            },
            {
                id: 3,
                text: 'SRS ORDERS — FOLLOW',
                actor: 'PF',
                note: 'If FD bars not displayed, pitch toward 12.5°. Increase pitch if necessary to prevent altitude loss. Full backstick may be applied if necessary.'
            },
            {
                id: 4,
                text: 'DO NOT CHANGE CONFIGURATION until out of windshear',
                actor: 'BOTH',
                note: 'No slats/flaps or gear changes.'
            },
            {
                id: 5,
                text: 'CAREFULLY MONITOR FLIGHT PATH AND SPEED',
                actor: 'BOTH',
                note: null
            },
            {
                id: 6,
                text: 'WHEN OUT OF WINDSHEAR — SMOOTHLY RECOVER NORMAL CLIMB',
                actor: 'BOTH',
                note: null
            },
        ]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
        id: 'windshear-takeoff-after-v1',
        title: 'Windshear Warning — Reactive (Takeoff, After V1)',
        reference: 'PRO-ABN-MISC',
        description: 'Windshear encountered during takeoff after V1.',
        category: 'Abnormal',
        steps: [
            {
                id: 1,
                text: 'THR LEVERS — TOGA',
                actor: 'PF',
                note: null
            },
            {
                id: 2,
                text: 'REACHING VR — ROTATE',
                actor: 'PF',
                note: null
            },
            {
                id: 3,
                text: 'SRS ORDERS — FOLLOW',
                actor: 'PF',
                note: 'If FD bars not displayed, pitch toward 12.5°. Increase pitch if necessary to prevent altitude loss.'
            },
        ]
    },

];
