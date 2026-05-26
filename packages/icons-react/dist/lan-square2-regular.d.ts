import React from 'react';

export interface LanSquare2RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare2Regular: React.FC<LanSquare2RegularProps>;
export default LanSquare2Regular;
