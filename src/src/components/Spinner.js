import { colors } from "../config/colors";

export default function Spinner({ isLoading }) {
  return (
    <div
      className="spinner-cont"
      style={{
        display: isLoading ? "flex" : "none",
        backgroundColor: colors.primary,
      }}
    >
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
