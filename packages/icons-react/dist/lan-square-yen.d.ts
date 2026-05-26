import React from 'react';

export interface LanSquareYenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareYen: React.FC<LanSquareYenProps>;
export default LanSquareYen;
