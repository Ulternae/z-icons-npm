import React from 'react';

export interface LanBedAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBedAlt: React.FC<LanBedAltProps>;
export default LanBedAlt;
