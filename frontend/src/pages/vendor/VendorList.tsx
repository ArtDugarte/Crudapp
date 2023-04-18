import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeVendor, saveVendor, searchVendors } from './VendorApi';
import Vendor from './Vendor';

const VendorList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    
    let result = await searchVendors();
    setVendors(result);
  }

  const remove = async (id: string) =>{

    await removeVendor(id);
    search();
  }

  const editVendor = (id:string) =>{
    history.push('/page/vendor/'+ id);
  }

  const addVendor = () =>{
    history.push('/page/vendor/new');
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

          <IonTitle>Gestión de Proveedores</IonTitle>

          <IonItem>
            <IonButton onClick={addVendor} color="primary" fill="solid" slot="end" size="default">
              <IonIcon icon={add} />
              Agregar Proveedor
            </IonButton>
          </IonItem>

          <IonGrid className="table">

            <IonRow>
              <IonCol>Nombre</IonCol>
              <IonCol>Email</IonCol>
              <IonCol>Teléfono</IonCol>
              <IonCol>Web</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>
            
            {vendors.map((vendor: Vendor) =>
              <IonRow>
                <IonCol>{vendor.name}</IonCol>
                <IonCol>{vendor.email}</IonCol>
                <IonCol>{vendor.phone}</IonCol>
                <IonCol>{vendor.web}</IonCol>

                <IonCol>
                  <IonButton color="primary" fill="clear" onClick={() => editVendor(String(vendor.id))}>
                    <IonIcon icon={pencil} slot="icon-only"/>
                  </IonButton>

                  <IonButton color="danger" fill="clear" onClick={() => remove(String(vendor.id))}>
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

export default VendorList;