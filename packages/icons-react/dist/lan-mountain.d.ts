import React from 'react';

export interface LanMountainProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMountain: React.FC<LanMountainProps>;
export default LanMountain;
