import React from 'react';

export interface LanPillsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPills: React.FC<LanPillsProps>;
export default LanPills;
