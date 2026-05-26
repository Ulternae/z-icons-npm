import React from 'react';

export interface LanBoxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxRegular: React.FC<LanBoxRegularProps>;
export default LanBoxRegular;
