import React from 'react';

export interface LanNfcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfc: React.FC<LanNfcProps>;
export default LanNfc;
