import React from 'react'
import {BsCalendarMinus, BsCaretRight} from 'react-icons/bs'
import Image from 'next/image'
import moment from 'moment'


export default function PostDetail({post}) {


  const getList = (obj, index) =>{

    if(obj.type){
      switch(obj.type){
        case 'list-item':
          return <li className='mt-2' key={index}>{obj.children.map((child, childIndex) => getList(child, childIndex))}</li>
        case 'list-item-child':
          return <div key={index}>{obj.children.map((child, childIndex) => getList(child, childIndex))}</div>
        case 'bulleted-list':
          return <ul key={index} className="ml-4 list-disc text-lg text-gray-800">{obj.children.map((child, i) => getList(child, i))}</ul>   
        case 'bulleted-list':
            return <ul key={index} className="mb-4 list-decimal text-lg  text-gray-800">{objArr.children.map((child, i) => getList(child, i))}</ul>  
      }
    }
    if(obj.text)
      return <p key={index}> {obj.text}</p>
    if(obj.href)
      return <a key={index} href={obj.href} target="_blank" rel="noreferrer"> {obj.href}</a>

    return <p key={index}></p>
  }

  const getType = (obj, i) => {
    let textClass = []
    if(obj){
      if(obj.bold){
        textClass.push('font-bold')
      }

      if(obj.italic){
        textClass.push('italic')
      }

      if(obj.underline){
        textClass.push('underline underline-offset-4')
      }

      if(obj.code){
        textClass.push('code codeLine')
      }
    }

    switch(obj.type){
      case 'link':
        return(<a className='link' key={i} href={obj.href}>{obj.children.map(({text}, i) => <span key={i}>{text}</span>)}</a>)
    }

    return <span className={textClass.join(" ")} key={i}>{obj.text}</span>
  }

  const getObj = (index, objArr) => {

    switch (objArr.type) {
      case 'heading-one':
        return <h1 key={index} className="text-5xl font-semibold mb-6">{objArr.children.map((obj, i) => getType(obj, i))}</h1>;
      case 'heading-two':
        return <h1 key={index} className="text-4xl font-semibold mb-6">{objArr.children.map((obj, i) => getType(obj, i))}</h1>;
      case 'heading-three':
        return <h1 key={index} className="text-3xl font-semibold mb-5">{objArr.children.map((obj, i) => getType(obj, i))}</h1>;
      case 'heading-four':
        return <h1 key={index} className="text-2xl font-semibold mb-5">{objArr.children.map((obj, i) => getType(obj, i))}</h1>;
      case 'heading-five':
        return <h1 key={index} className="text-xl font-semibold mb-4">{objArr.children.map((obj, i) => getType(obj, i))}</h1>;
      case 'heading-six':
        return <h1 key={index} className="text-lg font-semibold mb-4">{objArr.children.map((obj, i) => getType(obj, i))}</h1>;
      
      case 'paragraph':
        return <p key={index} className="mb-8">{objArr.children.map((obj, i) => getType(obj, i))}</p>;
      
      case 'code-block':
        return <div key={index} className="mb-8 codeBlock code whitespace-pre-wrap">{objArr.children.map((obj, i) => getType(obj, i)) }  </div>;
        
      case 'block-quote':
        return <div key={index} className="mb-6 border-l-4 pl-2 border-gray-800"><p>{objArr.children.map((obj, i) => getType(obj, i))}</p></div>

      case 'bulleted-list':
        return <ul key={index} className="mb-6 list-disc text-lg text-gray-800">{objArr.children.map((child, i) => getList(child, i))}</ul>

      case 'numbered-list':
        return <ul key={index} className="mb-6 list-decimal text-lg  text-gray-800">{objArr.children.map((child, i) => getList(child, i))}</ul>

        

      case 'image':
        return (
          <div className=' w-fit h-fit mb-8'>
            <Image
              key={index}
              alt={objArr.title}
              height={objArr.height}
              width={objArr.width}
              src={objArr.src}
            />
          </div>
        );
      default:
        return <div key={index} className=' text-red-500'>unregorized content</div>;
    }
  }

  return (
    <div className='w-full md:px-3 py-5'>
      <div className='text-center mb-9'> 
        <h2 className=' font-semibold mb-6'>{post.title}</h2>

        <div className="tags flex justify-center">
          {post.tags.map((tag) => 
            <div className='px-3 py-1 bg-orange-100 rounded-full' key={tag.slug}>
              {tag.name}
            </div>
          )}
        </div>
      </div>


      <div className="relative overflow-hidden w-full aspect-video rounded-lg">
        <Image src={post.coverPhoto.url} 
                layout='fill'
                objectFit='cover'
                >
        </Image>
      </div>
      <div className='md:px-4 px-2 mt-14'>

        {post.content.raw.children.map((objArr, index) => 
        getObj(index, objArr)
        )}
        
        <h6 className='mt-12'>{post.category.name}。更新於 {moment(post.date).format('YYYY-MM-DD')}</h6>
      </div>
    </div>
  )
}

