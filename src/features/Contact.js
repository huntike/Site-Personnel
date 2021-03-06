import React from 'react';
import {Box,Form,FormField,Text,Button,TextArea,List,Grid} from 'grommet';


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
  const locations = [

    'mail : logan.lelay@orange.fr',
    'téléphone : 06 76 05 57 07',
    'gitHub: Huntike',
    'linkedin: Logan Le Lay ',
    

  ];
  

  

export const Contact= () => {
    const [comments, setComments] = React.useState('');
    return(
      <Box height="xlarge">

          <Box  direction="row" height="large" wrap="true" justify="center" align="center" pad="large" >
          <Box flex="grow"direction="row" width="xmedium" height="xmedium"justify="center" align="center" background="light-1"  >
            <Form  width="large" >
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
              <Button color="#F27121" type="submit" label="Submit" primary />
              <Text margin={{ left: 'small' }} size="small" color="status-critical">
                * Required Field
              </Text>
            </Form>
            </Box>
            <Box flex="grow"direction="row" width="xmedium" height="xmedium"justify="center" align="center" background="light-1"  >
            <List data={locations} >

          </List>
          </Box>

          </Box>
          

          
        

    </Box>
    )

}
export default Contact;