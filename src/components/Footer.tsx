import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="bg-[#1A202C]">
      <div className="flex flex-col justify-center w-full h-[230px]">
        <div className="mx-[5%] pb-4">
          <Image 
            alt={'footer logo'}
            src={`${router.basePath}/assets/images/passpay-logo-3d.webp`} 
            height={90}
            width={90} 
            className = "rounded-xl"
          />  
        </div>
        <div className="flex flex-row mx-[5%] pb-4 w-full">
          <div className="flex space-x-2 w-full text-sm text-white dark:text-gray-100 text-[14px] justify-between flex-wrap gap-4 pr-[200px]">
            <div>{`Copyright ${new Date().getFullYear()} PassPay Wallet.`} </div>
            <div className="flex flex-row text-[#A0ABC0] gap-4">
              <Link href="/">Privacy Policy</Link>  
              <Link href="/">Terms & Conditions</Link>  
              <Link href="/">Cookie Policy</Link>  
              <Link href="/">Contract</Link>  
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
