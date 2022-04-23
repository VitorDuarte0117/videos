import React from "react";
import SearchBar from "../components/SearchBar";
import youtube from "../api/YouTube";
import VideoList from "./VideoList";
class App extends React.Component {
    state = { videos: [] };
    onTextSubmit = async (text) => {
        const response = await youtube.get("/search", {
            params: { q: text },
        });

        this.setState({ videos: response.data.items });
    };
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTextSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}
export default App;
