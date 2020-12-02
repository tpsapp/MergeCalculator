var calcElem = document.querySelector('#frmCalculator');

calcElem.addEventListener('submit', (e) => {
    var mergeCountElem = document.querySelector('#inpMergeCount');
    var mergeRewardElem = document.querySelector('#inpMergeReward');
    var startLevelElem = document.querySelector('#inpStartLevel');
    var rewardLevelElem = document.querySelector('#inpRewardLevel');
    var rewardCountElem = document.querySelector('#inpRewardCount');
    var resultElem = document.querySelector('#inpResult');

    var mergeCount = mergeCountElem.value;
    var mergeReward = mergeRewardElem.value;
    var startLevel = startLevelElem.value;
    var rewardLevel = rewardLevelElem.value;
    var rewardCount = rewardCountElem.value;

    var result = Math.pow(mergeCount, rewardLevel - startLevel) * (rewardCount / mergeReward);

    resultElem.value = result;
    e.preventDefault();
});