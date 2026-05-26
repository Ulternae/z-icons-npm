import React from 'react';

export interface LanNfcPenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcPenThin: React.FC<LanNfcPenThinProps>;
export default LanNfcPenThin;
