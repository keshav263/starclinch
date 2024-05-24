import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { ArrowRight } from "@mui/icons-material";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Masonry from "./components/Masonry";
import Header from "./components/Header";
export default function Home() {
	return (
		<Stack>
			<Header />
			<Stack
				sx={{
					position: "relative",
					maxHeight: "100vh",
					height: "100vh",
					alignItems: "center",
					my: 10,
				}}
			>
				<Box
					sx={{
						background:
							"linear-gradient(to bottom, rgba(149, 77, 136,1), rgba(149, 77, 136,0.2))",
						width: 500,
						height: 500,
						borderRadius: "50%",
						position: "absolute",
						right: "-10%",
						top: "10%",
						boxShadow:
							"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
					}}
				></Box>
				<Box
					sx={{
						background:
							"radial-gradient(circle at center, rgba(61, 35, 33,0.3),rgba(61, 35, 33,1))",
						width: 600,
						height: 600,
						borderRadius: "50%",
						position: "absolute",
						left: "-25%",
						top: "25%",
						boxShadow:
							"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
					}}
				></Box>

				<Stack
					sx={{
						position: "relative",
						height: 800,
						width: "100vw",
						zIndex: 10,
					}}
				>
					<Stack
						sx={{
							background: "linear-gradient(to bottom, transparent 0%, black )",
							height: 800,
							width: "100vw",
							left: "0",
							top: 0,
							position: "absolute",
							zIndex: 100,
						}}
					/>
					<Box
						sx={{
							border: "1px #fff solid",
							borderRadius: "12px",
							backgroundImage: `url(https://source.unsplash.com/random/200x200?sig=${
								Math.random() * 100
							})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							width: 350,
							height: 500,
							position: "absolute",
							left: "50%",
							transform: "translate(-50%,0)",
							zIndex: 10,
						}}
					/>
					<Box
						sx={{
							border: "1px #fff solid",
							borderRadius: "12px",
							backgroundImage: `url(https://source.unsplash.com/random/200x200?sig=${
								Math.random() * 100
							})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							width: 350,
							height: 500,
							position: "absolute",
							zIndex: 1,
							top: "10%",
							left: "50%",
							transform: " rotate(25deg) scale(0.7)",
						}}
					/>
					<Box
						sx={{
							border: "1px #fff solid",
							borderRadius: "12px",
							backgroundImage: `url(https://source.unsplash.com/random/200x200?sig=${
								Math.random() * 100
							})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							width: 350,
							height: 500,
							position: "absolute",
							top: "10%",
							left: "50%",
							transform: "translate(-100%,0) rotate(-25deg) scale(0.7)",
							zIndex: 1,
						}}
					/>
				</Stack>

				<Typography
					variant="h2"
					sx={{ textAlign: "center", width: "50%", my: 4, zIndex: 1000 }}
				>
					Explore our{" "}
					<Typography component="span" variant="inherit" color="#CB2E5C">
						top <br /> performing
					</Typography>{" "}
					categories
				</Typography>
				<Button
					sx={{
						background:
							"linear-gradient(to right, #C88876, #C44D35, #CC2865, #93204D)",
						borderRadius: 8,
						textTransform: "capitalize",
						color: "#fff",
						px: 4,
						py: 2,
						fontSize: "1rem",
						mt: 2,
						zIndex: 1000,
					}}
				>
					View our top performing categories
				</Button>
			</Stack>
			<Masonry />
			<Stack sx={{ mx: "10%", my: 12, gap: 12 }}>
				<Stack
					direction="row"
					sx={{
						alignItems: "flex-end",
						gap: 8,
						justifyContent: "flex-start",
						"&:hover .image": {
							transform: "rotate(-10deg) scale(1.1)",
						},
						"&:hover .text": {
							color: "#fff",
							opacity: 1,
						},
					}}
				>
					<Typography
						className="text"
						variant="h4"
						sx={{
							letterSpacing: 1.1,
							color: "rgba(255, 255, 255, 0.7)",
							opacity: 0.7,
							transition: "color 0.5s ease-in-out, opacity 0.5s ease-in-out",
						}}
					>
						Late Night Maggie <br /> Party for the boost
					</Typography>
					<Box
						className="image"
						sx={{
							backgroundImage: "url(https://picsum.photos/200/300)",
							height: 300,
							width: 300,
							borderRadius: 8,
							transform: "rotate(10deg)",
							transition: "transform 0.5s ease-in-out",
						}}
					></Box>
				</Stack>
				<Stack
					direction="row"
					sx={{
						alignItems: "flex-end",
						gap: 8,
						justifyContent: "flex-end",
						"&:hover .image": {
							transform: "rotate(-10deg) scale(1.1)",
						},
						"&:hover .text": {
							color: "#fff",
							opacity: 1,
						},
					}}
				>
					<Typography
						className="text"
						variant="h4"
						sx={{
							letterSpacing: 1.1,
							color: "rgba(255, 255, 255, 0.7)",
							opacity: 0.7,
							transition: "color 0.5s ease-in-out, opacity 0.5s ease-in-out",
						}}
					>
						Late Night Maggie <br /> Party for the boost
					</Typography>
					<Box
						className="image"
						sx={{
							backgroundImage: "url(https://picsum.photos/200/300)",
							height: 300,
							width: 300,
							borderRadius: 8,
							transform: "rotate(10deg)",
							transition: "transform 0.5s ease-in-out",
						}}
					></Box>
				</Stack>
				<Stack
					direction="row"
					sx={{
						alignItems: "flex-end",
						gap: 8,
						justifyContent: "flex-start",
						"&:hover .image": {
							transform: "rotate(-10deg) scale(1.1)",
						},
						"&:hover .text": {
							color: "#fff",
							opacity: 1,
						},
					}}
				>
					<Typography
						className="text"
						variant="h4"
						sx={{
							letterSpacing: 1.1,
							color: "rgba(255, 255, 255, 0.7)",
							opacity: 0.7,
							transition: "color 0.5s ease-in-out, opacity 0.5s ease-in-out",
						}}
					>
						Late Night Maggie <br /> Party for the boost
					</Typography>
					<Box
						className="image"
						sx={{
							backgroundImage: "url(https://picsum.photos/200/300)",
							height: 300,
							width: 300,
							borderRadius: 8,
							transform: "rotate(10deg)",
							transition: "transform 0.5s ease-in-out",
						}}
					></Box>
				</Stack>
				<Stack
					direction="row"
					sx={{
						alignItems: "flex-end",
						gap: 8,
						justifyContent: "flex-end",
						"&:hover .image": {
							transform: "rotate(-10deg) scale(1.1)",
						},
						"&:hover .text": {
							color: "#fff",
							opacity: 1,
						},
					}}
				>
					<Typography
						className="text"
						variant="h4"
						sx={{
							letterSpacing: 1.1,
							color: "rgba(255, 255, 255, 0.7)",
							opacity: 0.7,
							transition: "color 0.5s ease-in-out, opacity 0.5s ease-in-out",
						}}
					>
						Late Night Maggie <br /> Party for the boost
					</Typography>
					<Box
						className="image"
						sx={{
							backgroundImage: "url(https://picsum.photos/200/300)",
							height: 300,
							width: 300,
							borderRadius: 8,
							transform: "rotate(10deg)",
							transition: "transform 0.5s ease-in-out",
						}}
					></Box>
				</Stack>
			</Stack>

			<Carousel />
			<Footer />
		</Stack>
	);
}
