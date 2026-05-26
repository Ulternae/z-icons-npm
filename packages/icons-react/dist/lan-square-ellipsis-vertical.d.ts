import React from 'react';

export interface LanSquareEllipsisVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareEllipsisVertical: React.FC<LanSquareEllipsisVerticalProps>;
export default LanSquareEllipsisVertical;
