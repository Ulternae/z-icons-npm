import React from 'react';

export interface LanSquareDashedCirclePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDashedCirclePlusRegular: React.FC<LanSquareDashedCirclePlusRegularProps>;
export default LanSquareDashedCirclePlusRegular;
