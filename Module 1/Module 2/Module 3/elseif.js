// 90 to 100 , A
// 70 to 89 , B
// 50 TO 69 , C
// lower then 50, D

var studentScore = 65

if(studentScore > 90)
{
    console.log('Student got Grade A')
}
else if(studentScore >= 70 && studentScore <= 89)
{
    console.log('Student has scored a C')

}
else if(studentScore >= 50 && studentScore <= 69)
{
    console.log('Student has scored a D')

}
else
{
    console.log('Student Has Scored a E')
}
