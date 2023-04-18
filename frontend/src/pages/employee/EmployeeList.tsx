import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeEmployee, saveEmployee, searchEmployees } from './EmployeeApi';
import Employee from './Employee';

const EmployeeList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<Employee[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    
    let result = await searchEmployees();
    setClientes(result);
  }

  const remove = async (id: string) =>{

    await removeEmployee(id);
    search();
  }

  const editEmployee = (id:string) =>{
    history.push('/page/employee/'+ id);
  }

  const addEmployee = () =>{
    history.push('/page/employee/new');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
       
        {/*Grid*/}
        <IonCard>

          <IonTitle>Gestión de Empleados</IonTitle>

          <IonItem>
            <IonButton onClick={addEmployee} color="primary" fill="solid" slot="end" size="default">
              <IonIcon icon={add} />
              Agregar Empleado
            </IonButton>
          </IonItem>

          <IonGrid className="table">

            <IonRow>
              <IonCol>Nombre</IonCol>
              <IonCol>Email</IonCol>
              <IonCol>Teléfono</IonCol>
              <IonCol>Dirección</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>
            
            {clientes.map((cliente: Employee) =>
              <IonRow>
                <IonCol>{cliente.firstname} {cliente.lastname}</IonCol>
                <IonCol>{cliente.email}</IonCol>
                <IonCol>{cliente.phone}</IonCol>
                <IonCol>{cliente.address}</IonCol>

                <IonCol>
                  <IonButton color="primary" fill="clear" onClick={() => editEmployee(String(cliente.id))}>
                    <IonIcon icon={pencil} slot="icon-only"/>
                  </IonButton>

                  <IonButton color="danger" fill="clear" onClick={() => remove(String(cliente.id))}>
                    <IonIcon icon={close} slot="icon-only"/>
                  </IonButton>
                </IonCol>
              </IonRow>
            )}
          </IonGrid>
        </IonCard>
        {/*Fin Grid*/}
      </IonContent>
    </IonPage>
  );
};

export default EmployeeList;