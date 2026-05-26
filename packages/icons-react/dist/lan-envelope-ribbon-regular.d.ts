import React from 'react';

export interface LanEnvelopeRibbonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeRibbonRegular: React.FC<LanEnvelopeRibbonRegularProps>;
export default LanEnvelopeRibbonRegular;
