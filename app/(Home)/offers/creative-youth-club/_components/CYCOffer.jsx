'use client'

import { Button } from '@/components/ui/button'
import { Dot, MessageCircle } from 'lucide-react'
import { Link } from 'nextjs13-progress'
import React, { useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import VideoPlayer from './VideoPlayer'

const benfitsText = [
  {
    id: 0,
    text: 'إضافة طابع احترافي للبرامج القادمة مما يزيد من قيمتها.'
  },
  {
    id: 1,
    text: 'سهولة ترتيب وإدارة محتوى البرامج التدريبية من خلال لوحة التحكم.'
  },
  {
    id: 2,
    text: 'تسهيل متابعة الدروس لأصحاب الباقات المنخفضة من المتدربين.'
  },
  {
    id: 3,
    text: 'حملة الإعلان عن إطلاق المنصة = خطوة تسويقية قوية وأنتم بهذا أعلم.'
  }
]




const CYCOffer = () => {

  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => {
    setActiveIndex(prevIndex => prevIndex === 4 ? 0 : prevIndex + 1)
  }

  const containerClass = "w-full max-w-4xl mx-auto shadow-2xl flex-col py-12 px-4 md:px-24 transition-all duration-300"

  const stepOne = (
    <div className={`${containerClass} ${activeIndex == 0 ? "flex-center" : "hidden"}`}>
      <div>
        <span className="text-3xl text-secondary font-light mb-2 block">اقتراح وعرض</span>
        <h1 className='text-4xl md:text-5xl !leading-[120%]'>إلى فريق إدارة Creative Youth Club</h1>
        <hr className='w-40 my-6 mx-auto' />
      </div>
      <p className='text-2xl !leading-[165%] text-slate-200'>
      السيد محمد بابكر، وأعضاء CYC الكرام، قبل أي شيء أرغب في التعبير عن إعجابي وانبهاري الشديد بسعيكم وعملكم طوال الفترة السابقة بالرغم ما فيها من تحديات وصعاب، إني كلما رأيت أحدًا يأخذ عمله بجد وقوة وثبات امتلأ قلبي له حبًا واحترامًا وتعظيمًا، وأرغب في تقديم هذا العرض إليكم رغبة في المساهمة في رحلة بناء CYC وتطوير إمكانياتها
        <br /><br />
        ما سأعرضه عليكم بكل تأكيد هو جزء مما تخططون له وتسعون إليه، وربما فكرتم فيه كثيرًا لكن كيفية التنفيذ قد تصعب المضي قدمًا فيه، لذلك أقدم إليكم اقتراحًا وعرضًا يجعل هذا الهدف ممكنًا وفي متناول اليد
      </p>
      <Button onClick={() => next()} size="xl" className="flex items-center gap-2 text-2xl mx-auto mt-8">
        <span>فما هو العرض ؟</span>
      </Button>
    </div>
  )
  const stepTwo = (
    <div className={`${containerClass} ${activeIndex == 1 ? "flex-center" : "hidden"}`}>
      <div>
        <h1 className='text-4xl md:text-5xl !leading-[120%] mb-4'>
          إطلاق نسخة تجريبية من منصة CYC التعليمية <span className="text-secondary font-light mb-2 block">بتكلفة 0 جنيه ابتداءً</span>
        </h1>
        <hr className='w-40 mb-8 mx-auto' />
      </div>
      <p className='text-2xl'>
      وهذا ممكن نعم!، لكن قبلها دعني أذكرك بما ستقدمه لكم هذه الخطوة: 
      </p>
      <ul className='mt-4'>
        {benfitsText.map(item => (
          <li key={item.id} className="text-slate-200 text-right text-2xl !leading-[165%] max-md:mt-4 flex items-center">
            <Dot size={45} className='text-secondary' />
            <span>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
      <Button onClick={() => next()} size="xl" className="flex items-center gap-2 text-2xl mx-auto mt-8">
        <span>كيف ذلك ؟</span>
      </Button>
      <Button variant="outline" onClick={() => setActiveIndex(prevIndex => prevIndex - 1)} className="flex items-center gap-2 text-xl mx-auto mt-8">
        <span>السابق</span>
      </Button>
    </div>
  )
  const stepThree = (
    <div className={`${containerClass} ${activeIndex == 2 ? "flex-center" : "hidden"}`}>
      <div>
        <span className="text-3xl text-secondary font-light mb-2 block">الاقتراح</span>
        <hr className='w-40 my-6 mx-auto' />
      </div>
      <p className='text-2xl !leading-[165%] text-slate-200'>
      باستخدام React مع Next.js و TailwindCss لبناء المنصة بشكل جذاب وأداء سلس ومناسب للباقات الضعيفة، ثم ربطها مع Hygraph نظام إدارة محتوى يُغني عن احتياجنا للـbackend، واستخدام Clerk لنظام تسجيل الدخول، وأخيرًا نستخدم منصة fasd لتخزين الفيديوهات عليها، وكل هذه التقنيات مجانية تمامًا وآمنة وقمت بتجربتها واختبارها
        <br /><br />
        ثم نقوم برفع الموقع على Vercel وهو يقدم استضافة مجانية تصل إلى 100GB، ودومين مشابه لدومين موقعي الشخصي، ويمكننا ربطه مع دومين خاص فتكون هذه التكلفة الوحيدة أو نبدأ العمل بدومين vercel.app. للنسخة الأولى، وتكون المنصة جاهزة للعمل في وقت وجيز وبدون تكاليف مادية وبسرعة مستقرة وجيدة.
      </p>
      <Button onClick={() => next()} size="xl" className="flex items-center gap-2 text-2xl mx-auto mt-8">
        <span>هممم...</span>
      </Button>
      <Button variant="outline" onClick={() => setActiveIndex(prevIndex => prevIndex - 1)} className="flex items-center gap-2 text-xl mx-auto mt-8">
        <span>السابق</span>
      </Button>
    </div>
  )
  const stepFour = (
    <div className={`${containerClass} ${activeIndex == 3 ? "flex-center" : "hidden"}`}>
      <div>
        <span className="text-3xl text-secondary font-light mb-2 block">نموذج سابق</span>
        <h1 className='text-4xl md:text-5xl !leading-[120%]'>
          هذه المنصة قمت ببنائها بنفس التقنيات المقترحة
        </h1>
        <hr className='w-40 my-6 mx-auto' />
      </div>
      <VideoPlayer />
      <p className='text-2xl !leading-[165%] text-slate-200 mt-12'>
        كما يمكنكم الاطلاع على المزيد من أعمالي السابقة بزيارة <Link href='/' target='_blank' className='text-primary'>
          الصفحة الرئيسية
        </Link>
      </p>
      <Button onClick={() => next()} size="xl" className="flex items-center gap-2 text-2xl mx-auto mt-8">
        <span>راائع!</span>
      </Button>
      <Button variant="outline" onClick={() => setActiveIndex(prevIndex => prevIndex - 1)} className="flex items-center gap-2 text-xl mx-auto mt-8">
        <span>السابق</span>
      </Button>
    </div>
  )
  const stepFive = (
    <div className={`${containerClass} ${activeIndex == 4 ? "flex-center" : "hidden"}`}>
      <div>
        <span className="text-3xl text-secondary font-light mb-2 block">العرض</span>
        <h1 className='text-4xl md:text-5xl !leading-[120%]'>
          عرض خاص لكم لثقتي بنجاحكم
        </h1>
        <hr className='w-40 my-6 mx-auto' />
      </div>
      <p className='text-2xl !leading-[165%] text-slate-200'>
        كما قلت سابقًأ تكلفة الموقع هي صفر ابتداءً، وجميع الاختيارات المقترحة تملك باقات مجانية كافية تتحمل عدد كبير من المستخدمين ومناسبة لبداية إطلاق المنصة، والاستعداد لتطويرها مستقبلًأ عند مضاعفة أعداد المستخدمين
        <br /> <br />
        فيتبقى فقط أتعاب أخيكم، وهنا العرض = بموافقتكم عليه سأقوم بتنفيذ المنصة بالكامل وإطلاقها، مقابل التزام فريقكم بالتخطيط لسداد التكلفة (80 دولار فقط) من أرباح المنصة في حال نجاحها بإذن الله في فترة زمنية مفتوحة بحسب ما يناسب خطتكم
      </p>
      <Link href="https://wa.link/ezj0tv" target='_blank' className='w-full flex-center mt-6'>
        <Button size="xl" className="flex items-center gap-2 text-2xl">
          <span>أرح واتس...!</span>
          <MessageCircle size={18} />
        </Button>
      </Link>
      <Button variant="outline" onClick={() => setActiveIndex(prevIndex => prevIndex - 1)} className="flex items-center gap-2 text-xl mx-auto mt-8">
        <span>السابق</span>
      </Button>
    </div>
  )

  return (
    <>
      {stepOne}
      {stepTwo}
      {stepThree}
      {stepFour}
      {stepFive}
    </>
  )
}

export default CYCOffer