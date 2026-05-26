import React from 'react';

export interface LanEnvelopeRibbonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeRibbonThin: React.FC<LanEnvelopeRibbonThinProps>;
export default LanEnvelopeRibbonThin;
