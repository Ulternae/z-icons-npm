import React from 'react';

export interface LanDoveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDoveRegular: React.FC<LanDoveRegularProps>;
export default LanDoveRegular;
