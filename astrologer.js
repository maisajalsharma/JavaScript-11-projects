const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
];

const customerCompliments = [
    "Your trust in us is truly valued.",
    "We appreciate your prompt and clear communication.",
    "You have such a sharp and insightful perspective.",
    "Your detailed feedback is incredibly helpful.",
    "You're a pleasure to work with!",
    "Your patience and understanding are commendable.",
    "We admire your innovative approach.",
    "You always make time for what matters.",
    "Thank you for being such a loyal customer.",
    "Your commitment to quality is inspiring.",
    "We appreciate your enthusiasm for our product/service.",
    "You always ask the best questions.",
    "Your decisions are always thoughtful.",
    "It's great how quickly you grasped that concept.",
    "You bring such positive energy to every interaction.",
    "We're grateful for your continued support.",
    "You make our job easy!",
    "Your ability to prioritize is excellent.",
    "We truly value your partnership.",
    "Your success is a testament to your hard work.",
    "You're an exceptional problem-solver.",
    "Thank you for being so reliable.",
    "We appreciate your business more than words can say.",
    "You've shown great resilience and adaptability.",
    "It's a privilege to serve a customer like you.",
    "Your vision for the future is impressive.",
    "You're always one step ahead.",
    "We value your honesty and directness.",
    "Your dedication is truly remarkable.",
    "You’ve demonstrated impressive industry knowledge.",
    "We think you’re simply the best!"
];


const empatheticValidationPhrases = [
    "I can only imagine how frustrating that must be for you.",
    "That sounds incredibly stressful; I understand why you're upset.",
    "I'm truly sorry you've had to deal with this situation.",
    "Thank you for sharing your honesty; it helps us see the full picture.",
    "That sounds like a genuinely difficult position to be in.",
    "You're absolutely right to feel frustrated about this delay.",
    "I appreciate you bringing this challenging issue to my attention.",
    "It takes a lot to manage a situation like that; I commend you.",
    "I hear the difficulty in your voice, and I want to help resolve it.",
    "We understand that this situation has been unfair to you.",
    "You’ve been incredibly patient given these circumstances.",
    "I realize this is not what you expected, and for that, I apologize.",
    "It must feel like you've been running into one roadblock after another.",
    "I appreciate you sticking with us despite these difficulties.",
    "That's a tough break; let's work together to fix it.",
    "It's completely understandable that you're feeling this way.",
    "I’m taking full ownership of this situation right now.",
    "Thank you for giving us another chance to make this right.",
    "It's unfair that you've been inconvenienced like this.",
    "We acknowledge the strain this has put on you."
];

const customerRecommendations = [
    "Embrace your Mars energy this week: Initiate a difficult conversation or start that high-energy project.",
    "Practice Jupiter's optimism: When faced with a roadblock, intentionally choose the most expansive, hopeful interpretation.",
    "Commit to Saturn's discipline: Pick one small, consistent daily habit and stick to it for the next 28 days.",
    "Engage in Neptune's surrender: Set aside control and allow yourself a period of restful, unstructured daydreaming or creativity.",
    "Reflect on your Pluto lessons: Identify one deep-seated fear or control issue and consciously try a new, transformative approach.",
    "Channel your Mercury clarity: Dedicate 15 minutes each day to journaling to clear mental clutter and organize your thoughts.",
    "Find Venusian pleasure: Schedule a non-negotiable moment of beauty or indulgence just for yourself this week.",
    "Acknowledge your Moon's needs: Pay close attention to your emotional state for a day and respond to your actual needs.",
    "Practice Sun self-acceptance: List five things you genuinely love about yourself right now, without judgment.",
    "Explore your Uranus urges: Deliberately break a minor routine this week—take a new route home, or try a different genre of music.",
    "Check your transits before scheduling major events: Book important meetings when the Moon is in a friendly or supportive sign.",
    "Honor the New Moon: Set a powerful intention related to the sign the New Moon falls in this month.",
    "Release during the Full Moon: Write down a behavior, habit, or attachment you need to let go of and symbolically destroy the note.",
    "Harmonize your Venus: Initiate a peaceful resolution in a strained relationship by leading with compassion.",
    "Utilize your Chiron insight: Offer support or mentorship to someone struggling with an issue you’ve personally overcome.",
    "Speak your 3rd House truth: Initiate an honest conversation with a sibling or neighbor to clear up old misunderstandings.",
    "Refine your 6th House routine: Implement a small, specific organizational improvement in your workspace or daily health schedule.",
    "Seek 7th House balance: Check in with your primary partner (or closest friend) and ensure the dynamic is currently 50/50.",
    "Initiate an 11th House connection: Reach out to an acquaintance or join a new group dedicated to a humanitarian or intellectual pursuit.",
    "Re-evaluate your 10th House goals: Schedule a quick review of your career path to confirm your public actions align with your highest potential.",
    "Review your Solar Return Chart around your birthday for a clearer annual focus.",
    "Meditate on your Rising Sign (Ascendant) essence to understand how you show up to the world.",
    "Consider the Elements: If you are heavy on Fire, schedule more time for grounding (Earth).",
    "Observe the Houses: Think about where the current planet transits are happening in your chart and focus your energy in that life area.",
    "Study your North Node: Spend time researching the skills and qualities your North Node sign is encouraging you to develop.",
    "Read about your sign's Shadow Side: Understanding your sign's weaknesses allows you to consciously choose higher expressions of its energy.",
    "Do a personal 'Retrograde Review': When a planet goes retrograde, use that time to review the matters ruled by that planet in your life.",
    "Balance your Hemispheres: If your chart has more planets on the right (Relational), focus on asserting your personal needs.",
    "Check the current Moon Sign: Align your daily activities with the Moon's mood; cook or nurture when in Cancer, socialize when in Libra.",
    "Trust your intuition: Remember that your birth chart is a map, not a destiny. Use the insights as guidance, but your free will always dictates your final choice."
];

