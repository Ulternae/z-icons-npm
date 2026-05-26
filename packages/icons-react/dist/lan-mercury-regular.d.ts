import React from 'react';

export interface LanMercuryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMercuryRegular: React.FC<LanMercuryRegularProps>;
export default LanMercuryRegular;
