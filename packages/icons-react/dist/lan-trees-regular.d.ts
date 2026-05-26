import React from 'react';

export interface LanTreesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreesRegular: React.FC<LanTreesRegularProps>;
export default LanTreesRegular;
