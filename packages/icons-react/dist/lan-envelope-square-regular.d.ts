import React from 'react';

export interface LanEnvelopeSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeSquareRegular: React.FC<LanEnvelopeSquareRegularProps>;
export default LanEnvelopeSquareRegular;
