import React from 'react';

export interface LanCircleEllipsisVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEllipsisVertical: React.FC<LanCircleEllipsisVerticalProps>;
export default LanCircleEllipsisVertical;
