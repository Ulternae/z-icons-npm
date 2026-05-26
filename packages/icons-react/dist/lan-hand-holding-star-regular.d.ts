import React from 'react';

export interface LanHandHoldingStarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingStarRegular: React.FC<LanHandHoldingStarRegularProps>;
export default LanHandHoldingStarRegular;
