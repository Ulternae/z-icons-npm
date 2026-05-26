import React from 'react';

export interface LanDrumSteelpanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrumSteelpan: React.FC<LanDrumSteelpanProps>;
export default LanDrumSteelpan;
