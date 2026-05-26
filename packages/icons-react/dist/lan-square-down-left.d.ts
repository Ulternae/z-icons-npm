import React from 'react';

export interface LanSquareDownLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDownLeft: React.FC<LanSquareDownLeftProps>;
export default LanSquareDownLeft;
