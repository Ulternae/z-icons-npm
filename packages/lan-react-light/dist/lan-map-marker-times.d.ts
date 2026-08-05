import React from 'react';

export interface LanMapMarkerTimesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerTimes(props: LanMapMarkerTimesProps): React.ReactElement;
export default LanMapMarkerTimes;
