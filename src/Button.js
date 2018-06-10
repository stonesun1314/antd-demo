
import React from 'react'
// eslint-disable-next-line
import {Button,Radio,Icon} from 'antd'      

class ButtonSet extends React.Component{

    state = {
        size:'large',
    }
    
    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }

    render(){
        const size = this.state.size;
        return (
            <div>
                <Radio.Group value={size} onChange={this.handleSizeChange} >
                    <Radio.Button value = 'large' ></Radio.Button>
                    <Radio.Button value = 'default' ></Radio.Button>
                    <Radio.Button value = 'small' ></Radio.Button>
                </Radio.Group>
                <br /><br />
                <Button type = "primary" size = {size} > Primary</Button>
                <Button size={size}>Normal</Button>
                <Button type="dashed" size={size}>Dashed</Button>
                <Button type="danger" size={size}>Danger</Button>
                <br />
                <Button type="primary" shape="circle" icon="download" size={size} />
                <Button type="primary" icon="download" size={size}>Download</Button>
                <br />
                <Button.Group size = {size} >
                    <Button type="primary">
                        <Icon type = "left"></Icon>
                        Backward
                    </Button>
                    <Button type="primary">
                        <Icon type = "right"></Icon>
                        Forward
                    </Button>
                </Button.Group>
                <br />
                <Button href="http://example.com">Hello world!</Button>
            </div>
        )
    }


    // state = {
    //     loading: false,
    //     iconLoading: false,
    //   }
    
    //   enterLoading = () => {
    //     this.setState({ loading: true });
    //   }
    
    //   enterIconLoading = () => {
    //     this.setState({ iconLoading: true });
    //   }
    
    //   render() {
    //     return (
    //       <span>
    //         <Button type="primary" loading>
    //           Loading
    //         </Button>
    //         <Button type="primary" size="small" loading>
    //           Loading
    //         </Button>
    //         <br />
    //         <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
    //           Click me!
    //         </Button>
    //         <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
    //           Click me!
    //         </Button>
    //         <br />
    //         <Button shape="circle" loading />
    //         <Button type="primary" shape="circle" loading />
    //       </span>
    //     );
    //   }

    // render(){

    //     return (
    //       <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
    //         <Button type="primary">Primary</Button>
    //         <Button >Default</Button>
    //         <Button type="dashed">Dashed</Button>
    //         <Button type="danger">Danger</Button>
    //       </div>
    //     )

    // }
}

export default ButtonSet