import React from 'react';

export interface LanFalafelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFalafelRegular: React.FC<LanFalafelRegularProps>;
export default LanFalafelRegular;
