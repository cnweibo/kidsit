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
function print_available_classes()
{
	$avaialbeClasses = get_declared_classes();
	foreach ($avaialbeClasses as $key => $value) {
		print_r($key.' '.$value);
		print_r(' ....  extends: '. '<strong>' .get_parent_class($value).'</strong></br>');
	}
}