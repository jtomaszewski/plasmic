// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: 0LQGzuFK6d

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import ListItem from "../../components/ListItem"; // plasmic-import: v31d9_ANqk/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import projectcss from "../PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import sty from "./PlasmicGeneralTokenControl.module.css"; // plasmic-import: 0LQGzuFK6d/css

import ComponentIcon from "../plasmic_kit/PlasmicIcon__Component"; // plasmic-import: nNWEF4jI3s5DI/icon
import EyeIcon from "../plasmic_kit/PlasmicIcon__Eye"; // plasmic-import: A2FnGYgDh4e3U/icon

createPlasmicElementProxy;

export type PlasmicGeneralTokenControl__VariantMembers = {
  isDraggable: "isDraggable";
  isDragging: "isDragging";
  showIcon: "showIcon";
};
export type PlasmicGeneralTokenControl__VariantsArgs = {
  isDraggable?: SingleBooleanChoiceArg<"isDraggable">;
  isDragging?: SingleBooleanChoiceArg<"isDragging">;
  showIcon?: SingleBooleanChoiceArg<"showIcon">;
};
type VariantPropType = keyof PlasmicGeneralTokenControl__VariantsArgs;
export const PlasmicGeneralTokenControl__VariantProps =
  new Array<VariantPropType>("isDraggable", "isDragging", "showIcon");

export type PlasmicGeneralTokenControl__ArgsType = {
  children?: React.ReactNode;
  value?: React.ReactNode;
};
type ArgPropType = keyof PlasmicGeneralTokenControl__ArgsType;
export const PlasmicGeneralTokenControl__ArgProps = new Array<ArgPropType>(
  "children",
  "value"
);

export type PlasmicGeneralTokenControl__OverridesType = {
  root?: p.Flex<"div">;
  listItem?: p.Flex<typeof ListItem>;
  freeBox?: p.Flex<"div">;
};

export interface DefaultGeneralTokenControlProps {
  children?: React.ReactNode;
  value?: React.ReactNode;
  isDraggable?: SingleBooleanChoiceArg<"isDraggable">;
  isDragging?: SingleBooleanChoiceArg<"isDragging">;
  showIcon?: SingleBooleanChoiceArg<"showIcon">;
  className?: string;
}

const $$ = {};

function PlasmicGeneralTokenControl__RenderFunc(props: {
  variants: PlasmicGeneralTokenControl__VariantsArgs;
  args: PlasmicGeneralTokenControl__ArgsType;
  overrides: PlasmicGeneralTokenControl__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "isDraggable",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDraggable,
      },
      {
        path: "isDragging",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDragging,
      },
      {
        path: "showIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showIcon,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover,
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_new_design_system_former_style_controls_css.plasmic_tokens,
        sty.root
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <ListItem
        data-plasmic-name={"listItem"}
        data-plasmic-override={overrides.listItem}
        actions={
          <EyeIcon
            className={classNames(projectcss.all, sty.svg__rzv74)}
            role={"img"}
          />
        }
        addendum={p.renderPlasmicSlot({
          defaultContents: "Blahblah",
          value: args.value,
        })}
        className={classNames("__wab_instance", sty.listItem, {
          [sty.listItemisDraggable]: hasVariant(
            $state,
            "isDraggable",
            "isDraggable"
          ),
          [sty.listItemisDragging]: hasVariant(
            $state,
            "isDragging",
            "isDragging"
          ),
          [sty.listItemshowIcon]: hasVariant($state, "showIcon", "showIcon"),
        })}
        hasMenu={true}
        hideIcon={hasVariant($state, "showIcon", "showIcon") ? undefined : true}
        icon={
          <ComponentIcon
            className={classNames(projectcss.all, sty.svg__kHmZ, {
              [sty.svgshowIcon__kHmZPINtg]: hasVariant(
                $state,
                "showIcon",
                "showIcon"
              ),
            })}
            role={"img"}
          />
        }
        isDraggable={
          hasVariant($state, "isDraggable", "isDraggable") ? true : undefined
        }
        isDragging={
          hasVariant($state, "isDragging", "isDragging") ? true : undefined
        }
        showAddendums={triggers.hover_root ? true : true}
      >
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox, {
            [sty.freeBoxisDragging]: hasVariant(
              $state,
              "isDragging",
              "isDragging"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "small small",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildrenisDragging]: hasVariant(
                $state,
                "isDragging",
                "isDragging"
              ),
            }),
          })}
        </div>
      </ListItem>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "listItem", "freeBox"],
  listItem: ["listItem", "freeBox"],
  freeBox: ["freeBox"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  listItem: typeof ListItem;
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicGeneralTokenControl__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGeneralTokenControl__VariantsArgs;
    args?: PlasmicGeneralTokenControl__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicGeneralTokenControl__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicGeneralTokenControl__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicGeneralTokenControl__ArgProps,
          internalVariantPropNames: PlasmicGeneralTokenControl__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicGeneralTokenControl__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGeneralTokenControl";
  } else {
    func.displayName = `PlasmicGeneralTokenControl.${nodeName}`;
  }
  return func;
}

export const PlasmicGeneralTokenControl = Object.assign(
  // Top-level PlasmicGeneralTokenControl renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    listItem: makeNodeComponent("listItem"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicGeneralTokenControl
    internalVariantProps: PlasmicGeneralTokenControl__VariantProps,
    internalArgProps: PlasmicGeneralTokenControl__ArgProps,
  }
);

export default PlasmicGeneralTokenControl;
/* prettier-ignore-end */
