import React from 'react';

export interface LanFileSignatureRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileSignatureRegular: React.FC<LanFileSignatureRegularProps>;
export default LanFileSignatureRegular;
