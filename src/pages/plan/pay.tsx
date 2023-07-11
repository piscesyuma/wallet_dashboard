import { Meta } from "@/layouts/Meta";
import { SinglePage } from "@/templates/Single";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { CreditButton, WhiteButton } from '../../components/ButtonComponents';
import Link from "next/link";

const LogIn:NextPage = () => {
    const router = useRouter();
    const loginButtonHandler = (type: number /** 0: google, 1: apple */) => {
        router.push("/?loggedin=true")
    }
    return (
        <SinglePage
            title="Your payment order"
            description="Additional points outside the plan can be purchased to pay for the passfee"
            meta={
               <Meta title={'PassPay'} description={'common:description'} />
          }
        >
            <div className="flex flex-col w-full max-w-[820px] px-[5%] justify-center mx-[5%] h-full pb-8">
                <div className="font-bold text-[46px] pb-[20px]">
                    {"Choose how to pay"}
                </div>
                <div>
                    <CreditButton 
                        name = "Credit Card"
                        type = "button"
                        disabled = {false}
                        clickhandler={()=>{}}
                        classname={"px-12 h-[54px]"}
                    />
                </div>
                <div className="flex flex-col w-full h-full justify-between">
                    
                    <div className="flex flex-col w-full gap-2">
                        <div className="font-bold text-[23px] pt-[10px]">
                            {"Set up your Credit Card"}
                        </div>
                        <input
                            name="cardnumber"
                            className="block h-[54px] w-full border 
                                border-gray-500 bg-white px-[10px] text-[16px] text-[#1d67cd] 
                                shadow-sm placeholder:text-slate-400 hover:drop-shadow-lg 
                                focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
                            placeholder={"Card Number"}
                            required={true}
                        />
                        <div className="flex flex-row w-full gap-2">
                            <input
                                name="expiredate"
                                className="block h-[54px] w-full border 
                                    border-gray-500 bg-white px-[10px] text-[16px] text-[#1d67cd] 
                                    shadow-sm placeholder:text-slate-400 hover:drop-shadow-lg 
                                    focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                placeholder={"Expiration date"}
                                required={true}
                            />
                            <input
                                name="cvv"
                                className="block h-[54px] w-full border 
                                    border-gray-500 bg-white px-[10px] text-[16px] text-[#1d67cd] 
                                    shadow-sm placeholder:text-slate-400 hover:drop-shadow-lg 
                                    focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                placeholder={"CVV"}
                                required={true}
                            />
                        </div>
                        <input
                            name="firstname"
                            className="block h-[54px] w-full border 
                                border-gray-500 bg-white px-[10px] text-[16px] text-[#1d67cd] 
                                shadow-sm placeholder:text-slate-400 hover:drop-shadow-lg 
                                focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
                            placeholder={"First name"}
                            required={true}
                        />
                        <input
                            name="lastname"
                            className="block h-[54px] w-full border 
                                border-gray-500 bg-white px-[10px] text-[16px] text-[#1d67cd] 
                                shadow-sm placeholder:text-slate-400 hover:drop-shadow-lg 
                                focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
                            placeholder={"Last name"}
                            required={true}
                        />
                        <input
                            name="zipcode"
                            className="block h-[54px] w-full border 
                                border-gray-500 bg-white px-[10px] text-[16px] text-[#1d67cd] 
                                shadow-sm placeholder:text-slate-400 hover:drop-shadow-lg 
                                focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
                            placeholder={"ZIP Code"}
                            required={true}
                        />
                        <div className="flex flex-row w-full justify-between items-center bg-gray-200 px-4 py-2 mb-4">
                            <div className="whitespace-pre-line font-bold text-[20px] text-gray-500">
                                {`￥ 300.00/month \n Plan: Premium`}
                            </div>
                            <Link href={"/plan"} className="text-[20px] text-blue-700">
                                Change Plan
                            </Link>
                        </div>
                        <button
                            type={"button"}
                            className={`inline-flex w-full items-center rounded-2xl bg-[#1676FE] h-[54px]
                                    text-center text-[18px] font-bold text-white 
                                    hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-400 
                                    disabled:bg-gray-500 justify-center`}
                            onClick={()=>{router.push("/auth/login")}}
                        >   
                            {"Submit Order"}
                        </button>
                    </div>
                </div>
            </div>
        </SinglePage>
    );
}

export default LogIn;