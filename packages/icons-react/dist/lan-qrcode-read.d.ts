import React from 'react';

export interface LanQrcodeReadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQrcodeRead: React.FC<LanQrcodeReadProps>;
export default LanQrcodeRead;
