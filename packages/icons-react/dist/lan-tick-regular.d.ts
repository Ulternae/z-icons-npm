import React from 'react';

export interface LanTickRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTickRegular: React.FC<LanTickRegularProps>;
export default LanTickRegular;
