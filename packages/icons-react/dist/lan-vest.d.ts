import React from 'react';

export interface LanVestProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVest: React.FC<LanVestProps>;
export default LanVest;
