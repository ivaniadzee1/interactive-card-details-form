



function Cards({ name, cardNumber, cvc, mm, yy }: any) {

  
  const formattedCardNumber = cardNumber.replace(/(.{4})/g, '$1 ');

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-full z-0 h-[240px] bg-[#21092F;] flex-col flex justify-center items-center lg:w-[483px] lg:h-full lg:absolute lg:left-0 lg:top-0">
        <div className="w-[286px] z10 h-[157px] ml-[50px]  mt-[-35px]  rounded-lg bg-[linear-gradient(168.73deg,_#FFFFFF_5%,_#D2D3D9_91.69%)] lg:w-[447px] lg:h-[245px] lg:mt-[220px] lg:ml-[350px]">
          <div className="w-[286px] h-[35px] bg-[#2F2F2F;]  mt-[30px] lg:w-[447px]"></div>
          <div className="w-[230px] h-[30px] bg-[#ADB5BE] ml-[30px] mt-[15px]  rounded-lg lg:w-[338px] lg:h-[38px]  lg:ml-[60px] lg:mt-[20px]">
            <p className="ml-[195px] text-white text-sm pt-[5px] font-boldd lg:pl-[90px] lg:text-lg">{cvc}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-start flex-col w-[286px] h-[157px] ml-[-40px] mt-[-106px]   z-10 rounded-lg  bg-[linear-gradient(163.95deg,#6348FE_4.74%,#610595_88.83%)] lg:w-[447px] lg:h-[245px] lg:mt-[80px] lg:ml-[-850px]">
        <img className="mt-[-40px] ml-[10px] lg:ml-[30px]" src="/assets/card.svg " alt="" />
        <div>
          <p className="text-white  text-xl ml-[15px] mt-[20px] lg:ml-[30px] lg:text-2xl ">{formattedCardNumber}</p>
        </div>
        <div className="flex justify-between w-[245px] h-[12px] ">
          <div>
            <p className="ml-[15px] mt-[25px] text-lg text-white lg:ml-[30px] lg:text-lg">{name}</p>
          </div>
          <div>
            <p className="mt-[27px] text-base text-white  lg:text-lg ">{mm}/{yy}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

