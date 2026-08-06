let count = 0; // Initialize count to 0

function increaseCount() {
    count++; //Increment count by 1
    displayCount(); // Display the count
    checkCountValue(); //Check the count value and display messages
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram profile gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram profile gained 20 followers! Keep it up!");
    }
}

function resetCount() {
    count = 0;
    displayCount();
    alert("Follower count has been reset");
  }