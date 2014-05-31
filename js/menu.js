/**
 * Created by gavin on 3/18/14.
 */

function showAll(){
    $('.title').show();
}

function showAlgebra(){
    $('.physics').hide();
    $('.conversions').hide();
    $('.chemistry').hide();
    $('.algebra').show();
}

function showPhysics(){
    $('.chemistry').hide();
    $('.algebra').hide();
    $('.conversions').hide();
    $('.physics').show();
}

function showChemistry(){
    $('.physics').hide();
    $('.algebra').hide();
    $('.conversions').hide();
    $('.chemistry').show();
}

function showConversions(){
    $('.physics').hide();
    $('.algebra').hide();
    $('.chemistry').hide();
    $('.conversions').show();
}