import Vendor from "./Vendor";

/*BUSCAR USUARIOS*/
export async function searchVendors(){

  let url = process.env.REACT_APP_API + "suppliers";  

  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  return await response.json();
}

export async function removeVendor(id: string){
  
  let url = process.env.REACT_APP_API + "suppliers/" + id;  

  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export async function saveVendor(vendor: Vendor){

  let url = process.env.REACT_APP_API + "suppliers";  

  await fetch(url, {
    method: "POST",
    body: JSON.stringify(vendor),
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export async function searchVendorsById(id:string){

  let url = process.env.REACT_APP_API + "suppliers/" + id;  

  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  return await response.json();
}
