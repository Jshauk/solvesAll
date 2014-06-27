/**
 * Created by gavin on 3/18/14.
 */

function showAll(){
    closeFunctions();
    $('.title').show();
}

function showAlgebra(){
    closeFunctions();
    $('.physics').hide();
    $('.conversions').hide();
    $('.chemistry').hide();
    $('.algebra').show();
}

function showPhysics(){
    closeFunctions();
    $('.chemistry').hide();
    $('.algebra').hide();
    $('.conversions').hide();
    $('.physics').show();
}

function showChemistry(){
    closeFunctions();
    $('.physics').hide();
    $('.algebra').hide();
    $('.conversions').hide();
    $('.chemistry').show();
}

function showConversions(){
    closeFunctions();
    $('.physics').hide();
    $('.algebra').hide();
    $('.chemistry').hide();
    $('.conversions').show();
}

function closeFunctions(){
    $('.opened-function').nextUntil('.title').hide();
}