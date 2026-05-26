import React from 'react';

export interface LanBarcodeScanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarcodeScan: React.FC<LanBarcodeScanProps>;
export default LanBarcodeScan;
