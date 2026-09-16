// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: "intro",
  text: `<p>Bitte setzen Sie sich zur Bearbeitung der folgenden Studie in einen ruhigen Raum.
      Führen Sie die Studie am PC durch (nicht am Tablet oder einem Smartphone).
      Bitte schließen Sie jetzt alle im Hintergrund laufenden Programme oder Anwendungen
      und lassen Sie diese bis zum Ende der Studie geschlossen.
      Schalten Sie bitte auch ihr Mobilfunkgerät / Smartphone aus.
      Bitte konzentrieren Sie sich so gut wie möglich.</p>`,
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  title: `Herzlich willkommen zu unserem Experiment!`,
  buttonText: "Weiter"
});

const participantInfo = magpieViews.view_generator("instructions", {
  trials: 1,
  name: "information_participant",
  text: `<p>Liebe/r Studienteilnehmer/in,</p>
		<p>unsere Arbeitsgruppe beschäftigt sich mit der <strong>Verarbeitung von Sätzen im Deutschen</strong>. <br/>
		Daf&uuml;r suchen wir <u>Erwachsene zwischen 18 und 36 Jahren mit Deutsch als Muttersprache</u>, die an unserer Studie teilnehmen.<br/>
		Die Teilnahme ist freiwillig.</p>
		<p>&nbsp;</p>
		<p><strong>Was wird untersucht?</strong></p>
		<p>Diese Studie dient dazu herauszufinden, wie Muttersprachler unterschiedliche Frageinhalte in Bezug auf zuvor gelesene Fragen bewerten.
    Mithilfe dieser Bewertungen versuchen wir theoretische Annahmen linguistischer Phänomene experimentell zu untersuchen.
    Falls Sie mehr über die Studie erfahren möchten, können Sie im Anschluss an das Experiment eine E-Mail an nadine.balbach@uni-tuebingen.de senden.
    </p>
		<p>&nbsp;</p>
		<p>Bei dieser Durchführung handelt es sich um eine <strong>Pilotstudie</strong>. Ziel ist es, das Studiendesign sowie die verwendeten Sätze und Formulierungen
    vorab zu überprüfen, bevor die eigentliche Hauptstudie durchgeführt wird. Ihre Teilnahme hilft uns dabei herauszufinden, ob der Ablauf verständlich ist
    und die Sätze wie beabsichtigt funktionieren.</p>
		<p>&nbsp;</p>
		<p><strong>Wie sieht der allgemeine Ablauf aus?</strong></p>
		<p>Nachdem Sie sich alle Punkte der Einverständniserklärung auf der kommenden Seite durchgelesen und angeklickt haben, <br/>
		können Sie an der Untersuchung teilnehmen.<br/>
		Das Experiment dauert ca. eine halbe Stunde.<br/>
		Hierfür werden Sie insgesamt ${main_trial_new.length} Fragen zu ca. 48 kurzen Texten lesen und jeweils eine Bewertung dazu abgeben (zu jedem Text werden Ihnen dabei nacheinander mehrere Fragen gestellt, der Text bleibt dabei oben auf der Seite stehen).
    Zusätzlich zu der Bewertung erheben wir die Zeit, die Sie jeweils zum Lesen der Frage und der Bewertung benötigen. <br/>
		Das Vorgehen wird Ihnen noch einmal genauer am PC mit Hilfe von zwei Übungsdurchgängen erläutert.<br/>
    Im Anschluss an das Experiment bitten wir Sie, noch ein paar personenbezogene Fragen zu Alter, Geschlecht, Händigkeit,
    sprachlichem Hintergrund, Bildung, Fragen zum Studium sowie eigene Kommentare zum Experiment am PC auszufüllen.
    Bei einigen wenigen, zufällig ausgewählten Fragen werden Sie zusätzlich gebeten, kurz in ein paar Worten zu kommentieren,
    warum Sie so geantwortet haben bzw. was Sie sich dabei gedacht haben. Das dient uns zum besseren Verständnis Ihrer Antworten
    und tritt bewusst nur bei einigen wenigen, zufällig ausgewählten Fragen auf - nicht bei jedem.</p>
		<p>Als Dankeschön für die Teilnahme erhalten Sie 4 Euro für eine halbe Stunde (Stundensatz 8 Euro pro Stunde).<br/>
		</p>
		<p>&nbsp;</p>
		<p><strong>Was geschieht mit den Daten?</strong></p>
		<p>Im Rahmen der Studie werden personenbezogene Daten (Alter, Geschlecht, Händigkeit, sprachlicher Hintergrund, Bildung und Fragen zum Studium sowie eigene Kommentare zum Experiment)
    sowie Ihre Prolific ID erhoben und verarbeitet.<br/>
		Diese personenbezogenen Daten werden zusammen mit den Antworten im Experiment auf einem Server der Universität Osnabrück abgespeichert.<br/>
		IP-Adressen, MAC-Adressen oder Ortungs-Daten sind im Rahmen der Studien nicht relevant und werden demnach nicht erhoben.<br/>
		Sie haben die Möglichkeit, die Löschung Ihrer Daten zu veranlassen, indem Sie uns zusammen mit der Angabe Ihrer Prolific ID eine E-Mail an nadine.balbach@uni-tuebingen.de oder eine Nachricht über Prolific senden.<br/>
		Die Löschung der Prolific ID erfolgt nach Datenauswertung spätestens am 31.12.2022.<br/>
    <p>Bis die Daten vollständig anonymisiert sind, haben nur Mitarbeiter der Arbeitsgruppen der Projektleiter und Projektmitarbeiter des Projektes B2 Zugriff.
    Die Mitarbeiter der Arbeitsgruppen der Projektleiter und Projektmitarbeiter des Projektes B2 unterliegen der Schweigepflicht und dem Datenschutz.</p>
		<p>Sobald Ihre Prolific ID gelöscht ist, ist ihr Datensatz anonymisiert und kann dann nicht mehr gelöscht werden.</p>
		<p>Die anonymisierten Daten werden mindestens 10 Jahre gespeichert und können für zukünftige Forschungsvorhaben genutzt und weiterverarbeitet werden.<br/>
		Die Forschungsergebnisse aus der Studie werden in anonymisierter Form in Fachzeitschriften oder in wissenschaftlichen Datenbanken veröffentlicht.<br/>
		Bei der Veröffentlichung der Forschungsergebnisse wird Ihre Identität nicht bekannt.</p>
		<p>&nbsp;</p>
    <p><strong>Speicherung der anonymisierten Daten in Open-Science Repositorien</strong></p>
    <p>Die vollständig anonymisierten Daten dieser Studie sollen zudem als offene Daten im Internet in einem Datenarchiv
    zugänglich gemacht werden.
    Damit folgt diese Studie den Empfehlungen der Deutschen Forschungsgemeinschaft (DFG) zur Qualitätssicherung in der Forschung.</p>
    <p>&nbsp;</p>
		<p><strong>Kann ich von der Teilnahme zurücktreten?</strong></p>
		<p>Ja, Sie können das Experiment, bis Sie den letzten Button &bdquo;CONFIRM&ldquo; betätigen, jederzeit und ohne Angabe von Gründen abbrechen, ohne dass Ihnen daraus Nachteile entstehen. Die Daten werden dann nicht gespeichert.</p>
		<p>Sie erhalten dann trotzdem die entsprechende Vergütung für die bis dahin vergangene Zeit.
    Bitte schreiben Sie uns in diesem Fall eine Nachricht über Prolific.</p>
		<p>&nbsp;</p>
		<p><strong>Warum soll ich teilnehmen?</strong></p>
		<p>Wissenschaftliche Forschung ist auf freiwillige Teilnehmer angewiesen und wir würden uns sehr freuen, wenn Sie uns durch die Teilnahme bei der Forschungsarbeit helfen würden. Sie leisten damit einen sehr wichtigen Beitrag zum Erkenntnisfortschritt hinsichtlich der Verarbeitung solcher Sätze bei Erwachsenen.</p>
		<p>&nbsp;</p>
		<p>Sollten Sie noch Fragen haben, wenden Sie sich gerne unter der angegebenen Telefonnummer oder per E-Mail an mich.</p>
		<p>&nbsp;</p>
		<p>&nbsp;</p>
		<p>Mit freundlichen Grüßen</p>
		<p></p>
		<p>Wissenschaftliche Mitarbeiterin<br />--<br /><br /><br /><br />
		<p>&nbsp;</p>
		<p>&nbsp;</p>`,
 		 // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  title: `Teilnahmeinformationen zum Sentence-Evaluation-Experiment V`,
  buttonText: "Weiter"
});


// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: "instructions",
  title: "Allgemeine Hinweise",
  text: `Zunächst werden Sie zwei Übungsdurchgänge absolvieren, um sich mit der Vorgehensweise im Experiment vertraut zu machen.
      Ihr Fortschritt in den Übungen und im Experiment wird jeweils durch einen Balken rechts oben dargestellt.
  		<br />
  		Sowohl in den Übungsdurchgängen als auch im Experiment geben Sie Bewertungen in Bezug auf eine zuvor gelesene Frage ab.
    	<br />
    	Im Anschluss an das Experiment bitten wir Sie, noch ein paar Fragen zu Ihrer Person auszufüllen.
    	 <br />
    	Sie haben die Möglichkeit, das Experiment zu jeder Zeit ohne Angaben von Gründen abzubrechen.
    	Erst durch Klicken des Buttons \'CONFIRM' am Ende der Danksagung
    	werden Ihre Daten gesendet.`,
  buttonText: "Zu den Übungsdurchgängen"
});

const instructionsPracticeTrial = magpieViews.view_generator("instructions", {
  trials: 1,
  name: "instructions_practice_trial",
  title: "Hinweise zu den Übungsdurchgängen",
  text: `Stellen Sie sich für die folgenden Übungsdurchgänge und das Experiment vor, dass Sie auf einer Party sind. Auf dem Weg in die Küche hören Sie, wie sich eine Person mit einer anderen unterhält. Die Frage dieser Person bleibt oben auf der Seite stehen, während Ihnen nacheinander mehrere Fragen dazu gestellt werden.
  <br />
  Bewerten Sie jeweils, wie sehr sich die fragende Person mit ihrer Frage darauf festlegt, dass ein bestimmter Sachverhalt zutrifft. Beantworten Sie dies, indem Sie einen Regler auf einer Leiste nach links für \'gar nicht\' und nach rechts für \'voll und ganz\' verschieben. Bitte machen Sie Ihre Bewertung jeweils anhand der Frage, die oben auf der Seite stehen bleibt.`,
  buttonText: "Übungsdurchgänge beginnen"
});

