var template = 
'<!DOCTYPE html>'+
'<html>'+
    '<body>'+
        '<table style="width:100%; border: 1px solid black;">'+
            '<tr>'+
                '<th style="border: 1px solid black; width: 25%;">Problem</th>'+
                '<th style="border: 1px solid black; width: 75%;" colspan="{{totalChoices}}">{{problem}}</th>'+
            '</tr>'+
            '<tr>'+
                '<td style="border: 1px solid black; width: 25%;">Choices</td>' + 
                '{{#choices}}<td style="border: 1px solid black; width:{{width}}%;">{{choice}}</td>{{/choices}}'+
            '</tr>'+
            '<tr>'+
                '<td style="border: 1px solid black; width: 25%;">Consequences</td>' + 
                '{{#consequences}}<td style="border: 1px solid black; width:{{width}}%;">'+
                    '<ul>' +
                        '{{#multiConsequences}}<li>{{multiConsequence}}</li>{{/multiConsequences}}'+
                    '</ul>'+
                '</td>{{/consequences}}'+
            '</tr>'+
        '</table>'+
    '</body>'+
'</html>';

{/* <tr><td style="border: 1px solid black; width: 25%;">Values</td>' + val + '</tr><tr><td style="border: 1px solid black; width: 25%;">Feelings</td>' + feel + '</tr><tr><td style="border: 1px solid black; width: 25%;">Additional Info</td><td style="border: 1px solid black; width: 75%;" colspan="' + storageUnit.userData[1].length + '">' + storageUnit.userData[5] + '</td></tr><tr><td style="border: 1px solid black; width: 25%;">Who Can Help</td><td style="border: 1px solid black; width: 75%;" colspan="' + storageUnit.userData[1].length + '"><ul>' + help + '</ul></td></tr><tr><td style="border: 1px solid black; width: 25%;">Decision</td><td style="border: 1px solid black; width: 75%;" colspan="' + storageUnit.userData[1].length + '">' + storageUnit.userData[7] + '</td></tr><tr><td style="border: 1px solid black; width: 25%;">Assessment</td><td style="border: 1px solid black; width: 75%;" colspan="' + storageUnit.userData[1].length + '">' + storageUnit.userData[8] + '</td></tr> */}