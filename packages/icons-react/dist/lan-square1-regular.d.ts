import React from 'react';

export interface LanSquare1RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare1Regular: React.FC<LanSquare1RegularProps>;
export default LanSquare1Regular;
