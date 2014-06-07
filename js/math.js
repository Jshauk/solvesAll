var mathjs = require('mathjs'),
    math = mathjs();
    var doc = document;

function quadraticX()
{
	//x=-b+sqr((b^2)-(4ac))/2a || x=-b-sqr((b^2)-(4ac))/2a
	var b = Number($('#b').value),
	    a = Number($('#a').value),
	    c = Number($('#c').value),
	 newB = b*(-1),
	  ac4 = 4*a*c,
	   a2 = 2 * a,
	sqrdB = b*b;
	document.getElementById("x1").value = (newB + Math.sqrt(sqrdB - ac4)) / a2;
	document.getElementById("x2").value = (newB - Math.sqrt(sqrdB - ac4)) / a2;
}

function clearQuadratic(){
    document.getElementById('b').value = '';
    document.getElementById('a').value = '';
    document.getElementById('c').value = '';
    document.getElementById("x1").value = '';
    document.getElementById("x2").value = '';
}

function refAngle()
{	
	var angle = Number(document.getElementById('angle').value);
    while(angle >= 360){
        angle = angle - 360;
    }
	//quadrant 1
    if(angle <= 90 && angle >= 0){
		document.getElementById('refAngle').value = angle;
	}
    //quadrant 2
    if(angle > 90 && angle <= 180){
			angle = 180 - angle;
		document.getElementById('refAngle').value = angle;
	}
    //quadrant 3
    if(angle > 180 && angle <= 270){
            angle = angle - 180;
        document.getElementById('refAngle').value = angle;
    }
    //quadrant 4
    if(angle > 270 && angle < 360){
            angle = 360 - angle;
        document.getElementById('refAngle').value = angle;
    }
    if(angle == 0){
        document.getElementById('refAngle').value = angle;
    }

}

function clearRefAng(){
    document.getElementById('angle').value = '';
    document.getElementById('refAngle').value = '';
}

function solveSlopeIntercept(){
    var m = Number(document.getElementById('slopeM').value),
        x = Number(document.getElementById('slopeX').value),
        b = Number(document.getElementById('slopeB').value),    
	    y = Number(document.getElementById('slopeY').value);
	if (!document.getElementById('slopeY').value){
        //y = mx + b;
        y = (m * x) + b;
        document.getElementById("slopeVar").innerHTML = 'Y:';
        document.getElementById("slopeAns").value = y;
    }
    if (!document.getElementById('slopeM').value){
        //m = (y-b) / x;
        m = (y - b) / x;
        document.getElementById("slopeVar").innerHTML = 'M:';
        document.getElementById("slopeAns").value = m;    
	}
    if (!document.getElementById('slopeX').value){
        //x=(y-b)/m
        x = (y - b) / m;
        document.getElementById("slopeVar").innerHTML = 'X:';
        document.getElementById("slopeAns").value = x;
    }
    if (!document.getElementById('slopeB').value){
        //b=y-mx
        b = y - m * x;
        document.getElementById("slopeVar").innerHTML = 'B:';
        document.getElementById("slopeAns").value = b;
    }
}

function clearSlopeIntercept(){
    document.getElementById('slopeY').value = '';
    document.getElementById('slopeM').value = '';
    document.getElementById('slopeX').value = '';
    document.getElementById('slopeB').value = '';
    document.getElementById('slopeVar').innerHTML = '';
    document.getElementById('slopeAns').value = '';
}

function pointSlope(){
    //m=(y2-y1)/(x2-x1)
    var y2 = Number(document.getElementById('pS_Y2').value),
        y1 = Number(document.getElementById('pS_Y1').value),
        x2 = Number(document.getElementById('pS_X2').value),
        x1 = Number(document.getElementById('pS_X1').value);
    document.getElementById("pS_M").value = (y2 - y1) / (x2 - x1);
}

function clearPointSlope(){
    document.getElementById('pS_Y2').value = '';
    document.getElementById('pS_Y1').value = '';
    document.getElementById('pS_X2').value = '';
    document.getElementById('pS_X1').value = '';
    document.getElementById('pS_M').value = '';
}

