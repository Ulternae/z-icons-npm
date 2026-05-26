import React from 'react';

export interface LanGProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanG: React.FC<LanGProps>;
export default LanG;
