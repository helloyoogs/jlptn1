// import {array} from "zod";
// import React from "react";
//
// interface mainMenuList {
//     title: string,
//     description: string,
//     image: string,
//     isDisabled: boolean
// }
//
// interface sidePanelProps {
//     isShowSidePanel: boolean;
//     setIsShowSidePanel: (value: boolean) => void;
//     showSidePanelAccordionIdx: Array<number>;
//     setShowSidePanelAccordionIdx: (value: Array<number>) => void;
//     activeSidePanelAccordionIdx: { first: number | null; second: number |null};
//     setActiveSidePanelAccordionIdx: (value: { first: number; second: number }) => void;
//     data: Array<any>;
//     setIsActivePopup: (value: boolean) => void;
// }
//
//
// interface showSidePanelProps {
//     isShowSidePanel: boolean,
//     setIsShowSidePanel: Function,
// }
//
// interface showSidePanelAccordionProps {
//     showSidePanelAccordionIdx: Array<number>;
//     setShowSidePanelAccordionIdx: Function;
//     activeSidePanelAccordionIdx: { first: number | null; second: number |null}; // Specify the structure
//     setActiveSidePanelAccordionIdx: Function;
//     data: Array<any>;
// }
//
// interface imageButtonProps {
//     image:string,
//     title:string,
//     classList?:string,
//     imagePosition?:string,
//     onClick?:MouseEvent<HTMLButtonElement>
// }
//
// interface selectBoxProps {
//     label:string,
//     isShowSelectBox:string,
//     setIsShowSelectBox:Function,
//     isDisabled:boolean,
//     width?:string,
//     classList?:string
// }
//
// interface containerBoxRowProps {
//     children : React.ReactNode,
//     justifyContent?:string,
//     alignItems?:string,
//     marginBottom?:string,
//     marginTop?:string,
//     width?:string,
//     gap?:string,
//     classList?:string
// }
//
// interface customInputProps {
//     type:string,
//     placeholder:string,
//     label?: string | undefined,
//     value:any,
//     step?:string,
//     classList?:string
// }
//
// interface buttonProps {
//     title:string,
//     className:string,
//     onClick:Function,
// }
//
// interface checkBoxProps {
//     label :string,
//     value:any,
// }