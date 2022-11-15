import { useEffect, useRef } from "react";
import { useState } from "react";
import "./select1.css";

const Icon = () => {
	return (
		<svg
			width="12"
			height="7"
			viewBox="0 0 12 7"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10.4599 0.270707C10.6296 0.0972844 10.8588 0 11.0976 0C11.3365 0 11.5657 0.0972844 11.7354 0.270707C11.8192 0.355868 11.8858 0.457377 11.9312 0.569327C11.9766 0.681278 12 0.801432 12 0.9228C12 1.04417 11.9766 1.16432 11.9312 1.27627C11.8858 1.38822 11.8192 1.48973 11.7354 1.57489L6.63843 6.72972C6.46831 6.9029 6.23896 7 6 7C5.76104 7 5.53169 6.9029 5.36157 6.72972L0.264583 1.57489C0.180785 1.48973 0.114238 1.38822 0.0688152 1.27627C0.023392 1.16432 0 1.04417 0 0.9228C0 0.801432 0.023392 0.681278 0.0688152 0.569327C0.114238 0.457377 0.180785 0.355868 0.264583 0.270707C0.43431 0.0972844 0.663508 0 0.902359 0C1.14121 0 1.37041 0.0972844 1.54013 0.270707L6.00196 4.4982L10.4599 0.270707Z"
				fill="#C4C4C4"
			/>
		</svg>
	);
};
const CloseIcon = () => {
	return (
		<svg height="20" width="20" viewBox="0 0 20 20">
			<path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
		</svg>
	);
};

const Select = ({ placeHolder, options, isMulti, isSearchable, onChange }) => {
	const [showMenu, setShowMenu] = useState(false);
	const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null);
	const [searchValue, setSearchValue] = useState("");
	const searchRef = useRef();
	const inputRef = useRef();
	useEffect(() => {
		setSearchValue("");
		if (showMenu && searchRef.current) {
			searchRef.current.focus();
		}
	}, [showMenu]);

	useEffect(() => {
		const handler = (e) => {
			if (inputRef.current && !inputRef.current.contains(e.target)) {
				setShowMenu(false);
			}
		};

		window.addEventListener("click", handler);
		return () => {
			window.removeEventListener("click", handler);
		};
	});
	const onSearch = (e) => {
		setSearchValue(e.target.value);
	};
	const getOptions = () => {
		if (!searchValue) {
			return options;
		}
		return options.filter(
			(option) =>
				option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
		);
	};

	const handleInputclick = (e) => {
		setShowMenu(!showMenu);
	};

	const onItemSelect = (option) => {
		let newValue;

		if (isMulti) {
			if (selectedValue.findIndex((o) => o.name === option.name) >= 0) {
				newValue = removeOption(option);
			} else {
				newValue = [...selectedValue, option];
			}
		} else {
			newValue = option;
		}
		setSelectedValue(newValue);
		onChange(newValue);
	};

	const getDisplay = () => {
		if (!selectedValue || selectedValue.length === 0) {
			return placeHolder;
		}
		if (isMulti) {
			return (
				<div className="dropdown-tags">
					{selectedValue.map((option) => (
						<div key={option.name} className="dropdown-tag-item">
							{option.label}
							<span
								onClick={(e) => onTagRemove(e, option)}
								className="dropdown-tag-close"
							>
								<CloseIcon />
							</span>
						</div>
					))}
				</div>
			);
		}
		return selectedValue.label;
	};

	const removeOption = (option) => {
		return selectedValue.filter((o) => o.name !== option.name);
	};
	const onTagRemove = (e, option) => {
		e.stopPropagation();
		setSelectedValue(removeOption(option));
		onChange(removeOption(option));
	};

	const isSelected = (option) => {
		if (isMulti) {
			return selectedValue.filter((o) => o.name === option.name).length > 0;
		}
		if (!selectedValue) {
			return false;
		}
		return selectedValue.label === option.label;
	};

	return (
		<div className="dropdown-container">
			<div ref={inputRef} onClick={handleInputclick} className="dropdown-input">
				<div className="dropdown-selected-value">{getDisplay()}</div>
				<div className="dropdown-tools">
					<div className="dropdown-tool">
						<Icon />
					</div>
				</div>
			</div>
			{showMenu && (
				<div className="dropdown-menu">
					{isSearchable && (
						<div className="search-box">
							<input onChange={onSearch} value={searchValue} ref={searchRef} />
						</div>
					)}
					{getOptions().map((item) => (
						<div
							key={item.name}
							className={`dropdown-item ${isSelected(item) && "selected"}`}
							onClick={() => onItemSelect(item)}
						>
							{item.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Select;
