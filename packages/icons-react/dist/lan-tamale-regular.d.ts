import React from 'react';

export interface LanTamaleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTamaleRegular: React.FC<LanTamaleRegularProps>;
export default LanTamaleRegular;
