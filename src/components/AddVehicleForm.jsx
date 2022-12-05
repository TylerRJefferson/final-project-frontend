import { Button, Card, CardBody, CardFooter, 
  FileInput, Form, FormField, TextInput } from "grommet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddVehicleForm() {
  const [value, setValue] = useState({year:"",make:"",model:"",oil_specs:""});
  const [filebase64, setFileBase64] = useState("");
  const navigate = useNavigate();

  function formSubmit(e) {
    e.preventDefault();
    // Submit your form with the filebase64 as one of your fields
    value.filebase64 = filebase64
    value.logs = []
    console.log(value)
    let newVehicleObj = value
    fetch(process.env.REACT_APP_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newVehicleObj)
    })
      .then(() => navigate("/"))
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
    <Card style={{margin:'auto'}} background="light-4">
      <CardBody pad="medium">
        <Form
          value={value}
          onChange={nextValue => setValue(nextValue)}
          onReset={() => setValue(
            {year:"",make:"",model:"",oil_specs:""},
            setFileBase64("")
          )}
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
            messages={{dropPrompt: "Add Vehicle Photo *"}}
            name="file"
            onChange={(e) => convertFile(e.target.files)}
          />
          <FormField required name="year" htmlFor="text-input-id" label="Year *">
            <TextInput id="text-input-id" name="year" />
          </FormField>
          <FormField required name="make" htmlFor="text-input-id" label="Make *">
            <TextInput id="text-input-id" name="make" />
          </FormField>
          <FormField required name="model" htmlFor="text-input-id" label="Model *">
            <TextInput id="text-input-id" name="model" />
          </FormField>
          <FormField name="oil_specs" htmlFor="text-input-id" label="Oil / Filter Specs">
            <TextInput id="text-input-id" name="oil_specs" />
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