import React from 'react';

export interface LanBarcodeScanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarcodeScanSolid: React.FC<LanBarcodeScanSolidProps>;
export default LanBarcodeScanSolid;
