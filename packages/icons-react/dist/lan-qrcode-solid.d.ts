import React from 'react';

export interface LanQrcodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQrcodeSolid: React.FC<LanQrcodeSolidProps>;
export default LanQrcodeSolid;
