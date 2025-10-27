var quotes = [
    "\"The best way to predict the future is to invent it.\" ―Alan Kay",
    "\"If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.\" ―Albert Einstein",
    "\"I hear I forget, I see I remember, I do I understand.\" ―Confucius",
    "\"All that we see or seem is but a dream within a dream.\" ―Edgar Allan Poe",
    "\"That which does not kill us makes us stronger.\" ―Friedrich Nietzsche",
    "\"To live is to suffer. To survive is to find meaning in the suffering.\" ―Friedrich Nietzsche",
    "\"Without music, life would be a mistake.\" ―Friedrich Nietzsche",
    "\"Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.\" ―Friedrich Nietzsche",
    "\"Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.\" ―Garrison Keillor",
    "\"No man ever steps in the same river twice, for it's not the same river and he's not the same man.\" ―Heraclitus",
    "\"Talking is a necessity, listening is an art.\" ―Johann Wolfgang von Goethe",
    "\"Of all sad words of tongue or pen, the saddest are these, \"It might have been\". —John Greenleaf Whittier",
    "\"The soul would have no rainbow had the eyes no tears.\" ―John Vance Cheney",
    "\"Everyone thinks of changing the world, but no one thinks of changing himself.\" ―Leo Tolstoy",
    "\"Live as if you were to die tomorrow. Learn as if you were to live forever.\" ―Mahatma Gandhi",
    "\" \'Classic\' - a book which people praise and don't read.\" ―Mark Twain",
    "\"If you tell the truth, you don't have to remember anything.\" ―Mark Twain",
    "\"Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth.\" ―Oscar Wilde",
    "\"We are all in the gutter, but some of us are looking at the stars.\" ―Oscar Wilde",
    "\"Everything you can imagine is real.\" ―Pablo Picasso",
    "\"The measure of a man is what he does with power.\" ―Plato",
    "\"Outside a horse, a book is man’s best friend — inside it’s too dark to read.\" ―Ted Atkinson",
    "\"Fortis fortuna adiuvat.\" ―Terence",
    "\"Can I see another's woe, and not be in sorrow too? Can I see another's grief, and not seek for kind relief?\" ―William Blake",
    "\"The fool doth think he is wise, but the wise man knows himself to be a fool.\" ―William Shakespeare",
]
var i = Math.floor(quotes.length * Math.random())
document.currentScript.insertAdjacentHTML(
    'beforebegin',
    quotes[i]
)