import React from 'react';

export interface LanArrowSquareUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowSquareUp: React.FC<LanArrowSquareUpProps>;
export default LanArrowSquareUp;
