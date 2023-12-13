var quotes = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        name: '― Oscar Wilde'
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        name: '― Marcus Tullius Cicero'
    },
    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        name: '― Bernard M. Baruch'
    },
    {
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        name: '― Dr. Seuss'
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        name: '― Mae West'
    },
    {
        quote: "“Be the change that you wish to see in the world.”",
        name: '― Mahatma Gandhi'
    },
    {
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
        name: '― Robert Frost'
    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        name: '― Mark Twain'
    },
];

var j;
function display(list) {
    var box = '';
    var i = Math.floor(Math.random() * list.length);

    // NO Repeating check
    while (i == j)
    {
        i = Math.floor(Math.random() * list.length);
    }
    j = i;

    box = `<div class="rounded-5 card w-100 m-auto pt-4 pb-4 bg-success text-white p-2">
                        <p>${list[i].quote}</p>
                        <!-- <br> -->
                        <p>${list[i].name}</p>
                </div>
            `
    document.getElementById('Row').innerHTML = box;
}
