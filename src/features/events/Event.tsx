import {Box, Card, Stack, styled, Typography} from "@mui/material";
import {palette} from "../../theme/ColorPalette";

const Container = styled(Card)({

})
const Content = styled(Box)({
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "24px"
})
const Footer = styled(Box)({
    backgroundColor:palette.greyPalette.greyCloud,
    borderRadius: '0 0 24px 24px',
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
})
const Wrapper = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap:"24px"
})
const TagsContainer=styled(Box)({
    display:"flex",
    flexWrap:"wrap",
    gap:"6px"
})
const TagContainer=styled(Box)({
    borderRadius:"32px",
    backgroundColor:palette.background.default,
    padding:"8px",
    border:`1px ${palette.greyPalette.greyLight} solid`
})
type Props = {
    index: number
}
export default function Event({index}: Props) {
    return (
        <Container sx={{borderTopColor: palette.randomColors[index]}}>
            <Content>
                <Typography variant={"header"}>{"SAMPLE EVENT TITLE"}</Typography>
                <Typography
                    variant={"juEventsLight"}>{"SAMPLE EVENT DESCRIPTION SAMPLE EVENT DESCRIPTION SAMPLE EVENT DESCRIPTION SAMPLE EVENT DESCRIPTION SAMPLE EVENT DESCRIPTION"}</Typography>
                <Wrapper>
                    <Typography variant={"juEventsXLight"}>{"Duration : 2 Hours"}</Typography>
                    <Typography variant={"juEventsXLight"}>{"Capacity : 24 person"}</Typography>
                    <Typography variant={"juEventsXLight"}>{"Date : 10/12/2002"}</Typography>
                    <Typography variant={"juEventsXLight"}>{"Location : IT"}</Typography>
                </Wrapper>
            </Content>
            <Footer>
                <Typography variant={"juEvents"}>{"Tags"}</Typography>
                <TagsContainer>
                    <TagContainer>
                        <Typography variant={"juEventsXLight"} fontSize={"14px"} lineHeight={"14px"}>{"Tag"}</Typography>
                    </TagContainer>
                    <TagContainer>
                        <Typography variant={"juEventsXLight"} fontSize={"14px"} lineHeight={"14px"}>{"TagTag"}</Typography>
                    </TagContainer>
                    <TagContainer>
                        <Typography variant={"juEventsXLight"} fontSize={"14px"} lineHeight={"14px"}>{"TagTagTag"}</Typography>
                    </TagContainer>
                    <TagContainer>
                        <Typography variant={"juEventsXLight"} fontSize={"14px"} lineHeight={"14px"}>{"TagTagTagTag"}</Typography>
                    </TagContainer>
                </TagsContainer>
            </Footer>
        </Container>
    )
}