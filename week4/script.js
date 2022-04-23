var names=new Array();
names[0]="Junaid";
names[1]="Umar";
names[2]="Mosin";
names[3]="Ibrahim";
names[4]="John";
names[5]="Aamir";
names[6]="Tabish";
names[7]="jason";
names[8]="Jen";
names[9]="Harry";
names[10]="jimmy";

for(var i =0; i< names.length; i++){
    if(names[i].charAt(0)=='J'|| names[i].charAt(0)=='j'){
        console.log("Goodbye "+ names[i]);

    }
    else{
        console.log("Hello " +names[i]);
    }
}