import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "80px",
  width: "260px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image src="/images/logos/logo.PNG" alt="logo" height={80} width={260} priority />
    </LinkStyled>
  );
};

export default Logo;
