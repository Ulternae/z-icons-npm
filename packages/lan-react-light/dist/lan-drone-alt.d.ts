import React from 'react';

export interface LanDroneAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDroneAlt(props: LanDroneAltProps): React.ReactElement;
export default LanDroneAlt;
