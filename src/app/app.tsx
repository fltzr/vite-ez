import {
	Button,
	ColumnLayout,
	Container,
	ContentLayout,
} from "@cloudscape-design/components";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
	selectNavigationHidden,
	selectNavigationOpen,
	selectToolsHidden,
	selectToolsOpen,
	setNavigationHidden,
	setNavigationOpen,
	setToolsHidden,
	setToolsOpen,
} from "@/features/layout";

export const App = () => {
	const dispatch = useAppDispatch();
	const navigationHidden = useAppSelector(selectNavigationHidden);
	const navigationOpen = useAppSelector(selectNavigationOpen);
	const toolsHidden = useAppSelector(selectToolsHidden);
	const toolsOpen = useAppSelector(selectToolsOpen);

	return (
		<ContentLayout disableOverlap>
			<Container>
				<ColumnLayout columns={2} variant="text-grid">
					<div>
						Navigation Hidden: {navigationHidden ? "true" : "false"}
						<br />
						Navigation Open: {navigationOpen ? "true" : "false"}
						<br />
						Tools Hidden: {toolsHidden ? "true" : "false"}
						<br />
						Tools Open: {toolsOpen ? "true" : "false"}
					</div>
					<div>
						<Button
							variant="primary"
							onClick={() => dispatch(setNavigationOpen(!navigationOpen))}
						>
							Toggle Navigation
						</Button>
						<Button
							variant="primary"
							onClick={() => dispatch(setNavigationHidden(!navigationHidden))}
						>
							Hide Navigation
						</Button>
						<Button
							variant="primary"
							onClick={() => dispatch(setToolsOpen(!toolsOpen))}
						>
							Toggle Tools
						</Button>
						<Button
							variant="primary"
							onClick={() => dispatch(setToolsHidden(!toolsHidden))}
						>
							Hide Tools
						</Button>
					</div>
				</ColumnLayout>
			</Container>
		</ContentLayout>
	);
};
