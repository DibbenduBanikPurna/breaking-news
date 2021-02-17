import React from 'react';
import {Card, Button} from 'react-bootstrap'
const News = (props) => {
    const {author,description,title}=props.news
    return (
        
            <Card>
  <Card.Header>{author}</Card.Header>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
     {description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        
    );
};

export default News;