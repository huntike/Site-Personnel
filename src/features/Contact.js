import React from 'react';
import {Box,Form,FormField,Text,Button,TextArea,List,Grid} from 'grommet';
import { Gremlin } from 'grommet-icons';

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
    'Boise',
    'Fort Collins',
    'Los Gatos',
    'Palo Alto',
    'San Francisco',
  ];
  
  const data = [];
  for (let i = 0; i < 5; i += 1) {
    data.push({
      entry: `entry-${i + 1}`,
      location: locations[i % locations.length],
    });
  }
  

export const Contact= () => {
    const [comments, setComments] = React.useState('');
    return(
      <Box>
        <Grid 
        rows={['xsmall','large']}
        columns={['xsmall','large', 'large']}
        gap="large"
        areas={[
            
            { name: 'form', start: [1, 1], end: [1, 1] },
            { name: 'info', start: [2, 1], end: [2, 1] },
            

        ]}
        >
          <Box gridArea="form" align="center" pad="large" background="light-1">
            <Form >
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
          <Box  gridArea="info" pad="large" background="light-1" >
            <List
              data={data.slice(0, 10)}
              primaryKey={item => (
                <Text size="large" weight="bold">
                  {item.entry}
                </Text>
              )}
              secondaryKey={item => (
                <Text size="small" color="dark-4">
                  {item.location}
                </Text>
              )}
            />
        </Box>
      </Grid>
    </Box>
    )

}
export default Contact;