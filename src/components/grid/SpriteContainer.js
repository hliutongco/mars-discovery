import React, {Component, Fragment} from 'react';
import Bot from './Bot';
import Node from './Node';

export default class SpriteContainer extends Component {
  state = {
    bots: [],
    nodes: []
  }

  componentDidMount(){
    setInterval(() => {
      fetch('http://headlight-tournament-2.herokuapp.com/bots')
      .then(response => response.json())
      .then(data => this.setState({bots: data["Bots"]}))

      fetch('http://headlight-tournament-2.herokuapp.com/nodes')
      .then(response => response.json())
      .then(data => this.setState({nodes: data["Nodes"]}))
    }, 1000)
  }

  renderBots = () => {
    return this.state.bots.map((bot) => {
      return <Bot key={bot.Id} bot={bot}/>
    })
  }

  renderNodes = () => {
    return this.state.nodes.map((node) => {
      return <Node key={node.Id} node={node}/>
    })
  }

  render(){
    return (
      <div id="sprite-container">
        <div id="sprite-inner">
          {this.renderBots()}
          {this.renderNodes()}
        </div>
      </div>
    )
  }
}
