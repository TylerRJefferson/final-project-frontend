import { Button, CardBody, CardFooter, DateInput, 
  Form, FormField, Layer, TextInput } from "grommet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MaintenanceLog() {
  const [value, setValue] = useState({maint_type:"", maint_date:"", maint_miles:""});
  const navigate = useNavigate();
  return (
    <Layer responsive={false} modal={true} animation="slide" background="light-4"
      onClickOutside={() => navigate("/")} onEsc={() => navigate("/")}>
      <Form value={value} onChange={nextValue => setValue(nextValue)}>
        <CardBody pad="small">
          <FormField required label="Maintenance Completed *" name="maint_type" htmlFor="text-input-id">
            <TextInput placeholder="e.g. Oil Changed" name="maint_type" id="text-input-id"/>
          </FormField>
          <FormField label="Date Completed *" name="maint_date">
            <DateInput name="maint_date" format="mm/dd/yyyy"
              value={(new Date()).toISOString()}
              onChange={({ value }) => {}}
            />
          </FormField>
          <FormField label="Mileage When Completed" name="maint_miles" htmlFor="text-input-id">
            <TextInput placeholder="e.g. 52,000 miles" name="maint_miles" id="text-input-id"/>
          </FormField>
        </CardBody>
        <CardFooter direction="row" gap="medium" alignSelf="center" pad="small">
          <Button secondary label="Back" onClick={() => navigate("/")}/>
          <Button primary type="submit" label="Submit"/>
        </CardFooter>
      </Form>
    </Layer>
  )
}