//Dependencies
const React = require('react');
const Reflux = require('reflux');
const GifsStore = require('../../reflux/Gifs/GifsStore.jsx');

//Sub-components
const GifList = require('./Gif/GifList.jsx');

//Component
const App = React.createClass({
  mixins : [
    Reflux.listenTo(GifsStore, "onGifsChange")
  ],
  getInitialState : function(){
    return ({gifs : []});
  },
  onGifsChange : function(event, data){
    if(event == "showGifs"){
      this.setState({gifs : data}, function(){

      });
    }
  },
  render : function(){
    // console.log([0,Math.floor(this.state.gifs.length/4)]);
    // console.log([Math.floor(this.state.gifs.length/4), Math.floor(this.state.gifs.length/2)]);
    // console.log([Math.floor(this.state.gifs.length/2), 3*Math.floor(this.state.gifs.length/4)]);
    // console.log([3*Math.floor(this.state.gifs.length/4), this.state.gifs.length]);
    return (
      <div className="col-12">
        <GifList listID="1" gifs={this.state.gifs.slice(0,Math.floor(this.state.gifs.length/4))}></GifList>
        <GifList listID="2" gifs={this.state.gifs.slice(Math.floor(this.state.gifs.length/4), Math.floor(this.state.gifs.length/2))}></GifList>
        <GifList listID="3" gifs={this.state.gifs.slice(Math.floor(this.state.gifs.length/2), 3*Math.floor(this.state.gifs.length/4))}></GifList>
        <GifList listID="4" gifs={this.state.gifs.slice(3*Math.floor(this.state.gifs.length/4), this.state.gifs.length)}></GifList>
      </div>
    );
  }
});

module.exports = App;
