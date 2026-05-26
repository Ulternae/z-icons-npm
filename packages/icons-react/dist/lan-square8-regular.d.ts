import React from 'react';

export interface LanSquare8RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare8Regular: React.FC<LanSquare8RegularProps>;
export default LanSquare8Regular;
