import React from "react";
import Icon from "./Icon";
import { useState } from "react";

export default function Sidebar() {



  const [position, setPosition] = useState("random position");
  const [rotation, setRotation] = useState("all round");
  const [costume, SetCostume] = useState("costume2")
  const [backdrop, SetBackdrop] = useState("backdrop 1");
  const [layer, setLayer] = useState("front")
  const handleevent = (event) => {
    setPosition(event.target.value);
  }
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Move 10 steps"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>

            <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        <input className="border 2 rounded-full bg-white resize h-6 w-6" ></input>

        {" degrees"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer  ">

        {"go to  "}
        <select value={position} onChange={handleevent} className="bg-blue-500 border-2 border-blue rounded-3xl ">
          <option value="random position">random position</option>
          <option value="mouse pointer">mouse pointer</option>
          <option value="spirit 2">spirit 2</option>
        </select>
      </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"go to x: "}

        <input className="border 2 rounded-full bg-white resize h-6 w-6" ></input>

        {"y:"}
        <input className="border 2 rounded-full bg-white resize h-6 w-6" ></input>
      </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"glide "}

        <input className="border 2 rounded-full bg-white resize h-6 w-6" ></input>

        {"secs to "}
        <select value={position} onChange={handleevent} className="bg-blue-500 border-2 border-blue rounded-3xl ">
          <option value="random position">random position</option>
          <option value="mouse pointer">mouse pointer</option>
          <option value="spirit 2">spirit 2</option>
        </select>
      </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"points in direction "}

        <input className="border 2 rounded-full bg-white resize h-6 w-6" ></input>


      </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"points towards "}
        <select value={position} onChange={handleevent} className="bg-blue-500 border-2 border-blue rounded-3xl ">
          <option value="random position">random position</option>
          <option value="mouse pointer">mouse pointer</option>
          <option value="spirit 2">spirit 2</option>
        </select>
      </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"change x by "}

        <input className="border 2 rounded-full bg-white resize h-6 w-6" ></input>
      </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"set x to  "}

        <input className="border 2 rounded-full bg-white resize h-6 w-6" ></input>


      </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"change y by "}

        <input className="border 2 rounded-full bg-white resize h-6 w-6" ></input>


      </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"set y to "}

        <input className="border 2 rounded-full bg-white resize h-6 w-6" ></input>


      </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"if an edge bounce "}




      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"set rotation style "}
        <select value={rotation} onChange={handleevent} className="bg-blue-500 border-2 border-blue rounded-3xl ">
          <option value="all round">all round</option>
          <option value="left-right">left-right</option>
          <option value="Don't rotate">Don't rotate</option>
        </select>
      </div>

      <div >
        <label>
          <input type="checkbox" />
          <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">x position</div>

        </label>
      </div>
      <div >
        <label>
          <input type="checkbox" />
          <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">y position</div>

        </label>
      </div>
      <div className="grid grid-cols-2 border text-center p-3" >

        <div className="border w-1/2 mt-3"><input type="checkbox" name="zp" /> </div>    <label id="zp">
          <div className="w-[100%] bg-blue-500 text-white py-2 px-1 my-1 rounded text-sm cursor-pointer">z position</div>
        </label>

      </div>



      {/* looks */}

      <div className="font-bold"> {"Looks"} </div>
      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"say"}   &nbsp;
        <input className="border 2 rounded-full bg-white resize h-6 w-6" type="text"></input>
        &nbsp;
        {"for"}  &nbsp;
        <input className="border 2 rounded-full bg-white resize h-6 w-6" ></input>
        &nbsp;
        {"seconds"}
      </div>


      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"say"}   &nbsp;
        <input className="border 2 rounded-full bg-white resize h-6 w-6" type="text"></input>

      </div>

      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"think"}   &nbsp;
        <input className="border 2 rounded-full bg-white resize h-6 w-6" type="text"></input>
        &nbsp;
        {"for"}  &nbsp;
        <input className="border 2 rounded-full bg-white resize h-6 w-6" ></input>
        &nbsp;
        {"seconds"}
      </div>


      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"think"}   &nbsp;
        <input className="border 2 rounded-full bg-white resize h-6 w-6" type="text"></input>

      </div>

      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"switch costume to "}   &nbsp;
        <select value={costume} onChange={handleevent} className="bg-purple-500 border-2 border-blue rounded-3xl ">
          <option value="costume 1">costume1</option>
          <option value="costume 2">costume2</option>
        </select>
      </div>

      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"next costume"}   &nbsp;

      </div>

      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"switch costume to "}   &nbsp;
        <select value={backdrop} onChange={handleevent} className="bg-purple-500 border-2 border-blue rounded-3xl ">
          <option value="backdrop 1">backdrop 1</option>
          <option value="next backdrop">next backdrop</option>
          <option value="previous backdrop">previous backdrop</option>
          <option value="random backdrop">random backdrop</option>

        </select>
      </div>

      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"next backdrop"}   &nbsp;

      </div>

      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"change size by"}   &nbsp;
        <input className="border 2 rounded-full bg-white resize h-6 w-6" type="text"></input>

      </div>

      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"set size by"}   &nbsp;
        <input className="border 2 rounded-full bg-white resize h-6 w-6" type="text"></input>
        &nbsp;
        {"%"}
      </div>

      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"switch  "}   &nbsp;
        <select value={backdrop} onChange={handleevent} className="bg-purple-500 border-2 border-blue rounded-3xl ">
          <option value="color">color 1</option>
          <option value="fisheye">fisheye</option>
          <option value="whirl">whirl</option>
          <option value="pixelate">pixelate</option>
          <option value="mosaic">mosaic</option>
          <option value="brightness">brightness</option>
          <option value="ghost">ghost</option>

        </select>
        {"effect by "} &nbsp;
        <input className="border 2 rounded-full bg-white resize h-6 w-6" type="text"></input>

      </div>

      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"set  "}   &nbsp;
        <select value={backdrop} onChange={handleevent} className="bg-purple-500 border-2 border-blue rounded-3xl ">
          <option value="color">color 1</option>
          <option value="fisheye">fisheye</option>
          <option value="whirl">whirl</option>
          <option value="pixelate">pixelate</option>
          <option value="mosaic">mosaic</option>
          <option value="brightness">brightness</option>
          <option value="ghost">ghost</option>

        </select>
        {"effect to "} &nbsp;
        <input className="border 2 rounded-full bg-white resize h-6 w-6" type="text"></input>

      </div>

      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"clear graphic effects"}   &nbsp;

      </div>

      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"show"}   &nbsp;

      </div>

      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"hide"}   &nbsp;

      </div>

      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"go to  "}   &nbsp;
        <select value={layer} onChange={handleevent} className="bg-purple-500 border-2 border-blue rounded-3xl ">
          <option value="front">front</option>
          <option value="back">back</option>


        </select>
        {"layer "} &nbsp;

      </div>

      <div className="flex flex-row flex-wrap bg-purple-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"go   "}   &nbsp;
        <select value={layer} onChange={handleevent} className="bg-purple-500 border-2 border-blue rounded-3xl ">
          <option value="forward">forward</option>
          <option value="backward">backward</option>


        </select>
        &nbsp;
        <input className="border 2 rounded-full bg-white resize h-6 w-6" type="text"></input>
        &nbsp;
        {"layers"}

      </div>







      {/* Events */}

      <div className="font-bold"> {"Events"} </div>

      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"when clicked"}   &nbsp;

        <Icon name="flag" size={15} className="text-white mx-2 fill-orange-500" />

      </div>


      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"when "}   &nbsp;
        <select value={layer} onChange={handleevent} className="bg-yellow-500 border-2 border-blue rounded-3xl ">
          <option className=" bg-yellow-500" value="space">space</option>
          <option value="up arrow">up arrow</option>
          <option value="down arrow">down arrow</option>
          <option value="right arrow">right arrow</option>
          <option value="left arrow">left arrow</option>
          <option value="any">any</option>
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
          <option value="e">e</option>
          <option value="f">f</option>
          <option value="g">g</option>
          <option value="h">h</option>
          <option value="i">i</option>
          <option value="j">j</option>
          <option value="k">k</option>
          <option value="l">k</option>
          <option value="m">m</option>
          <option value="n">n</option>
          <option value="o">o</option>
          <option value="p">p</option>
          <option value="q">q</option>
          <option value="r">r</option>
          <option value="s">s</option>
          <option value="t">t</option>
          <option value="u">u</option>
          <option value="v">v</option>
          <option value="w">w</option>
          <option value="x">x</option>
          <option value="y">y</option>
          <option value="1">z</option>
          <option value="2">1</option>
          <option value="3">2</option>
          <option value="4">3</option>
          <option value="5">4</option>
          <option value="6">5</option>
          <option value="7"></option>
          <option value="8">b</option>
          <option value="9">b</option>









        </select> &nbsp;
        {"key pressed"}
      </div>

      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"when spirit is clicked"}   &nbsp;


      </div>

      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"when backdrop switches to"}   &nbsp;
        <select className="bg-yellow-500">
          <option value="backdrop " >backdrop 1</option>
        </select>

      </div>

      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"when "}   &nbsp;
        <select className="bg-yellow-500">
          <option value="loudness " >loudness</option>
          <option value="timer" >timer</option>

        </select> &nbsp;
        {">"}
        <input className="border 2 rounded-full bg-white resize h-6 w-6" type="text"></input>


      </div>

      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"when  i recieve "}   &nbsp;
        <select className="bg-yellow-500">
          <option value="new messsage " >new message</option>
          <option value="message 1" >message 1</option>

        </select>


      </div>


      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"broadcast "}   &nbsp;
        <select className="bg-yellow-500">
          <option value="new messsage " >new message</option>
          <option value="message 1" >message 1</option>

        </select>


      </div>


      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"broadcast "}   &nbsp;
        <select className="bg-yellow-500">
          <option value="new messsage " >new message</option>
          <option value="message 1" >message 1</option>

        </select>
        &nbsp;
        {"and wait"}


      </div>


      {/* controls */}

      <div className="font-bold"> {"Controls"} </div>

      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"wait"}   &nbsp;

        <input className="border 2 rounded-full bg-white resize h-6 w-6" type="text"></input> &nbsp;
        {"second"}
      </div>

    </div>
  );
}

// /Users/satyamsingh/untitled folder 2/master/public