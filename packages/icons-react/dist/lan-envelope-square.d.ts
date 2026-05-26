import React from 'react';

export interface LanEnvelopeSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeSquare: React.FC<LanEnvelopeSquareProps>;
export default LanEnvelopeSquare;
