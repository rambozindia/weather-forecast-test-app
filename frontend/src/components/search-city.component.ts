import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
  }
})
export default class SearchCity extends Vue {

  selectedPlace: { lat: number; lng: number } | null = null;

  placeChanged(place: any) {
    this.selectedPlace = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    this.$emit("placeChanged",this.selectedPlace);
  }

  handleMapClick(event: any) {

    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    this.selectedPlace = { lat, lng };
    this.$emit("placeChanged",this.selectedPlace);
  }

}