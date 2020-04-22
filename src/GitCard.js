import React from 'react'
import axios from 'axios'

const CardList = (props)=>(
  <div>

    {props.profiles.map(profile=> <Card key={profile.id} {...profile}/>)}
  </div>
)
class Form extends React.Component{
  state={
    userName:""
  }
  handleSubmit= async (event) =>{
    event.preventDefault();
    const resp = await axios.get(`
      https://api.github.com/users/${this.state.userName}
      `)
    this.props.onSubmit(resp.data)
    this.setState({userName:""})
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="GitHub Name"
        value={this.state.userName}
        onChange={event =>this.setState({userName:event.target.value})}
        />
        <button> Add new Card</button>
      </form>
    )
  }
}
class Card extends React.Component{

  render(){
    const profile = this.props;
    return (
      <div>
        <div>
          <div className="info">
          <h3 className="name">{profile.name}</h3>
          <p className="company"> {profile.company}</p>
          </div>
        </div>
      </div>
    )
  }
}

class GitApp extends React.Component{
  state={
    profiles:[]
  }
  addNewProfile =(profileData)=>{
    this.setState(prevState=>({
      profiles:[...prevState.profiles, profileData]
    }))
  }
  render(){
    return (
      <div>
        <div>
          {this.props.title}
        </div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}
export default GitApp
