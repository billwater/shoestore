import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {

    const [image1, setImage1] = useState(false)
    const [image2, setImage2] = useState(false)
    const [image3, setImage3] = useState(false)
    const [image4, setImage4] = useState(false)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('Men')
    const [subCategory, setSubCategory] = useState('Summer')
    const [bestseller, setBestseller] = useState(false)
    const [sizes, setSizes] = useState([])

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {

            const formData = new FormData()
            formData.append("name", name)
            formData.append("description", description)
            formData.append("price", price)
            formData.append("category", category)
            formData.append("subCategory", subCategory)
            formData.append("bestseller", bestseller)
            formData.append("sizes", JSON.stringify(sizes))

            image1 && formData.append("image1", image1)
            image2 && formData.append("image2", image2)
            image3 && formData.append("image3", image3)
            image4 && formData.append("image4", image4)

            const responce = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } })
            if (responce.data.success) {
                toast.success(responce.data.message)
                setName('')
                setDescription('')
                setImage1(false)
                setImage2(false)
                setImage3(false)
                setImage4(false)
                setPrice('')
            } else {
                toast.error(responce.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)

        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
            <div>
                <p className='mb-2'>Загрузить изображение</p>
                <div className='flex gap-2'>
                    <label htmlFor='image1'>
                        <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
                        <input onChange={(e) => setImage1(e.target.files[0])} type="file" name="" id="image1" hidden />
                    </label>
                    <label htmlFor='image2'>
                        <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
                        <input onChange={(e) => setImage2(e.target.files[0])} type="file" name="" id="image2" hidden />
                    </label>
                    <label htmlFor='image3'>
                        <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
                        <input onChange={(e) => setImage3(e.target.files[0])} type="file" name="" id="image3" hidden />
                    </label>
                    <label htmlFor='image4'>
                        <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
                        <input onChange={(e) => setImage4(e.target.files[0])} type="file" name="" id="image4" hidden />
                    </label>
                </div>
            </div>
            <div className='w-full'>
                <p className='mb-2'>Название товара</p>
                <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Имя' required />
            </div>

            <div className='w-full'>
                <p className='mb-2'>Описание товара</p>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Описание' required />
            </div>

            <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
                <div>
                    <p className='mb-2'>Категория товара</p>
                    <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
                        <option value="Men">Мужская обувь</option>
                        <option value="Women">Женская обувь</option>
                        <option value="Bag">Сумки</option>
                    </select>
                </div>
                <div>
                    <p className='mb-2'>Подкатегория</p>
                    <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2'>
                        <option value="Summer">Летняя</option>
                        <option value="Intersession">Межсезонье</option>
                        <option value="Winter">Зимняя</option>
                    </select>
                </div>

                <div>
                    <p className='mb-2'>Цена товара</p>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type='Number' placeholder='2500' />
                </div>


            </div>
            <div>
                <p className='mb-2'>Размер</p>
                <div className='flex gap-3'>
                    <div onClick={() => setSizes(prev => prev.includes('36') ? prev.filter(item => item !== "36") : [...prev, "36"])}>
                        <p className={`${sizes.includes("36") ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>36</p>
                    </div>
                    <div onClick={() => setSizes(prev => prev.includes('37') ? prev.filter(item => item !== "37") : [...prev, "37"])}>
                        <p className={`${sizes.includes("37") ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>37</p>
                    </div>
                    <div onClick={() => setSizes(prev => prev.includes('38') ? prev.filter(item => item !== "38") : [...prev, "38"])}>
                        <p className={`${sizes.includes("38") ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>38</p>
                    </div>
                    <div onClick={() => setSizes(prev => prev.includes('39') ? prev.filter(item => item !== "39") : [...prev, "39"])}>
                        <p className={`${sizes.includes("39") ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>39</p>
                    </div>
                    <div onClick={() => setSizes(prev => prev.includes('40') ? prev.filter(item => item !== "40") : [...prev, "40"])}>
                        <p className={`${sizes.includes("40") ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>40</p>
                    </div>
                    <div onClick={() => setSizes(prev => prev.includes('41') ? prev.filter(item => item !== "41") : [...prev, "41"])}>
                        <p className={`${sizes.includes("41") ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>41</p>
                    </div>
                    <div onClick={() => setSizes(prev => prev.includes('42') ? prev.filter(item => item !== "42") : [...prev, "42"])}>
                        <p className={`${sizes.includes("42") ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>42</p>
                    </div>
                    <div onClick={() => setSizes(prev => prev.includes('43') ? prev.filter(item => item !== "43") : [...prev, "43"])}>
                        <p className={`${sizes.includes("43") ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>43</p>
                    </div>
                    <div onClick={() => setSizes(prev => prev.includes('44') ? prev.filter(item => item !== "44") : [...prev, "44"])}>
                        <p className={`${sizes.includes("44") ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>44</p>
                    </div>
                    <div onClick={() => setSizes(prev => prev.includes('45') ? prev.filter(item => item !== "45") : [...prev, "45"])}>
                        <p className={`${sizes.includes("45") ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>45</p>
                    </div>
                    <div onClick={() => setSizes(prev => prev.includes('46') ? prev.filter(item => item !== "46") : [...prev, "46"])}>
                        <p className={`${sizes.includes("46") ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>46</p>
                    </div>
                    <div onClick={() => setSizes(prev => prev.includes('47') ? prev.filter(item => item !== "47") : [...prev, "47"])}>
                        <p className={`${sizes.includes("47") ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>47</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-2 mt-2'>
                <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type='checkbox' id='bestseller' />
                <label className='cursor-pointer' htmlFor='bestseller'>Добавить в популярные товары</label>
            </div>

            <button className='w-28 py-3 mt-4 bg-black text-white' type='submit'>ДОБАВИТЬ</button>
        </form>
    )
}

export default Add
