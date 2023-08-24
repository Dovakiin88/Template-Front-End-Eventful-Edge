import React, { useState } from 'react';
import { useGetData } from '../custom-hooks/FetchData';
import { Paper } from '@material-ui/core';
import Select from 'react-select'
import { Box } from '@mui/material'
import Sidebar_Navigation from '../Navigation/sidebar';
import { AppBar, Toolbar, Grid, Link, Tooltip, Avatar } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import { Typography, Button } from '@mui/material';
import '../app.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import legacyPic from '../Assets/legacy2.png'
import { useForm } from "react-hook-form";
import { DataTable } from '../Datatable/Datatable';
import { TemplateForm } from '../Forms/SaveTemplateform';


export default function CreateTemplate() {
  const [selectedOption, setSelectedOption] = useState<{ value: string; label: string } | null>(null);
  const [selectedTextColor, setSelectedTextColor] = useState<{ value: string; label: string } | null>(null)
  const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
  const [selectedImage2, setSelectedImage2] = useState<File | undefined>(undefined);
  const [selectedImage3, setSelectedImage3] = useState<File | undefined>(undefined);
  const [selectedImage4, setSelectedImage4] = useState<File | undefined>(undefined);
  const [themecolor, setThemeColor] = useState('#FFFFFF')

  type Color = { value: string; label: string } | undefined

  const monthOptions = [
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' },
  ];

  const colorChoice = [
    { value: '#0000FF', label: 'Blue' },
    { value: '#000000', label: 'Black' },
    { value: '#8B0000', label: 'Red' },
    { value: '#006400', label: 'Green' },
    { value: '#696969', label: 'Gray' },
    { value: '#FFFF00', label: 'Yelow' },
    { value: '#800080', label: 'Purple' },
    { value: '#FF8C00', label: 'Orange' }
  ]

  const handleChange = (selectedOption: { value: string; label: string } | null) => {
    setSelectedOption(selectedOption);
  };

  const handleTextColorChange = (selectedTextColor: { value: string; label: string } | null) => {
    setSelectedTextColor(selectedTextColor)
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleImageChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage2(file)
    }
  }

  const handleImageChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage3(file)
    }
  }

  const handleImageChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage4(file)
    }
  }

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setThemeColor(newColor);
  };

  const handleColorChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setThemeColor(newColor);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: themecolor,
      },
    },
  });

  //const { register, handleSubmit } = useForm();

  //const onSubmit = async (data: any) => {
  //const formData = new FormData();
  //formData.append("mainfile", data.mainfile[0]);
  //formData.append("maintopicfile", data.maintopicfile[0]);
  //formData.append("sec2file", data.sec2file[0]);
  //formData.append("sec3file", data.sec3file[0]);

  //const res = await fetch("http://localhost:3001/files", {
  //method: "POST",
  //body: formData,
  //}).then((res) => res.json());
  //alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  //console.log(data.mainfile)
  //};

  const [formData, setFormData] = useState({
    selectedOption: '',
    selectedTextColor: '',
    themecolor: '',
    mainfile: null,
    maintopicfile: null,
    sec2file: null,
    sec3file: null,
    mainTopicText: '',
    secondaryTopicTect: '',
    localEventsText: '',
    marketNews: [
      { topic: '', text: '' },
      { topic: '', text: '' },
      { topic: '', text: '' },
    ],
    legacyInfo: {
      image: '',
      name: '',
      postition: '',
      email: '',
      office: '',
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //sending form to thingy

    fetch("api/saveForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error)
      })
  }


  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ maxWidth: '300px', height: '100vh' }}>
        <Sidebar_Navigation sx={{ zIndex: '1' }} elevation={1} />
      </Box>

      <div style={{ backgroundColor: 'black', width: '310px' }}></div>
      <Box sx={{ width: '70vw', paddingLeft: '60px' }}>
        <Box>
          <AppBar color='transparent' position='sticky' elevation={0}>
            <Toolbar>
              <Grid container spacing={1} alignItems={'center'}>
                <Grid item xs />
                <Grid item>
                  <Link href='https://www.google.com/' variant='body2' sx={{ textDecoration: 'none', color: 'lightcoral', '&:hover': { color: 'white' } }} rel='noopener noreferrer' target='_blank'>
                    The name of the HOA
                  </Link>
                </Grid>
                <Grid item>
                  <Tooltip title="Notifications • No notifications">
                    <IconButton color='inherit'>
                      <NotificationsIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <IconButton color='inherit' sx={{ padding: '.5px' }}>
                    <Avatar src='' alt=" HOA/'s Pic or avatar" />
                  </IconButton>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <AppBar component='div' color='transparent' position='static' sx={{ zIndex: 0 }}>
            <Toolbar>
              <Grid container alignContent='center' spacing={1}>
                <Grid item xs>
                  <Typography color='default' variant='h4' component='h1'>
                    Create Your Template
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container alignItems='center' spacing={1}>
                    <Grid item>
                      <Button sx={{ borderColor: 'black' }} variant='outlined' color='inherit' size='small'>
                        BUTTON. TO BE DETERMINED
                      </Button>
                    </Grid>
                    <Grid item>
                      <Tooltip title='Help'>
                        <IconButton color='inherit'>
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
          <div style={{ margin: '0px' }}><h2>Choose your options</h2></div>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ maxWidth: '30%' }}>
                <Box>
                  <h3>Pick your month</h3>
                  <Select
                    id="options"
                    options={monthOptions}
                    value={selectedOption}
                    onChange={handleChange}
                    isClearable={true}
                  />
                </Box>
                <Box>
                  <h3>Pick your Text color</h3>
                  <Select
                    id='colorOptions'
                    options={colorChoice}
                    onChange={handleTextColorChange}
                    isClearable={true}
                  />
                </Box>
                <Box>
                  <h3>Add your main Image</h3>
                  <label htmlFor='image-upload'>Upload Image</label>
                  <input type="file" id='image-upload' onChange={handleImageChange} />
                </Box>
                <Box>
                  <ThemeProvider theme={theme}>
                    <h3>Create your own Color</h3>
                    <input type="color" value={themecolor} onChange={handleColorChange} />
                  </ThemeProvider>
                </Box>
                <Box>
                  <h3>Upload Main topic image</h3>
                  <input type="file" id="mainImage-upload" onChange={handleImageChange2} />
                </Box>
                <Box>
                  <h3>Upload section 2 Image</h3>
                  <input type="file" id='sec2Img-upload' onChange={handleImageChange3} />
                </Box>
                <Box>
                  <h3>Upload section 3 Image</h3>
                  <input type="file" id='sec3Img-upload' onChange={handleImageChange4} />
                </Box>
              </Box>

              <Box sx={{ margin: '10px', width: '70%', Width: '600px' }}>
                <center>
                  <Box sx={{ position: 'relative', width: '560px', height: '150px', margin: 'auto' }}>
                    <img style={{ width: '100%', height: '150px', zIndex: '0' }} src={selectedImage ? URL.createObjectURL(selectedImage) : ''} alt="" />
                    <div className='titleBoxPREV' style={{ position: 'absolute', top: 15, left: 0, width: '100%', zIndex: '1', justifyItems: 'center' }}>
                      <Box sx={{ width: '24%', textAlign: 'center', backgroundColor: themecolor, height: '20px', paddingTop: '5px', paddingLeft: '3px' }}>
                        Quarter 1 | 2023
                      </Box>
                      <div className={`${'border'} ${'textsizePREV'}`} style={{ width: '50%', textAlign: 'center', height: '30px', background: '#C9C9C9', paddingTop: '10px', padding: '0' }}>
                        <b id="monthSelect" style={{ color: selectedTextColor?.value }}>{selectedOption?.value}</b>
                      </div>
                      <Box sx={{ width: '24%', textAlign: 'center', height: '20px', backgroundColor: themecolor, paddingTop: '5px' }}>
                        Volume 1 | Issue 1
                      </Box>
                    </div>
                  </Box>

                  <Box sx={{ height: '5px' }}></Box>

                  <div className='boxesPREV alignment'>
                    <div style={{ paddingRight: '10px', backgroundColor: 'rgb(226,226,226)' }}>
                      <h3 style={{ paddingLeft: '10px' }}>Main Topic</h3>
                      <article style={{ textAlign: 'left' }}>
                        <p style={{ padding: '5px', paddingTop: '0' }}>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                          et
                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip
                          <a href="https://www.dunkindonuts.com/en">click here</a>
                        </p>
                      </article>
                    </div>

                    {/*This is the space between the text box and the pic box*/}
                    <div style={{ width: '20px' }}></div>

                    <div style={{ backgroundColor: 'rgb(226,226,226)' }}>
                      pic box or other items if needed
                      <img className="imgPREV" src={selectedImage2 ? URL.createObjectURL(selectedImage2) : ''} alt="" />
                    </div>
                  </div>

                  <Box sx={{ height: '5px' }}></Box>

                  <div className='boxesPREV alignment'>
                    <div style={{ backgroundColor: 'rgb(226,226,226)' }}>
                      <img style={{ width: '124px', height: '100px', objectFit: 'fill' }} src={selectedImage3 ? URL.createObjectURL(selectedImage3) : ''} alt="" />
                    </div>

                    {/*This is the space between the text box and the pic box*/}
                    <div style={{ width: '20px' }}></div>

                    <div style={{ paddingLeft: '10px', backgroundColor: 'rgb(226,226,226)' }}>
                      <h3 style={{ paddingRight: '10px' }}>Secondary Topic</h3>
                      <article style={{ textAlign: 'left' }}>
                        <p style={{ padding: '5px', paddingTop: '0', paddingRight: '8px' }}>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                          et
                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip
                          <a href="https://www.dunkindonuts.com/en"> click here</a>
                        </p>
                      </article>
                    </div>
                  </div>

                  <Box sx={{ height: '5px' }}></Box>

                  <div className='boxesPREV alignment'>
                    <div style={{ paddingLeft: '10px', backgroundColor: 'rgb(226,226,226)', width: '600px' }}>
                      <h3 style={{ paddingRight: '10px' }}>Local Events</h3>
                      <article style={{ textAlign: 'left' }}>
                        <p>Here's whats happening in your area!</p>
                        <ul>
                          <li>Swimming pool party. Oak Pointe Recreation Center. <a href="https://www.linkedin.com/"> Click Here</a></li>
                          <li>Hotdog throwing contest <a href="https://www.mcdonalds.com/us/en-us.html"> click Here</a></li>
                          <li>RMT Control Car Race <a href="https://elderscrolls.bethesda.net/en/skyrim">click Here</a> </li>
                        </ul>
                      </article>
                    </div>

                    {/*This is the space between the text box and the pic box*/}
                    <div style={{ width: '8px' }}></div>

                    <div style={{ backgroundColor: 'rgb(226,226,226)' }}>
                      <img style={{ width: '124px', height: '130px', objectFit: 'fill' }} src={selectedImage4 ? URL.createObjectURL(selectedImage4) : ''} alt="" />
                    </div>
                  </div>

                  <Box sx={{ height: '5px' }}></Box>

                  <div className='boxesPREV alignment' style={{ backgroundColor: 'rgb(226,226,226)' }}>
                    ADVERTISEMENT DIV: NEED MORE INFOMATION
                  </div>

                  <Box sx={{ height: '5px' }}></Box>

                  <div className='boxesPREV alignment'>
                    <div style={{ paddingLeft: '10px', backgroundColor: 'rgb(226,226,226)', width: '600px' }}>
                      <h3 style={{ margin: '5px' }}>Market News</h3>
                      <article>
                        <h4 style={{ margin: '3px', textAlign: 'left' }}>Topic 1</h4>
                        <p style={{ textAlign: 'left', margin: '0', paddingRight: '5px', paddingBottom: '5px' }}>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum." <a href="https://www.barnesandnoble.com/">click here</a>
                        </p>
                      </article>

                      <article>
                        <h4 style={{ margin: '3px', textAlign: 'left' }}>Topic 2</h4>
                        <p style={{ textAlign: 'left', margin: '0', paddingRight: '5px', paddingBottom: '5px' }}>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum." <a href="https://www.barnesandnoble.com/">click here</a>
                        </p>
                      </article>

                      <article>
                        <h4 style={{ margin: '3px', textAlign: 'left' }}>Topic 3</h4>
                        <p style={{ textAlign: 'left', margin: '0', paddingRight: '5px', paddingBottom: '5px' }}>
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum." <a href="https://www.barnesandnoble.com/">click here</a>
                        </p>
                      </article>

                    </div>
                  </div>

                  <Box sx={{ height: '5px' }}></Box>

                  <div className='boxesPREV alignment alignment2PREV' style={{ backgroundColor: 'rgb(226,226,226)', height: '110px', justifyContent: 'space-evenly', display: 'flex', flexDirection: 'row', paddingTop: '5px' }}>
                    <div>
                      <img src={legacyPic} alt="" />
                    </div>
                    <div style={{ paddingTop: '15px', fontFamily: 'sans-serif' }}>
                      Legacy Southwest Property Management
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div>Dale Smith</div>
                      <div>Community Manager</div>
                      <div>dale@legacysouthwestpm.com</div>
                      <div>Office: (214) 705-1615</div>
                    </div>
                  </div>

                  <div>
                    <Button type='submit'>Submit</Button>
                  </div>
                </center>
              </Box>

            </Box>
          </form>
        </Box>
      </Box>
      <Box>

      </Box>
    </Box>
  );

}


