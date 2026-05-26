import React from 'react';

export interface LanTickProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTick: React.FC<LanTickProps>;
export default LanTick;
