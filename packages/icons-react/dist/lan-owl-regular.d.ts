import React from 'react';

export interface LanOwlRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOwlRegular: React.FC<LanOwlRegularProps>;
export default LanOwlRegular;
