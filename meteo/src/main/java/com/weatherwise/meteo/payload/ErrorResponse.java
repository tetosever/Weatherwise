package com.weatherwise.meteo.payload;




public class ErrorResponse {
	private String message;
	private Object errors;
	private int status;
	
	public ErrorResponse(String message, Object errors, int status) {
		this.message = message;
		this.errors = errors;
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Object getErrors() {
		return errors;
	}
	public void setErrors(Object errors) {
		this.errors = errors;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
}
