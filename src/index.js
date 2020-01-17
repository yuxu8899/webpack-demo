import $ from 'jquery'
import './css/1.css'
$(function(){
    $('li:odd').css('backgroundColor','red'),
    $('li:even').css('backgroundColor','lightblue')
})