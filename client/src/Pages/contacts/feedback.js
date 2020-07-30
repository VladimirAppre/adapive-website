import React from "react";
import {Alert} from "react-bootstrap";

const Feedback = ({email, userMessage}) => (
  <>
    {console.log(`пасхалочка для особо внимательных => ${userMessage} =)`)}
    <Alert variant='success'>
      Спасибо {email}, что вы помогаетет сервису стать лучше!
    </Alert>
  </>
)

export default Feedback;