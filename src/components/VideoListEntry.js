import React from 'react';

class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.video.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div
            className="video-list-entry-title"
            onClick={()=> {
              console.log('i am here', this.props.video.id.videoId);
              console.log('this video', this.props.video)
              window.open(`https://www.youtube.com/embed/${this.props.video.id.videoId}`, "_blank")}}

          >
            {this.props.video.snippet.title}
          </div>
          <div className="video-list-entry-detail">{this.props.video.snippet.description}</div>
        </div>
      </div>
    );
  }
}
// onClick={() => this.props.handleVideoListEntryTitleClick(video)}
export default VideoListEntry;
