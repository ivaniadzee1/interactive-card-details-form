import React, { useState } from 'react';
import Thank from './Thank';

function Inputs({ changeName, changeCardNumber, changeCvc, changeMm, changeYy }: any) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="flex items-center flex-col lg:ml-[750px] lg:mt-[-325px]">
            {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex items-start flex-col mt-[50px]">
                    <div className="flex items-start flex-col mt-[50px]">
                        <h1 className="text-base text-[#21092F] pl-[30px] pt-[20px]">Cardholder Name</h1>
                        <input maxLength={15} className="w-[327px] h-[45px] ml-[27px] mt-[10px] border-2 border-gray-200 rounded-xl pl-[20px] text-lg" onChange={changeName} type="text" placeholder="e.g. Jane Appleseed" />

                        <h1 className="text-base text-[#21092F] pl-[30px] pt-[20px]">Card Number</h1>
                        <input maxLength={16} className="w-[327px] h-[45px] ml-[27px] mt-[10px] border-2 border-gray-200 rounded-xl pl-[20px] text-lg" onChange={changeCardNumber} type="text" placeholder="e.g. 1234 5678 9123" />

                        <div className="flex flex-row">
                            <p className="text-base text-[#21092F] pl-[30px] pt-[20px]">Exp. Date (MM/DD)</p>
                            <p className="text-base text-[#21092F] pl-[30px] pt-[20px]">CVC</p>
                        </div>
                        <div className="flex flex-row">
                            <input maxLength={2} className="w-[72px] h-[45px] border-2 border-gray-200 rounded-xl pl-[15px] text-lg ml-[26px] mt-[10px]" onChange={changeMm} type="text" placeholder="MM" />
                            <input maxLength={2} className="w-[72px] h-[45px] border-2 border-gray-200 rounded-xl pl-[15px] text-lg ml-[2px] mt-[10px]" onChange={changeYy} type="text" placeholder="YY" />
                            <input maxLength={3} className="w-[164px] h-[44px] border-2 border-gray-200 rounded-xl pl-[15px] text-lg ml-[20px] mt-[10px]" onChange={changeCvc} type="text" placeholder="e.g. 123" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-[30px]">
                        <button type="submit" className="w-[327px] h-[53px] rounded-lg bg-[#21092F] text-white text-lg ml-[15px]">Confirm</button>
                    </div>
                </form>
            ) : (
                <div className="flex justify-center items-center mt-[100px]">
                        <Thank/>
                </div>
            )}
        </div>
    );
}

export default Inputs;
