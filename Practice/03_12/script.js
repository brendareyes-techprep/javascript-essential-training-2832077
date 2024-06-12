/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class BasketballBackpack extends Backpack {
    constructor(
    name, 
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen,
        ballEquipped
    ){
        super(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen);
        this.ballEquipped = ballEquipped; // will be true or false
    }
    checkBall(){
        if (this.ballEquipped = true){
            console.log("You have your ball equipped.");
        }else{
            console.log("You forgot to equip your ball.");
        }
    }
    toggleLid(lidStatus){
        super.toggleLid(lidStatus);
        if (lidStatus) {
            console.log(
                "Your basketball backpack is open. Remember to close it so your ball doesn't fall out."
            );
        } else {
            console.log(
                "Your basketball backpack is closed. Remember to check to make sure your basketball is equipped."
            );
        }
    }
}