ng-fur
======

# AngularJS code Snippets

## Grid

Usage:  

`<grid dataprovider="dataprovider" columns="columns"></grid>`  

Where `dataprovider` is an array. The `columns` attributes is optional, when provided, it needs to be an array of strings, containing the property names of the objects in the datapovider, or an array of objects. A column object contains 3 properties:  
```javascript
{
	label: 'Header name of column',
	value: 'Property name of column',
	sortFunction: function(a) { return a.toString();}// A formatter for sorting
}
```
