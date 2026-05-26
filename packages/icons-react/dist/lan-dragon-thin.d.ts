import React from 'react';

export interface LanDragonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDragonThin: React.FC<LanDragonThinProps>;
export default LanDragonThin;
