import React from 'react';

export interface LanFluteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFluteRegular: React.FC<LanFluteRegularProps>;
export default LanFluteRegular;
