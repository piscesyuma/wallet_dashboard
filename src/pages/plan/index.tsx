import { Meta } from "@/layouts/Meta";
import { SinglePage } from "@/templates/Single";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { WhiteButton } from '../../components/ButtonComponents';
import Link from "next/link";

const RowLine = ({col1, col2, col3}
    :{
        col1: any,
        col2: string,
        col3: string,
    }) => {
    return (
        <div className="flex flex-row w-full border-t-2 pt-3 pb-1 text-[16px] px-4">
            <div className="w-[50%] whitespace-pre-line ">
                {col1}
            </div>
            <div className="w-[30%] text-center">
                {col2}
            </div>
            <div className="w-[20%] text-center">
                {col3}
            </div>
        </div>
    )
}
const LogIn:NextPage = () => {
    const router = useRouter();
    const loginButtonHandler = (type: number /** 0: google, 1: apple */) => {
        router.push("/?loggedin=true")
    }
    return (
        <SinglePage
            title="Choose your plan"
            description="Trusted by millions , PassPay is asecure wallet making the world of web3 accessible to all"
            meta={
               <Meta title={'PassPay'} description={'common:description'} />
          }
        >
            <div className="flex flex-col w-full max-w-[820px] px-[5%] justify-start mx-[5%] h-full pb-8">
                <div className="font-bold text-[32px] pb-[10px]">
                    {"Choose the plan that’s right for you"}
                </div>
                <div className="flex flex-col w-full h-full justify-center">
                    <div className="flex flex-row w-full pt-3 pb-2 text-[16px] px-4">
                        <div className="w-[50%] font-bold ">
                        </div>
                        <div className="flex w-[30%] items-center justify-center">
                            <div className="flex w-fit h-[50px] bg-yellow-500 text-white text-[18px] px-2 items-center">
                                {'Standard'}
                            </div>
                        </div>
                        <div className="flex w-[20%] items-center justify-center">
                            <div className="flex w-fit h-[50px] bg-blue-600 text-white text-[18px] px-2 items-center">
                                {'Premium'}
                            </div>
                        </div>
                    </div>
                    <RowLine col1="Monthly price" col2="¥ 300.00" col3="¥ 1,200.00"/>
                    <RowLine col1="Get point" col2="100 PT" col3="600 PT"/>
                    <RowLine col1="Supported network" col2="Ethereum" col3="Ethereum"/>
                    <RowLine col1="Validity period of points" col2="6 Months" col3="6 Months"/>
                    <RowLine col1="Additional points recharge" col2="√" col3="√"/>
                    <RowLine col1={`No GasFee for 3 Months ${'\n'}   (Polygon, BSC) (100 times)`} col2="√" col3="√"/>
                    <RowLine col1="Exchange for JPYW" col2="√" col3="√"/>
                    <div className="flex flex-row w-full border-t-2 pt-3 pb-10 text-[16px] px-4">
                        <div className="w-[50%] font-bold ">
                            {'Choose your plan'}
                        </div>
                        <div className="w-[30%] text-center">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" 
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                             />
                        </div>
                        <div className="w-[20%] text-center">
                            <input id="default-radio-2" type="radio" value="" name="default-radio" 
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                        </div>
                    </div>
                    {/* <button
                        type={"button"}
                        className={`inline-flex w-full items-center rounded-2xl bg-[#2D3648] h-[54px]
                                text-center text-[18px] font-bold text-white 
                                hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400 
                                disabled:bg-gray-500 justify-center`}
                        onClick={()=>{router.push("/auth/login")}}
                    >   
                        {"LOGIN"}
                    </button> */}
                    <button
                        type={"button"}
                        className={`inline-flex w-full items-center rounded-2xl bg-[#1676FE] h-[54px]
                                text-center text-[18px] font-bold text-white 
                                hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400 
                                disabled:bg-gray-500 justify-center`}
                        onClick={()=>{router.push("/plan/pay")}}
                    >   
                        {"Next"}
                    </button>
                </div>
                
            </div>
        </SinglePage>
    );
}

export default LogIn;