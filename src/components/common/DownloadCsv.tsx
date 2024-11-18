import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import React, { ReactNode } from "react";
import { CSVLink } from "react-csv";

import { Button } from "./Button";

type DownloadCsvProps = {
  header?: {
    label: string;
    key: string;
  }[];
  data: any;
  name: string;
  children?: ReactNode;
};

function flattenObjectKeys(obj: any, parentKey = "") {
  let keys: any = [];
  for (const key in obj) {
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      keys = keys.concat(flattenObjectKeys(obj[key], `${parentKey}${key}.`));
    } else if (Array.isArray(obj[key])) {
      keys.push({
        key: `${parentKey}${key}`,
        label: `Array (${parentKey}${key})`,
      });
      // Optionally, flatten array elements
      obj[key].forEach((item: any, index: any) => {
        if (typeof item === "object" && item !== null) {
          keys = keys.concat(
            flattenObjectKeys(item, `${parentKey}${key}[${index}].`),
          );
        } else {
          keys.push({
            key: `${parentKey}${key}[${index}]`,
            label: `${parentKey}${key}[${index}]`,
          });
        }
      });
    } else {
      keys.push({
        key: `${parentKey}${key}`,
        label: `${parentKey}${key}`.replaceAll(".", " ").toLocaleUpperCase(),
      });
    }
  }
  return keys;
}

function DownloadCsv({ header, data, children, name }: DownloadCsvProps) {
  return (
    <CSVLink
      data={data}
      filename={`${String(name)}.csv`}
      headers={header || flattenObjectKeys(data[0])}
    >
      {children || (
        <Button kinds="secondary">
          <ArrowDownTrayIcon className="h-4 w-4" />
        </Button>
      )}
    </CSVLink>
  );
}

export default DownloadCsv;
