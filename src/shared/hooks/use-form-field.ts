import {
  Control,
  FieldError,
  RefCallBack,
  useController,
  UseControllerProps,
} from "react-hook-form";

export interface UseFormFieldReturn {
  value: any;
  onChange: (value: any) => void;
  onBlur: () => void;
  error?: FieldError;
  name: string;
  ref: RefCallBack;
}

export const useFormField = (
  name: string,
  control: Control<any>,
  rules?: UseControllerProps["rules"]
): UseFormFieldReturn => {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return {
    name,
    value,
    onChange,
    onBlur,
    error,
    ref,
  };
};
