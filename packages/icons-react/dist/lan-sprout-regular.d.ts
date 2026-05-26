import React from 'react';

export interface LanSproutRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSproutRegular: React.FC<LanSproutRegularProps>;
export default LanSproutRegular;
