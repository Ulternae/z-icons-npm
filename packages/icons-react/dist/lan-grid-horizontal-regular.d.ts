import React from 'react';

export interface LanGridHorizontalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridHorizontalRegular: React.FC<LanGridHorizontalRegularProps>;
export default LanGridHorizontalRegular;
