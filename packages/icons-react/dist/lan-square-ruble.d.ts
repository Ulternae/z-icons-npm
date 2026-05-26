import React from 'react';

export interface LanSquareRubleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRuble: React.FC<LanSquareRubleProps>;
export default LanSquareRuble;
