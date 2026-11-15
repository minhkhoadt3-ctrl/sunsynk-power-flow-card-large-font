import { svg } from 'lit';

export const createTextWithPopup = (
	id: string,
	x: number | string,
	y: number | string,
	displayCondition: boolean,
	className: string,
	fill: string,
	text: string,
	onClick: (e: Event) => void,
	hideOnCondition: boolean = false, // Default behavior: hide when condition is false
	fontWeight?: number,
) => {
	return svg`
        <a href="#" @click=${onClick}>
            <text id="${id}" x="${x}" y="${y}" 
                display="${hideOnCondition ? (displayCondition ? 'none' : 'inline') : displayCondition ? 'inline' : 'none'}"
                class="${className}" 
                fill="${fill}"
                font-weight="${fontWeight ?? 400}">
                ${text}
            </text>
        </a>
    `;
};

export const renderText = (
	id: string,
	x: number | string,
	y: number | string,
	displayCondition: boolean,
	className: string,
	fill: string,
	text: string,
	hideOnCondition: boolean = false, // Default behavior: hide when condition is false
) => {
	return svg`
        <text id="${id}" x="${x}" y="${y}" 
            display="${hideOnCondition ? (displayCondition ? 'none' : 'inline') : displayCondition ? 'inline' : 'none'}"
            class="${className}" 
            fill="${fill}">
            ${text}
        </text>
    `;
};
