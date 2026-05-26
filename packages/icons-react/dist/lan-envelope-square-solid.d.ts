import React from 'react';

export interface LanEnvelopeSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopeSquareSolid: React.FC<LanEnvelopeSquareSolidProps>;
export default LanEnvelopeSquareSolid;
