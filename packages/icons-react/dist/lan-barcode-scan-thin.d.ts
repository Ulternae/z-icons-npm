import React from 'react';

export interface LanBarcodeScanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarcodeScanThin: React.FC<LanBarcodeScanThinProps>;
export default LanBarcodeScanThin;
