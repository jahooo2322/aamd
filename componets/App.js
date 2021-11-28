class App extends React.Component{

    render(){
        return(
        <div>
             <Title name='jailson' lastname='silva'/>
             <Menu />
             <Friends friends={this.props.friends} />
         
        </div>
        )
        
        }
    
    }