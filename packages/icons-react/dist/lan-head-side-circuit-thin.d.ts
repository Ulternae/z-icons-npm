import React from 'react';

export interface LanHeadSideCircuitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideCircuitThin: React.FC<LanHeadSideCircuitThinProps>;
export default LanHeadSideCircuitThin;
