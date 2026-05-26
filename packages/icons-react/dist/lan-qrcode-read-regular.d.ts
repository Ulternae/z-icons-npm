import React from 'react';

export interface LanQrcodeReadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQrcodeReadRegular: React.FC<LanQrcodeReadRegularProps>;
export default LanQrcodeReadRegular;
