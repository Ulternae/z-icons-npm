import React from 'react';

export interface LanArrowSquareLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowSquareLeft: React.FC<LanArrowSquareLeftProps>;
export default LanArrowSquareLeft;
