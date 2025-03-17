/** @format */
import classes from "./styles.module.css";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Container, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "../pngwing.com (1).png";
import Timer from "../Timer/Timer";
import Button from "@mui/material/Button";

const LandingPage = () => {
  return (
    <Container
      sx={{
        backgroundColor: "lightgray",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "600px",
          backgroundColor: "white",
          overflowY: "auto",
          maxHeight: "100vh",
          padding: "0 0 20px 0",
          "@media (min-width:600px)": {
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
          },
        }}
      >
        <Box
          sx={{
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          <BottomNavigation showLabels>
            <BottomNavigationAction label="Новинка 2025 року" />
            <BottomNavigationAction label="Оплата після перевірки" />
            <BottomNavigationAction label="Швидка доставка" />
          </BottomNavigation>
        </Box>
        <h1 className={classes.goodsName}>Мереживна накидка</h1>
        <img src={Image} alt="jhhhh" />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CheckCircleIcon sx={{ color: "wheat", fontSize: 30 }} />
          <Typography sx={{ marginLeft: 2 }}>
            Якісний гіпоалергенний матеріал
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CheckCircleIcon sx={{ color: "wheat", fontSize: 30 }} />
          <Typography sx={{ marginLeft: 2 }}>
            Вирівнювання, приховування недоліків
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CheckCircleIcon sx={{ color: "wheat", fontSize: 30 }} />
          <Typography sx={{ marginLeft: 2 }}>
            Акція: -50 грн на другу покупку
          </Typography>
        </Box>
        <Timer />
        <div className={classes.price}>
          <div>
            <p>Звичайна ціна</p>
            <p className={classes.initialPrice}> 275 грн</p>
          </div>
          <div>
            <p>Ціна за акцією</p>
            <p className={classes.newPrice}>249 грн</p>
          </div>
        </div>
        <Button
          variant="contained"
          color="success"
          sx={{
            width: "100%",
            backgroundColor: "orange",
            padding: "20px",
            "&:hover": {
              backgroundColor: "#ce861e",
            },
          }}
        >
          ЗАМОВИТИ ЗАРАЗ
        </Button>
      </Container>
    </Container>
  );
};
export default LandingPage;
