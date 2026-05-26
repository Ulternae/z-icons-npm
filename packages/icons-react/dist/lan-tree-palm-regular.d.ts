import React from 'react';

export interface LanTreePalmRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreePalmRegular: React.FC<LanTreePalmRegularProps>;
export default LanTreePalmRegular;
