import React from 'react';

export interface LanOmRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOmRegular: React.FC<LanOmRegularProps>;
export default LanOmRegular;
