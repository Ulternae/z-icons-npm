import React from 'react';

export interface LanSackDollarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSackDollar: React.FC<LanSackDollarProps>;
export default LanSackDollar;
