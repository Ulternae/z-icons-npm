import React from 'react';

export interface LanTagRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTagRegular: React.FC<LanTagRegularProps>;
export default LanTagRegular;