const uebungsende = magpieViews.view_generator("instructions", {
  trials: 1,
  name: "uebungsende",
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  title: `Die Übungsdurchgänge sind nun beendet!`,
  text: ``,
  buttonText: "Weiter"
});

const instructionsRatingScale = magpieViews.view_generator("instructions", {
  trials: 1,
  name: "instructions_rating_scale",
  title: "Hinweis zum Experiment",
  text: `Insgesamt werden Sie nun ${main_trial_new.length} Fragen lesen und bewerten.
  Wie bereits in den Übungsdurchgängen, stellen Sie sich vor, dass Sie auf einer Party sind und auf dem Weg in die Küche hören, wie jemand sich unterhält und eine Frage stellt.
  Zu jeder Frage werden Ihnen nacheinander mehrere Fragen gestellt; die Frage der Person bleibt dabei oben auf der Seite stehen.
  Sie bewerten, wie in den Übungsdurchgängen, wie sehr sich die fragende Person mit ihrer Frage darauf festlegt, dass ein bestimmter Sachverhalt zutrifft.
  Beantworten Sie dies, indem Sie den Regler auf der Leiste nach links für \'gar nicht\' und nach rechts für \'voll und ganz\' verschieben.
  Bitte machen Sie Ihre Bewertung jeweils anhand der Frage, die oben auf der Seite stehen bleibt.
  Bei einigen wenigen, zufällig ausgewählten Fragen werden Sie zusätzlich gebeten, kurz zu kommentieren, warum Sie so geantwortet haben.
  Das ist gewollt und dient nur unserem besseren Verständnis Ihrer Antworten - es passiert bewusst nicht bei jedem Text.
  <br />
  Bereit? Auf der nächsten Seite beginnt das Experiment.`,
  buttonText: "Experiment beginnen"
});

