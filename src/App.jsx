import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import GenerativeAI from './Pages/Generative'
import KasAIBuilder from './Pages/KasAi'
import VoiceAI from './Pages/VoiceAi'
import EmailTicketing from './Pages/EmailTicetig'
import LiveChat from './Pages/LiveChat'
import FaqChatbot from './Pages/FAQChatbot'
import Omnichannel from './Pages/Omni'
import Healthcare from './Pages/HealthCare'
import Education from './Pages/Educations'
import Banking from './Pages/Banking'
import Ecommerce from './Pages/Ecommerce'
import OpenAIIntegration from './Pages/OpenAi'
import WhatsAppIntegration from './Pages/Whatsapp'
import CustomAIAgents from './Pages/CustomAiAgent'
import Blogs from './Pages/Blogs'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import AuthPage from './Pages/Auth'
import Pricing from './Pages/Pricing'
import BookDemo from './Pages/BookDemo'
import Privacy from './Pages/Privacy'
import Terms from './Pages/Terms'

const App = () => {

  const router= createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/generative-ai",
          element:<GenerativeAI/>
        },
        {
          path:"/kas-ai-builder",
          element:<KasAIBuilder/>
        },
        
        {
          path:"/voice-ai",
          element:<VoiceAI />
        },
        {
          path:"/email-ticketing",
          element:<EmailTicketing/>
        },
        {
          path:"/live-chat",
          element:<LiveChat/>
        },
        {
          path:"/faq-chatbot",
          element:<FaqChatbot/>
        },
        {
          path:"/omnichannel",
          element:<Omnichannel/>
        },
        {
          path:"/healthcare",
          element:<Healthcare/>
        },
        {
          path:"/education",
          element:<Education/>
        },
        {
          path:"/banking",
          element:<Banking/>
        },
        {
          path:"/e-commerce",
          element:<Ecommerce/>
        },
        {
          path:"/integration/openai",
          element:<OpenAIIntegration/>
        },
        {
          path:"/integration/whatsapp",
          element:<WhatsAppIntegration/>
        },
        {
          path:"/custom-ai-agents",
          element:<CustomAIAgents/>
        },
        {
          path:"/blogs",
          element:<Blogs/>
        },
        {
          path:"/about-us",
          element:<AboutUs/>
        },
        {
          path:"/contact-us",
          element:<Contact/>
        },
        {
          path:"/sales",
          element:<Contact/>
        },
        {
          path:"/login",
          element:<AuthPage/>
        },
        {
          path:"/try-for-free",
          element:<AuthPage/>
        },
        {
          path:"/signup",
          element:<AuthPage/>
        },
        {
          path:"/signin",
          element:<AuthPage/>
        },
        {
          path:"/pricing",
          element:<Pricing/>
        },
        {
          path:"/book-demo",
          element:<BookDemo/>
        },
        {
          path:"/demo",
          element:<BookDemo/>
        },
        {
          path:"/get-started",
          element:<Contact/>
        },
        {
          path:"/privacy-policy",
          element:<Privacy/>
        },
        {
          path:"/privacy",
          element:<Privacy/>
        },
        {
          path:"/terms-of-service",
          element:<Terms/>
        },
        {
          path:"/terms",
          element:<Terms/>
        },

      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App