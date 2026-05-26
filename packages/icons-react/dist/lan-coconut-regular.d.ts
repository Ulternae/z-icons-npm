import React from 'react';

export interface LanCoconutRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoconutRegular: React.FC<LanCoconutRegularProps>;
export default LanCoconutRegular;
