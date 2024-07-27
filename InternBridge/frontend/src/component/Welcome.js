import { Grid, Typography } from "@material-ui/core";
import backgroundImage from "./image6.avif";
const Welcome = (props) => {
  const titleStyle = {
    color: "#3f51b5",
    fontWeight: "bold",
    textShadow: "1px 20px 5px rgba(0, 0, 0, 0.7)",
  };

  const containerStyle = {
    padding: "30px",
    minHeight: "93vh",
    backgroundImage: `url(${backgroundImage})`, // Replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={containerStyle}
    >
      <Grid item>
        <Typography variant="h2" style={titleStyle}>
          INTERNBridge
        </Typography>
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  const containerStyle = {
    padding: "30px",
    minHeight: "93vh",
    backgroundImage: "url('path/to/your/background-image.jpg')", // Replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={containerStyle}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