//Calculates the Distance between Two Linear Points
function DTP(){
    //d=sqrt((x2-x1)^2+(y2-y1)^2
    var x1 = Number(document.getElementById('dtp_X1').value),
        x2 = Number(document.getElementById('dtp_X2').value),
        y1 = Number(document.getElementById('dtp_Y1').value),
        y2 = Number(document.getElementById('dtp_Y2').value);
    document.getElementById("dtp_D").value = (Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)));
}

function clearDTP(){
    document.getElementById('dtp_X1').value = '';
    document.getElementById('dtp_X2').value = '';
    document.getElementById('dtp_Y1').value = '';
    document.getElementById('dtp_Y2').value = '';
    document.getElementById('dtp_D').value = '';
}

function factorial(){
    //n*(n-1)*(n-2)....n=1
    var n = Number(document.getElementById('f_N').value),
        X = n;
    if( n == 0 || n == 1){
        n = 1;
    }
    if( n < 0){
        n = '';
    }
    while(X > 1){
        n = n * (X - 1);
        X = X - 1;
    }
    document.getElementById("f_Ans").value = n;

}

function clearfactorial(){
    document.getElementById('f_N').value = '';
    document.getElementById('f_Ans').value = '';
}

function solveDegreeRadian(){
	var r = Number(document.getElementById('degRadR').value),
	    d = Number(document.getElementById('degRadD').value);
    if(!document.getElementById('degRadD').value){
		//d=r/((22/7)*(1/180))
        document.getElementById("degRadD").value = r / (Math.PI * (1 / 180));
	}
    if(!document.getElementById('degRadR').value){
        //r=d*(22/7)*(1/180)
        document.getElementById("degRadR").value = d * Math.PI * (1 / 180);
    }
}

function clearDegRad(){
    document.getElementById('degRadR').value = '';
    document.getElementById('degRadD').value = '';
}

function percentageError()
{
    //pE=(aV-eV)/eV*100%
    var aV = Number(document.getElementById('pEaV').value),
        eV = Number(document.getElementById('pEeV').value),
        pE = ((aV - eV) / eV) * 100;
    if(pE < 0){
        pE = -1 * pE;
    }
    document.getElementById("pEpE").value = pE;
}

function clearPercentageError(){
    document.getElementById('pEaV').value = '';
    document.getElementById('pEeV').value = '';
    document.getElementById('pEpE').value = '';
}

function solveInterest(){
    var X = Number(document.getElementById('interestTimeAns').value),
        p = Number(document.getElementById('i_P').value),
        r = Number(document.getElementById('i_R').value),
		i = Number(document.getElementById('i_I').value),
        tiy = Number(document.getElementById('i_Tiy').value);
    if(X != 0){
        tiy = X;
	}
    if (!document.getElementById('i_I').value){
		//i=p*(r*.01)*tiy
		document.getElementById("interestVar").innerHTML = 'Interest:';
		document.getElementById("i_I").value = document.getElementById("interestAns").value = p * r * .01 * tiy;
		document.getElementById("i_Tiy").value = tiy;
    }
    if (!document.getElementById('i_P').value){
		//p=i/((r*.01)*tiy)
		document.getElementById("interestVar").innerHTML = 'Principal:';
		document.getElementById("i_P").value = document.getElementById("interestAns").value = i / (r * .01 * tiy);
		document.getElementById("i_Tiy").value = tiy;
    }
    if (!document.getElementById('i_R').value){
		//r=(i * 100)/(p*tiy)
		document.getElementById("interestVar").innerHTML = 'Interest Rate Percentage:';
		document.getElementById("i_R").value = document.getElementById("interestAns").value = (i * 100) / (p * tiy);
		document.getElementById("i_Tiy").value = tiy;
    }
    if (!document.getElementById('i_Tiy').value){
		//tiy=i/(p*(r*.01))
		document.getElementById("interestVar").innerHTML = 'Time in Years:';
		document.getElementById("i_Tiy").value = document.getElementById("interestAns").value = i / (p * r * .01);
	}
}

