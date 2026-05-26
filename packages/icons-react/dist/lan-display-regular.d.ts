import React from 'react';

export interface LanDisplayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDisplayRegular: React.FC<LanDisplayRegularProps>;
export default LanDisplayRegular;
