import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeCustomer, saveCustomer, searchCustomers, searchCustomersById } from './CustomerApi';
import Customer from './Customer';

const CustomerEdit: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [customer, setCustomer] = useState<Customer>({});
  const history = useHistory();

  const routeMatch: any = useRouteMatch("/page/customer/:id");
  const id = routeMatch?.params?.id;

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {

    if(id === "new"){

      setCustomer({});

    }else{
      
      let result = await searchCustomersById(id);
      setCustomer(result);
    }
  }

  const save = async() => {
    
    await saveCustomer(customer);
    history.push('/page/customers');
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
       

        <IonCard>

          <IonTitle>{id==="new" ? "Agregar Cliente" : "Editar Cliente"}</IonTitle>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Nombre</IonLabel>
                <IonInput onIonChange={e => customer.firstname = String(e.detail.value)} value={customer.firstname}> </IonInput>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Apellido</IonLabel>
                <IonInput onIonChange={e => customer.lastname = String(e.detail.value)} value={customer.lastname}> </IonInput>
              </IonItem>
            </IonCol>
          </IonRow> 

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput onIonChange={e => customer.email = String(e.detail.value)} value={customer.email}> </IonInput>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Dirección</IonLabel>
                <IonInput onIonChange={e => customer.address = String(e.detail.value)} value={customer.address}> </IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Teléfono</IonLabel>
                <IonInput onIonChange={e => customer.phone = String(e.detail.value)} value={customer.phone}> </IonInput>
              </IonItem>
            </IonCol>
          </IonRow>    

          <IonItem>
            <IonButton onClick={save} color="success" fill="solid" slot="end" size="default">
              <IonIcon icon={checkmark} />
              Guardar
            </IonButton>
          </IonItem>

        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CustomerEdit;