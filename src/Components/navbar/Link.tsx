import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;//home, about, contact us
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {

    const lower = page.toLowerCase().replace(/ /g, " ") as SelectedPage;//turning each text to lower case
    return(
        <AnchorLink href={`#${lower}`}
            onClick={()=> setSelectedPage(lower)}
            className={`${selectedPage === lower ? "text-white" : "text-white" }
            transition duration-500`}
        >
            {page}
        </AnchorLink>
    )   
}
export default Link;