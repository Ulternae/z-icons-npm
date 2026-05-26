import React from 'react';

export interface LanHeadSideCircuitRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideCircuitRegular: React.FC<LanHeadSideCircuitRegularProps>;
export default LanHeadSideCircuitRegular;
