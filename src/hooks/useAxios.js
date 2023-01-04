import React, { useState } from 'react';
import uuid from 'uuid';
import axios from 'axios';

const useAxios = (url) => {
	const [ state, setState ] = useState([]);
	const getData = async (name = '') => {
		const response = await axios.get(`${url}${name}`);
		setState((state) => [ ...state, { ...response.data, id: uuid() } ]);
	};
	return [ state, getData ];
};
export default useAxios;
