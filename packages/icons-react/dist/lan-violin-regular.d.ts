import React from 'react';

export interface LanViolinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanViolinRegular: React.FC<LanViolinRegularProps>;
export default LanViolinRegular;
