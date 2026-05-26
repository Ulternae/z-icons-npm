import React from 'react';

export interface LanCrowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrowRegular: React.FC<LanCrowRegularProps>;
export default LanCrowRegular;
