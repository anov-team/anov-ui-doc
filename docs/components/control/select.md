# 选择框

<script setup>
    let data=[{name:'单选框',code:'AnRadio1'},
    {name:'按钮单选框',code:'AnRadio2'},
    {name:'多选框',code:'AnCheckbox1'},
    {name:'按钮多选框',code:'AnCheckbox2'},
    {name:'日期选择',code:'AnDatePicker1'},
    {name:'下拉列表',code:'AnDropdown'},
    {name:'导航菜单',code:'AnMenu'},]
</script>

<element :data="data"></element>
