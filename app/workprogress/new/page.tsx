"use client";

import { Box, Button, Flex, Text, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const NewWorkItemPage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Work Item">
        <TextField.Slot />
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Box as="div" className="border rounded px-2 ">
        <Flex gap="3" align="center">
          <Text as="p" className="text-gray-500 text-sm">
            Due date
          </Text>
          <Datetime
            value={new Date()}
            className="appreance-none py-3 px-2 text-gray-500 text-sm"
          />
        </Flex>
      </Box>
      <TextArea placeholder="Note" />
      <Button>Submit New Work Progress</Button>
    </div>
  );
};

export default NewWorkItemPage;
