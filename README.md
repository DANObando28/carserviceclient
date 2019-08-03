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

*Se creo un nuevo componente llamado Owner-edit, en el archivo owner-edit.ts se define una lista , los servicios a utilizar y se definen varios metodos de una forma parecida al archivo car-edit.ts del componente car-edit, luego se modifica el componente owner-edit.html, para agregar los botones Add para añadir un nuevo owner, back para retroceder de pagina. Tambien es posible dar click en el nombre del propietario para desplegar el owner-edit.html donde se puede modificar el nombre del propietario, el DNI o borrar el propietario.


Se debe poder eliminar varios propietarios al tiempo y Al eliminar un propietario debe eliminarse la relación que este tenga con un
carro.

*En el componente owner-list, se modifica el archivo owner-list.ts, se agregan los servicios necesarios como carservice.ts que para esta tarea es necesario para que sea posible desasociar un owner de un carro al momento de ser eliminados.
Fueron creado el metodo delete , su funcion es que en el momento que se utilize el borrado, compare los Dni en la lista de owner y la lista de carros, en caso de encontrar Dni iguales lo eliminara de la los autos y este quedara sin OwnerDni.

Para eliminar de manera simultanea se modifica el componente owner-list en su archivo owner-list.html, al momento de listar los nombres se utiliza Mat-CheckBox para que aparezca un recuadro seleccionable , siendo posible seleccionar varios nombres de manera simultanea los nombres seleccionados se guardan en una lista llamada BorrarP por medio del metodo add definido en owner-list.ts, y se añade un boton llamado "Delete" , su funciona es que al momento de que se le de click, va invocar el metodo delete y elimina los nombres listados en la lista BorrarP.

Para terminar hay que resaltar que para que todo funcione correctamente es necesario modificar los archivos appmodule.ts y app-routing.module.ts, en appmodule.ts hay que verificar que cada componente nuevo haya sido importado y declarado correctamente.

En app-routing-module.ts hay que verificar que esten correctamente importados cada uno de los componentes creados y declarar cada ruta nueva.


-Daniel Arango Obando 1020465122

