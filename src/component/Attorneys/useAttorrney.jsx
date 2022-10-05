// import { useContext } from "react";
// import { useFormAction } from "react-router-dom";
import { useAttorneyContext } from "../Context/AttorneyContext";

export const useAttorrney = () => {
  const { attorneys } = useAttorneyContext();
  const getAttorney = (id) => {
    const filtered = attorneys.filter(
      (attorney) => parseInt(attorney.id) === parseInt(id)
    );
    return filtered[0];
  };
  return { getAttorney };
};
