import {ChangeEvent, InputHTMLAttributes, KeyboardEvent} from "react";
import {InputProps} from "antd/lib/input";

export interface PhoneNumber {
	countryCode?: number | null;
	areaCode?: number | null;
	phoneNumber?: string | null;
	isoCode?: string;

	valid?(): boolean;
}

export interface ReactPhoneInputProps {
	inputProps?: InputHTMLAttributes<HTMLInputElement>,
	searchPlaceholder?: string,
	searchNotFound?: string,
	dropdownClass?: string,
	enableSearch?: boolean,
	disableDropdown?: boolean,
	country?: string,
	onlyCountries?: string[],
	excludeCountries?: string[],
	preferredCountries?: string[],
}

export interface PhoneInputProps extends Omit<InputProps, "value" | "onChange"> {
	/**
	 * NOTE: Interfaces of events may differ from the original interfaces
	 * of dependencies, so be careful and follow the linked documentation.
	 */

	value?: PhoneNumber | string;
	country?: string;

	onMount?(value: PhoneNumber): void;

	onBlur?(event: ChangeEvent<HTMLInputElement>): void;

	onFocus?(event: ChangeEvent<HTMLInputElement>): void;

	onInput?(event: ChangeEvent<HTMLInputElement>): void;

	onKeyDown?(event: KeyboardEvent<HTMLInputElement>): void;

	onChange?(value: PhoneNumber, event: ChangeEvent<HTMLInputElement>): void;
}
