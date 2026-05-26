import React from 'react';

export interface LanCornerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCorner: React.FC<LanCornerProps>;
export default LanCorner;
