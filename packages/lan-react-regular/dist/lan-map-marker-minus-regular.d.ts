import React from 'react';

export interface LanMapMarkerMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerMinusRegular(props: LanMapMarkerMinusRegularProps): React.ReactElement;
export default LanMapMarkerMinusRegular;
