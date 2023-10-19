import { RootState } from "@/app/store";
import { BreadcrumbGroupProps } from "@cloudscape-design/components/breadcrumb-group";
import { SideNavigationProps } from "@cloudscape-design/components/side-navigation";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type LayoutState = {
	activeHref?: string;
	pageTitle?: string;
	breadcrumbs?: BreadcrumbGroupProps.Item[];
	navigationItems?: SideNavigationProps.Item[];
	isNavigationOpen: boolean;
	isNavigationHidden: boolean;
	isToolsOpen: boolean;
	isToolsHidden: boolean;
};

const initialState: LayoutState = {
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
		setActiveHref: (state, action: PayloadAction<string>) => {
			state.activeHref = action.payload;
		},
		setPageTitle: (state, action: PayloadAction<string>) => {
			state.pageTitle = action.payload;
		},
		setBreadcrumbs: (
			state,
			action: PayloadAction<BreadcrumbGroupProps.Item[]>,
		) => {
			state.breadcrumbs = action.payload;
		},
		setNavigationItems: (state, action) => {
			state.navigationItems = action.payload;
		},
		setNavigationOpen: (state, action: PayloadAction<boolean>) => {
			state.isNavigationOpen = action.payload;
		},
		setNavigationHidden: (state, action: PayloadAction<boolean>) => {
			state.isNavigationHidden = action.payload;
		},
		setToolsOpen: (state, action: PayloadAction<boolean>) => {
			state.isToolsOpen = action.payload;
		},
		setToolsHidden: (state, action: PayloadAction<boolean>) => {
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

export const selectNavigationHidden = (state: RootState) =>
	state.layout.isNavigationHidden;

export const selectNavigationOpen = (state: RootState) =>
	state.layout.isNavigationOpen;

export const selectToolsHidden = (state: RootState) =>
	state.layout.isToolsHidden;

export const selectToolsOpen = (state: RootState) => state.layout.isToolsOpen;

export const layoutReducer = layoutSlice.reducer;
