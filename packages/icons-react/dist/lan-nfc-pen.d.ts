import React from 'react';

export interface LanNfcPenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcPen: React.FC<LanNfcPenProps>;
export default LanNfcPen;
