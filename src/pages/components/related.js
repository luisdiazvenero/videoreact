import React from 'react';
import Logo from './logo.js'
import PlaylistPersonal from './playlist-personal';
import './related.css';

function Related(props){
  return(
    <div className="Related">
      <Logo/>
        <div className="PlaylistPersonal">
          <h3 className="PlaylistPersonal-title">My Playlist</h3>
          <ol>

        {
          props.categories[0].playlist.map((item)=>{
            return (
              <PlaylistPersonal
                key={item.id}
                {...item}


              />
            )
          })
        }
      </ol>
        </div>

    </div>
  )
}

export default Related;
