import { Field } from "formik";
import styled, { createGlobalStyle } from "styled-components";

interface InputTextFieldProps {
	name?: string;
	label?: string;
	inputValue?: string;
}

export const InputTextField: React.FC<InputTextFieldProps> = ({inputValue, label, name}) => {

		const Label = styled.text`
		line-height: 2rem;
		`

	return  (<div>
				<Label>{`${label}: `}</Label>
				<Field type="input" name={name} />
			</div>
			)
		
};
