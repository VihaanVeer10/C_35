class Player{
    constructor(){}



    getCount(){
        var playercountref= database.ref("playercount");
    playercountref.on("Value" , function(data){
        playercount=data.val()

    })
    }
    updateCount(count){
        database.ref('/' ).update({
            playercount:count
        })
    }
}