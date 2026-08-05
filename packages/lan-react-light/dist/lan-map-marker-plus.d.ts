import React from 'react';

export interface LanMapMarkerPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerPlus(props: LanMapMarkerPlusProps): React.ReactElement;
export default LanMapMarkerPlus;
