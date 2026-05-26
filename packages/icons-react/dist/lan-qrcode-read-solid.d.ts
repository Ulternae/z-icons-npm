import React from 'react';

export interface LanQrcodeReadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQrcodeReadSolid: React.FC<LanQrcodeReadSolidProps>;
export default LanQrcodeReadSolid;
