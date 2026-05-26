import React from 'react';

export interface LanAmpersandRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAmpersandRegular: React.FC<LanAmpersandRegularProps>;
export default LanAmpersandRegular;
