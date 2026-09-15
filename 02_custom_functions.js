// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here

// The trigger word that marks an exceptive ("Exc") item. Between two trials
// belonging to two different "Außer"-items, there must be at least this many
// other trials (items or fillers of a different trigger) in between.
const AUSSER_TRIGGER_WORD = "Außer";
const MIN_GAP_BETWEEN_AUSSER_ITEMS = 2;
// Safety valve so the browser never freezes if the constraint were ever
// impossible to satisfy with a given item/filler set.
const MAX_SHUFFLE_ATTEMPTS = 5000;


/* Helper functions
*
*
*/

/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here


/* Hooks
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/

/*
 * create_trials(old_trials)
 *
 * Takes the flat list of trial objects (each one question belonging to one
 * item/filler; several trials share the same `item` id and the same QUD/
 * stimulus, differing only in `question`) and returns a new list in the
 * order the trials should be presented to this particular participant:
 *
 *   1. Trials are grouped by `item` (so all questions belonging to the same
 *      stimulus stay together).
 *   2. The order of the items themselves is randomised, subject to the
 *      constraint that between any two items/fillers whose `triggerWord` is
 *      "Außer" there are at least MIN_GAP_BETWEEN_AUSSER_ITEMS other
 *      items/fillers of a different trigger. (Exceptive/"Außer" items can be
 *      quite noticeable, so we don't want two of them back-to-back or with
 *      only one thing between them.)
 *   3. Within each item, the order of its own questions is randomised
 *      independently (so e.g. POI/NC/OC or PSP/MC are shown in a random
 *      sequence), but always consecutively, with the same stimulus/QUD
 *      staying visible while only the question below it changes.
 */
function create_trials(old_trials) {
  // 1. group all rows by item, remembering first-seen order of items
  const groups = {};
  const itemOrder = [];
  old_trials.forEach(function(trial) {
    if (!groups.hasOwnProperty(trial.item)) {
      groups[trial.item] = [];
      itemOrder.push(trial.item);
    }
    groups[trial.item].push(trial);
  });

  // triggerWord (e.g. "Außer") and trigger family (e.g. "Exc"/"PSP"/"CI"/"SI",
  // or the filler's "Gruppe") per item
  const triggerWordOf = {};
  const familyOf = {};
  const itemTypeOf = {};
  itemOrder.forEach(function(it) {
    triggerWordOf[it] = groups[it][0].triggerWord;
    familyOf[it] = groups[it][0].trigger;
    itemTypeOf[it] = groups[it][0].itemType;
  });

  // 2. find a shuffled item order that respects the Außer-gap constraint
  const shuffledItemOrder = shuffleWithAusserConstraint(itemOrder, triggerWordOf);

  // 2b. pick which items get an open-comment prompt in this session: one
  // random item from each of the four trigger families (Exc/PSP/CI/SI),
  // plus (optionally) one random "Weil" filler. See selectCommentItems().
  const commentItems = selectCommentItems(itemOrder, familyOf, itemTypeOf);

  // 3. within each item, shuffle its own questions, then concatenate.
  // Along the way we tag every question with its position within the
  // item's own question set (questionIndexInItem, 1-based) and the total
  // number of questions belonging to that item (totalQuestionsInItem), so
  // the UI can show a small per-item progress indicator separate from the
  // overall experiment progress bar. The *last* question of any item
  // chosen in step 2b is flagged with showComment=true, so the UI can show
  // an open comment box there.
  let trials = [];
  shuffledItemOrder.forEach(function(it) {
    const questionsForItem = _.shuffle(groups[it]);
    questionsForItem.forEach(function(trial, idx) {
      trial.questionIndexInItem = idx + 1;
      trial.totalQuestionsInItem = questionsForItem.length;
      trial.showComment = false;
    });
    if (commentItems.has(it)) {
      questionsForItem[questionsForItem.length - 1].showComment = true;
    }
    trials = trials.concat(questionsForItem);
  });

  return trials;
}

// The trigger families for which we always want at least one open-comment
// prompt per participant (one randomly chosen item from each).
const COMMENT_TRIGGER_FAMILIES = ["Exc", "PSP", "CI", "SI"];

// Randomly picks one item from each of COMMENT_TRIGGER_FAMILIES, plus one
// random "Weil" filler (if any are present in this experiment), and
// returns them as a Set of item ids to be flagged for an open-comment
// prompt on their last question.
//
// NOTE on "rotation" across participants: since this is plain client-side
// JS with no shared server-side state between participants, we can't
// *guarantee* that different participants get different items commented
// on - each participant's selection here is independently randomised.
// With only a handful of pilot participants and up to 8 candidate items
// per trigger family, that randomisation should still give reasonable
// spread across items in practice; true guaranteed rotation (e.g. via a
// running counter) would require a small addition on the server side,
// which is out of scope here.
function selectCommentItems(itemOrder, familyOf, itemTypeOf) {
  const selected = new Set();
  COMMENT_TRIGGER_FAMILIES.forEach(function(fam) {
    const candidates = itemOrder.filter(function(it) {
      return itemTypeOf[it] === "item" && familyOf[it] === fam;
    });
    if (candidates.length > 0) {
      selected.add(_.sample(candidates));
    }
  });
  const weilFillers = itemOrder.filter(function(it) {
    return itemTypeOf[it] === "filler" && familyOf[it] === "Weil";
  });
  if (weilFillers.length > 0) {
    selected.add(_.sample(weilFillers));
  }
  return selected;
}

// Repeatedly shuffles `items` until the Außer-gap constraint is satisfied
// (or MAX_SHUFFLE_ATTEMPTS is reached, in which case the best attempt found
// so far is used as a fallback so the experiment can never get stuck).
function shuffleWithAusserConstraint(items, triggerWordOf) {
  let bestOrder = null;
  let bestViolations = Infinity;

  for (let attempt = 0; attempt < MAX_SHUFFLE_ATTEMPTS; attempt++) {
    const candidate = _.shuffle(items);
    const violations = countAusserGapViolations(candidate, triggerWordOf);
    if (violations === 0) {
      return candidate;
    }
    if (violations < bestViolations) {
      bestViolations = violations;
      bestOrder = candidate;
    }
  }
  console.warn(
    "shuffleWithAusserConstraint: could not find a fully valid order after " +
    MAX_SHUFFLE_ATTEMPTS + " attempts, using the best candidate found (" +
    bestViolations + " remaining violations)."
  );
  return bestOrder;
}

// Counts how many pairs of consecutive-ish "Außer" items violate the
// minimum-gap rule in a given order.
function countAusserGapViolations(order, triggerWordOf) {
  let violations = 0;
  let lastAusserIndex = -Infinity;
  for (let i = 0; i < order.length; i++) {
    if (triggerWordOf[order[i]] === AUSSER_TRIGGER_WORD) {
      if (lastAusserIndex !== -Infinity && (i - lastAusserIndex - 1) < MIN_GAP_BETWEEN_AUSSER_ITEMS) {
        violations += 1;
      }
      lastAusserIndex = i;
    }
  }
  return violations;
}
