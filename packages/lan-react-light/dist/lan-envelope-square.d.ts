import React from 'react';

export interface LanEnvelopeSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeSquare(props: LanEnvelopeSquareProps): React.ReactElement;
export default LanEnvelopeSquare;
