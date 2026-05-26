import React from 'react';

export interface LanAlignCenterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlignCenter: React.FC<LanAlignCenterProps>;
export default LanAlignCenter;
