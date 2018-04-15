import React, { component } from "react";
import BurgerCard from "./components/BurgerCard";
import Wrapper from "./components/Wrapper";
import ScoreTracker from "./components/ScoreTracker";
import burgers from "./burgers.json";
import "./App.css";


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


class App extends React.Component {

  state = {
    burgers,
    currentScore: 0,
    topScore: 0,
    validate: "",
    clicked: []
  }

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  }

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      validate: "Uhhhhhhhhhhhh.......Try Again!",
      clicked: []
    });
  }

  handleShuffle = () => {
    let shuffled = shuffle(burgers);
    this.setState({ friends: shuffled});
  }

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      validate: ""
    });
    if (newScore >= this.state.topScore){
      this.setState({topScore: newScore});
    } else if (newScore === 12){
      this.setState({validate: "You Win!"});
    }
    this.handleShuffle();
  }


  render() {
    return (
      
      <Wrapper>
        <ScoreTracker
          score={this.state.currentScore}
          topScore={this.state.topScore}
          validate={this.state.validate}
        />

        <div className="title">
        <h1>Bob's Burgers</h1>
        <h4>Click on each character but careful not to click on it twice!</h4>
        </div>

        <container>
          <row>
            {this.state.burgers.map(burgers =>(
              <column size="md-3 sm-6">
                <BurgerCard
                  id={burgers.id}
                  key={burgers.id}
                  image={burgers.image}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                />
              </column>
            ))}
          </row>
        </container>
      </Wrapper>
    );
  }
}

export default App;
