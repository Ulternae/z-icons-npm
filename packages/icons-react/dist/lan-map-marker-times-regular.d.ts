import React from 'react';

export interface LanMapMarkerTimesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerTimesRegular: React.FC<LanMapMarkerTimesRegularProps>;
export default LanMapMarkerTimesRegular;
