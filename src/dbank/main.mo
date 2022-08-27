import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";
actor DBank {
  stable var currentValue:Float =300 ;
  //currentValue := 400 ;
  stable var startTime = Time.now();
  public func topUp(value:Float){
    currentValue += value ;
    Debug.print(debug_show(currentValue));
  };
  public func withDraw(value:Float){
    let withDrawn:Float = currentValue - value ;
    if(withDrawn >= 0){
    currentValue -= value ;
    Debug.print(debug_show(currentValue));
    }else{
      Debug.print("the amount you want to withdraw exceeds you acc");
    }
  };
  public query func readValue(): async Float{
  return currentValue ;
};
public func compoundInterest(){
  var currentTime = Time.now();
  var timeElapsed = (currentTime - startTime)/1000000000;
  currentValue := currentValue*(1.01)**(Float.fromInt(timeElapsed));
  startTime := currentTime ;
};
}
