import React from 'react';

export interface LanSquare6RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare6Regular: React.FC<LanSquare6RegularProps>;
export default LanSquare6Regular;