function clearSolveInterest(){
    document.getElementById('i_P').value = '';
    document.getElementById('i_R').value = '';
    document.getElementById('i_I').value = '';
    document.getElementById('i_Tiy').value = '';
    document.getElementById('interestAns').value = '';
	document.getElementById('interestVar').innerHTML = '';
}

function InterestTimeConverter(){
    var m = Number(document.getElementById('i_M').value),
        d = Number(document.getElementById('i_D').value);
    if (!document.getElementById('i_M').value){
		//tiy=d/365
		document.getElementById("interestTimeAns").value = d / 365;
    }
    if (!document.getElementById('i_D').value){
		//tiy=m/12
		document.getElementById("interestTimeAns").value = m / 12;
    }
}

function clearInterestTimeConverter(){
    document.getElementById('i_D').value = '';
    document.getElementById('i_M').value = '';
    document.getElementById('interestTimeAns').value = '';
}

//Converts Rate of Speed into Miles per Hour and inputs result into final formula
function DRT_RateConverter(){
    if (document.getElementById('drt_F').value){
        //m=f/5280
        var f = Number(document.getElementById('drt_F').value);
        document.getElementById("drt_Miles").value = f / 5280;
    }
    if (document.getElementById('drt_Y').value){
        //m=y/1760
        var y = Number(document.getElementById('drt_Y').value);
        document.getElementById("drt_Miles").value = y / 1760;
    }
    if (document.getElementById('drt_S').value){
        //h=s/3600
        var s = Number(document.getElementById('drt_S').value);
        document.getElementById("drt_H").value = s / 3600;
    }
    if (document.getElementById('drt_M').value){
        //h=m/60
        var m = Number(document.getElementById('drt_M').value);
        document.getElementById("drt_H").value = m / 60;
    }
    //rate = m/h
    var miles = Number(document.getElementById('drt_Miles').value),
        h = Number(document.getElementById('drt_H').value);
    document.getElementById("drt_R").value = miles / h;
}

function clearDRT_RateConverter(){
    document.getElementById('drt_F').value = '';
    document.getElementById('drt_Y').value = '';
    document.getElementById('drt_Miles').value = '';
    document.getElementById('drt_S').value = '';
    document.getElementById('drt_M').value = '';
    document.getElementById('drt_H').value = '';
}

//Converts Time into Hours and inputs result into final formula
function DRT_TimeConverter(){
    if (document.getElementById('drt_TS').value){
        //h=s/3600
        var s = Number(document.getElementById('drt_TS').value);
        document.getElementById("drt_T").value = s / 3600;
    }
    if (document.getElementById('drt_TM').value){
        //h=m/60
        var m = Number(document.getElementById('drt_TM').value);
        document.getElementById("drt_T").value = m / 60;
    }
    if (document.getElementById('drt_TH').value){
        document.getElementById("drt_T").value = document.getElementById('drt_TH').value;
    }
}

function clearDRT_TimeConverter(){
    document.getElementById('drt_TS').value = '';
    document.getElementById('drt_TM').value = '';
    document.getElementById('drt_TH').value = '';
}

//Converts Distance into Miles and inputs result into final formula
function DRT_DistanceConverter(){
    if (document.getElementById('drt_DF').value){
        //m=f/5280
        var f = Number(document.getElementById('drt_DF').value);
        document.getElementById("drt_D").value = f / 5280;
    }
    if (document.getElementById('drt_DY').value){
        //m=y/1760
        var y = Number(document.getElementById('drt_DY').value);
        document.getElementById("drt_D").value = y / 1760;
    }
    if (document.getElementById('drt_DM').value){
        document.getElementById('drt_D').value = document.getElementById('drt_DM').value;
    }
}

function clearDRT_DistanceConverter(){
    document.getElementById('drt_DF').value = '';
    document.getElementById('drt_DY').value = '';
    document.getElementById('drt_DM').value = '';
}

