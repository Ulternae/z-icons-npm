import React from 'react';

export interface LanMapMarkerTimesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerTimesRegular(props: LanMapMarkerTimesRegularProps): React.ReactElement;
export default LanMapMarkerTimesRegular;
