import React, { PureComponent } from "react";
import MapComponent from "./MapComponent";

class FancyMap extends PureComponent {
  state = {
    isMarkerShown: true,
    latitude: undefined,
    longitude: undefined,
    loading: false
  };

  componentDidMount() {
    
    const success = (pos) => {
      let coords = pos.coords;
      console.log(pos);
      this.setState({
        latitude: coords.latitude,
        longitude: coords.longitude
      })
      console.log('from state:', this.state)
    }
    
    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }

  render() {
    return (
      <div>
        <MapComponent
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
        />
      </div>
    );
  }
}
export default FancyMap;
