import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
    //videos.map is a array passed by the App component

    const renderedList = videos.map((video) => {
        return <VideoItem video={video} />;
    });
    return <div>{renderedList}</div>;
};
export default VideoList;
