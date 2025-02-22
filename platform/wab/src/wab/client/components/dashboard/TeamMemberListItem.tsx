import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Menu, Tooltip } from "antd";
import moment from "moment";
import * as React from "react";
import TextWithInfo from "../../../../TextWithInfo";
import {
  ApiFeatureTier,
  ApiPermission,
  TeamMember,
} from "../../../shared/ApiSchema";
import { fullName, getUserEmail } from "../../../shared/ApiSchemaUtil";
import { GrantableAccessLevel } from "../../../shared/EntUtil";
import { useAppCtx } from "../../contexts/AppContexts";
import {
  DefaultTeamMemberListItemProps,
  PlasmicTeamMemberListItem,
} from "../../plasmic/plasmic_kit_dashboard/PlasmicTeamMemberListItem";
import { Matcher } from "../view-common";
import { ClickStopper } from "../widgets";
import {
  contentCreatorTooltip,
  contentRoleHelp,
  designerRoleHelp,
  designerTooltip,
  developerTooltip,
  viewerTooltip,
} from "../widgets/plasmic/PermissionItem";
import Select from "../widgets/Select";

interface TeamMemberListItemProps extends DefaultTeamMemberListItemProps {
  user: TeamMember;
  matcher: Matcher;
  perm?: ApiPermission;
  tier: ApiFeatureTier;
  changeRole: (email: string, role?: GrantableAccessLevel) => Promise<void>;
  removeUser: (email: string) => Promise<void>;
  disabled?: boolean;
}

function TeamMemberListItem_(
  props: TeamMemberListItemProps,
  ref: HTMLElementRefOf<"div">
) {
  const {
    user,
    matcher,
    perm,
    tier,
    changeRole,
    removeUser,
    disabled,
    ...rest
  } = props;
  const appCtx = useAppCtx();
  const roleValue =
    !!perm &&
    ["owner", "editor", "designer", "content", "viewer"].includes(
      perm.accessLevel
    )
      ? perm.accessLevel
      : // viewer and commenter are currently being conflated
      !!perm && perm.accessLevel === "commenter"
      ? "viewer"
      : "none";
  const noneDesc =
    "'None' means that the user has no team-wide permissions, but may have individual workspace or project permissions. Users with `None` will still count towards your seat count.";
  return (
    <PlasmicTeamMemberListItem
      root={{ ref }}
      {...rest}
      name={matcher.boldSnippets(
        user.type === "user" ? fullName(user) : user.email
      )}
      email={matcher.boldSnippets(
        user.type === "user" ? getUserEmail(user) : user.email
      )}
      lastActive={
        user.type === "user" && user.lastActive
          ? moment(user.lastActive).fromNow()
          : "never"
      }
      numProjects={`${
        user.type === "user" && user.projectsCreated ? user.projectsCreated : 0
      }`}
      role={{
        value: roleValue,
        isDisabled: disabled || perm?.accessLevel === "owner",
        onChange: async (e) => {
          if (e !== roleValue && e !== null) {
            if (e === "none") {
              await changeRole(user.email);
            } else if (e === "viewer") {
              await changeRole(user.email, "commenter");
            } else if (e === "editor" || e === "designer" || e === "content") {
              await changeRole(user.email, e);
            }
          }
        },
        children: [
          <Select.Option
            style={{
              display: "none",
            }}
            value="owner"
          >
            Owner
          </Select.Option>,
          <Select.Option value="editor">{developerTooltip}</Select.Option>,
          <Select.Option
            value="content"
            style={{
              display: appCtx.appConfig.contentOnly ? undefined : "none",
            }}
            isDisabled={!tier.contentRole}
          >
            {tier.contentRole ? (
              contentCreatorTooltip
            ) : (
              <TextWithInfo tooltip={contentRoleHelp}>
                {contentCreatorTooltip}
              </TextWithInfo>
            )}
          </Select.Option>,
          <Select.Option
            value="designer"
            style={{
              display: appCtx.appConfig.contentOnly ? undefined : "none",
            }}
            isDisabled={!tier.designerRole}
          >
            {tier.designerRole ? (
              designerTooltip
            ) : (
              <TextWithInfo tooltip={designerRoleHelp}>
                {designerTooltip}
              </TextWithInfo>
            )}
          </Select.Option>,
          <Select.Option value="viewer">{viewerTooltip}</Select.Option>,
          <Select.Option
            style={{
              display: "none",
            }}
            value="none"
          >
            None
          </Select.Option>,
        ],
      }}
      roleHelp={{
        wrap: (node) =>
          roleValue === "none" ? (
            <Tooltip title={noneDesc}>{node}</Tooltip>
          ) : null,
      }}
      menuButton={{
        wrap: (node) => (
          <ClickStopper preventDefault>{disabled ? null : node}</ClickStopper>
        ),
        props: {
          menu: (
            <Menu>
              <Menu.Item
                onClick={async () => {
                  await removeUser(user.email);
                }}
              >
                <strong>Remove</strong> member
              </Menu.Item>
            </Menu>
          ),
          style: {
            visibility:
              !!perm && perm.accessLevel === "owner" ? "hidden" : "visible",
          },
        },
      }}
    />
  );
}

const TeamMemberListItem = React.forwardRef(TeamMemberListItem_);
export default TeamMemberListItem;
