import { useState } from 'react';
import './App.css'
// create recusursive component for file tree presentation.

const fileTree = {

  children: [
    {
      name: 'node_module',
      children: [
        {
          name: 'bin',
          children: [
            {
              name: 'acorn',

            },
            {
              name: 'browerserslist'
            }
          ]
        }
      ]
    },
    {
      name: 'public',
      children: [
        {
         name: 'vite.svg'
       }
     ] 
    },
    {
      name: 'src',
      children: [
        {
          name: 'assets',
          chidlren: [
            {
              name:'react.svg'
            }
          ]
        },
        {
          name: 'App.css'
        },
        {
          name: 'App.jsx'
        },
        {
          name: 'main.jsx'
        },

      ]
    },
    {
      name: 'index.html'
    },
    {
      name: 'package.json'
    }

  ]
}



// recursive component = one prop is conditionally existing, if true, then do the same mapping again.
const Entry = ({ depth, filename, filechildren }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {filechildren ? <button onClick={()=>setOpen(!open)} style={{ margin:0, padding:0, cursor:'pointer',width:'20px'}}>{open ? ' - '  : ' + '}</button> : null}
      {filename}
      
      {filechildren?.map((ent) => {
        return (
          <div
            key={Math.random(100)}
            style={{ marginLeft: `${(depth + 1) * 20}px` }}
          >
            {open && (
              <Entry
                filename={ent.name}
                filechildren={ent.children}
                depth={depth + 1}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};


function App() {
  // let depth = 0;
  
  return (
    <div>
      {fileTree.children.map((ent => {
        return (
          <div key={Math.random(100)}>
            <Entry
              filename={ent.name}
              filechildren={ent.children}
              depth={0}
              
            />
          </div>
        );
      }))}
   </div>
  )
}




export default App
