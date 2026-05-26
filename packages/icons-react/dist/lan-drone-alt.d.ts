import React from 'react';

export interface LanDroneAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDroneAlt: React.FC<LanDroneAltProps>;
export default LanDroneAlt;
