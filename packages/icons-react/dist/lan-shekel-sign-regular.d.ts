import React from 'react';

export interface LanShekelSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShekelSignRegular: React.FC<LanShekelSignRegularProps>;
export default LanShekelSignRegular;
