import React from 'react';

export interface LanZProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanZ: React.FC<LanZProps>;
export default LanZ;
