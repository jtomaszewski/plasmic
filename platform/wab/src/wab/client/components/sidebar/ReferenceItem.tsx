// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import * as React from "react";
import {
  DefaultReferenceItemProps,
  PlasmicReferenceItem,
} from "../../plasmic/plasmic_kit_find_references_modal/PlasmicReferenceItem";

interface ReferenceItemProps extends DefaultReferenceItemProps {
  onClick?: () => void;
  menu?: () => React.ReactElement;
}

function ReferenceItem_(
  { menu, ...props }: ReferenceItemProps,
  ref: HTMLElementRefOf<"div">
) {
  return (
    <PlasmicReferenceItem
      listItem={{
        menu,
      }}
      root={{ ref }}
      {...props}
    />
  );
}

const ReferenceItem = React.forwardRef(ReferenceItem_);
export default ReferenceItem;
