'use client'

import { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'
import { Input } from '@nextui-org/input'
import { Divider } from '@nextui-org/divider'
import { LinkedinHarkaysoft, GithubJhan, jhangmez, LinkedinJhan } from '@routes'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    {
      key: 'ayuda',
      label: 'Ayuda & Feedback',
      href: jhangmez,
      isExternal: true,
      section: 'Contacto'
    },
    {
      key: 'HarkaySoft',
      label: 'Contactar con HarkaySoft',
      href: LinkedinHarkaysoft,
      isExternal: true,
      section: 'Contacto'
    },
    {
      key: 'jhangmez github',
      label: 'Github',
      href: GithubJhan,
      isExternal: true,
      section: 'Sobre el autor'
    },
    {
      key: 'jhangmez linkedin',
      label: 'Linkedin',
      href: LinkedinJhan,
      isExternal: true,
      section: 'Sobre el autor'
    },
    {
      key: 'jhangmez portafolio',
      label: 'Portafolio',
      href: jhangmez,
      isExternal: true,
      section: 'Sobre el autor'
    }
  ]
  return (
    <Navbar
      classNames={{
        base: 'bg-light-surface/50 dark:bg-dark-surface/50 text-light-onSurface dark:text-dark-onSurface',
        content: '',
        wrapper: 'container mx-auto px-[20px]  max-w-auto'
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand
          as={Link}
          href='/'
          onClick={() => setIsMenuOpen(false)}
          className='text-light-onSurface dark:text-dark-onSurface'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='28'
            height='28'
            className='text-light-onSurface dark:text-dark-onSurface'
            viewBox='0 0 24 24'
          >
            <g fill='none' fillRule='evenodd'>
              <path d='M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
              <path
                fill='currentColor'
                d='M17.5 3a2 2 0 0 1 1.6.8l2.688 3.584a.995.995 0 0 1 .204.616H22v1a3.99 3.99 0 0 1-1 2.646V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.354A3.985 3.985 0 0 1 2 9V8h.008a.995.995 0 0 1 .204-.616L4.9 3.8A2 2 0 0 1 6.5 3zM15 11.646A3.99 3.99 0 0 1 12 13a3.99 3.99 0 0 1-3-1.354a3.99 3.99 0 0 1-3.757 1.282L5 12.874V19h14v-6.126l-.243.054A3.99 3.99 0 0 1 15 11.645ZM20 9h-4a2 2 0 0 0 3.995.15zm-6 0h-4a2 2 0 0 0 3.995.15zM8 9H4a2 2 0 0 0 3.995.15zm9.5-4h-11L5 7h14z'
              />
            </g>
          </svg>
          <span className='text-light-primary dark:text-dark-primary text-2xl font-bold leading-[44px]'>
            Tienda
          </span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {/* <NavbarItem>
          <Link
            href='/categorias'
            aria-current='page'
            className='text-light-primary dark:text-dark-primary'
          >
            Categorias
          </Link>
        </NavbarItem> */}
        {/* <NavbarItem>
          <Link
            href='#'
            className='text-light-onSurface dark:text-dark-onSurface'
          >
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem>
          <Input
            classNames={{
              base: 'max-w-full sm:max-w-[10rem] h-10',
              mainWrapper: 'h-full',
              input: 'text-small',
              inputWrapper:
                'h-full font-normal text-light-primary bg-light-primaryContainer dark:bg-dark-primaryContainer hover:dark:bg-light-primaryContainer dark:active:bg-dark-secondaryContainer'
            }}
            placeholder='Buscar...'
            size='sm'
            startContent={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                className='text-light-onSurface dark:text-dark-onSurface'
              >
                <path
                  fill='currentColor'
                  d='m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14'
                />
              </svg>
            }
            type='search'
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className='bg-light-surface/50 dark:bg-dark-surface/50'>
        {menuItems.map((item, index) => {
          // Verifica si el índice es 0 o si el section del elemento actual es diferente al del elemento anterior
          if (index === 0 || item.section !== menuItems[index - 1].section) {
            return (
              <>
                <div className='flex items-center'>
                  <p className='text-light-onSurface/80 dark:text-dark-onSurface/80 text-sm whitespace-nowrap pr-2'>
                    {item.section}
                  </p>
                  <Divider className='shrink border-solid border-light-outline dark:border-dark-outline' />
                </div>
                <Link
                  key={item.key}
                  className='w-full font-medium text-light-onSurface dark:text-dark-onSurface'
                  href={item.href}
                  isExternal={item.isExternal}
                  showAnchorIcon={item.isExternal}
                  onClick={() => setIsMenuOpen(false)}
                  size='lg'
                >
                  {item.label}
                </Link>
              </>
            )
          }
          // Si el section es el mismo que el anterior, solo se renderiza el Link
          return (
            <Link
              className='w-full font-medium text-light-onSurface dark:text-dark-onSurface'
              href={item.href}
              key={item.key}
              isExternal={item.isExternal}
              showAnchorIcon={item.isExternal}
              onClick={() => setIsMenuOpen(false)}
              size='lg'
            >
              {item.label}
            </Link>
          )
        })}
      </NavbarMenu>
    </Navbar>
  )
}
