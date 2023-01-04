import React, { useState } from 'react';

const useFlip = (initalStatus = true) => {
	const [ state, setState ] = useState(initalStatus);
	const flip = () => {
		setState((state) => !state);
	};
	return [ state, flip ];
};
export default useFlip;
