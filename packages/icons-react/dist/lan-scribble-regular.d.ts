import React from 'react';

export interface LanScribbleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScribbleRegular: React.FC<LanScribbleRegularProps>;
export default LanScribbleRegular;
