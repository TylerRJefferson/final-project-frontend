import { Button, CardBody, CardFooter, DateInput, 
  Form, FormField, Layer, TextInput } from "grommet";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MaintenanceLog() {
  const [value, setValue] = useState({maint_type:"", maint_date:(new Date()).toISOString(), maint_miles:""});
  const navigate = useNavigate();
  const {vehicle_id} = useParams();
  
  function handleSubmit(e) {
    e.preventDefault();
    let updatedVehicle = value
    fetch(process.env.REACT_APP_ENDPOINT + "/" + vehicle_id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedVehicle)
    })
    .then((res) => res.json())
    .then(() => navigate("/"))
    .catch(alert)
  }

  return (
    <Layer responsive={false} modal={true} animation="slide" background="light-3"
      onEsc={() => navigate("/")}>
      <Form value={value} onChange={nextValue => setValue(nextValue)} onSubmit={handleSubmit}>
        <CardBody pad="small">
          <FormField required label="Maintenance Completed *" name="maint_type" htmlFor="text-input-id">
            <TextInput placeholder="e.g. Oil Changed" name="maint_type" id="text-input-id"/>
          </FormField>
          <FormField label="Date Completed *" name="maint_date">
            <DateInput name="maint_date" format="mm/dd/yyyy"
              calendarProps={{margin:{right:"small", left:"small", top:"xsmall", bottom:"xsmall"},
                size:"medium", alignSelf:"center", fill:true, daysOfWeek:true, showAdjacentDays:"trim"}}
                value={value.maint_date}
              // onChange={({ value }) => {}}
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