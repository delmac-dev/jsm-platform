import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
  

interface CardProps{
    id: string,
    title: string;
    image: string;
    views: number
}

const ResourceCard = ({id, title, image, views} : CardProps) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
        <Link href={`/resource/${id}`}>
            <CardHeader className="flex-center flex-col gap-2.5 !p-0">
                <div className="w-full h-fit">
                    <Image
                        src={image}
                        className="h-full rounded-md oject-cover"
                        width={384}
                        height={440}
                        alt="title"
                    />
                </div>
                <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">
                    {title}
                </CardTitle>
            </CardHeader>
        </Link>
        <CardContent className="flex-between mt-4 p-0">
            <div className="flex-center body-medium gap-1.5 text-white">
                <Image
                    src={"/downloads.svg"}
                    alt="download"
                    width={20}
                    height={20}
                    className=""
                />
                {views}
            </div>
            <Link href={`/resource/${id}`} className="flex-center text-gradient_purple-blue body-semiold gap-1.5">
                Download Now
                <Image
                    src={"/arrow-blue.svg"}
                    alt="arrow"
                    width={13}
                    height={10}
                />
            </Link>
        </CardContent>
    </Card>

  )
}

export default ResourceCard