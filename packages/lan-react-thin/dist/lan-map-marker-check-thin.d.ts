import React from 'react';

export interface LanMapMarkerCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerCheckThin(props: LanMapMarkerCheckThinProps): React.ReactElement;
export default LanMapMarkerCheckThin;
