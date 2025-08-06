import AnimatedBlobImage from "../../components/AnimatedBlobImage";
import { useScrollToHash } from "../../components/useScrollToHash";

const blobPaths: [string, string][] = [
    [
        // Blob 1
        "M77.3,-60.1C94.2,-37.8,92.5,-6.3,79.2,18.7C65.9,43.7,41,62.2,14.3,72.2C-12.4,82.3,-40.9,83.9,-60.7,69.2C-80.5,54.5,-91.7,23.6,-84.1,-4.5C-76.4,-32.7,-50,-58,-20.2,-67.3C9.6,-76.5,38.1,-69.7,77.3,-60.1Z",
        "M68.6,-55.7C80.3,-37.4,72.3,-9.5,61.3,19.4C50.3,48.3,36.4,78.2,10.7,85.6C-15,93,-52.5,78,-70.1,49.5C-87.7,21,-85.4,-21,-69.6,-47.7C-53.8,-74.4,-24.4,-85.7,6.3,-87.4C37,-89.1,73.8,-81.3,68.6,-55.7Z"
    ],
    [
        // Blob 2
        "M67.8,-56.1C80.2,-32.2,71.5,1.6,57.7,27.3C43.9,52.9,24.9,70.4,2.2,69.8C-20.4,69.1,-40.7,50.3,-56.8,27.7C-73,5.1,-84.9,-20.1,-77.1,-38.2C-69.4,-56.3,-42,-67.3,-13.6,-66.2C14.8,-65,29.6,-51.9,67.8,-56.1Z",
        "M66.8,-54.6C86.8,-29.5,89.5,17,69.9,42.8C50.2,68.5,8.2,73.6,-28.8,71.6C-65.7,69.7,-97.5,60.7,-99.6,43.6C-101.8,26.4,-74.4,1.1,-54.3,-30.8C-34.3,-62.6,-21.7,-101,5.2,-107.8C32.2,-114.5,64.3,-89.7,66.8,-54.6Z"
    ],
    [
        // Blob 3
        "M53.3,-56.5C70.2,-45.7,80.4,-22.8,75.9,-4.1C71.3,14.5,51.9,29,36,44.3C20.1,59.5,7.6,75.6,-8.5,82.2C-24.6,88.7,-49.3,85.7,-57.5,70.8C-65.6,55.8,-57.2,28.9,-57.6,3.3C-58.1,-22.3,-67.3,-44.7,-59.3,-57.3C-51.2,-69.9,-25.6,-72.8,-1.3,-71.5C23,-70.2,46,-64.1,53.3,-56.5Z",
        "M44.6,-54.7C59.7,-43.7,73.2,-32.2,73.5,-19.6C73.8,-7.1,61,6.6,50.7,19.7C40.4,32.9,32.5,45.6,20.7,56.6C8.9,67.7,-6.8,77.2,-23.7,75.2C-40.6,73.2,-58.6,59.7,-62.7,43.5C-66.8,27.4,-57,8.6,-49.2,-7.8C-41.3,-24.3,-35.3,-38.2,-25.4,-50.8C-15.5,-63.4,-1.8,-74.7,15.2,-78.1C32.3,-81.4,51.6,-77.8,44.6,-54.7Z"
    ],
    [
        // Blob 4
        "M65.6,-54.4C82.7,-33.2,87.8,-4.4,77.2,21.7C66.5,47.9,39.9,71.2,13,71.1C-13.8,71.1,-27.5,47.8,-44.7,23.6C-61.8,-0.7,-82.4,-25.7,-74.1,-40.1C-65.7,-54.5,-28.5,-58.2,5.1,-60.6C38.7,-62.9,77.7,-61.7,65.6,-54.4Z",
        "M66.8,-54.6C86.8,-29.5,89.5,17,69.9,42.8C50.2,68.5,8.2,73.6,-28.8,71.6C-65.7,69.7,-97.5,60.7,-99.6,43.6C-101.8,26.4,-74.4,1.1,-54.3,-30.8C-34.3,-62.6,-21.7,-101,5.2,-107.8C32.2,-114.5,64.3,-89.7,66.8,-54.6Z"
    ]
];

const allServices = [
    {
        title: "Step into a cleaner space",
        id: "cleaning1",
        description:
            "Discover unmatched quality, eco-friendly and advanced house cleaning services. We use the latest and most effective cleaning techniques to ensure your home is spotless and fresh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet ullamcorper, nisi sapien pulvinar sapien, nec cursus velit elit a libero.",
        image:
            "https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=600",
        reverse: false,
    },
    {
        title: "Comfort & Convenience",
        id: "cleaning2",
        description:
            "We only use friendly products and equipment of the highest quality. Your satisfaction is our priority, and all our services come with a satisfaction guarantee. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra felis nec sem tempor, at laoreet enim efficitur.",
        image:
            "https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg?auto=compress&cs=tinysrgb&w=600",
        reverse: true,
    },
    {
        title: "Tailored solutions",
        id: "cleaning3",
        description:
            "We offer a wide range of services of the highest quality. Your satisfaction is our priority, and all our services come with a satisfaction guarantee. Proin egestas euismod massa nec ultricies. Nulla facilisi. In vitae mauris ut nulla facilisis efficitur.",
        image:
            "https://images.pexels.com/photos/4239090/pexels-photo-4239090.jpeg?auto=compress&cs=tinysrgb&w=600",
        reverse: false,
    },
    {
        title: "Spotless Homes",
        id: "cleaning4",
        description:
            "Use this snippet to showcase various cleaning services that highlight our expertise and customer satisfaction. Duplicate the element to create a list that fits your needs. Duis euismod leo et feugiat pharetra. Curabitur cursus porta accumsan.",
        image:
            "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=600",
        reverse: true,
    },
];

const AllServices = () => {
    useScrollToHash();

    return (
        
        

    <section id="AllServices" className="py-24 bg-gradient-to-b from-gray-50 via-teal-300 to-teal-600 relative overflow-hidden min-h-screen">
                <div className="max-w-7xl mx-auto flex flex-col px-4 sm:px-6 lg:px-8 gap-16">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-teal-700 mb-10">
                Our Full Range of Services
            </h1>
            
            {allServices.map((service, index) => (
                <div
                    key={index} id={service.id}
                    className={`grid md:grid-cols-2 md:gap-6 items-center ${service.reverse ? "md:grid-flow-col-dense" : ""
                        }`}
                >
                    {/* Content */}
                    <div className={`md:space-y-6 space-y-2 ${service.reverse ? "md:col-start-2" : ""}`}>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-950 leading-tight mb-2">
                            {service.title}
                        </h2>
                        <p className="text-lg text-gray-950 leading-relaxed">
                            {service.description}
                        </p>
                        {/* Aquí podrías poner más detalles o lista de características */}
                    </div>
                    {/* Animated Blob Image */}
                    <div className={`relative ${service.reverse ? "lg:col-start-1" : ""}`}>
                        <AnimatedBlobImage
                            imageUrl={service.image}
                            alt={service.title}
                            blobPaths={blobPaths[index % blobPaths.length]}
                            duration={3 + index}
                        />
                    </div>
                </div>
            ))}

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-600 to-gray-900" style={{
                clipPath: 'ellipse(65% 100% at 50% 100%)'
            }}></div>

        </div>
    </section>)
};
export default AllServices;
