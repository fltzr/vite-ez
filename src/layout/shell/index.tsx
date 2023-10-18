import { PropsWithChildren } from "react";
import AppLayout from "@cloudscape-design/components/app-layout";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
	selectIsNavigationOpen,
	selectIsToolsHidden,
	selectIsToolsOpen,
	selectisNavigationHidden,
	setNavigationOpen,
	setToolsOpen,
} from "../layout-slice";

export const Shell = ({ children }: PropsWithChildren) => {
	const navigationOpen = useAppSelector(selectIsNavigationOpen);
	const navigationHidden = useAppSelector(selectisNavigationHidden);
	const toolsOpen = useAppSelector(selectIsToolsOpen);
	const toolsHidden = useAppSelector(selectIsToolsHidden);

	const dispatch = useAppDispatch();

	return (
		<AppLayout
			content={children}
			navigationOpen={navigationOpen}
			onNavigationChange={() => dispatch(setNavigationOpen(!navigationOpen))}
			navigationHide={navigationHidden}
			toolsOpen={toolsOpen}
			onToolsChange={() => dispatch(setToolsOpen(!toolsOpen))}
			toolsHide={toolsHidden}
		/>
	);
};
