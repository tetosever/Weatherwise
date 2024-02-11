package com.weatherwise.cities.payload;

public class ApiResponse {
    private String message;
    private String description;
	private int status;
	private Object data;
	
	public ApiResponse(int status, Object data) {
		this.status = status;
		this.data = data;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
}
