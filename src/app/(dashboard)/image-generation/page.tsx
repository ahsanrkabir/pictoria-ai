import Configurations from '@/components/image-generation/Configurations'
import GeneratedImages from '@/components/image-generation/GeneratedImages'

const ImageGeneration = () => {
  return (
    <section className='container mx-auto grid gap-4 grid-cols-3 overflow-hidden'>
      <Configurations />
      <div className='col-span-2 p-4 rounded-xl flex items-center justify-center'>
        <GeneratedImages />
      </div>
    </section>
  )
}

export default ImageGeneration