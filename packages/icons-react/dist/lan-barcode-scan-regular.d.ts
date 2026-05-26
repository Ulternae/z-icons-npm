import React from 'react';

export interface LanBarcodeScanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarcodeScanRegular: React.FC<LanBarcodeScanRegularProps>;
export default LanBarcodeScanRegular;
