import { useRouter } from "next/router";
import Image from "next/image";
import DefaultButton from "./ButtonComponents";

export const PlanCard = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col w-[640px] min-w-[320px] h-[580px] rounded-xl border-2">
            <div className="h-220 w-full">
                <Image 
                    alt={'card logo'}
                    src={`${router.basePath}/assets/images/Zi-Yuan-29-100.jpg`} 
                    height={220}
                    width={640} 
                    className = "rounded-xl"
                    objectFit="scale"
                />
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full px-[5%] gap-6">
                <h3 className="text-[16px] font-bold">Standard Plan</h3>
                <div className="text-[16px] font-bold w-full items-start px-2">
                    <li>xxxxxxxxxxxxxxxxxxxxxxx</li>
                    <li>xxxxxxxxxxxxxxxxxxxx</li>
                    <li>xxxxxxxxxxxxxxxxxxxxxxxxx</li>
                    <li>xxxxxxxxxxxxxxxxxxxxxx</li>
                    <li>xxxxxxxxxxxxxxxxxxxxxxx</li>
                    <li>xxxxxxxxxxxxxxxxxx</li>
                </div>
                <DefaultButton name="Subscribe" type={"button"} disabled={false} clickhandler={null} classname="px-5 min-h-[48px]" />
            </div>
        </div>
    );
}