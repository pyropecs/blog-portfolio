import {uid}from 'uid';

const NUMBER_OF_BYTES = 32;

export function generateRandomId(){
return uid(NUMBER_OF_BYTES)        
}