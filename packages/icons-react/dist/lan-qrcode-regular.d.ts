import React from 'react';

export interface LanQrcodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQrcodeRegular: React.FC<LanQrcodeRegularProps>;
export default LanQrcodeRegular;
