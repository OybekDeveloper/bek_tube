import React from "react";
import { category } from "../../constats";
import { colors } from "../../constats/colors";
import { Stack } from "@mui/material";

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {category.map((item) => (
        <button
          className={"category-btn"}
          key={item.name}
          style={{
            borderRadius: "0",
              backgroundColor:item.name===selectedCategory && colors.icon,
            color: item.name === selectedCategory ? '#fff':colors.icon,
          }}
          onClick={() => selectedCategoryHandler(item.name)}
        >
          <span
            style={{color: item.name === selectedCategory ? '#fff':colors.icon, marginRight: "15px", opacity: "1" }}
          >
            {item.icon}
          </span>
          <span style={{ color: item.name === selectedCategory ? '#fff':colors.icon }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
