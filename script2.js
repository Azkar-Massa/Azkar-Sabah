// نصوص وعدادات أذكار الصباح الـ 23 بالترتيب الصحيح
const sabahAzkar = [
    { text: "بسم الله والحمد لله والصلاة والسلام علي رسول الله.", count: 1 },
    { text: "سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومداد كلماته.", count: 3 },
    { text: "لا إله إلا وحده لا شريك له له الملك وله الحمد يحيي ويميت بيده الخير وهو علي كل شيء قدير.", count: 1 },
    { text: "أصبحنا وأصبح الملك لله رب العالمين، اللهم إنا نسألك خير هذا اليوم فتحه ونصره ونوره وبركته وهداه، ونعوذ بك من شر ما فيه وشر ما بعده.", count: 1 },
    { text: "أصبحنا وأصبح الملك لله والحمد لله، لا إله إلا الله وحده لا شريك له.، له الملك وله الحمد وهو علي كل شئ قدير، رب نسألك خير ما في هذا اليوم وخير ما بعده، ونعوذ بك من شر ما في هذا اليوم وشر ما بعده، رب نعوذ بك من الكسل وسوء الكبر، رب نعوذ بك من عذاب في النار وعذاب في القبر.", count: 1 },
    { text: "أصبحنا علي فطرة الإسلام وعلي كلمة الإخلاص وعلي دين نبينا محمد صلي الله عليه وسلم، وعلي ملة أبينا إبراهيم حنيفا مسلما وما كان من المشركين.", count: 1 },
    { text: "اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور.", count: 1 },
    { text: "اللهم إنا أصبحنا نشهدك، ونشهد حملة عرشك.، وملائكتك وجميع خلقك، أنك أنت الله لا إله إلا أنت وحدك لا شريك لك، وأن محمدا عبدك ورسولك.", count: 4 },
    { text: "اللهم ما أصبح بنا من نعمة أو ب أحدٍ من خلقك ف منك وحدك لا شريك لك فلك الحمد ولك الشكر.", count: 1 },
    { text: "اللهم إنا نعوذ بكلماتك التامات من شر ما خلقت.", count: 3 },
    { text: "بسم الله الذي لا يضر ما إسمه شئ في الأرض ولا في السماء وهو السميع العليم.", count: 3 },
    { text: "رضينا بالله ربا، وبالإسلام دينا، وبمحمد صلي الله عليه وسلم نبيا.", count: 3 },
    { text: "حسبنا الله، لا إله إلا هو عليه توكلنا وهو رب العرش العظيم.", count: 7 },
    { text: "اللهم أجرنا من النار.", count: 7 },
    { text: "اللهم إنا نسألك العفو والعافية في الدنيا والآخرة، اللهم إنا نسألك العفو والعافية في ديننا ودنيانا وأهلينا وأموالنا، اللهم استر عوراتنا، وآمن روعاتنا، اللهم احفظنا من بين أيدينا، ومن خلفنا، وعن أيماننا وعن شمائلنا، ومن فوقنا، ونعوذ بعظمتك أن نغتال من تحتنا.", count: 1 },
    { text: "اللهم عافنا في أبداننا، اللهم عافنا في أسماعنا، اللهم عافنا في أبصارنا، لا إله إلا أنت، اللهم إنا نعوذ بك من الكفر والفقر، ونعوذ بك من عذاب القبر، لا إله إلا أنت.", count: 1 },
    { text: "اللهم عالم الغيب والشهادة فاطر السماوات والأرض رب كل شئ ومليكه نشهد ألا إله إلا أنت، نعوذ بك من شرور أنفسنا ومن شر الشيطان وشركه وأن نقترف علي أنفسنا سوءا أو نجره إلي مسلم.", count: 1 },
    { text: "اللهم إنا نسألك علما نافعا، ورزقا طيبا، وعملا متقبلا.", count: 1 },
    { text: "يا حي يا قيوم برحمتك نستغيث، أصلح لنا شأننا كله ولا تكلنا إلى أنفسنا طرفة عين.", count: 3 },
    { text: "اللهم أنت ربنا لا إله إلا أنت خلقتنا ونحن عبيدك ونحن علي عهدك ووعدك ما استطعنا نعوذ بك من شر ما صنعنا نبوء لك بنعمتك علينا ونبوء بذنوبنا فاغفر لنا فإنه لا يغفر الذنوب إلا أنت.", count: 1 },
    { text: "اللهم صلي علي محمد وعلي آل محمد كما صليت علي ابراهيم وعلي آل ابراهيم إنك حميد مجيد، وبارك على محمد وعلي آل محمد كما باركت على ابراهيم وعلي آل ابراهيم إنك حميد مجيد..", count: 10 },
    { text: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو علي كل شيء قدير.", count: 100 },
    { text: "سبحان الله وبحمده.", count: 100 }
];

let currentIndex = 0;
let currentClickCount = 0;
let currentAudio = null;

const zikrTextEl = document.getElementById("zikr-text");
const currentCountEl = document.getElementById("current-count");
const totalCountEl = document.getElementById("total-count");
const countBtn = document.getElementById("count-btn");
const nextBtn = document.getElementById("next-btn");
const playAudioBtn = document.getElementById("play-audio-btn");

function updateZikr() {
    if (currentAudio) {
        currentAudio.pause();
    }
    
    const currentZikr = sabahAzkar[currentIndex];
    zikrTextEl.textContent = currentZikr.text;
    currentClickCount = 0;
    currentCountEl.textContent = currentClickCount;
    totalCountEl.textContent = currentZikr.count;
    
    // التعديل السحري: يقرأ من فولدر audio2 وملفات Morning الكابيتال
    const audioUrl = "audio2/Morning" + (currentIndex + 1) + ".mp3";
    currentAudio = new Audio(audioUrl);
}

playAudioBtn.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.play().catch(err => console.log("المتصفح يحتاج ضغطة على الشاشة أولاً"));
    }
});

countBtn.addEventListener("click", () => {
    const maxCount = sabahAzkar[currentIndex].count;
    if (currentClickCount < maxCount) {
        currentClickCount++;
        currentCountEl.textContent = currentClickCount;
        
        if (currentClickCount === maxCount) {
            goToNext();
        }
    }
});

function goToNext() {
    if (currentIndex < sabahAzkar.length - 1) {
        currentIndex++;
        updateZikr();
        if (currentAudio) currentAudio.play().catch(e => {});
    } else {
        zikrTextEl.textContent = "الحمد لله، تم الانتهاء من أذكار الصباح كاملة!";
        countBtn.style.display = "none";
    }
}

nextBtn.addEventListener("click", goToNext);

// تشغيل أول ذكر تلقائياً
updateZikr();