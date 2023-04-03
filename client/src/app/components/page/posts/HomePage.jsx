import React from "react";
import BlockWrapper from "../../ui/BlockWrapper";

const HomePage = () => {
    return (
        <>
            <div className="h-screen  relative mt-[-80px] ">
                <div className=" h-full w-full bg-[url('./img/bgi3.jpg')] bg-cover brightness-50 -z-10  absolute"></div>

                <BlockWrapper>
                    <div className="w-full  z-20  mt-40   text-stone-50">
                        <h2 className="text-6xl">Перед тобой</h2>
                        <h1 className="text-5xl pt-2 font-['Caveat'] italic">
                            блог-портфолио
                        </h1>
                        <h2 className="text-6xl">Лукиных Никиты</h2>
                        <h1 className="text-2xl pt-2">
                            - Frontend-разработчика
                        </h1>
                    </div>
                </BlockWrapper>
            </div>
            <div className="my-10 w-full">
                <BlockWrapper>
                    <div>
                        <p className="text-6xl pt-2 font-['Caveat'] italic">
                            Созданный мною сайт,
                        </p>
                        <p className="text-6xl pt-2 font-['Caveat'] italic">
                            где ты сможешь подробнее узнать:
                        </p>
                    </div>
                </BlockWrapper>
                <div className="mt-9">
                    <BlockWrapper>
                        <div className=" bg-[#605A5D] px-5 py-5 w-1/2 min-w-[300px]  rounded-3xl cursor-pointer shadow-[0px_0px_3px_rgba(3,102,214,0.3)]">
                            <h1 className="text-5xl text-stone-50">
                                О создателе
                            </h1>
                            <p></p>
                        </div>
                    </BlockWrapper>
                </div>
                <div className="mt-9">
                    <BlockWrapper>
                        <button className=" bg-[#605A5D] px-5 py-5 w-1/2 min-w-[300px]  rounded-3xl cursor-pointer shadow-[0px_0px_3px_rgba(3,102,214,0.3)]">
                            <h1 className="text-5xl text-stone-50">
                                О других моих работах
                            </h1>
                            <p></p>
                        </button>
                    </BlockWrapper>
                </div>
            </div>
            <div className="my-40 w-full">
                <BlockWrapper>
                    <h1>Мои работы</h1>
                </BlockWrapper>
            </div>
        </>
    );
};

export default HomePage;