//Solves Actual DRT Problem
function solveDRT(){
    var r = Number(document.getElementById('drt_R').value),
        t = Number(document.getElementById('drt_T').value),
        d = Number(document.getElementById('drt_D').value);
    if (!document.getElementById('drt_D').value){
        //d=r*t
        d = r * t;
        document.getElementById("drtVar").innerHTML = 'Distance:';
        document.getElementById("drtAns").value = d;
        document.getElementById("drt_D").value = d;
    }
    if (!document.getElementById('drt_R').value){
        //r=d/t
        r = d / t;
        document.getElementById("drtVar").innerHTML = 'Rate(mph):';
        document.getElementById("drtAns").value = r;
        document.getElementById("drt_R").value = r;
    }
    if (!document.getElementById('drt_T').value){
        //t=d/r
        t = d / r;
        document.getElementById("drtVar").innerHTML = 'Time:';
        document.getElementById("drtAns").value = t;
        document.getElementById("drt_T").value = t;
    }
}

function clearSolveDRT(){
    document.getElementById('drt_D').value = '';
    document.getElementById('drt_R').value = '';
    document.getElementById('drt_T').value = '';
    document.getElementById('drtAns').value = '';
    document.getElementById('drtVar').innerHTML = '';
}

function mc_MassConversion(){
    var selected1 = $('#mC_U1 option:selected').html();
    var selected2 = $('#mC_U2 option:selected').html();
    var amt = Number(document.getElementById('mC_M1').value);
    console.log(selected1);
    var newAmt = 0;
    var endAmt = 0;

    if (selected1 == 'Teragram (Tg)'){
        newAmt = amt*1000000000000;
    }
    if (selected1 == 'Gigagram (Gg)'){
        newAmt = amt*1000000000;
    }
    if (selected1 == 'Megagram (Mg)'){
        newAmt = amt*1000000;
    }
    if (selected1 == 'Kilogram (kg)'){
        newAmt = amt*1000;
    }
    if (selected1 == 'Hectogram (hg)'){
        newAmt = amt*100;
    }
    if (selected1 == 'Decagram (dag)'){
        newAmt = amt*10;
    }
    if (selected1 == 'Gram (g)'){
        newAmt = amt;
    }
    if (selected1 == 'Decigram (dg)'){
        newAmt = amt/10;
    }
    if (selected1 == 'Centigram (cg)'){
        newAmt = amt/100;
    }
    if (selected1 == 'Milligram (mg)'){
        newAmt = amt/1000;
    }
    if (selected1 == 'Microgram (&#181g)'){
        newAmt = amt/1000000;
    }
    if (selected1 == 'Nanogram (ng)'){
        newAmt = amt/1000000000;
    }
    if (selected1 == 'Picogram (pg)'){
        newAmt = amt/1000000000000;
    }
    if (selected1 == 'Ounce (oz)'){
        newAmt = amt*28.34952316484755;
    }
    if (selected1 == 'Pound (lb)'){
        newAmt = amt*453.5923703803783;
    }
    if (selected1 == 'Ton (short ton-US)'){
        newAmt = amt*907184.7407607567;
    }
    if (selected2 == 'Teragram (Tg)'){
        endAmt = newAmt/1000000000000;
    }
    if (selected2 == 'Gigagram (Gg)'){
        endAmt = newAmt/1000000000;
    }
    if (selected2 == 'Megagram (Mg)'){
        endAmt = newAmt/1000000;
    }
    if (selected2 == 'Kilogram (kg)'){
        endAmt = newAmt/1000;
    }
    if (selected2 == 'Hectogram (hg)'){
        endAmt = newAmt/100;
    }
    if (selected2 == 'Decagram (dag)'){
        endAmt = newAmt/10;
    }
    if (selected2 == 'Gram (g)'){
        endAmt = newAmt;
    }
    if (selected2 == 'Decigram (dg)'){
        endAmt = newAmt*10;
    }
    if (selected2 == 'Centigram (cg)'){
        endAmt = newAmt*100;
    }
    if (selected2 == 'Milligram (mg)'){
        endAmt = newAmt*1000;
    }
    if (selected2 == 'Microgram (&#181g)'){
        endAmt = newAmt*1000000;
    }
    if (selected2 == 'Nanogram (ng)'){
        endAmt = newAmt*1000000000;
    }
    if (selected2 == 'Picogram (pg)'){
        endAmt = newAmt*1000000000000;
    }
    if (selected2 == 'Ounce (oz)'){
        endAmt = newAmt/28.34952316484755;
    }
    if (selected2 == 'Pound (lb)')
    {
        endAmt = newAmt/453.5923703803783;
    }
    if (selected2 == 'Ton (short ton-US)'){
        endAmt = newAmt/907184.7407607567;
    }
    document.getElementById("massVar").innerHTML = "<br>" + selected2;
    document.getElementById("mC_Result1").value = endAmt;
    document.getElementById("mC_Result2").value = selected2;
}

