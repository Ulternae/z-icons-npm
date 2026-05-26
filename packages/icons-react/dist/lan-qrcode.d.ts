import React from 'react';

export interface LanQrcodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQrcode: React.FC<LanQrcodeProps>;
export default LanQrcode;
