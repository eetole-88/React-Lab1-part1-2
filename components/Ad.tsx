import "./Ad.css";
import Display from "../models/displayAd";

interface Props {
  ad: Display;
}

function Ad({ ad }: Props) {
  const styles = {
    fontSize: ad.fontSize,
  };

  const additionalClass = ad.darkTheme ? " darkTheme" : "voteBox";
  return (
    <section>
      <div className={"voteBox " + additionalClass}>
        Vote For
        <h3 className="flavor" style={styles}>
          {ad.flavor}
        </h3>
      </div>
    </section>
  );
}

export default Ad;
