import React from 'react';

export interface LanMapMarkerMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerMinus(props: LanMapMarkerMinusProps): React.ReactElement;
export default LanMapMarkerMinus;
