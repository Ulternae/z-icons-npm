import React from 'react';

export interface LanCircleEllipsisRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEllipsisRegular: React.FC<LanCircleEllipsisRegularProps>;
export default LanCircleEllipsisRegular;
