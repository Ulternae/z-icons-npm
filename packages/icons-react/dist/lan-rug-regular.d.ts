import React from 'react';

export interface LanRugRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRugRegular: React.FC<LanRugRegularProps>;
export default LanRugRegular;
