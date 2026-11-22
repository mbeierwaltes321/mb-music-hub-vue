/**
 * Represents a data response returned from 
 */
export interface HubserverServiceResponse<T> {
    data: T | null
    success: boolean,
}