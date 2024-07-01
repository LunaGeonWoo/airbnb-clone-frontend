import { Box, Grid, Skeleton, SkeletonText } from "@chakra-ui/react";
import Room from "../components/Room";

export default function Home() {
  return (
    <Grid
      mt={10}
      px={{
        base: 10,
        lg: "5%",
      }}
      columnGap={4}
      rowGap={8}
      templateColumns={{
        sm: "1fr",
        md: "1fr 1fr",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
    >
      <Box>
        <Skeleton rounded={"2xl"} minH="200" aspectRatio={"1.05/1"} mb={6} />
        <SkeletonText w={"70%"} noOfLines={3} mb={[7]} />
      </Box>
      <Room></Room>
    </Grid>
  );
}
