import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
class PageContent extends Component {
    static contextType = ThemeContext;
    render() { 
        const {isDarkMode} = this.context;
        const styles ={
            backgroundColor: isDarkMode ? "black" : "aliceblue",
            height: "100vh",
            width: "100vw"
        }
        return ( 
            <div style={styles}>
                {this.props.children}
            </div>
         );
    }
}
//We are writing PageContent so that we can wrap everything else inside it 
//like  <PageContent>
//          <Navbar/>
//          <Form/>
//      </PageContent>
//and give it bgcolor and everything instead of giving css to root div
 
export default PageContent;