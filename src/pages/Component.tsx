import { useState } from "react";
import styled from "@emotion/styled";
import { ControlCheckbox, InputText, InputTextarea } from "../components/uis";
import { ReactSwiper, ReactSplide } from "../components/models";
import { slideList } from "../functions/constants/swiperItem";

const Container = styled("div")`
  background: #f4f4f4;
  min-height: 300px;
  width: 100%;
`;
const Inner = styled("div")`
  margin: auto;
  width: 60%;
`;
const FormContainer = styled("div")`
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding-bottom: 40px;
`;
const ButtonWrapper = styled("div")`
  margin: 0 20px 20px;
  text-align: end;
`;
const CoutionText = styled("div")`
  color: red;
  font-size: 14px;
  margin: 0 20px 20px;
`;
const ExampleText = styled("div")`
  font-size: 14px;
  margin: 0 20px 20px;
`;
const ComponentContainer = styled("div")`
  border: 1px solid black;
  border-radius: 4px;
  margin-top: 40px;
  padding: 16px;
  padding-bottom: 8px;
  position: relative;
`;
const ComponentFlex = styled("div")`
  display: flex;
  gap: 10px;
`;
const ComponentTitle = styled("p")`
  background-color: #f4f4f4;
  font-size: 20px;
  font-weight: bold;
  left: 16px;
  padding: 0 8px;
  position: absolute;
  top: -37px;
`;
const CheckboxGroupWrapper = styled("div")`
  background-color: transparent;
  color: #84bcb4;
  display: flex;
  font-weight: bold;
  margin: 20px;
`;
const CheckboxGroupInner = styled("div")`
  display: flex;
  justify-content: end;
  width: 80%;
`;
const Label = styled("label")`
  font-size: 16px;
  margin: auto 0;
  width: 20%;
`;

export const Component: React.VFC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [checkedWithText, setCheckedWithText] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [textWithButtonValue, setTextWithButtonValue] = useState("");
  const [selectedCheckbox, setSelectedCheckbox] = useState<string[]>([]);
  const [isSwitch, setIsSwitch] = useState<boolean>(false);
  const [isMatching, setIsMatching] = useState<boolean>(false);
  const [isAuto, setIsAuto] = useState<boolean>(false);
  const [datetimepicker, setDatetimepicker] = useState<Date | null>(new Date());

  const handleSwitchForm = (state: string) => {
    if (state === "isSwitch") setIsSwitch((prev) => !prev);
    if (state === "isMatching") setIsMatching((prev) => !prev);
    if (state === "isAuto") setIsAuto((prev) => !prev);
  };
  const handleSwitchForm2 = () => {
    setCheckedWithText((prev) => !prev);
  };
  const handleSelectForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectValue(e.target.value);
  };
  const onInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };
  const onInputText2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextWithButtonValue(e.target.value);
  };
  const onInputTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
  };
  const handleClick = () => {
    alert("handleClick");
  };
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCheckboxGroup = (e: React.ChangeEvent<HTMLInputElement>) => {
    // checkされた場合
    if (e.target.checked) {
      const newSelectedCheckLists = [...selectedCheckbox, e.target.value];
      setSelectedCheckbox(newSelectedCheckLists);
      return;
    }
    // checkが解除された場合
    const newSelectedCheckLists = selectedCheckbox.filter(
      (value) => value !== e.target.value
    );
    setSelectedCheckbox(newSelectedCheckLists);
  };

  const onChangeStartDate = (date: Date | null) => {
    if (!date) return;
    setDatetimepicker(date);
  };

  return (
    <Container>
      <Inner>
        <FormContainer>
          <ComponentContainer>
            <ComponentTitle>Swiper</ComponentTitle>
            <ReactSwiper></ReactSwiper>
          </ComponentContainer>

          <ComponentContainer>
            <ComponentTitle>Splide</ComponentTitle>
            <ReactSplide slideList={slideList}></ReactSplide>
          </ComponentContainer>

          <ComponentContainer>
            <ComponentTitle>ControlCheckbox</ComponentTitle>
            <ControlCheckbox></ControlCheckbox>
          </ComponentContainer>

          <ComponentContainer>
            <ComponentTitle>InputText</ComponentTitle>
            <InputText></InputText>
          </ComponentContainer>

          <ComponentContainer>
            <ComponentTitle>InputTextarea</ComponentTitle>
            <InputTextarea></InputTextarea>
          </ComponentContainer>
        </FormContainer>
      </Inner>
    </Container>
  );
};
