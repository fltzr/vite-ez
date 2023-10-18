import { RootState } from "@/app/store";
import { BreadcrumbGroupProps } from "@cloudscape-design/components/breadcrumb-group";
import { SideNavigationProps } from "@cloudscape-design/components/side-navigation";
import { createSlice } from "@reduxjs/toolkit";

export type LayoutState = {
	activeHref?: string;
	pageTitle?: string;
	breadcrumbs?: BreadcrumbGroupProps.Item[];
	navigationItems?: SideNavigationProps["items"];
	isNavigationOpen: boolean;
	isNavigationHidden: boolean;
	isToolsOpen: boolean;
	isToolsHidden: boolean;
};

export const initialState: LayoutState = {
	activeHref: undefined,
	pageTitle: undefined,
	breadcrumbs: [],
	navigationItems: [],
	isNavigationOpen: false,
	isNavigationHidden: false,
	isToolsOpen: false,
	isToolsHidden: false,
};

const layoutSlice = createSlice({
	name: "layout",
	initialState,
	reducers: {
		setActiveHref: (state, action) => {
			state.activeHref = action.payload;
		},
		setPageTitle: (state, action) => {
			state.pageTitle = action.payload;
		},
		setBreadcrumbs: (state, action) => {
			state.breadcrumbs = action.payload;
		},
		setNavigationItems: (state, action) => {
			state.navigationItems = action.payload;
		},
		setNavigationOpen: (state, action) => {
			state.isNavigationOpen = action.payload;
		},
		setNavigationHidden: (state, action) => {
			state.isNavigationHidden = action.payload;
		},
		setToolsOpen: (state, action) => {
			state.isToolsOpen = action.payload;
		},
		setToolsHidden: (state, action) => {
			state.isToolsHidden = action.payload;
		},
	},
});

export const {
	setActiveHref,
	setPageTitle,
	setBreadcrumbs,
	setNavigationItems,
	setNavigationOpen,
	setNavigationHidden,
	setToolsOpen,
	setToolsHidden,
} = layoutSlice.actions;

export const selectActiveHref = (state: RootState) => state.layout.activeHref;

export const selectIsNavigationOpen = (state: RootState) =>
	state.layout.isNavigationOpen;

export const selectisNavigationHidden = (state: RootState) =>
	state.layout.isNavigationHidden;

export const selectIsToolsOpen = (state: RootState) => state.layout.isToolsOpen;

export const selectIsToolsHidden = (state: RootState) =>
	state.layout.isToolsHidden;

export default layoutSlice.reducer;
