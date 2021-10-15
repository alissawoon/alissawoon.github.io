function findVowels() {
    //set an array of vowels here
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelsFound = [];
    //get the string from textbox
    var txt = document.getElementById("txt").value;
    //loop each character from string and find the vowels
    for (i = 0; i < txt.length; i++) {
        if (vowels.indexOf(txt[i]) != -1) {
            vowelsFound.push(txt[i]);
        }
    }
    document.getElementById("result").innerHTML = "<p><strong>Vowels found:</strong> " + vowelsFound + "</p><p><strong>Vowels count:</strong> " + vowelsFound.length + "</p>";
}