import React from "react";
import './Joke.scss';
const jokes = [
    'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."',
    'Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"',
    'The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, "I am going to eat that pussy once Jimmy leaves for school today!"',
    'A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it is either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice,"How much do you want it to be ?"'
];
let currentIndex = 0;
function Joke(props) {
    const [joke, setJoke] = React.useState(jokes[currentIndex]);
    const btnElements = React.useRef(null);
    console.log(btnElements);
    window.addEventListener('DOMContentLoaded', () => {
        checkCookie();

    });
    function handleJoke(e) {
        const indexCurrentJoke = jokes.indexOf(joke);
        // console.log(indexCurrentJoke)
        const lengthOfOtherJokes = jokes.length - 1;
        if (indexCurrentJoke < lengthOfOtherJokes) {
            setJoke(jokes[indexCurrentJoke + 1]);
        } else {
            setJoke("That's all the jokes for today! Come back another day!");
            btnElements.current.classList.add("hide")
        }
        setCookie(`"Vote joke ${indexCurrentJoke + 1}"`, e.target.innerText, jokes.length);
    }
    //set cookie
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    //checkCookie
    function checkCookie() {
        let c = document.cookie
        if (c.indexOf("Vote joke") !== -1) {
            setJoke("That's all the jokes for today! Come back another day!");
            if (btnElements.current) btnElements.current.classList.add("hide")
        }
        else {
            setJoke(jokes[currentIndex]);
        }

    }
    return (
        <div className="content">
            <p className="content__jokes">{joke}</p>
            <div ref={btnElements} className="vote">
                <button className="btn btn-funny" onClick={handleJoke}>This is funny!</button>
                <button className="btn btn-notfunny" onClick={handleJoke}>This is not funny!</button>
            </div>
        </div>
    );
}

export default Joke;
