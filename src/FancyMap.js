import React, { PureComponent } from "react";
import MapComponent from "./MapComponent";
import Loading from './Loading';

class FancyMap extends PureComponent {
  state = {
    isMarkerShown: true,
    latitude: 1,
    longitude: 2,
    loading: true
  };

  componentDidMount() {
    this.getCoords();
  }

  getCoords = () => {
    const success = pos => {
      let coords = pos.coords;
      console.log(pos);
      this.setState({
        latitude: coords.latitude,
        longitude: coords.longitude,
        loading: false,
        isMarkerShown: true
      });
    };

    const error = err => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  };

  render() {
    return (
      <div>
        {this.state.loading === true ? (
          <Loading />
        ) : (
          <MapComponent
            isMarkerShown={this.state.isMarkerShown}
            latitude={this.state.latitude}
            longitude={this.state.longitude}
            loading={this.state.loading}
          />
        )}
      </div>
    );
  }
}
export default FancyMap;
