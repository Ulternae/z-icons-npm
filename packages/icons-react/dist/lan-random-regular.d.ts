import React from 'react';

export interface LanRandomRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRandomRegular: React.FC<LanRandomRegularProps>;
export default LanRandomRegular;
