import classNames from "classnames";
import "./styles.css";

const Test: React.FC = () => {
  // these classes are not ordered by the plugin
  const classes = "hover:text-red-50 mb-1";

  // thesee classes are not ordered by the plugin
  const classes2 = classNames("hover:text-red-50 mb-1", {
    "hover:text-red-50 mb-1": true,
    "hover:text-blue-50 mb-1": false,
  });

  return (
    <div>
      <div className="hover:text-red-50 mb-1">
        These classes are ordered by the plugin
      </div>

      <div className={`${classes} hover:text-red-50 mb-1`}>
        These classes are ordered by the plugin
      </div>

      <div
        className={classNames("hover:text-red-50 mb-1", {
          "hover:text-red-50 mb-1": true,
          "hover:text-blue-50 mb-1": false,
        })}
      >
        These classes are ordered by the plugin
      </div>

      <div className={classes2}>These classes are ordered by the plugin</div>
    </div>
  );
};

export default Test;
