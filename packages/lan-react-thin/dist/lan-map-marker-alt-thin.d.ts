import React from 'react';

export interface LanMapMarkerAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerAltThin(props: LanMapMarkerAltThinProps): React.ReactElement;
export default LanMapMarkerAltThin;
