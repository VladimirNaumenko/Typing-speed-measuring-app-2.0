import React from 'react';
import Buttons from "./Buttons";
import soundCorrect from "../../styles/sound/zapsplat_multimedia_button_press_plastic_click_003_36870.mp3";
import soundWrong from "../../styles/sound/sound_ex_machina_Buttons+-+Glass+Button.mp3";
function Manage(props) {
    const{start,play,reset,result,init,reference}=props
    return (
        <div className="manage">
            <span style={!init?{opacity:"1"}:{opacity:"0"}}>Нажмите старт, дождитесь отчета и начинайте печатать!</span>
            <Buttons result={result}
                     start={start}
                     reset={reset}
                     play={play}
                     reference={reference}
            />
            <audio id="soundCorrect" src={soundCorrect}></audio>
            <audio id="soundWrong" src={soundWrong}></audio>
        </div>
    );
}

export default Manage;