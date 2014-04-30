function quadraticX()
{
	//x=-b+sqr((b^2)-(4ac))/2a || x=-b-sqr((b^2)-(4ac))/2a
	var b = Number(document.getElementById('b').value),
	    a = Number(document.getElementById('a').value),
	    c = Number(document.getElementById('c').value),
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

function cfk_TemperatureConverter(){
	//c=(f-32)/1.8 || c=k-273.15 || k=(f-32)/1.8+273.15
	var c = Number(document.getElementById('cfk_c').value),
	    f = Number(document.getElementById('cfk_f').value),
		k = Number(document.getElementById('cfk_k').value);
		if (!document.getElementById('cfk_f').value && !document.getElementById('cfk_k').value){
		     document.getElementById("cfk_f").value = ((c * 1.8) + 32);
			 document.getElementById("cfk_k").value = (c + 273.15);
		}
		if (!document.getElementById('cfk_c').value && !document.getElementById('cfk_k').value){
		     document.getElementById("cfk_c").value = ((f - 32) / 1.8);
			 document.getElementById("cfk_k").value = ((f - 32) / 1.8 + 273.15);
		}
				if (!document.getElementById('cfk_f').value && !document.getElementById('cfk_c').value){
			 document.getElementById("cfk_f").value = (((k - 273.15) * 1.8) + 32);
		     document.getElementById("cfk_c").value = (k - 273.15);
		}
}		

function clearcfk_TemperatureConverter(){
	document.getElementById('cfk_c').value = '',
	document.getElementById('cfk_f').value = '',
	document.getElementById('cfk_k').value = '';
}