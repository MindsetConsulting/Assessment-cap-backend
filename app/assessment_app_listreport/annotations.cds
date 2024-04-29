using QuizService as service from '../../srv/service';

annotate service.Quiz with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'title',
            Value : title,
        },
        {
            $Type : 'UI.DataField',
            Label : 'endTime',
            Value : endTime,
        },
        {
            $Type : 'UI.DataField',
            Label : 'date',
            Value : date,
        },
        {
            $Type : 'UI.DataField',
            Label : 'noOfQues',
            Value : noOfQues,
        },
        {
            $Type : 'UI.DataField',
            Label : 'fullMarks',
            Value : fullMarks,
        },
    ]
);
annotate service.Quiz with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'title',
                Value : title,
            },
            {
                $Type : 'UI.DataField',
                Label : 'endTime',
                Value : endTime,
            },
            {
                $Type : 'UI.DataField',
                Label : 'date',
                Value : date,
            },
            {
                $Type : 'UI.DataField',
                Label : 'noOfQues',
                Value : noOfQues,
            },
            {
                $Type : 'UI.DataField',
                Label : 'fullMarks',
                Value : fullMarks,
            },
            {
                $Type : 'UI.DataField',
                Label : 'passMarks',
                Value : passMarks,
            },
            {
                $Type : 'UI.DataField',
                Label : 'learningSP',
                Value : learningSP,
            },
            {
                $Type : 'UI.DataField',
                Label : 'learningEP',
                Value : learningEP,
            },
            {
                $Type : 'UI.DataField',
                Label : 'draft',
                Value : draft,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
