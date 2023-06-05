import styled, { createGlobalStyle } from "styled-components";
import { InputTextField } from "./InputTextField";
import { Field, Form, Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";
import React, { useEffect, useRef } from "react";
import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";

export interface IState {
	customerName:string;
	 originalContent:string; 
	 translatedContent:string; }

export const MainContent: React.FC = () => {
	const form = useRef(null)
	const queryClient = useQueryClient();
	const [state, setState]	= React.useState<IState>(
		{customerName: "",originalContent:"",translatedContent:""}
	)

	const handleSubmit = (values: IState, actions: FormikHelpers<IState>) => {
		setState({...values})
		fetchPosts(values)
		actions.setSubmitting(false);
	}
	 
	async function fetchPosts(values: IState) {
		try{
			if(!form.current) return;
			let formData = new FormData(form.current);
			const data = await fetch(
			`http://localhost:5000/api/jobs`,
			{
				method: "POST",
				mode: 'no-cors',
				headers: {
					'Content-Type': 'application/json'
				  },
				body: formData,
			}
			).then(response => response.json());

			setState(data);

		} catch (error) {
			console.log(error);
		}
	  }
	
	return  (
			<>
				<Formik initialValues={state} onSubmit={handleSubmit}>
				{(formApi) => (
					 <Form ref={form} >
						<InputTextField name={"customerName"} label={"CustomerName"}  />
						<InputTextField name={"originalContent"} label={"OriginalContent"}  />
						<InputTextField name={"translatedContent"} label={"TranslatedContent"}  />
						<button type="submit" disabled={formApi.isSubmitting}>
							Submit
						</button>
					</Form>
					)}
			 	</Formik>
				{state.customerName}
				</>
			)
};
