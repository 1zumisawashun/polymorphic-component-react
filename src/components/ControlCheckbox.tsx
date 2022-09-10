import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Checkbox, Button } from "@mui/material";
import React from "react";

const items = [
  {
    id: 0,
    name: "Object 0",
  },
  {
    id: 1,
    name: "Object 1",
  },
  {
    id: 2,
    name: "Object 2",
  },
  {
    id: 3,
    name: "Object 3",
  },
  {
    id: 4,
    name: "Object 4",
  },
];

type MyFormData = {
  item_ids: number[];
};

export const ControlCheckbox: React.FC = () => {
  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<MyFormData>();

  const onSubmit: SubmitHandler<MyFormData> = (data) => {
    console.log(data);
  };

  /**
   * 三項演算子で出しわけできるけどわかりにくいのでif文を使っている
   * returnすれば値が更新されるっぽいのでsetValuesする必要はない模様
   */
  const handleCheckbox = (checkedId: number) => {
    const { item_ids: ids } = getValues();

    const isSelected = ids?.includes(checkedId);
    if (isSelected) {
      return ids?.filter((id) => id !== checkedId);
    }
    return [...(ids ?? []), checkedId];
  };

  return (
    <>
      <Controller
        name="item_ids"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <>
            {items.map((item, index) => (
              <Checkbox
                onChange={() => onChange(handleCheckbox(item.id))}
                value={value}
                key={index}
              />
            ))}
          </>
        )}
      />
      <Button onClick={handleSubmit(onSubmit)} variant="contained">
        submit
      </Button>
    </>
  );
};
