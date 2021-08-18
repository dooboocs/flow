import React from "react";
import styled from "styled-components";

interface ITextInputProps {
  size: number;
  weight: number;
  value: string;
}

export default function TextInput({ size, weight, value }: ITextInputProps) {
  const [active, setActive] = React.useState(false);

  function toggleActive() {
    setActive(!active);
  }

  return active ? (
    <input
      type="text"
      value={value}
      onBlur={toggleActive}
      onSubmit={toggleActive}
    />
  ) : (
    <div style={{ fontSize: size, fontWeight: weight }} onClick={toggleActive}>
      {value}
    </div>
  );
}