function clearMassConversion(){
    document.getElementById('mC_M1').value = '';
    $('#mC_U1').val('mC_units').change();
    $('#mC_U2').val('mC_units').change();
    document.getElementById('mC_Result1').value = '';
    document.getElementById('massVar').innerHTML = '';
}

function VolumeConversion(){
    var selected1 = $("#vC_U1").val();
    var selected2 = $("#vC_U2").val();
    var amt = Number(document.getElementById('vC_V1').value);
    var newAmt = 0;
    var endAmt = 0;

    if (selected1 == '1'){
        newAmt = amt * 1000;
    }
    if (selected1 == '2'){
        newAmt = amt * .001;
    }
    if (selected1 == '3'){
        newAmt = amt * .000001;
    }
    if (selected1 == '4'){
        newAmt = amt * .2365882;
    }
    if (selected1 == '5'){
        newAmt = amt * 28.31685;
    }
    if (selected1 == '6'){
        newAmt = amt * .01638706;
    }
    if (selected1 == '7'){
        newAmt = amt * 7645549;
    }
    if (selected1 == '8'){
        newAmt = amt * .02957353;
    }
    if (selected1 == '9'){
        newAmt = amt * 3.785412;
    }
    if (selected1 == '10'){
        newAmt = amt;
    }
    if (selected1 == '11'){
        newAmt = amt * .001;
    }
    if (selected1 == '12'){
        newAmt = amt * .4731765;
    }
    if (selected1 == '13'){
        newAmt = amt * .946353;
    }
    if (selected1 == '14'){
        newAmt = amt * .01478676;
    }
    if (selected1 == '15'){
        newAmt = amt * .004928922;
    }
    if (selected2 == '1'){
        endAmt = newAmt * .001;
    }
    if (selected2 == '2'){
        endAmt = newAmt * 1000;
    }
    if (selected2 == '3'){
        endAmt = newAmt * 1000000;
    }
    if (selected2 == '4'){
        endAmt = newAmt * 4.22675349;
    }
    if (selected2 == '5'){
        endAmt = newAmt * 0.03531466247;
    }
    if (selected2 == '6'){
        endAmt = newAmt * 61.02375899;
    }
    if (selected2 == '7'){
        endAmt = newAmt * 0.001307950547;
    }
    if (selected2 == '8'){
        endAmt = newAmt * 33.8140222;
    }
    if (selected2 == '9'){
        endAmt = newAmt * 0.2641720373;
    }
    if (selected2 == '10'){
        endAmt = newAmt;
    }
    if (selected2 == '11'){
        endAmt = newAmt * 1000;
    }
    if (selected2 == '12'){
        endAmt = newAmt * 2.113376298;
    }
    if (selected2 == '13'){
        endAmt = newAmt * 1.056688149;
    }
    if (selected2 == '14'){
        endAmt = newAmt * 67.62806727;
    }
    if (selected2 == '15'){
        endAmt = newAmt * 202.8841195;
    }
    document.getElementById("vC_Result1").value = Math.round(endAmt * 1000000) / 1000000;
    document.getElementById("volVar").innerHTML = "<br>" + $('#vC_U2 option:selected').text();
}

function clearVolumeConversion(){
    document.getElementById('vC_V1').value = '';
    $('#vC_U1').val('vC_units').change();
    $('#vC_U2').val('vC_units').change();
    document.getElementById('vC_Result1').value = '';
    document.getElementById('volVar').innerHTML = '';
}

