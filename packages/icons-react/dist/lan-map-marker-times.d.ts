import React from 'react';

export interface LanMapMarkerTimesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarkerTimes: React.FC<LanMapMarkerTimesProps>;
export default LanMapMarkerTimes;
