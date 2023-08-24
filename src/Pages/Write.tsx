import React, { useState } from 'react'
import { Box } from '@mui/material'
import Sidebar_Navigation from '../Navigation/sidebar'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form";


export default function Write() {

    const { register, handleSubmit } = useForm();

    const [articleContent, setArticleContent] = useState('');
    const history = useNavigate();
    const handleNavigate = () => {
        localStorage.setItem('articleContent', articleContent);

        history('/create');
    }

    const onSubmit = async (data:any) => {
        const formData = new FormData();
        formData.append("file", data.file[0]);

        const res = await fetch("http://localhost:5000/upload-file", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ background: 'blue', width: '300px', height: '100%vh' }}>
                <Sidebar_Navigation />
            </Box>
            <Box></Box>
            <Box sx={{ margin: 'auto', width: '1000px' }}>
                <div>
                    <h1 style={{ textAlign: 'center' }}>Write your articles</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>

                        <h2>Main article</h2>
                        <i>This is going to be the topic for your main article. This will be positioned under the main picture </i>
                        <fieldset>
                            <label htmlFor="mainTopicTitle">Enter the title of your main topic</label>
                            <input type='text' name='Main Topic Title' />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="mainTopicText">Enter your article text</label>
                            <textarea name="maintopicText" style={{ width: '100%', height: '250px', wordWrap: 'break-word' }} />
                        </fieldset>

                    </div>

                    <div>
                        <h2>Article for the second section</h2>
                        <i>This is going to be the topic for the second section of your news letter. This will be positioned under the main topic</i>

                        <fieldset>
                            <label htmlFor="secondTopicTitle">Enter the title for the Second article</label>
                            <input type="text" name='Secondary Topic Title' />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="secondaryTopicText">Enter article text</label>
                            <textarea name="secondaryTopicText" style={{ width: '100%', height: '250px', wordWrap: 'break-word' }} />
                        </fieldset>

                    </div>

                    <div>
                        <h2>Articles for the third section</h2>
                        <i>This will consist of several sub articles. these articles will be positioned under the Local events section</i>
                        <div>

                            <fieldset>
                                <label htmlFor="section3TopicAtitle">Enter the title for topic A of the 3rd section</label>
                                <input type="text" name='Section 3 Topic a' />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="section3TopicAtext">Enter article Text</label>
                                <textarea name="section3TopicAtext" style={{ width: '100%', height: '250px', wordWrap: 'break-word' }} />
                            </fieldset>

                        </div>

                        <div>

                            <fieldset>
                                <label htmlFor="section3TopicBtitle">Enter the title for topic B of the 3rd section</label>
                                <input type="text" name='Section 3 Topic b' />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="section3TopicBtext">Enter article Text</label>
                                <textarea name="section3TopicBtext" style={{ width: '100%', height: '250px', wordWrap: 'break-word' }} />
                            </fieldset>

                        </div>

                        <div>

                            <fieldset>
                                <label htmlFor="section3TopicCtitle">Enter the title for topic C of the 3rd section</label>
                                <input type="text" name='Section 3 Topic C' />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="section3TopicCtext">Enter article Text</label>
                                <textarea name="section3TopicCtext" style={{ width: '100%', height: '250px', wordWrap: 'break-word' }} />
                            </fieldset>

                        </div>
                    </div>
                    <Button type='submit'>Submit</Button>
                </form>
            </Box>

        </Box>
    );
}
