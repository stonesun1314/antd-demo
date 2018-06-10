
import React from 'react'
import { Form,Icon,Input,Button} from 'antd'


const FormItem = Form.Item

class FormDemo extends React.Component{

    componentDidMount(){
        console.log('111');
        console.log(this.props.form);
        this.props.form.validateFields();
    }
    
    render(){
        console.log(this.props.form);
        
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        return (
            <Form layout="vertical" onSubmit = {this.handleSubmit}  >
                <Form.Item>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                 })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
                </Form.Item>
                <Form.Item label= 'age' ></Form.Item>

            </Form>
        )
    }
}

const WrappedFormDemo = Form.create()(FormDemo);

export default WrappedFormDemo