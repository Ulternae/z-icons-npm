import React from 'react';

export interface LanCandyBarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCandyBar: React.FC<LanCandyBarProps>;
export default LanCandyBar;
