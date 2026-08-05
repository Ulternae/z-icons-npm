import React from 'react';

export interface LanMarkerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarkerThin(props: LanMarkerThinProps): React.ReactElement;
export default LanMarkerThin;
