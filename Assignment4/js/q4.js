function palindrome() {
    var a = document.getElementById("pa").value;
    var b = "";
    for (i = a.length - 1; i >= 0; i--) {
        b = b + a[i]
    }
    if (a == b)
        document.getElementById("paRes").value = b + " is a Palindrome";
    else
        document.getElementById("paRes").value = b + " not Palindrome";
}