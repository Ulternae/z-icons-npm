import React from 'react';

export interface LanSignatureRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignatureRegular: React.FC<LanSignatureRegularProps>;
export default LanSignatureRegular;
