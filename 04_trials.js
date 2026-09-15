const practice_trials = {
    sliderRating: [
        {
            item: "998",
            QUD: "<b>Angelika</b>: <I>„Trägt Kilian häufig schwarz, so wie gestern?“</I>",
            question: "Wie sehr legt sich Angelika mit ihrer Frage darauf fest, dass es auf Kilian zutrifft, dass er häufig schwarz trägt?",
            optionLeft: "gar nicht",
            optionRight: "voll und ganz",
            explanation: "Da Angelika dies nur fragt, legt sie sich damit nicht darauf fest, ob es auf Kilian zutrifft, dass er häufig schwarz trägt. Der Regler müsste daher weit nach links, zu „gar nicht“.",
            trigger: "practice",
            condition: "1",
            questionIndexInItem: 1,
            totalQuestionsInItem: 2,
            question_type: "PJ",
            inference_type: "none",
            lexicalisation: "none"
        },
        {
            item: "998",
            QUD: "<b>Angelika</b>: <I>„Trägt Kilian häufig schwarz, so wie gestern?“</I>",
            question: "Wie sehr legt sich Angelika mit ihrer Frage darauf fest, dass es auf Kilian zutrifft, dass er gestern schwarz getragen hat?",
            optionLeft: "gar nicht",
            optionRight: "voll und ganz",
            explanation: "Da Angelika mit ihrem Zusatz „so wie gestern“ eine Aussage macht, legt sie sich damit darauf fest, dass es auf Kilian zutrifft, dass er gestern schwarz getragen hat. Der Regler müsste daher nah zu „voll und ganz“.",
            trigger: "practice",
            condition: "2",
            questionIndexInItem: 2,
            totalQuestionsInItem: 2,
            question_type: "PJ",
            inference_type: "none",
            lexicalisation: "none"
        },
        {
            item: "999",
            QUD: "<b>Torsten</b>: <I>„Ist Miriam heute so schlecht gelaunt wie letzte Woche?“</I>",
            question: "Wie sehr legt sich Torsten mit seiner Frage darauf fest, dass es auf Miriam zutrifft, dass sie heute schlecht gelaunt ist?",
            optionLeft: "gar nicht",
            optionRight: "voll und ganz",
            explanation: "Da Torsten dies nur fragt, legt er sich damit nicht darauf fest, ob es auf Miriam zutrifft, dass sie heute schlecht gelaunt ist. Der Regler müsste daher weit nach links, zu „gar nicht“.",
            trigger: "practice",
            condition: "1",
            questionIndexInItem: 1,
            totalQuestionsInItem: 2,
            question_type: "PJ",
            inference_type: "none",
            lexicalisation: "none"
        },
        {
            item: "999",
            QUD: "<b>Torsten</b>: <I>„Ist Miriam heute so schlecht gelaunt wie letzte Woche?“</I>",
            question: "Wie sehr legt sich Torsten mit seiner Frage darauf fest, dass es auf Miriam zutrifft, dass sie letzte Woche schlechte Laune hatte?",
            optionLeft: "gar nicht",
            optionRight: "voll und ganz",
            explanation: "Da Torsten mit seinem Zusatz „wie letzte Woche“ eine Aussage macht, legt er sich damit darauf fest, dass es auf Miriam zutrifft, dass sie letzte Woche schlechte Laune hatte. Der Regler müsste daher nah zu „voll und ganz“.",
            trigger: "practice",
            condition: "2",
            questionIndexInItem: 2,
            totalQuestionsInItem: 2,
            question_type: "PJ",
            inference_type: "none",
            lexicalisation: "none"
        }
    ]
};

/* generate the main trials for this participant: groups all questions
belonging to the same item/filler together, randomises the order of
items (respecting the Außer-gap constraint) and randomises the order of
each item's own questions. See create_trials() in 02_custom_functions.js */
var main_trial_new = create_trials(maintrials_PJ);
