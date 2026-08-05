import React from 'react';

export interface LanMarkerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarker(props: LanMarkerProps): React.ReactElement;
export default LanMarker;
