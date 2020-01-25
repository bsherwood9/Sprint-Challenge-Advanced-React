import React from "react";

class PlayerList extends React.Component {
  constructor() {
    super();
    this.state = {
      playerData: [],
      playerName: [],
      searches: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(data => this.setState({ playerData: data }))
      .then(() => {
        const names = this.state.playerData.map(player => player.name);
        const numsearches = this.state.playerData.map(
          player => player.searches
        );
        this.setState({
          playerName: names,
          searches: numsearches
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.state.playerData);
    console.log("player name", this.state.playerName);
    console.log("player searches", this.state.searches);
    return (
      <div>
        <h1 data-testid="title">Player List</h1>
        {this.state.playerData.map(player => (
          <div key={player.id}>
            <h2 data-testid="playerName">{player.name}</h2>
            <h3>{player.searches}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default PlayerList;
