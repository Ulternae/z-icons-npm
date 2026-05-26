import React from 'react';

export interface LanSquare5RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare5Regular: React.FC<LanSquare5RegularProps>;
export default LanSquare5Regular;
