class Slider extends React.Component {
    constructor(props){
        super(props);
        this.state = { curentSlide: 0 };
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    handleNext(){
        if(this.state.curentSlide >= this.props.items.length -1 ){
            return;
        };
        this.setState(state =>({
            curentSlide: state.curentSlide + 1
        }));
    }
    handlePrev(){
        if(this.state.curentSlide <= 0){
            return;
        };
        this.setState(state =>({
            curentSlide: state.curentSlide -1
        }));
    }

    render(){
        return(
            <div className="slider">
                <button className="left-control" onClick={this.handlePrev}></button>
                <button className="right-control" onClick={this.handleNext}></button>
                <div className="item-list" style={{ 'transform': 'translate(-' + this.state.curentSlide*100+'%)' }}>
                    {this.props.items.map(item =>(
                        <div className="item" key={item.id}>
                            <img src={item.img} alt={item.text}/>
                            <h3 className='item-text'>{item.text}</h3>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const items =[
    {
        id:1,
        img:'slide.jpg',
        text:'First slide',
    },
    {
        id:2,
        img:'slide.jpg',
        text:'Second slide',
    },
    {
        id:3,
        img:'slide.jpg',
        text:'Third slide',
    },
]

ReactDOM.render(
    <Slider items = {items} />,
    document.getElementById('root')
)