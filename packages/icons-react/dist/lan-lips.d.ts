import React from 'react';

export interface LanLipsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLips: React.FC<LanLipsProps>;
export default LanLips;
