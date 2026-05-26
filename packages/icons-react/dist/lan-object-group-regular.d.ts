import React from 'react';

export interface LanObjectGroupRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectGroupRegular: React.FC<LanObjectGroupRegularProps>;
export default LanObjectGroupRegular;