const instructionsPostTest = magpieViews.view_generator("instructions", {
  trials: 1,
  name: "instructions_post_test",
  title: "Das Experiment ist nun beendet!",
  text: `Wir bitten Sie uns auf der nächsten Seite noch ein paar Angaben zu machen.`,
  buttonText: "Zum Fragebogen"
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator(
  "post_test", {
    trials: 1,
    name: "post_test",
    title: "Fragebogen",
    text: "",


  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
    buttonText: "Weiter",
    age_question: "Alter",
    gender_question: "Geschlecht",
    gender_male: "männlich",
    gender_female: "weiblich",
    gender_other: "andere",
    edu_question: "Höchster Bildungsabschluss",
    edu_graduated_high_school: "Abitur",
    edu_graduated_college: "Hochschulabschluss",
    edu_higher_degree: "Universitärer Abschluss",
    edu_ausbildung: "abgeschlossene Berufsausbildung",
    edu_realschule: "abgeschlossener Realschulabschluss",
    edu_hauptschule: "abgeschlossener Hauptschulabschluss",
    languages_question: "Muttersprache",
    languages_more: "(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)",
    languages_question2: "Weitere Muttersprachen",
    comments_question: "Weitere Kommentare zum Experiment"
  },

  {
    stimulus_container_generator: custom_posttest_generator.stimulus_container_gen,
    answer_container_generator: custom_posttest_generator.answer_container_gen,
    handle_response_function: custom_posttest_generator.handle_response_function
  }
);

const consentForm = magpieViews.view_generator(
  "post_test", {
    trials: 1,
    name: "consent_form",
    title: "Einwilligungserklärung zum Sentence-Evaluation-Experiment V",
    text: "",
    buttonText: "Weiter"
  },

  {
    stimulus_container_generator: custom_consentform_generator.stimulus_container_gen,
    answer_container_generator: custom_consentform_generator.answer_container_gen,
    handle_response_function: custom_consentform_generator.handle_response_function
  }
);




// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: "thanks",
  title: "Herzlichen Dank für Ihre Teilnahme!",
  prolificConfirmText: "Um Ihre Daten an Prolific zu senden, klicken Sie jetzt bitte auf den Button CONFIRM."
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/

const practiceSlider_rating = magpieViews.view_generator("slider_rating",{
    trials: 4,
    name: 'practice_trial',
    data: practice_trials.sliderRating,
    buttonText: "Weiter"
} , {
  stimulus_container_generator: stimulus_container_generators.basic_stimulus,
  answer_container_generator: custom_answer_container_generators.slider_rating,
  handle_response_function: custom_handle_response_functions.slider_rating
}
);

// const slider_rating = magpieViews.view_generator("slider_rating",{
//     trials: 51,
//     name: 'slider_rating',
//     data: _.shuffle(main_trials.ratingScale),
//     buttonText: "Weiter"
// } , {
//   stimulus_container_generator: stimulus_container_generators.basic_stimulus,
//   answer_container_generator: custom_answer_container_generators.slider_rating_main,
//   handle_response_function: handle_response_functions.slider_rating
// }
// );

const slider_rating = magpieViews.view_generator("slider_rating",{
    trials: 2,//main_trial_new.length
    name: 'slider_rating',
    data: main_trial_new,
    buttonText: "Weiter"
} , {
  stimulus_container_generator: stimulus_container_generators.basic_stimulus,
  answer_container_generator: custom_answer_container_generators.slider_rating_main,
  handle_response_function: custom_handle_response_functions.slider_rating_main
}
);

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
