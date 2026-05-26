import React from 'react';

export interface LanNfcSignalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcSignalThin: React.FC<LanNfcSignalThinProps>;
export default LanNfcSignalThin;
