import { BiBorderRadius } from "react-icons/bi";

export const pageFilterStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #f2f2f2',
      color: '#213f7d',
    }),
    control: () => ({
      width: '90px',
      display: 'flex',
    //   padding: '0 5%',
      backgroundColor: "#ebedf2",
      borderRadius: "7px"
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition,
        color: '#213f7d',
      };
    },
    indicatorContainer: (provided, state) => ({
      ...provided,
      padding: "6px",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: '#213f7d',
    }),
    Svg: (provided, state) => ({
        ...provided,
        height: "10",
        width: "10"
    }),
    indicatorSeparator: (provided, state) => ({
        display: 'none'
    }),
    valueContainer: (provided, state) => ({
        ...provided,
    }),
}