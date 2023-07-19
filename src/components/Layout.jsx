import { styled } from "@mui/material" // Import the styled function from @mui/material

const LayoutWrapper = styled("div")({
  background: "#f9f9f9",
  width: "100%",
})

const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  )
}

export default Layout
