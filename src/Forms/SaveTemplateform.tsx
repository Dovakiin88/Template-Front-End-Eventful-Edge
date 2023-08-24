import React from "react";
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from "react-hook-form";
import { chooseTname, chooseTissueno, chooseTvolumeno, choooseTdate, chooseThoa } from '../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from "@mui/material";
import { server_calls } from '../api/server';

interface TemplateFormProps {
    id?: string;
    data?: {}
}

interface TemplateState {
    name: string;
    template_issue_number: string;
    template_volume_number: string;
    template_date: string;
    template_hoa: string;
};

export const TemplateForm = (props: TemplateFormProps) => {
    const dispatch = useDispatch();
    const store = useStore();
    const name = useSelector<TemplateState>(state => state.name)
    const { register, handleSubmit } = useForm({})

    const onSubmit = (data: any, event: any) => {
        console.log(props.id)
        if (props.id!) {
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data)
            console.log(data.name)
            console.log(data.template_issue_number)
            console.log(data.template_volume_number)
            console.log(data.template_date)
            console.log(data.hoa)
            setTimeout(() => { window.location.reload() }, 1000);
            event.target.reset();
        } else {
            dispatch(chooseTname(data.name));
            dispatch(chooseTissueno(data.template_issue_number));
            dispatch(chooseTvolumeno(data.template_volume_number));
            dispatch(choooseTdate(data.template_date));
            dispatch(chooseThoa(data.template_hoa));
            server_calls.create(store.getState());
            setTimeout(() => { window.location.reload() }, 1000)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Template Name</label>
                    <Input {...register('name')} name='name' placeholder="Name" />
                </div>
                <div>
                    <label htmlFor="template_issue_number">Template Issue Number</label>
                    <Input {...register('name')} name='template_issue_number' placeholder="Issue Number" />
                </div>
                <div>
                    <label htmlFor="name">Template Volume Number</label>
                    <Input {...register('template_volume_number')} name='template_volume_number' placeholder="Volume Number" />
                </div>
                <div>
                    <label htmlFor="name">Template Date</label>
                    <Input {...register('template_date')} name='template_date' placeholder="EX: 01/01/2020" />
                </div>
                <div>
                    <label htmlFor="name">Template HOA</label>
                    <Input {...register('template_hoa')} name='template_hoa' placeholder="HOA Name" />
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}