
export const TiposBasicos = () => {
  const nombre: string = 'Fernando';
  const edad:number = 35;
  const estaActivo:boolean  = true;
  
  const poderes:string[] = [];//'Velocidad','Volar','Respirar en el agua'



  return (
     <>
         <h3>Tipos basicos</h3>
         {nombre}, {edad}, {(estaActivo)? 'activo': 'no activo'}
         <br />
         {poderes.join(', ')};
     </>

    )
}

