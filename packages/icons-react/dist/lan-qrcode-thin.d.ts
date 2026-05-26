import React from 'react';

export interface LanQrcodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQrcodeThin: React.FC<LanQrcodeThinProps>;
export default LanQrcodeThin;
