# Plantilla para tienda utilizando quatu como Backend, potenciado por Next.js 14 por [Harkaysoft](https://harkaysoft.vercel.app)

![image](https://github.com/user-attachments/assets/2f640999-79e9-4416-ab94-910dc6ac42d5)

Revisa los features de la nueva versión [🚀Ver nueva versión 1](https://github.com/harkaysoft/quatu-nextjs-14-template/releases/tag/v1)

---

# quaTu

![image](https://github.com/user-attachments/assets/bafdd0bc-6648-4fb0-b4af-26a4d13f7c6e)

Plataforma backend de e-commerce enfocado en MYPES, ofreciendo la creación de infraestructura robusta, flexible y escalable.

Consigue tu cuenta demo en [Quatu.xyz/registro](https://www.quatu.xyz/registro).

<strong>Deja de pagar por comisiones, paga por el peso de tus imágenes.</strong>

---

Este es un repositorio donde se ubica el código fuente, este es realizado con [Next.js](https://nextjs.org/)

## Para comenzar

1. Clona el repositorio
  
   ```
   git clone https://github.com/harkaysoft/quatu-nextjs-14-template.git
   ```

2. Instala las dependecias

   ```
   npm install
   ```
   
4. Configura las variables de entorno (enviroment variables)

   Copia el archivo `.env.example` y genera `.env` en el directorio raíz del proyecto:
  
   ```
   cp .env.example .env
   ```
5. Escribir el id de tu tienda en la variable correspondiente

   ![image](https://github.com/user-attachments/assets/8c9766db-65b0-4bd7-a671-2f2a56d6d4ad)

   Este ID se consigue en https://quatu.xyz/home

    ```bash
    NEXT_PUBLIC_COMPANYID=  # Este ID se consigue en https://quatu.xyz/home
    ```
     
6. ejecuta el servidor

    ```bash
    npm run dev
    ```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

Se puede modificar la página modificando `app/src/(public)/page.tsx`. La página se modificará automáticamente tras ediciones.

## Creación de tus propias querys

Ingresa a la api de quatu en [API Quatu](https://api.quatu.xyz)

1. Agrega tus querys
   Puedes personalizarlo a traves de [API Quatu](https://api.quatu.xyz), a través de la interfaz gráfica de Apollo Client

   ![image](https://github.com/user-attachments/assets/2c7b6310-e22d-4956-83ab-ed55aeb36b0c)

   Luego en `src/lib/graphql/query`, creas

   ```
   export const TuQuery = gql(`

   ## COPIAS EL QUERY SEGÚN TUS NECESIDADES
   
   `)
   ```

   En `TuQuery` escoge un nombre a tu elección, esta se utilizará en los próximos pasos.

   Quedando algo así: (Query de ejemplo)
   
   ```
   export const TuQuery = gql(`  // Procura que el nombre de `TuQuery` sea similar al nombre de la query
    query AllProductsByCompanyOnlyVisible($companyId: Int!) {   // <-- nombre de la query
      allProductsByCompanyOnlyVisible(companyId: $companyId) { // Te recomendamos que el subnombre de la query solo cambie la primera letra a mininúscula para evitar confuciones.
        name
        SKU
        UPC
        id
        image {
          id
          link
        }
      }
    `)
    ```

3. Genera el schema
   Antes de crear querys personalizadas, debes generar el schema, sino typescript arrojará errores de tipos.
   ```
   npm run codegen
   ```
4. Obten la data

   En un `page.tsx` o un componente creas tu estructura de react de la siguiente manera:
   
   ```bash
   'use client'
   
      ...

   import { useQuery } from '@apollo/client'
   import { TuQuery } from '@lib/graphql/query'
   
   export default function Productos() {
   
   const { loading, error, data, refetch } = useQuery(
      TuQuery,
      {
        variables: {
          companyId: Number(process.env.NEXT_PUBLIC_COMPANYID)
        }
      }
    )

   return (

   // Si es un elemento no iterable

     {data?.tuQuery?.name} // Este elemento estará tipado, por lo que te recomendamos seguir las sugerencias de typescript
   
     ...
   
   // Si es un elemento iterable

     {data?.tuQuery?.price?.map((price, index) => ( // Este elemento estará tipado, por lo que te recomendamos seguir las sugerencias de typescript

       {price?.unitPrice}
   
     ))}
   )
   
   }
   ```

Para mas información, le recomendamos la documentación de [Apollo Client](https://www.apollographql.com/docs/react/)

##### 🚀Estamos actualizando constantemente esta sección

## Personalización

Este template es de uso libre para los usuarios y externos que quieran conocer la plataforma backend e-commerce de quaTu.

Este proyecto tiene detrás estilos mediante de [Tailwind](https://tailwindcss.com/docs/installation) y la libreria de  estilos [NextUI](https://nextui.org/docs/guide/introduction)

Además, el proyecto utiliza una paleta de colores generados a través de [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/).

1. Selecciona el color primario
2. Escoge tus fuentes (No se utilizará en este proyecto)
3. Exportar theme
4. Descargar mediante .JSON
5. Extraer los objetos `light` y `dark`
6. Se utiliza tailwind para modo oscuro mediante `dark:`
7. Para establecer colores `text-light-primary dark:text-dark-primary`
8. Para mas información, revisar [Dark mode](https://tailwindcss.com/docs/dark-mode) y [Customing Colors](https://tailwindcss.com/docs/customizing-colors) de Tailwind

Finalmente, se recomienda utilizar [NextUI](https://nextui.org/docs/guide/introduction), ya que la plantilla esta optimizada para esta.


## Envía a producción a través de Vercel

La manera mas fácil de enviar a producción este template es a través de [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), estos son los creadores de next.js.

Revisa la documentación de como llevar a producción [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Aprende más

Para aprender más sobre el proyecto, hecha un vistaso a los siguientes recursos:

- [quaTu](https://www.quatu.xyz)
- [GraphQL](https://graphql.org/learn/)
- [Docs quaTu](https://docs.quatu.xyz)
- [Codegen Graphql](https://the-guild.dev/graphql/codegen/docs/getting-started)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Next.js Documentation](https://nextjs.org/docs) - aprende sobre recursos de Next.js y APIs.
- [Tailwind](https://tailwindcss.com/docs/installation)
- [NextUI](https://nextui.org/docs/guide/introduction)
- [Vercel OG](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image)
- [Framer motion](https://www.framer.com/motion/)

#### Contacto

El encargado de realizar modificaciones a este `README.md` es [@jhangmez](https://github.com/jhangmez), contactar con él para más información.

---

<div style="display: flex; align-items: center; height: fit-content;">
  <img src="https://avatars.githubusercontent.com/u/60937214?v=4" width="40" style="margin-right: 10px;"/>
  <span>Made with ❤️ by Jhan Gómez P.</span>
</div>

---

<div align="center">
  <strong>Harkay</strong>
  <strong> S O F T</strong>
</div>
