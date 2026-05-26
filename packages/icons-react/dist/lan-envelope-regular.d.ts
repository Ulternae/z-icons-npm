import React from 'react';

export interface LanEnvelopeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeRegular: React.FC<LanEnvelopeRegularProps>;
export default LanEnvelopeRegular;
