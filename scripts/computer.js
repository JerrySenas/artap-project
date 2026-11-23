import { choose } from "./random.js";

const VIDEO_IDS = ['Uoox9fpmDP0', 'TjMVHfhPao0', 'yT-N525Xzgo', 'E4kcWPLtBFM', '6ObvFPLk8eI', 'smFp0sksH84', 'k49I5m1J6Is', 'Ra9WGW0_eBY', 'YUxQqCtGIFc', 'GZDW7WglFVQ', 'cPCLFtxpadE', 'gUuui39EUUU', 'PdWzEaT80ZM', 'lG80VJasc6U', 'aA0VhVJg2pU', 'cBPNGzq3aTk', '5vBGOrI6yBk', '-AY4CHQNG3Q', 'SqZNMvIEHhs', 'wCUTpATg-eE', 'HwS0fKWg8F4', 'OVW6n1Nn2OQ', 'hOlvVWrbeaM', '1Y1sPqwKOsM', 'F46r-_jPPHY', 'DmmYAX8Phig', 'ljUtuoFt-8c', 'nu3Eg2O4vzs', 'CSvFpBOe8eY', '9tLAV3jnK54', 'EipCk8N_MdU', 'D4O8Q8Gx6OI', 'oY5207c7rqo', 'YRD-BYJ03QY', 'YUycq06i2So', '2WVeRHwmQZc', '2o7j-8CiuzA', '34lgQxleoY8', 'SVz63DALQYM', 'FZ1ZcRS6EIY', 'C6CCYX2glIk', 'np1g2QmM0mg', 'AyyV__AecwE', '5r7yMqKH8JM', '0J3x-C3nRTQ', 'ekBxpwqJvJc', '5qH2A5UXSds', 'D90AOhojK3M', 'c7apuNjIRe0', 'Tvi0aAnlPM0', 'WOy1OMdpT1k', '7ID2GNUsPE0']

function embedRandomVideo() {
    const videoId = choose(VIDEO_IDS);
    const iframe = document.getElementById('music');
    iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0`;
}

const button = document.getElementById("reroll");
button.addEventListener("click", embedRandomVideo);

embedRandomVideo()