import React from 'react';

export interface LanNfcSignalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcSignal: React.FC<LanNfcSignalProps>;
export default LanNfcSignal;
