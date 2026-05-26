import React from 'react';

export interface LanEnvelopeRibbonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeRibbon: React.FC<LanEnvelopeRibbonProps>;
export default LanEnvelopeRibbon;
