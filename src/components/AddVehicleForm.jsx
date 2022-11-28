import { Button, Card, CardBody, CardFooter, 
  FileInput, Form, FormField, TextInput } from "grommet";
import { useState } from "react";

export default function AddVehicleForm() {
  const [value, setValue] = useState({});
  const [filebase64, setFileBase64] = useState("")

  function formSubmit(e) {
    e.preventDefault();
    // Submit your form with the filebase64 as one of your fields
    value.filebase64 = filebase64
    console.log(value)
    let newVehicleObj = value
    // TO DO: send post to create vehicle endpoint, then nav to card component for new vehicle
    fetch("http://localhost:4040", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newVehicleObj)
    })
      .then(results => results.json())
      .then((data) => {
        let vehicleId = data.insertedId
        // to do: either pass vehicleID to new card
        // or pass values to new card
        // to do: navigate to card
      })
      .catch(alert)
  }

  function convertFile(files) {
    if (files) {
      const fileRef = files[0] || ""
      const fileType = fileRef.type || ""
      if (fileType) {

        console.log("This file upload is of type:", fileType)
        const reader = new FileReader()
        reader.readAsBinaryString(fileRef)
        reader.onload = (ev) => {
          // convert it to base64
          setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`)
        }
      }
      else {
        setFileBase64("")
      }
    }
  }

  return (
    <Card background="light-2">
      <CardBody pad="medium">
        <Form
          value={value}
          onChange={nextValue => setValue(nextValue)}
          onReset={() => setValue({}, setFileBase64(""))}
          onSubmit={formSubmit}
        >
          {(filebase64.indexOf("image/") > -1) &&
            <div style={{
              width: 250, 
              height: 140, 
              backgroundImage:`url(${filebase64})`, 
              backgroundPosition: "center center", 
              backgroundRepeat: "no-repeat", 
              backgroundSize: "contain",
              marginBottom:10
            }} 
            />
          }
          <FileInput
            required
            name="file"
            onChange={(e) => convertFile(e.target.files)}
          />
          <FormField required name="year" htmlFor="text-input-id" label="Year">
            <TextInput id="text-input-id" name="year" />
          </FormField>
          <FormField required name="make" htmlFor="text-input-id" label="Make">
            <TextInput id="text-input-id" name="make" />
          </FormField>
          <FormField required name="model" htmlFor="text-input-id" label="Model">
            <TextInput id="text-input-id" name="model" />
          </FormField>
          <CardFooter direction="row" gap="medium" alignSelf="center" >
            <Button type="submit" primary label="Submit" />
            <Button type="reset" label="Reset" />
          </CardFooter>
        </Form>
      </CardBody>
    </Card>
  );
}