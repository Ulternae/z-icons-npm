import React from 'react';

export interface LanMapMarkerTimesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerTimesThin(props: LanMapMarkerTimesThinProps): React.ReactElement;
export default LanMapMarkerTimesThin;
