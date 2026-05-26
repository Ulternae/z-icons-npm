import React from 'react';

export interface LanSquareDownRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDownRight: React.FC<LanSquareDownRightProps>;
export default LanSquareDownRight;