function TimeConversion(){
    var selected1 = $("#timeC_U1").val();
    var selected2 = $("#timeC_U2").val();
    var amt = Number(document.getElementById('timeC_T1').value);
    var newAmt = 0;
    var endAmt = 0;

    if (selected1 == '1'){
        newAmt = (((amt / 60) / 60) / 24);
    }
    if (selected1 == '2'){
        newAmt = ((amt / 60) / 24) ;
    }
    if (selected1 == '3'){
        newAmt = amt / 24;
    }
    if (selected1 == '4'){
        newAmt = amt;
    }
    if (selected1 == '5'){
        newAmt = amt * 7;
    }
    if (selected1 == '6'){
        newAmt = ((amt * 365) / 12);
    }
    if (selected1 == '7'){
        newAmt = amt * 365;
    }
    if (selected2 == '1'){
        endAmt = newAmt * 24 * 60 * 60;
    }
    if (selected2 == '2'){
        endAmt = newAmt * 24 * 60;
    }
    if (selected2 == '3'){
        endAmt = newAmt * 24;
    }
    if (selected2 == '4'){
        endAmt = newAmt;
    }
    if (selected2 == '5'){
        endAmt = newAmt / 7;
    }
    if (selected2 == '6'){
        endAmt = newAmt / 365 * 12;
    }
    if (selected2 == '7'){
        endAmt = newAmt / 365;
    }
    document.getElementById("timeC_Result1").value = Math.round(endAmt * 1000000) / 1000000;
    document.getElementById("timeVar").innerHTML = "<br>" + $('#timeC_U2 option:selected').text();
}

function clearTimeConversion(){
    document.getElementById('timeC_T1').value = '';
    $('#timeC_U1').val('tC_units').change();
    $('#timeC_U2').val('tC_units').change();
    document.getElementById('timeC_Result1').value = '';
    document.getElementById('timeVar').innerHTML = '';

}

function TempConversion(){
    var selected1 = $("#tempC_U1").val();
    var selected2 = $("#tempC_U2").val();
    var amt = Number(document.getElementById('tempC_T1').value);
    var newAmt = 0;
    var endAmt = 0;

    if (selected1 == '1'){
        newAmt = amt + 273.15;
    }
    if (selected1 == '2'){
        newAmt = (amt + 459.67) * (5 / 9);
    }
    if (selected1 == '3'){
        newAmt = amt;
    }
    if (selected1 == '4'){
        newAmt = amt * (5 / 9);
    }
    if (selected1 == '5'){
        newAmt = (373.15 - (amt * (2 / 3)));
    }
    if (selected1 == '6'){
        newAmt = ((amt * (100 / 33)) + 273.15);
    }
    if (selected1 == '7'){
        newAmt = ((amt * 5/4) + 273.15);
    }
    if (selected1 == '8'){
        newAmt = (((amt-7.5) * (40 / 21)) + 273.15);
    }
    if (selected2 == '1'){
        endAmt = newAmt - 273.15;
    }
    if (selected2 == '2'){
        endAmt = ((newAmt * (9 / 5)) - 459.67);
    }
    if (selected2 == '3'){
        endAmt = newAmt;
    }
    if (selected2 == '4'){
        endAmt = (newAmt * (9 / 5));
    }
    if (selected2 == '5'){
        endAmt = (373.15 - (newAmt * (3 / 2)));
    }
    if (selected2 == '6'){
        endAmt = (newAmt - (273.15 * (33 / 100)));
    }
    if (selected2 == '7'){
        endAmt = (newAmt - (273.15 * (4 / 5)));
    }
    if (selected2 == '8'){
        endAmt = (((newAmt - 273.15) * (21 / 40)) + 7.5);
    }
    document.getElementById("tempC_Result1").value = Math.round(endAmt * 1000000) / 1000000;
    document.getElementById("tempVar").innerHTML = "<br>" + $('#tempC_U2 option:selected').text();
}

function clearTempConversion(){
    document.getElementById('tempC_T1').value = '';
    $('#tempC_U1').val('tC_units').change();
    $('#tempC_U2').val('tC_units').change();
    document.getElementById('tempC_Result1').value = '';
    document.getElementById('tempVar').innerHTML = '';
}

