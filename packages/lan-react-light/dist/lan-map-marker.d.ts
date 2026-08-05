import React from 'react';

export interface LanMapMarkerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarker(props: LanMapMarkerProps): React.ReactElement;
export default LanMapMarker;
