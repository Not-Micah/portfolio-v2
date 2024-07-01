import { socials } from "../data"

const SocialBar = () => {
  return (
    <div className='fixed bottom-0 left-0 mx-6
    flex flex-col justify-center items-center gap-y-5 max-md:hidden'>
        {socials.map((social) => (
            <a href={social.link} className="text-2xl text-gray-300">
                {social.icon}
            </a>
        ))}
        <div className='h-[200px] w-[2px] bg-gray-300 ron'></div>
    </div>
  )
}

export default SocialBar