function DistanceConversion(){
    var selected1 = $("#dC_U1").val();
    var selected2 = $("#dC_U2").val();
    var amt = Number(document.getElementById('dC_D1').value);
    var newAmt = 0;
    var endAmt = 0;

    if (selected1 == '1'){
        newAmt = amt * 1000000000000;
    }
    if (selected1 == '2'){
        newAmt = amt * 1000000000;
    }
    if (selected1 == '3'){
        newAmt = amt * 1000000;
    }
    if (selected1 == '4'){
        newAmt = amt * 1000;
    }
    if (selected1 == '5'){
        newAmt = amt * 100;
    }
    if (selected1 == '6'){
        newAmt = amt * 10;
    }
    if (selected1 == '7'){
        newAmt = amt;
    }
    if (selected1 == '8'){
        newAmt = amt / 10;
    }
    if (selected1 == '9'){
        newAmt = amt / 100;
    }
    if (selected1 == '10'){
        newAmt = amt / 1000;
    }
    if (selected1 == '11'){
        newAmt = amt / 1000000;
    }
    if (selected1 == '12'){
        newAmt = amt / 1000000000;
    }
    if (selected1 == '13'){
        newAmt = amt / 1000000000000;
    }
    if (selected1 == '14'){
        newAmt = amt * .0254;
    }
    if (selected1 == '15'){
        newAmt = amt * .3048;
    }
    if (selected1 == '16'){
        newAmt = amt * .9144;
    }
    if (selected1 == '17'){
        newAmt = amt * 1609.344;
    }
    if (selected1 == '18'){
        newAmt = amt * 201.168;
    }
    if (selected1 == '19'){
        newAmt = amt * 1852;
    }
    if (selected1 == '20'){
        newAmt = amt * 1.8288;
    }
    if (selected1 == '21'){
        newAmt = amt * 30856775810000000;
    }
    if (selected1 == '22'){
        newAmt = amt * 9460730473000000;
    }
    if (selected2 == '1'){
        endAmt = newAmt / 1000000000000;
    }
    if (selected2 == '2'){
        endAmt = newAmt / 1000000000;
    }
    if (selected2 == '3'){
        endAmt = newAmt / 1000000;
    }
    if (selected2 == '4'){
        endAmt = newAmt / 1000;
    }
    if (selected2 == '5'){
        endAmt = newAmt / 100;
    }
    if (selected2 == '6'){
        endAmt = newAmt / 10;
    }
    if (selected2 == '7'){
        endAmt = newAmt;
    }
    if (selected2 == '8'){
        endAmt = newAmt * 10;
    }
    if (selected2 == '9'){
        endAmt = newAmt * 100;
    }
    if (selected2 == '10'){
        endAmt = newAmt * 1000;
    }
    if (selected2 == '11'){
        endAmt = newAmt * 1000000;
    }
    if (selected2 == '12'){
        endAmt = newAmt * 1000000000;
    }
    if (selected2 == '13'){
        endAmt = newAmt * 1000000000000;
    }
    if (selected2 == '14'){
        endAmt = newAmt * 39.37007874;
    }
    if (selected2 == '15'){
        endAmt = newAmt * 3.280839895;
    }
    if (selected2 == '16'){
        endAmt = newAmt * 1.093613298;
    }
    if (selected2 == '17'){
        endAmt = newAmt * 0.0006213711922;
    }
    if (selected2 == '18'){
        endAmt = newAmt * 0.004970969538;
    }
    if (selected2 == '19'){
        endAmt = newAmt * 0.0005399568035;
    }
    if (selected2 == '20'){
        endAmt = newAmt * 0.5468066492;
    }
    if (selected2 == '21'){
        endAmt = newAmt * 324077929000000000;
    }
    if (selected2 == '22'){
        endAmt = newAmt * 10570008340000000;
    }
    document.getElementById("dC_Result1").value = Math.round(endAmt * 1000000) / 1000000;
    document.getElementById("disVar").innerHTML = "<br>" + $('#dC_U2 option:selected').text();
}

function clearDistanceConversion(){
    document.getElementById('dC_D1').value = '';
    $('#dC_U1').val('dC_units').change();
    $('#dC_U2').val('dC_units').change();
    document.getElementById('dC_Result1').value = '';
    document.getElementById('disVar').innerHTML = '';
}
