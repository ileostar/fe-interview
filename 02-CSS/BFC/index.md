## BFC是什么

独立渲染区域，内部元素的渲染不会影响边界外的元素

## BFC触发条件

- 根元素
- 绝对定位元素：position: absolute/fixed
- 浮动元素：float: left/right
- overflow不为visible，为auto、scroll、hidden
- 行内块元素：display: inline/inline-block/table/flex/inline-flex/grid/inline-grid

## BFC常见应用

- 清除浮动
