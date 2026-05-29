import React from 'react'

const Lenderbanner = () => {
    return (
        <>
            <section className="py-24 text-center px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12 md:p-16">
                        <h2 className="text-3xl md:text-5xl font-headline font-extrabold mb-10 tracking-tight text-primary">
                            Become an approved lender <span style={{ color: '#052C24' }}>in minutes</span>
                        </h2>
                        <a href="./lenderjourney" className="text-white px-10 py-4 font-headline font-bold text-sm uppercase tracking-wider rounded-md hover:brightness-110 transition-all flex justify-center items-center gap-2 mx-auto max-w-xs bg-primary">
                            Sign up <span className="text-lg">→</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Lenderbanner