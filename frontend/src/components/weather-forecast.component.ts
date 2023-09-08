import WeatherService, { ForecastModel } from '@/services/weather-service.service';
import { ErrorModel } from '@/shared/backend-api';
import { Options, Vue } from 'vue-class-component';
import { Inject } from 'vue-property-decorator';

@Options({
  props: {
    selectedPlace: Object
  },
  watch: {
    selectedPlace(val) {
      this._selectedPlace = val;
      this.updateWeather();
    }
  }
})
export default class WeatherForecast extends Vue {

  @Inject('weatherService')
  public weatherService!: WeatherService;
  public forecastData: ForecastModel | null= null;
  public _selectedPlace: { lat: number; lng: number } | null = null;
  public errorMsg: String | null = null;

  mounted() {
    // TODO - use the latitude and longitude from the search city component
    // TODO - display the weather forecast in the template
    // TODO - Error handling, if the API call fails we should display an error message
    
  }
  updateWeather(){
    if(this._selectedPlace != null){
      const { lat, lng } = this._selectedPlace;
      this.weatherService.getWeatherForecast(lat, lng).then((res) => {
        console.log(res);
        this.forecastData = res;
      })
      .catch((error: ErrorModel) => {
        this.forecastData = null;
        this.errorMsg = error.errorMessage;
        console.error('Failed to update weather:', error);
      });
    }
  }

}


