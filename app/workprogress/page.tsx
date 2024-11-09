import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const WorkProgressPage = () => {
  return (
    <div >
      <Button>
        <Link href="/workprogress/new">New Work Item</Link>
      </Button>
    </div>
  );
};

export default WorkProgressPage;
