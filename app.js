var unirest = require('unirest');


var GroupID = "xxx"
var Token = "xxx"

DelPostroup();

function DelPostroup(){
count = 0 ;
unirest.get('https://graph.facebook.com/v2.12/'+GroupID+'/feed?access_token='+Token)
.header({ 'Accept': 'application/json','Content-Type': 'application/json' })
.end(async function (response) {
   response.body.data.forEach(async function (Idpost) {
    unirest.delete('https://graph.facebook.com/v2.12/' +Idpost.id+'/?access_token='+Token)
    .header({ 'Accept': 'application/json','Content-Type': 'application/json' })
    .end(await function (response2) {
        console.log("DELETE POST : "+ Idpost.id +" Response : " + response2.body.success);
        count++;
    })
})
});
if (count > 8){
    DelPostroup();
}
}
