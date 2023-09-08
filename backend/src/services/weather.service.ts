import axios from "axios";
export interface ForecastModel {
    latitude: number,
    longitude: number,
    elevation: number,
    current_weather: {
        temperature: number,
        windspeed: number,
        winddirection: number,
        weathercode: number,
        time: Date
    }
}


export async function getWeatherForecast(lat: number, lng: number): Promise<ForecastModel> {

    // TODO: make a call to this API with latitude and longitude from the frontend
    // use axios to make the call
    //  https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`;

    try {
        const response = await axios.get<ForecastModel>(url);
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}
