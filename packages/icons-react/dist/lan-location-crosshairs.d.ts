import React from 'react';

export interface LanLocationCrosshairsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLocationCrosshairs: React.FC<LanLocationCrosshairsProps>;
export default LanLocationCrosshairs;
