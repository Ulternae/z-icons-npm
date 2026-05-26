import React from 'react';

export interface LanSignatureProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignature: React.FC<LanSignatureProps>;
export default LanSignature;
