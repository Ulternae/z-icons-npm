import React from 'react';

export interface LanMugHotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugHot: React.FC<LanMugHotProps>;
export default LanMugHot;
