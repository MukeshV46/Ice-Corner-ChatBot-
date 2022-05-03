import { render } from '@testing-library/react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Post from './PostOrder';
import logo from 'D:/React/my-react-app/src/Dasher/Images/IMG20220223194120.jpg';


// const steps = 
// Creating our own theme
const theme = {
   background: 'pink',
   headerBgColor: 'purple',
   headerFontSize: '20px',
   botBubbleColor: 'blue',
   headerFontColor: 'white',
   botFontColor: 'white',
   userBubbleColor: 'red',
   userFontColor: 'pink',
};

// Set some properties of the bot
const config = {
   botAvatar: `${logo}`,
   floating: true,
};

const IceBot = ({name})=>{
    
    return(
        
        <ThemeProvider theme={theme}>
              {console.log(name)};
                <ChatBot
                     
                     // This appears as the header
                     // text for the chat bot
                     headerTitle="IceBot"
                     speechSynthesis={{ enable: true, lang: 'en' }}
                    steps={
                        [
                            // {
                            //     id:'greet',
                            //     message:`Hey ${name} Welcome`,
                            //     trigger:'1'
                            // },
                            {
                               id: '1',
                               message: 'Hey Buddy Enter  your User name',
                               trigger: 'name'
                           }, {
                               id: 'name',
                               user: true,
                               trigger: '3',
                           }, {
                               id: '3',
                               message: " hi {previousValue}, What type Ice cream You want?",
                               trigger: 'Type'
                           }, {
                               id: 'Type',
                               options: [
                                    
                                  
                                   { value: 'Cup', label: 'Cup',trigger:'5' },
                                   { value: 'Cone', label: 'Cone',trigger:'5' },
                               ],  
                           },
                           {
                             id: '5',
                             message: " Which Flavour ",
                             trigger: 'Flavour'
                          },
                          {
                           id: 'Flavour',
                           options: [
                               { value: 'Chocolate', label: 'Chocolate ',trigger:'7'},
                               { value: 'Vanila', label: 'Vanila',trigger:'7'},
                               { value: 'BlueBerry', label: 'BlueBerry',trigger:'7'},
                           ],  
                          },
                          {
                            id: '7',
                            message: " How many You Want? ",
                            trigger: 'count'
                           },
                           {
                             id: 'count',
                             user: true,
                             trigger: '8',
                           },
                          {
                           id: '8',
                           message: " What type of Size ",
                           trigger: 'size'
                          },
                          {
                           id: 'size',
                           options: [         
                               { value: 'Small', label: 'Small ',trigger:'pay'},
                               { value: 'Medium', label: 'Medium',trigger:'pay'},
                               { value: 'Family_Pack', label: 'Family Pack',trigger:'pay'},
                           ],  
                          },                          
                          {
                            id:'pay',
                            message:'Are You ganna Pay for it?',
                            trigger:'is_Pay'
                          },
                          {
                            id:'is_Pay',
                            options: [         
                                { value: 'Paid', label: 'yes ',trigger:'order'},
                                { value: 'NotPaid', label: 'Later',trigger:'order'}                            
                            ]                            
                          },
                          
                          {
                            id: 'order',
                            component: <Post />,
                            asMessage: true,
                            trigger:'9'                            
                          },
                          {
                             id: '9',
                             message: " Add More on Your Plate? ",
                             trigger: '10'
                            },
                        
                           {
                             id: '10',
                             options: [
                                 { value: 1, label: 'Yes',trigger:'Type' },
                                 { value: 2, label: 'No',trigger:'11' },
                             ],  
                           },
                           {
                             id:'11',
                             message:'Your order has Been Taken!!!' ,
                             end:true
                           }
                           
                        ]                        
                    }
                    {...config}
                />
            </ThemeProvider>
    )
}
export default IceBot;