

const products = [
    {
        id: '1',
        name:'head extreme tour',
        price: 75000,
        category:'raquetas',
        img:'https://cdn-magento2-media.head.com/wysiwyg/Extreme50-1.jpg',
        stock: 12,
        description:'descripcion de raqueta de tenis extreme tour'
    },
    {
        id:'2',
        name:'babolat team',
        price: 9800,
        category:'indumentaria',
        img:'https://www.digitalsport.com.ar/files/products/5ddd2dac9b3d5-496142-1200x1200.jpg',
        stock: 6,
        description:'descripcion de remera babolat team'
    },
    {
        id:'3',
        name:'kirschbaum max power',
        price: 30000,
        category:'accesorios',
        img:'https://cdn.shopify.com/s/files/1/0663/9763/4785/products/D_684657-MLA48700105834_122021-B.jpg?v=1670425565&width=1445',
        stock: 5,
        description:'descripcion de kirschbaum max power'
    }
]

export const getProducts = () =>{
return new Promise((resolve) =>{
setTimeout(()=>{
  
 


    resolve(products)
},500)
 })
  }


  export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
        
    })
  }


export const getProductsByCategory = () => {

    return new Promise((resolve, reject) => {
      // Simulación de una llamada asíncrona para obtener productos por categoría
      setTimeout(() => {
        // Supongamos que aquí realizas la lógica para obtener los productos por categoría
        const products = [
          { id: 1, name: 'Producto 1', category: 'Categoría A' },
          { id: 2, name: 'Producto 2', category: 'Categoría B' },
          { id: 3, name: 'Producto 3', category: 'Categoría A' },
        ];
  
        resolve(products);
      }, 1000); // Simulamos un retardo de 1 segundo (1000 ms)
    });
  };



  
  

  



 









  

