<?php
/**
 * User: kidsit
 * Date: 2015/6/25
 * Time: 13:44
 */
function set_active($path,$active_class = 'active')
{
    return Request::is($path) ? "class=$active_class" : '';
}
function testforbladecall()
{
    return "调用成功！";
}