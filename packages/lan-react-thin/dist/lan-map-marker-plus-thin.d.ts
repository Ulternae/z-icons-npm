import React from 'react';

export interface LanMapMarkerPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerPlusThin(props: LanMapMarkerPlusThinProps): React.ReactElement;
export default LanMapMarkerPlusThin;
