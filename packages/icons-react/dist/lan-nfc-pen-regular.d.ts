import React from 'react';

export interface LanNfcPenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcPenRegular: React.FC<LanNfcPenRegularProps>;
export default LanNfcPenRegular;
