import React from 'react';

export interface LanArrowSquareDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowSquareDown: React.FC<LanArrowSquareDownProps>;
export default LanArrowSquareDown;
