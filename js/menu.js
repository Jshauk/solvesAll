/**
 * Created by gavin on 3/18/14.
 */

function showAll(){
    $('.title').show();
}

function showAlgebra(){
    $('.physics').hide();
    $('.chemistry').hide();
    $('.algebra').show();
}

function showPhysics(){
    $('.chemistry').hide();
    $('.algebra').hide();
    $('.physics').show();
}

function showChemistry(){
    $('.physics').hide();
    $('.algebra').hide();
    $('.chemistry').show();
}
