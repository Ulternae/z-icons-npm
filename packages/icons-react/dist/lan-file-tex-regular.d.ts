import React from 'react';

export interface LanFileTexRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileTexRegular: React.FC<LanFileTexRegularProps>;
export default LanFileTexRegular;