const crorepatiPredictions = [
    "A major **financial quantum leap** is imminent, drastically shifting your net worth into a new bracket.",
    "Expect the **signing of a lucrative deal** that secures your financial independence for the long term.",
    "Your Jupiter energy is activated, indicating a period of **unprecedented, almost miraculous, abundance and growth**.",
    "An investment you initiated some time ago will see a **massive, unexpected return**, exceeding all prior expectations.",
    "A hidden talent or intellectual property you own will suddenly become a **significant revenue stream**.",
    "Your reputation grows exponentially, attracting **high-value clients and influential business partners**.",
    "This cycle favors **empire-building**; consolidate your assets and plan your next major acquisition.",
    "You will make a **life-changing financial decision** based on a strong intuition, leading to enormous profit.",
    "A **prominent investor or mentor** recognizes your genius and offers substantial backing or collaboration.",
    "Expect to secure a **real estate deal** that becomes a foundational piece of your long-term wealth strategy.",
    "Your ability to **lead and delegate** reaches its peak, freeing up your time while multiplying your income.",
    "A past professional setback transforms into the **precise knowledge needed for future spectacular success**.",
    "You will successfully **diversify your income streams**, making your wealth shock-proof and robust.",
    "Travel is indicated, but this time, it's tied to **international business ventures** that expand your global footprint.",
    "The cosmos supports **bold, calculated risks** in your business life; trust your vision for expansion.",
    "A **legal or bureaucratic hurdle** that held back a major project dissolves completely in your favor.",
    "You will gain **complete mastery over your spending habits**, aligning them perfectly with your financial goals.",
    "Your **philanthropic goals** become a reality, allowing you to successfully use your wealth for profound impact.",
    "Expect to experience a **deep sense of inner freedom**, knowing your wealth is now serving your life's purpose.",
    "The **arrival of a major award or public honor** confirms your status as a leader in your industry."
];


const form=document.getElementById('astroform');
 
form .addEventListener('submit',(e)=>{
    e.preventDefault();
    const name =document.getElementById('name').value;
    const surname =document.getElementById('surname').value;
    const day =parseInt(document.getElementById('day').value);
    const month =parseInt(document.getElementById('month').value);
    const year =parseInt(document.getElementById('year').value);


const text =` hi ${name} ${surname} , Your Zodiac sign is ${zodiacSigns[month-1]}.  
, ${customerCompliments[day-1]}. ${empatheticValidationPhrases[year%20]}, ${customerRecommendations[(day*month)%30]},
${crorepatiPredictions[(name.length*surname.length)%20]}`

document.getElementById('result').textContent=text;

})

