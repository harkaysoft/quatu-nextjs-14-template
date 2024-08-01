'use client'

import { useQuery } from '@apollo/client'
import { AllProductsByCompanyOnlyVisible } from '@lib/graphql/query'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import Loading from '@main/loading'
import { Link } from '@nextui-org/link'
import { Divider } from '@nextui-org/divider'
export default function Productos() {
  const { loading, error, data, refetch } = useQuery(
    AllProductsByCompanyOnlyVisible,
    {
      variables: { companyId: Number(process.env.NEXT_PUBLIC_COMPANYID) }
    }
  )

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <p className='text-light-onSurface dark:text-dark-onSurface'>
          Error {error.message}
        </p>
      ) : (
        <section className='container max-w-full px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {data?.allProductsByCompanyOnlyVisible.map((product) => (
              <Card
                key={product.id}
                as={Link}
                href={`/producto/${product.id}`}
                className='hover:opacity-100 hover:border-light-primary hover:dark:border-dark-primary border-2'
              >
                <CardBody className='flex items-center p-0'>
                  {product.image && product.image.length > 0 ? (
                    <Image
                      src={`/api/image?width=400&height=300&name=${encodeURIComponent(
                        product.name
                      )}&url=${encodeURIComponent(
                        product.image[0]?.link || ''
                      )}`}
                      fallbackSrc='/loadingImage.webp'
                      alt='Imagen del producto'
                      className='w-full h-auto object-cover'
                    />
                  ) : (
                    <Image
                      as={NextImage}
                      width={400}
                      height={300}
                      alt='No existe Imagen'
                      className='w-full h-auto object-cover bg-opacity-50'
                      src='/noImage.webp'
                    />
                  )}
                </CardBody>
                <CardHeader>{product.name}</CardHeader>
                <CardFooter className='flex flex-col justify-between items-start'>
                  <b>PRECIOS</b>
                  {product.price
                    ?.filter((price) => price?.visible && price?.unitPrice >= 0)
                    .map((price, index) => (
                      <div key={index} className='w-full'>
                        {price?.unitPrice != 0 && (
                          <p>
                            Precio al por menor: ({price?.currency?.name}){' '}
                            {price?.currency?.abbreviation}
                            {price?.unitPrice}
                          </p>
                        )}
                        {price?.bulkPrice != null && price?.bulkPrice > 0 && (
                          <p>
                            Precio al por mayor: {price?.currency?.abbreviation}{' '}
                            {price?.bulkPrice} por {price?.bulkQuantity || 0}{' '}
                            unidades
                          </p>
                        )}
                        {index < (product.price?.length ?? 0) - 1 && (
                          <Divider className='my-2' />
                        )}
                      </div>
                    ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
