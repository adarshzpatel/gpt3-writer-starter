import React, {useState} from 'react';
import Head from 'next/head';
import Spinner from '../components/Spinner';
import Profile from '../components/Profile';
const Home = () => {
  const [userInput,setUserInput] = useState("");
  const [isGenerating,setIsGenerating] = useState(false);
  const [apiOutput,setApiOutput] = useState("");
  
  const getGeneratedOutput = async () => {
    setIsGenerating(true);
    try{ 
      if(!userInput) throw new Error("Input cannot be empty")
      const response = await fetch("/api/generate",{
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userInput})
      });

      const data = await response.json();

      const {output} = data;
      setApiOutput(`${output.text}`)

    } catch(err){
      console.log(err)
    }
    setIsGenerating(false)
  }

  const handleUserInputChange = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  return (
    <div className="p-4 md:p-8 gap-8 items-center flex-col mx-auto max-w-screen-md">
      <Head>
        <title>LinkedIn Post Generato</title>
      </Head>
      <div className='text-center'>
        <h1 className='text-xl lg:text-5xl font-bold'>LinkedIn Post Generator</h1>
        <h6 className='italic text-sm md:text-lg text-neutral-300/50  mt-4 mb-8'>Tired of thinking what to write for your linkedin update/post ? </h6>
      </div>
      <div>

        <div className="flex flex-col gap-2 w-full">
          <label className='text-neutral-200/50'>Write a linkedin post about... </label>
    <textarea
    placeholder="Example : sharing my new project , a web app which utilizes GPT-3 ai to generate linkedin post content , built frontend using next.js and tailwindcss"
    className="prompt-input w-full placeholder:text-neutral-600"
    value={userInput}
    onChange={handleUserInputChange}
    rows={6}
    />
  </div>
  <div className="flex justify-end">

    <button disabled={isGenerating} onClick={getGeneratedOutput} className='flex items-center gap-4 rounded-xl mt-4 hover:bg-violet-500 bg-violet-500/90 focus:ring-1 focus:shadow-2xl ring-white active:bg-violet-600 py-2 px-4 duration-200 disabled:brightness-75'>
        {isGenerating ? "Generating":"Generate"}
        {isGenerating && <Spinner/>}
    </button>
    
  </div>
    </div>
   
  <div>

    {apiOutput && <div className="flex flex-col mt-8 gap-2  w-full">
          <label className='text-neutral-400 font-medium text-sm'>Ai generated output</label>
    <div
    className="prompt-input "
    >
    {apiOutput}
  </div>
      </div>}
  </div>
    <Profile/>
    </div>
  );
};

export default Home;
