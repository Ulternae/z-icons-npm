import React from 'react';

export interface LanMapMarkerCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerCheck(props: LanMapMarkerCheckProps): React.ReactElement;
export default LanMapMarkerCheck;
