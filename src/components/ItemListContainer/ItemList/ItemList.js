import React, {useEffect, useState} from 'react';
import Item from './Item';

const ItemList = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        const prom= new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve([
                    {id:1, nombre: "Procesador Ryzen 7", precio:200000, imagenUrl:"https://cdn.pixabay.com/photo/2013/10/03/23/19/bike-190483_960_720.jpg"},
                    {id:2, nombre:" Memoria Ram Corsair ", precio:15000, imagenUrl:"https://http2.mlstatic.com/D_NQ_NP_652236-MLA43334548863_092020-O.jpg"},
                    {id:3, nombre:" Disco Duro SSD Samsung", precio: 50000, imagenUrl:"https://www.artisticacordoba.com.ar/5315-home_default/mini-compresor-para-aerografos-con-manguera-y-regulador.jpg"},
                    {id:4, nombre:" Laptop ASUS i3 8GB RAM", precio: 500000, imagenUrl:"https://http2.mlstatic.com/D_NQ_NP_703446-MLA31136086024_062019-W.jpg"}
                ])

            }, 2000)
        })
        prom.then((resultado)=>{
            setProductos(resultado);
        })
    }, [])


    console.log('productos');
    
    return ( 
        <div>
        {productos.map(p => 
            <div className= "items">
                <Item
                    id={p.id}
                    nombre={p.nombre}
                    precio={p.precio}
                />

            </div>
        )}
        </div>
    )
        }

export default ItemList;