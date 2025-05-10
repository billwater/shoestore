import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt='' />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        В нашем магазине обуви и сумок качество — не компромисс, а основа философии. Мы выбираем материалы, которые прошли проверку временем: мягкая натуральная кожа, устойчивая к истиранию замша, износостойкий текстиль и фурнитура, выдерживающая ежедневные нагрузки. Каждый шов, заклёпка и подошва продуманы так, чтобы аксессуар служил годами, сохраняя форму и эстетику.
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-2'>МАГАЗИН</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Главная</li>
                        <li>О нас</li>
                        <li>Доставка</li>
                        <li>Private policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb=5'>СВЯЗАТЬСЯ</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+7-999-999-9990</li>
                        <li>консультант@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div>
                <hr/>
                <p className='py-5 text-sm text-center'>Copyright 2025@ shoestore.com - Все права защищены.</p>
            </div>

        </div>
    )
}

export default Footer
