var qoutes = [
    'Life is like a box of chocolates, you never know what your gonna get. - Forrest Gump',
    'poop or get off the pot. - Myself',
    'Only God can judge me. - Tupac',
    'One small step for man, one giant leap for mankind. - Neil Armstrong',
    'They are who we thought they were -Dennis Green'
]


function newQoute() {
    var randomNumber = Math.floor(Math.random() * (qoutes.length));
    document.getElementById('messageGenerator').innerHTML = qoutes[randomNumber];
}