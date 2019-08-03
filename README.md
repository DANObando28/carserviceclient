LABORATORIO ANGULAR

Es necesario dar la posibilidad de trabajar con los 4 tipos de operaciones del
crud

*En la carpeta shared se encuentra creado un nuevo servicio para los owners llamado owner.service.ts, alli se encuentran definidas las operaciones CRUD GetAll, Get , Save y Remove.

Deben tener presente que se debe poder asociar un owner a un carro. Para
esto deben mirar los campos que se tienen disponibles en la anterior API.

*Para asociar un owner a un carro fue necesario modificar el componente Car-edit de tal manera que el OwnerDni definido en la API ya consumida por el servicio carservice.ts se mostrara por medio del archivo HTML del componente Caredit, de esta forma se muestra un nuevo campo con el que es posible agregar un ownerDNI a un carro.

Debe tener un componente que muestre una lista de los carros con sus
propietarios. Los carros deben presentar la imagen de este.

*Se creo un nuevo componente llamado Carownerlist, en el archivo Carownerlist.ts se encuentran definidas varias listas y los servicios utilizados, el metodo NgOnInit es el encargado de buscar que el OwnerDni de los cars sea igual al Dni definido en la API de los Owners, en el momento que encuentre DNI iguales se toma el nombre del Owner y se muestra en la pagina. Cuando se accede a la pagina web http://localhost:4200/car-list, se muestran dos botones agregados en el archivo carlist.html que se encuentra en el componente carlist. la funcion de este boton llamado "COW" cuya funcion es redirigir a la lista de los carros con el nombre de su owner. 

Debe modificar el componente de edit-car para permitir agregar el
propietario.

*El componente encargado de editar los autos fue modificado en el archivo caredit-component.html para mostrar un nuevo campo donde es posible agregar el propietario de ese auto.

Debe tener un componente que permita ver la lista de propietarios.

*Se creo un nuevo componente llamado owner-list, donde se utiliza el servicio owner.service.ts para llamar la API encargada de los owners, en el archivo owner-list.ts se definen las listas necesarios para listar los owners usando el GetAll en el metodo NgOnInit, luego se edita el archivo owner-list.html para mostrar los owners en la pagina web. Para ver esta lista en el archivo carlist.html que encuentra en el componente carlist se añadio un boton llamado "OWN" cuya funcion es redirigir hacia la la URL encargada de mostrar los owners.

Debe tener un componente que permita crear o actualizar los propieatrios.



Se debe poder eliminar varios propietarios al tiempo y Al eliminar un propietario debe eliminarse la relación que este tenga con un
carro.


