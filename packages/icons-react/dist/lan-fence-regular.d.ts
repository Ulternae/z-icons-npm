import React from 'react';

export interface LanFenceRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFenceRegular: React.FC<LanFenceRegularProps>;
export default LanFenceRegular;
