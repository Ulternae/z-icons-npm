import React from 'react';

export interface LanEnvelopeRibbonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeRibbonSolid: React.FC<LanEnvelopeRibbonSolidProps>;
export default LanEnvelopeRibbonSolid;
