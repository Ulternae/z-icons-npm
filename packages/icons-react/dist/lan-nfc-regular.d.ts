import React from 'react';

export interface LanNfcRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcRegular: React.FC<LanNfcRegularProps>;
export default LanNfcRegular;
