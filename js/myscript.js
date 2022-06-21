function showSurvey(){
	document.getElementById('surveyOverlay').style.display = 'block';
	document.getElementsById('surveyButton').disabled = true;
        document.getElementsById('analyticsButton').disabled = true;
}

function showAnalytics(){
	document.getElementById('analyticsOverlay').style.display = 'block';
        document.getElementsById('surveyButton').disabled = true;
        document.getElementsById('analyticsButton').disabled = true;
}

function hideSurvey(){
        document.getElementById('surveyOverlay').style.display = 'none';
        document.getElementsById('surveyButton').disabled = false;
        document.getElementsById('analyticsButton').disabled = false;
}

function hideAnalytics(){
        document.getElementById('analyticsOverlay').style.display = 'none';
        document.getElementsById('surveyButton').disabled = false;
        document.getElementsById('analyticsButton').disabled = false;
}
