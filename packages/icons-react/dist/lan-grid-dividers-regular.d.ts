import React from 'react';

export interface LanGridDividersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridDividersRegular: React.FC<LanGridDividersRegularProps>;
export default LanGridDividersRegular;
