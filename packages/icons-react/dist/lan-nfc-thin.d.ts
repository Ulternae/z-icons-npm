import React from 'react';

export interface LanNfcThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcThin: React.FC<LanNfcThinProps>;
export default LanNfcThin;
