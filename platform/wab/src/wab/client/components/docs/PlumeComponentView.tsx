import { observer } from "mobx-react-lite";
import * as React from "react";
import { toVarName } from "../../../shared/codegen/util";
import { wabToTsType } from "../../../shared/core/model-util";
import {
  getPlumeDocsPlugin,
  PlumeDocsProp,
} from "../../../shared/plume/plume-registry";
import { getTplSlots } from "../../../shared/SlotUtils";
import { PlasmicPlumeComponentView } from "../../plasmic/plasmic_kit_docs_portal/PlasmicPlumeComponentView";
import CodePreviewSnippet from "./CodePreviewSnippet";
import { DocsPortalCtx } from "./DocsPortalCtx";
import DocsPropsTableRow from "./DocsPropsTableRow";
import { typeString } from "./VariantProp";

const PlumeComponentView = observer(function PlumeComponentView(props: {
  docsCtx: DocsPortalCtx;
}) {
  const { docsCtx } = props;
  const component = docsCtx.getFocusedComponent();
  const plugin = getPlumeDocsPlugin(component);

  const codePropNames = new Set(plugin?.codeProps?.map((n) => n.name));

  const variantGroups = component.variantGroups.filter(
    (vg) =>
      vg.variants.length > 0 &&
      !codePropNames.has(toVarName(vg.param.variable.name))
  );

  const slots = getTplSlots(component).filter(
    (s) => !codePropNames.has(toVarName(s.param.variable.name))
  );

  const otherProps = component.params.filter(
    (p) =>
      !slots.some((s) => s.param === p) &&
      !component.variantGroups.some((g) => g.param === p) &&
      !codePropNames.has(toVarName(p.variable.name))
  );

  const customProps: PlumeDocsProp[] = [
    ...variantGroups.map((vg) => ({
      name: toVarName(vg.param.variable.name),
      info: "Variant group.",
      type: typeString(vg),
    })),
    ...slots.map((s) => ({
      name: toVarName(s.param.variable.name),
      info: "Slot.",
      type: "ReactNode",
    })),
    ...otherProps.map((p) => ({
      name: toVarName(p.variable.name),
      info: "Prop.",
      type: wabToTsType(p.type, true),
    })),
  ];

  const allPropNames = new Set(
    component.params.map((p) => toVarName(p.variable.name))
  );

  return (
    <PlasmicPlumeComponentView
      title={component.name}
      info={plugin?.docsInfo}
      examples={
        plugin?.examples?.map((example) => (
          <CodePreviewSnippet
            key={`${docsCtx.getCodegenType()}_${example.title}`}
            component={component}
            docsCtx={docsCtx}
            example={example}
          />
        )) || []
      }
      baseProps={{
        rows: (plugin?.codeProps || [])
          .filter((prop) => allPropNames.has(prop.name))
          .map((prop) => (
            <DocsPropsTableRow
              key={prop.name}
              prop={prop}
              site={docsCtx.studioCtx.site}
            />
          )),
      }}
      hideCustomProps={!customProps.length}
      customProps={{
        rows: customProps.map((prop) => (
          <DocsPropsTableRow
            key={prop.name}
            prop={prop}
            site={docsCtx.studioCtx.site}
          />
        )),
      }}
    />
  );
});

export default PlumeComponentView;
