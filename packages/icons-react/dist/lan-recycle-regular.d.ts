import React from 'react';

export interface LanRecycleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRecycleRegular: React.FC<LanRecycleRegularProps>;
export default LanRecycleRegular;
