import React from 'react';

export interface LanVialRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVialRegular: React.FC<LanVialRegularProps>;
export default LanVialRegular;
