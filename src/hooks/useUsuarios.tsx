import { useState, useRef, useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { reqResListado, Usuario } from '../../interfaces/reqRes';

export const useUsuarios = () => {
 
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  

  const paginaRef = useRef(1);

useEffect(() => {
 //llamado API
  cargarUsuarios();
 
}, []);


const cargarUsuarios = async() => {

    const resp = await reqResApi.get<reqResListado>('/users',{
      params:{
        page:paginaRef.current
            }
     
    }); 
    
    if(resp.data.data.length > 0){
        
        setUsuarios(resp.data.data);
       
    }else
{
  paginaRef.current --
    alert('No hay mas registros');
  }
}
const paginaSiguiente = () => {
 
  cargarUsuarios();
  paginaRef.current ++;
}

const paginaAnterior = () => {

  if(paginaRef.current  > 1 ){
   
    paginaRef.current --; 
    cargarUsuarios();

  }
    
}

  
 



return {
  usuarios,
  paginaAnterior,
  paginaSiguiente
   }
  }

