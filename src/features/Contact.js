import React from 'react';
import {Box,Form,FormField,Text,Button,TextArea} from 'grommet';

const FormFieldLabel = props => {
    const { required, label, ...rest } = props;
    
    return (
      <FormField
        label={
          required ? (
            <Box direction="row">
              <Text>{label}</Text>
              <Text color="status-critical">*</Text>
            </Box>
          ) : (
            label
          )
        }
        required={required}
        {...rest}
      />
    );
  };
  

export const Contact= () => {
    const [comments, setComments] = React.useState('');
    return(
        <Box align="center" pad="large">
        <Form>
          <FormFieldLabel name="firstName" label="FirstName" required />
          <FormFieldLabel name="LastName" label="LastName" required />
          <FormFieldLabel name="email" label="Email" />
          <FormField label="Comments" name="comments">
              <TextArea
                name="comments"
                value={comments}
                onChange={event => setComments(event.target.value)}
              />
            </FormField>
          <Button type="submit" label="Submit" primary />
          <Text margin={{ left: 'small' }} size="small" color="status-critical">
            * Required Field
          </Text>
        </Form>
      </Box>
    )

}
export default Contact;