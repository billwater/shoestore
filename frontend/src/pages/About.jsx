import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'О'} text2={'НАС'} />
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>
                        Компания Forever родилась из страсти к инновациям и желания совершить революцию в сфере онлайн-покупок. Наш путь начался с простой идеи: создать платформу, на которой покупатели смогут легко находить, изучать и приобретать широкий ассортимент товаров, не выходя из дома.</p>
                    <p>С момента основания мы неустанно работали над созданием разнообразного ассортимента высококачественных товаров на любой вкус и предпочтения. От моды и красоты до электроники и товаров для дома - мы предлагаем обширную коллекцию, собранную от проверенных брендов и поставщиков.</p>
                    <b className='text-gray-800'>Наша миссия</b>
                    <p>Наша миссия
                        Наша миссия в Forever - дать покупателям возможность выбора, удобства и уверенности. Мы стремимся обеспечить бесперебойную работу магазина, которая превосходит все ожидания: от просмотра и заказа до доставки и не только.</p>
                </div>

            </div>
            <div className='text-xl py-4'>
                <Title text1={'ПОЧЕМУ ВАМ'} text2={'СТОИТ ВЫБРАТЬ НАС'} />
            </div>
            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 m-0.2'>
                    <b>Обеспечение качества:</b>
                    <p className='text-gray-600'>Мы тщательно отбираем и проверяем каждый продукт, чтобы убедиться, что он соответствует нашим строгим стандартам качества.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 m-0.2'>
                    <b>Удобства:</b>
                    <p className='text-gray-600'>Благодаря нашему удобному интерфейсу и простому процессу оформления заказа, покупки еще никогда не были такими простыми.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 m-0.2'>
                    <b>Исключительное обслуживание клиентов:</b>
                    <p className='text-gray-600'>Наша команда преданных своему делу профессионалов готова помочь вам во всем, гарантируя, что ваше удовлетворение - наш главный приоритет.</p>
                </div>
            </div>

        </div>
    )
}

export default About