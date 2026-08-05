import React from 'react';

export interface LanMapMarkerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerThin(props: LanMapMarkerThinProps): React.ReactElement;
export default LanMapMarkerThin;
