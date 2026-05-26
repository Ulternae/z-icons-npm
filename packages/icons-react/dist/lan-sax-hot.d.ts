import React from 'react';

export interface LanSaxHotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSaxHot: React.FC<LanSaxHotProps>;
export default LanSaxHot;
