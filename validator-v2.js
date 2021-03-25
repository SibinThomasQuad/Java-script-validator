class Validate {
  constructor(form) {
    this.form_id=form;
    this.status=true;
  }
  alert_object(id,message)
  {
    //alert(message[0]);
    //document.forms[this.form_id][message[0]].textContent = message[1];
    document.getElementById(message[0]).innerHTML=message[1];
  }
  success_object(id)
  {
    //document.forms[this.form_id][id].style.borderColor='#00b300';
  }
  isnumber(id,message)
  {
  var value=document.forms[this.form_id][id].value;
  if (isNaN(value)) 
  {
  	this.alert_object(id,message);
    this.status=false;
  }
  else
    {
      this.success_object(id);
    }
   }
  required(id,message) {
    if(document.forms[this.form_id][id].value=='')
    {
      this.alert_object(id,message);
      this.status=false;
    }
    else
    {
      this.success_object(id);
    }
  }
  min_length(id,length,message)
  {
    var value=document.forms[this.form_id][id].value;
  	var value_length = value.length;
  	if(value_length < length)
  	{
  	  this.alert_object(id,message);
      this.status=false;
      
  	}
  	else
    {
      this.success_object(id);
    }
  }
  max_length(id,length,message)
  {
    var value=document.forms[this.form_id][id].value;
  	var value_length = value.length;
  	if(value_length > length)
  	{
  	  this.alert_object(id,message);
      this.status=false;
  	}
  	else
    {
      this.success_object(id);
    }
  }
  phone(id,max,min,message)
  {
    var value=document.forms[this.form_id][id].value;
    var value=value.split(" ").join("");
    var value=value.split("-").join("");
  	var value_length = value.length;
  	if(value_length < min || value_length > max || isNaN(value))
  	{
  	    this.alert_object(id,message);
        this.status=false;
  	}
  	else
  	{
  		this.success_object(id);
  	}
  }
  email(id,message) 
  {
     
     var emai_value=document.forms[this.form_id][id].value;
     var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emai_value) == false) 
        {
            this.alert_object(id,message);
        	this.status=false;
        }
        else
        {
        	this.success_object(id);
        }
 }
  length(id,length,message)
  {
  	//function to set length
  	var value=document.forms[this.form_id][id].value;
  	var value_length = value.length;
  	if(value_length != length)
  	{
  	  this.alert_object(id,message);
      this.status=false;
  	}
  	else
    {
      this.success_object(id);
    }
  	
  }
  name(id,message)
  {
      var name=document.forms[this.form_id][id].value;
      var name_check=/^[A-z ]+$/.test(name);
      if(name_check==true)
      {
         this.success_object(id); 
      }
      else
      {
      this.alert_object(id,message);
      this.status=false;
      }
  }
  nospaceonly(id,message)
  {
     var str=document.forms[this.form_id][id].value;
     if (!str.replace(/\s/g, '').length) 
     {
        this.alert_object(id,message);
        this.status=false;
     }
     else
     {
        this.success_object(id);  
     }
  }
}
