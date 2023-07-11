import Image from 'next/image';
import {BsFillCreditCard2FrontFill} from 'react-icons/bs';

const DefaultButton = ({ name, type, disabled, classname, clickhandler }: 
    {
      name: string, 
      type: any, 
      disabled: boolean, 
      classname: string, 
      clickhandler: any
    }
  ) => {
  return (
      <button
        name={name}
        type={type}
        disabled={disabled}
        className={`inline-flex w-fit items-center rounded-md bg-[#2D3648] ${classname}
                  text-center text-[16px] font-bold text-white 
                  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-cyan-400 
                  disabled:bg-gray-500 `}
        onClick = {clickhandler}
      >   
        {name}
      </button>
  );
}

export const WhiteButton = ({ image, name, type, disabled, classname, clickhandler }: 
  {
    name: string, 
    image: string,
    type: any, 
    disabled: boolean, 
    classname: string, 
    clickhandler: any
  }
) => {
return (
    <button
      name={name}
      type={type}
      disabled={disabled}
      className={`inline-flex w-fit items-center rounded-xl bg-white ${classname}
                text-center text-[12px] text-black border border-1
                hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 
                disabled:bg-gray-500`}
      onClick = {clickhandler}
    > 
      <Image 
        alt='mark'
        src={image}
        className = "mx-2"
        width={25}
        height={25}
      />
      {name}
    </button>
);
}

export const HeaderButton = ({name, icon, selected, clickhandler}:
  {
    name: string, icon: any, selected: boolean, clickhandler: any,
  }) => {
  return (
    <button className="flex flex-col h-full pb-1" onClick={clickhandler}>
      <div>
        <div className={`flex flex-row ${selected ? 'text-[#2D3648]':'text-[#717D96]'} pb-2 gap-1 hover:text-cyan-600`}>
          <div className="flex items-center justify-center ">
            {icon}
          </div>
          <span className="font-bold text-[16px]">
            {name}
          </span>
        </div>
        <div>
          <div className={`min-h-[2px] bg-black w-full ${selected ? '' : 'invisible'} `}></div>
        </div>
      </div>
    </button>
  )
}

export const CreditButton = ({ name, type, disabled, classname, clickhandler }: 
  {
    name: string, 
    type: any, 
    disabled: boolean, 
    classname: string, 
    clickhandler: any
  }
) => {
return (
    <button
      name={name}
      type={type}
      disabled={disabled}
      className={`inline-flex w-fit items-center rounded-md bg-[#1676FE] ${classname}
                text-center text-[20px] text-white 
                hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-cyan-400 
                disabled:bg-gray-500 `}
      onClick = {clickhandler}
    >   
      <BsFillCreditCard2FrontFill className='mr-4'/> {`   `}
      {name}
    </button>
);
}

export default DefaultButton;