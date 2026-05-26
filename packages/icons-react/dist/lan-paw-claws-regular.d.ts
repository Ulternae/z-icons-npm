import React from 'react';

export interface LanPawClawsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPawClawsRegular: React.FC<LanPawClawsRegularProps>;
export default LanPawClawsRegular;
