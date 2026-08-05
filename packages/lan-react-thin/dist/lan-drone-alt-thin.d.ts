import React from 'react';

export interface LanDroneAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDroneAltThin(props: LanDroneAltThinProps): React.ReactElement;
export default LanDroneAltThin;
