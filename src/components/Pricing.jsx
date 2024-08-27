    import React from 'react'
    import PricingPlan from './PricingPlan'

    const Pricing = () => {
    return (
        <div className="container mx-auto py-10 ">
            <div className="grid grid-cols-1 sm:grid-cols-12 py-10">
                <div className="col-span-12 flex justify-between py-5">
                    <h1 className="text-3xl ">Transform your life through education</h1>
                    <button className="text-tertiary border border-tertiary px-3 py-2 rounded-lg">Upgrade</button>
                </div>
                <div className="col-span-12 grid grid-cols-12 gap-20">
                    <div className="col-span-4">
                        <PricingPlan title="Regular" price="$65" button="Get Started" itemList={["1 Day Event", "1 Speaker", "Interaction Sessions", "35 Classes"]} color="tertiary"/>
                    </div>
                    <div className="col-span-4">
                        <PricingPlan title="Medium" price="$65" button="Get Started" itemList={["1 Day Event", "1 Speaker", "Interaction Sessions", "35 Classes"]} color="quaternary"/>
                    </div>
                    <div className="col-span-4">
                        <PricingPlan title="Medium" price="$65" button="Get Started" itemList={["1 Day Event", "1 Speaker", "Interaction Sessions", "35 Classes"]} color="primary"/>
                    </div>
                </div>
            </div>
        </div>
    )
    }

    export default Pricing