import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
    return (
        <section className="font-montserrat">
            <div className="mx-8 my-4">
                <h1 className="font-bold text-2xl text-center">What We Offer</h1>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <div className="flex items-center gap-2">
                                <div  className="w-3 h-3 rounded-full bg-myPurple">
                                </div>
                                <h2>
                                Monthly Meetups
                                </h2>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            Our cornerstone event, held on the last Friday of every month, featuring keynote speakers, panel discussions, and ample networking opportunities.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                        <div className="flex items-center gap-2">
                                <div  className="w-3 h-3 rounded-full bg-myPurple">
                                </div>
                                <h2>
                                Diverse Network
                                </h2>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                        Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <div className="flex items-center gap-2">
                                <div  className="w-3 h-3 rounded-full bg-myPurple">
                                </div>
                                <h2>
                                Knowledge Sharing
                                </h2>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                        Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            <div className="flex items-center gap-2">
                                <div  className="w-3 h-3 rounded-full bg-myPurple">
                                </div>
                                <h2>
                                Collaboration   Opportunities
                                </h2>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                        Find potential co-founders, mentors, or partners for your next big venture.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            <div className="flex items-center gap-2">
                                <div  className="w-3 h-3 rounded-full bg-myPurple">
                                </div>
                                <h2>
                                Community Support
                                </h2>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                        Be part of a supportive ecosystem that celebrates successes and provides guidance through challenges.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>


            </div>
        </section>
    )
}

export default Faq
