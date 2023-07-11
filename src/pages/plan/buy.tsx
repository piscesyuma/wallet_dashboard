import { Meta } from "@/layouts/Meta";
import { SinglePage } from "@/templates/Single";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { WhiteButton } from '../../components/ButtonComponents';
import Link from "next/link";

const LogIn:NextPage = () => {
    const router = useRouter();
    const loginButtonHandler = (type: number /** 0: google, 1: apple */) => {
        router.push("/?loggedin=true")
    }
    return (
        <SinglePage
            title="Buy extra points"
            description="Additional points outside the plan can be purchased to pay for the passfee"
            meta={
               <Meta title={'PassPay'} description={'common:description'} />
          }
        >
            <div className="flex flex-col w-full max-w-[780px] px-[5%] justify-center mx-[5%]">
                <div className="font-bold text-[46px] pb-[40px]">
                    {"How much extra point to buy?"}
                </div>
                <div className="flex flex-row w-full justify-between gap-4">
                    <WhiteButton 
                        type={"button"}
                        name = "Login with Google"
                        image={`${router.basePath}/assets/images/google_icon.png`}
                        clickhandler={loginButtonHandler}
                        disabled = {false}
                        classname = "h-[60px] w-full max-w-[300px] justify-center"
                    />
                    <WhiteButton 
                        type={"button"}
                        name = "Login with Apple Store"
                        image={`${router.basePath}/assets/images/apple_icon.png`}
                        clickhandler={loginButtonHandler}
                        disabled = {false}
                        classname = "h-[60px] w-full max-w-[300px] justify-center"
                    />
                </div>
                <div className="flex flex-row text-[18px] pt-[20px]">
                    <div className="pr-4">{"Don't have an account?"}</div>
                    <Link href={"/auth/signup"} className="text-blue-700">Register Now</Link>
                </div>
            </div>
        </SinglePage>
    );
}

export default LogIn;