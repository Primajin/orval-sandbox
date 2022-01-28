import Axios, {AxiosRequestConfig} from 'axios';

export const browser = Axios.create({baseURL: "api.example.com"});

export const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
	const source = Axios.CancelToken.source();
	const promise = browser({...config, cancelToken: source.token})
		.then(({data}: {data: T}) => data);

	// @ts-expect-error TS2339: Property 'cancel' does not exist on type 'Promise<T>'.
	promise.cancel = () => {
		source.cancel('Request was cancelled');
	};

	return promise;
};
