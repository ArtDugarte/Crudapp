import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeVendor, saveVendor, searchVendors, searchVendorsById } from './VendorApi';
import Vendor from './Vendor';

const VendorEdit: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [vendor, setVendor] = useState<Vendor>({});
  const history = useHistory();

  const routeMatch: any = useRouteMatch("/page/vendor/:id");
  const id = routeMatch?.params?.id;

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {

    if(id === "new"){

      setVendor({});

    }else{
      
      let result = await searchVendorsById(id);
      setVendor(result);
    }
  }

  const save = async() => {
    
    await saveVendor(vendor);
    history.push('/page/vendors');
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

          <IonTitle>{id==="new" ? "Agregar Proveedor" : "Editar Proveedor"}</IonTitle>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Nombre</IonLabel>
                <IonInput onIonChange={e => vendor.name = String(e.detail.value)} value={vendor.name}> </IonInput>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Contacto</IonLabel>
                <IonInput onIonChange={e => vendor.contact = String(e.detail.value)} value={vendor.contact}> </IonInput>
              </IonItem>
            </IonCol>
          </IonRow> 

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput onIonChange={e => vendor.email = String(e.detail.value)} value={vendor.email}> </IonInput>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Dirección</IonLabel>
                <IonInput onIonChange={e => vendor.address = String(e.detail.value)} value={vendor.address}> </IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Teléfono</IonLabel>
                <IonInput onIonChange={e => vendor.phone = String(e.detail.value)} value={vendor.phone}> </IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Web</IonLabel>
                <IonInput onIonChange={e => vendor.web = String(e.detail.value)} value={vendor.web}> </IonInput>
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

export default VendorEdit;