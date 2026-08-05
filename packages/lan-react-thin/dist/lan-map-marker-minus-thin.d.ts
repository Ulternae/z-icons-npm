import React from 'react';

export interface LanMapMarkerMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkerMinusThin(props: LanMapMarkerMinusThinProps): React.ReactElement;
export default LanMapMarkerMinusThin;
