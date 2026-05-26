import React from 'react';

export interface LanSquareEllipsisRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareEllipsisRegular: React.FC<LanSquareEllipsisRegularProps>;
export default LanSquareEllipsisRegular;
