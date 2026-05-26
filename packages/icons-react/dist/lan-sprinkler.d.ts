import React from 'react';

export interface LanSprinklerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSprinkler: React.FC<LanSprinklerProps>;
export default LanSprinkler;
