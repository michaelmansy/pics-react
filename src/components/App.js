import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

    state = { images: [] };

    async onSearchSubmit(term){
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers : {
                Authorization: 'Client-ID b0d1b058f017913e6786a87c51a79e531d586d398072145588c4f1827dbd9ab7'
            }
        });

        console.log(this);
        
        this.setState({ images: response.data.results});
    }


    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
    
};


export default App; 