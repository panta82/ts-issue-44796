import React from "react";

import {
  Control,
  DeepMap,
  FieldPath,
  FieldPathValue,
  UseFormReturn,
  DefaultValues as IFormDefaultValues,
  UseFormProps,
  useForm as _useForm,
  UseControllerReturn,
  useController as _useController,
  get as _get,
} from "react-hook-form";

export const getAtPath = _get as <
  TFieldValues extends IFieldValues,
  TFieldPath extends FieldPath<TFieldValues>
>(
  values: TFieldValues,
  fieldPath: TFieldPath
) => FieldPathValue<TFieldValues, TFieldPath>;

export function enumize<T extends string>(
  arrayOfAllPossibleValues: readonly T[]
): { [key in T]: key } {
  const result = {};
  for (const item of arrayOfAllPossibleValues) {
    result[String(item)] = String(item);
  }
  return result as any;
}

export function enumValues<T extends object>(target: T): Array<keyof T> {
  return Object.keys(target) as Array<keyof T>;
}

export type IForm<TFieldValues extends IFieldValues> =
  UseFormReturn<TFieldValues> & {
    formState: UseFormReturn<TFieldValues>["formState"] & {
      errors: DeepMap<TFieldValues, string[]>;
    };
  };
export function useForm<TFieldValues extends IFieldValues>(
  defaultValues?: IFormDefaultValues<TFieldValues>,
  validation?: IFormValidations<TFieldValues>,
  props?: UseFormProps<TFieldValues, any>
): IForm<TFieldValues> {
  return _useForm({ defaultValues, ...props }) as any;
}
export type IFieldValues = Record<string, any>;
export type IFormValidations<TFieldValues extends IFieldValues> = Array<
  IValidation<TFieldValues>
>;
export type IFormControl<TFieldValues extends IFieldValues> =
  IForm<TFieldValues>["control"];
export type IFormState<TFieldValues extends IFieldValues = IFieldValues> =
  IForm<TFieldValues>["formState"];

export type IValidation<TFieldValues extends IFieldValues> = (
  validator: Validator<TFieldValues>
) => IValidationCheck<TFieldValues>;

export type IValidationCheck<TFieldValues extends IFieldValues> = (
  values: TFieldValues
) => void | Promise<void>;

export class Validator<TFieldValues extends IFieldValues> {
  x: TFieldValues;
}

export type IFormController<
  TFieldValues extends IFieldValues,
  TFieldPath extends FieldPath<TFieldValues>
> = UseControllerReturn<TFieldValues, TFieldPath> & {
  formState: IFormState<TFieldValues>;
};

export function useController<
  TFieldValues extends IFieldValues = IFieldValues,
  TFieldPath extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  name: TFieldPath,
  control: Control<TFieldValues>,
  defaultValue: FieldPathValue<TFieldValues, TFieldPath>
): IFormController<TFieldValues, TFieldPath> {
  return _useController({
    name,
    control,
    defaultValue,
  }) as IFormController<TFieldValues, TFieldPath>;
}

interface IBaseProps<TValue extends string | number> {
  values: readonly TValue[];
}
interface IMyComponentProps<TValue extends string | number>
  extends IBaseProps<TValue> {
  value: TValue;
  onChange: (newValue: TValue) => void;
  otherProp: boolean;
}
const MyComponent = <TValue extends string | number>({
  value,
  values,
  onChange,
  otherProp,
}: IMyComponentProps<TValue>) => {
  return (
    <div onClick={onChange}>
      {value}
      {values}
      {otherProp}
    </div>
  );
};

const FirstWrapper = <TValue extends string | number>({
  value,
  values,
  onChange,
  something,
}: Omit<IMyComponentProps<TValue>, "otherProp"> & {
  something: string;
}) => {
  return (
    <MyComponent
      value={value}
      values={values}
      onChange={onChange}
      otherProp={true}
    >
      {something}
    </MyComponent>
  );
};

const SecondWrapper = <
  TFieldValues extends IFieldValues,
  TFieldPath extends FieldPath<TFieldValues>,
  TValue extends FieldPathValue<TFieldValues, TFieldPath> extends
    | string
    | number
    ? FieldPathValue<TFieldValues, TFieldPath>
    : never
>({
  values,
  name,
  control,
}: {
  name: TFieldPath;
  control: IFormControl<TFieldValues>;
  errors?: string;
} & IBaseProps<TValue>) => {
  const { field, formState } = useController(name, control, null);
  const errors = getAtPath(formState?.errors, name);
  return (
    <FirstWrapper
      value={field.value as any}
      values={values}
      onChange={field.onChange}
      something={"test"}
    >
      {name}
      {control}
      {errors}
    </FirstWrapper>
  );
};

const MY_VALUES = enumize(["a", "b", "c"] as const);
export const MY_VALUE_LIST = enumValues(MY_VALUES);
export type IMyValue = keyof typeof MY_VALUES;

interface IMyType {
  innerThing: {
    value: IMyValue;
  };
}

const Root: React.FC<{ myThing: IMyType }> = ({ myThing }) => {
  const form = useForm(myThing, []);

  return (
    <SecondWrapper
      name={"innerThing.value"}
      control={form.control}
      values={MY_VALUE_LIST}
    />
  );
};

console.log(<Root myThing={{}} />);
