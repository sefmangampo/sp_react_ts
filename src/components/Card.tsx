import { StyledCard } from "./styles"

import { Content } from "../types"

type ContentItem = {
    item: Content
}

export default function Card({ item: { id, title, body, image } }: ContentItem) {
    return (
        // <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
        <StyledCard>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>

            <div>
                <img src={` ./images/${image}`} alt="" />
            </div>

        </StyledCard>
    )
}
