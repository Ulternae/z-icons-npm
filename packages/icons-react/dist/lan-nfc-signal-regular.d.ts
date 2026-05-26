import React from 'react';

export interface LanNfcSignalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcSignalRegular: React.FC<LanNfcSignalRegularProps>;
export default LanNfcSignalRegular;
