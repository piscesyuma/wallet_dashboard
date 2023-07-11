import { useRouter } from "next/router";
import Image from "next/image";
import DefaultButton, { HeaderButton } from './ButtonComponents';
import { HiHome } from "react-icons/hi";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { RiExchangeFill } from "react-icons/ri";
import { TbDiamondFilled } from "react-icons/tb";
import { useState, useEffect } from 'react';

const Header = ({loggedin}: {loggedin: boolean}) => {
    const router = useRouter();
    const query_logined = router.query["loggedin"];
    const [logined, setLogined] = useState(query_logined?query_logined: false);
    return (
        <div className="flex flex-row items-center h-[98px] bg-white">
            <div className="flex pb-[10px] min-w-[200px] w-full max-w-[270px] justify-end">
                <Image
                    src={`${router.basePath}/assets/images/logo.webp`} width={170} height={40}
                    alt={'logo'}
                />
            </div> 
            {logined ? (
                <div className="flex justify-end w-full items-end">
                    <div className="flex flex-row w-full min-w-[500px] justify-end gap-[3%]">
                        <HeaderButton name="Home" icon={<HiHome />} selected = {router.asPath==="/" || router.asPath==="/?loggedin=true"} clickhandler={()=>{router.push('/')}}/>
                        <HeaderButton name="Purchase Plan" icon={<MdPlaylistAddCheckCircle />} selected = {router.asPath==='/plan'} clickhandler={()=>{router.push('/plan')}}/>
                        <HeaderButton name="Exchange" icon={<RiExchangeFill />} selected = {false} clickhandler={()=>{}}/>
                        <HeaderButton name="My Membership" icon={<TbDiamondFilled />} selected = {false} clickhandler={()=>{}}/>
                        <div></div>
                    </div>
                    <div className="flex flex-row mr-[10%]">
                        <DefaultButton name="LOGOUT" type={"button"} disabled={false} classname = "min-h-[48px] px-5 mr-2" clickhandler={()=>{setLogined(false)}}/>
                        <DefaultButton name="EN" type={"button"} disabled={false} classname = "min-h-[48px] px-3" clickhandler={null} />
                    </div>
                </div>
            ) : (
                <div className="flex justify-end pr-[100px] w-full items-end">
                    <div className="flex flex-row w-full justify-end gap-[3%]">
                        <HeaderButton name="Home" icon={<HiHome />} selected = {router.asPath==="/"} clickhandler={()=>{}}/>
                        <HeaderButton name="Purchase Plan" icon={<MdPlaylistAddCheckCircle />} selected = {router.asPath==='/plan'} clickhandler={()=>{router.push('/plan')}}/>
                        <div></div>
                    </div>
                    <DefaultButton name="LOGIN" type={"button"} disabled={false} classname = "min-h-[48px] px-5 mr-2" clickhandler={()=>{setLogined(false); router.push("/auth/login")}}/>
                    <DefaultButton name="EN" type={"button"} disabled={false} classname = "min-h-[48px] px-3 " clickhandler={null}/>
                </div>
            )}
            
        </div>
    );
  };
  
  export default Header;
  