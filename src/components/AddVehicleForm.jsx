import { Box, Button, FileInput, Form, FormField, TextInput } from "grommet";
import { useState } from "react";


export default function AddVehicleForm() {
  const [value, setValue] = useState({});
  return (
    <Form
      value={value}
      onChange={nextValue => setValue(nextValue)}
      onReset={() => setValue({})}
      onSubmit={({ value }) => {}}
    >
      <FileInput
        name="file"
        onChange={event => {
          const fileList = event.target.files;
          for (let i = 0; i < fileList.length; i += 1) {
          const file = fileList[i];
          }
        }}
      />
      <FormField name="year" htmlFor="text-input-id" label="Year">
        <TextInput id="text-input-id" name="year" />
      </FormField>
      <FormField name="make" htmlFor="text-input-id" label="Make">
        <TextInput id="text-input-id" name="make" />
      </FormField>
      <FormField name="model" htmlFor="text-input-id" label="Model">
        <TextInput id="text-input-id" name="model" />
      </FormField>
      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Submit" />
        <Button type="reset" label="Reset" />
      </Box>
    </Form>
  );
}