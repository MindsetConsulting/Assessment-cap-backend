using { com.mindset.quiz as my } from '../db/schema';

service QuizService @(requires: 'authenticated-user') {
    entity Quiz @(restrict: [
        {
            grant: ['*'],
            to   : [
                    'com.mindset.role.admin'
                ]
        },
        {
            grant: ['READ'],
            to   : [
                'com.mindset.role.user'
            ]
        }
    ]) as projection on my.quiz;
}

// service quizservice1 {
//     entity Conditions as projection on my.quizConditions;
// }

// @(restrict: [
//         {
//             grant: ['*'],
//             to   : [
//                     'com.mindset.role.admin'
//                 ]
//         },
//         {
//             grant: ['READ'],
//             to   : [
//                 'com.mindset.role.user'
//             ]
//         }
//     ])  