sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/mindset/assessmentapplistreport/test/integration/FirstJourney',
		'com/mindset/assessmentapplistreport/test/integration/pages/QuizList',
		'com/mindset/assessmentapplistreport/test/integration/pages/QuizObjectPage'
    ],
    function(JourneyRunner, opaJourney, QuizList, QuizObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/mindset/assessmentapplistreport') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheQuizList: QuizList,
					onTheQuizObjectPage: QuizObjectPage
                }
            },
            opaJourney.run
        );
    }
);