import React, {Component} from 'react';
import '.././styles/main.scss';
import 'react-circular-progressbar/dist/styles.css';
import Header from "./Header";
import Verdict from "./Verdict";
import Countdown from "./Countdown";
import TextArea from "./TextArea/TextArea";
import Manage from "./Manage/Manage";

let i = 0;
let missClicks = 0
let time = 1
let totalSpeedTimer, commonTimer, mcsTimer

class Keyboard extends Component {
    constructor(props) {
        //rewrite on hooks?
        super(props);
        this.reference = React.createRef();
        this.start = this.start.bind(this)
        this.game = this.game.bind(this)
        this.reset = this.reset.bind(this)
        this.start = this.start.bind(this)
    }

    state = {
        init: false,
        value: "",
        value2: "",
        tempText: "Центральной площадью Рима стала долина между Палатином и Квириналом, известная как Форум. Отсюда расходились важнейшие улицы: via sacra, поднимающаяся к главной святыне Рима — храму Юпитера Капитолийского. Параллельно ей, у подножия Палатина, проходила via nova и др. Другой важной площадью внутри города был рынок скота у Тибра — Бычий форум, располагавшийся в самой оживлённой торговой части города. По соседству, но вне стен города, лежал овощной рынок.",
        text: [],
        flags: [],
        countdown: 3,
        countdownInit: false,
        result: false,
        time: 1,
        speedTotal: 0,
        accuracy: 0,
        counter: 0,
        counterTotal: 0,
        timer: 30,
        mSec: 0
    }

    componentDidMount() {
        this.setText()
    }

    countTotalSpeed = () => {
        totalSpeedTimer = setInterval(() => {
            this.setState({time: time++})
            this.setState({speedTotal: Math.round(this.state.counterTotal / (time / 60))})

        }, 1000)

    }

    setText = () => {
        let text = this.state.tempText.split("");
        this.setState({text: [...text]})
        let arr = []
        arr.length = text.length
        arr.fill(false)
        this.setState({flags: [...arr]})
    }
    game = (event) => {
        const key = event.key
        function playCorrect() {
            let audio = document.getElementById("soundCorrect");
            audio.play();
        }
        function playWrong() {
            let audio = document.getElementById("soundWrong");
            audio.play();
        }
        if (key === this.state.text[i]) {
            playCorrect()
            let flag = this.state.flags.map((el, index) => {
                if (i === index) {
                    return !el
                }
                return el
            })
            this.setState({flags: [...flag]})
            i++
            this.setState({counterTotal: this.state.counterTotal + 1})
        } else if (key !== this.state.text[i]) {
            playWrong()
            missClicks++
        }
        //
        let accuracy = 100 - Math.round(missClicks / (i / 100))
        // eslint-disable-next-line no-unused-expressions
        accuracy < 0 ? accuracy = 0 : accuracy
        this.setState({accuracy})

    }
    start = (event) => {
        let countdown = this.state.countdown
        this.setState({countdownInit: true})
        let countdownInt = setInterval(() => { // - 30 seconds timer
            countdown--
            this.setState({countdown})
        }, 1000)
        setTimeout(() => {                     //initializing game and timers
            this.setState({countdownInit: false})
            clearInterval(countdownInt)
            this.timer()
            this.setState({init: true})
            this.countTotalSpeed()
            this.focus()
        }, 3000)

    }
    stop = () => {
        this.setState({init: false})
    }

    focus() {
        this.reference.current.focus();
    }

    handleChange = (event) => {
        let value = event.target.value;
        this.setState({tempText: value})
    }
    setValue = (event) => {
        console.log(event.key)
        if (this.state.init === true) {
            let value = event.key;
            // value = value.charAt(0)
            this.setState({value2: value})
            this.game(value)
        }

    }
    timer = () => {
        let mSec = 100
        commonTimer = setInterval(() => {       //seconds timer
            this.setState({timer: this.state.timer - 1})
            mSec = 100
        }, 1000)
        commonTimer = setInterval(() => {  //miliseconds timer
            mSec--
            this.setState({mSec})
        }, 10)
        setTimeout(() => {           //stop the game after 30 seconds
            clearInterval(mcsTimer)
            clearInterval(totalSpeedTimer)
            clearInterval(commonTimer)
            this.setState({init: false})
            this.showResult()
        }, 30000)

    }
    showResult = () => {
        this.setState({result: true})

    }
    reset = (event) => {
        console.log("reset")
        clearInterval(mcsTimer)
        clearInterval(totalSpeedTimer)
        clearInterval(commonTimer)
        this.setState({
            init: false,
            speed: 0,
            result: false,
            speedTotal: 0,
            missClicks: 0,
            counter: 0,
            counterTotal: 0,
            timer: 30
        })
        this.setText()
        time = 1
        i = 0
    }

    render() {
        let {speedTotal, accuracy, countdown, result, text, flags, counterTotal, init, timer, mSec, countdownInit} = this.state
        return (
            <div className="container">
                <Header speedTotal={speedTotal}
                        accuracy={accuracy}
                        countdown={countdown}
                        init={init}
                        timer={timer}
                        mSec={mSec}
                />
                <Verdict speedTotal={speedTotal}
                         init={init}
                />
                <Countdown countdownInit={countdownInit}
                           countdown={countdown}
                />
                <TextArea result={result}
                          text={text}
                          speedTotal={speedTotal}
                          accuracy={accuracy}
                          counterTotal={counterTotal}
                          flags={flags}

                />
                <Manage start={this.start}
                        play={this.game}
                        reset={this.reset}
                        init={init}
                        result={result}
                        reference={this.reference}
                />

            </div>
        );
    }
}

export default Keyboard;