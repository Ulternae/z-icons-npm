import React from 'react';

export interface LanSquare9RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare9Regular: React.FC<LanSquare9RegularProps>;
export default LanSquare9Regular;
