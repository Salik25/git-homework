// The following exercise contains the following subjects:
// ● Order Of Operation
// ● If statements
// Instructions
// John and Mike both play basketball on different teams. In the
// latest 3 games, John's team scored 89, 120, and 103 points,
// while Mike's team scored 116, 94, and 123 points.
// 1. Calculate the average score for each team.
// 2. Decide which team wins on average (highest average
// score), and print the winner to the console. Also include
// the average score in the output.
// 3. Then change the scores to show different winners. Don't
// forget to take into account that there might be a draw (the
// same average score).
// 4. EXTRA: Mary also plays basketball, and her team scored
// 97, 134, and 105 points. Like before, log the average
// winner to the console.
// 5. Like before, change the scores to generate different
// winners, keeping in mind there might be draws.

let JohnTean = [89, 120, 103];
let MikeTeam = [116, 94, 123];
let MaryTeam = [97,134,105];

function averageScore(list_of_score) {
        let sum = 0
        for (let i = 0; i < list_of_score.length; i++) {
                sum = sum + list_of_score[i];
        }
  return sum / list_of_score.length;
}
let avResultJohn = averageScore(JohnTean);
let avResultMike = averageScore(MikeTeam);
let avgResultMary = averageScore(MaryTeam);

if (avResultJohn > avResultMike && avResultJohn > avgResultMary) {
  console.log("win John with " + avResultJohn + " average points");
} else if (avResultMike > avResultJohn && avResultMike > avgResultMary){
  console.log("win Mike with " + avResultMike + " average points");
} else {
        console.log("win Mary with " + avgResultMary + " average points")
}
