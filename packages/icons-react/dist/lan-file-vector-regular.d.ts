import React from 'react';

export interface LanFileVectorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileVectorRegular: React.FC<LanFileVectorRegularProps>;
export default LanFileVectorRegular;
