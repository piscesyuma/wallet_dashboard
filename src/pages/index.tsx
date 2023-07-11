import { NextPage } from "next";
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import DefaultButton from "@/components/ButtonComponents";
import { PlanCard } from "@/components/Cards";
import { useRouter } from "next/router";
import Image from "next/image";
const Index: NextPage = () => {
    const router = useRouter();
    return (
        <Main
            meta={
               <Meta title={'PassPay'} description={'common:description'} />
          }
        >
            <div className="flex flex-col items-center justify-center w-full">
                <section id="_section_1" className="w-full bg-[#EDF0F7]">
                    <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-98px)] gap-10">
                        <h1 className="font-bold text-[56px]">Your Gate of Web3</h1>
                        <div className="flex flex-col font-bold text-[24px] justify-center items-center">
                            <span>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
                            <span>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
                            <span>xxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
                        </div>
                        <DefaultButton name="Download Passpay Wallet" type={"button"} disabled={false} classname = "min-h-[56px] px-6 mr-2" clickhandler={null}/>
                    </div>
                </section>
                <section id="_section_2" className="bg-white w-full">
                    <div className="flex flex-col items-center justify-center w-full min-h-[100vh] py-12 gap-8">
                        <div className="flex items-end justify-center pt-16">
                            <h1 className="font-bold text-[56px] mb-5">Subscription Plan</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center max-w-[780px] py-8">
                            <h2 className="text-[24px] font-bold pb-4">
                                Join subscription plan you can
                            </h2>
                            <h3 className="text-[22px] font-bold break-all text-center">
                                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            </h3>
                        </div>
                        <div className="flex items-center justify-center w-full pb-8">
                            <div className="flex items-center justify-center gap-6 flex-wrap">
                                <PlanCard />
                                <PlanCard />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="_section_3" className="bg-white w-full">
                    <div className="flex flex-col items-center justify-center w-full min-h-[80vh] py-12 gap-8">
                        <div className="flex items-center justify-center gap-6 flex-wrap">
                            <div className="flex flex-col w-[640px] px-6">
                                <div className="flex items-end justify-start">
                                    <h1 className="font-bold text-[56px] mb-16">Description wallet1</h1>
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                    <span className="font-bold text-[21px]">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
                                    <span className="font-bold text-[21px]">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
                                    <span className="font-bold text-[21px]">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
                                    <span className="font-bold text-[21px]">xxxxxxxxxxxxxxxxxxxxxxxxx</span>
                                    <span className="font-bold text-[21px]">xxxxxxxxxxxxxxxxxxxxxx</span>
                                    <span className="font-bold text-[21px]">xxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
                                </div>
                            </div>
                            <Image 
                                alt={'card logo'}
                                src={`${router.basePath}/assets/images/passpay-back.webp`} 
                                height={500}
                                width={600} 
                                className = "rounded-xl"
                            />
                        </div>
                    </div>
                </section>
                <section id="_section_4" className="bg-white w-full">
                    <div className="flex flex-col items-center justify-center w-full min-h-[80vh] py-12 gap-8">
                        <div className="flex items-center justify-center gap-6 flex-wrap">
                            <Image 
                                alt={'card logo'}
                                src={`${router.basePath}/assets/images/armsnake2.webp`} 
                                height={500}
                                width={600} 
                                className = "rounded-xl"
                            />
                            <div className="flex flex-col w-[640px] px-6">
                                <div className="flex items-end justify-start">
                                    <h1 className="font-bold text-[56px] mb-16">Description wallet2</h1>
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                    <span className="font-bold text-[21px]">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
                                    <span className="font-bold text-[21px]">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
                                    <span className="font-bold text-[21px]">xxxxxxxxxxxxxxxxxxxxxxxx</span>
                                    <span className="font-bold text-[21px]">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
                                    <span className="font-bold text-[21px]">xxxxxxxxxxxxxxxxxxxxxx</span>
                                    <span className="font-bold text-[21px]">xxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
                                    <span className="font-bold text-[21px]">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Main>
    )
}

export default Index;